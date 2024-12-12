
import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { BiCategory } from "react-icons/bi";
import { CgProfile } from "react-icons/cg";
import { FaRegComment } from "react-icons/fa";
import { GrLike } from "react-icons/gr";
import StaticData from '@/pages/images/StaticData';

const PostsListing = ({ data }) => {
    return (
        <div className="lg:pt-6 border-t-2 border-gray-300 pt-8">
            {/* <p className="text-xs lg:text-2xl pb-6 font-semibold">Recommended Stories</p> */}

            {/* First Section: Two Main Posts */}
            <div className="grid lg:grid-cols-2 grid-cols-1 gap-x-8 gap-y-10">
                {data?.length > 0 ? data.slice(0, 2).map((post, i) => (
                    <div key={`key-${i}`} className="w-full lg:w-[400px] xl:w-full lg:h-[400px]  xl:h-[500px] h-auto flex flex-col gap-y-6 px-3 lg:px-0">
                        {/* Image */}
                        <Link href={`/blog/posts/${post.slug.toLowerCase().replace(/ /g, "-")}`} className="block hover:text-orange-500 font-extrabold text-lg xl:text-2xl text-left pt-4 tracking-tight">
                            {post?.coverimages && (
                                <Image
                                    className="rounded-sm w-full lg:h-[350px] h-auto"
                                    src={post?.coverimages?.length ? post?.coverimages : tempimg}
                                    alt={post?.coverimages}
                                    width={500}
                                    height={500}
                                    priority={i === 0 ? true : false}
                                />
                            )}
                        </Link>

                        {/* Content Section */}
                        <div className="flex-1">
                            <h5 className="mb-2">
                                <Link href={`/blog/posts/${post.slug.toLowerCase().replace(/ /g, "-")}`} className="block hover:text-orange-500 font-extrabold text-lg xl:text-2xl text-left pt-4 tracking-tight">
                                    <p className='lg:h-16 h-24 pt'>{post?.title && post?.title.slice(0, 80)}</p>
                                    <p className="text-left text-gray-600 text-sm   pt-4 tracking-tight font-light">
                                        {post?.description && post?.description.slice(0, 160)}...
                                    </p>
                                </Link>
                            </h5>
                        </div>

                        {/* Bottom details (Likes, Time, Comments) */}
                        <ul className="mb-4 mt-auto flex flex-wrap justify-items-center space-x-4 text-xs">
                            <li>{StaticData(post?.time?.seconds)}</li>
                            <li className="flex items-center gap-1">
                                <span><BiCategory className="text-blue-400" /></span>
                                <span>{post?.categoryname[0]}</span>
                            </li>
                            <li>
                                <div className="flex gap-8">
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
                )) : (
                    <p>No posts available for this category.</p>
                )}
            </div>

            {/* Second Section: Remaining Posts */}
            <div className="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-3 gap-4 lg:gap-4 xl:gap-10 lg:pt-32 pt-10">
                {data?.length > 0 ? data.slice(2, 8).map((post, i) => (
                    <div key={`key-${i}`} className="lg:px-0 w-full lg:w-[250px] xl:w-full">
                        <Link href={`/blog/posts/${post.slug.toLowerCase().replace(/ /g, "-")}`} className="block hover:text-orange-500 font-extrabold text-lg xl:text-2xl text-left tracking-tight">
                            {post?.coverimages && (
                                <Image
                                    className="rounded-md  lg:h-[200px] h-[100px] object-cover"
                                    src={post?.coverimages?.length ? post?.coverimages : '/tempimg.jpg'}
                                    alt={post?.title || 'Post Image'}
                                    width={445}
                                    height={230}
                                    priority={i === 0 ? true : false}
                                />
                            )}
                        </Link>
                        <p className=" lg:pb-3 hover:text-orange-400 font-bold lg:text-lg text-xs text-left pt-4 h-12 lg:h-20">
                            <Link href={`/blog/posts/${post.slug.toLowerCase().replace(/ /g, "-")}`} className="block hover:text-primary">
                                {post?.title && post?.title.slice(0, 30)}
                            </Link>
                        </p>
                        <p className="text-left lg:text-xs text-xs h-12 lg:h-14 pt-2">
                            {post?.description && post?.description.slice(0, 40)}...
                        </p>

                        <ul className=" pt-1 lg:pt-4  flex flex-wrap items-center space-x-2 lg:gap-3 text-xs">
                            <li>
                                <div className='flex gap-2 items-center lg:gap-8 py-2'>
                                    <p className='flex items-center gap-1'>
                                        <span className='hover:cursor-pointer'>
                                            <GrLike size={14} className='lg:size-[15px]' />
                                        </span>
                                        <span>{post?.likes ? post?.likes : '1'}</span> {/* Display likes count from state */}
                                    </p>
                                    <p className='hidden lg:flex items-center gap-1'>
                                        <span className='hover:cursor-pointer'>
                                            <FaRegComment size={14} className='lg:size-[15px]' />
                                        </span>
                                        <span>{post?.comments?.length ? post?.comments?.length : '1'}</span> {/* Display comments count from state */}
                                    </p>
                                </div>
                            </li>
                            <li className='lg:text-sm text-xs'>{StaticData(post?.time?.seconds)}</li>
                            <li className="hidden lg:flex items-center lg:space-x-2 "><span ><BiCategory className="text-blue-400 lg:size-4" /></span><span className='lg:text-sm'>{post?.categoryname}</span></li>
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
