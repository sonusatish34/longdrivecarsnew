import React, { useState } from 'react';
import Head from 'next/head';
import Link from 'next/link';
import { GoDotFill } from 'react-icons/go';
import PostsListing from './blogcomponents/PostsListing';
import BlogLayout from './blogcomponents/BlogLayout';
import { getActiveBlogPosts, getPageNumber, paginatePosts } from '../../utils/blogPosts';

const PAGE_SIZE = 20;

export default function BlogIndex({ posts, page, totalPages, canonicalUrl }) {
  const [searchQuery, setSearchQuery] = useState('');
  const filteredPosts = posts.filter((post) =>
    post.title.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div>
      <Head>
        <title>Self-Drive Car Rental Tips &amp; Travel Guides | Long Drive Cars App</title>
        <meta name="description" content="Read self-drive car rental tips and travel guides from Long Drive Cars." />
        <meta name="robots" content="index, follow" />
        <link rel="canonical" href={canonicalUrl} />
      </Head>
      <BlogLayout onSearch={setSearchQuery} catg="Blog">
        <div className="xl:px-32 lg:px-12 flex flex-col items-center">
          <div className="lg:py-10 py-5 justify-center sm:justify-items-center px-[6px]">
            <h1 className="capitalize text-4xl text-center font-semibold lg:pt-3 pb-3 buch-font">Blogs</h1>
            <ul className="flex justify-center items-center pt-2 gap-3">
              <li>Topic</li>
              <li><GoDotFill /></li>
              <li>{posts.length} stories</li>
            </ul>
          </div>
          <div className="text-center flex justify-center lg:pt-10 pt-4">
            <PostsListing data={filteredPosts} />
          </div>
        </div>
        <nav aria-label="Blog pages" className="flex justify-center gap-3 py-8">
          {page > 1 && <Link href={`/blog?page=${page - 1}`}>Previous</Link>}
          {Array.from({ length: totalPages }, (_, index) => index + 1).map((pageNumber) => (
            <Link
              key={pageNumber}
              href={pageNumber === 1 ? '/blog' : `/blog?page=${pageNumber}`}
              aria-current={pageNumber === page ? 'page' : undefined}
            >
              {pageNumber}
            </Link>
          ))}
          {page < totalPages && <Link href={`/blog?page=${page + 1}`}>Next</Link>}
        </nav>
      </BlogLayout>
    </div>
  );
}

export async function getServerSideProps({ query }) {
  let allPosts = [];
  try {
    allPosts = await getActiveBlogPosts();
  } catch (error) {
    console.error('Unable to load blog posts:', error);
  }

  const result = paginatePosts(allPosts, getPageNumber(query.page), PAGE_SIZE);
  return {
    props: {
      ...result,
      canonicalUrl: result.page === 1
        ? 'https://www.longdrivecars.com/blog'
        : `https://www.longdrivecars.com/blog?page=${result.page}`,
    },
  };
}
