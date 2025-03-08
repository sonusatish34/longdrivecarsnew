"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { IoCallSharp } from "react-icons/io5";

const Header = () => {
    const [navigationOpen, setNavigationOpen] = useState(false);
    const [openDropdown, setOpenDropdown] = useState(null); // Track which dropdown is open
    const [stickyMenu, setStickyMenu] = useState(false);

    const pathUrl = usePathname();

    // Sticky menu
    const handleStickyMenu = () => {
        if (window.scrollY >= 80) {
            setStickyMenu(true);
        } else {
            setStickyMenu(false);
        }
    };

    const handleMouseEnter = (menu) => {
        setOpenDropdown(menu);
    };

    const handleMouseLeave = () => {
        setOpenDropdown(null);
    };

    return (
        <header
            className={`fixed left-0 top-0 z-50 w-full py-5 bg-white ${stickyMenu
                ? "bg-white !py-4 transition duration-100"
                : ""
                }`}
        >
            <div className="relative mx-auto max-w-c-1390 items-center justify-between px-4 md:px-8 xl:flex 2xl:px-10">
                <div className="flex w-full items-center justify-between xl:w-1/4">
                    <a className="text-3xl font-bold text-black flex gap-x-2 items-center" href="/">
                        <Image
                            src={'/logg.webp'}
                            width={400}
                            height={400}
                            className="w-16 h-16"
                        /> <span>Zebrank</span>
                    </a>
                </div>
                <div
                    className={`invisible h-0 w-full items-center justify-between xl:visible xl:flex xl:h-auto xl:w-full`}
                >
                    <nav className="flex flex-col gap-5 xl:flex-row xl:items-center xl:gap-72 text-black">
                        <ul className="flex flex-col gap-5 xl:flex-row xl:items-center xl:gap-10 text-black">
                            <li>About Us</li>
                            <li
                                className="relative"
                                onMouseEnter={() => handleMouseEnter("services")}
                                onMouseLeave={handleMouseLeave}
                            >
                                <button>Services</button>
                                {openDropdown === "services" && (
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
                                        viewport={{ once: true }}
                                        className=""
                                    >
                                        <div className="rounded-b-lg top-10 mt-2 bg-white border transform translate-y-[-20px]  transition-all duration-500 group-hover:translate-y-0 flex items-center gap-x-14 p-2 z-40 rounded-lg border-white absolute w-[800px] pt-10">
                                            <p className="bg-gradient-to-r from-blue-500 to-purple-500 bg-clip-text text-transparent text-4xl">Services</p>
                                            <ul className="grid grid-cols-2 gap-3 text-black">
                                                <li><Link href="/service1">Web Designing & UI/UX</Link></li>
                                                <li><Link href="/service2">App Development (iOS & Android)</Link></li>
                                                <li><Link href="/service3">Application Maintenance & Support</Link></li>
                                                <li><Link href="/service3">Change & Release Management</Link></li>
                                                <li><Link href="/service3">Digital Marketing & Content Creation</Link></li>
                                                <li><Link href="/service3">Quality Assurance & Engineering</Link></li>
                                                <li><Link href="/service3">E-Commerce Solutions</Link></li>
                                            </ul>
                                        </div>
                                    </motion.div>
                                )}
                            </li>

                            <li
                                className="relative"
                                onMouseEnter={() => handleMouseEnter("careers")}
                                onMouseLeave={handleMouseLeave}
                            >
                                <button>Careers</button>
                                {openDropdown === "careers" && (
                                    <div className="absolute left-0 mt-2 w-40 bg-white border">
                                        <ul className="flex flex-col gap-2 p-2 text-black">
                                            <li><Link href="/career1">Career 1</Link></li>
                                            <li><Link href="/career2">Career 2</Link></li>
                                        </ul>
                                    </div>
                                )}
                            </li>
                            {/* <li
                                className="relative"
                                onMouseEnter={() => handleMouseEnter("contact")}
                                onMouseLeave={handleMouseLeave}
                            >
                                <Link href={'/#contactus'}>Contact</Link>
                                {openDropdown === "contact" && (
                                    <div className="absolute left-0 mt-2 w-40 bg-white border">
                                        <ul className="flex flex-col gap-2 p-2 text-black">
                                            <li><Link href="/contact-form">Contact Form</Link></li>
                                            <li><Link href="/contact-us">Contact Us</Link></li>
                                        </ul>
                                    </div>
                                )}
                            </li> */}

                            <li>Resources</li>
                        </ul>
                        {/* <ul>
                            <li>Contact Us</li>
                            <li>About Us</li>
                            <li>Resources Us</li>
                        </ul> */}
                        <button><Image
                            src={'/contact.webp'}
                            width={500}
                            height={500}
                            className="w-40 h-16"
                        /></button>
                    </nav>
                </div>
            </div>
        </header>
    );
};

export default Header;
