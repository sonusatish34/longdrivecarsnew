import BlogLayout from '../../blogcomponents/BlogLayout';
import React, { useState, useEffect } from 'react';
import { useRouter } from 'next/router'; // For routing and getting category from URL
import { fireDb } from '../../../images/firebase';
import { getDocs, collection, query, where } from 'firebase/firestore';
import { MdOutlineExplore } from "react-icons/md";
import { GoDotFill } from "react-icons/go";
import { BiCategory } from "react-icons/bi";
import { CgProfile } from "react-icons/cg";
import Link from 'next/link';
import Image from 'next/image';
import { MdOutlineKeyboardArrowRight } from "react-icons/md";
import StaticData from '../../../images/StaticData';

const ComponentName = (props) => {
    const [categories, setCategories] = useState([]);
    const router = useRouter();
    const { category } = router.query; // Get the category name from the URL
    const [postlist, setPostlist] = useState([]);
    const [data, setData] = useState([]);
    // const timeAgo = (timestamp) => {
    //     const currentTime = new Date();
    //     const postTime = new Date(timestamp * 1000); // Convert from seconds to milliseconds

    //     const timeDiff = currentTime - postTime; // Difference in milliseconds

    //     const seconds = Math.floor(timeDiff / 1000);
    //     const minutes = Math.floor(seconds / 60);
    //     const hours = Math.floor(minutes / 60);
    //     const days = Math.floor(hours / 24);

    //     if (days > 0) {
    //         return `${days} day${days > 1 ? 's' : ''} ago`;
    //     }
    //     if (hours > 0) {
    //         return `${hours} hour${hours > 1 ? 's' : ''} ago`;
    //     }
    //     if (minutes > 0) {
    //         return `${minutes} minute${minutes > 1 ? 's' : ''} ago`;
    //     }
    //     return `${seconds} second${seconds > 1 ? 's' : ''} ago`;
    // };
    useEffect(() => {
        if (category) {
            console.log(category, "cattt");

            const fetchPostsByCategory = async () => {
                // Query posts where the category matches the selected category
                const q = query(collection(fireDb, "blogPost"), where("categoryname", "==", category));
                const querySnapshot = await getDocs(q);
                const posts = querySnapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
                setPostlist(posts);
                setData(posts);
            };

            fetchPostsByCategory();
            const fetchCat = async () => {
                const querySnapshot = await getDocs(collection(fireDb, "categories"));
                const cs = querySnapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
                console.log(cs, "09876");
                setCategories(cs);
                // Set the posts to the state
                // setPostlist(posts);

                // Extract unique categories
                // const uniqueCategories = Array.from(new Set(posts.map(post => post.categoryname)));
                // setCategories(uniqueCategories);
            };

            fetchCat();
        }
    }, [category]);
    // sohne, "Helvetica Neue", Helvetica, Arial, sans-serif
    return (
        <BlogLayout >
            <div class="flex">
                <div class="w-2/5 bg-gray-200 pt-24 pl-20 sticky top-0">
                    <div className='flex flex-col gap-4 capitalize'>
                        <p className='flex items-center gap-2'><span>{category}</span> <span><MdOutlineKeyboardArrowRight size={20} /></span> <span>Recommended stories</span></p>
                        <p className='text-5xl font-semibold'><span>Recommended stories in "{category}"</span></p>
                        <p className='text-lg font-semibold'>More Topics To Explore</p>
                        {categories?.map((cat,index)=>{

                           return <Link href={`/blog/${cat?.name}/recommended`} className='p-1 rounded-lg bg-slate-100 w-fit'>{cat?.name}</Link>
                            
                        })}
                        <div>
                            <ul>
                                <li></li>
                            </ul>
                        </div>
                    </div>
                </div>
                <div class="w-3/5 bg-slate-50 pt-24 h-screen overflow-y-auto pl-10">
                    <div className="flex flex-col gap-x-8 gap-y-10  pt-28">
                        {/* {data.length > 0 ? data.map((post, i) => ( */}
                        {data.length > 0 ? data.map((post, i) => (
                            <div className='border-b-2 border-gray-200 flex gap-3 w-[600px]'>
                                <div className='w-[400px]'>
                                    <h5 className="mb-2 hover:text-orange-400 font-bold text-2xl text-left pt-4">
                                        <Link href={`/blog/posts/${post.slug.toLowerCase().replace(/ /g, "-")}`} className="block hover:text-primary">
                                            {post?.title && post?.title.slice(0, 50)}
                                        </Link>
                                    </h5>
                                    <p className="text-left">
                                        {post?.description && post?.description.slice(0, 100)}...
                                    </p>
                                    <ul className="mb-4 mt-4 flex flex-wrap items-center space-x-4 text-xs">
                                        <li>{StaticData(post?.time?.seconds)}</li>
                                        <li className="flex items-center gap-1"><span><BiCategory className="text-blue-400" /></span><span>{post?.categoryname}</span></li>
                                        <li className="flex items-center gap-1"><span><CgProfile className="text-blue-400" /></span><span>{post?.postauthor}</span></li>
                                    </ul>
                                </div>
                                <div>
                                    {post?.coverimages && (
                                        <Image
                                            className="rounded-sm w-[180px] h-[180px]"
                                            src={post?.coverimages?.length ? post?.coverimages : tempimg}
                                            alt={post?.coverimages}
                                            width={500}
                                            height={500}
                                            priority={i === 0 ? true : false}
                                        />
                                    )}
                                </div>
                                <div id="commentsSection"></div>
                            </div>
                        )) : (
                            <p>No posts available for this category.</p>
                        )}
                    </div>
                </div>
            </div>

        </BlogLayout>
    );
};

export default ComponentName;