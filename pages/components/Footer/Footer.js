import React from 'react'
import Link from 'next/link'
import { FaFacebook, FaInstagram, FaSearch, FaYoutube } from 'react-icons/fa';
import { SiLinkedin } from "react-icons/si";
import Image from 'next/image';
import Marquee from 'react-fast-marquee';
import { TbPointFilled } from "react-icons/tb";
import imgs from '../../images/cretafoot.png'
import imgs2 from '../../images/tatanexonrunning.png'
function Footer() {
    return (
        // <div style={{ backgroundImage: 'url(/sd.)' }} className='pb-4'></div>
        <div className='bg-black text-white'>
            <div style={{ backgroundImage: 'url(/ldcfooter.png)' }} className='bg-contain bg lg:bg-center bg-bottom bg-no-repeat lg:bg-repeat'>
                <footer className='lg:pb opacity-'>
                    <div className="flex xl flex-wrap px-4 justify-between gap-3 b0  z-10 pb-28 lg:pb-48 lg:pt-6 lg:px-28 xl:px-14 xl:pt relative top-9">
                        <div className='lg:w-3/6'>
                            <div className='flex flex-col p-1 rounded '>
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
                <div className='relative lg:bottom-3 top-3 lg:top-7'>
                    <Marquee speed={40} direction='right' className='lg:pt-0'>
                        <div className={'flex gap-12 lg:gap-64 text-xs lg:text-lg '}>
                            
                            <Image 
                                src={imgs2}
                                width={700}
                                height={700}
                                className='lg:w-28 lg:h-24 w-14 h-10 relative top-[6px]'
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
            <div className=' pb-4 lg:px-20 text-center lg:text-black text-white lg:text-lg text-xs border-t-2 border-t-gray-300'>
                <p >© longdrivecars all rights reserved</p>
                {/* <Link href={'/blog.html'}>blogs</Link> */}
            </div>

        </div>
    )
}
export default Footer

