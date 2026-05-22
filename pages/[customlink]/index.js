import React, { useEffect, useState } from 'react';
import dynamic from 'next/dynamic';
import Head from 'next/head';
import { useRouter } from 'next/router';
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
import PopUp from '../components/PopUp';
import { decryptFernetData } from '@/utils/crypto';

const metaData = [
    {
        title: "Choose your own hours - Book Self Drive car @ LongDriveCars App",
        description: "Book your Self-drive car rental starting at ₹1776/day. Install the Long Drive Cars app to book Dzire ₹1680/day, Ertiga ₹2496/day or explore other options for your next trip",
    },
    {
        title: "No Deposit | Unlimited Kms - Cheapest Self Drive Cars Near U ",
        description: "Starting at just ₹1776/day, rent a Self-drive car like the Dzire ₹1680/day or Ertiga ₹2496/day. You can also check Real Car Images on the Long Drive Cars App.",
    },
    {
        title: "Self Drive Rental Under 5 kms - Unlimited Kms",
        description: "All Cars @ lowest prices, rent your Self-drive car at just ₹1776/day. From Dzire ₹1680/day Ertiga ₹2496/day, check the real car images on Long Drive Cars appDrive through Hyderabad with comfort. Best prices on Dzire, Baleno, Ertiga, Swift, and Thar.",
    },
];

export default function Place({ cars, canonicalUrl }) {
    const router = useRouter();
    const { customlink } = router.query;

    // Allowed links
    const allowedLinks = ['hyderabad', 'selfdrivecars_hyderabad', 'car_rentals_in_hyderabad', 'index.html'];

    // Check if the customlink is valid
    useEffect(() => {
        if (allowedLinks.includes(customlink)) {
            // Redirect to a 404 page if the link is not valid
            router.push(`/${customlink}`);
            return
        }
        else {
            router.push('/404');
        }
    }, [customlink]);

    const [currentMeta, setCurrentMeta] = useState(metaData[0]);

    useEffect(() => {
        // Get the current index from localStorage (default to 0)
        const lastIndex = localStorage.getItem('metaIndex') || 0;
        const newIndex = (parseInt(lastIndex) + 1) % metaData.length;

        setCurrentMeta(metaData[newIndex]);

        // Save the updated index to localStorage
        localStorage.setItem('metaIndex', newIndex);
    }, []);

    return (
        <div>
            <Layout locname={'hyderabad'} phoneno={"9000-478-478"}>
                <Head>
                    <title>No Deposit | Unlimited Kms - Cheapest Self Drive Cars Near U</title>
                    <meta id="meta-desc" name="description" content="1 day Free Car @ New User - Self Drive Cars @ 1776/Day - Check Real Photos & Book - Home Delivery" />
                    <meta name="viewport" content="width=device-width, initial-scale=1" />
                    <meta property="og:title" content="No Deposit | Unlimited Kms - Cheapest Self Drive Cars Near U" />
                    <meta property="og:description" content="1 day Free Car @ New User - Self Drive Cars @ 1776/Day - Check Real Photos & Book - Home Delivery" />
                    <link rel="canonical" href={canonicalUrl} />
                </Head>
                <div className="pt-32 lg:pt-0">

                    <CarProducts data={cars} branch={'hyderabad'} phoneno={'9000478478'} wspno={'9000478478'} count={6} />
                    <DynImageChange locname={'hyderabad'} />
                    <div>
                        <DynNearByApi city={'hyderabad'} />
                    </div>
                    <div><DynNearYou /></div>
                    <FeaturedCars data={cars} branch={'hyderabad'} />
                    <DynCallBackForm />
                    <DynWhyChooseUs locname={'hyderabad'} />
                    <div className='bg-white rounded xl:py-12 lg:px-14 xl:px-14 p-2'>
                        <p className='uppercase p-2 mb-4 text-center text-black font-bold xl:text-2xl font-manrope'>Frequently asked questions</p>
                        <DynamicFaqComponent city={'hyderabad'} />
                    </div>
                    <GetInTouch city={'hyderabad'} phoneno={'9000478478'} wspno={'9000478478'} />
                    <PriceList city={'hyd'} phoneno={'9000478478'} wspno={'9000478478'} />
                    <PopUp />
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
        car_image_front_view_duplicate: car.car_image_front_view_duplicate,
        car_image_back_view_duplicate: car.car_image_back_view_duplicate,
        car_image_car_left_view_duplicate: car.car_image_car_left_view_duplicate,
        car_image_reading_view_duplicate: car.car_image_reading_view_duplicate,
        fuel_type: car.fuel_type,
        transmission_type: car.transmission_type,
        seater: car.seater,
    }));
    const carModels = [
        'MARUTHI WAGON R', 'MARUTHI SWIFT', 'MARUTHI DZIRE', 'GRAND NIOS', 'MARUTHI BALENO',
        'HYUNDAI I20', 'HYUNDAI VENUE', 'KIA SONET', 'KIA SELTOS', 'KIA SONET SUNROOF',
        'SELTOS SUNROOF', 'MARUTHI ERTIGA', 'MAHINDRA THAR 2024 Diesel',
        'INNOVA CRYSTA Diesel', 'MAHINDRA XUV 700 Diesel'
    ];

    const filteredItems = carModels.flatMap((model) =>
        filteredCars?.filter((item) => item?.maker_model === model)
    );

    const host = req.headers.host;
    const canonicalUrl = host.includes('.in')
        ? 'https://www.longdrivecars.in'
        : 'https://www.longdrivecars.com';

    return {
        props: {
            cars: filteredItems,
            canonicalUrl,
        },
    };
}
