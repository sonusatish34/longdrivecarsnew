
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

const ComponentName = ({ canonicalUrl }) => {

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
        <title>Attach Your Car and Earn | Long Drive Cars App</title>
        <meta property="og:title" content="Attach Your Car and Earn | Long Drive Cars App" />
        <meta name="description" content="Interested in attaching your car to Long Drive Cars App? Review the vehicle-partner opportunity, eligibility details and next steps before enquiring." />
        <meta name="og:description" content="Interested in attaching your car to Long Drive Cars App? Review the vehicle-partner opportunity, eligibility details and next steps before enquiring." />
        <meta name="robots" content="index, follow" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="canonical" href={canonicalUrl} />
      </Head>
      {isLoading ? (
        <Loading />
      ) :
        <BlogLayoutForAttch catg={"ldcattachments"}>
          <div className=' '>
            <RandomPostsAttach data={postlist} />
          </div>
        </BlogLayoutForAttch>
      }
    </div>
  );
};

export default ComponentName;

export async function getServerSideProps({ req, query, params }) {
  const canonicalUrl = 'https://www.longdrivecars.com/attach-and-earn';

  return {
    props: {
      canonicalUrl: canonicalUrl,
    }
  };
} 
