// import React from 'react';
// import Link from 'next/link';
// import Image from 'next/image';
// import HamburgerMenu from "@/pages/components/Hamburger/HamburgerMenu";
// import { BiCategory } from "react-icons/bi";
// import { CgProfile } from "react-icons/cg";
// import { MdOutlineExplore } from "react-icons/md";
// import { FaRegComment } from "react-icons/fa";
// import StaticData from '@/pages/images/StaticData';
// const PostsListing = ({ data }) => {

//     return (
//         <div className='pt-6 border-t-2 border-gray-300'>
//             <p className='text-left text-2xl pb-6 font-semibold'>Recommended stories</p>
//             <div className="grid lg:grid-cols-2 gap-x-8 gap-y-10 ">
//                 {/* {data.length > 0 ? data.map((post, i) => ( */}
//                 {data.length > 0 ? data.slice(0, 2).map((post, i) => (
//                     <div key={`key-${i}`} className={"w-[520px] h-[400px]"}>
//                         {post?.coverimages && (
//                             <Image
//                                 className="rounded-sm w-full h-[300px]"
//                                 src={post?.coverimages?.length ? post?.coverimages : tempimg}
//                                 alt={post?.coverimages}
//                                 width={500}
//                                 height={500}
//                                 priority={i === 0 ? true : false}
//                             />
//                         )}

//                         <h5 className="mb-2 hover:text-orange-400 font-bold text-lg text-left pt-4">
//                             <Link href={`/blog/posts/${post.slug.toLowerCase().replace(/ /g, "-")}`} className="block hover:text-primary">
//                                 {post?.title && post?.title.slice(0, 50)}
//                             </Link>
//                         </h5>

//                         <p className="text-left">
//                             {post?.description && post?.description.slice(0, 100)}...
//                         </p>
//                         <ul className="mb-4 mt-4 flex flex-wrap items-center space-x-4 text-xs">
//                             <li>{StaticData(post?.time?.seconds)}</li>
//                             <li className="flex items-center gap-1"><span><BiCategory className="text-blue-400" /></span><span>{post?.categoryname[0]}</span></li>
//                             {console.log(post?.categoryname, "post?.categoryname")}
//                             <li className="flex items-center gap-1"><span><CgProfile className="text-blue-400" /></span><span>{'LDCars_'}</span></li>
//                         </ul>
//                     </div>
//                 )) : (
//                     <p>No posts available for this category.</p>
//                 )}
//             </div>

//             <div className="grid grid-cols-3 gap-x-8 gap-y-10  pt-28">
//                 {/* {data.length > 0 ? data.map((post, i) => ( */}
//                 {data.length > 0 ? data.slice(2).map((post, i) => (
//                     <div key={`key-${i}`} className={"w-[350px] h-[400px]"}>
//                         {post?.coverimages && (
//                             <Image
//                                 className="rounded-md w-[400px] h-[200px]"
//                                 src={post?.coverimages?.length ? post?.coverimages : tempimg}
//                                 alt={post?.coverimages}
//                                 width={445}
//                                 height={230}
//                                 priority={i === 0 ? true : false}
//                             />
//                         )}

//                         <h5 className="mb-2 hover:text-orange-400 font-bold text-lg text-left pt-4">
//                             <Link href={`/blog/posts/${post.slug.toLowerCase().replace(/ /g, "-")}`} className="block hover:text-primary">
//                                 {post?.title && post?.title.slice(0, 50)}
//                             </Link>
//                         </h5>
//                         <p className="text-left">
//                             {post?.description && post?.description.slice(0, 70)}...
//                         </p>
//                         <ul className="mb-4 mt-4 flex flex-wrap items-center space-x-4 text-xs">
//                             <li>{StaticData(post?.time?.seconds)}</li>
//                             <li className="flex items-center gap-1"><span><BiCategory className="text-blue-400" /></span><span>{post?.categoryname}</span></li>
//                             <li className="flex items-center gap-1"><span><CgProfile className="text-blue-400" /></span><span>{'LDCars_'}</span></li>
//                             <li className="flex items-center gap-1"><span><FaRegComment className="text-blue-400" /></span><span>{'LDCars_'}</span></li>
//                         </ul>
//                     </div>
//                 )) : (
//                     <p>No posts available for this category.</p>
//                 )}
//             </div>
//         </div>
//     );
// };

