
import { fireDb } from '../../public/firebase';
import { getDocs, collection } from 'firebase/firestore';
import React, { useEffect, useState } from 'react';
import { useRouter } from 'next/router';

const ComponentName = (props) => {
  const router = useRouter();

  const [postlist, setPostlist] = useState([]);
  const [isLoading, setIsLoading] = useState(false); // State for loader

  useEffect(() => {
    const fetchPosts = async () => {
      const querySnapshot = await getDocs(collection(fireDb, "blogPost"));
      const posts = querySnapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));

      // Set the posts to the state
      setPostlist(posts);
      console.log(posts, "pl");

      posts.sort(function (a, b) {
        return a.time.seconds - b.time.seconds;
      });

      console.log(posts[posts?.length - 1]?.categoryname, "zero");
      const ValidCat = posts[posts?.length - 1]?.categoryname[0];
      if (ValidCat) {
        router.push(`/blog/${ValidCat}`);
      } else {
        router.push('/blog/travel');
      }
    };

    fetchPosts();
  }, []);

  useEffect(() => {
    const handleRouteChangeStart = () => {
      setIsLoading(true); // Show loader when route change starts
    };

    const handleRouteChangeComplete = () => {
      setIsLoading(false); // Hide loader when route change completes
    };

    router.events.on('routeChangeStart', handleRouteChangeStart);
    router.events.on('routeChangeComplete', handleRouteChangeComplete);

    // Cleanup listeners on unmount
    return () => {
      router.events.off('routeChangeStart', handleRouteChangeStart);
      router.events.off('routeChangeComplete', handleRouteChangeComplete);
    };
  }, [router]);

  return (
    <div>
      {isLoading && (
        <div className="text-center py-4">
          <div className="fixed inset-0 bg-white flex items-center justify-center z-50 opacity-90">
            <div className="spinner-border animate-spin border-t-4 border-blue-500 border-solid rounded-full w-16 h-16"></div>
          </div>
        </div>
      )}
    </div>
  );
};

export default ComponentName;
