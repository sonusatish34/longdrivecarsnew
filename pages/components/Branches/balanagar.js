import React from 'react';
import Head from 'next/head';
import Image from 'next/image';
import Link from 'next/link';
import {
  CheckCircle2,
  ChevronDown,
  ArrowRight,
  ShoppingBag,
  Building2,
  Train,
  Sunset,
  Film,
  Car,
  Briefcase,
  Users
} from 'lucide-react';

const TARGET_URL = 'https://www.longdrivecars.com';
const CANONICAL_URL = 'https://www.longdrivecars.com/self-drive-car-rental-near-balanagar';

const WHY_BALANAGAR = [
  'Established industrial and commercial hub, serving as a practical starting point for everyday travel and business trips',
  'Visit offices, workshops, and commercial establishments without the hassle of booking separate cabs for every stop',
  'Seamless connectivity across neighbouring residential zones, Kukatpally, Moosapet, and central Hyderabad',
  'Complete control over your itinerary, stops, and schedules for local errands, meetings, or family outings'
];

const LOCAL_LANDMARKS = [
  'IDL Lake',
  'NKNR Gardens',
  'Sri Prasanna Venkateshwara Swamy Temple',
  'Nearby commercial establishments and business zones'
];

const POPULAR_DESTINATIONS = [
  {
    icon: ShoppingBag,
    destination: 'Kukatpally',
    purpose: 'Shopping and everyday errands',
    desc: 'Easily accessible via the main road network for retail hubs, shopping malls, and dining runs.'
  },
  {
    icon: Building2,
    destination: 'Hitech City',
    purpose: 'Office visits and business meetings',
    desc: 'Direct commute to major IT hubs, tech parks, and corporate offices across the western corridor.'
  },
  {
    icon: Train,
    destination: 'Secunderabad',
    purpose: 'Railway station and city travel',
    desc: 'Practical self-drive route for station drop-offs, transit pickups, and twin-city exploration.'
  },
  {
    icon: Sunset,
    destination: 'Hussain Sagar',
    purpose: 'Evening outings and sightseeing',
    desc: 'Ideal for relaxed family leisure drives, Tank Bund views, and iconic central city attractions.'
  },
  {
    icon: Film,
    destination: 'Ramoji Film City',
    purpose: 'Family day trips and entertainment',
    desc: 'Great starting point for full-day leisure escapes and highway outings with ample luggage space.'
  }
];

const CAR_OPTIONS = [
  {
    icon: Car,
    type: 'Hatchbacks',
    bestFor: 'Short city trips & busy parking areas',
    desc: 'Compact, fuel-efficient, and easy to maneuver through dense traffic corridors and tight parking slots.'
  },
  {
    icon: Briefcase,
    type: 'Sedans',
    bestFor: 'Business visits & comfortable everyday journeys',
    desc: 'Delivers a smooth, professional driving experience with spacious boot capacity for luggage and gear.'
  },
  {
    icon: Users,
    type: 'SUVs & 7-Seaters',
    bestFor: 'Family outings & longer road trips',
    desc: 'Generous seating capacity, superior legroom, and maximum luggage room for group excursions and highway drives.'
  }
];

const BOOKING_STEPS = [
  'Open the Long Drive Cars app.',
  'Enter your location and required rental dates.',
  'Check available cars, rental durations and prices.',
  'Complete the booking and submit the required documents.',
  'Follow the confirmed booking instructions to find your vehicle and pickup details.'
];

const FAQS = [
  {
    q: 'Can I check self-drive car availability near Balanagar?',
    a: 'Yes. Enter your location in the Long Drive Cars app or website to check available vehicles and pickup options.'
  },
  {
    q: 'Which car is suitable for business travel from Balanagar?',
    a: 'A hatchback or sedan may suit individual travel and business visits. Choose based on your passenger and luggage requirements.'
  },
  {
    q: 'Can I book a car for a weekend trip from Balanagar?',
    a: 'Check the available rental durations and choose a car that suits your planned journey.'
  },
  {
    q: 'What documents are needed to book a car?',
    a: 'Follow the current app instructions for identity verification and driving licence submission. Complete the required verification before pickup.'
  },
  {
    q: 'How do I find my booked car’s pickup location?',
    a: 'Check your confirmed booking details in the Long Drive Cars app for the applicable vehicle location and pickup instructions.'
  }
];

function SectionCard({ title, subtitle, children, className = '' }) {
  return (
    <section className={`bg-white p-6 sm:p-8 rounded-2xl border border-slate-200 shadow-xs space-y-4 ${className}`}>
      {title && (
        <div>
          <h2 className="text-2xl font-bold text-slate-900">{title}</h2>
          {subtitle && <p className="text-slate-600 text-sm mt-1">{subtitle}</p>}
        </div>
      )}
      {children}
    </section>
  );
}

