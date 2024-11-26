


// import React from 'react'
// import Posts from './blogcomponents/Posts'
// import Link from 'next/link'
// import Image from 'next/image'
// import PostsListing from './blogcomponents/PostsListing'
// import { useState, useEffect } from 'react'
import { fireDb } from '../images/firebase';
import { getDocs, collection } from 'firebase/firestore';
// import { MdOutlineExplore } from "react-icons/md";
// import BlogLayout from './blogcomponents/BlogLayout'

import React, { useEffect, useState } from 'react';
import { useRouter } from 'next/router';
const ComponentName = (props) => {
  const router = useRouter()

  const [postlist,setPostlist] = useState([]);
  useEffect(() => {
    const fetchPosts = async () => {
      const querySnapshot = await getDocs(collection(fireDb, "blogPost"));
      const posts = querySnapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));

      // Set the posts to the state
      setPostlist(posts);
      console.log(posts,"pl");
      posts.sort(function(a , b) {
        return a.time.seconds - b.time.seconds;
    });
      console.log(posts[posts?.length-1]?.categoryname,"zero");
      const ValidCat = posts[posts?.length-1]?.categoryname[0];
      if(ValidCat)
      {
        router.push(`/blog/${ValidCat}`)
      }
      else{
        router.push('/blog/travel')
      }
      // Extract unique categories
      // const uniqueCategories = Array.from(new Set(posts.map(post => post.categoryname)));
      // setCategories(uniqueCategories);
    };

    fetchPosts();
  }, []);


  // useEffect(()=>{
  //   router.push('/blog/travel')
  // },[])


  return (
    <div>
        jo
    </div>
  );
};

export default ComponentName;