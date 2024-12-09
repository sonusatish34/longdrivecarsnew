import BlogLayout from '../../blogcomponents/BlogLayout';
import React, { useState, useEffect } from 'react';
import { useRouter } from 'next/router'; // For routing and getting category from URL
import { fireDb } from '../../../../public/firebase';
import { getDocs, collection, query, where } from 'firebase/firestore';
import { MdOutlineExplore } from "react-icons/md";
import { GoDotFill } from "react-icons/go";
import { BiCategory } from "react-icons/bi";
import { CgProfile } from "react-icons/cg";
import { FaRegComment } from "react-icons/fa";
import { GrLike } from "react-icons/gr";
import Link from 'next/link';
import Image from 'next/image';
import { MdOutlineKeyboardArrowRight } from "react-icons/md";
import StaticData from '../../../images/StaticData';

import Slider from "react-slick";
// import React, { useEffect, useState } from 'react';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const ComponentName = (props) => {
    const [categories, setCategories] = useState([]);
    const router = useRouter();
    const { category } = router.query; // Get the category name from the URL
    const [postlist, setPostlist] = useState([]);
    const [data, setData] = useState([]);



    const settings = {
        className: "center",
        // centerMode: true,
        infinite: true,
        // centerPadding: "60px",
        // slidesToShow: 6,
        speed: 500,
        arrows: true,
        responsive: [
            {
                breakpoint: 2000, // Largest breakpoint first
                settings: {
                    slidesToShow: 5,
                    slidesToScroll: 5,
                    infinite: true,
                },
            },
            {
                breakpoint: 1020,
                settings: {
                    slidesToShow: 5,
                    slidesToScroll: 5,
                    infinite: true,
                },
            },

            {
                breakpoint: 770,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 3,
                    infinite: true,
                },
            },


            {
                breakpoint: 425,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 3,
                    slidesToScroll: 3,
                    infinite: true,
                },
            },

            {
                breakpoint: 370,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 3,
                    infinite: true,
                },
            },

            {
                breakpoint: 320, // Smallest breakpoint last
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2,
                    infinite: true,
                },
            },
        ],

    };
    useEffect(() => {
        if (category) {
            console.log(category, "cattt");

            const fetchPostsByCategory = async () => {
                // Query posts where the category matches the selected category
                const q = query(collection(fireDb, "blogPost"), where("categoryname", "array-contains", category));
                const querySnapshot = await getDocs(q);
                const posts = querySnapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
                setPostlist(posts);
                setData(posts);
            };

            fetchPostsByCategory();
            const fetchCat = async () => {
                const querySnapshot = await getDocs(collection(fireDb, "catgforldc"));
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

    return (
        <BlogLayout>
            <div className="flex flex-col lg:flex-row">
                {/* Sidebar Section */}
                <div className="w-full lg:w-2/5 bg-white pt-6 lg:pt-24 px-4 lg:pl-20 sticky top-0">
                    <div className="flex flex-wrap gap-4 capitalize justify-center">
                        {/* Breadcrumb */}
                        <p className="flex items-center gap-2 text-sm lg:text-base">
                            <span>{category}</span>
                            <MdOutlineKeyboardArrowRight size={20} />
                            <span>Recommended stories</span>
                        </p>

                        {/* Heading */}
                        <p className="text-2xl lg:text-3xl font-semibold leading-tight">
                            Recommended stories in "{category}"
                        </p>

                        {/* Subheading */}
                        <p className="text-lg font-semibold ">More Topics To Explore</p>
                       
                        <div className='xl:w-[400px] lg:w-[300px] w-44 mxs:w-60  text-center  '>
                            <Slider key={JSON.stringify(categories)} {...settings} className="blog-carousal">
                                {categories?.length > 0 &&
                                    categories.map((cat, i) => (
                                        <Link
                                            key={`category-${i}`}
                                            href={`/blog/${cat.name.toLowerCase()}/recommended`}
                                            className={`capitalize font-medium text-black text-[14px] lg:text-base  bg-gray-200 rounded-3xl lg:rounded-3xl ${cat.name.toLowerCase() === category?.toLowerCase() ? 'border-2 border-black rounded-3xl' : ''
                                                }`}
                                        >
                                            {cat.name.toLowerCase()}
                                        </Link>
                                    ))}
                            </Slider>
                        </div>



                    </div>
                </div>

                {/* Posts Section */}
                <div className="w-full lg:w-3/5 bg-slate-50 pt-7 lg:pt-24 px-4 lg:pl-10 lg:h-screen lg:overflow-y-auto">
                    <div className="flex flex-col gap-6">
                        {data.length > 0 ? (
                            data.map((post, i) => (
                                <div
                                    key={i}
                                    className="border-b-2 border-gray-100 flex flex-row gap-1 pb-4"
                                >
                                    {/* Post Content */}
                                    <div className="lg:w-3/4 w-4/6">
                                        <h5 className=" mb-2 font-bold text-lg lg:text-2xl hover:text-orange-400">
                                            <Link
                                                href={`/blog/posts/${post.slug
                                                    .toLowerCase()
                                                    .replace(/ /g, "-")}`}
                                                className="block"
                                            >
                                                {post?.title?.slice(0, 50)}
                                            </Link>
                                        </h5>
                                        <p className="text-gray-600 text-sm lg:text-base">
                                            {post?.description?.slice(0, 100)}...
                                        </p>
                        
                                        <ul className="mt-3 flex items-center text-xs text-gray-500 space-x-4">
                                            {/* <li>{StaticData(post?.time?.seconds)}</li>
                                            <li className="flex items-center gap-1">
                                                <BiCategory className="text-blue-400" />
                                                {post?.categoryname}
                                            </li> */}
                                             <li>{StaticData(post?.time?.seconds)}</li>
                                            <li className="flex items-center gap-1">
                                                <BiCategory className="text-blue-400" />
                                                <span>
                                                    {Array.isArray(post?.categoryname)
                                                        ? post.categoryname.join(", ")
                                                        : post?.categoryname}
                                                </span>
                                            </li>
                                            <li className="lg:flex items-center gap-1 hidden ">
                                                <CgProfile className="text-blue-400" />
                                                {post?.postauthor}
                                            </li>
                                        </ul>
                                    </div>

                                    {/* Post Image */}
                                    <div className="lg:w-1/4 w-4/12">
                                    <Link
                                                href={`/blog/posts/${post.slug
                                                    .toLowerCase()
                                                    .replace(/ /g, "-")}`}
                                                className="block"
                                            >
                                        {post?.coverimages && (
                                            <Image
                                                className="rounded-sm lg:w-[150px] lg:h-[104px] w-[80px] h-[80px]"
                                                src={
                                                    post?.coverimages?.length
                                                        ? post?.coverimages
                                                        : tempimg
                                                }
                                                alt={post?.coverimages}
                                                width={500}
                                                height={500}
                                                priority={i === 0}
                                            />
                                        )}
                                        </Link>
                                    </div>
                                </div>
                            ))
                        ) : (
                            <p className="text-center text-gray-500">
                                No posts available for this category.
                            </p>
                        )}
                    </div>
                </div>
            </div>
        </BlogLayout>
    );

};

export default ComponentName;