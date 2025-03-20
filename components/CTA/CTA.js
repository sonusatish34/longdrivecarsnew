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
        emailSubject: '',  // Added email subject field
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData((prevData) => ({ ...prevData, [name]: value }));
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        const { name, email, mobile, message, emailSubject } = formData;

        // Validate required fields before sending
        if (!name || !email || !mobile) {
            alert("Please fill in all the required fields.");
            return;
        }

        try {
            // Sending form data to the PHP API endpoint
            const response = await fetch(
                `https://zebrank.com/send_my_email.php?from_email=${encodeURIComponent(email)}&email_message=${encodeURIComponent(message)}&user_phone=${encodeURIComponent(mobile)}&user_name=${encodeURIComponent(name)}&email_subject=${encodeURIComponent(emailSubject)}`,
                {
                    method: 'GET',
                    headers: {
                        'Content-Type': 'application/json',
                    },
                }
            );

            const result = await response.text();
            if (response.ok) {
                alert("Email sent successfully!");
                console.log(result); // Optionally log the result
            } else {
                alert("There was an error sending your email.");
                console.error(result);
            }
        } catch (error) {
            alert("There was an error sending your email.");
            console.error(error);
        }
    };

    return (
        <div id="contactus" className="py-10">
            <p className="text-center text-4xl">GET IN TOUCH</p>
            <div className="flex flex-col lg:flex-row justify-center gap-x-40 pt-8 text-black">
                <div>
                    <ul className="flex flex-col gap-y-8 pt-20">
                        <li className="flex gap-4">
                            <p><IoCallSharp size={30} /></p>
                            <p>+91 9666-677-340</p>
                        </li>
                        <li className="flex gap-4">
                            <p><MdOutlineMailOutline size={30} /></p>
                            <p>hello@zebrank.com</p>
                        </li>
                        <li className="flex gap-4">
                            <p><ImLocation size={30} /></p>
                            <p>Hyderabad, INDIA</p>
                        </li>
                    </ul>
                </div>
                <div>
                    <div className="flex items-center justify-center py-3">
                        <div className="border-2 border-gray-100 h-full w-full p-8 bg-white shadow-lg rounded-lg">
                            <h2 className="text-2xl font-semibold text-center text-gray-800 mb-6">Contact Us</h2>
                            <form onSubmit={handleSubmit} className="flex flex-col gap-2">
                                <div className="flex gap-x-2">
                                    <div className="relative">
                                        <input
                                            type="text"
                                            id="name"
                                            name="name"
                                            value={formData.name}
                                            onChange={handleChange}
                                            className="w-full p-2 mt-2 border border-gray-300 rounded-md"
                                            placeholder="Enter your name"
                                            required
                                        />
                                        <span className="absolute right-0 top-[8px] rounded-sm px-2 text-lg text-red-600">*</span>
                                    </div>
                                    <div>
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
                                    <span className="absolute right-0 top-[8px] rounded-sm px-2 text-lg text-red-600">*</span>
                                </div>

                                <div>
                                    <textarea
                                        id="message"
                                        name="message"
                                        value={formData.message}
                                        onChange={handleChange}
                                        className="w-full p-2 mt-2 border border-gray-300 rounded-md"
                                        placeholder="Enter your message"
                                    />
                                </div>

                                <div>
                                    <input
                                        type="text"
                                        id="email_subject"
                                        name="emailSubject"
                                        value={formData.emailSubject}
                                        onChange={handleChange}
                                        className="w-full p-2 mt-2 border border-gray-300 rounded-md"
                                        placeholder="Email subject (optional)"
                                    />
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
