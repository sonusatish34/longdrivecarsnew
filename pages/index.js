import React, { useState } from 'react';
import dynamic from 'next/dynamic';
import Head from 'next/head';
import Image from 'next/image';

import Layout from './components/Layout/Layout';
import CarProducts from './components/CarProducts';
import HeroBanner from './components/HeroBanner';

// Client-only dynamic imports for non-critical interactive widgets
const PopUp = dynamic(() => import('./components/PopUp'), { ssr: false });
const DynCallBackForm = dynamic(() => import('./components/CallBackForm/CallBackForm'), { ssr: false });
const DynNearYou = dynamic(() => import('./components/NearYou/NearYou'), { ssr: false });
const DynImageChange = dynamic(() => import('./components/ImageChange/ImageChange'), { ssr: false });
const DynNearByApi = dynamic(() => import('./components/NearByApi/NearByApi'), { ssr: false });
const GetInTouch = dynamic(() => import('./components/GetInTouch/GetInTouch'), { ssr: false });
const FeaturedCars = dynamic(() => import('./components/FeaturedCars/FeaturedCars'), { ssr: false });

// Server-rendered FAQ component for SEO and rich snippets
import FaqAccordian from './components/FaqAccordian/FaqAccordian';

import { handleStoreRedirect } from '@/utils/redirectUtils';
import { getCarsByLocation } from '../utils/serverCars';

