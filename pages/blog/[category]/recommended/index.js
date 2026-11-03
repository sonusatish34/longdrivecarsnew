import React, { useState } from 'react';
import Head from 'next/head';
import Link from 'next/link';
import BlogLayout from '../../blogcomponents/BlogLayout';
import PostsListing from '../../blogcomponents/PostsListing';
import { getActiveBlogPosts, getPageNumber, paginatePosts } from '../../../../utils/blogPosts';

const PAGE_SIZE = 20;

export default function RecommendedCategoryPage({
  category,
  posts,
  page,
  totalPages,
  canonicalUrl,
}) {
  const [searchQuery, setSearchQuery] = useState('');
  const filteredPosts = posts.filter((post) =>
    post.title.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <BlogLayout onSearch={setSearchQuery} catg={category} recommended>
      <Head>
        <title>Recommended {category} stories | Long Drive Cars</title>
        <meta name="description" content={`Recommended Long Drive Cars travel guides about ${category}.`} />
        <link rel="canonical" href={canonicalUrl} />
      </Head>
      <main className="xl:px-32 lg:px-12 py-8">
        <h1 className="text-center text-3xl font-semibold capitalize">
          Recommended stories in {category}
        </h1>
        <PostsListing catg={category} data={filteredPosts} />
        <nav aria-label={`${category} recommended pages`} className="flex justify-center gap-3 py-8">
          {page > 1 && <Link href={`/blog/${category}/recommended?page=${page - 1}`}>Previous</Link>}
          {Array.from({ length: totalPages }, (_, index) => index + 1).map((pageNumber) => (
            <Link
              key={pageNumber}
              href={pageNumber === 1
                ? `/blog/${category}/recommended`
                : `/blog/${category}/recommended?page=${pageNumber}`}
              aria-current={pageNumber === page ? 'page' : undefined}
            >
              {pageNumber}
            </Link>
          ))}
          {page < totalPages && <Link href={`/blog/${category}/recommended?page=${page + 1}`}>Next</Link>}
        </nav>
      </main>
    </BlogLayout>
  );
}

export async function getServerSideProps({ params, query }) {
  const category = String(params.category || '').toLowerCase();
  let posts = [];
  let loadFailed = false;
  try {
    const allPosts = await getActiveBlogPosts();
    posts = allPosts.filter((post) =>
      post.categoryname.some((name) => String(name).toLowerCase() === category)
    );
  } catch (error) {
    console.error(`Unable to load recommended ${category} blog posts:`, error);
    loadFailed = true;
  }
  if (!loadFailed && posts.length === 0) return { notFound: true };

  const result = paginatePosts(posts, getPageNumber(query.page), PAGE_SIZE);
  return {
    props: {
      category,
      ...result,
      canonicalUrl: result.page === 1
        ? `https://www.longdrivecars.com/blog/${category}/recommended`
        : `https://www.longdrivecars.com/blog/${category}/recommended?page=${result.page}`,
    },
  };
}
