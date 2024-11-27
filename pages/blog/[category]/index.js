
import React, { useState, useEffect } from 'react';
import { useRouter } from 'next/router'; // For routing and getting category from URL
import { fireDb } from '../../images/firebase';
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
        arrows: true
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
                <div className='px-40 flex justify-center kievitot-font'>
                    <div className='py-10'>
                        <div className=" flex gap-16">
                            <Link
                                href={`/blog/explore-topics`}
                                className={`text-black text-base py-1 px-4 bg-gray-100 rounded-3xl w-40`}
                            >
                                Explore Topics
                            </Link>
                            <div className='w-[800px]'>
                                <Slider  {...settings} className="blog-carousal">
                                    {cList?.length && cList.map((cat, i) => (
                                        <Link
                                            key={`category-${i}`}
                                            href={`/blog/${cat?.name.toLowerCase()}`}
                                            className={`capitalize font-medium text-black text-base py-1 px-4 bg-gray-100 rounded-3xl ${cat?.name.toLowerCase() === category ? ' border-2 border-black rounded-3xl' : ''}`}
                                        >
                                            {cat?.name.toLowerCase()}
                                        </Link>
                                    ))}
                                </Slider>
                            </div>
                        </div>
                        <p className="capitalize text-4xl text-center font-semibold pt-11 pb-3">{category}</p>
                        <ul className='flex justify-center items-center pt-2 gap-3'>
                            <li>Topic</li>0
                            <li><GoDotFill /></li>
                            <li>{filteredPosts?.length} stories</li>
                        </ul>
                        <div className='text-center flex justify-center pt-10'>
                            <PostsListing data={filteredPosts} />
                        </div>
                        <div className=''>
                            <Link href={`/blog/${category ? category + '/' : ''}recommended`}>
                                <span className='border-2 border-black rounded-full p-2 bg-gray-200 text-sm'>See more recommended stories</span>
                            </Link>
                        </div>
                    </div>
                </div>
            </BlogLayout>
        </div>
    );
};

export default CategoryPage;
