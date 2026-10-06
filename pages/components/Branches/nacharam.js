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
  Briefcase
} from 'lucide-react';

const TARGET_URL = 'https://www.longdrivecars.com';
const CANONICAL_URL = 'https://www.longdrivecars.com/self-drive-car-rental-in-nacharam';

const HIGHLIGHTS = [
  'Strong road connections towards Habsiguda, Mallapur, Uppal, NFC, ECIL and nearby areas',
  'Habsiguda Metro station feeder routes covering Habsiguda–Nacharam and Nacharam–NFC–Mallapur corridors',
  'Direct access along GHMC key transit points including Nacharam–Mallapur Road and Radhika X Road',
  'Manage multi-stop commutes across eastern Hyderabad without relying on multiple cabs',
  'Total flexibility to choose your own route, stops, and travel schedule'
];

const EXPLORE_PLACES = [
  {
    icon: Compass,
    title: 'What Makes Nacharam a Convenient Starting Point?',
    badge: 'Transit Gateway',
    desc: "Nacharam connects naturally with Habsiguda, Mallapur, NFC, Uppal and ECIL. The Habsiguda Metro station's official information lists feeder routes running between Habsiguda and Nacharam and another route connecting Habsiguda, Nacharam, NFC and Mallapur.",
    note: 'For a self-drive traveller, this means a rental car can be useful when your day includes several destinations rather than a single point-to-point journey.'
  },
  {
    icon: Train,
    title: 'Can You Drive from Nacharam to Habsiguda?',
    badge: 'Metro & Commercial Corridor',
    desc: 'Yes. Habsiguda is one of the closest major neighbourhoods to Nacharam and is connected through the Habsiguda–Nacharam corridor. The area has a metro station, educational institutions, restaurants, shopping and business establishments.',
    note: 'If you are travelling for work, meeting friends or heading towards Tarnaka and the central parts of Hyderabad, having your own rental car can make it easier to manage multiple stops.'
  },
  {
    icon: Route,
    title: 'Can You Visit Mallapur by Self-Drive Car?',
    badge: 'Direct Road Corridor',
    desc: 'Yes. Mallapur is directly connected with Nacharam through the Nacharam–Mallapur Road corridor. GHMC records identify Nacharam–Mallapur Road, NFC X Road and Mallapur Circle among the area’s important road points.',
    note: 'A self-drive trip can therefore combine Nacharam and Mallapur for shopping, work, food or visiting family and friends.'
  },
  {
    icon: ShoppingBag,
    title: 'What Can You Explore Around NFC and Mallapur?',
    badge: 'Catchment & Commercial Hub',
    desc: 'The NFC area and Mallapur form another important local corridor around Nacharam. The Habsiguda Metro station lists NFC Mallapur as a feeder route destination and identifies NFC, ESI Hospital, ANR Gardens, SPAR Hypermarket and Mallapur IDA among its nearby catchment areas.',
    note: 'For someone renting a car in Nacharam, this area can be useful for combining errands, shopping and appointments in one journey.'
  },
  {
    icon: Building2,
    title: 'Can You Include Uppal in a Nacharam Drive?',
    badge: 'Eastern Hub Connection',
    desc: 'Yes. Uppal is another major destination on Hyderabad’s eastern side and is connected with Nacharam through the wider Habsiguda–Uppal corridor.',
    note: 'A self-drive car can be useful if your plans include shopping, restaurants, work meetings or other activities around Uppal before returning to Nacharam.'
  },
  {
    icon: Navigation,
    title: 'Is Radhika X Road an Important Local Point?',
    badge: 'ECIL–AS Rao Nagar Side',
    desc: 'Radhika X Road is a recognizable local reference point around the wider ECIL–AS Rao Nagar side. GHMC records list multiple traffic locations around Radhika X Road, while local listings also associate the area with Radhika Theatre and nearby AS Rao Nagar.',
    note: 'If you are travelling between Nacharam, ECIL and AS Rao Nagar, a self-drive car can give you the flexibility to make additional stops along the way.'
  },
  {
    icon: Briefcase,
    title: 'Can You Visit HMT Nagar from Nacharam?',
    badge: 'Residential & Transit Link',
    desc: 'Yes. HMT Nagar is another nearby residential area associated with the Nacharam–ECIL side of Hyderabad. Local transport routes also connect ECIL, NFC, Mallapur, Nacharam and HMT Nagar before continuing towards Habsiguda and Uppal.',
    note: 'This makes a rental car useful when your trip involves several neighbourhoods in the same direction.'
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
  { title: 'Family outings', desc: 'A single vehicle can make travelling with parents, children or relatives easier.' },
  { title: 'Office travel', desc: 'If your work involves Nacharam, Habsiguda, Uppal, Mallapur or other nearby business areas, one rental car can simplify a day with multiple stops.' },
  { title: 'Shopping trips', desc: 'You can travel around Nacharam, Habsiguda, Mallapur or Uppal without arranging another ride for the return journey.' },
  { title: 'Airport travel', desc: 'A rental car can be useful when you have luggage or several passengers.' },
  { title: 'Weekend drives', desc: 'You can start from Nacharam and continue towards destinations outside the immediate neighbourhood.' },
  { title: 'Personal vehicle unavailable', desc: 'If your own vehicle is under maintenance or being used by another family member, a rental car can provide a temporary travel option.' }
];

const BENEFITS = [
  { title: 'Choose Your Own Hours', desc: 'Flexible hourly and daily rental bookings designed around your own schedule.' },
  { title: 'Unlimited Kilometres', desc: 'Drive freely across Nacharam, eastern Hyderabad, and beyond without per-km penalty anxiety.' },
  { title: 'No Deposit', desc: 'Enjoy complete booking transparency and convenience with zero security deposit required.' },
  { title: 'Check Original Car Photos', desc: 'Review real, original vehicle photos directly on the platform before confirming your reservation.' },
  { title: '24/7 Breakdown Service', desc: 'Round-the-clock roadside assistance ensures complete peace of mind throughout your journey.' }
];

const BOOKING_STEPS = [
  'Open the Long Drive Cars app.',
  'Check the available cars.',
  'Select a vehicle based on your travel requirement.',
  'Choose your rental duration.',
  'Review the car and booking information.',
  'Complete the booking and payment.',
  'Upload the required documents.',
  'Follow the pickup instructions provided after booking.'
];

const FAQS = [
  {
    q: 'Can I book a self-drive car in Nacharam for a family outing?',
    a: 'Yes. You can select a vehicle according to the number of passengers, luggage and duration of your journey. Long Drive Cars currently lists hatchbacks, sedans, SUVs and 7-seater options, subject to availability.'
  },
  {
    q: 'What documents are required to rent a self-drive car in Nacharam?',
    a: 'Long Drive Cars states that customers need to upload a selfie photo, Aadhaar card and valid driving licence for verification after booking. The documents should be uploaded before the scheduled pickup time.'
  },
  {
    q: 'Can I take a self-drive rental car from Nacharam for an outstation trip?',
    a: 'This depends on the applicable booking conditions and permitted vehicle usage. Before starting an outstation journey, check the terms associated with your selected vehicle and booking.'
  },
  {
    q: 'Does Long Drive Cars offer unlimited kilometres?',
    a: 'Yes. Unlimited kilometres is currently listed among Long Drive Cars’ key rental features. Customers should check the applicable terms for their specific booking.'
  },
  {
    q: 'Why should I choose a self-drive car instead of a cab in Nacharam?',
    a: 'A self-drive rental gives you greater control over your route, stops and travel schedule. Instead of arranging separate rides when travelling between Nacharam, Habsiguda, Mallapur, NFC or Uppal, you can use one rental vehicle throughout your journey.'
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

export default function NacharamGuidePage() {
  return (
    <>
      <Head>
        <title>Self Drive Car Rental in Nacharam, Hyderabad | Long Drive Cars</title>
        <meta
          name="description"
          content="Looking for self drive car rental in Nacharam, Hyderabad? Choose hatchbacks, sedans, SUVs & 7-seaters with flexible hours, unlimited km and no deposit."
        />
        <meta
          name="keywords"
          content="Self Drive Car Rental in Nacharam, self drive cars in Nacharam, Self driving cars in Hyderabad, Rent Self Drive Cars Hyderabad, self drive cars near Nacharam, Self Drive Cars Secunderabad"
        />
        <link rel="canonical" href={CANONICAL_URL} />
        <meta property="og:type" content="article" />
        <meta property="og:title" content="Self Drive Car Rental in Nacharam, Hyderabad | Long Drive Cars" />
        <meta
          property="og:description"
          content="Looking for self drive car rental in Nacharam, Hyderabad? Choose hatchbacks, sedans, SUVs & 7-seaters with flexible hours, unlimited km and no deposit."
        />
        <meta property="og:url" content={CANONICAL_URL} />
        <meta property="og:site_name" content="Long Drive Cars" />
        <meta property="og:image" content="https://www.longdrivecars.com/locationpages/nacharam.webp" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Self Drive Car Rental in Nacharam, Hyderabad | Long Drive Cars" />
        <meta
          name="twitter:description"
          content="Looking for self drive car rental in Nacharam, Hyderabad? Choose hatchbacks, sedans, SUVs & 7-seaters with flexible hours, unlimited km and no deposit."
        />
        <meta name="twitter:image" content="https://www.longdrivecars.com/locationpages/nacharam.webp" />
      </Head>

      <div className="min-h-screen bg-slate-50 text-slate-900 antialiased pt-24 lg:pt-0">
        {/* HEADER SECTION */}
        <header className="bg-white py-12 md:py-16 px-4 sm:px-6 lg:px-8 border-b border-slate-200">
          <div className="max-w-4xl mx-auto text-center space-y-4">
            <span className="inline-block px-3 py-1 text-xs font-semibold uppercase tracking-wider bg-slate-100 text-slate-700 rounded-full">
              Rental Guide & Travel Information
            </span>
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight text-slate-900 leading-tight">
              Where Can You Find Self Drive Cars for Local Trips from Nacharam?
            </h1>
            <p className="text-slate-600 text-sm sm:text-base md:text-lg max-w-3xl mx-auto leading-relaxed">
              Self Drive Cars for Local Trips from Nacharam can be a practical choice when you want to travel across Nacharam, Habsiguda, Mallapur, Uppal, Tarnaka, HMT Nagar and nearby parts of Hyderabad. Whether you are planning a family outing, office commute, shopping trip, airport journey or a short weekend drive, having a self-drive car gives you greater flexibility to choose your route, make multiple stops and manage your travel time according to your plans.
            </p>
            <p className="text-slate-600 text-sm sm:text-base max-w-3xl mx-auto leading-relaxed">
              Nacharam is part of Hyderabad's eastern side and has strong road connections towards Habsiguda, Mallapur, Uppal, NFC, ECIL and other nearby areas. The Habsiguda Metro station's official catchment information specifically includes the Habsiguda–Nacharam and Nacharam–NFC–Mallapur corridors, while GHMC records also identify Nacharam–Mallapur Road, Radhika X Road and Nacharam's industrial areas as important local points.
            </p>
          </div>
        </header>

        {/* COVER IMAGE */}
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 -mt-6">
          <div className="rounded-2xl overflow-hidden shadow-sm border border-slate-200 bg-white">
            <Image
              src="/locationpages/nacharam.webp"
              height={2000}
              width={2000}
              className="rounded-2xl object-cover w-full max-h-[480px]"
              alt="Self drive car rental in Nacharam Hyderabad for local travel and weekend trips"
              priority
            />
          </div>
        </div>

        {/* MAIN BODY */}
        <main className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-10 space-y-8">
          {/* WHY CHOOSE A SELF-DRIVE CAR IN NACHARAM? */}
          <SectionCard title="Why Choose a Self-Drive Car in Nacharam?">
            <p className="text-slate-600 leading-relaxed text-sm sm:text-base">
              Nacharam is surrounded by several established residential, commercial and industrial areas. A typical journey may involve travelling from Nacharam to Habsiguda for work, Mallapur for an appointment, Uppal for shopping and then returning home.
            </p>
            <p className="text-slate-600 leading-relaxed text-sm sm:text-base">
              This is where self drive cars in Nacharam can be useful. Instead of arranging separate rides for different destinations, you can use one rental car and manage the complete journey according to your schedule.
            </p>
            <p className="text-slate-700 font-medium text-sm sm:text-base bg-slate-50 p-4 rounded-xl border border-slate-200">
              Long Drive Cars currently highlights choosing your own hours, unlimited kilometres, no deposit, 24/7 breakdown service and original car photos before booking as key rental features.
            </p>
            <div className="pt-2">
              <h3 className="text-sm font-bold text-slate-800 uppercase tracking-wide mb-3">Key Travel Advantages in Nacharam</h3>
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

          {/* WHAT CAN YOU EXPLORE AROUND NACHARAM BY SELF-DRIVE CAR? */}
          <div className="space-y-4">
            <div>
              <h2 className="text-2xl font-bold text-slate-900">What Can You Explore Around Nacharam by Self-Drive Car?</h2>
              <p className="text-slate-600 text-sm sm:text-base mt-1">
                Nacharam's location makes it easy to combine nearby neighbourhoods and local attractions into one drive.
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

          {/* WHICH CAR SHOULD YOU CHOOSE FOR A NACHARAM TRIP? */}
          <SectionCard
            title="Which Car Should You Choose for a Nacharam Trip?"
            subtitle="The right car depends on your passengers, luggage and travel purpose."
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
              Long Drive Cars currently lists different categories including hatchbacks, sedans, SUVs and 7-seater vehicles, subject to availability at the time of booking.
            </p>
          </SectionCard>

          {/* WHEN SHOULD YOU RENT A SELF-DRIVE CAR IN NACHARAM? */}
          <SectionCard
            title="When Should You Rent a Self-Drive Car in Nacharam?"
            subtitle="A self-drive rental can be useful for several types of journeys:"
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

          {/* WHAT MAKES LONG DRIVE CARS USEFUL FOR NACHARAM CUSTOMERS? */}
          <div className="space-y-4">
            <div>
              <h2 className="text-2xl font-bold text-slate-900">
                What Makes Long Drive Cars Useful for Nacharam Customers?
              </h2>
              <p className="text-slate-600 text-sm mt-1">
                When comparing Self drive car rental in Nacharam, it is useful to look at the rental features as well as the vehicle itself.
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
              The platform offers vehicles ranging from compact cars to SUVs and 7-seater models, so customers can select according to their trip requirements and availability.
            </div>
          </div>

          {/* HOW CAN YOU BOOK A SELF-DRIVE CAR IN NACHARAM? */}
          <SectionCard
            title="How Can You Book a Self-Drive Car in Nacharam?"
            subtitle="If you want to rent a self drive car in Nacharam, you can check the available vehicles through the Long Drive Cars platform."
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
              <p className="font-semibold text-slate-900">Documentation & Age Requirements:</p>
              <p className="text-slate-600">
                Long Drive Cars states that customers must be 18+. After a successful booking, customers can upload a selfie photo, Aadhaar card and driving licence through the app for verification. The company also states that documents need to be uploaded before the pickup time.
              </p>
            </div>
          </SectionCard>

          {/* HOW CAN YOU PLAN A NACHARAM DRIVE WITH A RENTAL CAR? */}
          <SectionCard title="How Can You Plan a Nacharam Drive with a Rental Car?">
            <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
              The advantage of self drive cars near Nacharam is the freedom to combine several nearby locations into one journey.
            </p>
            <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
              For example, you could start in Nacharam, travel towards Habsiguda for work, continue towards Mallapur for lunch or shopping, visit the NFC side and then return through the Nacharam–Mallapur corridor.
            </p>
            <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
              If you are travelling with family, a sedan or SUV may provide additional comfort. For a short city trip, a compact hatchback can be easier to handle.
            </p>
            <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
              Your choice should depend on the number of passengers, luggage, distance and type of journey.
            </p>
          </SectionCard>

          {/* WHY CHOOSE LONG DRIVE CARS & OUTSTATION DUAL SECTION */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <SectionCard title="Why Choose Long Drive Cars for Self-Drive Travel in Nacharam?">
              <p className="text-slate-600 text-xs sm:text-sm leading-relaxed">
                Long Drive Cars focuses on self-drive rentals with features designed around flexibility. The company currently highlights choose your own hours, unlimited kilometres, no deposit, 24/7 breakdown service and original car photos before booking.
              </p>
              <p className="text-slate-600 text-xs sm:text-sm leading-relaxed">
                For customers travelling from Nacharam, these features can be useful when the journey involves multiple destinations instead of a simple point-to-point trip.
              </p>
            </SectionCard>

            <SectionCard title="Can You Use a Self-Drive Car for Local and Outstation Trips?">
              <p className="text-slate-600 text-xs sm:text-sm leading-relaxed">
                A rental car can be useful for both local journeys and longer drives, subject to the applicable booking conditions and permitted vehicle usage.
              </p>
              <p className="text-slate-600 text-xs sm:text-sm leading-relaxed">
                A hatchback may be suitable for everyday city travel, while a sedan or SUV can provide additional comfort for longer journeys. Larger 7-seater vehicles can be considered when more passengers or luggage are involved. Long Drive Cars currently lists multiple vehicle categories for customers to choose from based on availability.
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
              Book Your Self-Drive Cars for local Trips from Nacharam
            </h2>
            <p className="text-slate-600 text-xs sm:text-sm max-w-2xl mx-auto leading-relaxed">
              Self Drive Cars for Local Trips from Nacharam offer the flexibility to explore Nacharam, Habsiguda, Mallapur, NFC, Uppal, HMT Nagar and nearby areas at your own pace. Whether you need a car for office commutes, shopping, family outings, airport transfers or weekend road trips, Long Drive Cars offers multiple vehicle options with flexible rental hours, unlimited kilometres, a zero-deposit option and 24/7 breakdown assistance.
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