import React, { Component, useEffect, useState } from "react";
import Slider from "react-slick";
// import React, { useEffect, useState } from 'react';
import BlogLayout from './blogcomponents/BlogLayout';
import { getDocs, collection } from 'firebase/firestore';
import { fireDb } from '../images/firebase';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
const ComponentName = (props) => {
    const [cList, setCList] = useState();

    const settings = {
        className: "center",
        centerMode: true,
        infinite: true,
        // centerPadding: "60px",
        slidesToShow: 4,
        speed: 500,
        arrows: true
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
            <div className="flex flex-col gap-5 justify-center items-center py-20">
                <div>
                    {/* <h2>Carousel Component</h2> */}

                    <div className="w-[600px] pl-5 py-5">
                        <Slider  {...settings} className="blog-carousal">
                            {cList?.length && cList.map((category, i) => (
                                <p className='bg-gray-200 rounded-3xl p-2 w-[40px]'>{category.name}</p>
                            ))}
                        </Slider>
                    </div>
                </div>
                <div>
                    <p className="text-3xl font-bold">Explore Topics</p>
                    <ul className="flex flex-col w-32">
                        {cList?.length && cList.map((category, i) => (
                            <li className='bg-gray-200 p-2'>{category.name}</li>
                        ))}
                    </ul>
                </div>
            </div>
        </BlogLayout>
    );
};

export default ComponentName;

