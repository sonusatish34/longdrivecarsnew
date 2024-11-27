import React, { useState, useEffect } from 'react';
import { useRouter } from 'next/router';
import { fireDb } from '../../images/firebase';
import { doc, updateDoc, arrayUnion, getDocs, query, collection, where } from "firebase/firestore";
import StaticData from '@/pages/images/StaticData';
import { GrLike } from "react-icons/gr";
import { FaRegComment } from "react-icons/fa";
import Image from 'next/image';
import Link from "next/link";
import Footer from '../blogcomponents/Footer';
import { BiCategory } from "react-icons/bi";
import { CgProfile } from "react-icons/cg";
import { RiRectangleFill } from "react-icons/ri";

import BlogLayout from '../blogcomponents/BlogLayout';

function SinglePost() {
  const router = useRouter();
  const { slug } = router.query;
  console.log(slug, "slug");

  const [postDisplay, setPostDisplay] = useState(null);
  const [postlist, setPostlist] = useState([]);
  const [cat, setCat] = useState('');
  const [commentShow, setCommentShow] = useState(false);

  // States for likes and comments
  const [likesCount, setLikesCount] = useState(0);
  const [comments, setComments] = useState([]);

  // States for the comment form
  const [userName, setUserName] = useState("");
  const [commentText, setCommentText] = useState("");

  // Fetch the post data and related posts based on the slug
  useEffect(() => {
    const fetchPost = async () => {
      try {
        const q = query(collection(fireDb, "blogPost"), where("slug", "==", slug));
        const querySnapshot = await getDocs(q);

        if (!querySnapshot.empty) {
          const postDoc = querySnapshot.docs[0];
          const postData = postDoc.data();
          setPostDisplay(postData);
          setLikesCount(postData.likes || 0); // Set the likes count
          setComments(postData.comments || []); // Set the comments array
          setCat(postData?.categoryname);
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

  // Handle like button click
  const handleLike = async () => {
    try {
      const q = query(collection(fireDb, "blogPost"), where("slug", "==", slug));
      const querySnapshot = await getDocs(q);

      if (querySnapshot.empty) {
        alert("Post not found.");
        return;
      }

      const postDocRef = doc(fireDb, "blogPost", querySnapshot.docs[0].id);

      // Increment the likes count in the local state
      const newLikesCount = likesCount + 1;
      setLikesCount(newLikesCount); // Update the local state immediately

      // Update the likes count in Firestore
      await updateDoc(postDocRef, {
        likes: newLikesCount
      });

      alert("Like added!");
    } catch (error) {
      console.error("Error updating like:", error);
      alert("There was an error updating the like.");
    }
  };

  // Handle comment form submission
  const handleCommentSubmit = async (e) => {
    e.preventDefault(); // Prevent the form from reloading the page

    if (!userName || !commentText) {
      alert("Please provide both name and comment.");
      return;
    }

    const date = new Date().toISOString(); // Current date in ISO format

    try {
      const q = query(collection(fireDb, "blogPost"), where("slug", "==", slug));
      const querySnapshot = await getDocs(q);

      if (querySnapshot.empty) {
        alert("Post not found.");
        return;
      }

      const postDocRef = doc(fireDb, "blogPost", querySnapshot.docs[0].id);

      const newComment = { userName, commentText, date };

      // Update the comments in the local state
      setComments(prevComments => [...prevComments, newComment]);

      // Use `arrayUnion` to add the new comment to the Firestore `comments` array
      await updateDoc(postDocRef, {
        comments: arrayUnion(newComment)
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
          <div className='flex flex-col lg:mx-[400px]'>
            <p className='text-[42px] py-4 ds font-extrabold text-[#242424]  leading-[52px] tracking-tight'>{postDisplay?.title}</p>
            <div className='flex gap-6 py-3 items-end gap-x-14'>
              <p className='flex flex-col gap-2'>
                <span className='flex gap-3 items-center'>
                  <Image className='w-12 h-12' src="/logos/logo3.webp" height={300} width={300} />
                  <span>LDCars</span>
                </span>
                <span><span className='font-light text-gray-600'>Published in</span> {`${postDisplay?.categoryname[0]} ${postDisplay?.categoryname[1] ? `,${postDisplay?.categoryname[1]}` : ''}`}</span>
              </p>
              <p className='flex items-center gap-2'><span><RiRectangleFill size={6} /></span><span>{postDisplay?.timetake} min read</span></p>
              <p className='flex items-center gap-2'><span><RiRectangleFill size={6} /></span><span>{StaticData(postDisplay?.time.seconds)}</span></p>
              <p></p>
            </div>
            <Image
              className="w-full rounded-sm"
              src={postDisplay?.coverimages}
              width={500}
              height={500}
            />
            <div className="text-xs lg:text-[20px] leading-2 lg:leading-9 pt-6 georgia-font" dangerouslySetInnerHTML={{ __html: postDisplay?.content }} />

            <div className='flex gap-8 pt-8' >
              <p className='flex gap-2'>
                <span className='hover:cursor-pointer'>
                  <GrLike size={20} onClick={handleLike} />
                </span>
                <span>{likesCount}</span> {/* Display likes count from state */}
              </p>
              <p className='flex gap-2'>
                <span className='hover:cursor-pointer'>
                  <FaRegComment size={20} onClick={() => setCommentShow(true)} />
                </span>
                <span>{comments.length}</span> {/* Display comments count from state */}
              </p>
            </div>

            {commentShow && (
              <div className='rounded-sm w-[400px]'>
                <span>Please Leave A Reply here</span>
                <form className="flex flex-col gap-4 bg-gray-100 border-2 p-4" onSubmit={handleCommentSubmit}>
                  <textarea
                    id="commentText"
                    placeholder="Comment Here!"
                    required
                    value={commentText}
                    onChange={(e) => setCommentText(e.target.value)}
                    className='w-full h-28 rounded-md p-2'
                  ></textarea>
                  <div className='flex gap-2'>
                    <input
                      type="text"
                      id="userName"
                      placeholder="Your Name"
                      required
                      value={userName}
                      onChange={(e) => setUserName(e.target.value)}
                      className='w-fit rounded-md p-2'
                    />
                    <button className='bg-blue-400 p-1 rounded-md text-white' type="submit">Post Comment</button>
                  </div>
                </form>
                <div>
                  <p className='text-xl font-semibold py-4'>Comments</p>
                  <ul>
                    {comments.map((comment, index) => (
                      <li key={index} className="mb-4">
                        <p><strong>{comment.userName}</strong> <span className="text-sm text-gray-500">{comment.date}</span></p>
                        <p>{comment.commentText}</p>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            )}

            <div className="mt-8">
              <p className="text-xl font-semibold">Related Posts</p>
              <div className="grid grid-cols-2 gap-x-8 gap-y-10 pt-6">
                {postlist.length > 0 ? postlist.slice(0, 4).map((post, i) => (
                  <div key={`key-${i}`} className={"w-[350px] h-[400px]"}>
                    {post.coverimages && (
                      <Image
                        className="rounded-md w-[400px] h-[250px] object-cover"
                        src={post.coverimages}
                        alt={post.title}
                        width={500}
                        height={300}
                      />
                    )}
                    <div className='py-3'>
                      <Link href={`/blog/posts/${post.slug}`}><p className='text-lg font-semibold'>{post.title}</p></Link>
                      <ul className="mb-4 mt-4 flex flex-wrap items-center space-x-4 text-xs">
                        <li>{StaticData(post?.time?.seconds)}</li>
                        <li className="flex items-center gap-1"><span><BiCategory className="text-blue-400" /></span><span>{post?.categoryname[0]}</span></li>
                        {console.log(post?.categoryname, "post?.categoryname")}
                        <li>
                          <div className='flex gap-8'>
                            <p className='flex items-center gap-2'>
                              <span className='hover:cursor-pointer'>
                                <GrLike size={10} />
                              </span>
                              <span>{post?.likes ? post?.likes : '1'}</span> {/* Display likes count from state */}
                            </p>
                            <p className='flex items-center gap-2'>
                              <span className='hover:cursor-pointer'>
                                <FaRegComment size={10} />
                              </span>
                              <span>{post?.comments?.length ? post?.comments?.length : '1'}</span> {/* Display comments count from state */}
                            </p>
                          </div>
                        </li>
                      </ul>
                    </div>
                  </div>
                )) : <p>No related posts found</p>}
              </div>
            </div>
          </div>
        </section>
      </BlogLayout>
    </div>
  );
}

export default SinglePost;
