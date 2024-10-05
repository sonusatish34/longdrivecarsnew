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
import BangaloreLayout from '../components/Layout/BangaloreLayout';
import PriceList from '../components/PriceList/PriceList';
const DynamicPriceList = dynamic(() => import('../components/PriceList/PriceList'));
const allowedKeywords = ['warangal', 'bangalore', 'keyword3'];

export default function Place() {
    const [carData, setCarData] = useState(null);
    const [carData2, setCarData2] = useState(null);
    const router = useRouter();
    const { branch } = router.query;

    useEffect(() => {
        async function fetchCarDetails() {
            try {
                const response = await fetch(`https://api.longdrivecarz.in/site/cars-info?location=bangalore`);
                const items = await response.json();
                const cars = items?.data?.results;
                setCarData(cars);
            } catch (error) {
                console.error('Error fetching car details:', error);
            }
        }

        fetchCarDetails();
    }, []);



    // useEffect(() => {
    //     async function fetchCarDetails() {
    //         try {
    //             const response = await fetch(`https://longdrivecarz.in/site/monthly-car-earnings?min_price=1000&max_price=${maxPrice}&location=Hyderabad`);
    //             const items = await response.json();
    //             const prices = items?.results;
    //             setPriceList(prices);
    //             console.log(prices,"prices");

    //         } catch (error) {
    //             console.error('Error fetching car details:', error);
    //         }
    //     }

    //         fetchCarDetails();
    // }, []);
    // useEffect(() => {
    //     async function fetchHydCarDetails() {
    //         try {
    //             const response2 = await fetch(`https://api.longdrivecarz.in/site/cars-info?location=Hyderabad`);
    //             const items2 = await response2.json();
    //             const cars2 = items2?.data?.results;
    //             setCarData2(cars2);
    //         } catch (error) {
    //             console.error('Error fetching Hyderabad car details:', error);
    //         }
    //     }
    //     fetchHydCarDetails();
    // }, []);

    return (
        <div>
            <BangaloreLayout>
                <div className="min-h-screen">
                    {/* <Header locname={'bangalore'} /> */}
                    <DynImageChange locname={'bangalore'}/>
                    <div>
                        <DynNearByApi city={'bangalore'} />
                    </div>
                    <CarProducts data={carData} branch={"bangalore"} phoneno={'9129122525'}/>
                    <div><DynNearYou /></div>
                    <FeaturedCars data={carData} branch={"bangalore"} />
                    <DynCallBackForm />
                    <DynWhyChooseUs locname={'bangalore'}/>
                    <div className='bg-white rounded shadow-md xl:py-12 lg:px-14 xl:px-14 p-2'>
                        <h2 className='uppercase p-2 mb-4 text-center text-black font-bold xl:text-2xl font-manrope'>Frequently asked questions</h2>
                        <DynamicFaqComponent city={'bangalore'}/>
                    </div>
                    <GetInTouch city={'bangalore'} phoneno={'9129122525'}/>
                    <PriceList city={'bangalore'} phoneno={'9129122525'}/>
                </div>
            </BangaloreLayout>
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


