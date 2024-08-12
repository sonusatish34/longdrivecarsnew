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
                        <div className="bg-white rounded-lg shadow-lg overflow-hidden flex flex-col lg:w-[400px] w-[97%] md:w-80 h-full">
                            <div

                                className="relative rounded-lg overflow-hidden cursor-pointer">

                                <div className="relative lg:h-[533px] h-[333px]">
                                    <Image fill className="object-cover" src={replaceText(item?.car_image_car_right_view)}></Image>
                                </div>



                            </div>

                            <div className="px-2 flex flex-col gap-4 p-1">
                                <div className="flex items-baseline justify-between px-2">
                                    <div>
                                        <Link href={`/${item.maker_model.toLowerCase()}`}>
                                            <p className="text-gray-700 font-medium text-sm lg:text-md opacity-75 font-Montserrat">Dozzy Farm House</p>
                                        </Link>
                                        <Link href={`/${item.maker_model.toLowerCase()}`}>
                                            <p className="text-[#556EE6] font-semibold text-xl hover:text-red-600 w-fit">
                                                {item.maker_model}
                                            </p>
                                        </Link>
                                    </div>
                                    <div className="flex gap-2 items-center">
                                        <p>4.4</p>
                                    </div>
                                </div>

                                <div className="font-normal text-sm">
                                    <div className="flex items-baseline justify-between px-2">
                                        <p className="text-black">Mon-Thu</p>
                                        <p className="text-[#556EE6]">₹ {item.price_24_hours} /Day</p>
                                    </div>
                                    <div className="flex items-baseline justify-between px-2">
                                        <p className="text-black">Fri-Sun</p>
                                        <p className="text-[#556EE6]">₹ {item.price_24_hours} /Day</p>
                                    </div>
                                </div>

                                <div className="text-black flex justify-center font-semibold">
                                    For Booking
                                </div>
                                <div className="flex justify-between gap-1 text-white ">
                                    <ul className="text-black flex w-full justify-between gap-5">
                                        <li className="bg-green-500 w-full p-2 rounded-bl-md text-center text-white border-[1px] border-black">
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
                                        <li className="bg-blue-500 w-full p-2 rounded-br-md text-white border-[1px] border-black">
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
                        </div>
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