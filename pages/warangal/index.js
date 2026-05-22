import React, { useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import dynamic from 'next/dynamic';
import Router from 'next/router';
import CarProducts from '../components/CarProducts';
const DynCallBackForm = dynamic(() => import('../components/CallBackForm/CallBackForm'));
const DynNearYou = dynamic(() => import('../components/NearYou/NearYou'));
const DynImageChange = dynamic(() => import('../components/ImageChange/ImageChange'));
const DynNearByApi = dynamic(() => import('../components/NearByApi/NearByApi'));
const GetInTouch = dynamic(() => import('../components/GetInTouch/GetInTouch'));
const FeaturedCars = dynamic(() => import('../components/FeaturedCars/FeaturedCars'));
const DynamicFaqComponent = dynamic(() => import('../components/FaqAccordian/FaqAccordian'));
import DynWhyChooseUs from '../components/WhyChooseUs/WhyChooseUs';
import Layout from '../components/Layout/Layout';
import PriceList from '../components/PriceList/PriceList';
import Head from 'next/head';
import { decryptFernetData } from '@/utils/crypto';
export default function Place({ cars, canonicalUrl }) {

    const [loading, setLoading] = useState(false);



    return (
        <div>
            <Layout locname={'warangal'} phoneno={"9000-777-665"}>
                <Head>
                    <title>Self Drive Cars in Warangal at Best Prices</title>
                    <meta id="meta-desc" name="description" content="Book car rental in Warangal with ease. Affordable self drive cars, instant booking & doorstep delivery.y" />
                    <meta name="viewport" content="width=device-width, initial-scale=1" />
                    <meta property="og:title" content="Self Drive Cars in Warangal at Best Prices" />
                    <meta property="og:description" content="Book car rental in Warangal with ease. Affordable self drive cars, instant booking & doorstep delivery.y" />
                    <meta property="og:type" content="website" />
                    <meta property="og:url" content={`${canonicalUrl}`} />
                    <meta property="og:image" content="https://www.longdrivecars.com/logos/logo3.webp" />
                    <meta name="robots" content="index, follow" />
                    <link rel="canonical" href={canonicalUrl} />
                </Head>
                <div className='pt-32 lg:pt-0'>
                    <CarProducts data={cars} branch={"warangal"} wspno={'9000777665'} phoneno={'9000777665'} count={7} />
                    <DynImageChange locname={'warangal'} />
                    <div>
                        <DynNearByApi city={'warangal'} />
                    </div>
                    <div><DynNearYou /></div>
                    <FeaturedCars data={cars} branch={"warangal"} />
                    <DynCallBackForm />
                    <DynWhyChooseUs />
                    <div className='bg-white rounded xl:py-12 lg:px-14 xl:px-14 p-2'>
                        <p className='uppercase p-2 mb-4 text-center text-black font-bold xl:text-2xl font-manrope'>Frequently asked questions</p>
                        <DynamicFaqComponent />
                    </div>
                    <GetInTouch phoneno={'9000777665'} />
                    <PriceList city={'hyd'} />
                </div>
            </Layout>
        </div>
    );
}

export async function getServerSideProps({ req }) {
    const response = await fetch('https://api.longdrivecars.com/l-site-dc/cars-info?location=hyderabad');
    const items = await response.json();
    const decryptedCars = decryptFernetData(items?.data?.results, process.env.LDC_SECRET_KEY)
    const cars = decryptedCars;

    const filteredCars = cars?.map(car => ({
        maker_model: car.maker_model,
        price_24_hours: car.price_24_hours,
        car_image_front_view: car.car_image_front_view_duplicate,
        car_image_back_view: car.car_image_back_view_duplicate,
        car_image_car_left_view: car.car_image_car_left_view_duplicate,
        car_image_reading_view: car.car_image_reading_view_duplicate,
        fuel_type: car.fuel_type,
        transmission_type: car.transmission_type,
        seater: car.seater,
    }));

    const host = req.headers.host;
    const canonicalUrl = host.includes('.in')
        ? 'https://www.longdrivecars.in/warangal'
        : 'https://www.longdrivecars.com/warangal';

    return {
        props: {
            cars: filteredCars,  // Return only the filtered data
            canonicalUrl,
        },
    };
}