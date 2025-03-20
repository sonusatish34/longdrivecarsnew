import React from 'react';
import { FaArrowCircleUp } from "react-icons/fa";
const ComponentName = (props) => {
    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth' // Smooth scroll effect
        });
    };
    return (
        <>
        <div className='lg:px-20 px-6 lg:py-20 py-4 bg-gray-200'>
            <div className='flex flex-col gap-y-11 lg:flex-row justify-between'>
                <div>
                    <p className='text-3xl font-bold'>Zebrank</p>
                    <p className='lg:w-80 w-40 pt-5 text-left'>Zebrank drives digital transformation with innovative tech and
                        creative solutions. Since 2018, we’ve enhanced industries
                        through web design, app development, digital marketing, and
                        e-commerce.</p>
                </div>
                <div>
                    <p className='text-3xl font-bold'>Our Services</p>
                    <ul className='pt-6 flex flex-col gap-y-2 text-gray-700'>
                        <li className='lg:hover:pl-2 transition-all ease-in delay-75'><a href="web-designing-ui-ux.html" className="">Web Designing & UI/UX</a></li>
                        <li><a href="web-designing-ui-ux.html" className="">App Development</a></li>
                        <li><a href="web-designing-ui-ux.html" className="">Quality Assurance & Engineering</a></li>
                        <li><a href="web-designing-ui-ux.html" className="">Digital Marketing & Content</a></li>
                        <li><a href="web-designing-ui-ux.html" className="">Web Designing & UI/UX</a></li>
                    </ul>
                </div>
                <div>
                    <p className='text-3xl font-bold'>Quick Links</p>
                    <ul className='pt-6 flex flex-col gap-y-2 text-gray-700'>
                        <li><a href="web-designing-ui-ux.html" className="">About</a></li>
                        <li><a href="web-designing-ui-ux.html" className="">Contact Us</a></li>
                        <li><a href="web-designing-ui-ux.html" className="">Case Studies</a></li>
                        <li><a href="web-designing-ui-ux.html" className="">Blogs</a></li>
                    </ul>
                </div>
                <div>
                    <p className='text-3xl font-bold'>Get In Touch</p>
                    <ul className='pt-6 flex flex-col gap-y-2 text-gray-700'>
                        <li><a href="web-designing-ui-ux.html" className="">hello@zebrank.com</a></li>
                        <li><a href="web-designing-ui-ux.html" className="">966664778</a></li>
                        <li><a href="web-designing-ui-ux.html" className="">Hyderabad</a></li>
                        <li><a href="web-designing-ui-ux.html" className=""></a></li>
                    </ul>
                    <button onClick={scrollToTop} className='fixed z-50 right-10 bottom-10'><FaArrowCircleUp className='size-6'/></button>
                </div>
            </div>
        </div>
        </>
    );
};

export default ComponentName;