import React from 'react'
import { IoCheckmarkCircleOutline } from "react-icons/io5";
import rightimg from '../../images/creta.webp'
import Image from 'next/image';
import { RiMoneyRupeeCircleFill } from "react-icons/ri";
import { SlSpeedometer } from "react-icons/sl";
import { RiCustomerService2Fill } from "react-icons/ri";
import { Ri24HoursLine } from "react-icons/ri";
// import { FaCarBurst } from "react-icons/fa6";
import { GiTowTruck } from "react-icons/gi";
import { FaCar } from "react-icons/fa";
import { VscColorMode } from "react-icons/vsc";

function WhyChooseUs() {
    return (
        <div className='flex xs:justify-center xl:justify-between lg:mx-7 flex-wrap bg-white pt-6'>
            <div className='xl:pl-16 xl:pt-16 xl:p-2 xs: lg:w-[555px] xl:w-[717px] xs'>
                <div className='xs:p-[1rem] xl:py-16 lg:p-6 bg-orange-200 rounded-lg text-black w-fit border-[2px] border-gray-400 shadow-lg'>
                    <h2 className='font-sans xl:text-5xl lg:text-5xl text-2xl mb-2 lg:'>Why Choose Us?</h2>
                    <div className="grid lg:grid-cols-2 gap-4 lg:pt-12 xl:pt-14 pt-4 text-xs
                     font-medium lg:text-sm xs: lg:w-full">
                        <div className="flex items-center gap-1 p-2 bg-[#ffffff] border-[1px] border-black rounded-md lg:hover:scale-105">
                            <RiMoneyRupeeCircleFill className="bg-orange-200 rounded-md p-1" size={40} />
                            <p className="ml-2">Zero Deposit</p>
                        </div>
                        <div className="flex items-center gap-1 p-2 bg-[#ffffff] border-[1px] border-black rounded-md lg:hover:scale-105">
                            <GiTowTruck className="bg-orange-200 rounded px-[4px]" size={40} />
                            <p className=" ml-2">24/7 Breakdown Service</p>
                        </div>
                        <div className="flex items-center gap-1 p-2 bg-[#ffffff] border-[1px] border-black rounded-md lg:hover:scale-105">
                            <SlSpeedometer className="bg-orange-200 rounded-md p-1" size={40} />
                            <p className=" ml-2">Unlimited Kilometers</p>
                        </div>
                        <div className="flex items-center gap-1 p-2 bg-[#ffffff]  border-[1px] border-black rounded-md lg:hover:scale-105">
                            <Ri24HoursLine className="bg-orange-200 rounded-md p-1" size={40} />
                            <p className=" ml-2 mt-1">Choose Your Own Hours</p>
                        </div>
                        <div className="flex items-center gap-1 p-2 bg-[#ffffff]  border-[1px] border-black rounded-md lg:hover:scale-105">
                            <FaCar className="bg-orange-200 rounded-md p-1" size={40} />
                            <p className="ml-2">Check Original Car Photo</p>
                        </div>
                        <div className="flex items-center gap-1 p-2 bg-[#ffffff]  border-[1px] border-black rounded-md lg:hover:scale-105">
                            <VscColorMode className="bg-orange-200 rounded-md p-1" size={40} />
                            <p className=" lg:ml-2">Choose your Favourite Color</p>
                        </div>
                    </div>
                </div>
            </div>
            {<Image
                className='lg:w-[320px] lg:h-[400px] xl:w-[600px] xl:h-[600px] '
                alt="creta"
                src={rightimg}
                width={1000}
                height={1000}
            />}
        </div>
    )
}

export default WhyChooseUs