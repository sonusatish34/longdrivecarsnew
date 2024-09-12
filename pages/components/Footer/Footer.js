import React from 'react'
import Link from 'next/link'
import { FaFacebook, FaInstagram, FaSearch, FaYoutube } from 'react-icons/fa';
import { SiLinkedin } from "react-icons/si";
import Image from 'next/image';
import Marquee from 'react-fast-marquee';
import { TbPointFilled } from "react-icons/tb";
import imgs from '../../images/cretafoot.png'
import imgs2 from '../../images/3_408-removebg-preview (1).png'
function Footer() {
    return (
        <div className='bg-white'>
            <div className='flex px-10 py-5 md:justify-between text-white xl:px-28 lg:py-14 flex-wrap bg-[#660066] rounded-md mx-[14px] lg:mx-[58px] my-3 items-center font-sans'>
                <div className=' xl:text-left lg:text-base text-left text-xs font-semibold'>
                    <ul className='gap-2 flex flex-col'>
                        <li className='hover:scale-105'><Link href={'/self-drive-car-rental/gachibowli'}>Self drive car rental in Gachibowli</Link></li>
                        <li className='hover:scale-105'><Link href={'/self-drive-car-rental/medipally'}>Self drive car rental in Medipally</Link></li>
                        <li className='hover:scale-105 '><Link href={'/self-drive-car-rental/miyapur'}>Self drive car rental in Miyapur</Link></li>
                        <li className='hover:scale-105'><Link href={'/self-drive-car-rental/ramanthapur'}>Self drive car rental in Ramanthapur</Link></li>
                        <li className='hover:scale-105'><Link href={'/self-drive-car-rental/secunderabad'}>Self drive car rental in Secunderabad</Link></li>
                        <li className='hover:scale-105'><Link href={'/self-drive-car-rental/shamshabad'}>Self drive car rental in Shamshabad</Link></li>
                    </ul>
                </div>
                <div className=' xl:text-left lg:text-base text-left text-xs font-semibold'>
                    <ul className='gap-2 flex flex-col pt-1 lg:pt-0'>
                        <li className='hover:scale-105'> <Link href={'/self-drive-car-rental/dilshuknagar'}>Self drive car rental in Dilshuknagar</Link></li>
                        <li className='hover:scale-105'><Link href={'/self-drive-car-rental/madhapur'}>Self drive car rental in Madhapur</Link></li>
                        <li className='hover:scale-105'><Link href={'/self-drive-car-rental/kukatpally'}>Self drive car rental in Kukatapally</Link></li>
                        <li className='hover:scale-105'><Link href={'/self-drive-car-rental/ameerpet'}>Self drive car rental in Ameerpet</Link></li>
                        <li className='hover:scale-105'><Link href={'/self-drive-car-rental/ecil'}>Self drive car rental in Ecil</Link></li>
                    </ul>
                </div>
            </div>
            <div style={{ backgroundImage: 'url(/dub1.webp)' }} className='bg-black text-white bg-contain bg xl:bg-center bg-bottom bg-no-repeat xl:bg-repeat'>
                <footer className='lg:pb py-4'>
                    <div className="flex flex-wrap lg:flex-row flex-col px-4 justify-between gap-3 b0  z-10 pb-32 lg:pb-48 lg:pt-6 xl:px-28  lg:px-14 xl:pt relative top-">
                        <div className='xl:w-3/6 lg:w-2/6'>
                            <div className='flex flex-col p-1 rounded '>
                                <p className='xl:text-lg lg:text-base xs:text-xs xs:font-medium lg:font-semibold font-sans'>Long Drive cars a leading car rental company offers rental cars for Long Drive in Hyderabad and various other cities. Currently operational in Hyderabad, Warangal and Bangalore, Long Drive cars offer a huge selection of cars ranging from luxury suvs or a sensible sedan.</p>
                            </div>
                        </div>
                        <div>
                            <p className='text-left text-xl font-bold pb-4'>Our Branches</p>
                            <div className=' xl:text-left lg:text-base text-left text-base font-semibold'>
                                <ul className='gap-2 flex flex-col pt-1 lg:pt-0'>

                                    <li className='hover:scale-105'><Link href={'/'}>Hyderabad</Link></li>
                                    <li className='hover:scale-105'><Link href={'/'}>Warangal</Link></li>
                                    <li className='hover:scale-105'><Link href={'/'}>Vizag</Link></li>
                                    <li className='hover:scale-105'> <Link href={'/'}>Vijayawada</Link></li>
                                    <li className='hover:scale-105'><Link href={'/branches/self-drive-cars-bengaluru'}>Bangalore</Link></li>
                                    <li className='hover:scale-105'><Link href={'/'}>Mysuru</Link></li>
                                    <li className='hover:scale-105'><Link href={'/'}>Mangalore</Link></li>
                                </ul>
                            </div>
                        </div>
                        <div>
                            <p className='text-left mb-1 pt-3 lg:pt-0 text-xl font-bold pb-4'>Social Media Links</p>
                            <div className='flex gap-5'>
                                <Link href={'https://www.facebook.com/selfdrivecarsbylongdrivecars/'} target='_blank'>
                                    <p className='hover:text-blue-500 cursor-pointer'><FaFacebook className='lg:size-8 size-9' /></p>
                                </Link>
                                <Link href={'https://www.instagram.com/longdrivecars_official/'} target='_blank'>
                                    <p className='hover:text-blue-500 cursor-pointer'><FaInstagram className='lg:size-8 size-9' /></p>
                                </Link>
                                <Link href={'https://in.linkedin.com/company/long-drive-cars'} target='_blank'>
                                    <p className='hover:text-blue-500 cursor-pointer'><SiLinkedin className='lg:size-8 size-9' /></p>
                                </Link>
                                <Link href={'https://www.youtube.com/@longdrivecars_official'} target='_blank'>
                                    <p className='hover:text-blue-500 cursor-pointer'><FaYoutube className='lg:size-8 size-9' /></p>
                                </Link>
                            </div>
                        </div>
                        <div>
                            <h2 className='text-left mb-1 text-xl font-bold'>Contact Info</h2>
                            <div className='flex md:flex-col xs:flex-row text-left text-lg xs:gap-4 xs:pb-4'>
                                <div className='flex justify-center items-center'>
                                    <ul>
                                        <li className='text-base'>Telangana, AP</li>
                                        <li className='text-xl font-bold'><Link href="tel:9000478478" target='_blank'>9000-478-478</Link></li>
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
                </footer>
                <div className='relative lg:bottom-3 top-3 lg:top-7'>
                    <Marquee speed={40} direction='right' className='lg:pt-0'>
                        <div className={'flex gap-24 lg:gap-64 text-xs lg:text-lg '}>
                            <Image
                                src={imgs2}
                                width={700}
                                height={700}
                                className='lg:w-36 lg:h-28 w-16 h-14 bottom-[1.1rem] relative lg:bottom-[2.25rem]'
                            >
                            </Image>
                            <Image
                                src={imgs}
                                width={700}
                                height={700}
                                className='lg:w-32 lg:h-28 w-14 h-14'
                            >
                            </Image>
                        </div>
                    </Marquee>
                </div>
            </div>
            <div className='bg-black py-1 lg:px-20 text-center text-white lg:text-lg text-xs'>
                <p >© longdrivecars all rights reserved</p>
                {/* <Link href={'/blog.html'}>blogs</Link> */}
            </div>
        </div>
    )
}
export default Footer;

