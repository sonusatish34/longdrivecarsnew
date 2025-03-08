import React from 'react';
import ServicesData from '@/staticData/ServicesData';
import Link from 'next/link';
import { MdOutlineKeyboardDoubleArrowRight } from "react-icons/md";
import { motion } from 'framer-motion';
import Image from 'next/image';
const ComponentName = (props) => {
    return (
        <div>
            <section id="ourservices" className="py-20 lg:py-25 xl:py-30 bg-gray-100 pt-10">
                <div className="mx-auto max-w-c-1315 px-4 md:px-8 xl:px-0 ">
                    <p className="text-center text-black text-4xl font-bold">Our Services</p>
                    <div className="md:grid-cols- mt-12.5 grid grid-cols-1 gap-7.5 lg:mt-15 lg:grid-cols-3 xl:mt-20 xl:gap-12 px-9  py-5">
                        {ServicesData.map((feature, key) => (
                            <motion.div
                                variants={{
                                    hidden: {
                                        opacity: 0,
                                        y: -10,
                                    },
                                    visible: {
                                        opacity: 1,
                                        y: 0,
                                    },
                                }}
                                initial="hidden"
                                whileInView="visible"
                                transition={{ duration: 0.2 }}
                                viewport={{ once: false }}
                                className="animate_top z-40 rounded-lg border border-white bg-white p-7.5 shadow-solid-3 transition-all hover:shadow-2xl xl:p-2"
                            >
                                <div className=" flex flex-col items-center justify-around rounded-[4px]">
                                    <Image
                                        className="animate-upDown h-40 w-40"
                                        src={feature.icon}
                                        width={1000}
                                        height={1000}
                                        alt="title"
                                    />
                                    <div className='text-black'>
                                        <h3 className="mb-2 h-16 text-center text-xl font-semibold text-black xl:text-itemtitle">
                                            {feature.title}
                                        </h3>
                                        <p className="h-32 px-6 pt-2 text-left text-sm">{feature.description}</p>
                                    </div>
                                    <Link href={'/#contactus'} className="rounded bg-blue-400 p-2 text-white hover:bg-blue-700 w-30 px-10">
                                        Get Started
                                    </Link>
                                </div>
                                <div className="">

                                </div>
                            </motion.div>
                        ))}
                    </div>
                    <div className="flex justify-center pt-20">
                        <Link
                            href={"/our-services"}
                            className="border- flex w-fit items-center gap-2 rounded-full border-4 bg-blue-600 px-4 py-2 text-xl font-bold text-white"
                        >
                            <span>Explore More Services</span>
                            <span>
                                <MdOutlineKeyboardDoubleArrowRight size={30} />
                            </span>
                        </Link>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default ComponentName;