import React from 'react'
import Image from 'next/image';
import ds from '../pages/images/icon-navigator.svg'
import clock from '../pages/images/icon-clock.svg'
import deposit from '../pages/images/deposit.svg'
import ggle from '../pages/images/ggle.webp'
import apple from '../pages/images/apple.webp'
import { BiPhoneCall } from "react-icons/bi";
import { FaWhatsapp } from "react-icons/fa";
import Link from 'next/link';
import lady from '../pages/images/tboo_lady_image.svg'
import Layout from './components/Layout/Layout';
function contact() {

    return (
        <Layout>
            <div className='text-black bg-white'>
                <div className='pl-6 lg:px-24'>
                    <div className='px-2 py-2 lg:py-8 pt-36 border-b-2 border-gray-100'>
                        <p className="lg:text-xl text-xl text-[#660066] font-bold pb-8 lg:pb-2 uppercase"><span className="font-bold text-lg text-[#dbbeed]">/</span><span className="font-bold text-lg text-[#c97ef7]">/</span><span className="font-bold text-lg text-[#660066]">/ </span>ONLINE BOOKING</p>
                        <p className='text-xl lg:text-3xl font-semibold pb-4'>Get the Long Drive Cars Mobile app and Start Your Journey!</p>
                        <ul className='flex flex-wrap gap-3 font-semibold'>
                            <li className='flex flex-col items-center'>
                                <Image
                                    src={ds}
                                    height={111}
                                    width={111}
                                    alt='sss'
                                    className='w-16 h-16'
                                ></Image>
                                <p>Easy to search </p>
                                <p>Long Drive Cars</p>
                            </li>
                            <li className='flex flex-col items-center'>
                                <Image
                                    src={clock}
                                    height={111}
                                    width={111}
                                    alt='sss'
                                    className='w-16 h-16'
                                ></Image>
                                <p>Unlimited  </p>
                                <p>Kilometers</p>
                            </li>
                            <li className='flex flex-col items-center'>
                                <Image
                                    src={deposit}
                                    height={111}
                                    width={111}
                                    alt='sss'
                                    className='w-16 h-16'
                                ></Image>
                                <p>Zero </p>
                                <p>Deposit</p>
                            </li>

                        </ul>
                        <ul className='flex items-center justify-center'>
                            <li>
                                <Image
                                    src={ggle}
                                    height={111}
                                    width={111}
                                    alt='sss'
                                    className='w- h-16'
                                >
                                </Image>
                            </li>
                            <li>
                                <Image
                                    src={apple}
                                    height={111}
                                    width={111}
                                    alt='sss'
                                    className='w- h-11'
                                >
                                </Image>
                            </li>
                        </ul>
                    </div>
                    <div className='border-b-2 border-gray-100 pt-4'>
                        <div className='flex'>
                            <div>
                                <p className="lg:text-xl text-xl text-[#660066] font-bold pb-8 lg:pb-2 uppercase"><span className="text-lg text-[#dbbeed]">/</span><span className=" text-lg text-[#c97ef7]">/</span><span className="text-lg text-[#660066]">/ </span>OUR NEW SERVICES</p>
                                <p className='text-7xl font-bold text-[#0556e8]'>Dozzy</p>
                                <p className='text-sm  pt-2 text-[#0556e8]'>Most affordable farmhouses in india</p>

                                <p className='lg:text-5xl font-bold lg:py-4'>For Farmhouses in Hyderabad</p>
                                <ul className="text-black flex flex-col lg:flex-row gap-5 lg:py-4">
                                    <li className="bg-green-500 p-2 rounded-full text-white border-[1px] border-black w-32">
                                        {" "}
                                        <Link
                                            href="https://api.whatsapp.com/send?phone=+9111911162&text=Hi%0AI%20am%20looking%20for%20a%20farmhouse%20booking."
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
                                    <li className="bg-blue-500 p-2 rounded-full text-white border-[1px] border-black  w-32">
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
                                <p className='lg:text-5xl font-bold lg:py-4'>Helpline Number: <span className='text-[#0556e8]'><Link href="tel:9111911162" target="_blank">9111-9111-62</Link></span></p>
                            </div>
                            <div>
                                <Image
                                    src={lady}
                                    height={1000}
                                    width={1000}
                                    alt='sss'
                                    className='w-full '
                                >
                                </Image>
                            </div>


                        </div>
                        <div>
                            <ul className='flex flex-col lg:flex-row flex-wrap gap-4 lg:gap-x-40 lg:gap-y-10'>
                                <li >
                                    <p className='bg-[#0556e8] p-2 w-32 text-white'>Telangana</p>
                                    <p className='flex flex-col gap-2 pt-3'><span>For Attachments Call us on</span><span><Link href="tel:9888988828" target="_blank">9888-9888-28</Link></span></p>
                                    <p className='flex flex-col gap-2 pt-3'><span>For Bookings Call us on</span><span><Link href="tel:9000478478" target="_blank">9000-478-478</Link></span></p>
                                </li>
                                <li>
                                    <p className='bg-[#0556e8] p-2 w-32 text-white'>Bangalore</p>
                                    <p className='flex flex-col gap-2 pt-3'><span>Call us on for Attachments & Bookings</span><span><Link href="tel:9129122525" target="_blank">912-912-25-25</Link></span></p>
                                </li>
                                <li>
                                    <p className='bg-[#0556e8] p-2 w-32 text-white'>Goa</p>
                                    <p className='flex flex-col gap-2 pt-3'><span>Call us on for Attachments</span><span><Link href="tel:9129122525" target="_blank">912-912-25-25</Link></span></p>
                                </li>
                                <li>
                                    <p className='bg-[#0556e8] p-2 w-52 text-white'>Helpline Numbers</p>
                                    <p className='flex flex-col gap-2 pt-3'><span>Call us on for Attachments & Bookings</span><span><Link href="tel:9129122525" target="_blank">912-912-25-25</Link></span></p>
                                </li>
                            </ul>

                        </div>
                    </div>
                </div>
            </div>
        </Layout>

    )
}

export default contact