// export default PostsListing;

import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { BiCategory } from "react-icons/bi";
import { CgProfile } from "react-icons/cg";
import { FaRegComment } from "react-icons/fa";
import StaticData from '@/pages/images/StaticData';

const PostsListing = ({ data }) => {
    return (
        <div className="lg:pt-6 border-t-2 border-gray-300">
            {/* <p className="text-xs lg:text-2xl pb-6 font-semibold">Recommended Stories</p> */}

            {/* First Section: Two Main Posts */}
            <div className="lg:grid lg:grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
                {data.length > 0 ? data.slice(0, 2).map((post, i) => (
                    <div
                        key={`key-${i}`}
                        className="w-full lg:w-[520px] h-auto px-3"
                    >
                        {post?.coverimages && (
                            <Image
                                className="rounded-sm w-full h-auto object-cover"
                                src={post?.coverimages?.length ? post?.coverimages : '/tempimg.jpg'}
                                alt={post?.title || 'Post Image'}
                                width={500}
                                height={300}
                                priority={i === 0 ? true : false}
                            />
                        )}

                        <h5 className="mb-2 hover:text-orange-400 font-bold text-lg text-left pt-4">
                            <Link
                                href={`/blog/posts/${post.slug.toLowerCase().replace(/ /g, "-")}`}
                                className="block hover:text-primary"
                            >
                                {post?.title && post?.title.slice(0, 50)}
                            </Link>
                        </h5>

                        <p className="text-left text-sm lg:text-base">
                            {post?.description && post?.description.slice(0, 100)}...
                        </p>

                        <ul className="mb-4 mt-4 flex flex-wrap items-center space-x-4 text-xs">
                            <li>{StaticData(post?.time?.seconds)}</li>
                            <li className="flex items-center gap-1">
                                <BiCategory className="text-blue-400" />
                                <span>{post?.categoryname?.[0]}</span>
                            </li>
                            <li className="flex items-center gap-1">
                                <CgProfile className="text-blue-400" />
                                <span>LDCars_</span>
                            </li>
                        </ul>
                    </div>
                )) : (
                    <p>No posts available for this category.</p>
                )}
            </div>

            {/* Second Section: Remaining Posts */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8 pt-12">
                {data.length > 0 ? data.slice(2).map((post, i) => (
                    <div key={`key-${i}`} className="w-full h-auto px-3">
                        {post?.coverimages && (
                            <Image
                                className="rounded-md w-full h-auto object-cover"
                                src={post?.coverimages?.length ? post?.coverimages : '/tempimg.jpg'}
                                alt={post?.title || 'Post Image'}
                                width={445}
                                height={230}
                                priority={i === 0 ? true : false}
                            />
                        )}

                        <h5 className="mb-2 hover:text-orange-400 font-bold text-lg text-left pt-4">
                            <Link
                                href={`/blog/posts/${post.slug.toLowerCase().replace(/ /g, "-")}`}
                                className="block hover:text-primary"
                            >
                                {post?.title && post?.title.slice(0, 50)}
                            </Link>
                        </h5>

                        <p className="text-left text-sm lg:text-base">
                            {post?.description && post?.description.slice(0, 70)}...
                        </p>

                        <ul className="mb-4 mt-4 flex flex-wrap items-center space-x-4 text-xs">
                            <li>{StaticData(post?.time?.seconds)}</li>
                            <li className="flex items-center gap-1">
                                <BiCategory className="text-blue-400" />
                                <span>{post?.categoryname}</span>
                            </li>
                            <li className="flex items-center gap-1">
                                <CgProfile className="text-blue-400" />
                                <span>LDCars_</span>
                            </li>
                            <li className="flex items-center gap-1">
                                <FaRegComment className="text-blue-400" />
                                <span>LDCars_</span>
                            </li>
                        </ul>
                    </div>
                )) : (
                    <p>No posts available for this category.</p>
                )}
            </div>
        </div>
    );
};

export default PostsListing;
