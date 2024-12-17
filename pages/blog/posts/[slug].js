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
import { IoTimeOutline } from "react-icons/io5";
import { RiRectangleFill } from "react-icons/ri";
import BlogLayout from '../blogcomponents/BlogLayout';
import { MdExpandMore } from "react-icons/md";
import Loading from '@/pages/components/Loading';
import Head from 'next/head';
import { IoMdVolumeHigh, IoMdVolumeOff } from "react-icons/io";
function SinglePost({ canonicalUrl }) {
  const router = useRouter();
  const { slug } = router.query;
  const [postDisplay, setPostDisplay] = useState(null);
  const [postlist, setPostlist] = useState([]);
  const [cat, setCat] = useState('');
  const [commentShow, setCommentShow] = useState(false);

  const [isReading, setIsReading] = useState(false); // Default state: mute
  const [speechInstance, setSpeechInstance] = useState(null);
  const [availableVoices, setAvailableVoices] = useState([]);
  const [femaleVoice, setFemaleVoice] = useState(null);

  // Fetch and log available voices
  useEffect(() => {
    const fetchVoices = () => {
      const voices = window.speechSynthesis.getVoices();
      console.log("Available voices:", voices); // Debugging: log all voices
      setAvailableVoices(voices);

      // Try to find a female voice
      const female = voices.find((voice) =>
        voice.name.toLowerCase().includes("female") ||
        voice.name.toLowerCase().includes("samantha") || 
        voice.name.toLowerCase().includes("zira") // Example names
      );
      setFemaleVoice(female || voices[0]); // Fallback to the first voice
    };

    if (window.speechSynthesis) {
      fetchVoices();

      // Listen for when voices are loaded asynchronously
      window.speechSynthesis.onvoiceschanged = fetchVoices;
    }
  }, []);

  // Clean and prepare text for speech
  const cleanTextForSpeech = (text) => {
    if (!text) return "";
    return text
      .replace(/<\/?[^>]+(>|$)/g, "") // Remove HTML tags
      .replace(/[.,\/#!$%\^&\*;:{}=\-_`~()]/g, "") // Remove special characters
      .replace(/\s+/g, " ") // Normalize spaces
      .trim();
  };

  // Read aloud function
  const readAloud = (title,description, content) => {
    const cleanTitle = cleanTextForSpeech(title);
    const cleanDescription = cleanTextForSpeech(description);
    const cleanContent = cleanTextForSpeech(content);
    const textToRead = `${cleanTitle}. ${cleanDescription} .${cleanContent}`.trim();

    if (!textToRead) {
      console.warn("No text available for reading.");
      return;
    }

    if (speechInstance) {
      window.speechSynthesis.cancel(); // Stop existing speech
    }

    const speech = new SpeechSynthesisUtterance(textToRead);
    if (femaleVoice) {
      speech.voice = femaleVoice; // Set female voice
    } else {
      console.warn("Female voice not found, using default voice.");
    }
    speech.lang = "en-US";
    speech.pitch = 1;
    speech.rate = 1;
    speech.volume = 1;

    window.speechSynthesis.speak(speech);

    setSpeechInstance(speech);
    setIsReading(true);

    speech.onend = () => {
      setIsReading(false);
      setSpeechInstance(null);
    };
  };

  const stopReading = () => {
    if (speechInstance) {
      window.speechSynthesis.cancel();
      setIsReading(false);
    }
  };

  // // Clean and prepare the text to be read aloud
  // const cleanTextForSpeech = (text) => {
  //   if (!text) return ""; // Handle null or undefined text
  //   let cleanText = text.replace(/<\/?[^>]+(>|$)/g, ""); // Remove HTML tags
  //   cleanText = cleanText.replace(/[.,\/#!$%\^&\*;:{}=\-_`~()]/g, ""); // Remove special characters
  //   cleanText = cleanText.replace(/\s+/g, " ").trim(); // Normalize whitespace
  //   return cleanText;
  // };

  // // Read aloud function
  // const readAloud = (title, content) => {
  //   if (!title && !content) {
  //     console.warn("No text available for reading");
  //     return;
  //   }

  //   const cleanTitle = cleanTextForSpeech(title);
  //   const cleanContent = cleanTextForSpeech(content);

  //   const textToRead = `${cleanTitle}. ${cleanContent}`.trim();

  //   // Stop any existing speech
  //   if (speechInstance) {
  //     window.speechSynthesis.cancel();
  //   }

  //   // Check if there's any text to read
  //   if (!textToRead) {
  //     console.warn("Text is empty after cleaning");
  //     return;
  //   }

  //   // Create a new speech instance
  //   const speech = new SpeechSynthesisUtterance(textToRead);
  //   speech.lang = "en-US";
  //   speech.pitch = 1;
  //   speech.rate = 1;
  //   speech.volume = 1;

  //   // Start speaking
  //   window.speechSynthesis.speak(speech);

  //   // Track the speech instance
  //   setSpeechInstance(speech);
  //   setIsReading(true);

  //   // Handle speech end
  //   speech.onend = () => {
  //     setIsReading(false); // Reset state
  //     setSpeechInstance(null); // Clear instance
  //   };
  // };

  // Stop reading function
  // const stopReading = () => {
  //   if (speechInstance) {
  //     window.speechSynthesis.cancel(); // Stop ongoing speech
  //     setIsReading(false); // Reset state
  //   }
  // };
  // States for likes and comments
  const [likesCount, setLikesCount] = useState(0);
  const [comments, setComments] = useState([]);

  // States for the comment form
  const [userName, setUserName] = useState("");
  const [commentText, setCommentText] = useState("");

  // Loading state
  const [loading, setLoading] = useState(true);

  // Handle route change and display loading indicator
  useEffect(() => {
    const handleRouteChange = () => {
      setLoading(true);  // Start loader on route change
    };

    const handleRouteComplete = () => {
      setLoading(false);  // Stop loader after page load
    };

    router.events.on('routeChangeStart', handleRouteChange);
    router.events.on('routeChangeComplete', handleRouteComplete);
    router.events.on('routeChangeError', handleRouteComplete);

    return () => {
      router.events.off('routeChangeStart', handleRouteChange);
      router.events.off('routeChangeComplete', handleRouteComplete);
      router.events.off('routeChangeError', handleRouteComplete);
    };
  }, [router.events]);

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
      setLoading(false);  // Stop loader once data is fetched
    };

    if (slug) {
      fetchPost();
    }
  }, [slug]);

  // Fetch posts related to the same category
  useEffect(() => {
    if (cat) {
      const fetchPostsByCategory = async () => {
        try {
          setLoading(true);
          const q = query(collection(fireDb, "blogPost"), where("categoryname", "==", cat), where("blog_state", "==", "active"));
          const querySnapshot = await getDocs(q);
          const posts = querySnapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
          const removeslug = posts.filter(post => post.slug !== slug);
          setPostlist(removeslug);
        } catch (error) {
          console.error("Error fetching posts by category:", error);
        }
        finally {
          setLoading(false);
        }
      };

      fetchPostsByCategory();
    }
  }, [cat]);

  // Handle like button click
  const handleLike = async () => {
    try {
      const q = query(collection(fireDb, "blogPost", { canonicalUrl }), where("slug", "==", slug));
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

      const newComment = { userName, commentText, date, };

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
      {loading && (
        <Loading />
      )}

      <BlogLayout>
        <section className="section">
          <Head>
            <title> {postDisplay?.title}</title>
            <meta name="description" content={postDisplay?.description} />
            <meta name="viewport" content="width=device-width, initial-scale=1" />
            <meta property="og:title" content={postDisplay?.description} />
            <meta property="og:description" content={postDisplay?.description} />

            <link rel="canonical" href={canonicalUrl} />
          </Head>
          <div className='flex flex-col lg:px-0 py-2 lg:py-2'>
            <div className='xl:mx-96 lg:mx-56 mx-6 lg:px-0'>
              <p className='lg:text-[40px] lg:leading-tight text-xl font-extrabold lg:py-4 py-2 helvetica-font tracking-tight'>{postDisplay?.title}</p>
              <p className='helvetica-font text-[#6B6B6B] text-sm lg:text-xl lg:pb-6 py-2 lg:py-4'>{postDisplay?.description}</p>
            </div>
            <div className='xl:mx-24 lg:mx-16 px-1 lg:px-0 py-3 lg:py-6'>
              <Image
                className="w-full rounded-sm"
                src={postDisplay?.coverimages}
                width={1000}
                height={1000}
              />
            </div>
            <div className="flex lg:gap-6 gap-4 py-3 text-sm lg:text-lg xl:mx-96 lg:mx-56 mxs: mx-6">
              <p>{postDisplay?.timetake} min read</p>
              {/* <p>{StaticData(postDisplay?.time.seconds)}</p> */}
              <p className="flex items-center gap-1">
                <BiCategory className="text-blue-400" />
                <span>
                  {Array.isArray(postDisplay?.categoryname)
                    ? postDisplay.categoryname.join(", ")
                    : postDisplay?.categoryname}
                </span>
              </p>

              <button
                className="text-blue-600 flex items-center justify-center"
                onClick={() => {
                  if (isReading) {
                    stopReading(); // Stop reading
                  } else {
                    readAloud(postDisplay?.title,postDisplay?.description, postDisplay?.content); // Start reading
                  }
                }}
              >
                {isReading ? (
                  <IoMdVolumeHigh size={20} className="lg:size-6" />
                ) : (
                  <IoMdVolumeOff size={20} className="lg:size-6" />
                )}
              </button>
            </div>

            {/* Rest of your component */}
            <ul className="py-2 flex  items-center justify-start gap-x-8 text-xs lg:text-base xl:mx-96 lg:mx-56 mx-6">
              <li className="flex items-center gap-5"><span>{<p>{StaticData(postDisplay?.time.seconds)}</p>}</span>
                <p>{postDisplay?.date}</p>
              </li>
            </ul>
            <div
              className="text-[#242424] lg:text-justify text-base lg:text-[20px] leading-8 lg:leading-9 lg:tracking-wide pt-4 pb-4 px-1 lg:px-0  rounded-lg georgia-font xl:mx-96 lg:mx-56 mx-6"
              dangerouslySetInnerHTML={{ __html: postDisplay?.content }}
            />

            {/* Display Related Posts */}
            {/* <div className="text-xs lg:text-[20px] leading-2 lg:leading-9 pt-6 georgia-font" dangerouslySetInnerHTML={{ __html: postDisplay?.content }} /> */}
            <div className='flex gap-8 py-4 border-t-2 border-b-2 xl:mx-96 lg:mx-56 mx-6 px-4 lg:px-0' >
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
              <div className='rounded-sm w-[400px] xl:mx-96 lg:mx-56 mx-6 px-4 lg:px-0'>
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

            <div className="pt-4 xl:mx-96 lg:mx-56 mx-6 px-4 lg:px-0">
              <p className="text-xl font-semibold">Related Posts</p>
              <div className=" lg:grid-cols-2 grid grid-cols-2 lg:gap-x-8 lg:gap-y-10  gap-7 pt-6  lg:pt-6">
                {/* {data.length > 0 ? data.map((post, i) => ( */}
                {postlist?.length > 0 ? postlist.slice(0, 4).map((post, i) => (
                  <div key={`key-${i}`} className={"xl:w-[315 px] lg:h-[350px] w-full h-30  "}>
                    <Link href={`/blog/posts/${post.slug.toLowerCase().replace(/ /g, "-")}`} className="block hover:text-orange-500 font-extrabold text-lg xl:text-2xl text-left tracking-tight">
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
                    </Link>
                    <p className="mb-2 hover:text-orange-400 font-bold lg:text-lg text-xs text-left pt-4 h-16">
                      <Link href={`/blog/posts/${post.slug.toLowerCase().replace(/ /g, "-")}`} className="block hover:text-primary">
                        {post?.title && post?.title.slice(0, 50)}
                      </Link>
                    </p>

                    <p className="text-left text-xs lg:text:lg h-14 lg:block hidden pt-2">
                      {post?.description && post?.description.slice(0, 150)}...
                    </p>
                    <p className="text-left text-xs lg:text:lg h-14 block lg:hidden">
                      {post?.description && post?.description.slice(0, 40)}...
                    </p>

                    <ul className=" pt-2 flex flex-wrap items-center space-x-4 text-xs">
                      {/* Display category */}
                      {/* <li className="flex items-center gap-1">
                        <span><BiCategory className="text-blue-400" /></span>
                        <span>{post?.categoryname}</span>
                      </li> */}

                      <li className="flex items-center gap-1">
                        <BiCategory className="text-blue-400" />
                        <span>
                          {Array.isArray(postDisplay?.categoryname)
                            ? postDisplay.categoryname.join(", ")
                            : postDisplay?.categoryname}
                        </span>
                      </li>

                      {/* Show author on laptops and larger screens only */}
                      <li className="hidden lg:flex items-center gap-1">
                        <span><IoTimeOutline className="text-blue-400" /></span>
                        {/* <span>{post?.postauthor}</span> */}
                        <span>{<p>{StaticData(post?.time.seconds)}</p>}</span>
                      </li>
                    </ul>

                  </div>
                )) : <p>No related posts found</p>}
              </div>

            </div>
            <div className=" py-6 lg:mt-12 flex flex-row xl:mx-96 lg:mx-56 mx-6 px-4 lg:px-0">
              <Link href={`/blog/${cat ? cat[0] + '/' : ''}recommended`} className="flex  space-x-2">
                <span className="border-2 border-black rounded-full p-2 bg-gray-200 text-sm flex items-center space-x-2">
                  <span>See more</span>
                  <MdExpandMore size={20} className="text-lg" />
                </span>
              </Link>
            </div>
          </div>
        </section>
      </BlogLayout>
    </div>
  );
}

export default SinglePost;


export async function getServerSideProps({ req, params }) {
  const host = req.headers.host;
  const { slug } = params; // Extract slug from dynamic route

  try {
    // Query Firestore for the blog post with the matching slug
    const q = query(collection(fireDb, "blogPost"), where("slug", "==", slug));
    const querySnapshot = await getDocs(q);

    if (querySnapshot.empty) {
      return {
        notFound: true, // Return 404 if no matching post is found
      };
    }

    // Extract the data from the first matching document
    const postData = querySnapshot.docs[0].data();

    // Convert non-serializable fields
    const postDisplay = {
      ...postData,
      time: postData.time?.toDate().toISOString(), // Convert Firestore Timestamp to ISO string
    };

    // Construct the canonical URL
    const canonicalUrl = host.includes('.in')
      ? `http://www.longdrivecars.in/blog/posts/${(postDisplay.slug)}`
      : `http://www.longdrivecars.com/blog/posts/${(postDisplay.slug)}`;

    return {
      props: {
        canonicalUrl,
        postDisplay, // Pass post data to the component
      },
    };
  } catch (error) {
    console.error("Error fetching blog post:", error);
    return {
      notFound: true,
    };
  }
}