export default function BalanagarGuidePage() {
  return (
    <>
      <Head>
        <title>Self Drive Car Rental in Balanagar, Hyderabad | Long Drive Cars App</title>
        <meta
          name="description"
          content="Book a self-drive car for travel from Balanagar, Hyderabad. Explore available hatchbacks, sedans and SUVs for work, shopping and weekend trips."
        />
        <meta
          name="keywords"
          content="Self Drive Car Rental in Balanagar, self drive cars in Balanagar, Self driving cars in Hyderabad, Rent Self Drive Cars Hyderabad, self drive cars near Balanagar, Self Drive Cars Secunderabad"
        />
        <link rel="canonical" href={CANONICAL_URL} />
        <meta property="og:type" content="article" />
        <meta property="og:title" content="Self Drive Car Rental in Balanagar, Hyderabad | Long Drive Cars App" />
        <meta
          property="og:description"
          content="Book a self-drive car for travel from Balanagar, Hyderabad. Explore available hatchbacks, sedans and SUVs for work, shopping and weekend trips."
        />
        <meta property="og:url" content={CANONICAL_URL} />
        <meta property="og:site_name" content="Long Drive Cars" />
        <meta property="og:image" content="https://www.longdrivecars.com/locationpages/balanagar.webp" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Self Drive Car Rental in Balanagar, Hyderabad | Long Drive Cars App" />
        <meta
          name="twitter:description"
          content="Book a self-drive car for travel from Balanagar, Hyderabad. Explore available hatchbacks, sedans and SUVs for work, shopping and weekend trips."
        />
        <meta name="twitter:image" content="https://www.longdrivecars.com/locationpages/balanagar.webp" />
      </Head>

      <div className="min-h-screen bg-slate-50 text-slate-900 antialiased pt-24 lg:pt-0">
        {/* HEADER SECTION */}
        <header className="bg-white py-12 md:py-16 px-4 sm:px-6 lg:px-8 border-b border-slate-200">
          <div className="max-w-4xl mx-auto text-center space-y-4">
            <span className="inline-block px-3 py-1 text-xs font-semibold uppercase tracking-wider bg-slate-100 text-slate-700 rounded-full">
              Rental Guide & Travel Information
            </span>
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight text-slate-900 leading-tight">
              Where Can You Find Self Drive Car Rentals in Balanagar?
            </h1>
            <p className="text-slate-600 text-sm sm:text-base md:text-lg max-w-3xl mx-auto leading-relaxed">
              <Link className='text-blue-700 font-semibold' href={'https://www.longdrivecars.com/'}>Self Drive Car Rentals in Balanagar</Link> make it easier to plan your next journey from Balanagar, Hyderabad. Long Drive Cars app lets you check available vehicles through its website or app and compare car options and rental durations for work visits, local errands, shopping and family trips.
            </p>
            <p className="text-slate-500 text-xs sm:text-sm max-w-2xl mx-auto">
              Check vehicle availability and pickup instructions before confirming your booking.
            </p>
          </div>
        </header>

        {/* COVER IMAGE */}
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 -mt-6">
          <div className="rounded-2xl overflow-hidden shadow-sm border border-slate-200 bg-white">
            <Image
              src="/locationpages/balanagar.webp"
              height={2000}
              width={2000}
              className="rounded-2xl object-cover w-full max-h-[480px]"
              alt="Self drive car rental in Balanagar Hyderabad for work, shopping and weekend trips"
              priority
            />
          </div>
        </div>

        {/* MAIN BODY */}
        <main className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-10 space-y-8">
          {/* WHY DO PEOPLE NEED SELF-DRIVE CARS IN BALANAGAR */}
          <SectionCard title="Why Do People Need Self-Drive Cars in Balanagar?">
            <p className="text-slate-600 leading-relaxed text-sm sm:text-base">
              Balanagar has an established industrial and commercial area, making it a practical starting point for work-related journeys and everyday travel. A self-drive car can help you visit offices, workshops, commercial establishments and nearby residential areas without arranging a separate cab for every stop.
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2">
              {WHY_BALANAGAR.map((item, idx) => (
                <div key={idx} className="flex items-start gap-2.5 p-3.5 bg-slate-50 rounded-xl border border-slate-200 text-sm font-medium text-slate-700">
                  <CheckCircle2 className="w-4 h-4 text-slate-600 shrink-0 mt-0.5" />
                  <span>{item}</span>
                </div>
              ))}
            </div>
          </SectionCard>

          {/* WHICH PLACES CAN YOU VISIT AROUND BALANAGAR */}
          <SectionCard title="Which Places Can You Visit Around Balanagar?">
            <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
              Balanagar Metro Station is near Balanagar Y Junction. Local landmarks listed by Hyderabad Metro include IDL Lake, NKNR Gardens, the Sri Prasanna Venkateshwara Swamy temple and nearby commercial establishments. You can plan local outings around these places or travel towards Kukatpally and Moosapet, depending on your destination and traffic conditions.
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2">
              {LOCAL_LANDMARKS.map((landmark, idx) => (
                <div key={idx} className="flex items-center gap-2.5 p-3 bg-slate-50 rounded-xl border border-slate-200 text-xs sm:text-sm font-semibold text-slate-800">
                  <span className="w-2 h-2 rounded-full bg-slate-500 shrink-0" />
                  <span>{landmark}</span>
                </div>
              ))}
            </div>
          </SectionCard>

          {/* WHICH CAR IS SUITABLE FOR TRAVEL FROM BALANAGAR */}
          <SectionCard
            title="Which Car Is Suitable for Travel from Balanagar?"
            subtitle="Check the live vehicle listings and applicable rental charges before booking:"
          >
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 pt-1">
              {CAR_OPTIONS.map(({ icon: Icon, type, bestFor, desc }, idx) => (
                <div key={idx} className="bg-slate-50 p-5 rounded-xl border border-slate-200 flex flex-col justify-between space-y-3">
                  <div>
                    <div className="p-2.5 rounded-lg bg-white border border-slate-200 text-slate-800 w-fit mb-2">
                      <Icon className="w-5 h-5" />
                    </div>
                    <h3 className="text-base font-bold text-slate-900">{type}</h3>
                    <p className="text-xs font-semibold text-slate-600 mt-0.5">{bestFor}</p>
                    <p className="text-xs text-slate-500 leading-relaxed mt-2">{desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </SectionCard>

          {/* POPULAR PLACES TO VISIT FROM BALANAGAR AND THEIR TRAVEL PURPOSES */}
          <SectionCard
            title="Popular Places to Visit from Balanagar and Their Travel Purposes"
            subtitle="Key travel corridors and what to plan for:"
          >
            <div className="overflow-x-auto">
              <table className="w-full text-left text-xs sm:text-sm border-collapse">
                <thead>
                  <tr className="border-b border-slate-200 bg-slate-50/80 text-slate-800 font-semibold">
                    <th className="py-3 px-3">Popular Destination from Balanagar</th>
                    <th className="py-3 px-3">What to Plan For</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-100 text-slate-600">
                  {POPULAR_DESTINATIONS.map((row, idx) => (
                    <tr key={idx} className="hover:bg-slate-50/50 transition">
                      <td className="py-3 px-3 font-semibold text-slate-900 flex items-center gap-2">
                        <row.icon className="w-4 h-4 text-slate-600 shrink-0" />
                        {row.destination}
                      </td>
                      <td className="py-3 px-3">{row.purpose}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </SectionCard>

          {/* HOW CAN YOU BOOK A SELF-DRIVE CAR FROM BALANAGAR */}
          <SectionCard
            title="How Can You Book a Self-Drive Car from Balanagar?"
            subtitle="Availability and pickup arrangements depend on the options shown during booking:"
          >
            <ol className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs sm:text-sm text-slate-700">
              {BOOKING_STEPS.map((step, idx) => (
                <li key={idx} className="flex items-start gap-2.5 p-3.5 rounded-xl bg-slate-50 border border-slate-200">
                  <span className="font-bold text-slate-900 text-xs mt-0.5 shrink-0 bg-slate-200 px-2 py-0.5 rounded-full">
                    {idx + 1}
                  </span>
                  <span>{step}</span>
                </li>
              ))}
            </ol>
          </SectionCard>

          {/* FREQUENTLY ASKED QUESTIONS */}
          <SectionCard title="Frequently Asked Questions">
            <div className="space-y-2.5">
              {FAQS.map((faq, idx) => (
                <details key={idx} className="group border border-slate-200 rounded-xl overflow-hidden">
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
          </SectionCard>

          {/* CONCLUSION & CTA */}
          <section className="bg-white border border-slate-200 rounded-2xl p-8 sm:p-10 text-center space-y-4 shadow-xs">
            <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900">
              Conclusion
            </h2>
            <p className="text-slate-600 text-xs sm:text-sm max-w-2xl mx-auto leading-relaxed">
              <Link className='text-blue-700 font-semibold' href={'https://www.longdrivecars.com/'}>Self Drive Car Rentals in Balanagar</Link>  offer a convenient way to plan local travel, business visits, family outings and weekend trips around Hyderabad. Long Drive Cars app lets you check available vehicles and compare rental options before booking. Choose a car based on your travel needs, passenger count and luggage, and confirm the pickup details in the app.
            </p>
            <div className="pt-2">
              <Link
                href={TARGET_URL}
                className="px-6 py-3 bg-slate-900 text-white font-bold rounded-xl shadow-xs hover:bg-slate-800 transition inline-flex items-center gap-2 text-sm"
              >
                Book on Long Drive Cars App <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </section>
        </main>
      </div>
    </>
  );
}