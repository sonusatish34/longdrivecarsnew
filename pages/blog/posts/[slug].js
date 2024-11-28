import React, { useState, useEffect } from 'react';
import { useRouter } from 'next/router';
import { fireDb } from '../../images/firebase';
// import { query, collection, where, getDocs,doc,updateDoc,arrayUnion } from "firebase/firestore";
import { doc, updateDoc, arrayUnion, getDocs, query, collection, where } from "firebase/firestore";
import StaticData from '@/pages/images/StaticData';
// import { arrayUnion } from 'firebase/firestore';
import Image from 'next/image';
import Link from "next/link";
import Footer from '../blogcomponents/Footer';
import { BiCategory } from "react-icons/bi";
import { CgProfile } from "react-icons/cg";
import BlogLayout from '../blogcomponents/BlogLayout';

import { MdExpandMore } from "react-icons/md";


function singlePost() {
  const router = useRouter();
  const { slug } = router.query;
  console.log(slug, "sluf");

  const [postDisplay, setPostDisplay] = useState(null);
  const [postlist, setPostlist] = useState([]);
  const [cat, setCat] = useState('');

  // States for the comment form
  const [userName, setUserName] = useState("");
  const [commentText, setCommentText] = useState("");

  useEffect(() => {
    const fetchPost = async () => {
      try {
        // Fetch the post based on the slug
        const q = query(collection(fireDb, "blogPost"), where("slug", "==", slug));
        const querySnapshot = await getDocs(q);

        if (!querySnapshot.empty) {
          const postDoc = querySnapshot.docs[0];
          setPostDisplay(postDoc.data());
          console.log(postDoc.data(), 'value');

          setCat(postDoc.data()?.categoryname);
        } else {
          console.log("No such post found!");
        }
      } catch (error) {
        console.error("Error fetching post:", error);
      }
    };

    fetchPost();
  }, [slug]);

  // Fetch posts related to the same category
  useEffect(() => {
    if (cat) {
      const fetchPostsByCategory = async () => {
        try {
          const q = query(collection(fireDb, "blogPost"), where("categoryname", "==", cat));
          const querySnapshot = await getDocs(q);
          const posts = querySnapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
          setPostlist(posts);
        } catch (error) {
          console.error("Error fetching posts by category:", error);
        }
      };

      fetchPostsByCategory();
    }
  }, [cat]);



  const handleCommentSubmit = async (e) => {
    e.preventDefault(); // Prevent the form from reloading the page

    // Validate that both name and comment text are provided
    if (!userName || !commentText) {
      alert("Please provide both name and comment.");
      return;
    }

    const date = new Date().toISOString(); // Current date in ISO format

    try {
      // Query the blogPost collection for the post with the given slug
      const q = query(collection(fireDb, "blogPost"), where("slug", "==", slug));
      const querySnapshot = await getDocs(q);

      // Check if the post exists
      if (querySnapshot.empty) {
        alert("Post not found.");
        return;
      }

      // Get the document reference of the first matched post
      const postDocRef = doc(fireDb, "blogPost", querySnapshot.docs[0].id);

      // Use `arrayUnion` to add the new comment to the `comments` array
      await updateDoc(postDocRef, {
        comments: arrayUnion({ userName, commentText, date })
      });

      alert("Comment added successfully!");

      // Reset form fields
      setUserName("");
      setCommentText("");
    } catch (error) {
      console.error("Error adding comment:", error);
      alert("There was an error adding the comment.");
    }
  };



  return (
    <div>
      <BlogLayout>
        <section className="section">
          <div className='flex flex-col lg:mx-80 px-4'>
            <p className='lg:text-4xl text-xl font-bold lg:py-4 py-2'>{postDisplay?.title}</p>
            <div className='flex lg:gap-6 gap-4 py-3'>
              <p>LDCars</p>
              <p>{postDisplay?.timetake} min read</p>
              <p>{StaticData(postDisplay?.time.seconds)}</p>
            </div>
            <Image
              className="w-full rounded-sm"
              src={postDisplay?.coverimages}
              width={500}
              height={500}
            />
            <ul className="mb-4 mt-4 flex flex-wrap items-center justify-start space-x-4 text-xs lg:text-lg">
              <li>{postDisplay?.date}</li>
              <li>{postDisplay?.categoryname}</li>
              <li className="flex items-center gap-1"><BiCategory className="text-blue-400" /><span>{postDisplay?.categoryname}</span></li>
              <li className="hidden lg:flex lg:items-center lg:gap-1"><CgProfile className="text-blue-400" /><span>{postDisplay?.postauthor}</span></li>
            </ul>
            <div
              className="text-sm lg:text-base leading-7 lg:leading-loose pt-4 pb-4 px-4 lg:px-6  rounded-lg "
              dangerouslySetInnerHTML={{ __html: postDisplay?.content }}
            />

            {/* Display Related Posts */}
            <div className='bg-gray-200 p-4  rounded-sm '>
              <form className="flex flex-col gap-4" onSubmit={handleCommentSubmit}>
                <input
                  type="text"
                  id="userName"
                  placeholder="Your Name"
                  required
                  value={userName}
                  onChange={(e) => setUserName(e.target.value)}
                  className='w-fit rounded-md p-2'
                />
                <textarea
                  id="commentText"
                  placeholder="Add Your Comment Here!"
                  required
                  value={commentText}
                  onChange={(e) => setCommentText(e.target.value)}
                  className='w-full h-28 rounded-md p-2'
                ></textarea>
                <button className='bg-blue-400 p-1 rounded-md text-white' type="submit">Submit Comment</button>
              </form>
            </div>
            <div className=" lg:pl-4 pt-4   ">
              <p className="text-xl font-semibold">Related Posts</p>
              {/* <ul>
                {postlist.length > 0 ? (
                  postlist.map((post) => (
                    <li key={post.id} className="mb-4">
                      <Link className="text-lg font-medium" href={`/posts/${post.slug}`}>
                        {post.title}
                      </Link>
                    </li>
                  ))
                ) : 
                  <p>No related posts found.</p>
                )}
              </ul> */}
              <div className=" lg:grid-cols-2 grid grid-cols-2 lg:gap-x-8 lg:gap-y-10  gap-7 pt-6  lg:pt-6">
                {/* {data.length > 0 ? data.map((post, i) => ( */}
                {postlist?.length > 0 ? postlist.slice(0, 4).map((post, i) => (
                  <div key={`key-${i}`} className={"lg:w-[350px] lg:h-[400px]  "}>
                    {post?.coverimages && (
                      <Image
                        className="rounded-md lg:w-[400px] lg:h-[200px]"
                        src={post?.coverimages?.length ? post?.coverimages : tempimg}
                        alt={post?.coverimages}
                        width={445}
                        height={230}
                        priority={i === 0 ? true : false}
                      />
                    )}

                    <h5 className="mb-2 hover:text-orange-400 font-bold text-lg text-left pt-4">
                      <Link href={`/blog/posts/${post.slug.toLowerCase().replace(/ /g, "-")}`} className="block hover:text-primary">
                        {post?.title && post?.title.slice(0, 50)}
                      </Link>
                    </h5>

                    <p className="text-left">
                      {post?.description && post?.description.slice(0, 70)}...
                    </p>



                    <ul className="mb-4 mt-4 flex flex-wrap items-center space-x-4 text-xs">
                      {/* Display category */}
                      <li className="flex items-center gap-1">
                        <span><BiCategory className="text-blue-400" /></span>
                        <span>{post?.categoryname}</span>
                      </li>

                      {/* Show author on laptops and larger screens only */}
                      <li className="hidden lg:flex items-center gap-1">
                        <span><CgProfile className="text-blue-400" /></span>
                        <span>{post?.postauthor}</span>
                      </li>
                    </ul>

                  </div>
                )) : (
                  <p>No posts available for this category.</p>
                )}
              </div>

            </div>
            <div className='lg:pb-6 py-4'>
              <Link href={`/blog/${cat ? cat[0] + '/' : ''}recommended`}>
                <span className='border-2 border-black rounded-full p-2 bg-gray-200 text-sm'>See more  </span>
              </Link>
            </div>


            <div className=" py-6 flex flex-row">
              <Link href={`/blog/${cat ? cat[0] + '/' : ''}recommended`} className="flex  space-x-2">
                <span className="border-2 border-black rounded-full p-2 bg-gray-200 text-sm flex items-center space-x-2">
                  <span>See more</span>
                  <MdExpandMore size={20} className="text-lg" />
                </span>
              </Link>
            </div>
            {/* Comments Section */}
            <div>
              <p className='text-xl font-semibold'>Comments</p>
              <ul>
                {postDisplay?.comments && postDisplay.comments.map((comment, index) => (
                  <li key={index} className="mb-4">
                    <p><strong>{comment.userName}</strong> <span className="text-sm text-gray-500">{comment.date}</span></p>
                    <p>{comment.commentText}</p>
                  </li>
                ))}
              </ul>
            </div>

            {/* Comment Form */}

          </div>
        </section>
        <Footer />
      </BlogLayout>
    </div>
  );
}

export default singlePost;
