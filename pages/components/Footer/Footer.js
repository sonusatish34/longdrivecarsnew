import React from 'react'
import Link from 'next/link'
import { FaFacebook, FaInstagram, FaSearch, FaYoutube } from 'react-icons/fa';
import { SiLinkedin } from "react-icons/si";
import Image from 'next/image';
import Marquee from 'react-fast-marquee';
import { TbPointFilled } from "react-icons/tb";
import imgs from '../../images/cretafoot.png'
function Footer() {
    return (
        // <div style={{ backgroundImage: 'url(/sd.)' }} className='pb-4'></div>
        <div className='bg-white text-black'>
            <div style={{ backgroundImage: 'url(/222.avif)' }} className='bg-white lg:px-16 bg-contain lg:bg-center bg-bottom bg-no-repeat'>
                <footer className='lg:pb opacity-'>
                    <div className="flex xl flex-wrap px-4 justify-between gap-3 b0  z-10 pb-28 lg:pb-48 lg:pt-6 lg:px-28 xl:px-2">
                        <div className='lg:w-3/6'>
                            <div className='flex flex-col text-lef p-1 rounded '>
                                <p className='lg:text-lg xs:text-xs xs:font-medium lg:font-semibold font-sans'>Long Drive cars a leading car rental company offers rental cars for Long Drive in Hyderabad and various other cities. Currently operational in Hyderabad, Warangal and Bangalore, Long Drive cars offer a huge selection of cars ranging from luxury suvs or a sensible sedan.</p>
                            </div>
                        </div>
                        <div>
                            <h2 className='text-left mb-1 xs:pt-3 text-xl font-bold pb-4'>Social Media Links</h2>
                            <div className='flex gap-5'>
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
                            </div>
                        </div>
                        <div>
                            <h2 className='text-left mb-1 xs:pt-3 text-xl font-bold'>Contact Info</h2>
                            <div className='flex md:flex-col xs:flex-row text-left text-lg xs:gap-4 xs:pb-4'>
                                <div className='flex justify-center items-center'>
                                    <ul>
                                        <li className='text-base'>Telangana, AP</li>
                                        <li className='text-2xl font-bold'><Link href="tel:9666677405" target='_blank'>9666-677-405</Link></li>
                                    </ul>
                                </div>
                                <div className='flex items-center'>
                                    <ul>
                                        <li className='text-base'>Bangalore</li>
                                        <li className='text-2xl font-bold'><Link href="tel:9129122525" target='_blank'>912-912-25-25</Link></li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>

                </footer>
                <div className='relative lg:bottom-7 top-3 lg:top-0'>
                    <Marquee speed={55} direction='right' className='lg:pt-0'>
                        <div className={'flex text-xs lg:text-lg '}>
                            <Image 
                                src={imgs}
                                width={2000}
                                height={2000}
                                className='lg:w-24 lg:h-20 w-10 h-10'
                            >
                            </Image>
                        </div>
                    </Marquee>
                </div>

            </div>
            <div className=' pb-4 lg:px-20 text-center text-black lg:text-lg text-xs border-t-2 border-t-gray-300'>
                <p>© longdrivecars all rights reserved</p>
            </div>

        </div>
    )
}
export default Footer

