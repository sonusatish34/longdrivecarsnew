"use client";

import React, { useState, useEffect, useRef } from "react";
import Link from "next/link";
import Image from "next/image";
import { CiSearch } from "react-icons/ci";
import { MdExplore } from "react-icons/md";
import Footer from "../../components/Footer/Footer";
import Head from "next/head";
import { fireDb } from "../../../public/firebase";
import { getDocs, collection } from "firebase/firestore";
import { IoIosArrowDropleftCircle } from "react-icons/io";
import { IoIosArrowDroprightCircle } from "react-icons/io";

// Swiper
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";

const BlogLayout = ({
    canonicalUrl,
    recommended,
    children,
    catg,
    onSearch = () => { },
}) => {
    const [cList, setCList] = useState([]);
    const [search, setSearch] = useState("");

    const prevRef = useRef(null);
    const nextRef = useRef(null);
    const swiperRef = useRef(null);

    useEffect(() => {
        const fetchCatAndPosts = async () => {
            try {
                const catQuerySnapshot = await getDocs(
                    collection(fireDb, "catgforldc")
                );
                const categoriesData = catQuerySnapshot.docs.map((doc) => ({
                    id: doc.id,
                    ...doc.data(),
                }));
                setCList(categoriesData);
            } catch (err) {
                console.error(err);
            }
        };
        fetchCatAndPosts();
    }, []);

    useEffect(() => {
        if (
            swiperRef.current &&
            swiperRef.current.params &&
            prevRef.current &&
            nextRef.current
        ) {
            swiperRef.current.params.navigation.prevEl = prevRef.current;
            swiperRef.current.params.navigation.nextEl = nextRef.current;
            swiperRef.current.navigation.init();
            swiperRef.current.navigation.update();
        }
    }, [cList]);

    const handleSearch = (e) => {
        setSearch(e?.target?.value);
        onSearch(e?.target?.value);
    };

    return (
        <div>
            <div className="xl:px-14 lg:border-8 lg:border-blue-100">
                <div className="flex flex-col lg:flex-row lg:items-center xl:gap-14 lg:gap-6 gap-2">
                    {/* Logo & Search */}
                    <div className="flex justify-between gap-x-1 mxs:gap-x-4 px-2 mxs:px-3 lg:items-center border-8 border-blue-100 lg:border-none">
                        <Link href={`/`} className="py-4">
                            <p className="font-bold text-[#0456e8] text-sm mxs:text-base xl:text-4xl lg:text-3xl lg:w-full w-full popins-text">
                                Long Drive Cars App
                            </p>
                        </Link>
                        <div className="flex items-center">
                            <p className="relative left-8">
                                <CiSearch className="size-5" />
                            </p>
                            <input
                                value={search}
                                type="text"
                                placeholder="Search"
                                onChange={handleSearch}
                                maxLength={10}
                                className="lg:rounded-full xl:w-56 w-28 mxs:w-32 py-1 border-none bg-gray-100 rounded-full lg:py-2 pl-10"
                            />
                        </div>
                    </div>

                    {/* Navigation & Categories */}
                    <div className="flex xl:gap-20 gap-10 items-center px-2 pt-1">
                        <Link
                            href={`/blog/explore-topics`}
                            className={`text-base py-1 lg:bg-[#1859c9] lg:rounded-3xl`}
                        >
                            <div className="lg:flex items-center space-x-2">
                                <span className="w-fit rounded-full lg:pl-1">
                                    <MdExplore className="size-6 text-black lg:text-white" />
                                </span>
                                <span className="hidden lg:block text-sm text-white lg:pr-2">
                                    Explore Topics
                                </span>
                            </div>
                        </Link>

                        {/* Swiper with Custom Nav */}
                        <div className="relative flex items-center justify-center xl:w-[350px] lg:w-[255px] w-60 mxs:w-72">
                            {/* Custom buttons */}
                            <button
                                ref={prevRef}
                                className="z-10 mx-2"
                            >
                                <IoIosArrowDropleftCircle className="size-6" />
                            </button>

                            {/* Swiper */}
                            <Swiper
                                modules={[Navigation]}
                                spaceBetween={10}
                                slidesPerView={3}
                                onSwiper={(swiper) => (swiperRef.current = swiper)}
                                breakpoints={{
                                    2000: { slidesPerView: 2 },
                                    1120: { slidesPerView: 2 },
                                    770: { slidesPerView: 2 },
                                    425: { slidesPerView: 2 },
                                    370: { slidesPerView: 2 },
                                    320: { slidesPerView: 2 },
                                }}
                                loop={true}
                                navigation={true}
                            >
                                {cList?.length > 0 &&
                                    cList.map((cat, i) => (
                                        <SwiperSlide key={`category-${i}`}>
                                            <Link
                                                href={`/blog/${cat.name.toLowerCase()}${recommended ? "/recommended" : ""
                                                    }`}
                                                className={`flex justify-center items-center w-[80%] p-1 capitalize font-medium bg-[#1859c9] text-[14px] lg:text-sm rounded-3xl ${cat.name.toLowerCase() === catg?.toLowerCase()
                                                        ? "border-2 border-yellow-500 text-yellow-500"
                                                        : "text-white"
                                                    }`}
                                            >
                                                {cat.name.toLowerCase()}
                                            </Link>
                                        </SwiperSlide>
                                    ))}
                            </Swiper>

                            {/* Custom buttons */}
                            <button
                                ref={nextRef}
                                className="z-10 mx-2"
                            >
                                <IoIosArrowDroprightCircle className="size-6" />
                            </button>
                        </div>

                    </div>
                </div>
            </div>

            <main>{children}</main>
            <Footer forblog={true} />
        </div>
    );
};

export default BlogLayout;
