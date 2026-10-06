import React, { useState } from 'react';

const FaqAccordion = ({ city }) => {
  const faqData = [
    // NEW FAQs - Keep these at the top
    {
      question: 'What is Long Drive Cars?',
      answer:
        '<p>Long Drive Cars is a self drive car rental app in Hyderabad offering unlimited kilometre plans, a zero deposit option, home and airport delivery, and 5-minute pickup from branches in Kukatpally, Dilsukhnagar and Hitech City.</p>',
    },
    {
      question: 'Does Long Drive Cars ask for a security deposit?',
      answer:
        '<p>Long Drive Cars offers a zero deposit option. You can also choose to leave a bike, a laptop, or a refundable deposit of ₹2,000 for premium cars or ₹5,000 for luxury cars.</p>',
    },
    {
      question: 'Does Long Drive Cars offer unlimited kilometres?',
      answer:
        '<p>Yes. Long Drive Cars has hourly, 120 km per day, 300 km per day and unlimited kilometre plans, so you can pick the plan that fits your trip.</p>',
    },
    {
      question: 'What documents do I need to rent a car from Long Drive Cars?',
      answer:
        '<p>One ID (Aadhaar or passport) and your driving licence. From your second booking onwards, Long Drive Cars needs no documents.</p>',
    },
    {
      question: 'Does Long Drive Cars deliver to Hyderabad airport?',
      answer:
        '<p>Yes. Long Drive Cars offers airport delivery at Shamshabad (RGIA) and home delivery across Hyderabad, or you can pick up in about 5 minutes from the Kukatpally, Dilsukhnagar or Hitech City branch.</p>',
    },

    // EXISTING FAQs
    {
      question: 'Documents required?',
      answer:
        '<p>Age 18+</p><p>After Booking Successful you can Upload your selfie photo & Aadhar card & Driving License in App one time only from next booking documents not required.</p><p>Our team will verify & Approve your documents.</p><p>You must upload your documents before your pickup time otherwise your booking will be Auto cancelled no refund.</p>',
    },

    {
      question: 'Late Or Extension Rules ?',
      answer:
        '<div><p>200/hr for 5 Seater</p><p>400/hr for 6,7,8 Seater</p><p>If You Extend More than 24hr before Return Time Same Price</p><p>If You Extend After Return Time, Then Double Amount will be charged</p></div>',
    },

    {
      question: 'Pickup Car Location',
      answer:
        '<p>In My Trips You Will Get Exact Car Location After booking Successfully After Uploading Documents</p>',
    },

    {
      question: 'Refund & Cancellation Policy',
      answer:
        '<p><strong>Cancellation policy :</strong></p><p>👉 No Refund After Pickup time</p><p>👉 Your Booking Will be Automatically Cancelled if you did not pickup Car Within 3hrs of Pickup Time & No Refund</p><p>👉 if your Late Change Pickup Time in App</p><p>👉 100% Refund before 12hr of Pickup time</p><p>👉 50% Refund before 6hr of Pickup Time</p><p>👉 25% Refund before Pickup Time</p><p>👉 No Refund for modified bookings</p><p>👉 Savings pass & ldc credits will be Refunded</p>',
    },
  ];

  const [activeIndex, setActiveIndex] = useState(null);

  const toggleAccordion = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <div className="xl:mx-28 lg:mx-16">
      {faqData.map((item, index) => {
        // Preserve existing city-specific exclusion
        if (city && item.question === 'Damage protection') {
          return null;
        }

        return (
          <div
            key={index}
            className="border-b-[2px] border-gray-300 rounded mb-2 text-black"
          >
            <div
              className="flex justify-between items-center px-4 py-3 cursor-pointer"
              onClick={() => toggleAccordion(index)}
            >
              <span className="lg:w-full lg:text-lg font-semibold capitalize text-base w-64">
                {item.question}
              </span>

              <svg
                className={`lg:w-6 lg:h-6 w-4 h-4 rounded bg-[#660066] text-white transition-transform ${
                  activeIndex === index ? 'transform rotate-180' : ''
                }`}
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 20 20"
                fill="currentColor"
              >
                <path
                  fillRule="evenodd"
                  d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                  clipRule="evenodd"
                />
              </svg>
            </div>

            <div
              className={`transition-all duration-300 ${
                activeIndex === index ? 'max-h-screen' : 'max-h-0'
              } overflow-hidden`}
            >
              <div
                className="px-4 text-xs lg:text-base leading-6 lg:leading-9"
                dangerouslySetInnerHTML={{ __html: item.answer }}
              />
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default FaqAccordion;