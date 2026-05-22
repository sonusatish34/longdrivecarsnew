
import { fireDb } from '../../public/firebase';
import { getDocs, collection, where, query } from 'firebase/firestore';
import React, { useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import { GoDotFill } from "react-icons/go";
import Loading from '../components/Loading';
import PostsListing from './blogcomponents/PostsListing';
import BlogLayoutForAttch from './blogcomponents/BlogLayoutForAttch';
import RandomPostsAttach from './blogcomponents/RandomPostsAttach';
import Link from 'next/link';
import { MdExpandMore } from "react-icons/md";
import Head from 'next/head';

const ComponentName = ({canonicalUrl}) => {

  const router = useRouter();
  const [postlist, setPostlist] = useState([]);
  const [sortedPostlist, setSortedPostlist] = useState([]);
  const [isLoading, setIsLoading] = useState(true); // State for loader

  useEffect(() => {
    const fetchPosts = async () => {
      try {
        const postsQuery = query(collection(fireDb, "blogPost"),
          where("blog_state", "==", "active"),
          where("blogfor", "==", "ldcattachments")
        );
        const postsQuerySnapshot = await getDocs(postsQuery);
        const posts = postsQuerySnapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
        const sortedPosts = posts.sort((a, b) => new Date(b.createdAt) - new Date(a.createdAt));
        setPostlist(posts);
        setSortedPostlist(sortedPosts);
      } catch (err) {
        setError('Failed to load data');
        console.error(err); // You can also log errors to an external service like Sentry
      } finally {
        setIsLoading(false); // Hide loader after data is fetched or error occurs
      }
    };

    fetchPosts();
  }, []);


  return (
    <div>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <title>Self Drive Car Rental Blog by Long Drive Cars</title>
        <meta property="og:title" content="Self Drive Car Rental Blog by Long Drive Cars" />
        <meta name="description" content="Read expert tips on self drive cars, car hire services, and rental guides to make your next self drive car trip smooth and stress-free." />
        <meta name="og:description" content="Read expert tips on self drive cars, car hire services, and rental guides to make your next self drive car trip smooth and stress-free." />
        <meta name="robots" content="index, follow" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="canonical" href={canonicalUrl} />
      </Head>
      {isLoading ? (
        <Loading />
      ) :
        <BlogLayoutForAttch catg={"ldcattachments"}>
          <div className=' helvetica-font'>
            
            {/* <div className='text-center flex justify-center lg:pt-10 pt-4'>
              <PostsListing data={sortedPostlist} />
            </div> */}
            <RandomPostsAttach data={postlist} />
          </div>
          {/* <div className=" py-2 pb-9 lg:py-5 flex flex-row xl:pl-36 lg:pl-20 pl-3 helvetica-font">
            <Link href={`/attach&earn/${'travel'}`} className="flex space-x-2">
              <span className="border-2 text-white rounded-full p-2 bg-[#1859c9] text-sm flex items-center space-x-2">
                <span>See more</span>
                <MdExpandMore className="text-lg" />
              </span>
            </Link>
          </div> */}
        </BlogLayoutForAttch>
      }
    </div>
  );
};

export default ComponentName;

export async function getServerSideProps({ req, query, params }) {

  const host = req.headers.host;
  const canonicalUrl = host.includes('.in')
    ? `https://www.longdrivecars.in`
    : `https://www.longdrivecars.com`;

  return {
    props: {
      canonicalUrl: canonicalUrl,
    }
  };
} 
