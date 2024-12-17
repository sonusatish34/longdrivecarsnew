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
import Loading from '@/pages/components/Loading';
import Slider from "react-slick";
// import React, { useEffect, useState } from 'react';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Head from 'next/head';

const ComponentName = ( { canonicalUrl }) => {
    const [categories, setCategories] = useState([]);
    const router = useRouter();
    const { category } = router.query; // Get the category name from the URL
    const [postlist, setPostlist] = useState([]);
    const [data, setData] = useState([]);
    const [searchQuery, setSearchQuery] = useState(''); // Search query state
    const [filteredPosts, setFilteredPosts] = useState([]); // Filtered posts state
    const [loading, setLoading] = useState(true); // State to manage loading
    const [error, setError] = useState(null); // State to manage errors
    const [cList, setCList] = useState();



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
                    slidesToShow: 4,
                    slidesToScroll: 1,
                    infinite: true,
                },
            },
            {
                breakpoint: 1020,
                settings: {
                    slidesToShow: 4,
                    slidesToScroll: 1,
                    infinite: true,
                },
            },

            {
                breakpoint: 770,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 2,
                    infinite: true,
                },
            },


            {
                breakpoint: 475,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1,
                    slidesToScroll: 3,
                    infinite: true,
                },
            },

            {
                breakpoint: 370,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1,
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
        const fetchCatAndPosts = async () => {
            setLoading(true); // Show loader before fetching

            try {
                // Fetch categories
                const catQuerySnapshot = await getDocs(collection(fireDb, "catgforldc"));
                const categoriesData = catQuerySnapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));

                if (category) {
                    const sortedCategories = categoriesData.sort((a, b) => {
                        if (a.name.toLowerCase() === category.toLowerCase()) return -1;
                        if (b.name.toLowerCase() === category.toLowerCase()) return 1;
                        return 0;
                    });
                    setCList(sortedCategories);
                } else {
                    setCList(categoriesData);
                }

                // Fetch posts for the selected category
                if (category) {
                    const postsQuery = query(collection(fireDb, "blogPost"),
                        where("categoryname", "array-contains", category),
                        where("blog_state", "==", "active")
                    );
                    const postsQuerySnapshot = await getDocs(postsQuery);
                    const posts = postsQuerySnapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
                    const sortedPosts = posts.sort((a, b) => new Date(b.createdAt) - new Date(a.createdAt));
                    setPostlist(sortedPosts);
                }
            } catch (err) {
                setError('Failed to load data');
                console.error(err); // You can also log errors to an external service like Sentry
            } finally {
                setLoading(false); // Hide loader after data is fetched or error occurs
            }
        };

        fetchCatAndPosts();
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


    if (loading) {
        return <Loading />; // Show loading component while data is being fetched
    }

    if (error) {
        return <div>Error: {error}</div>; // Show error message if data fetch fails
    }


    return (
        <BlogLayout onSearch={setSearchQuery} catg={category} recommended={true}>
            <Head>
                <title> No Deposit & Unlimited km - Self-Drive Car Rentals In vizag</title>
                <meta name="description" content="Self-drive cars start at 62/hr, We offer Long Drive Cars for the best prices with unlimited km , Book clDzire @ ₹83/hr, Baleno @ ₹91/hr, Ertiga @ ₹124/hr, Swift @ ₹83/hr, Thar @ ₹208/hr." />
                <meta name="viewport" content="width=device-width, initial-scale=1" />
                <meta property="og:title" content=" No Deposit & Unlimited km - Self-Drive Car Rentals In vizag" />
                <meta property="og:description" content="Self-drive cars start at 62/hr, We offer Long Drive Cars for the best prices with unlimited km , Book Dzire @ ₹83/hr, Baleno @ ₹91/hr, Ertiga @ ₹124/hr, Swift @ ₹83/hr, Thar @ ₹208/hr." />

                <link rel="canonical" href={canonicalUrl} />
            </Head>
            <div className="flex flex-col lg:flex-row">
                {/* Sidebar Section */}
                <div className="w-full lg:w-2/5 bg-white pt-6 lg:pt-24 px-4 lg:pl-20 sticky top-0">
                    <div className="flex flex-wrap flex-col gap-y-9 capitalize items-center">
                        {/* Breadcrumb */}
                        <p className="flex items-center gap-2 text-sm lg:text-base">
                            <span>{category}</span>
                            <MdOutlineKeyboardArrowRight size={20} />
                            <span>Recommended stories</span>
                        </p>

                        {/* Heading */}
                        <p className="text-center text-2xl lg:text-4xl font-semibold lg:w-80 lg:leading-relaxed">
                            Recommended stories in "{category}"
                        </p>

                        {/* Subheading */}
                        {/* <p className="text-lg font-semibold ">More Topics To Explore</p> */}

                        {/* <div className='xl:w-[400px] lg:w-[300px] w-44 mxs:w-60  text-center '>
                            <Slider key={JSON.stringify(cList)} {...settings} className="blog-carousal">
                                {cList?.length > 0 &&
                                    cList.map((cat, i) => (
                                        <Link
                                            key={`category-${i}`}
                                            href={`/blog/${cat.name.toLowerCase()}/recommended`}
                                            className={`capitalize font-medium text-white text-[14px] lg:text-base bg-[#1859c9] rounded-3xl lg:rounded-3xl ${cat.name.toLowerCase() === category?.toLowerCase() ? 'border-2 border-yellow-500 text-yellow-500 rounded-3xl' : ''}`}
                                        >
                                            {cat.name.toLowerCase()}
                                        </Link>
                                    ))}
                            </Slider>
                        </div> */}
                    </div>
                </div>

                {/* Posts Section */}
                <div className="w-full lg:w-3/5 bg-slate-50 pt-7 lg:pt-24 px-4 lg:pl-10 lg:h-screen lg:overflow-y-auto">
                    <div className="flex flex-col gap-6">
                        {filteredPosts.length > 0 ? (
                            filteredPosts.map((post, i) => (
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

                                        {/* <ul className="mt-3 flex items-center text-xs text-gray-500 space-x-4">
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
                                        </ul> */}
                                        <ul className="mt-4 flex flex-wrap justify-items-center space-x-4 text-xs">
                                            <li>{StaticData(post?.time?.seconds)}</li>
                                            <li className="flex items-center gap-1">
                                                <span><BiCategory className="text-blue-400" /></span>
                                                <span>{post?.categoryname[0]}</span>
                                            </li>
                                            <li>
                                                <div className="lg:flex gap-8 hidden">
                                                    <p className="flex items-center gap-2">
                                                        <span className="hover:cursor-pointer">
                                                            <GrLike size={10} />
                                                        </span>
                                                        <span>{post?.likes ? post?.likes : '1'}</span>
                                                    </p>
                                                    <p className="flex items-center gap-2">
                                                        <span className="hover:cursor-pointer">
                                                            <FaRegComment size={10} />
                                                        </span>
                                                        <span>{post?.comments?.length ? post?.comments?.length : '1'}</span>
                                                    </p>
                                                </div>
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
export async function getServerSideProps(context) {
    const { req, params } = context; // Extract `params` if using dynamic routes

    const host = req.headers.host || 'localhost';
    const category = params?.category || 'default-category'; // Example fallback for category

    const canonicalUrl = host.includes('.in')
        ? `https://www.longdrivecars.in/blog/${category}/recommended`
        : `https://www.longdrivecars.com/blog/${category}/recommended`;

    return {
        props: {
            canonicalUrl,
        },
    };
}

