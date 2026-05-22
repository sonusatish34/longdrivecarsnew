import React, { useState, useMemo } from "react";
import Link from "next/link";
import Image from "next/image";

const RandomPosts = ({ data, loc }) => {
  const [searchTerm, setSearchTerm] = useState("");
  const [sortOrder, setSortOrder] = useState("latest");
  const [currentPage, setCurrentPage] = useState(1);
  const [pageGroup, setPageGroup] = useState(0);
  const postsPerPage = 3;

  // 1. Filter and Sort logic
  const processedData = useMemo(() => {
    if (!data) return [];

    let filtered = data.filter((post) =>
      post.title.toLowerCase().includes(searchTerm.toLowerCase())
    );

    return filtered.sort((a, b) => {
      const dateA = new Date(a.date);
      const dateB = new Date(b.date);
      return sortOrder === "latest" ? dateB - dateA : dateA - dateB;
    });
  }, [data, searchTerm, sortOrder]);

  // 2. Pagination logic based on processed data
  const currentPosts = processedData.slice(
    (currentPage - 1) * postsPerPage,
    currentPage * postsPerPage
  );

  const totalPages = Math.ceil(processedData.length / postsPerPage);
  const pageNumbers = Array.from({ length: totalPages }, (_, i) => i + 1);
  const pageNumbersToDisplay = pageNumbers.slice(pageGroup * 4, pageGroup * 4 + 4);

  return (
    <div className="lg:pl-20 mx-auto px-4 py-12">
      <h1 className="lg:text-4xl text-enter mb-12 font-bold tracking-wide text-gray-800">
        Become A Host And Earn Monthly
      </h1>

      {/* Search and Sort UI - Styled based on image_58c6b9.png */}
      <div className="flex flex-col md:flex-row gap-6 mb-12 items-center justify-between">
        <div className="relative w-full md:w-2/3">
          <input
            type="text"
            placeholder="Search"
            value={searchTerm}
            onChange={(e) => {
              setSearchTerm(e.target.value);
              setCurrentPage(1); // Reset to page 1 on search
            }}
            className="w-full px-5 py-3 border border-gray-300 rounded-2xl outline-none text-gray-600 focus:border-blue-600 transition-colors"
          />
          <span className="absolute right-5 top-1/2 -translate-y-1/2 text-blue-600">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
            </svg>
          </span>
        </div>

        <div className="relative w-full md:w-1/3">
          <select
            value={sortOrder}
            onChange={(e) => setSortOrder(e.target.value)}
            className="w-full px-5 py-3 border border-gray-300 rounded-2xl outline-none text-gray-400 appearance-none bg-white focus:border-blue-600 transition-colors"
          >
            <option value="latest">Sort By: Latest</option>
            <option value="oldest">Sort By: Oldest First</option>
          </select>
          <span className="absolute right-5 top-1/2 -translate-y-1/2 text-blue-600 pointer-events-none">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
            </svg>
          </span>
        </div>
      </div>

      {/* Posts Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
        {currentPosts.length > 0 ? (
          currentPosts.map((post, i) => (
            <Link
              key={i}
              href={`${loc ? `/${loc}` : ""}/attach&earn/posts/${post.slug.toLowerCase().replace(/ /g, "-")}`}
              className="group flex flex-col items-center text-center bg-white transition-all border rounded-lg p-5"
            >
              <div className="w-full overflow-hidden mb-6 rounded-lg">
                <Image
                  className="w-full h-52 rounded-lg grayscale-[20%] group-hover:grayscale-0 transition-all duration-500 object-cover"
                  src={post?.coverimages || "/tempimg.jpg"}
                  alt={post?.cialt || "Post Image"}
                  width={600}
                  height={600}
                />
              </div>
              <span className="text-[10px] tracking-[0.2em] text-gray-400 uppercase mb-3">
                {post?.date?.slice(0, 12) || "August 11, 2015"}
              </span>
              <h3 className="text-xl md:text-2xl font-serif text-gray-700 uppercase tracking-wider leading-tight px-4 hover:text-blue-600 transition-colors">
                {post?.title}
              </h3>
              <div className="w-16 border-b border-dotted border-gray-400 my-6"></div>
              <p className="text-sm md:text-base text-gray-500 leading-relaxed px-6 mb-6 line-clamp-3 font-light italic">
                {post?.description}
              </p>
              <span className="text-[11px] font-bold tracking-[0.2em] uppercase text-gray-800 border-b border-transparent group-hover:border-gray-800 transition-all pb-1 mt-auto">
                Continue Reading &rarr;
              </span>
            </Link>
          ))
        ) : (
          <div className="col-span-full text-center py-10 text-gray-400 italic">
            No stories found matching your search.
          </div>
        )}
      </div>

      {/* Pagination */}
      {totalPages > 1 && (
        <div className="flex justify-center items-center mt-20 gap-4">
          <button
            onClick={() => setPageGroup(Math.max(0, pageGroup - 1))}
            disabled={pageGroup === 0}
            className="text-xs uppercase tracking-widest disabled:opacity-30"
          >
            Prev
          </button>
          <div className="flex gap-3">
            {pageNumbersToDisplay.map((num) => (
              <button
                key={num}
                onClick={() => setCurrentPage(num)}
                className={`w-8 h-8 rounded-full text-xs transition-all ${
                  currentPage === num ? "bg-gray-800 text-white" : "bg-gray-100 text-gray-600 hover:bg-gray-200"
                }`}
              >
                {num}
              </button>
            ))}
          </div>
          <button
            onClick={() => setPageGroup(pageGroup + 1)}
            disabled={pageNumbersToDisplay.length < 4 || (pageGroup + 1) * 4 >= totalPages}
            className="text-xs uppercase tracking-widest disabled:opacity-30"
          >
            Next
          </button>
        </div>
      )}
    </div>
  );
};

export default RandomPosts;