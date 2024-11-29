
import React, { useState, useEffect } from 'react';
import { useRouter } from 'next/router'; // For routing and getting category from URL
import { fireDb } from '../../../public/firebase';
import { getDocs, collection, query, where } from 'firebase/firestore';
import PostsListing from '../blogcomponents/PostsListing';
import BlogLayout from '../blogcomponents/BlogLayout';
import { MdOutlineExplore } from "react-icons/md";
import { GoDotFill } from "react-icons/go";
import Link from 'next/link';
import Slider from "react-slick";
// import React, { useEffect, useState } from 'react';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import { MdExpandMore } from "react-icons/md";
import { MdExplore } from "react-icons/md";
const CategoryPage = () => {
    const [categories, setCategories] = useState([]);
    const router = useRouter();
    const { category } = router.query; // Get the category name from the URL
    const [postlist, setPostlist] = useState([]);
    const [searchQuery, setSearchQuery] = useState(''); // Search query state
    const [filteredPosts, setFilteredPosts] = useState([]); // Filtered posts state
    const [cList, setCList] = useState();

    const settings = {
        className: "center",
        // centerMode: true,
        infinite: true,
        // centerPadding: "60px",
        slidesToShow: 6,
        speed: 500,
        arrows: true,
        responsive: [

            {
                breakpoint: 320,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2,
                    infinite: true,
                },
            },

            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    infinite: true,
                },
            },

            {
                breakpoint: 2080,
                settings: {
                    slidesToShow: 7,
                    slidesToScroll: 5,
                    infinite: true,
                },
            },

        ],
    };
    useEffect(() => {
        const fetchCat = async () => {
            const querySnapshot = await getDocs(collection(fireDb, "categories"));
            const cs = querySnapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
            console.log(cs, "09876");
            setCList(cs);
        };
        fetchCat();
    }, [])
    useEffect(() => {
        if (category) {
            console.log(category, "cattt");

            const fetchPostsByCategory = async () => {
                // Query posts where the category matches the selected category
                const q = query(collection(fireDb, "blogPost"), where("categoryname", "array-contains", category));
                const querySnapshot = await getDocs(q);
                const posts = querySnapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
                setPostlist(posts);
            };
            fetchPostsByCategory();
            const fetchCat = async () => {
                const querySnapshot = await getDocs(collection(fireDb, "categories"));
                const cs = querySnapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
                setCategories(cs);
            };
            fetchCat();
        }
    }, [category]);

    useEffect(() => {
        if (searchQuery) {
            const filtered = postlist.filter(post =>
                post.title.toLowerCase().includes(searchQuery.toLowerCase())
            );
            setFilteredPosts(filtered);
        } else {
            setFilteredPosts(postlist);
        }
    }, [searchQuery, postlist]);

    return (
        <div>
            <BlogLayout onSearch={setSearchQuery}>
                <div className=' lg:px-32 flex items-center  '>
                   

                    <div className='py-10 px-[6px] justify-center'>
                        <div className=" flex lg:gap-14 gap-7   items-center ">
                            <Link
                                href={`/blog/explore-topics`}
                                className={`text-black text-base py-1 px-4 lg:bg-gray-100 lg:rounded-3xl `}
                            >
                                <div className='flex items-center space-x-1  '>
                                    <span className='w-fit rounded-full'><MdExplore size={[32]} /></span>
                                    <span className="hidden lg:inline text-sm p-1 w-fit ">Explore Topics</span>

                                </div>
                            </Link>
                            <div className='lg:w-[800px]  w-44 text-center  '>
                                <Slider  {...settings} className="blog-carousal">
                                    {cList?.length && cList.map((cat, i) => (
                                        <Link
                                            key={`category-${i}`}
                                            href={`/blog/${cat?.name.toLowerCase()}`}
                                            className={`py-1 capitalize font-normal text-black text-[14px] lg:text-sm  lg:bg-gray-100  lg:rounded-3xl ${cat?.name.toLowerCase() === category ? ' border-2 border-black rounded-3xl' : ''}`}
                                        >
                                            {cat?.name.toLowerCase()}
                                        </Link>
                                    ))}
                                </Slider>
                            </div>
                        </div>
                        <p className="capitalize text-4xl text-center font-semibold pt-11 pb-3 buch-font">{category}</p>
                        <ul className='flex justify-center items-center pt-2 gap-3'>
                            <li>Topic</li>
                            <li><GoDotFill /></li>
                            <li>{postlist?.length} stories</li>
                        </ul>
                        <div className='text-center flex justify-center pt-10'>
                            <PostsListing data={filteredPosts} />
                        </div>

                        {/* <div className='px-3 py-10 lg:py-10 flex flex-row'>
                            <Link href={`/blog/${category ? category + '/' : ''}recommended`}>
                                <span className='border-2 border-black rounded-full p-2 bg-gray-200 text-sm'>See more  </span>

                            </Link>
                        </div> */}

                        <div className=" py-10 lg:py-10 flex flex-row">
                            <Link href={`/blog/${category ? category + '/' : ''}recommended`} className="flex  space-x-2">
                                <span className="border-2 border-black rounded-full p-2 bg-gray-200 text-sm flex items-center space-x-2">
                                    <span>See more</span>
                                    <MdExpandMore className="text-lg" />
                                </span>
                            </Link>
                        </div>
                    </div>
                </div>
            </BlogLayout>
        </div>
    );
};

export default CategoryPage;
