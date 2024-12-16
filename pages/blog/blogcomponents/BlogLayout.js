import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { useState, useEffect } from 'react';
import { CiSearch } from "react-icons/ci";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { fireDb } from '../../../public/firebase';
import { getDocs, collection, query, where } from 'firebase/firestore';
import { MdExpandMore } from "react-icons/md";
import { MdExplore } from "react-icons/md";
import Footer from '../../components/Footer/Footer';

const BlogLayout = ({ children, catg, onSearch = () => { } }) => {
    console.log(catg,"catg");
    
    const [cList, setCList] = useState();
    useEffect(() => {
        const fetchCatAndPosts = async () => {

            try {
                // Fetch categories
                const catQuerySnapshot = await getDocs(collection(fireDb, "catgforldc"));
                const categoriesData = catQuerySnapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
                console.log(categoriesData, "categoriesData");

                if (0) {
                    const sortedCategories = categoriesData.sort((a, b) => {
                        if (a.name.toLowerCase() === category.toLowerCase()) return -1;
                        if (b.name.toLowerCase() === category.toLowerCase()) return 1;
                        return 0;
                    });
                    console.log(sortedCategories, "sortedCategories");

                    setCList(sortedCategories);
                } else {
                    setCList(categoriesData);
                }

                // Fetch posts for the selected category
            } catch (err) {
                // setError('Failed to load data');
                console.error(err); // You can also log errors to an external service like Sentry
            } finally {
                // setLoading(false); // Hide loader after data is fetched or error occurs
            }
        };

        fetchCatAndPosts();
    }, []);

    const [search, setSearch] = useState('');

    const handleSearch = (e) => {
        setSearch(e?.target?.value);
        onSearch(e?.target?.value);  // Pass the search query to CategoryPage
    };
    const settings = {
        className: "center",
        infinite: true,
        speed: 500,
        arrows: true,
        responsive: [
            {
                breakpoint: 2000,
                settings: {
                    slidesToShow: 4,
                    slidesToScroll: 4,
                },
            },
            {
                breakpoint: 1120,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1,
                },
            },
            {
                breakpoint: 770,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1,
                },
            },
            {
                breakpoint: 425,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1,
                    infinite: true,
                },
            },
            {
                breakpoint: 370,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 3,
                },
            },
            {
                breakpoint: 320,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2,
                    infinite: true,
                },
            },
        ],
    };

    return (
        <div>
            <div className='lg:px-14  py-1 border-8 border-blue-100 '>
                <div className='flex flex-col lg:flex-row lg:items-center lg:gap-28 gap-2  mxs:px-2'>
                    <div className='flex lg:items-center px-1'>
                        <Link href={`/blog`} className=''>
                            <Image
                                className="w-10 lg:w-14"
                                src="/logos/logo3.webp"
                                alt="Long Drive Cars"
                                width={500}
                                height={500}
                            />
                        </Link>
                        <div className='flex items-center'>
                            <p className='relative left-8'><CiSearch className='size-5' /></p>
                            <input
                                value={search}
                                type="text"
                                placeholder="Search"
                                onChange={handleSearch}
                                maxLength={10}
                                className='lg:rounded-full lg:w-56 w-52 border-none bg-gray-100   rounded-full lg:py-2 pl-10'
                            />
                        </div>
                    </div>

                    <div className="flex lg:gap-20 gap-10 items-center px-2 pt-1 border-t-[1p] ">
                        <Link
                            href={`/blog/explore-topics`}
                            className={`text-base py-1 lg:bg-[#1859c9] lg:rounded-3xl `}
                        >
                            <div className='hidden lg:flex  items-center space-x-2 p-1'>
                                <span className='w-fit rounded-full'><MdExplore className='size-6 text-white' /></span>
                                <span className=" text-sm text-white px-2 w-fit">Explore Topics</span>
                            </div>
                        </Link>
                        <div className='xl:w-[600px] lg:w-[600px] w-44 mxs:w-60 text-center'>
                            <Slider key={JSON.stringify(cList)} {...settings} className="blog-carousal">
                                {cList?.length > 0 &&
                                    cList.map((cat, i) => (
                                        <Link
                                            key={`category-${i}`}
                                            href={`/blog/${cat.name.toLowerCase()}`}
                                            className={`p-[5px] capitalize font-medium bg-[#1859c9]  text-[14px] lg:text-base  rounded-3xl lg:rounded-3xl ${cat.name.toLowerCase() === catg?.toLowerCase() ? 'border-2 border-yellow-500 text-yellow-500' : 'text-white'}`}
                                        >
                                            {cat.name.toLowerCase()}
                                        </Link>
                                    ))}
                            </Slider>
                        </div>
                    </div>
                </div>

            </div>
            <main>{children}</main>
            <Footer forblog={true}/>
        </div>
    );
};

export default BlogLayout;


