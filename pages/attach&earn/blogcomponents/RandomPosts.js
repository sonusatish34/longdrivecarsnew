import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { BiCategory } from "react-icons/bi";
import { FaRegComment } from "react-icons/fa";
import { GrLike } from "react-icons/gr";

const RandomPosts = ({ data,loc }) => {
  const postsPerPage = 3; // Adjust this number based on how many posts you want per page
  const [currentPage, setCurrentPage] = useState(1);
  const [pageGroup, setPageGroup] = useState(0); // This controls which group of pages to show

  // Calculate the starting and ending index for the current page
  const indexOfLastPost = currentPage * postsPerPage;
  const indexOfFirstPost = indexOfLastPost - postsPerPage;
  const currentPosts = data?.slice(indexOfFirstPost, indexOfLastPost);

  // Handle next page
  const nextPage = () => {
    if (currentPage < Math.ceil(data?.length / postsPerPage)) {
      setCurrentPage(currentPage + 1);
    }
  };

  // Handle previous page
  const prevPage = () => {
    if (currentPage > 1) {
      setCurrentPage(currentPage - 1);
    }
  };

  // Handle next set of page numbers
  const nextGroup = () => {
    if (pageGroup < Math.ceil(data?.length / postsPerPage) / 5 - 1) {
      setPageGroup(pageGroup + 1);
    }
  };

  // Handle previous set of page numbers
  const prevGroup = () => {
    if (pageGroup > 0) {
      setPageGroup(pageGroup - 1);
    }
  };

  // Create page numbers (1, 2, 3, 4, 5, ...)
  const pageNumbers = [];
  for (let i = 1; i <= Math.ceil(data?.length / postsPerPage); i++) {
    pageNumbers.push(i);
  }

  // Slice the page numbers to display only 5 at a time
  const pageNumbersToDisplay = pageNumbers.slice(
    pageGroup * 4,
    pageGroup * 4 + 4
  );

  return (
    <div className="pt-1 border-t-2 border-gray-300 px-3">
      <p className="text-left text-2xl font-semibold pt-4 leading-6 capitalize">
        Explore More Stories
      </p>
      <div
        className={`grid grid-cols-2 md:grid-cols-2 lg:grid-cols-3 gap-4 lg:gap-8 xl:gap-10 lg:mt-2 pt-10`}
      >
        {currentPosts?.length > 0 ? (
          currentPosts.map((post, i) => (
            <Link
              href={`${loc?`/${loc}`:''}/blog/posts/${post.slug.toLowerCase().replace(/ /g, "-")}`}
              key={`key-${i}`}
              className="lg:px-0 w-full"
            >
              <p className="block hover:text-orange-500 font-extrabold text-lg xl:text-2xl text-left tracking-tight">
                {post?.coverimages && (
                  <Image
                    className="rounded-md xl:h-[220px] lg:h-[160px] h-[80px] mxs:h-[120px] object-cover"
                    src={
                      post?.coverimages?.length
                        ? post?.coverimages
                        : "/tempimg.jpg"
                    }
                    alt={post?.cialt || "Post Image"}
                    width={2000}
                    height={2000}
                    priority={i === 0 ? true : false}
                  />
                )}
              </p>
              <p className="lg:pb-3 hover:text-[#556ee6] font-bold lg:text-lg text-sm text-left pt-4 h-20 mxs:h-16 mxs:first-letter:h-16 lg:h-20 block lg:hidden">
                <span className="block hover:text-primary">
                  {post?.title && post?.title.slice(0, 35)}..
                </span>
              </p>
              <p className="lg:pb-3 hover:text-[#556ee6] font-bold xl:text-lg lg:text-base text-xs text-left pt-4 h-10 xl:h-20 lg:h-16 lg:block hidden">
                <span
                  href={`/blog/posts/${post.slug.toLowerCase().replace(/ /g, "-")}`}
                  className="block hover:text-primary"
                >
                  {post?.title && post?.title.slice(0, 65)}..
                </span>
              </p>
              <p className="text-left text-[#6B6B6B] lowercase text-xs pt-1 tracking-wide leading-5 lg:hidden block h-20 capitalize-first-letter">
                {post?.description && post?.description.slice(0, 60)}...
              </p>
              <p className="text-left text-[#6B6B6B] xl:text-base lg:text-sm text-xs pt-1 tracking-wide lowercase leading-6 lg:block hidden h-28 lg:h-20 xl:h-24 capitalize-first-letter">
                {post?.description && post?.description.slice(0, 110)}...
              </p>
              <ul className="mb-4 mt-auto flex flex-wrap justify-items-center lg:space-x-4 text-xs lg:text-xs lg:pt-4">
                {/* <li className="hidden lg:block">
                  <p>{post?.date.slice(0, 12)}</p>
                </li> */}
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
          ))
        ) : (
          <p>No posts available for this category.</p>
        )}
      </div>

      {/* Pagination controls */}
      <div className="flex justify-center mt-10 text-xs mxs:text-sm">
        {/* Prev Group Button */}
        <button
          onClick={prevGroup}
          disabled={pageGroup === 0}
          className="px-2 mxs:px-4 py-2 bg-gray-300 text-gray-700 rounded-l-md disabled:opacity-50"
        >
          Prev
        </button>

        {/* Display page numbers */}
        <ul className="flex gap-x-2 px-3">

          {pageNumbersToDisplay.map((number) => (
            <li
              key={number}
              onClick={() => setCurrentPage(number)}
              className={`px-4 py-2 mx-1 rounded-full h-10 w-10 flex gap-x-1 justify-center items-center ${currentPage === number
                ? "bg-blue-500 text-white"
                : "bg-gray-200 text-gray-700 cursor-pointer"
                }`}
            >
              {number}
            </li>
          ))}
        </ul>

        {/* Next Group Button */}
        <button
          onClick={nextGroup}
          disabled={pageGroup >= Math.ceil(data?.length / postsPerPage) / 5 - 1}
          className="px-4 py-2 bg-gray-300 text-gray-700 rounded-r-md disabled:opacity-50"
        >
          Next
        </button>
      </div>
    </div>
  );
};

export default RandomPosts;
