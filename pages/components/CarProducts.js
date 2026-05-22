import React, { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { FaSearch } from "react-icons/fa";
import { RiArrowDownWideLine } from "react-icons/ri";
import dnf from '../images/datanotfound.webp';
import disc1 from "../images/offersimages/250cashback.webp";
import ldcqr from '../images/ldcqr.png'
import { MdOutlineCancel } from 'react-icons/md'


import CardFragment from "./CardFragment/CardFragment";
import { handleStoreRedirect } from "../../utils/redirectUtils";
import { decryptFernetData } from "@/utils/crypto";
function CarProducts({ data, branch, phoneno, count, wspno }) {
    const [searchQuery, setSearchQuery] = useState("");
    const [debouncedQuery, setDebouncedQuery] = useState("");
    const [carResults, setCarResults] = useState([]);
    const [loading, setLoading] = useState(false);

    // Update debounce query
    useEffect(() => {
        const timeout = setTimeout(() => {
            setDebouncedQuery(searchQuery);
        }, 300);
        return () => clearTimeout(timeout);
    }, [searchQuery]);

    // Fetch from API when query updates
    useEffect(() => {
        const fetchCars = async () => {
            if (debouncedQuery.trim().length === 0) {
                setCarResults([]); // Clear if empty
                return;
            }
            setLoading(true);
            try {
                const res = await fetch(
                `/api/search-cars?location=hyderabad&search_key=${debouncedQuery}`
            );

                const data = await res.json();
                
                setCarResults(data.results || []);
            } catch (err) {
                console.error("Failed to fetch cars:", err);
                setCarResults([]);
            } finally {
                setLoading(false);
            }
        };
        fetchCars();
    }, [debouncedQuery, branch]);

    // Static list ordering for when no search is active
    const carModels = [
        'MARUTHI WAGON R', 'MARUTHI SWIFT', 'MARUTHI DZIRE', 'GRAND NIOS', 'MARUTHI BALENO',
        'HYUNDAI I20', 'HYUNDAI VENUE', 'KIA SONET', 'KIA SELTOS', 'KIA SONET SUNROOF',
        'SELTOS SUNROOF', 'MARUTHI ERTIGA', 'MAHINDRA THAR 2024 Diesel',
        'INNOVA CRYSTA Diesel', 'MAHINDRA XUV 700 Diesel'
    ];

    const sortedDefaultData = data?.sort((a, b) => a.price_24_hours - b.price_24_hours);
    const filteredItems = carModels.flatMap((model) =>
        sortedDefaultData?.filter((item) => item?.maker_model === model)
    );

    return (
        <div className="bg-white">
            <h2 className="text-black xl:text-5xl lg:text-4xl text-lg mxs:text-xl font-bold text-center py-7 capitalize">
                Explore Car Rentals Near You
            </h2>

            <div className="lg:mb-8 pl-3 flex items-center justify-center pt-2 lg:pb-2">
                <input
                    placeholder="Find Your Favourite Car"
                    className="placeholder-black text-black px-4 py-3 rounded-full bg-gray-200 w-full md:max-w-96 lg:max-w-2xl"
                    type="search"
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                />
                <FaSearch size={25} className="text-blue-500 relative right-9 lg:right-20 md:right-14" />
            </div>

            <div className="flex flex-wrap gap-x-8 gap-y-8 justify-center lg:pl-12 lg:pb-10 pt-10">
                {/* Show live search results if query is active */}
                {searchQuery.trim().length >= 1 ? (
                    loading ? (
                        <p className="text-center text-gray-400 text-xl">Searching...</p>
                    ) : carResults.length > 0 ? (
                        carResults.map((item, index) => (
                            <CardFragment
                                key={`${item?.maker_model}-${index}`}
                                item={item}
                                wspno={wspno}
                                phoneno={phoneno}
                                index={index}
                            />
                        ))
                    ) : (
                        <div className="flex flex-col items-center justify-center">
                            <Image src={dnf} width={500} height={500} className="w-20 h-20" alt="Not found" />
                            <span className="text-orange-500 py-1">No Results found</span>
                            <span className="text-blue-400">Please try something else</span>
                        </div>
                    )
                ) : (
                    filteredItems?.map((item, index) => (
                        <React.Fragment key={`${item?.maker_model}-${index}`}>
                            <CardFragment item={item} wspno={wspno} phoneno={phoneno} index={index} />

                            {(index + 1 === 3 || index + 1 === 6 || index + 1 === 8) && (
                                <div className="items-center block lg:hidden pb-5">
                                    <div className="lg:rounded-md items-center lg:w-72 flex flex-col relative">
                                        <Image
                                            src={disc1}
                                            alt="Offer"
                                            width={1000}
                                            height={1000}
                                            className={"lg:w-80 w-full"}
                                        />
                                    </div>
                                </div>
                            )}
                            {(index + 1 === 8) && (
                                <div className="items-center block lg:hidden pb-5">
                                    <>
                                        <div
                                            className='border-2 p-2 rounded-md'
                                            
                                        >
                                            <div>
                                                <div className='flex justify-between items-center'>
                                                    <div className='text-lg font-semibold'>
                                                        <p className='uppercase text-2xl font-light pb-4 flex flex-col'>
                                                            <span>Download</span>
                                                            <span>our app</span>
                                                        </p>
                                                        <p className='animate-bounce'>
                                                            <span className='bg-gradient-to-r from-green-700 to-green-700 bg-clip-text text-transparent text-3xl animate-spin'>
                                                                ₹ 250 off
                                                            </span>{' '}
                                                        </p>
                                                        <p className='capitalize'>on your first booking!</p>
                                                    </div>

                                                    <Image
                                                        className='lg:w-44 w-28 scale-90 mxs:scale-100'
                                                        src='/popup.webp'
                                                        alt='Long Drive Cars'
                                                        width={1000}
                                                        height={1000}
                                                        priority
                                                        onError={() => console.error('Image failed to load!')}
                                                    />
                                                </div>
                                                <div className='mt-3 text-sm'>
                                                    <p className='font-medium'>Hurry, offer ends soon!</p>
                                                </div>
                                                <div
                                                    onClick={handleStoreRedirect}
                                                    className='my-3 flex lg:hidden justify-center'
                                                >
                                                    <a
                                                        href='#'
                                                        className='py-2 px-4 text-white font-semibold rounded-full shadow-lg border-[1px] border-[#5566ee] relative overflow-hidden bg-gradient-to-r from-green-600 via-[#556ee6] to-indigo-400 animate-gradient p-2 text-xs mxs:text-sm capitalize'
                                                    >
                                                        download long drive cars app
                                                        <style jsx>{`
                                                        @keyframes gradientAnimation {
                                                          0% {
                                                            background-position: 0% 50%;
                                                          }
                                                          50% {
                                                            background-position: 100% 50%;
                                                          }
                                                          100% {
                                                            background-position: 0% 50%;
                                                          }
                                                        }
                                    
                                                        .animate-gradient {
                                                          background-size: 300% 300%;
                                                          animation: gradientAnimation 5s linear infinite;
                                                        }
                                                      `}</style>
                                                    </a>
                                                </div>
                                                <div className='mt-3 lg:flex flex-col gap-y-2 items-center hidden justify-center'>
                                                    <p className='capitalize'>Scan QR to download the app</p>
                                                    <Image
                                                        className='lg:w-28 w-28'
                                                        src={ldcqr}
                                                        alt='Long Drive Cars'
                                                        width={500}
                                                        height={500}
                                                        priority
                                                    />
                                                </div>
                                            </div>

                                            <button
                                               
                                                className='absolute top-0 right-0 p-2 bg-transparent focus:outline-none flex items-center justify-center z-40 pt-4 pr-4'
                                            >
                                                <span className='text-lg w-6 h-6 rounded-full relative hover:scale-105 bottom-1 flex justify-center items-center'>
                                                   
                                                </span>
                                            </button>
                                        </div>
                                    </>
                                </div>
                            )}

                            {(index + 1 === 2) && (
                                <div className="lg:block hidden pt-14 lg:pt-0 items-center md:w-72">
                                    <Image
                                        src={disc1}
                                        height={1000}
                                        width={1000}
                                        alt="Long Drive Cars app"
                                        priority={true}
                                        className="mxs:scale-[0.6] rounded-md lg:scale-100 lg:w-80 w-full"
                                    />
                                </div>
                            )}
                        </React.Fragment>
                    ))
                )}
            </div>

            {/* "View All" link (only for default list) */}
            {!searchQuery && filteredItems?.length > 0 && (
                <Link href={`${branch ? `/${branch}` : ''}/explore-self-drive-cars`} className={`${count?.length ? 'hidden' : 'block'} text-center py-4 lg:px-2 px-10 flex justify-center items-center`}>
                    <button className="flex flex-col items-center spinner-border text-xl lg:text-2xl font-bold text-[#556ee6] w-full lg:w-96 pt-4 rounded-full capitalize">
                        View All Cars
                        <RiArrowDownWideLine className="animate-pulse text-[#660066]" size={40} />
                    </button>
                </Link>
            )}
        </div>
    );
}

export default CarProducts;
