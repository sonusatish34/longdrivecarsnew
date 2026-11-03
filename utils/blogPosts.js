import { collection, getDocs, query, where } from 'firebase/firestore';
import { fireDb } from '../public/firebase';

const BLOG_CACHE_TTL = 10 * 60 * 1000;
const BLOG_STALE_TTL = 15 * 60 * 1000;
let cachedPosts;
let cachedAt = 0;

function toIsoString(value) {
  if (!value) return '';
  if (typeof value.toDate === 'function') return value.toDate().toISOString();
  if (value instanceof Date) return value.toISOString();
  if (typeof value === 'string') return value;
  if (typeof value.seconds === 'number') {
    return new Date(value.seconds * 1000).toISOString();
  }
  return '';
}

function serializeValue(value) {
  if (value === undefined) return null;
  if (value === null || ['string', 'number', 'boolean'].includes(typeof value)) {
    return value;
  }
  if (typeof value.toDate === 'function') {
    return {
      seconds: value.seconds,
      nanoseconds: value.nanoseconds || 0,
    };
  }
  if (value instanceof Date) return value.toISOString();
  if (Array.isArray(value)) return value.map(serializeValue);
  if (typeof value === 'object') {
    return Object.fromEntries(
      Object.entries(value).map(([key, nestedValue]) => [key, serializeValue(nestedValue)])
    );
  }
  return null;
}

export function serializeBlogPost(document) {
  const post = document.data();
  const createdAt = toIsoString(post.createdAt || post.time);
  const normalizeTags = (tags) =>
    Array.isArray(tags) ? tags : (tags ? [tags] : []);
  const author = typeof post.author === 'string'
    ? post.author
    : (post.author?.name || post.authorName || '');

  return {
    id: document.id,
    ...serializeValue(post),
    title: post.title || '',
    description: post.description || '',
    content: post.content || '',
    slug: post.slug || '',
    categoryname: Array.isArray(post.categoryname)
      ? post.categoryname
      : (post.categoryname ? [post.categoryname] : []),
    coverimages: post.coverimages || '',
    cialt: post.cialt || '',
    time: post.time?.seconds
      ? { seconds: post.time.seconds, nanoseconds: post.time.nanoseconds || 0 }
      : { seconds: Math.floor(new Date(createdAt || 0).getTime() / 1000) || 0 },
    createdAt,
    updatedAt: toIsoString(post.updatedAt),
    date: post.date || createdAt,
    author,
    cityTags: normalizeTags(post.cityTags || post.cities),
    areaTags: normalizeTags(post.areaTags || post.areas),
    shareImage: post.shareImage || post.share_image || post.coverimages || '',
    faqs: Array.isArray(post.faqs) ? serializeValue(post.faqs) : [],
    likes: Number(post.likes) || 0,
    comments: Array.isArray(post.comments) ? serializeValue(post.comments) : [],
  };
}

export async function getActiveBlogPosts() {
  const now = Date.now();
  if (cachedPosts && now - cachedAt < BLOG_CACHE_TTL) return cachedPosts;

  try {
    const postsQuery = query(
      collection(fireDb, 'blogPost'),
      where('blog_state', '==', 'active'),
      where('blogfor', '==', 'LDC')
    );
    const snapshot = await getDocs(postsQuery);
    const seenSlugs = new Set();
    cachedPosts = snapshot.docs
      .map(serializeBlogPost)
      .filter((post) => post.slug)
      .sort((a, b) => new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime())
      .filter((post) => {
        const slug = post.slug.toLowerCase();
        if (seenSlugs.has(slug)) return false;
        seenSlugs.add(slug);
        return true;
      });
    cachedAt = now;
    return cachedPosts;
  } catch (error) {
    if (cachedPosts && now - cachedAt < BLOG_STALE_TTL) {
      console.warn('Using cached blog posts after Firestore read failure:', error);
      return cachedPosts;
    }
    throw error;
  }
}

export function getPageNumber(value) {
  const parsedPage = Number.parseInt(Array.isArray(value) ? value[0] : value, 10);
  return Number.isInteger(parsedPage) && parsedPage > 0 ? parsedPage : 1;
}

export function paginatePosts(posts, page, pageSize = 20) {
  const totalPages = Math.max(1, Math.ceil(posts.length / pageSize));
  const currentPage = Math.min(page, totalPages);
  const start = (currentPage - 1) * pageSize;
  return {
    posts: posts.slice(start, start + pageSize),
    page: currentPage,
    totalPages,
  };
}
