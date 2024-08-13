import { BiPhoneCall } from "react-icons/bi";
import { FaWhatsapp } from "react-icons/fa";
import { IoReload } from "react-icons/io5";
import React, { useState } from 'react';
import Image from 'next/image';
import { BsFuelPump } from 'react-icons/bs';
import { TbManualGearbox } from 'react-icons/tb';
import { MdOutlineAirlineSeatReclineExtra } from 'react-icons/md';
import { RiMoneyRupeeCircleFill } from "react-icons/ri";
import { SlSpeedometer } from "react-icons/sl";
import Link from 'next/link';
import disc from '../images/discountonbook.webp'
import { FaSearch } from 'react-icons/fa';
function CarProducts({ data, searchQuery }) {
    // console.log(data,"dasya");

    const [visibleItems, setVisibleItems] = useState(9);
    // const [searchQuery, setSearchQuery] = useState('');

    const handleLoadMore = () => {
        setVisibleItems(prev => prev + 9);
    };

    const replaceText = (str) => {
        return str?.replace('https://s3.ap-south-2.amazonaws.com/ld-prod-image-urls3', 'https://d10uth61hedy2t.cloudfront.net');
    };

    const filteredData = data?.filter(item =>
        item.maker_model.toLowerCase().includes(searchQuery.toLowerCase())
    );
    return (
        <div className=' bg-white'>
            <div className="flex flex-wrap gap-x-8 gap-y-8 lg:items-start justify-center lg:pl-12 items-center">
               
                {filteredData?.slice(0, visibleItems).map((item, index) => (
                    <React.Fragment key={index}>
                        <div className="bg-white  shadow-lg overflow-hidden flex flex-col  xs:w-[100%] md:w-72 h-[420px] lg:hover:scale-105">
                            <div className="relative h-96">
                                <div className="relative z-20">
                                    {/* <p className='p-1 font-bold font-manrope text-3xl '>{item?.maker_model}</p> */}
                                    <div className="flex justify-between">
                                        <p className='p-1 font-bold text-white  z-50 font-manrope text-sm pt-2 '>{item?.maker_model}</p>
                                        <span className='p-1 font-bold bg-blue-700 rounded-bl-md  z-50 font-manrope text-sm '>₹{item?.price_24_hours * 24}/day</span>
                                        
                                        {/* <p className="text-[#556EE6]">₹ {item.price_24_hours} /Day</p> */}
                                    </div>

                                </div>
                                <Link href={`/${(("car-rental/" + item.maker_model).toLowerCase()).replace(/ /g, '-')}`}>
                                    <Image
                                        src={replaceText(item?.car_image_car_right_view)}
                                        // alt={StaticData(String(item?.maker_model.toLowerCase())) + String(item?.maker_model.toLowerCase())}
                                        // title={StaticData(String(item?.maker_model.toLowerCase())) + String(item?.maker_model.toLowerCase())}
                                        layout="fill"
                                        objectFit="cover"
                                        className=" "
                                        // priority
                                        loading='lazy'
                                    />
                                </Link>
                            </div>
                            <div>
                                {/* <div className="relative text-black flex justify-center font-semibold">
                                        For Booking
                                    </div> */}
                                    <div className=" relative flex justify-between  text-white ">
                                        <ul className="text-black flex w-full justify-between">
                                            <li className="bg-green-500 w-full p-2  text-center text-white">
                                                {" "}
                                                <Link
                                                    href="https://api.whatsapp.com/send?phone=+9111911162text=Hi%0AI%20am%20looking%20for%20a%farmhouse%20booking."
                                                    target="_blank"
                                                >
                                                    <p className=" flex gap-1 text-sm justify-center">
                                                        <span>
                                                            <FaWhatsapp size={20} />
                                                        </span>{" "}
                                                        <span>Whatsapp</span>
                                                    </p>
                                                </Link>
                                            </li>
                                            <li className="bg-blue-500 w-full p-2  text-white">
                                                {" "}
                                                <Link href="tel:9111911162" target="_blank">
                                                    <p className=" flex gap-1 text-sm justify-center">
                                                        <span>
                                                            <BiPhoneCall size={20} />
                                                        </span>{" "}
                                                        <span>Call Us</span>
                                                    </p>
                                                </Link>
                                            </li>
                                        </ul>
                                    </div>
                            </div>

                            {/* <p className='p-1 font-bold text-red-500 bg-yellow-200 z-50 font-manrope text-3xl lg:pl-20'>{item?.maker_model}</p> */}
                        </div>
                        {/* {(index + 1) % 5 === 0 && (
                            <div className="bg-orange-100 rounded-lg shadow-lg overflow-hidden flex flex-col  xs:w-[90%] justify-center md:w-72 h-[529px] lg:hover:scale-105">
                                <div>
                                    <Image
                                        src={disc}
                                        height={400}
                                        width={400}
                                        alt='discount'
                                    />
                                </div>
                            </div>

                        )} */}
                    </React.Fragment>
                ))}
            </div>
            {visibleItems < filteredData?.length && (
                <div className="text-center md:pb-10 pb-6">
                    <button className="bg-blue-500 text-lg font-bold text-white px-9 py-2 rounded-full">
                        <Link href={"/explore-self-drive-cars"}>View all cars</Link>
                    </button>
                </div>
            )}
        </div>
    )
}

export default CarProducts