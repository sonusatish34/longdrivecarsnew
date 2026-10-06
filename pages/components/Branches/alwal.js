import React, { useEffect } from 'react';
import Head from 'next/head';
import Image from 'next/image';
import Link from 'next/link';
import {
  CheckCircle2,
  ChevronDown,
  ArrowRight,
  Waves,
  Landmark,
  ShoppingBag,
  Car,
  FileCheck,
  Train,
  Route
} from 'lucide-react';

const TARGET_URL = 'https://www.longdrivecars.com';
const CANONICAL_URL = 'https://www.longdrivecars.com/self-drive-car-rental-in-alwal';

const HIGHLIGHTS = [
  'Convenient access towards Bolarum, Suchitra, Kompally, Bowenpally and other northern parts of Hyderabad',
  'Alwal Railway Station connecting the locality on the Secunderabad–Bolarum route',
  'Total control over when you start, where you stop, and how long you stay',
  'Visit local landmarks, run family errands, and travel across the city in one vehicle',
  'Eliminates the hassle of booking separate cabs for every leg of your trip'
];

const ATTRACTIONS = [
  {
    icon: Waves,
    title: 'Alwal Lake',
    badge: 'Local Landmark',
    desc: "Alwal Lake is one of the area's recognizable local landmarks. The lake is located in the heart of Alwal, close to the railway line, and roads around the lake provide views of the water. It can be a simple stop when you want a quieter break from the busy city streets.",
    note: 'For someone using a rental car, the lake can also be included as part of a short local drive rather than planning an entire day around it.'
  },
  {
    icon: Train,
    title: 'Alwal Railway Station',
    badge: 'Transit & Suburban Hub',
    desc: 'Alwal Railway Station is an important transport point for the locality. It serves Alwal and nearby areas including Old Alwal, Venkatapuram and parts of the surrounding northern suburbs.',
    note: 'If you are meeting someone arriving in the area, travelling onward after a train journey or combining railway travel with local sightseeing, having a self-drive car can make the next part of the journey easier to manage.'
  },
  {
    icon: Landmark,
    title: "Alwal's Historic Temples",
    badge: 'Cultural & Religious Sites',
    desc: 'Alwal is also known for its older temples and religious landmarks. The locality has a historic Venkateswara Temple near the municipal office, while other temples such as Thota Muthyalamma Temple and an Ayyappa Temple are also associated with the area.',
    note: "For families visiting these places, a rental car can provide a convenient way to travel between multiple locations while keeping the day's schedule flexible."
  },
  {
    icon: Landmark,
    title: 'Bolarum and Rashtrapati Nilayam',
    badge: 'Heritage & Civic Landmark',
    desc: 'Bolarum is one of the nearby areas that can be naturally combined with an Alwal drive. Rashtrapati Nilayam, the official retreat of the President of India, is located in Bolarum and is an important landmark in the wider Secunderabad area.',
    note: "A drive from Alwal towards Bolarum can therefore combine local travel with a visit to one of the region's notable heritage and civic landmarks."
  },
  {
    icon: ShoppingBag,
    title: 'Suchitra and Suchitra Junction',
    badge: 'Commercial & Transit Junction',
    desc: 'Suchitra is another important nearby area for Alwal residents. The locality has shopping, restaurants, educational institutions and everyday services, while Suchitra Junction provides an important connection towards Kompally, Bowenpally and other parts of northern Hyderabad.',
    note: 'If your plan involves shopping followed by dinner or meeting friends somewhere nearby, having your own rental vehicle means you do not have to coordinate multiple cab bookings.'
  },
  {
    icon: ShoppingBag,
    title: 'Kompally',
    badge: 'NH-44 Corridor & Entertainment',
    desc: 'Kompally is another popular destination for people travelling through the northern side of Hyderabad. The area sits along the NH-44 corridor and has shopping, restaurants, entertainment and residential developments.',
    note: 'For families or groups starting from Alwal, driving towards Kompally can turn into a simple evening outing or a longer weekend drive.'
  },
  {
    icon: Route,
    title: 'Bowenpally',
    badge: 'Secunderabad Gateway',
    desc: 'Bowenpally is another nearby locality connected with Alwal and the northern Secunderabad region. The Alwal–Suchitra–Bowenpally corridor makes it possible to combine several stops in one journey instead of treating every destination as a separate trip.',
    note: 'Seamlessly combine business, shopping, and family transit across the northern suburban belt.'
  }
];

