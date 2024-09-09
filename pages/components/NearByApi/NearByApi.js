import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import carnearbtn from '../../images/carnearbtn.png';
import mapright from '../../images/mapright.webp';
function NearByApi() {
    return (
        <div className='xl:px-28 lg:px-16 px-2 py-6 lg:py-10'>
            <div className='text-white font-bold xl:px-28 lg:px-12 bg-[#660066] rounded-md py-4 flex flex-col lg:flex-row items-center lg:justify-between mont-text'>
                <div className='pt-10 flex flex-col lg:gap-3 gap-2 items-center'>
                    <p className='xl:text-5xl lg:text-4xl text-2xl lg:pt-2'>Explore Cars Near You</p>
                    <p className='text-base xl:text-3xl lg:text-2xl relative'>20Kms Around Your Location</p>
                    <Link href={'/test'} className={` w-fit lg:text-lg text-xs font-semibold text-black flex items-center lg:hover:scale-105 pt-6`}>
                        <Image
                            priority
                            src={carnearbtn}
                            alt={'home banner'}
                            height={1000}
                            width={1000}
                            className='xl:w-full lg:w-96 lg:h-28 w-full pl-4 '
                        />
                    </Link>
                    <span className='animate-ping text-xl bg-red-800 rounded-full w-3 h-3 relative bottom-8 left-28 xl:bottom-10 xl:left-44 lg:bottom-10 lg:left-36'></span>
                </div>
                <div>
                    <Image
                        priority
                        src={mapright}
                        alt={'home banner'}
                        height={1000}
                        width={1000}
                        className=':xl-80 lg:w-72 w-48 scale-125 relative'
                    />
                </div>
            </div>
        </div>
    )
}

export default NearByApi