export default function Place({ cars, canonicalUrl }) {
  const isIndiaSite = true;
  const [showPromoBanner, setShowPromoBanner] = useState(true);

  const metaTitle = "Long Drive Cars | Self Drive Car Rental in Hyderabad, Zero Deposit Option, Unlimited Km Plans";
  const metaDescription = "Long Drive Cars is a self drive car rental app in Hyderabad offering unlimited kilometre plans, a zero deposit option, home and airport delivery, and 5-minute pickup from branches in Kukatpally, Dilsukhnagar and Hitech City. Cars from ₹1180 per 24 hours.";

  // Schema for AutoRental & Hyderabad branch locations
  const autoRentalSchema = {
    "@context": "https://schema.org",
    "@type": "AutoRental",
    name: "Long Drive Cars - Self Drive Car Rental Hyderabad",
    url: canonicalUrl,
    logo: "https://www.longdrivecars.com/logos/logo3.webp",
    image: "https://www.longdrivecars.com/logos/logo3.webp",
    telephone: "+919000478478",
    priceRange: "₹₹",
    currenciesAccepted: "INR",
    paymentAccepted: "Cash, Credit Card, UPI",
    areaServed: [
      {
        "@type": "City",
        name: "Hyderabad",
      },
      {
        "@type": "AdministrativeArea",
        name: "Telangana",
      },
    ],
    department: [
      {
        "@type": "AutoRental",
        name: "Long Drive Cars - Kukatpally",
        telephone: "+919000478478",
        address: {
          "@type": "PostalAddress",
          streetAddress: "Kukatpally Main Road",
          addressLocality: "Kukatpally",
          addressRegion: "Telangana",
          postalCode: "500072",
          addressCountry: "IN",
        },
        geo: {
          "@type": "GeoCoordinates",
          latitude: 17.4933,
          longitude: 78.3914,
        },
      },
      {
        "@type": "AutoRental",
        name: "Long Drive Cars - Dilsukhnagar",
        telephone: "+919000478478",
        address: {
          "@type": "PostalAddress",
          streetAddress: "Dilsukhnagar Main Road",
          addressLocality: "Dilsukhnagar",
          addressRegion: "Telangana",
          postalCode: "500060",
          addressCountry: "IN",
        },
        geo: {
          "@type": "GeoCoordinates",
          latitude: 17.3688,
          longitude: 78.5247,
        },
      },
      {
        "@type": "AutoRental",
        name: "Long Drive Cars - Hitech City",
        telephone: "+919000478478",
        address: {
          "@type": "PostalAddress",
          streetAddress: "Hitech City Road, Madhapur",
          addressLocality: "Hitech City",
          addressRegion: "Telangana",
          postalCode: "500081",
          addressCountry: "IN",
        },
        geo: {
          "@type": "GeoCoordinates",
          latitude: 17.4435,
          longitude: 78.3772,
        },
      },
    ],
  };

  // Schema for FAQPage
  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: [
      {
        "@type": "Question",
        name: "What documents are required to book a car with Long Drive Cars?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "You only need one government ID proof (Aadhaar card or passport) and a valid driving licence. Repeat customers do not need to submit documents again.",
        },
      },
      {
        "@type": "Question",
        name: "Is there a security deposit for car rentals?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Long Drive Cars offers a Zero Deposit Option on our rental fleet.",
        },
      },
      {
        "@type": "Question",
        name: "Are there unlimited kilometre plans available?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Yes, we offer hourly, 120 km, 300 km, and unlimited kilometre rental plans in Hyderabad.",
        },
      },
      {
        "@type": "Question",
        name: "Where are your pickup branches located in Hyderabad?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "We offer 5-minute branch pickups in Kukatpally, Dilsukhnagar, and Hitech City, as well as home and airport delivery across Hyderabad.",
        },
      },
      {
        "@type": "Question",
        name: "What happens in case of a car breakdown?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Every rental includes 24/7 roadside assistance with a replacement vehicle guarantee.",
        },
      },
    ],
  };

  return (
    <div className="relative">
      {/* Mobile-friendly banner with dismiss button */}
      {isIndiaSite && showPromoBanner && (
        <aside
          aria-label="Mobile app promotion"
          className="fixed top-0 left-0 right-0 z-50 flex items-center justify-between bg-indigo-600 px-4 py-2.5 text-white shadow-md lg:hidden"
        >
          <div className="flex items-center gap-3 overflow-hidden cursor-pointer" onClick={handleStoreRedirect}>
            <div className="relative h-10 w-10 flex-shrink-0">
              <Image
                src="/logos/logo3.webp"
                alt="Long Drive Cars app logo"
                fill
                sizes="40px"
                className="rounded-lg object-cover"
              />
            </div>
            <div className="text-left text-xs leading-tight truncate">
              <p className="font-bold text-white">Long Drive Cars App</p>
              <p className="text-indigo-100 text-[11px]">Instant car booking & zero deposit</p>
            </div>
          </div>
          <div className="flex items-center gap-2">
            <button
              type="button"
              onClick={handleStoreRedirect}
              className="rounded-full bg-white px-3 py-1 text-xs font-semibold text-indigo-600 active:scale-95 transition"
            >
              Open
            </button>
            <button
              type="button"
              onClick={() => setShowPromoBanner(false)}
              aria-label="Close banner"
              className="p-1 text-white/80 hover:text-white"
            >
              <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          </div>
        </aside>
      )}

      <Layout phoneno="9000-478-478">
        <Head>
          <title>{metaTitle}</title>
          <meta name="description" content={metaDescription} />
          <meta name="viewport" content="width=device-width, initial-scale=1" />
          <meta name="robots" content="index, follow" />
          <link rel="canonical" href={canonicalUrl} />

          {/* Open Graph Tags */}
          <meta property="og:title" content={metaTitle} />
          <meta property="og:description" content={metaDescription} />
          <meta property="og:type" content="website" />
          <meta property="og:url" content={canonicalUrl} />
          <meta property="og:image" content="https://www.longdrivecars.com/logos/logo3.webp" />
          <meta property="og:locale" content="en_IN" />

          {/* Twitter Card Tags */}
          <meta name="twitter:card" content="summary_large_image" />
          <meta name="twitter:title" content={metaTitle} />
          <meta name="twitter:description" content={metaDescription} />
          <meta name="twitter:image" content="https://www.longdrivecars.com/logos/logo3.webp" />

          {/* Geo-targeting Meta Tags for Hyderabad */}
          <meta name="geo.region" content="IN-TG" />
          <meta name="geo.placename" content="Hyderabad" />
          <meta name="geo.position" content="17.385044;78.486671" />
          <meta name="ICBM" content="17.385044, 78.486671" />

          {/* Structured Data: AutoRental */}
          <script
            type="application/ld+json"
            dangerouslySetInnerHTML={{ __html: JSON.stringify(autoRentalSchema) }}
          />

          {/* Structured Data: FAQPage */}
          <script
            type="application/ld+json"
            dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
          />
        </Head>

        <div className={isIndiaSite && showPromoBanner ? 'pt-14 lg:pt-0' : 'lg:pt-0 pt-32'}>
          <HeroBanner />

          {/* Semantic section with description */}
          <section className="mx-auto max-w-7xl px-4 py-6 text-xs lg:text-lg lg:leading-7 leading-relaxed text-gray-700">
            <p>
              The <b>Long Drive Cars app</b> is a self-drive car rental app in Hyderabad that offers flexible rental plans, including unlimited kilometres and zero deposit options. Customers can choose home delivery, airport delivery, or quick 5-minute pickup from branches in Kukatpally, Dilsukhnagar, and Hitech City. First-time bookings require one valid ID (Aadhaar or passport) and a driving licence, while repeat customers can enjoy a simpler booking process without submitting documents again. Rental prices start at ₹1,180 per 24 hours, with hourly, 120 km, 300 km, and unlimited-kilometre plans available. Every rental includes 24/7 breakdown assistance with a replacement car and free toll gates on national highways. The Long Drive Cars app serves customers across Hyderabad, including Gachibowli, Madhapur, Manikonda, Ameerpet, Secunderabad, Begumpet, LB Nagar, Uppal, Shamshabad, and Shamirpet. Contact: <b>9000-478-478</b> | <a className="underline" href="https://www.longdrivecars.com/">longdrivecars.com</a>
            </p>
          </section>

          <CarProducts data={cars} phoneno="9000478478" wspno="9000478478" count={7} />
          <DynImageChange locname="hyderabad" />

          <div>
            <DynNearByApi city="hyderabad" />
          </div>

          <FeaturedCars data={cars} branch="hyderabad" />
          <DynCallBackForm />

          {/* Semantic FAQ Section with H2 */}
          <section className="bg-white rounded xl:py-12 lg:px-14 xl:px-14 p-4">
            <h2 className="uppercase p-2 mb-4 text-center text-black font-bold text-xl xl:text-2xl font-manrope">
              Frequently Asked Questions
            </h2>
            <FaqAccordian />
          </section>

          <GetInTouch phoneno="9000478478" wspno="9000478478" />

          {/* PopUp loaded client-side after hydration */}
          <PopUp />
        </div>
      </Layout>
    </div>
  );
}