const FLEET_OPTIONS = [
  { requirement: 'Daily city travel', carType: 'Hatchback', why: 'Easy to drive and park' },
  { requirement: 'Couple or small family outing', carType: 'Compact sedan / hatchback', why: 'Comfortable for short and medium trips' },
  { requirement: 'Family shopping or airport travel', carType: 'Sedan / compact SUV', why: 'More luggage and cabin comfort' },
  { requirement: 'Friends or larger family', carType: '7-seater', why: 'More passenger space' },
  { requirement: 'Weekend road trip', carType: 'SUV', why: 'Extra space and comfortable highway travel' },
  { requirement: 'Longer journey with luggage', carType: 'Large SUV / MUV', why: 'Better passenger and luggage capacity' }
];

const SITUATIONS = [
  { title: 'Family outings', desc: 'A single vehicle makes it easier when parents, children or relatives are travelling together.' },
  { title: 'Airport travel', desc: 'If you have luggage or multiple passengers, a rental car can provide more control over the journey.' },
  { title: 'Office travel', desc: 'Meetings in Secunderabad, Begumpet, Madhapur or other parts of Hyderabad may require multiple stops during the day.' },
  { title: 'Shopping trips', desc: 'You can visit Suchitra, Kompally or other shopping areas without worrying about finding another cab for the return journey.' },
  { title: 'Weekend drives', desc: 'A self-drive rental can turn an ordinary weekend into a road trip with friends or family.' },
  { title: 'Personal vehicle unavailable', desc: 'If your own car is under maintenance or being used by someone else, renting can provide a temporary alternative.' }
];

const BENEFITS = [
  { title: 'Choose Your Own Hours', desc: 'Flexibility to reserve vehicles based on your personal travel requirements and schedule without strict hourly blocks.' },
  { title: 'Unlimited Kilometres', desc: 'Drive freely across Alwal, Secunderabad, and beyond without keeping an eye on an odometer cap or worrying about per-km penalties.' },
  { title: 'Zero Security Deposit', desc: 'Enjoy complete convenience and transparency with no deposit required to confirm your booking.' },
  { title: 'Check Original Car Photos', desc: 'The platform allows customers to review original car photos directly before making a reservation so you know the exact vehicle you get.' },
  { title: '24/7 Breakdown Service', desc: 'Travel with complete peace of mind supported by round-the-clock roadside assistance wherever your journey takes you.' }
];

const BOOKING_STEPS = [
  'Open the Long Drive Cars app.',
  'Check the available cars.',
  'Select a vehicle based on your travel requirement.',
  'Choose the required rental duration.',
  'Review the vehicle and booking details.',
  'Complete the booking and payment.',
  'Upload the required documents for verification.',
  'Follow the pickup instructions provided for your booking.'
];

