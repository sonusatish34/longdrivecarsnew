import React from 'react'
import Link from 'next/link'
import { FaFacebook, FaInstagram, FaSearch, FaYoutube } from 'react-icons/fa';
import { SiLinkedin } from "react-icons/si";
import Image from 'next/image';

function Footer() {
    return (

        <div className='xs:bg-[1600px,700px] lg:bg-cover lg:px-16 text-white sm:bg-cotain bg-cover bg-black lg:bg-center bg-bottom'>
            <footer className='lg:pb opacity-'>
                <div className="flex xll:pb-28 flex-wrap px-4 justify-between gap-3 b0 text-white z-10 pt-16 lg:pb-24 lg:px-28 xl:px-2">
                    <div className='lg:w-3/6'>
                        <div className='flex flex-col text-lef'>
                            <p className='lg:text-lg xs:text-xs xs:font-medium lg:font-semibold font-sans'>Long Drive cars a leading car rental company offers rental cars for Long Drive in Hyderabad and various other cities. Currently operational in Hyderabad, Warangal and Bangalore, Long Drive cars offer a huge selection of cars ranging from luxury suvs or a sensible sedan.</p>
                        </div>
                    </div>
                    <div>
                        <h2 className='text-left mb-1 xs:pt-3 text-xl font-bold'>Contact Info</h2>
                        <div className='flex md:flex-col xs:flex-row text-left text-lg xs:gap-4 xs:pb-4'>
                            <div className='flex justify-center items-center'>
                                <ul >
                                    <li className='text-base'>Telangana, AP</li>
                                    <li className='text-xl font-bold'><Link href="tel:9666677405" target='_blank'>9666-677-405</Link></li>
                                </ul>
                            </div>
                            <div className='flex items-center'>
                                <ul>
                                    <li className='text-base'>Bangalore</li>
                                    <li className='text-xl font-bold'><Link href="tel:9129122525" target='_blank'>912-912-25-25</Link></li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
                <div className='flex justify-center items-center text-black border-t-2 border-slate-300 pb-4'>
                    <ul className='flex flex-wrap items-center lg:justify-between justify-center lg:pb-4 gap-5 pt-4 text-white flex-grow'>
                        <li>© selfdrivecars all rights reserved</li>
                        <li className='flex justify-end items-center gap-5 pl-2'>
                            <Link href={'https://www.facebook.com/selfdrivecarsbylongdrivecars/'} target='_blank'>
                                <p className='hover:text-blue-500 cursor-pointer'><FaFacebook className='lg:size-8' /></p>
                            </Link>
                            <Link href={'https://www.instagram.com/longdrivecars_official/'} target='_blank'>
                                <p className='hover:text-blue-500 cursor-pointer'><FaInstagram className='lg:size-8' /></p>
                            </Link>
                            <Link href={'https://in.linkedin.com/company/long-drive-cars'} target='_blank'>
                                <p className='hover:text-blue-500 cursor-pointer'><SiLinkedin className='lg:size-8' /></p>
                            </Link>
                            <Link href={'https://www.youtube.com/@longdrivecars_official'} target='_blank'>
                                <p className='hover:text-blue-500 cursor-pointer'><FaYoutube className='lg:size-8' /></p>
                            </Link>
                        </li>
                        <li className='flex gap-5 text-base'>
                            <p className='hover:text-blue-500 cursor-pointer'>Privacy & Policy</p>
                            <p className='hover:text-blue-500 cursor-pointer'>Blog</p>
                            <p className='hover:text-blue-500 cursor-pointer'> Policy</p>
                        </li>
                    </ul>
                </div>
            </footer>
        </div>
    )
}
export default Footer