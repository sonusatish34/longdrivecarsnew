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
  Route,
  Navigation,
  Compass,
  GraduationCap
} from 'lucide-react';

const TARGET_URL = 'https://www.longdrivecars.com';
const CANONICAL_URL = 'https://www.longdrivecars.com/self-drive-car-rental-in-tarnaka';

const HIGHLIGHTS = [
  'Central connectivity linking Osmania University, Habsiguda, Mettuguda, Nacharam, Malkajgiri & Secunderabad',
  'Osmania University officially identifies Tarnaka as the campus area, with Arts College as a core landmark',
  'Road and metro connectivity make multi-destination scheduling easy in one vehicle',
  'Complete control over your itinerary, stops, and timing without cab cancellations or waiting charges',
  'Eliminates the cost and inconvenience of booking separate rides for every stop'
];

const USEFUL_DESTINATIONS = [
  'Osmania University',
  'Arts College',
  'Habsiguda',
  'Habsiguda Metro Station',
  'Mettuguda',
  'Nacharam',
  'Uppal',
  'Malkajgiri',
  'Secunderabad'
];

const EXPLORE_PLACES = [
  {
    icon: Compass,
    title: 'What Makes Tarnaka a Convenient Starting Point?',
    badge: 'Central Network',
    desc: 'Tarnaka sits within an important network connecting Habsiguda, Mettuguda, Osmania University, Nacharam and Malkajgiri. The wider area also has road and metro connectivity.',
    note: 'For someone travelling by rental car, the advantage is being able to combine several destinations instead of making separate point-to-point journeys. For example: Tarnaka → Osmania University → Habsiguda → Nacharam → Tarnaka can be planned as one journey according to your schedule.'
  },
  {
    icon: GraduationCap,
    title: 'Can You Drive from Tarnaka to Osmania University?',
    badge: 'Academic Hub',
    desc: "Yes. Osmania University is one of the most important landmarks associated with Tarnaka. The university's official website states that the general area where the campus is located is called Tarnaka, while Arts College is one of its best-known landmarks.",
    note: 'A self-drive car can be useful if your visit involves university meetings, academic visits, events, campus-related work, visiting friends or family, or exploring nearby areas. Having your own rental vehicle makes multi-stop scheduling easier.'
  },
  {
    icon: Train,
    title: 'Can You Visit Habsiguda from Tarnaka?',
    badge: 'Metro & Suburb Corridor',
    desc: 'Yes. Habsiguda is one of the closest and most relevant areas around Tarnaka. The two locations are connected through the eastern Hyderabad road network, and Habsiguda Metro Station is also a major transport reference point for the surrounding area.',
    note: 'A self drive car rental Tarnaka can therefore be useful when your plans include travelling between Tarnaka and Habsiguda for work, shopping, appointments or personal activities.'
  },
  {
    icon: Navigation,
    title: 'Can You Drive from Tarnaka Towards Mettuguda and Secunderabad?',
    badge: 'Secunderabad Gateway',
    desc: 'Yes. Mettuguda lies along the important connection between Tarnaka and Secunderabad. Hyderabad Traffic Police route information also lists routes connecting Tarnaka with Mettuguda and Secunderabad-side areas.',
    note: 'If your day involves several stops around Tarnaka → Mettuguda → Secunderabad → Tarnaka, a self-drive rental can help you manage the journey with one vehicle.'
  },
  {
    icon: Route,
    title: 'Can You Travel from Tarnaka to Nacharam and Uppal?',
    badge: 'Eastern Corridor',
    desc: 'Yes. Nacharam and Uppal are part of the broader eastern Hyderabad travel network around Tarnaka. The Hyderabad-area transport route documentation also includes Tarnaka, Habsiguda, Nacharam and Uppal within the same broader travel corridor.',
    note: 'If you need to visit offices, shops, restaurants, appointments or other destinations across these areas, one rental vehicle can make the journey easier to manage. A possible route could be: Tarnaka → Habsiguda → Nacharam → Uppal → Tarnaka.'
  },
  {
    icon: Building2,
    title: 'What Can You Visit Around the Osmania University Area?',
    badge: 'Campus & Surrounds',
    desc: "The Osmania University area is one of the key geographical references for Tarnaka. The university's official route information identifies Arts College as a prominent campus landmark.",
    note: 'If you are travelling around the university area, a rental car can be useful when your day involves several destinations rather than just one campus visit. For example: Tarnaka → Arts College → Habsiguda → Mettuguda can be planned according to your preferred schedule.'
  }
];

