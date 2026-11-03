"use client"
import React from "react";
import Link from "next/link";
import Image from "next/image";
import { BiCategory } from "react-icons/bi";
import { CgProfile } from "react-icons/cg";
import { FaRegComment } from "react-icons/fa";
import { GrLike } from "react-icons/gr";
import StaticData from "@/pages/images/StaticData";
import { getBlogPostExcerpt } from "@/utils/blogText";

const PostsListing = ({ data, catg }) => {
   const replaceText = (str) => {
    // if (str?.includes("cdn")) return str;
     
      return str?.replace("https://ldcars.blr1.cdn.digitaloceanspaces.com/", "https://cdn.longdrivecars.com/");
  };
  return (
    <div className="lg:pt-6 border-t-2 border-gray-300 pt-8 px-3 lg:px-0">
      <p className="text-left text-3xl text-gray-900 font-semibold py-4">
        Recent stories
      </p>
      <div className="grid grid-cols-1 lg:grid-cols-2 xl:gap-x-20 lg:gap-x-14 gap-y-8 w-full">
        {data?.length > 0 ? (
          data.slice(0, 8).map((post, i) => (
            <div key={`key-${i}`} className="min-w-0 overflow-hidden">
              <Link

                href={`/blog/posts/${post.slug.toLowerCase().replace(/ /g, "-")}`}
                className="flex h-full w-full min-w-0 flex-col gap-y-1 overflow-hidden lg:px-0"
              >
                <div className="block w-full overflow-hidden">
                  {post?.coverimages && (
                    <Image
                      className="rounded-md w-full xl:h-[350px] lg:h-[260px] h-auto object-cover"
                      src={
                        post?.coverimages?.length
                          ? replaceText(post?.coverimages)
                          : "/tempimg.jpg"
                      }
                      alt={post?.cialt || "Post Image"}
                      width={600}
                      height={400}
                      priority={i === 0}
                      unoptimized
                    />
                  )}
                </div>
                <h2 className="line-clamp-2 min-w-0 overflow-hidden break-words pt-3 text-left text-lg font-bold tracking-normal hover:text-[#556ee6] xl:text-2xl">
                  {post?.title}
                </h2>
                <p className="line-clamp-3 min-w-0 overflow-hidden break-words pt-1 text-left text-sm font-light leading-5 tracking-normal text-[#6B6B6B] lg:hidden">
                  {(post?.content)}
                </p>
                <p className="hidden min-w-0 overflow-hidden break-words pt-1 text-left text-base leading-6 tracking-normal text-[#6B6B6B] line-clamp-3 lg:block">
                  {post?.description}
                </p>

                <ul className=" pt-1 flex flex-wrap items-center space-x-2 lg:gap-3 gap-x-2 text-xs">
                  <li className="lg:text-sm text-xs">
                    {StaticData(post?.time?.seconds)}
                  </li>
                  <li className="flex items-center gap-1 ">
                    <span>
                      <BiCategory className="text-blue-400 lg:size-4" />
                    </span>
                    <span className="lg:text-sm">{post?.categoryname}</span>
                  </li>
                  <li>
                    <div className="flex gap-4 items-center lg:gap-8 py-2">
                      <p className="flex items-center gap-1">
                        <span className="hover:cursor-pointer">
                          <GrLike size={14} className="lg:size-[15px]" />
                        </span>
                        <span>{post?.likes ? post?.likes : "1"}</span>{" "}
                      </p>
                      <p className="flex items-center gap-1">
                        <span className="hover:cursor-pointer">
                          <FaRegComment size={14} className="lg:size-[15px]" />
                        </span>
                        <span>
                          {post?.comments?.length ? post?.comments?.length : "1"}
                        </span>{" "}
                      </p>
                    </div>
                  </li>
                </ul>
              </Link>
            </div>
          ))
        ) : (
          <p>No posts available for this category.</p>
        )}
      </div>

      <div
        className="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-3 gap-4 lg:gap-8 xl:mt-2 lg:mt-6 lg:px-0 pt-10"
      >
        {data?.length > 0 ? (
          data.slice(8).map((post, i) => (
            <div key={`key-${i}`} className="min-w-0 overflow-hidden">
              <Link href={`/blog/posts/${post.slug.toLowerCase().replace(/ /g, "-")}`} className="block min-w-0 overflow-hidden lg:px-0">
                <div className="block w-full overflow-hidden">
                  {post?.coverimages && (
                    <Image
                      className="rounded-md w-full lg:h-[160px] xl:h-[220px] h-[80px] mxs:h-[100px] object-cover"
                      src={
                        post?.coverimages?.length
                          ? replaceText(post?.coverimages)
                          : "/tempimg.jpg"
                      }
                      alt={post?.cialt || "Post Image"}
                      width={2000}
                      height={2000}
                      priority={i === 0 ? true : false}
                    />
                  )}
                </div>
                <h2 className="line-clamp-2 min-w-0 overflow-hidden break-words pt-3 text-left text-sm font-bold hover:text-[#556ee6] lg:hidden">
                  {post?.title}
                </h2>
                <h2 className="hidden min-w-0 overflow-hidden break-words pt-3 text-left text-xs font-bold hover:text-[#556ee6] line-clamp-3 lg:block lg:text-base xl:text-lg">
                  {post?.title}
                </h2>
                <p className="line-clamp-2 min-w-0 overflow-hidden break-words pt-1 text-left text-xs leading-5 tracking-normal text-[#6B6B6B] lg:hidden">
                  {post?.description}
                </p>
                <p className="hidden min-w-0 overflow-hidden break-words pt-1 text-left text-sm leading-6 tracking-normal text-[#6B6B6B] line-clamp-4 lg:block xl:text-base">
                  {post?.description}
                </p>

                <ul className="mb-4 mt-auto flex flex-wrap justify-items-center lg:space-x-4 text-[10px] xl:text-sm lg:text-xs pt-4">
                  <li className="hidden lg:block"><p>{post?.date.slice(0, 12)}</p></li>
                  <li className="flex items-center gap-1">
                    <span>
                      <BiCategory className="text-blue-400" />
                    </span>
                    <span>{post?.categoryname[0]}</span>
                  </li>
                  <li>
                    <div className="lg:flex hidden gap-8 ">
                      <p className="flex items-center gap-2">
                        <span className="hover:cursor-pointer">
                          <GrLike size={10} />
                        </span>
                        <span>{post?.likes ? post?.likes : "1"}</span>
                      </p>
                      <p className="flex items-center gap-2">
                        <span className="hover:cursor-pointer">
                          <FaRegComment size={10} />
                        </span>
                        <span>
                          {post?.comments?.length ? post?.comments?.length : "1"}
                        </span>
                      </p>
                    </div>
                  </li>
                </ul>
              </Link>
            </div>
          ))
        ) : (
          <p>No posts available for this category.</p>
        )}
      </div>
    </div>
  );
};

export default PostsListing;
