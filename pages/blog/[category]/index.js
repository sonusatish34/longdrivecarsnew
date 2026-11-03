import React, { useState } from 'react';
import Head from 'next/head';
import Link from 'next/link';
import { GoDotFill } from 'react-icons/go';
import { getActiveBlogPosts, getPageNumber, paginatePosts } from '../../../utils/blogPosts';
import PostsListing from '../blogcomponents/PostsListing';
import BlogLayout from '../blogcomponents/BlogLayout';

const PAGE_SIZE = 20;

export default function CategoryPage({ category, posts, page, totalPages, canonicalUrl }) {
  const [searchQuery, setSearchQuery] = useState('');
  const filteredPosts = posts.filter((post) =>
    post.title.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div>
      <Head>
        <title>{`${category} stories | Long Drive Cars`}</title>
        <meta name="description" content={`Read Long Drive Cars travel and self-drive guides about ${category}.`} />
        <link rel="canonical" href={canonicalUrl} />
      </Head>
      <BlogLayout onSearch={setSearchQuery} catg={category}>
        <div className="xl:px-32 lg:px-12">
          <div className="lg:py-10 py-5 justify-center sm:justify-items-center px-[6px]">
            <h1 className="capitalize text-4xl text-center font-semibold lg:pt-3 pb-3 buch-font">{category}</h1>
            <ul className="flex justify-center items-center pt-2 gap-3">
              <li>Topic</li>
              <li><GoDotFill /></li>
              <li>{posts.length} stories</li>
            </ul>
            <div className="text-center flex justify-center lg:pt-10 pt-4">
              <PostsListing catg={category} data={filteredPosts} />
            </div>
          </div>
        </div>
        <nav aria-label={`${category} blog pages`} className="flex justify-center gap-3 py-8">
          {page > 1 && <Link href={`/blog/${category}?page=${page - 1}`}>Previous</Link>}
          {Array.from({ length: totalPages }, (_, index) => index + 1).map((pageNumber) => (
            <Link
              key={pageNumber}
              href={pageNumber === 1 ? `/blog/${category}` : `/blog/${category}?page=${pageNumber}`}
              aria-current={pageNumber === page ? 'page' : undefined}
            >
              {pageNumber}
            </Link>
          ))}
          {page < totalPages && <Link href={`/blog/${category}?page=${page + 1}`}>Next</Link>}
        </nav>
      </BlogLayout>
    </div>
  );
}

export async function getServerSideProps({ params, query }) {
  const category = String(params.category || '').toLowerCase();
  let allPosts = [];
  let loadFailed = false;
  try {
    const posts = await getActiveBlogPosts();
    allPosts = posts.filter((post) =>
      Array.isArray(post.categoryname) &&
      post.categoryname.some((name) => String(name).toLowerCase() === category)
    );
  } catch (error) {
    console.error(`Unable to load ${category} blog archive:`, error);
    loadFailed = true;
  }

  if (!loadFailed && allPosts.length === 0) return { notFound: true };
  const result = paginatePosts(allPosts, getPageNumber(query.page), PAGE_SIZE);
  return {
    props: {
      category,
      ...result,
      canonicalUrl: result.page === 1
        ? `https://www.longdrivecars.com/blog/${category}`
        : `https://www.longdrivecars.com/blog/${category}?page=${result.page}`,
    },
  };
}
