"use client";
import React, { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";

import { BiPhoneCall } from "react-icons/bi";
import { FaWhatsapp, FaAppStore } from "react-icons/fa";
import { BiLogoPlayStore } from "react-icons/bi";
import { BsFillFuelPumpFill } from "react-icons/bs";
import { GrGroup } from "react-icons/gr";
import { TbManualGearbox } from "react-icons/tb";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import ldcqr from "../../images/ldcqr.png";
import { handleStoreRedirect } from "../../../utils/redirectUtils";
import { trackEvent } from "@/utils/trackEvent";

// ✅ Custom hook to detect mobile device
const useIsMobile = () => {
    const [isMobile, setIsMobile] = useState(false);

    useEffect(() => {
        const updateView = () => {
            setIsMobile(window.innerWidth <= 768);
        };
        updateView();
        window.addEventListener("resize", updateView);
        return () => window.removeEventListener("resize", updateView);
    }, []);

    return isMobile;
};

const CardFragment = ({ item, wspno, phoneno }) => {
    const [showDown, setShowDown] = useState(false);
    const isMobile = useIsMobile();

    const replaceText = (str) => {
        if (str?.includes("cdn")) return str;
        return str?.replace("https://ldcars.blr1.", "https://ldcars.blr1.cdn.");
    };


    const rawImages = [
    item?.car_image_front_view_duplicate || item?.car_image_front_view,
    item?.car_image_reading_view_duplicate || item?.car_image_reading_view,
    item?.car_image_back_view_duplicate || item?.car_image_back_view,
    item?.car_image_reading_view_duplicate || item?.car_image_reading_view,
];

const carImages = rawImages
    .filter((img) => typeof img === "string" && img.trim() !== "")
    .map(replaceText); 
    

    return (
        <div className="lg:rounded-md flex flex-col w-full md:w-72 first-line:h-[555px]">
            <div className="relative lg:rounded-md h-[445px]">
                <Swiper
                    modules={[Navigation, Pagination, Autoplay]}
                    slidesPerView={1}
                    loop={true}
                    autoplay={false}
                    pagination={false}
                    navigation={false}
                    className="relative lg:rounded-md h-[440px]"
                >
                    {carImages.map((img, i) => (
                        <SwiperSlide key={i}>
                            <Link onClick={()=>{trackEvent({ eventName: 'ViewContent', customData: { content_name: `${window.location.href}/car-rental/${item.maker_model.toLowerCase().replace(/ /g, "-")}` } })}} href={`/car-rental/${item?.maker_model?.toLowerCase().replace(/ /g, "-")}`}>
                                <div className="relative w-full h-[440px] rounded-md overflow-hidden bg-gray-200">
                                    <Image
                                        alt={`${item?.maker_model?.toLowerCase()} view ${i + 1}`}
                                        src={replaceText(img)}
                                        fill
                                        sizes="(max-width: 768px) 100vw, 412px"
                                        priority={i === 0}
                                        loading={i === 0 ? "eager" : "lazy"}
                                        fetchPriority={i === 0 ? "high" : "low"}
                                        className="object-cover object-center"
                                    />
                                </div>
                            </Link>
                        </SwiperSlide>

                    ))}
                </Swiper>

                {/* Top gradient + car name */}
                <div className="relative h-20 z-20 bg-gradient-to-b from-black opacity-90 lg:rounded-md bottom-[27.48rem]">
                    <div className="flex flex-col gap-2 items-end pt-4 pr-1">
                        <p className="relative bottom-3 capitalize p-1 text-white rounded-md font-manrope text-xs mxs:text-base pt-2">
                            {item?.maker_model.toLowerCase()}
                        </p>
                    </div>
                </div>

                {/* Bottom info + price */}
                <div className="relative z-20 bottom-[12rem] bg-gradient-to-t from-black opacity-90 text-white">
                    <div className="flex gap-x-8 mxs:gap-x-16 items-center justify-center pt-5 pb-2">
                        <p className="text-[15px]">Book Now</p>
                        <p className="capitalize p-1 font-bold text-white font-manrope text-base">
                            ₹ {item?.price_24_hours * 24} / 24hrs
                        </p>
                    </div>
                    <ul className="flex gap-4 justify-center text-xs mxs:text-sm pt-2 pb-6">
                        <li className="border-r-2 border-white flex items-center gap-1 pr-2">
                            <BsFillFuelPumpFill /> {item?.fuel_type}
                        </li>
                        <li className="border-r-2 border-white flex items-center gap-1 pr-2">
                            <GrGroup /> {item?.seater} Seater
                        </li>
                        <li className="flex items-center gap-1">
                            <TbManualGearbox size={20} /> {item?.transmission_type}
                        </li>
                    </ul>
                </div>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col justify-between text-white py-4">
                <ul className="flex justify-center gap-x-8 px-3">
                    <li onClick={() => trackEvent({ eventName: 'Contact', customData: { content_name: 'WhatsApp Button' } })}  className="bg-green-500 w-32 py-2 text-center rounded-md">
                        <Link
                            href={`https://api.whatsapp.com/send?phone=+91${wspno}&text=Hi%0AI%20am%20looking%20for%20a%20car%20booking.`}
                            target="_blank"
                        >
                            <p className="flex gap-1 text-sm justify-center items-center">
                                <FaWhatsapp size={20} /> Whatsapp
                            </p>
                        </Link>
                    </li>
                    <li onClick={() => trackEvent({ eventName: 'Contact', customData: { content_name: 'Call Button' } })}  className="bg-blue-500 w-32 py-2 rounded-md">
                        <Link href={`tel:${phoneno}`} target="_blank">
                            <p className="flex gap-1 text-sm justify-center items-center">
                                <BiPhoneCall size={20} /> Call Us
                            </p>
                        </Link>
                    </li>
                </ul>

                {/* App download CTA */}
                <div onClick={handleStoreRedirect} className="lg:hidden flex justify-center cursor-pointer py-4 text-lg font-semibold">
                    <p className="bg-gradient-to-r from-green-600 via-[#556ee6] to-indigo-400 inline-block text-transparent bg-clip-text animate-gradient border border-[#5566ee] p-2 rounded-md">
                        Download Long Drive Cars App
                    </p>
                </div>

                <div onClick={() => setShowDown(true)} className="lg:flex hidden justify-center cursor-pointer py-4 text-base font-semibold">
                    <p className="bg-gradient-to-r from-green-600 via-[#556ee6] to-indigo-400 text-transparent bg-clip-text animate-gradient border border-[#5566ee] p-2 rounded-md">
                        Download Long Drive Cars App
                    </p>
                </div>

                {/* App download popup */}
                {showDown && (
                    <div className="fixed inset-0 bg-white bg-opacity-5 z-50">
                        <div className="flex justify-center items-center h-full">
                            <div className="bg-white p-8 rounded-lg shadow-md max-w-lg lg:w-[800px] w-[500px] relative">
                                <button
                                    onClick={() => setShowDown(false)}
                                    className="absolute top-4 right-4 rounded-full bg-white text-black py-1 px-3 text-xl border border-gray-300"
                                >
                                    x
                                </button>
                                <div className="flex gap-3">
                                    <div>
                                        <h2 className="text-base font-semibold text-gray-900">
                                            Download the Longdrivecarz App and Book Your Favourite Car
                                        </h2>
                                        <ul className="mt-2 text-gray-600">
                                            <li>Scan the QR code to get the app from the Play Store or App Store.</li>
                                            <li className="flex gap-x-3 pt-3">
                                                <FaAppStore className="text-black" size={30} />
                                                <BiLogoPlayStore className="text-black" size={30} />
                                            </li>
                                        </ul>
                                    </div>
                                    <Image
                                        src={ldcqr}
                                        height={1000}
                                        width={1000}
                                        alt="Long Drive Cars App"
                                        className="w-full h-44 object-contain"
                                    />
                                </div>
                            </div>
                        </div>
                    </div>
                )}
            </div>
        </div>
    );
};

export default CardFragment;
