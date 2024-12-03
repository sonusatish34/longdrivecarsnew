import React, { useState, useEffect } from 'react';
import { useRouter } from 'next/router';
import { fireDb } from '../../../public/firebase';
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

import { MdExpandMore } from "react-icons/md";




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

      // alert("Like added!");
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
  const speakText = () => {
    // Create a new SpeechSynthesisUtterance object
    const utterance = new SpeechSynthesisUtterance();
    
    // Get all text content of the page
    const bodyText = document.body.innerText;

    // Set the text to be read out
    utterance.text = bodyText;
    
    // Optionally, you can adjust the speech properties like pitch, rate, and volume
    utterance.pitch = 1; // Range: 0 to 2
    utterance.rate = 1;  // Range: 0.1 to 10
    utterance.volume = 1; // Range: 0 to 1

    // Start speaking the text
    window.speechSynthesis.speak(utterance);
  };
  const stopSpeech = () => {
    window.speechSynthesis.cancel();  // This will stop the speech immediately
  };


  return (
    <div>
      <BlogLayout>
        <section className="section">
          <div className='flex flex-col xl:mx-96 lg:mx-56 px-4 lg:px-0 py-2 lg:py-2'>
            <p className='lg:text-[40px] lg:leading-tight text-xl font-extrabold lg:py-4 py-2 buch-font tracking-tight'>{postDisplay?.title}</p>
            <p className='helvetica-font text-[#6B6B6B] text-sm lg:text-xl lg:pb-6 py-4'>{postDisplay?.description}</p>
            <Image
              className="w-full rounded-sm"
              src={postDisplay?.coverimages}
              width={1000}
              height={1000}
            />
            <div className='flex lg:gap-6 gap-4 py-3 text-sm lg:text-lg'>
              {/* <button onClick={speakText}>speak</button>
  <button onClick={stopSpeech}>Stop Speech</button> */}
              <p>LDCars</p>
              <p>{postDisplay?.timetake} min read</p>

              <p>{StaticData(postDisplay?.time.seconds)}</p>
            </div>
            <ul className="py-2 flex flex-wrap items-center justify-start space-x-4 text-xs lg:text-base">
              <li>{postDisplay?.date}</li>
              {/* <li>{postDisplay?.categoryname}</li> */}
              <li className="flex items-center gap-1"><BiCategory className="text-blue-400" /><span>{postDisplay?.categoryname}</span></li>
              <li className="hidden lg:flex lg:items-center lg:gap-1"><CgProfile className="text-blue-400" /><span>LDCars</span></li>
            </ul>
            <div
              className="text-[#242424] text-sm lg:text-[20px] leading-8 lg:leading-9 lg:tracking-wide pt-4 pb-4 px-4 lg:px-0  rounded-lg georgia-font"
              dangerouslySetInnerHTML={{ __html: postDisplay?.content }}
            />

            {/* Display Related Posts */}
            {/* <div className="text-xs lg:text-[20px] leading-2 lg:leading-9 pt-6 georgia-font" dangerouslySetInnerHTML={{ __html: postDisplay?.content }} /> */}
            <div className='flex gap-8 py-4 border-t-2 border-b-2' >
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
            {/* <div className='bg-gray-200 p-4  rounded-sm '>
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
            </div> */}
            <div className="pt-4   ">
              <p className="text-xl font-semibold">Related Posts</p>
              <div className=" lg:grid-cols-2 grid grid-cols-2 lg:gap-x-8 lg:gap-y-10  gap-7 pt-6  lg:pt-6">
                {/* {data.length > 0 ? data.map((post, i) => ( */}
                {postlist?.length > 0 ? postlist.slice(0, 4).map((post, i) => (
                  <div key={`key-${i}`} className={"xl:w-[350px] lg:h-[350px] w-full h-30  "}>
                    {post?.coverimages && (
                      <Image
                        className="rounded-md lg:w-[400px] lg:h-[200px] w-32 h-20 "
                        src={post?.coverimages?.length ? post?.coverimages : tempimg}
                        alt={post?.coverimages}
                        width={445}
                        height={230}
                        priority={i === 0 ? true : false}
                      />
                    )}

                    <h5 className="mb-2 hover:text-orange-400 font-bold lg:text-lg text-xs text-left pt-4">
                      <Link href={`/blog/posts/${post.slug.toLowerCase().replace(/ /g, "-")}`} className="block hover:text-primary">
                        {post?.title && post?.title.slice(0, 50)}
                      </Link>
                    </h5>

                    <p className="text-left text-xs lg:text:lg">
                      {post?.description && post?.description.slice(0, 70)}...
                    </p>



                    <ul className=" pt-2 flex flex-wrap items-center space-x-4 text-xs">
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
                )) : <p>No related posts found</p>}
              </div>

            </div>



            <div className=" py-6 lg:py-3 flex flex-row">
              <Link href={`/blog/${cat ? cat[0] + '/' : ''}recommended`} className="flex  space-x-2">
                <span className="border-2 border-black rounded-full p-2 bg-gray-200 text-sm flex items-center space-x-2">
                  <span>See more</span>
                  <MdExpandMore size={20} className="text-lg" />
                </span>
              </Link>
            </div>
            {/* Comments Section */}
            {/* <div>
              <p className='text-xl font-semibold'>Comments</p>
              <ul>
                {postDisplay?.comments && postDisplay.comments.map((comment, index) => (
                  <li key={index} className="mb-4">
                    <p><strong>{comment.userName}</strong> <span className="text-sm text-gray-500">{comment.date}</span></p>
                    <p>{comment.commentText}</p>
                  </li>
                ))}
              </ul>
            </div> */}
          </div>
        </section>
      </BlogLayout>
    </div>
  );
}

export default SinglePost;