const FLEET_OPTIONS = [
  { requirement: 'Daily city travel', carType: 'Hatchback', why: 'Compact and convenient for local roads' },
  { requirement: 'Couple outing', carType: 'Hatchback / Sedan', why: 'Comfortable for short and medium trips' },
  { requirement: 'Family outing', carType: 'Sedan / SUV', why: 'More cabin and luggage space' },
  { requirement: 'Airport travel', carType: 'Sedan / SUV', why: 'Useful for passengers and luggage' },
  { requirement: 'Friends travelling together', carType: 'SUV / 7-seater', why: 'More passenger capacity' },
  { requirement: 'Weekend road trip', carType: 'SUV / MUV', why: 'More comfortable for longer drives' },
  { requirement: 'Long journey with luggage', carType: '7-seater / Large SUV', why: 'Extra passenger and luggage space' }
];

const SITUATIONS = [
  { title: 'Office travel', desc: 'If your work involves Tarnaka, Habsiguda, Mettuguda, Nacharam or nearby business areas, one rental car can simplify a day involving multiple stops.' },
  { title: 'University visits', desc: 'If you need to travel around Osmania University or Arts College, a rental car gives you greater control over your schedule.' },
  { title: 'Family outings', desc: 'A single vehicle can make travelling with parents, children or relatives more convenient.' },
  { title: 'Shopping trips', desc: 'You can travel between Tarnaka, Habsiguda, Uppal and nearby shopping areas without arranging another ride for every return journey.' },
  { title: 'Airport travel', desc: 'A sedan or SUV can be useful when travelling with luggage or several passengers.' },
  { title: 'Weekend drives', desc: 'You can start from Tarnaka and continue towards destinations outside the immediate neighbourhood.' },
  { title: 'Personal vehicle unavailable', desc: 'If your own car is under maintenance or unavailable, a self-drive rental can provide a temporary travel option.' }
];

const BENEFITS = [
  { title: 'Choose Your Own Hours', desc: 'Flexible hourly and daily rental bookings designed around your own schedule.' },
  { title: 'Unlimited Kilometres', desc: 'Drive freely across Tarnaka, central-eastern Hyderabad, and beyond without per-km penalty anxiety.' },
  { title: 'No Deposit', desc: 'Enjoy complete booking transparency and convenience with zero security deposit required.' },
  { title: 'Check Original Car Photos', desc: 'Review real, original vehicle photos directly on the platform before confirming your reservation.' },
  { title: '24/7 Breakdown Service', desc: 'Round-the-clock roadside assistance ensures complete peace of mind throughout your journey.' }
];

const BOOKING_STEPS = [
  'Open the Long Drive Cars app.',
  'Check the available cars.',
  'Select a vehicle according to your travel requirement.',
  'Choose your rental duration.',
  'Review the car and booking information.',
  'Complete the booking and payment.',
  'Upload the required documents.',
  'Follow the pickup instructions provided after booking.'
];

