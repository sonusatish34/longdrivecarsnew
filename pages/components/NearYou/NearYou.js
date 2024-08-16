import React from 'react'
import { IoCheckmarkCircleOutline } from "react-icons/io5";
import rightimg from '../../images/thar.webp'
import Image from 'next/image';
import { RiMoneyRupeeCircleFill } from "react-icons/ri";
import { SlSpeedometer } from "react-icons/sl";
import { RiCustomerService2Fill } from "react-icons/ri";
import { Ri24HoursLine } from "react-icons/ri";
import { PiCarFill } from "react-icons/pi";
import { HiOutlineClipboardDocumentList } from "react-icons/hi2";
import { GiConfirmed } from "react-icons/gi";


function NearYou() {
    return (
        <div className='flex lg:flex-row flex-col lg:justify-around items-center flex-wrap bg-gradient-to-t from-gray-100 to-[#660066]'>
            <Image
                src={rightimg}
                width={2000}
                height={2000}
                alt='innova car'
                className='lg:w-2/5 '
            />
            <div className='py-16 lg:w-2/5 flex flex-col items-center'>
                <h2 className='font-bold text-4xl lg:pb-8 py-2 xs:px-4 xs:text-2xl lg:text-left xs:text-center pb-4'>Book A Car Near You</h2>
                <div className='flex flex-wrap items-center lg:items-start text-black justify-center md:flex-col lg:justify-start xs:px-7 md:px-0  gap-3'>
                    <div className='flex items-center gap-2 p-2 bg-white w-full  rounded-md' >
                        <PiCarFill className='bg-[#660066] text-white rounded-md p-2' size={50} />
                        <div>
                            <p className='font-bold'>Choose a car</p>
                            <p>Choose from a wide range of cars</p>
                        </div>
                    </div>
                    <div className='flex items-center gap-2 p-2 bg-white w-full  rounded-md' >
                        <GiConfirmed className='bg-[#660066] text-white rounded-md p-2 ' size={50} />
                        <div>
                            <p className='font-bold'>Book And Pay</p>
                            <p>Book a car and pay online</p>
                        </div>
                    </div>
                    <div className='flex items-center gap-2 p-2 bg-white w-full  rounded-md' >
                        <HiOutlineClipboardDocumentList className='bg-[#660066] text-white rounded-md p-2 ' size={50} />
                        <div>
                            <p className='font-bold'>Upload Documents</p>
                            <p>Submit your document</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default NearYou;