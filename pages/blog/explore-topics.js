import React, { Component, useEffect, useState } from "react";
import Slider from "react-slick";
// import React, { useEffect, useState } from 'react';
import BlogLayout from './blogcomponents/BlogLayout';
import { getDocs, collection } from 'firebase/firestore';
import { fireDb } from '../images/firebase';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Link from 'next/link';


import { MdExplore } from "react-icons/md";
const ComponentName = (props) => {
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
            // setCategories(cs);
            // Set the posts to the state
            // setPostlist(posts);

            // Extract unique categories
            // const uniqueCategories = Array.from(new Set(posts.map(post => post.categoryname)));
            // setCategories(uniqueCategories);
        };
        fetchCat();
    }, [])

    return (
        <BlogLayout>
            <div className="flex flex-col gap-5 px-2 lg:px-64 lg:py-10">
                <div className="flex items-center lg:gap-4 gap-5 ">
                    {/* <h2>Carousel Component</h2> */}
                    <Link
                        href={`/blog/explore-topics`}
                        className={`text-black text-base py-1 px-4 lg:bg-gray-100 lg:rounded-3xl `}
                    >
                        <div className='flex items-center space-x-1  '>
                            <span className='w-fit '><MdExplore size={[32]} /></span>
                            <span className="hidden lg:inline text-sm    w-fit ">Explore Topics</span>

                        </div>
                    </Link>

                    <div className="lg:w-[800px] w-44 lg:pl-5 py-4 lg:py-2">
                        <Slider  {...settings} className="blog-carousal">
                            {cList?.length && cList.map((category, i) => (
                                <p className=' rounded-3xl p-2 w-[40px]'>{category.name}</p>
                            ))}
                        </Slider>
                    </div>
                </div>
                <div className="justify-items-center ">
                    <p className="lg:text-3xl text-base font-bold pb-2 lg:pb-6">Explore Topics</p>
                    <ul className="grid grid-cols-2 lg:grid-cols-4 gap-3 lg:gap-4">
                        {cList?.length &&
                            cList.map((category, i) => (
                                <li key={i} className="p-4  rounded-lg">
                                    {category.name}
                                </li>
                            ))}
                    </ul>
                </div>

            </div>
        </BlogLayout>
    );
};

export default ComponentName;

