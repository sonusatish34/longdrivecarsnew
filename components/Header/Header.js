"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { IoCallSharp } from "react-icons/io5";
import { MdKeyboardArrowDown } from "react-icons/md";
import { MdOutlineMailOutline } from "react-icons/md";

const Header = () => {
    const [navigationOpen, setNavigationOpen] = useState(false);
    const [openDropdown, setOpenDropdown] = useState(null); // Track which dropdown is open
    const [stickyMenu, setStickyMenu] = useState(false);
    const [hovname, setHovName] = useState('')

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
            onMouseLeave={() => { setHovName('') }}
        >
            <div className="flex items-center lg:gap-x-40 pl-14 ">
                <div className="">
                    <a className="text-3xl font-bold text-black flex gap-x-2 items-center" href="/">
                        <Image
                            src={'/hero/zeblogo.webp'}
                            width={400}
                            height={400}
                            className="w-full h-12"
                        />
                    </a>
                </div>
                <div>
                    <nav className="flex flex-col gap-5 lg:flex-row lg:items-center lg:gap-72 text-black">
                        <ul className="flex flex-col gap-5 lg:flex-row lg:items-center lg:gap-10 text-black">
                            <li onMouseEnter={() => setHovName("")}><Link href={'/about'}>About Us</Link></li>
                            <li
                                className="relative"
                                onMouseEnter={() => setHovName("services")}
                            >
                                <button className="flex items-center gap-x-1"><span>Services</span><span className={`${hovname === "services" ? 'transform rotate-180 delay-100 duration-200' : ''}`}><MdKeyboardArrowDown size={20} /></span></button>
                                {hovname === "services" && (
                                    <motion.div
                                        variants={{
                                            hidden: {
                                                opacity: 0,
                                                y: 0,
                                            },
                                            visible: {
                                                opacity: 1,
                                                y: 0,
                                            },
                                        }}
                                        initial="hidden"
                                        whileInView="visible"
                                        transition={{ duration: 0.3, ease: "easeIn" }}
                                        viewport={{ once: true }}
                                        className=""
                                        onMouseEnter={() => { setHovName('services') }}
                                        onMouseLeave={() => { setHovName('') }}
                                    >
                                        <div className=" top-[4.1rem] mt-2 bg-gray-100 border transform translate-y-[-20px]  transition-all duration-500  flex items-center gap-x-14 py-10 z-40 rounded-b-lg border-white absolute w-[900px] pt-10 p-5 ">
                                            <p className="bg-gradient-to-r from-blue-500 to-purple-500 bg-clip-text text-transparent text-4xl">Services</p>
                                            <ul className="grid grid-cols-2 gap-x-7 gap-y-4 text-black text-sm">
                                                <li className="group">
                                                    <Link href="/case-studies" className="inline-flex items-center hover:text-[#382563]">Web Designing & UI/UX
                                                        <span className="ml-2 transition-transform transform ease-in-out opacity-0 group-hover:opacity-100 group-hover:translate-x-1">➔</span></Link>
                                                </li>
                                                <li className="group">
                                                    <Link href="/case-studies" className="inline-flex items-center hover:text-[#382563]">App Development (iOS & Android)
                                                        <span className="ml-2 transition-transform transform ease-in-out opacity-0 group-hover:opacity-100 group-hover:translate-x-1">➔</span></Link>
                                                </li>
                                                <li className="group">
                                                    <Link href="/case-studies" className="inline-flex items-center hover:text-[#382563]">Application Maintenance & Support
                                                        <span className="ml-2 transition-transform transform ease-in-out opacity-0 group-hover:opacity-100 group-hover:translate-x-1">➔</span></Link>
                                                </li>
                                                <li className="group">
                                                    <Link href="/case-studies" className="inline-flex items-center hover:text-[#382563]">Change & Release Management
                                                        <span className="ml-2 transition-transform transform ease-in-out opacity-0 group-hover:opacity-100 group-hover:translate-x-1">➔</span></Link>
                                                </li>
                                                <li className="group">
                                                    <Link href="/case-studies" className="inline-flex items-center hover:text-[#382563]">Digital Marketing & Content Creation
                                                        <span className="ml-2 transition-transform transform ease-in-out opacity-0 group-hover:opacity-100 group-hover:translate-x-1">➔</span></Link>
                                                </li>
                                                <li className="group">
                                                    <Link href="/case-studies" className="inline-flex items-center hover:text-[#382563]">Quality Assurance & Engineering
                                                        <span className="ml-2 transition-transform transform ease-in-out opacity-0 group-hover:opacity-100 group-hover:translate-x-1">➔</span></Link>
                                                </li>
                                                <li className="group">
                                                    <Link href="/case-studies" className="inline-flex items-center hover:text-[#382563]">E-Commerce Solutions
                                                        <span className="ml-2 transition-transform transform ease-in-out opacity-0 group-hover:opacity-100 group-hover:translate-x-1">➔</span></Link>
                                                </li>
                                                {/* <li><Link href="/service1">Web Designing & UI/UX</Link></li>
                                                <li><Link href="/service2">App Development (iOS & Android)</Link></li>
                                                <li><Link href="/service3">Application Maintenance & Support</Link></li>
                                                <li><Link href="/service3">Change & Release Management</Link></li>
                                                <li><Link href="/service3">Digital Marketing & Content Creation</Link></li>
                                                <li><Link href="/service3">Quality Assurance & Engineering</Link></li>
                                                <li><Link href="/service3">E-Commerce Solutions</Link></li> */}
                                            </ul>
                                        </div>
                                    </motion.div>
                                )}
                            </li>
                            <li
                                className="relative"
                                onMouseEnter={() => setHovName("resources")}
                            >
                                <button className="flex items-center gap-x-1"><span>resources</span><span className={`${hovname === "resources" ? 'transform rotate-180 delay-100 duration-200' : ''}`}><MdKeyboardArrowDown size={20} /></span></button>
                                {hovname === "resources" && (
                                    <motion.div
                                        variants={{
                                            hidden: {
                                                opacity: 0,
                                                y: 0,
                                            },
                                            visible: {
                                                opacity: 1,
                                                y: 0,
                                            },
                                        }}
                                        initial="hidden"
                                        whileInView="visible"
                                        transition={{ duration: 0.3, ease: "easeIn" }}
                                        viewport={{ once: true }}
                                        className=""
                                        onMouseEnter={() => { setHovName('resources') }}
                                        onMouseLeave={() => { setHovName('') }}
                                    >
                                        <div className=" top-[4.1rem] mt-2 bg-gray-100 border transform translate-y-[-20px]  transition-all duration-500  flex items-center gap-x-14 py-2 z-40 rounded-b-lg border-white absolute w-[400px]  px-5 ">

                                            <ul className="flex flex-col gap-3 text-black text-sm">
                                                {/* <li className="hover:text-red-400"><Link href="/service1">Case Studies</Link></li> */}
                                                <li className="group">
                                                    <Link href="/case-studies" className="inline-flex items-center hover:text-[#382563]">Case Studies
                                                        <span className="ml-2 transition-transform transform ease-in-out opacity-0 group-hover:opacity-100 group-hover:translate-x-1">➔</span></Link>
                                                </li>
                                                <li className="group">
                                                    <Link href="/blogs" className="inline-flex items-center hover:text-[#382563]">Blogs
                                                        <span className="ml-2 transition-transform transform ease-in-out opacity-0 group-hover:opacity-100 group-hover:translate-x-1">➔</span></Link>
                                                </li>
                                                <li className="group">
                                                    <Link href="/news-letter" className="inline-flex items-center hover:text-[#382563]">News Letter
                                                        <span className="ml-2 transition-transform transform ease-in-out opacity-0 group-hover:opacity-100 group-hover:translate-x-1">➔</span></Link>
                                                </li>
                                                {/* <li><Link href="/service2">Blogs</Link></li>
                                                <li><Link href="/service2">News Letter</Link></li> */}

                                            </ul>
                                        </div>
                                    </motion.div>
                                )}
                            </li>
                            <li><Link href={'/careers'}>Careers</Link></li>
                            <li><Link href={'/contact'}>Contact</Link></li>
                            <li></li>
                        </ul>

                    </nav>
                </div>
                <div>
                    <ul>
                        <li><MdOutlineMailOutline className="bg-gradient-to-r from-blue-500 to-purple-500 bg-clip-text text-transparent text-4xl" size={30}/></li>
                    </ul>
                </div>
            </div>
        </header>
    );
};

export default Header;
