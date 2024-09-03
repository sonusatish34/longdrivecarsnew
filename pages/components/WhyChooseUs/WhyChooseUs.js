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
            <div className='xl:pl-16 xl:pt-16 xl:p-2 w-[100%] lg:w-[555px] xl:w-[817px] xs'>
                <div className='xs:p-[1rem] xl:py-16 xl:p-6 bg-[#660066] rounded-lg text-black lg:w-fit border-[2px] border-gray-400 shadow-lg'>
                    
                    <div className="flex gap-4 items-center justify-center pt-4 text-xs
                     font-medium lg:text-sm xs: lg:w-[90%] flex-wrap">
                        <p className='text-white font-sans xl:text-5xl lg:text-5xl text-3xl mb-2 lg:pl-5 lg:pb-8'>Why Choose Us?</p>
                        <div className="flex items-center gap-1 p-2 bg-[#ffffff] text-lg lg:text-sm xl:text-lg  border-[1px] border-black rounded-md lg:hover:scale-105 xl:w-[280px] lg:w-[200px]  w-[325px]">
                            <RiMoneyRupeeCircleFill className="bg-[#660066] rounded-md p-1 text-white" size={40} />
                            <p className="ml-2">Zero Deposit</p>
                        </div>
                        <div className="flex items-center gap-1 p-2 bg-[#ffffff] text-lg lg:text-sm xl:text-lg  border-[1px] border-black rounded-md lg:hover:scale-105 xl:w-[280px] lg:w-[200px] w-[325px]">
                            <GiTowTruck className="bg-[#660066] rounded px-[4px] text-white" size={40} />
                            <p className=" ml-2">24/7 Breakdown Service</p>
                        </div>
                        <div className="flex items-center gap-1 p-2 bg-[#ffffff] text-lg lg:text-sm xl:text-lg  border-[1px] border-black rounded-md lg:hover:scale-105 xl:w-[280px] lg:w-[200px] w-[325px]">
                            <SlSpeedometer className="bg-[#660066] rounded-md p-1 text-white" size={40} />
                            <p className=" ml-2">Unlimited Kilometers</p>
                        </div>
                        <div className="flex items-center gap-1 p-2 bg-[#ffffff] text-lg lg:text-sm xl:text-lg  border-[1px] border-black rounded-md lg:hover:scale-105 xl:w-[280px] lg:w-[200px] w-[325px]">
                            <Ri24HoursLine className="bg-[#660066] rounded-md p-1 text-white" size={40} />
                            <p className=" ml-2 mt-1">Choose Your Own Hours</p>
                        </div>
                        <div className="flex items-center gap-1 p-2 bg-[#ffffff] text-lg lg:text-sm xl:text-lg  border-[1px] border-black rounded-md lg:hover:scale-105 xl:w-[280px] lg:w-[200px] w-[325px]">
                            <FaCar className="bg-[#660066] rounded-md p-1 text-white" size={40} />
                            <p className="ml-2">Check Original Car Photo</p>
                        </div>
                    </div>
                </div>
            </div>
            {<Image
                className='lg:w-[320px] lg:h-[400px] xl:w-[600px] xl:h-[600px] hidden lg:block'
                alt="car rental near you creta"
                title="car rental near you creta"
                src={rightimg}
                width={1000}
                height={1000}
            />}
        </div>
    )
}

export default WhyChooseUs