const FAQS = [
  { q: '1. Can I book a self-drive car in Alwal for a family trip?', a: 'Yes. You can choose a suitable vehicle based on the number of passengers, luggage and duration of your trip. Hatchbacks, sedans, SUVs and 7-seater options can be considered depending on availability.' },
  { q: '2. What documents are required to book a self-drive car?', a: 'Long Drive Cars states that customers need a selfie photo, Aadhaar card and valid driving licence for verification. The documents are uploaded through the app before pickup.' },
  { q: '3. Can I use a rental car from Alwal for an outstation trip?', a: "The suitable option depends on the booking and applicable rental terms. Before starting an outstation journey, check the vehicle's booking conditions and permitted usage." },
  { q: '4. Are unlimited kilometres available with Long Drive Cars?', a: "Yes. Unlimited kilometres is listed as one of Long Drive Cars' service features. Customers should still check the applicable terms for their specific booking." },
  { q: '5. Why choose a self-drive car instead of booking cabs around Alwal?', a: 'A self-drive rental gives you control over your route and schedule. Instead of arranging separate rides for multiple stops, you can use one vehicle throughout the journey and decide where and when to travel.' }
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

export default function AlwalGuidePage() {
    useEffect(()=>{
    
    async function Fetch()
    {
        const response = await fetch('https://dev.longdrivecars.com/l-site-dc/reviews?limit=10&offset=0')
    let res = await response.json()
    console.log(res,'jello');
    }
    Fetch()
  },[])
  return (
    <>
      <Head>
        <title>Self Drive Car Rental in Alwal, Hyderabad | Long Drive Cars</title>
        <meta name="description" content="Looking for self drive car rental in Alwal, Hyderabad? Choose hatchbacks, sedans, SUVs & 7-seaters with flexible hours, unlimited km and no deposit." />
        <meta name="keywords" content="Self Drive Car Rental in Alwal, self drive cars in Alwal, Self driving cars in Hyderabad, Rent Self Drive Cars Hyderabad, self drive cars near Alwal, Self Drive Cars Secunderabad" />
        <link rel="canonical" href={CANONICAL_URL} />
        <meta property="og:type" content="article" />
        <meta property="og:title" content="Self Drive Car Rental in Alwal, Hyderabad | Long Drive Cars" />
        <meta property="og:description" content="Looking for self drive car rental in Alwal, Hyderabad? Choose hatchbacks, sedans, SUVs & 7-seaters with flexible hours, unlimited km and no deposit." />
        <meta property="og:url" content={CANONICAL_URL} />
        <meta property="og:site_name" content="Long Drive Cars" />
        <meta property="og:image" content="https://www.longdrivecars.com/locationpages/alwal.webp" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Self Drive Car Rental in Alwal, Hyderabad | Long Drive Cars" />
        <meta name="twitter:description" content="Looking for self drive car rental in Alwal, Hyderabad? Choose hatchbacks, sedans, SUVs & 7-seaters with flexible hours, unlimited km and no deposit." />
        <meta name="twitter:image" content="https://www.longdrivecars.com/locationpages/alwal.webp" />
      </Head>

      <div className="min-h-screen bg-slate-50 text-slate-900 antialiased pt-24 lg:pt-0">
        <header className="bg-white py-12 md:py-16 px-4 sm:px-6 lg:px-8 border-b border-slate-200">
          <div className="max-w-4xl mx-auto text-center space-y-4">
            <span className="inline-block px-3 py-1 text-xs font-semibold uppercase tracking-wider bg-slate-100 text-slate-700 rounded-full">
              Rental Guide & Travel Information
            </span>
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight text-slate-900 leading-tight">
              Searching for Self Drive Car Rental in Alwal?
            </h1>
            <p className="text-slate-600 text-sm sm:text-base md:text-lg max-w-3xl mx-auto leading-relaxed">
              Self Drive Car Rental in Alwal is a practical option when you want the freedom to travel around Alwal, Secunderabad and nearby parts of Hyderabad without depending on cabs or fixed travel schedules. Whether you are planning a family outing, an airport journey, office travel, shopping trip or a weekend drive, a self-drive car gives you control over when you start, where you stop and how long you stay.
            </p>
            <p className="text-slate-600 text-sm sm:text-base max-w-3xl mx-auto leading-relaxed">
              Alwal is a well-established locality on the northern side of Hyderabad, with Alwal Railway Station connecting the area on the Secunderabad–Bolarum route. The locality also provides convenient access towards Bolarum, Suchitra, Kompally, Bowenpally and other northern parts of the city.
            </p>
          </div>
        </header>

        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 -mt-6">
          <div className="rounded-2xl overflow-hidden shadow-sm border border-slate-200 bg-white">
            <Image
              src="/locationpages/alwal.webp"
              height={2000}
              width={2000}
              className="rounded-2xl object-cover w-full max-h-[480px]"
              alt="Self drive car rental in Alwal Hyderabad for local travel and weekend trips"
              priority
            />
          </div>
        </div>

        <main className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-10 space-y-8">
          {/* WHY SELF-DRIVE MAKES SENSE */}
          <SectionCard title="Why Self-Drive Makes Sense in Alwal">
            <p className="text-slate-600 leading-relaxed text-sm sm:text-base">
              For many Alwal residents, travelling does not always mean going from one fixed point to another. A typical day might involve visiting a market, picking up family members, attending an appointment and then travelling to another part of the city.
            </p>
            <p className="text-slate-600 leading-relaxed text-sm sm:text-base">
              This is where self drive cars in Alwal can be useful. Instead of booking a separate cab for every part of your journey, you can take one rental car and manage the entire trip yourself.
            </p>
            <p className="text-slate-700 font-medium text-sm sm:text-base bg-slate-50 p-4 rounded-xl border border-slate-200">
              Long Drive Cars provides self-drive vehicles with features including choose your own hours, unlimited kilometres, no deposit and 24/7 breakdown service. Customers can check available cars and book through the Long Drive Cars app.
            </p>
            <div className="pt-2">
              <h3 className="text-sm font-bold text-slate-800 uppercase tracking-wide mb-3">Key Travel Advantages in Alwal</h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {HIGHLIGHTS.map((item, idx) => (
                  <div key={idx} className="flex items-start gap-2.5 p-3.5 bg-slate-50 rounded-xl border border-slate-200 text-sm font-medium text-slate-700">
                    <CheckCircle2 className="w-4 h-4 text-slate-600 shrink-0 mt-0.5" />
                    <span>{item}</span>
                  </div>
                ))}
              </div>
            </div>
          </SectionCard>

          {/* EXPLORE ALWAL & NEARBY */}
          <div className="space-y-4">
            <div>
              <h2 className="text-2xl font-bold text-slate-900">Explore Alwal and Nearby Places by Self-Drive Car</h2>
              <p className="text-slate-600 text-sm sm:text-base mt-1">
                One advantage of having a rental car in Alwal is that you are not restricted to the immediate locality. Several places around Alwal can easily become part of the same outing.
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {ATTRACTIONS.map(({ icon: Icon, title, badge, desc, note }, idx) => (
                <div key={idx} className="bg-white p-5 sm:p-6 rounded-2xl border border-slate-200 shadow-xs flex flex-col justify-between">
                  <div>
                    <div className="flex items-center justify-between mb-3">
                      <div className="p-2.5 rounded-xl bg-slate-100 text-slate-800"><Icon className="w-5 h-5" /></div>
                      <span className="text-xs font-semibold text-slate-500 bg-slate-50 px-2.5 py-1 rounded-md border border-slate-200">{badge}</span>
                    </div>
                    <h3 className="text-lg font-bold text-slate-900 mb-2">{title}</h3>
                    <p className="text-xs sm:text-sm text-slate-600 leading-relaxed mb-3">{desc}</p>
                  </div>
                  <div className="pt-3 border-t border-slate-100 text-xs text-slate-700 italic">{note}</div>
                </div>
              ))}
            </div>
          </div>

          {/* FLEET TABLE */}
          <SectionCard title="Which Car Should You Choose for an Alwal Trip?" subtitle="Choosing the right car depends on the type of journey rather than simply choosing the biggest vehicle.">
            <div className="overflow-x-auto">
              <table className="w-full text-left text-xs sm:text-sm border-collapse">
                <thead>
                  <tr className="border-b border-slate-200 bg-slate-50/80 text-slate-800 font-semibold">
                    <th className="py-3 px-3">Travel requirement</th>
                    <th className="py-3 px-3">Suitable car type</th>
                    <th className="py-3 px-3">Why it works</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-100 text-slate-600">
                  {FLEET_OPTIONS.map((row, idx) => (
                    <tr key={idx} className="hover:bg-slate-50/50 transition">
                      <td className="py-3 px-3 font-medium text-slate-800">{row.requirement}</td>
                      <td className="py-3 px-3 text-slate-900 font-semibold">{row.carType}</td>
                      <td className="py-3 px-3">{row.why}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            <p className="text-xs sm:text-sm text-slate-600 pt-2 border-t border-slate-100">
              Long Drive Cars' current fleet includes hatchbacks, sedans, SUVs and 7-seater vehicles, allowing customers to select a car according to their trip requirements.
            </p>
          </SectionCard>

          {/* WHEN TO RENT */}
          <SectionCard title="When to Rent a Self-Drive Car in Alwal" subtitle="There are several situations where renting a car can be more convenient than arranging individual rides:">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-1">
              {SITUATIONS.map((item, idx) => (
                <div key={idx} className="p-4 rounded-xl border border-slate-200 bg-slate-50/50 space-y-1">
                  <h3 className="font-bold text-sm text-slate-900 flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-slate-600 shrink-0" />
                    {item.title}
                  </h3>
                  <p className="text-xs sm:text-sm text-slate-600 pl-6">{item.desc}</p>
                </div>
              ))}
            </div>
          </SectionCard>

          {/* WHAT MAKES LONG DRIVE CARS USEFUL */}
          <div className="space-y-4">
            <div>
              <h2 className="text-2xl font-bold text-slate-900">What Makes Long Drive Cars Useful for Alwal Customers?</h2>
              <p className="text-slate-600 text-sm mt-1">When comparing options for Self drive car rental in Alwal, the important thing is not only the vehicle but also the rental experience.</p>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
              {BENEFITS.map((item, idx) => (
                <div key={idx} className="bg-white p-5 rounded-2xl border border-slate-200 shadow-xs">
                  <h3 className="text-base font-bold text-slate-900 mb-2">{item.title}</h3>
                  <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">{item.desc}</p>
                </div>
              ))}
            </div>
            <div className="bg-white p-5 rounded-2xl border border-slate-200 text-xs sm:text-sm text-slate-600 leading-relaxed">
              This can be particularly useful when your journey does not follow a fixed itinerary. You can start from Alwal, visit a local landmark, continue towards Suchitra or Kompally, stop for food and return when your trip is complete.
            </div>
          </div>

          {/* HOW TO BOOK */}
          <SectionCard title="How to Book a Self-Drive Car" subtitle="If you want to rent a self drive car in Alwal, the process can be completed through the Long Drive Cars platform.">
            <ol className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs sm:text-sm text-slate-700">
              {BOOKING_STEPS.map((step, idx) => (
                <li key={idx} className="flex items-start gap-2.5 p-3 rounded-xl bg-slate-50 border border-slate-200">
                  <span className="font-bold text-slate-900 text-xs mt-0.5 shrink-0 bg-slate-200 px-2 py-0.5 rounded-full">{idx + 1}</span>
                  <span>{step}</span>
                </li>
              ))}
            </ol>
            <div className="p-4 rounded-xl bg-slate-50 border border-slate-200 text-xs sm:text-sm text-slate-700 space-y-1">
              <p className="font-semibold text-slate-900">Documentation & Age Requirements:</p>
              <p className="text-slate-600">
                Long Drive Cars states that customers must be 18 or older and need to upload a selfie photo, Aadhaar card and valid driving licence for verification. The company also states that documents should be uploaded before the pickup time for the booking.
              </p>
            </div>
          </SectionCard>

          {/* PLAN YOUR ALWAL DRIVE YOUR WAY */}
          <SectionCard title="Plan Your Alwal Drive Your Way">
            <p className="text-slate-600 text-sm sm:text-base leading-relaxed">The biggest advantage of self drive cars near Alwal is flexibility. You are not limited to one destination or one fixed schedule.</p>
            <p className="text-slate-600 text-sm sm:text-base leading-relaxed">You can start with a morning visit around Alwal, stop near Alwal Lake, continue towards Bolarum, spend some time around Suchitra, head towards Kompally for shopping or food, and return to Alwal when convenient.</p>
            <p className="text-slate-600 text-sm sm:text-base leading-relaxed">For a longer journey, you can also choose a larger vehicle that provides more space for passengers and luggage.</p>
            <p className="text-slate-600 text-sm sm:text-base leading-relaxed">If your requirement is a city commute, family outing, airport journey or weekend road trip, choose the vehicle according to the distance, number of passengers and luggage you expect to carry.</p>
          </SectionCard>

          {/* FAQS */}
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

          {/* CTA SECTION */}
          <section className="bg-white border border-slate-200 rounded-2xl p-8 sm:p-10 text-center space-y-4 shadow-xs">
            <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900">Book Your Self-Drive Car in Alwal</h2>
            <p className="text-slate-600 text-xs sm:text-sm max-w-2xl mx-auto leading-relaxed">
              Self Drive Car Rental in Alwal gives you the flexibility to explore Alwal, Bolarum, Suchitra, Kompally, Bowenpally and other parts of Hyderabad according to your own schedule. From everyday travel and family outings to airport journeys and weekend road trips, Long Drive Cars offers different vehicle options with features such as flexible hours, unlimited kilometres, no deposit and 24/7 breakdown service.
            </p>
            <p className="text-slate-900 font-semibold text-sm">Choose your car, plan your route and drive your own way with Long Drive Cars.</p>
            <div className="pt-2">
              <Link href={TARGET_URL} className="px-6 py-3 bg-slate-900 text-white font-bold rounded-xl shadow-xs hover:bg-slate-800 transition inline-flex items-center gap-2 text-sm">
                Book on Long Drive Cars App <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </section>
        </main>
      </div>
    </>
  );
}