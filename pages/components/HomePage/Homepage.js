import React, { useState } from 'react';
import dynamic from 'next/dynamic';
import Image from 'next/image';
import Link from 'next/link';
import CarProducts from '../CarProducts';
import inv from '../../changeimg/innova.webp'

import swift from '../../changeimg/swift.webp'
import ertiga from '../../changeimg/ERTIGA_RED.webp'
import creta from '../../changeimg/creta-thumbnail-pc.png'
import baleno from '../../changeimg/baleno.webp'

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import DynWhyChooseUs from '../WhyChooseUs/WhyChooseUs'


const DynCallBackForm = dynamic(() => import('../CallBackForm/CallBackForm'));
const DynNearYou = dynamic(() => import('../NearYou/NearYou'));
const DynImageChange = dynamic(() => import('../ImageChange/ImageChange'));
const DynNearByApi = dynamic(() => import('../NearByApi/NearByApi'));
const GetInTouch = dynamic(() => import('../GetInTouch/GetInTouch'));
const FeaturedCars = dynamic(() => import('../FeaturedCars/FeaturedCars'));
const DynamicFaqComponent = dynamic(() => import('../FaqAccordian/FaqAccordian'));

export default function Homepage({ data }) {

  const data2 = data;

  return (
    <div className="min-h-screen">
      <DynImageChange />
      <div>
        <DynNearByApi />
      </div>
      <CarProducts data={data2} />
      <div><DynNearYou /></div>
      <FeaturedCars data={data2}/>
      <DynCallBackForm />
      <DynWhyChooseUs />
      <div className='bg-white  rounded shadow-md xl:py-12 lg:px-14 xl:px-14 p-2'>
        <h2 className='uppercase p-2 mb-4 text-center text-black font-bold xl:text-2xl font-manrope'>Frequently asked questions</h2>
        <DynamicFaqComponent />
      </div>
      <GetInTouch />
    </div>
  );
}

