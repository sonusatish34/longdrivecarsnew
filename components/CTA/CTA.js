import { useState } from 'react';
import React from 'react';
import { MdOutlineMailOutline } from "react-icons/md";
import { IoCallSharp } from "react-icons/io5";
import { ImLocation } from "react-icons/im";

const CTA = (props) => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        mobile: '',
        message: '',
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData((prevData) => ({ ...prevData, [name]: value }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        // Handle form submission logic here (e.g., send form data to an API)
        console.log(formData);
    };
    return (
        <div id='contactus' className='py-10'>
            <p className='text-center text-4xl'>GET IN TOUCH</p>
            <div className='flex flex-col lg:flex-row justify-center gap-x-40 pt-8 text-black'>
                <div>
                    <ul className='flex flex-col gap-y-8 pt-20'>
                        <li className='flex gap-4'><p><IoCallSharp size={30} /></p><p>+91 9666-666-55</p></li>
                        <li className='flex gap-4'><p><MdOutlineMailOutline size={30} /></p><p>hello@zebrank.com</p></li>
                        <li className='flex gap-4'><p><ImLocation size={30} /></p><p>Hyderabad, INDIA</p></li>
                    </ul>
                </div>
                <div>
                    <div className="flex items-center justify-center py-3">
                        <div className=" border-2 border-gray-100 h-full w-full p-8 bg-white shadow-lg rounded-lg">
                            <h2 className="text-2xl font-semibold text-center text-gray-800 mb-6">Contact Us</h2>
                            <form onSubmit={handleSubmit} className='flex flex-col gap-2'>
                                <div className='flex gap-x-2'>
                                    <div className="relative">
                                        {/* <label htmlFor="name" className="block text-gray-700">Name</label> */}
                                        <input
                                            type="text"
                                            id="name"
                                            name="name"
                                            value={formData.name}
                                            onChange={handleChange}
                                            className="w-full p-2 mt-2 border border-gray-300 rounded-md"
                                            placeholder="Enter your name"
                                        />
                                        <span className='absolute right-0 top-[8px] rounded-sm px-2 text-lg text-red-600'>*</span>
                                    </div>
                                    <div className="">
                                        {/* <label htmlFor="mobile" className="block text-gray-700">Mobile Number</label> */}
                                        <input
                                            type="text"
                                            id="mobile"
                                            name="mobile"
                                            value={formData.mobile}
                                            onChange={handleChange}
                                            className="w-full p-2 mt-2 border border-gray-300 rounded-md"
                                            placeholder="Enter your mobile number"
                                            required
                                        />

                                    </div>
                                </div>

                                <div className="relative">
                                    {/* <label htmlFor="email" className="block text-gray-700">Email</label> */}
                                    <input
                                        type="email"
                                        id="email"
                                        name="email"
                                        value={formData.email}
                                        onChange={handleChange}
                                        className="w-full p-2 mt-2 border border-gray-300 rounded-md"
                                        placeholder="Enter your email"
                                        required
                                    />
                                    <span className='absolute right-0 top-[8px] rounded-sm px-2 text-lg text-red-600'>*</span>
                                </div>



                                <div className="">
                                    {/* <label htmlFor="message" className="block text-gray-700">Message</label> */}
                                    <textarea
                                        id="message"
                                        name="message"
                                        value={formData.message}
                                        onChange={handleChange}
                                        className="w-full p-2 mt-2 border border-gray-300 rounded-md"
                                        placeholder="Enter your message"
                                    />
                                    {/* <p className='relative bottom-[7px] left-44 rounded-sm px-2 text-[10px] bg-yellow-200 w-fit '>optional</p> */}
                                </div>

                                <div className="mb-6 text-center">
                                    <button
                                        type="submit"
                                        className="w-full py-3 px-4 bg-blue-500 text-white rounded-md hover:bg-blue-600 focus:outline-none"
                                    >
                                        Submit
                                    </button>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default CTA;