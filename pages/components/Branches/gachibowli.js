import React from 'react';
import Head from 'next/head';
import Image from 'next/image';
import Link from 'next/link';
import {
  Car,
  FileText,
  ShieldCheck,
  Tag,
  Truck,
  HelpCircle,
  CheckCircle2,
  ChevronDown,
  ArrowRight
} from 'lucide-react';

export default function GachibowliGuidePage() {
  const targetUrl = 'https://www.longdrivecars.com';
  const pageCanonical = 'https://www.longdrivecars.com/self-drive-car-rental/gachibowli';

  const bookingSteps = [
    'Open the Long Drive Cars app.',
    'Select your preferred car and rental duration.',
    'Check availability for your required dates.',
    'Confirm delivery availability and the delivery address.',
    'Review the rental price, security deposit and booking terms.',
    'Complete the booking according to the instructions provided.'
  ];

  const checklistItems = [
    'The rental price for your chosen duration.',
    'The applicable security deposit.',
    'Whether a zero deposit option is available for your booking.',
    'Delivery eligibility and any applicable charges.',
    'Fuel, toll and other rental conditions.',
    'The cancellation and refund policy.'
  ];

  const faqs = [
    {
      q: 'Is there a physical pickup point in Gachibowli?',
      a: 'Long Drive Cars app serves Gachibowli customers through delivery. Confirm the available delivery arrangements for your selected vehicle and address before booking.'
    },
    {
      q: 'Is home delivery free in Gachibowli?',
      a: 'Free home delivery is advertised for eligible branch cars. Confirm vehicle eligibility, delivery coverage and applicable conditions before making your reservation.'
    },
    {
      q: 'What documents are required to rent a car?',
      a: 'The displayed requirements are an Aadhaar photo or a passport photo, together with a driving licence photo. Follow the current booking verification instructions.'
    },
    {
      q: 'Do existing customers need to submit documents again?',
      a: 'The provided information states that existing customers do not need to submit documents again from their second booking onwards. Confirm that this rule applies to your account and current booking.'
    },
    {
      q: 'How much is the security deposit for premium cars?',
      a: 'The displayed refundable security deposit for premium cars is ₹2,000. Confirm the amount and applicable conditions for your selected vehicle.'
    },
    {
      q: 'How much is the security deposit for luxury cars?',
      a: 'The displayed refundable security deposit for luxury cars is ₹5,000. Check the current booking terms before making payment.'
    },
    {
      q: 'Can I provide a bike or laptop instead of a cash deposit?',
      a: 'The provided information lists a bike or laptop as an alternative security option. Contact Long Drive Cars app to confirm eligibility and the conditions for using this option.'
    },
    {
      q: 'Are national highway tolls free?',
      a: 'Long Drive Cars app advertises free tolls on national highways. Confirm the exact coverage and exclusions before travelling.'
    }
  ];

  return (
    <>
      <Head>
        {/* Primary Meta Tags */}
        <title>Self Drive Cars in Gachibowli, Hyderabad | Long Drive Cars app</title>
        <meta
          name="description"
          content="Book self drive cars in Gachibowli, Hyderabad, with Long Drive Cars app. Check car prices, security deposits, documents and home delivery options."
        />
        <meta
          name="keywords"
          content="Self Drive Cars in Gachibowli, Self drive cars Hyderabad, Long Drive Cars app Gachibowli, Car home delivery Gachibowli, Zero deposit car rental Gachibowli"
        />
        <link rel="canonical" href={pageCanonical} />

        {/* Open Graph / Facebook */}
        <meta property="og:type" content="website" />
        <meta property="og:url" content={pageCanonical} />
        <meta
          property="og:title"
          content="Self Drive Cars in Gachibowli, Hyderabad | Long Drive Cars app"
        />
        <meta
          property="og:description"
          content="Book self drive cars in Gachibowli, Hyderabad, with Long Drive Cars app. Check car prices, security deposits, documents and home delivery options."
        />
        <meta property="og:image" content="https://www.longdrivecars.com/locationpages/gachibowli.webp" />
        <meta property="og:site_name" content="Long Drive Cars" />
        <meta property="og:locale" content="en_IN" />

        {/* Twitter Card */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta
          name="twitter:title"
          content="Self Drive Cars in Gachibowli, Hyderabad | Long Drive Cars app"
        />
        <meta
          name="twitter:description"
          content="Book self drive cars in Gachibowli, Hyderabad, with Long Drive Cars app. Check car prices, security deposits, documents and home delivery options."
        />
        <meta name="twitter:image" content="https://www.longdrivecars.com/locationpages/gachibowli.webp" />
      </Head>

      <div className="min-h-screen bg-slate-50 text-slate-900 antialiased pt-24 lg:pt-0">
        {/* 1. HEADER SECTION */}
        <header className="bg-white py-12 md:py-16 px-4 sm:px-6 lg:px-8 border-b border-slate-200">
          <div className="max-w-4xl mx-auto text-center space-y-4">
            <span className="inline-block px-3 py-1 text-xs font-semibold uppercase tracking-wider bg-slate-100 text-slate-700 rounded-full">
              Self Drive Car Rentals
            </span>

            <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight text-slate-900 md:leading-snug">
              Self Drive Car Pickup and Home Delivery in Gachibowli
            </h1>

            <p className="text-slate-600 text-sm sm:text-base md:text-lg max-w-3xl mx-auto leading-relaxed">
              Long Drive Cars app serves customers in Gachibowli through delivery. Customers can check car availability and confirm the delivery arrangements for their preferred address before booking.
            </p>
          </div>
        </header>

        {/* 2. COVER IMAGE */}
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 -mt-6">
          <div className="rounded-2xl overflow-hidden shadow-sm border border-slate-200 bg-white">
            <Image
              src="/locationpages/gachibowli.webp"
              height={2000}
              width={2000}
              className="rounded-2xl object-cover w-full max-h-[480px]"
              alt="Self drive car pickup and delivery in Gachibowli"
              priority
            />
          </div>
        </div>

        {/* 3. MAIN BODY */}
        <main className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-10 space-y-8">
          {/* SECTION: OVERVIEW & HOW TO BOOK */}
          <section className="bg-white p-6 sm:p-8 rounded-2xl border border-slate-200 shadow-xs space-y-6">
            <div className="space-y-3">
              <p className="text-slate-600 leading-relaxed text-sm sm:text-base">
                Free home delivery is available on eligible branch cars from Long Drive Cars. Customers looking for Self drive cars in Gachibowli can check vehicle availability and confirm whether their preferred car can be delivered to their address. Delivery coverage and applicable conditions may vary by vehicle and booking. Please confirm the delivery details before completing your reservation.
              </p>
            </div>

            <div className="border-t border-slate-100 pt-6">
              <h2 className="text-xl sm:text-2xl font-bold text-slate-900 mb-4 flex items-center gap-2">
                <Car className="w-5 h-5 text-slate-700" />
                To book a self-drive car in Gachibowli:
              </h2>
              <ol className="space-y-3 text-sm sm:text-base text-slate-700">
                {bookingSteps.map((step, idx) => (
                  <li key={idx} className="flex items-start gap-3">
                    <span className="flex items-center justify-center w-6 h-6 rounded-full bg-slate-900 text-white text-xs font-bold shrink-0 mt-0.5">
                      {idx + 1}
                    </span>
                    <span>{step}</span>
                  </li>
                ))}
              </ol>
              <p className="text-xs sm:text-sm text-slate-500 mt-4 italic">
                Customers should confirm the delivery time, return arrangements and any applicable charges before their journey.
              </p>
            </div>
          </section>

          {/* SECTION: DOCUMENTS REQUIRED */}
          <section className="bg-white p-6 sm:p-8 rounded-2xl border border-slate-200 shadow-xs space-y-4">
            <div className="flex items-center gap-2 text-slate-700 font-bold text-sm">
              <FileText className="w-4 h-4 text-slate-600" /> Verification Details
            </div>
            <h2 className="text-2xl font-bold text-slate-900">Documents Required to Rent a Self-Drive Car</h2>
            <p className="text-slate-600 text-sm sm:text-base">
              Long Drive Cars app displays the following document requirements:
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 pt-1">
              <div className="p-4 bg-slate-50 rounded-xl border border-slate-200/80">
                <h3 className="font-bold text-slate-900 text-sm mb-1">Aadhaar option</h3>
                <p className="text-xs sm:text-sm text-slate-600">Aadhaar photo and driving licence photo.</p>
              </div>
              <div className="p-4 bg-slate-50 rounded-xl border border-slate-200/80">
                <h3 className="font-bold text-slate-900 text-sm mb-1">Passport option</h3>
                <p className="text-xs sm:text-sm text-slate-600">Passport photo and driving licence photo.</p>
              </div>
              <div className="p-4 bg-slate-50 rounded-xl border border-slate-200/80">
                <h3 className="font-bold text-slate-900 text-sm mb-1">Existing customers</h3>
                <p className="text-xs sm:text-sm text-slate-600">
                  The provided information states that existing customers do not need to submit documents again from their second booking onwards.
                </p>
              </div>
            </div>

            <p className="text-xs sm:text-sm text-slate-500 pt-2 border-t border-slate-100">
              Customers should follow the current verification instructions provided during booking. Keep your valid driving licence available and confirm that your documents meet the rental requirements.
            </p>
          </section>

          {/* SECTION: SECURITY DEPOSIT */}
          <section className="bg-white p-6 sm:p-8 rounded-2xl border border-slate-200 shadow-xs space-y-4">
            <div className="flex items-center gap-2 text-slate-700 font-bold text-sm">
              <ShieldCheck className="w-4 h-4 text-slate-600" /> Security Policies
            </div>
            <h2 className="text-2xl font-bold text-slate-900">Security Deposit for Self-Drive Cars</h2>
            <p className="text-slate-600 text-sm sm:text-base">
              Long Drive Cars app displays refundable security deposit options based on the car category.
            </p>

            <div className="overflow-x-auto border border-slate-200 rounded-xl">
              <table className="w-full text-left text-sm">
                <thead className="bg-slate-100 text-slate-700 uppercase font-semibold text-xs border-b border-slate-200">
                  <tr>
                    <th className="p-3.5 sm:px-4">Car category or option</th>
                    <th className="p-3.5 sm:px-4">Security deposit</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-200 text-slate-600">
                  <tr>
                    <td className="p-3.5 sm:px-4 font-medium text-slate-900">Premium cars</td>
                    <td className="p-3.5 sm:px-4">₹2,000 refundable deposit</td>
                  </tr>
                  <tr>
                    <td className="p-3.5 sm:px-4 font-medium text-slate-900">Luxury cars</td>
                    <td className="p-3.5 sm:px-4">₹5,000 refundable deposit</td>
                  </tr>
                </tbody>
              </table>
            </div>

            <div className="p-4 bg-slate-50 rounded-xl border border-slate-200 space-y-2 mt-2">
              <h3 className="font-bold text-slate-900 text-sm">An alternative is shown in the provided information:</h3>
              <p className="text-xs sm:text-sm text-slate-600">
                <strong>Bike or laptop:</strong> The displayed information lists a bike or laptop as an alternative security option. Confirm the eligibility conditions and accepted alternatives with Long Drive Cars app before booking.
              </p>
            </div>

            <p className="text-xs sm:text-sm text-slate-500 pt-1">
              The deposit is described as refundable. However, the exact refund timeline, inspection requirements and any permitted deductions should be confirmed in the current rental terms.
            </p>
          </section>

          {/* SECTION: RENTAL PRICES AND BOOKING CHARGES */}
          <section className="bg-white p-6 sm:p-8 rounded-2xl border border-slate-200 shadow-xs space-y-4">
            <div className="flex items-center gap-2 text-slate-700 font-bold text-sm">
              <Tag className="w-4 h-4 text-slate-600" /> Transparent Pricing
            </div>
            <h2 className="text-2xl font-bold text-slate-900">Rental Prices and Booking Charges</h2>
            <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
              The rental price depends on the selected car, booking dates and rental duration. Check the current price shown on the Long Drive Cars app before confirming your reservation.
            </p>
            <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
              Long Drive cars app shows security deposits but does not specify the current daily rental prices for individual cars. Therefore, customers should use the live booking price rather than relying on an estimated amount.
            </p>

            <div className="pt-2">
              <h3 className="font-bold text-slate-900 text-sm mb-3">Before booking, check:</h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                {checklistItems.map((item, idx) => (
                  <div key={idx} className="flex items-center gap-2.5 p-3 bg-slate-50 rounded-xl border border-slate-200/80 text-xs sm:text-sm text-slate-700">
                    <CheckCircle2 className="w-4 h-4 text-slate-600 shrink-0" />
                    <span>{item}</span>
                  </div>
                ))}
              </div>
            </div>

            <p className="text-xs sm:text-sm text-slate-500 pt-2 italic">
              Review the complete booking summary before making payment.
            </p>
          </section>

          {/* SECTION: HOME DELIVERY & TOLLS */}
          <section className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="bg-white p-6 rounded-2xl border border-slate-200 shadow-xs space-y-3">
              <div className="flex items-center gap-2 text-slate-900 font-bold text-sm">
                <Truck className="w-4 h-4 text-slate-600" /> Delivery Coverage
              </div>
              <h3 className="text-lg font-bold text-slate-900">Free Home Delivery for Eligible Branch Cars</h3>
              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                Long Drive Cars app advertises free home delivery on branch cars. Customers in Gachibowli should confirm whether their selected vehicle qualifies for this service and whether their address falls within the delivery coverage area.
              </p>
              <p className="text-xs sm:text-sm text-slate-500 pt-2 border-t border-slate-100">
                Check the delivery arrangements before confirming your reservation. Do not assume that every vehicle or address qualifies for free delivery.
              </p>
            </div>

            <div className="bg-white p-6 rounded-2xl border border-slate-200 shadow-xs space-y-3">
              <div className="flex items-center gap-2 text-slate-900 font-bold text-sm">
                <ShieldCheck className="w-4 h-4 text-slate-600" /> Toll Guidelines
              </div>
              <h3 className="text-lg font-bold text-slate-900">National Highway Toll Information</h3>
              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                Long Drive Cars app advertises free tolls on national highways. Before starting your journey, confirm the applicable toll policy and how toll payments are handled for your selected car.
              </p>
              <p className="text-xs sm:text-sm text-slate-500 pt-2 border-t border-slate-100">
                For journeys involving the Outer Ring Road or other toll roads, check the current rental terms to understand which tolls are covered and whether any exclusions or additional charges apply.
              </p>
            </div>
          </section>

          {/* SECTION: FAQS */}
          <section className="bg-white p-6 sm:p-8 rounded-2xl border border-slate-200 shadow-xs space-y-4">
            <div className="flex items-center gap-2 text-slate-700 font-bold text-sm">
              <HelpCircle className="w-4 h-4 text-slate-600" /> Help &amp; FAQs
            </div>
            <h2 className="text-2xl font-bold text-slate-900">Frequently Asked Questions</h2>

            <div className="space-y-2.5">
              {faqs.map((faq, idx) => (
                <details key={idx} className="group border border-slate-200/80 rounded-xl overflow-hidden">
                  <summary className="w-full flex items-center justify-between p-4 text-left font-semibold text-slate-800 hover:bg-slate-50 transition text-sm sm:text-base cursor-pointer list-none">
                    <span>{faq.q}</span>
                    <ChevronDown className="w-4 h-4 text-slate-400 shrink-0 ml-2 group-open:rotate-180 transition-transform duration-200" />
                  </summary>
                  <div className="px-4 pb-4 text-xs sm:text-sm text-slate-600 bg-slate-50/50 border-t border-slate-100 pt-3 leading-relaxed">
                    {faq.a}
                  </div>
                </details>
              ))}
            </div>
          </section>

          {/* SECTION: CONCLUSION & CTA */}
          <section className="bg-white border border-slate-200 rounded-2xl p-8 sm:p-10 text-center space-y-4 shadow-xs">
            <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900">Conclusion</h2>
            <p className="text-slate-600 text-xs sm:text-sm max-w-2xl mx-auto leading-relaxed">
              Looking for Self drive cars in Gachibowli? Long Drive Cars helps you explore available cars for daily travel, office commutes, family outings and weekend trips. Compare the available vehicles, check rental prices and security deposit requirements, and confirm delivery arrangements for your preferred address.
            </p>
            <p className="text-slate-600 text-xs sm:text-sm max-w-2xl mx-auto leading-relaxed font-medium">
              Review the documents, fuel, toll and cancellation policies before booking to plan your journey with confidence.
            </p>
            <div className="pt-2">
              <Link
                href={targetUrl}
                className="px-6 py-3 bg-slate-900 text-white font-bold rounded-xl shadow-xs hover:bg-slate-800 transition inline-flex items-center gap-2 text-sm"
              >
                Book Self Drive Car in Gachibowli <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </section>
        </main>
      </div>
    </>
  );
}