export const runtime = 'nodejs';

export async function getStaticProps() {
  try {
    const cars = await getCarsByLocation('hyderabad');

    const carModels = new Set([
      'MARUTHI WAGON R', 'MARUTHI SWIFT', 'GRAND NIOS', 'MARUTHI BALENO',
      'HYUNDAI I20', 'HYUNDAI VENUE', 'KIA SONET', 'KIA SELTOS', 'KIA SONET SUNROOF',
      'SELTOS SUNROOF', 'MARUTHI ERTIGA', 'MAHINDRA THAR 2024 Diesel',
      'INNOVA CRYSTA Diesel', 'MAHINDRA XUV 700 Diesel',
    ]);

    const filteredItems = cars
      .filter((car) => carModels.has(car.maker_model))
      .map((car) => ({
        maker_model: car.maker_model,
        price_24_hours: car.price_24_hours,
        car_image_front_view_duplicate: car.car_image_front_view_duplicate,
        car_image_back_view_duplicate: car.car_image_back_view_duplicate,
        car_image_car_left_view_duplicate: car.car_image_car_left_view_duplicate,
        car_image_reading_view_duplicate: car.car_image_reading_view_duplicate,
        fuel_type: car.fuel_type,
        transmission_type: car.transmission_type,
        seater: car.seater,
        manufacture_date: car.manufacture_date,
      }));

    const canonicalUrl = `https://www.longdrivecars.com`;

    return {
      props: {
        cars: filteredItems,
        canonicalUrl: 'https://www.longdrivecars.com',
      },
      revalidate: 300,
    };
  } catch (error) {
    console.error('Static homepage data fetch failed:', error);
    return {
      props: {
        cars: [],
        canonicalUrl: 'https://www.longdrivecars.com',
      },
      revalidate: 60,
    };
  }
}