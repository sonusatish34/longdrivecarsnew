import React from 'react';
import BlogLayout from './blogcomponents/BlogLayout';
import Link from 'next/link';
import Head from 'next/head';
import { MdExplore } from 'react-icons/md';
import { getActiveBlogPosts } from '../../utils/blogPosts';

const ComponentName = ({ canonicalUrl, categories }) => (
    <BlogLayout>
        <Head>
            <title>Explore Self-Drive Travel Topics | Long Drive Cars</title>
            <meta name="description" content="Browse Long Drive Cars travel guides and self-drive car rental topics." />
            <link rel="canonical" href={canonicalUrl} />
        </Head>
        <div className="flex flex-col gap-5 items-center lg:px-64 lg:py-10">
            <div className="flex items-center space-x-1 py-4">
                <MdExplore size={32} />
                <h1 className="text-2xl lg:text-4xl font-bold">Explore Topics</h1>
            </div>
            <ul className="grid grid-cols-2 lg:grid-cols-4 gap-3 lg:gap-4">
                {categories.map((category) => (
                    <li key={category}>
                        <Link
                            href={`/blog/${category}`}
                            className="capitalize font-medium text-black text-sm lg:text-base rounded-xl p-3 lg:p-4 text-center bg-gray-200 hover:scale-110"
                        >
                            {category}
                        </Link>
                    </li>
                ))}
            </ul>
        </div>
    </BlogLayout>
);

export async function getServerSideProps() {
    let categories = [];
    try {
        const posts = await getActiveBlogPosts();
        categories = [...new Set(
            posts.flatMap((post) => post.categoryname)
                .map((category) => String(category).toLowerCase())
                .filter(Boolean)
        )].sort();
    } catch (error) {
        console.error('Unable to load blog topics:', error);
    }

    return {
        props: {
            canonicalUrl: 'https://www.longdrivecars.com/blog/explore-topics',
            categories,
        },
    };
}

export default ComponentName;
