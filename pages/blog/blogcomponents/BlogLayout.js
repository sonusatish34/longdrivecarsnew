import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { useState } from 'react';
import { CiSearch } from "react-icons/ci";

const BlogLayout = ({ children, phoneno, locname, onSearch = () => { } }) => {
    const [search, setSearch] = useState('');

    const handleSearch = (e) => {
        setSearch(e?.target?.value);
        onSearch(e?.target?.value);  // Pass the search query to CategoryPage
    };

    return (
        <div>
            <div className='lg:px-14  py-1 border-8 border-blue-100 '>
                <div className='flex items-center lg:gap-6 xl:gap-[22rem] gap-2 mxs:px-2'>
                    <Link href={`/blog`} className='flex items-center lg:gap-6 gap-3'>
                        <Image
                            className="w-10 lg:w-20"
                            src="/logos/logo3.webp"
                            alt="Long Drive Cars"
                            width={500}
                            height={500}
                        />
                        <p className='font-semibold text-[#0456e8] text-xs mxs:text-sm lg:text-xl lg:w-[284px]  popins-text'>Long Drive Cars</p>
                    </Link>
                    <div className='flex items-center'>
                        <p className='relative left-6'><CiSearch size={20} /></p>
                        <input
                            value={search}
                            type="text"
                            placeholder="Search"
                            onChange={handleSearch}
                            maxLength={10}
                            className='lg:rounded-3xl lg:w-28 border-none lg:bg-gray-200 bg-gray-50  rounded py-1 pl-7'
                        />
                    </div>
                </div>
            </div>
            <main>{children}</main>
        </div>
    );
};

export default BlogLayout;


