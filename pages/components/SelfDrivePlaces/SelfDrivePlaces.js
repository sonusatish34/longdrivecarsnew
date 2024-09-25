import React from 'react'
import Link from 'next/link';
function SelfDrivePlaces() {
    return (

        <div className='flex pl-10 py-5 md:justify-between text-white xl:px-28 lg:py-14 flex-wrap bg-[#660066] rounded-md mx-[14px] lg:mx-[58px] my-3 items-center'>
            <div className=' xl:text-left lg:text-base text-left text-xs font-semibold'>
                <ul className='gap-2 flex flex-col'>
                    <li className='lg:hover:scale-105'><Link href={'/'}>Self drive car rental in Gachibowli</Link></li>
                    <li className='lg:hover:scale-105'><Link href={'/'}>Self drive car rental in Medipally</Link></li>
                    <li className='lg:hover:scale-105 '><Link href={'/'}>Self drive car rental in Miyapur</Link></li>
                    <li className='lg:hover:scale-105'><Link href={'/'}>Self drive car rental in Ramanthapur</Link></li>
                    <li className='lg:hover:scale-105'><Link href={'/'}>Self drive car rental in Secunderabad</Link></li>
                    <li className='lg:hover:scale-105'><Link href={'/'}>Self drive car rental in Shamshabad</Link></li>
                </ul>
            </div>
            <div className=' xl:text-left lg:text-base text-left text-xs font-semibold'>
                <ul className='gap-2 flex flex-col pt-1 lg:pt-0'>
                    <li className='lg:hover:scale-105'> <Link href={'/'}>Self drive car rental in Dilshuknagar</Link></li>
                    <li className='lg:hover:scale-105'><Link href={'/'}>Self drive car rental in Madhapur</Link></li>
                    <li className='lg:hover:scale-105'><Link href={'/'}>Self drive car rental in Kukatapally</Link></li>
                    <li className='lg:hover:scale-105'><Link href={'/'}>Self drive car rental in Ameerpet</Link></li>
                    <li className='lg:hover:scale-105'><Link href={'/'}>Self drive car rental in Ecil</Link></li>
                </ul>
            </div>
        </div>
    )
}

export default SelfDrivePlaces;