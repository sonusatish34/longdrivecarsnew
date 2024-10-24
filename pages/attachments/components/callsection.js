"use client";

import React, { useState } from 'react';

const GetCall = () => {
    const [mobile, setMobile] = useState('');
    const [error, setError] = useState('');
    const [showDialog, setShowDialog] = useState(false);

    // Handle form submission
    const handleSubmit = (e) => {
        e.preventDefault(); // Prevent page reload on form submission

        // Check if mobile number is valid (must be 10 digits)
        if (mobile.length !== 10 || !/^\d+$/.test(mobile)) {
            setError("Please enter a valid 10-digit mobile number.");
            return; // Do not submit the form if invalid
        }

        // Clear the error and show the success dialog
        setError('');
        setShowDialog(true); // Show the success dialog

        // Clear the mobile input after successful submission
        setMobile('');

        // Add further form submission logic here (e.g., sending data to an API)
    };

    // Handle input change with validation for only digits
    const handleInputChange = (e) => {
        const value = e.target.value;

        // Allow only digits in the input
        if (value === '' || /^\d+$/.test(value)) {
            setMobile(value);
            if (value.length < 10) {
                setError("Please enter a valid 10-digit mobile number.");
            } else {
                setError(''); // Clear error once 10 digits are entered
            }
        }
    };

    // Function to close the dialog
    const handleCloseDialog = () => {
        setShowDialog(false);
    };

    return (
        <div className='bg-[#334B35] py-4 px-2 lg:px-6 lg:py-9'>
            <div className='rounded-[4px] bg-[#6D8C54] text-white'>
                <div className='flex flex-col  items-center py-4 lg:py-12'>
                    <div className='flex flex-col items-center lg:pb-4'>
                        <p className='text-sm font-bold lg:text-xl'>Having Any Doubts About Attachment</p>
                        <p className='text-xs  font-semibold py-3 lg:py-6 lg:text-lg'>
                            Let us help you on a quick call
                        </p>
                    </div>
                    <form className='text-slate-950' onSubmit={handleSubmit}>
                        <div className="lg:flex-row text-center ">
                            <input
                                value={mobile}
                                onChange={handleInputChange}
                                type="text"
                                placeholder="Enter mobile number"
                                maxLength={10}
                                className='relative rounded-l-[5px] px-3 py-2 mr-1 lg:mr-1  lg:py-4 lg:w-80 lg:text-sm text-[8px] '
                            />
                            <button
                                className='bg-[#334B35] relative rounded-r-[5px]  px-1 py-2 text-[8px] lg:py-4 lg:px-4 lg:text-sm border-gray-400 text-white'
                                type="submit"
                            >
                                Get Callback
                            </button>
                        </div>
                        <div className='h-5'>
                        {error && (
                            <p className="text-red-500 text-xs lg:text-xs mt-2">
                                {error}
                            </p>
                        )}
                        </div>
                    </form>

                    {/* Dialog box for success message */}
                    {showDialog && (
                        <div className="fixed inset-0 flex items-center justify-center z-50 bg-black bg-opacity-50">
                            <div className="bg-white rounded-[5px] px-5 py-2  text-black text-center">
                                <p className="text-xl font-bold ">Thank You!</p>
                                <p className='py-4'>We Will get back to you.</p>
                                <button
                                    className=" px-1  bg-green-500 text-white  rounded"
                                    onClick={handleCloseDialog}
                                >
                                    OK
                                </button>
                            </div>
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
};

export default GetCall;
