import React, { useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import dynamic from 'next/dynamic';

import CarProducts from '../components/CarProducts';
import Header from '../components/Hamburger/HamburgerMenu';
// import { useEffect } from 'react';
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
const DynamicPriceList = dynamic(() => import('../components/PriceList/PriceList'));
// const allowedKeywords = ['warangal', 'bangalore', 'keyword3'];

export default function Place() {
    const [carData, setCarData] = useState(null);
    const [carData2, setCarData2] = useState(null);
    const router = useRouter();
    const { branch } = router.query;

    useEffect(() => {
        async function fetchCarDetails() {
            try {
                const response = await fetch(`https://api.longdrivecarz.in/site/cars-info?location=warangal`);
                const items = await response.json();
                const cars = items?.data?.results;
                setCarData(cars);
            } catch (error) {
                console.error('Error fetching car details:', error);
            }
        }

        fetchCarDetails();
    }, []);
    useEffect(() => {
        async function fetchCarDetails() {
            try {
                const response = await fetch(`https://api.longdrivecarz.in/site/cars-info?location=hyderabad`);
                const items = await response.json();
                const cars = items?.data?.results;
                setCarData2(cars);
            } catch (error) {
                console.error('Error fetching car details:', error);
            }
        }

        fetchCarDetails();
    }, []);

    return (
        <div>
            <Layout locname={'warangal'} phoneno={"9000-777-665"}>
                <div className="min-h-screen">
                    <DynImageChange/>
                    <div>
                        <DynNearByApi city={'warangal'} />
                    </div>
                    <CarProducts data={carData} branch={"warangal"} phoneno={'9000777665'}/>
                    <div><DynNearYou /></div>
                    <FeaturedCars data={carData2} branch={"warangal"} />
                    <DynCallBackForm />
                    <DynWhyChooseUs/>
                    <div className='bg-white rounded shadow-md xl:py-12 lg:px-14 xl:px-14 p-2'>
                        <h2 className='uppercase p-2 mb-4 text-center text-black font-bold xl:text-2xl font-manrope'>Frequently asked questions</h2>
                        <DynamicFaqComponent/>
                    </div>
                    <GetInTouch phoneno={'9000777665'}/>
                    <PriceList city={'hyd'}/>
                </div>
            </Layout>
        </div>
    );
}

// export async function getServerSideProps(context) {
//     const  branch  =  'bangalore';

//     // Check if the slug is in the allowed keywords
//     if (!allowedKeywords.includes(branch)) {
//         // Redirect to the homepage if the keyword is not allowed
//         return {
//             redirect: {
//                 destination: '/',
//                 permanent: false,
//             },
//         };
//     }

//     // Return props if the slug is allowed
//     return {
//         props: {
//             branch,
//         },
//     };
// }


