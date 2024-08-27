import React, { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import apple from '../../images/apple.webp';
import google from '../../images/ggle.webp';

const SliderItem = ({ item, index }) => {
  const [hovered, setHovered] = useState(false);

  return (
    <div
      key={index}
      className='flex flex-col text-black bg-white p-4 rounded relative'
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      <div className='relative pb-4'>
        <Image
          src={item.src}
          alt={`Car ${index}`}
          width={1000}
          height={1000}
          className='w-40 h-32 object-cover transition-transform duration-300'
        />
      </div>
      <div
        className={`absolute inset-0 bg-white transition-opacity duration-300 ${
          hovered ? 'opacity-100' : 'opacity-0'
        } flex flex-col justify-center items-center p-4 text-center`}
      >
        <p className='text-xl font-semibold'>{item.carname} Starting From</p>
        <p className='text-xl flex gap-36'>
          <span>12 hrs</span>
          <span>₹1000</span>
        </p>
        <p className='text-xl flex gap-36'>
          <span>24 hrs</span>
          <span>₹2000</span>
        </p>
        <div className='flex items-center justify-center gap-14 py-2'>
          <Image
            priority
            height={1000}
            width={1000}
            alt='apple'
            className='w-24 h-10'
            src={apple}
          />
          <Link href='https://play.google.com/store/search?q=long+drive+cars&c=apps'>
            <Image
              priority
              height={1000}
              width={1000}
              alt='google'
              className='w-28 h-14'
              src={google}
            />
          </Link>
        </div>
      </div>
    </div>
  );
};

export default SliderItem;
