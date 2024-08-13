import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import homebanner from '../../images/homebanner.webp'
import apple from '../../images/apple.webp'
import google from '../../images/ggle.webp'
import Link from 'next/link';
import img2 from '../../changeimg/ertiga.webp'
import img3 from '../../changeimg/polo.webp'
import img4 from '../../changeimg/swift.webp'
import img5 from '../../changeimg/i20.webp'
const ImageChange = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const images = [
    img2, img3, img4, img5
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 4000);

    return () => clearInterval(interval);
  }, []);

  return (

    <div className='mt-28 xl:mt-0 2xl:mt-0 lg:mt-0'>
      <div className='h-full lg:pt-2 xl:pl-4 lg:pl-10  lg:justify-between xs:justify-end flex flex-wrap md:justify-end justify-between bg-white'>
        <div className=''>
          <Image
            priority
            src={homebanner}
            alt={'home banner'}
            height={1000}
            width={1000}
            className='w-[600px]'
          />
          <h2 className="lg:text-left text-black font-[500] xl:text-base text-xl pl-8 " data-wow-delay="50ms" data-wow-duration="200ms">
            <p className='xl:text-5xl lg:text-4xl xs:text-2xl font-jakarta lg:pb-2 font-bold pb-1 w-3/4'>For Long Drive Car Rental </p>
            <div className='flex xs:flex-wrap xl:pt-16 lg:gap-8 pt-2 gap-2 lg:w-full xs:text-sm md:text-xs xl:text-lg'>

              <div className="flex flex-col items-center gap-1 py-2 bg-[#ffffff]">
                <Image
                  priority
                  height={500}
                  width={500}
                  alt='apple'
                  className='w-[7.7rem]'
                  src={apple}
                >
                </Image>
                <Link href='https://play.google.com/store/search?q=long+drive+cars&c=apps'>
                  <Image
                    priority
                    height={500}
                    width={500}
                    alt='google'
                    className='w-36'
                    src={google}
                  >
                  </Image>
                </Link>

              </div>

            </div>
          </h2>
        </div>



      </div>
    </div>
  );
};

export default ImageChange;
