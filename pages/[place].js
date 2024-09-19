import React, { useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import dynamic from 'next/dynamic';

import CarProducts from './components/CarProducts';
import Header from './components/Hamburger/HamburgerMenu';

const DynCallBackForm = dynamic(() => import('./components/CallBackForm/CallBackForm'));
const DynNearYou = dynamic(() => import('./components/NearYou/NearYou'));
const DynImageChange = dynamic(() => import('./components/ImageChange/ImageChange'));
const DynNearByApi = dynamic(() => import('./components/NearByApi/NearByApi'));
const GetInTouch = dynamic(() => import('./components/GetInTouch/GetInTouch'));
const FeaturedCars = dynamic(() => import('./components/FeaturedCars/FeaturedCars'));
const DynamicFaqComponent = dynamic(() => import('./components/FaqAccordian/FaqAccordian'));
import DynWhyChooseUs from './components/WhyChooseUs/WhyChooseUs';

const allowedKeywords = ['warangal', 'bengalore', 'keyword3'];

export default function Place({ place }) {
    const [carData, setCarData] = useState(null);
    const [carData2, setCarData2] = useState(null);
    const router = useRouter();

    useEffect(() => {
        async function fetchCarDetails() {
            try {
                const response = await fetch(`https://api.longdrivecarz.in/site/cars-info?location=${place}`);
                const items = await response.json();
                const cars = items?.data?.results;
                setCarData(cars);
            } catch (error) {
                console.error('Error fetching car details:', error);
            }
        }

        if (place) {
            fetchCarDetails();
        }
    }, [place]);

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
        <div className="min-h-screen">
            <Header locname={place} />
            <DynImageChange />
            <div>
                <DynNearByApi />
            </div>
            <CarProducts data={carData} place={place} />
            <div><DynNearYou /></div>
            <FeaturedCars data={carData} />
            <DynCallBackForm />
            <DynWhyChooseUs />
            <div className='bg-white rounded shadow-md xl:py-12 lg:px-14 xl:px-14 p-2'>
                <h2 className='uppercase p-2 mb-4 text-center text-black font-bold xl:text-2xl font-manrope'>Frequently asked questions</h2>
                <DynamicFaqComponent />
            </div>
            <GetInTouch />
        </div>
    );
}

export async function getServerSideProps(context) {
    const { place } = context.params;

    // Check if the slug is in the allowed keywords
    if (!allowedKeywords.includes(place)) {
        // Redirect to the homepage if the keyword is not allowed
        return {
            redirect: {
                destination: '/',
                permanent: false,
            },
        };
    }

    // Return props if the slug is allowed
    return {
        props: {
            place,
        },
    };
}