const FAQS = [
  {
    q: 'Can I book a self-drive car in Tarnaka for a family outing?',
    a: 'Yes. You can select a vehicle according to the number of passengers, luggage and duration of your journey. Hatchbacks, sedans, SUVs and 7-seater options can be considered depending on availability.'
  },
  {
    q: 'What documents are required to rent a self-drive car in Tarnaka?',
    a: 'Long Drive Cars requires customers to complete the applicable verification process and upload the required documents before the scheduled pickup time.'
  },
  {
    q: 'Can I take a self-drive rental car from Tarnaka for an outstation trip?',
    a: 'This depends on the applicable booking conditions and permitted vehicle usage. Before starting an outstation journey, check the terms associated with your selected vehicle and booking.'
  },
  {
    q: 'Does Long Drive Cars offer unlimited kilometres?',
    a: 'Yes. Unlimited kilometres is currently listed among Long Drive Cars’ key rental features. Customers should check the applicable terms for their specific booking.'
  },
  {
    q: 'Why should I choose a self-drive car instead of a cab in Tarnaka?',
    a: 'A self-drive rental gives you greater control over your route, stops and travel schedule. Instead of arranging separate rides when travelling between Tarnaka, Osmania University, Habsiguda, Mettuguda, Nacharam or Uppal, you can use one rental vehicle throughout your journey.'
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

export default function TarnakaGuidePage() {
  return (
    <>
      <Head>
        <title>Self Drive Car Rental in Tarnaka, Hyderabad | Long Drive Cars</title>
        <meta
          name="description"
          content="Looking for self drive car rental in Tarnaka, Hyderabad? Choose hatchbacks, sedans, SUVs & 7-seaters with flexible hours, unlimited km and no deposit."
        />
        <meta
          name="keywords"
          content="Self Drive Car Rental in Tarnaka, self drive cars in Tarnaka, Self driving cars in Hyderabad, Rent Self Drive Cars Hyderabad, self drive cars near Tarnaka, Self Drive Cars Secunderabad"
        />
        <link rel="canonical" href={CANONICAL_URL} />
        <meta property="og:type" content="article" />
        <meta property="og:title" content="Self Drive Car Rental in Tarnaka, Hyderabad | Long Drive Cars" />
        <meta
          property="og:description"
          content="Looking for self drive car rental in Tarnaka, Hyderabad? Choose hatchbacks, sedans, SUVs & 7-seaters with flexible hours, unlimited km and no deposit."
        />
        <meta property="og:url" content={CANONICAL_URL} />
        <meta property="og:site_name" content="Long Drive Cars" />
        <meta property="og:image" content="https://www.longdrivecars.com/locationpages/tarnaka.webp" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Self Drive Car Rental in Tarnaka, Hyderabad | Long Drive Cars" />
        <meta
          name="twitter:description"
          content="Looking for self drive car rental in Tarnaka, Hyderabad? Choose hatchbacks, sedans, SUVs & 7-seaters with flexible hours, unlimited km and no deposit."
        />
        <meta name="twitter:image" content="https://www.longdrivecars.com/locationpages/tarnaka.webp" />
      </Head>

      <div className="min-h-screen bg-slate-50 text-slate-900 antialiased pt-24 lg:pt-0">
        {/* HEADER SECTION */}
        <header className="bg-white py-12 md:py-16 px-4 sm:px-6 lg:px-8 border-b border-slate-200">
          <div className="max-w-4xl mx-auto text-center space-y-4">
            <span className="inline-block px-3 py-1 text-xs font-semibold uppercase tracking-wider bg-slate-100 text-slate-700 rounded-full">
              Rental Guide & Travel Information
            </span>
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight text-slate-900 leading-tight">
              Planning to Rent a Self Drive Car in and around Tarnaka?
            </h1>
            <p className="text-slate-600 text-sm sm:text-base md:text-lg max-w-3xl mx-auto leading-relaxed">
              If you are planning to rent a self drive car in and around Tarnaka, a rental car can be a practical option for travelling around Tarnaka, Habsiguda, Osmania University, Mettuguda, Nacharam, Uppal and nearby parts of Hyderabad. Tarnaka is closely connected with the Osmania University area, and the university itself identifies Tarnaka as the general area where its campus is located, with Arts College being a major campus landmark.
            </p>
            <p className="text-slate-600 text-sm sm:text-base max-w-3xl mx-auto leading-relaxed">
              Whether you need a car for an office commute, university visit, family outing, shopping, airport travel or a weekend drive, a self-drive vehicle gives you more control over your route, stops and travel schedule.
            </p>
          </div>
        </header>

        {/* COVER IMAGE */}
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 -mt-6">
          <div className="rounded-2xl overflow-hidden shadow-sm border border-slate-200 bg-white">
            <Image
              src="/locationpages/tarnaka.webp"
              height={2000}
              width={2000}
              className="rounded-2xl object-cover w-full max-h-[480px]"
              alt="Self drive car rental in Tarnaka Hyderabad for local travel and weekend trips"
              priority
            />
          </div>
        </div>

        {/* MAIN BODY */}
        <main className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-10 space-y-8">
          {/* WHY CHOOSE A SELF-DRIVE CAR IN TARNAKA? */}
          <SectionCard title="Why Choose a Self-Drive Car in Tarnaka?">
            <p className="text-slate-600 leading-relaxed text-sm sm:text-base">
              Tarnaka is surrounded by residential neighbourhoods, educational institutions, research organisations and important road connections. It also connects naturally towards Habsiguda, Mettuguda, Osmania University, Nacharam, Malkajgiri and Secunderabad.
            </p>
            <p className="text-slate-600 leading-relaxed text-sm sm:text-base">
              This is where self drive cars in Tarnaka can be useful. Instead of arranging separate rides for different destinations, you can use one rental car and manage your journey according to your own schedule.
            </p>
            <p className="text-slate-700 font-medium text-sm sm:text-base bg-slate-50 p-4 rounded-xl border border-slate-200">
              Long Drive Cars currently highlights features such as choosing your own hours, unlimited kilometres, no deposit, 24/7 breakdown service and original car photos before booking.
            </p>
            <div className="pt-2">
              <h3 className="text-sm font-bold text-slate-800 uppercase tracking-wide mb-3">Key Travel Advantages in Tarnaka</h3>
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

          {/* WHAT CAN YOU EXPLORE AROUND TARNAKA BY SELF-DRIVE CAR? */}
          <div className="space-y-4">
            <div>
              <h2 className="text-2xl font-bold text-slate-900">What Can You Explore Around Tarnaka by Self-Drive Car?</h2>
              <p className="text-slate-600 text-sm sm:text-base mt-1">
                Tarnaka provides access to several established areas of eastern and central-eastern Hyderabad. A single drive can include educational landmarks, residential areas, research institutions, shopping destinations and nearby parts of Secunderabad.
              </p>
            </div>

            {/* USEFUL DESTINATIONS BADGE LIST */}
            <div className="bg-white p-5 rounded-2xl border border-slate-200 shadow-xs space-y-3">
              <h3 className="text-sm font-bold text-slate-900 uppercase tracking-wide">
                Key Destinations Around Tarnaka:
              </h3>
              <div className="flex flex-wrap gap-2">
                {USEFUL_DESTINATIONS.map((dest, idx) => (
                  <span
                    key={idx}
                    className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-slate-50 border border-slate-200 text-xs sm:text-sm font-medium text-slate-700"
                  >
                    <CheckCircle2 className="w-3.5 h-3.5 text-slate-500 shrink-0" />
                    {dest}
                  </span>
                ))}
              </div>
              <p className="text-xs text-slate-600 pt-1">
                Osmania University's official route information specifically identifies Tarnaka as the general area of the university campus and Arts College as a well-known campus landmark.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {EXPLORE_PLACES.map(({ icon: Icon, title, badge, desc, note }, idx) => (
                <div key={idx} className="bg-white p-5 sm:p-6 rounded-2xl border border-slate-200 shadow-xs flex flex-col justify-between">
                  <div>
                    <div className="flex items-center justify-between mb-3">
                      <div className="p-2.5 rounded-xl bg-slate-100 text-slate-800">
                        <Icon className="w-5 h-5" />
                      </div>
                      <span className="text-xs font-semibold text-slate-500 bg-slate-50 px-2.5 py-1 rounded-md border border-slate-200">
                        {badge}
                      </span>
                    </div>
                    <h3 className="text-lg font-bold text-slate-900 mb-2">{title}</h3>
                    <p className="text-xs sm:text-sm text-slate-600 leading-relaxed mb-3">{desc}</p>
                  </div>
                  <div className="pt-3 border-t border-slate-100 text-xs text-slate-700 italic">{note}</div>
                </div>
              ))}
            </div>
          </div>

          {/* WHICH CAR SHOULD YOU CHOOSE FOR A TARNAKA TRIP? */}
          <SectionCard
            title="Which Car Should You Choose for a Tarnaka Trip?"
            subtitle="The right vehicle depends on your passengers, luggage and travel purpose."
          >
            <div className="overflow-x-auto">
              <table className="w-full text-left text-xs sm:text-sm border-collapse">
                <thead>
                  <tr className="border-b border-slate-200 bg-slate-50/80 text-slate-800 font-semibold">
                    <th className="py-3 px-3">Travel requirement</th>
                    <th className="py-3 px-3">Suitable car type</th>
                    <th className="py-3 px-3">Why it can work</th>
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
              Long Drive Cars lists different vehicle categories including hatchbacks, sedans, SUVs and 7-seater vehicles, subject to availability at the time of booking.
            </p>
          </SectionCard>

          {/* WHEN SHOULD YOU RENT A SELF-DRIVE CAR IN TARNAKA? */}
          <SectionCard
            title="When Should You Rent a Self-Drive Car in Tarnaka?"
            subtitle="A self-drive rental can be useful for different types of journeys:"
          >
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

          {/* WHAT MAKES LONG DRIVE CARS USEFUL FOR TARNAKA CUSTOMERS? */}
          <div className="space-y-4">
            <div>
              <h2 className="text-2xl font-bold text-slate-900">
                What Makes Long Drive Cars Useful for Tarnaka Customers?
              </h2>
              <p className="text-slate-600 text-sm mt-1">
                When comparing Self drive car rental in Tarnaka, it is useful to consider both the vehicle and the rental features.
              </p>
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
              The platform also offers different vehicle categories, allowing customers to choose according to their passengers, luggage and journey requirements, subject to availability.
            </div>
          </div>

          {/* HOW CAN YOU BOOK A SELF-DRIVE CAR IN TARNAKA? */}
          <SectionCard
            title="How Can You Book a Self-Drive Car in Tarnaka?"
            subtitle="If you want to rent a self drive car in Tarnaka, you can check the available vehicles through the Long Drive Cars platform. Simple booking process:"
          >
            <ol className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs sm:text-sm text-slate-700">
              {BOOKING_STEPS.map((step, idx) => (
                <li key={idx} className="flex items-start gap-2.5 p-3 rounded-xl bg-slate-50 border border-slate-200">
                  <span className="font-bold text-slate-900 text-xs mt-0.5 shrink-0 bg-slate-200 px-2 py-0.5 rounded-full">
                    {idx + 1}
                  </span>
                  <span>{step}</span>
                </li>
              ))}
            </ol>
            <div className="p-4 rounded-xl bg-slate-50 border border-slate-200 text-xs sm:text-sm text-slate-700 space-y-1">
              <p className="font-semibold text-slate-900">Verification & Requirements:</p>
              <p className="text-slate-600">
                Long Drive Cars states that customers must be 18+ and that required verification documents need to be uploaded before pickup.
              </p>
            </div>
          </SectionCard>

          {/* HOW CAN YOU PLAN A TARNAKA DRIVE WITH A RENTAL CAR? */}
          <SectionCard title="How Can You Plan a Tarnaka Drive with a Rental Car?">
            <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
              The advantage of self drive cars near Tarnaka is the flexibility to combine several nearby locations in one journey.
            </p>
            <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
              For example, you could start from Tarnaka, visit Osmania University, continue towards Habsiguda, travel towards Nacharam for an appointment or shopping, and then return through the Tarnaka side.
            </p>
            <div className="p-3 bg-slate-50 rounded-xl border border-slate-200 text-xs sm:text-sm font-semibold text-slate-800">
              Popular Route: Tarnaka → Mettuguda → Secunderabad → Habsiguda → Tarnaka
            </div>
            <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
              For a family trip, a sedan or SUV may provide additional comfort. For a short city journey, a compact hatchback can be easier to handle.
            </p>
            <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
              Your vehicle choice should depend on the number of passengers, luggage, distance and purpose of the journey.
            </p>
          </SectionCard>

          {/* WHY CHOOSE LONG DRIVE CARS & OUTSTATION DUAL SECTION */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <SectionCard title="Why Choose Long Drive Cars for Self-Drive Travel in Tarnaka?">
              <p className="text-slate-600 text-xs sm:text-sm leading-relaxed">
                Long Drive Cars focuses on self-drive rentals with features designed around flexibility.
              </p>
              <p className="text-slate-600 text-xs sm:text-sm leading-relaxed">
                For customers travelling from Tarnaka, features such as choose your own hours, unlimited kilometres, no deposit, 24/7 breakdown service and original car photos before booking can be useful when the journey involves several destinations instead of a simple point-to-point trip.
              </p>
              <p className="text-slate-600 text-xs sm:text-sm leading-relaxed">
                Whether your plan is around Tarnaka and Osmania University or extends towards Habsiguda, Mettuguda, Nacharam, Uppal and Secunderabad, the rental car can be selected according to your travel requirement and availability.
              </p>
            </SectionCard>

            <SectionCard title="Can You Use a Self-Drive Car for Local and Outstation Trips?">
              <p className="text-slate-600 text-xs sm:text-sm leading-relaxed">
                A rental car can be useful for both local journeys and longer drives, subject to the applicable booking conditions and permitted vehicle usage.
              </p>
              <p className="text-slate-600 text-xs sm:text-sm leading-relaxed">
                A hatchback may be suitable for everyday city travel, while a sedan or SUV can provide additional comfort for longer journeys. Larger 7-seater vehicles can be considered when more passengers or luggage are involved.
              </p>
              <p className="text-slate-600 text-xs sm:text-sm leading-relaxed">
                Before starting an outstation journey, check the terms associated with your selected vehicle and booking.
              </p>
            </SectionCard>
          </div>

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

          {/* CTA / BOOKING SECTION */}
          <section className="bg-white border border-slate-200 rounded-2xl p-8 sm:p-10 text-center space-y-4 shadow-xs">
            <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900">
              Book Your Self-Drive Car in Tarnaka
            </h2>
            <p className="text-slate-600 text-xs sm:text-sm max-w-2xl mx-auto leading-relaxed">
              Self Drive Car Rental in and around Tarnaka gives you the flexibility to travel around Tarnaka, Osmania University, Habsiguda, Mettuguda, Nacharam, Uppal, Malkajgiri and nearby parts of Hyderabad according to your own schedule.
            </p>
            <p className="text-slate-600 text-xs sm:text-sm max-w-2xl mx-auto leading-relaxed">
              Whether you need a car for office travel, university visits, shopping, family outings, airport travel or a weekend road trip, Long Drive Cars provides multiple vehicle options with features such as flexible hours, unlimited kilometres, no deposit and 24/7 breakdown service.
            </p>
            <p className="text-slate-900 font-semibold text-sm">
              Choose your car, plan your route and drive your own way with Long Drive Cars.
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