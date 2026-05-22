import React, { useState, useEffect } from 'react';
import { useRouter } from 'next/router';
import { fireDb } from '../../../public/firebase';
import { doc, updateDoc, arrayUnion, getDocs, query, collection, where } from "firebase/firestore";
import StaticData from '@/pages/images/StaticData';
import { GrLike } from "react-icons/gr";
import { FaRegComment } from "react-icons/fa";
import Image from 'next/image';
import Link from "next/link";
import { BiCategory } from "react-icons/bi";
import { IoTimeOutline } from "react-icons/io5";
import BlogLayoutForAttch from '../blogcomponents/BlogLayoutForAttch';
import { MdExpandMore } from "react-icons/md";
import Head from 'next/head';
import { IoMdVolumeHigh, IoMdVolumeOff } from "react-icons/io";
import { HiOutlineCalendarDateRange } from "react-icons/hi2";
import { CiCalendarDate } from "react-icons/ci";
import { IoTime } from "react-icons/io5";



function SinglePost({ canonicalUrl, postDisplay }) {
  const router = useRouter();
  const { slug } = router.query;
  const [postlist, setPostlist] = useState([]);
  const [cat, setCat] = useState('');
  const [commentShow, setCommentShow] = useState(false);
  const [isSpeaking, setIsSpeaking] = useState(false);
  const [voice, setVoice] = useState(null);
  const [likesCount, setLikesCount] = useState(postDisplay?.likes || 0);
  const [comments, setComments] = useState(postDisplay?.comments || []);
  const [userName, setUserName] = useState("");
  const [commentText, setCommentText] = useState("");

  // Audio Logic
  useEffect(() => {
    const getVoices = () => {
      const voices = window.speechSynthesis.getVoices();
      let selectedVoice = voices.find(v => v.name.toLowerCase().includes('google') || v.lang === 'en-US');
      setVoice(selectedVoice || voices[0]);
    };
    getVoices();
    window.speechSynthesis.onvoiceschanged = getVoices;
  }, []);

  const speakText = () => {
    if (isSpeaking) {
      window.speechSynthesis.cancel();
      setIsSpeaking(false);
      return;
    }
    const clean = (html) => html.replace(/<[^>]*>/g, '').replace(/\s+/g, ' ').trim();
    const text = `${clean(postDisplay.title)}. ${clean(postDisplay.description)}. ${clean(postDisplay.content)}`;
    const utterance = new SpeechSynthesisUtterance(text);
    utterance.onend = () => setIsSpeaking(false);
    utterance.voice = voice;
    utterance.rate = 0.9;
    window.speechSynthesis.speak(utterance);
    setIsSpeaking(true);
  };

  // Fetch Related Posts
  useEffect(() => {
    const fetchRelated = async () => {
      if (!postDisplay?.categoryname) return;
      const qCategory = query(
        collection(fireDb, "blogPost"),
        where("categoryname", "==", postDisplay.categoryname),
        where("blog_state", "==", "active")
      );
      const categorySnapshot = await getDocs(qCategory);
      const posts = categorySnapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
      setPostlist(posts.filter(p => p.slug !== slug).slice(0, 5));
    };
    fetchRelated();
  }, [slug, postDisplay]);

  const handleLike = async () => {
    const newCount = likesCount + 1;
    setLikesCount(newCount);
    const q = query(collection(fireDb, "blogPost"), where("slug", "==", slug));
    const snap = await getDocs(q);
    if (!snap.empty) {
      await updateDoc(doc(fireDb, "blogPost", snap.docs[0].id), { likes: newCount });
    }
  };

  const handleCommentSubmit = async (e) => {
    e.preventDefault();
    const newComment = { userName, commentText, date: new Date().toISOString() };
    setComments([...comments, newComment]);
    const q = query(collection(fireDb, "blogPost"), where("slug", "==", slug));
    const snap = await getDocs(q);
    if (!snap.empty) {
      await updateDoc(doc(fireDb, "blogPost", snap.docs[0].id), { comments: arrayUnion(newComment) });
    }
    setUserName(""); setCommentText("");
  };

  return (
    <BlogLayoutForAttch>
      <Head>
        <title>{postDisplay?.title}</title>
        <meta name="description" content={postDisplay?.description} />
        <link rel="canonical" href={canonicalUrl} />
        <meta property="og:type" content="article" />
      </Head>

      <article className="">
        {/* 1. Full Width Hero Section */}
        <div className="flex lg:flex-row flex-col justify-between bg-gradient-to-r from-indigo-500 to-blue-500 text-white">
          <div className='flex'>
            <ul className='lg:pl-20 p-8 lg:pt-20 flex flex-col gap-y-10'>
              <li className='font-bold lg:text-3xl text-xl'>{postDisplay?.title}</li>
              <li className='flex gap-x-3'><p className='flex gap-x-1'> <span><CiCalendarDate size={20} /></span>{postDisplay?.date.slice(0, 12).replace(',', ' ')}</p><p className='flex gap-x-1'> <span><IoTime size={20} /></span>{postDisplay?.timetake} Min read</p></li>
              <li><button
                onClick={speakText}
                className="flex items-center gap-2 px-3 py-1 border border-blue-500 text-white rounded-full hover:bg-black transition"
              >
                {isSpeaking ? <IoMdVolumeHigh /> : <IoMdVolumeOff />}
                <span className="text-sm font-medium">{isSpeaking ? 'Stop This Article' : 'Listen This Article'}</span>
              </button></li>
            </ul>
          </div>
          <Image
            src={postDisplay?.coverimages}
            alt={postDisplay?.cialt || postDisplay?.title}
            height={800}
            width={800}
            priority
            className="brightness-90 lg:w-"
          />
        </div>

        {/* 2. Main Content Container */}
        <div className="lg:pl-20 mx-auto px-4 lg:px-6 py-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">

            {/* LEFT COLUMN: Content */}
            <div className="lg:col-span-8">
              <header className="mb-8">
                <h1 className="text-3xl lg:text-5xl tracking-wide font-extrabold mb-4">
                  {postDisplay?.title}
                </h1>

               
                <div className="text-xl text-gray-600 leading-relaxed italic">
                  {postDisplay?.description}
                </div>
              </header>

              <div
                className="prose prose-lg max-w-none blogContent georgia-font text-[#242424] leading-[1.8]"
                dangerouslySetInnerHTML={{ __html: postDisplay?.content }}
              />

              {/* Engagement Bar */}
              <div className="mt-12 py-4 border-y flex gap-6">
                <button onClick={handleLike} className="flex items-center gap-2 hover:text-blue-600">
                  <GrLike className={likesCount > 0 ? "text-blue-600" : ""} /> {likesCount} Likes
                </button>
                <button onClick={() => setCommentShow(!commentShow)} className="flex items-center gap-2 hover:text-blue-600">
                  <FaRegComment /> {comments.length} Comments
                </button>
              </div>

              {/* Comments Section */}
              {commentShow && (
                <div className="mt-8 bg-gray-50 p-6 rounded-xl">
                  <h3 className="text-xl font-bold mb-4">Leave a Response</h3>
                  <form onSubmit={handleCommentSubmit} className="space-y-4">
                    <textarea
                      value={commentText}
                      onChange={(e) => setCommentText(e.target.value)}
                      placeholder="What are your thoughts?"
                      className="w-full p-3 rounded-lg border focus:ring-2 focus:ring-blue-400 outline-none"
                      rows="4"
                    />
                    <div className="flex gap-4">
                      <input
                        value={userName}
                        onChange={(e) => setUserName(e.target.value)}
                        placeholder="Name"
                        className="p-2 rounded-lg border"
                      />
                      <button className="bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700">Post</button>
                    </div>
                  </form>
                  <div className="mt-8 space-y-6">
                    {comments.map((c, i) => (
                      <div key={i} className="border-b pb-4">
                        <p className="font-bold">{c.userName} <span className="font-normal text-gray-400 text-sm ml-2">{new Date(c.date).toLocaleDateString()}</span></p>
                        <p className="text-gray-700 mt-1">{c.commentText}</p>
                      </div>
                    ))}
                  </div>
                </div>
              )}
            </div>

            {/* RIGHT COLUMN: Sticky Sidebar */}
            <aside className="lg:col-span-4">
              <div className="sticky top-24">
                <h2 className="text-xl font-bold border-b-2 border-blue-600 pb-2 mb-6">Related Posts</h2>
                <div className="space-y-8">
                  {postlist.map((post, i) => (
                    <Link href={`/attach&earn/posts/${post.slug}`} key={i} className="group flex flex-col gap-3">
                      <div className="relative h-44 w-full overflow-hidden rounded-lg">
                        <Image
                          src={post.coverimages}
                          alt={post.title}
                          layout="fill"
                          objectFit="cover"
                          className="group-hover:scale-105 transition duration-300"
                        />
                      </div>
                      <div>
                        <h3 className="font-bold text-lg leading-snug group-hover:text-blue-600 transition">
                          {post.title.slice(0, 60)}...
                        </h3>
                        <div className="text-sm text-gray-500 mt-2 line-clamp-2">
                          {post.description}
                        </div>
                      </div>
                    </Link>
                  ))}
                </div>
                <Link
                  href={`/blog/recommended`}
                  className="mt-8 inline-flex items-center gap-2 bg-black text-white px-6 py-3 rounded-full hover:bg-gray-800 transition"
                >
                  View All Posts <MdExpandMore className="-rotate-90" />
                </Link>
              </div>
            </aside>

          </div>
        </div>
      </article>
    </BlogLayoutForAttch>
  );
}

export default SinglePost;

export async function getServerSideProps({ req, params }) {
  const host = req.headers.host;
  const { slug } = params;
  try {
    const q = query(collection(fireDb, "blogPost"), where("slug", "==", slug));
    const querySnapshot = await getDocs(q);
    if (querySnapshot.empty) return { notFound: true };

    const postData = querySnapshot.docs[0].data();
    const postDisplay = {
      ...postData,
      time: postData.time?.toDate().toISOString() || new Date().toISOString(),
      date: postData.date || ""
    };

    const protocol = host.includes('localhost') ? 'http' : 'https';
    const canonicalUrl = `${protocol}://${host}/blog/posts/${postDisplay.slug}`;

    return { props: { canonicalUrl, postDisplay } };
  } catch (error) {
    return { notFound: true };
  }
}