import React from 'react';
import Head from 'next/head';
import Image from 'next/image';
import Link from 'next/link';
import {
  CheckCircle2,
  ChevronDown,
  ArrowRight,
  Waves,
  Film,
  Building2,
  Compass,
  Route,
  Navigation,
  Clock,
  Car
} from 'lucide-react';

const TARGET_URL = 'https://www.longdrivecars.com';
const CANONICAL_URL = 'https://www.longdrivecars.com/self-drive-cars-for-rent-in-hayathnagar';

const HIGHLIGHTS = [
  'South Hyderabad locality connected via Hayathnagar Road, LB Nagar Road, NH-65, and the Outer Ring Road (ORR)',
  'Direct gateway to Vanasthalipuram, LB Nagar, Pedda Amberpet, Kuntloor, Abdullapurmet, and Thorrur',
  'Ideal starting point for local city movement and outstation highway travel towards Vijayawada',
  'Total control over your departure time, travel route, and stops without depending on fixed cab timings',
  'Flexible rental features including Unlimited Kilometres, Choose Your Own Hours, and Exact Car Guaranteed'
];

const EXPLORE_PLACES = [
  {
    icon: Building2,
    title: 'Vanasthalipuram',
    badge: 'Residential & Retail Hub',
    desc: 'A nearby residential and commercial locality situated just minutes away from Hayathnagar.',
    note: 'Convenient to combine with retail shopping, family visits, and everyday errands.'
  },
  {
    icon: Compass,
    title: 'LB Nagar',
    badge: 'Major Transit Hub',
    desc: 'An important residential, commercial and transport hub on the western side of Hayathnagar, connecting to the Hyderabad Metro Red Line.',
    note: 'Ideal multi-modal connection point for passenger pickups and commercial stops.'
  },
  {
    icon: Route,
    title: 'Pedda Amberpet',
    badge: 'Highway Corridor',
    desc: 'Located along the Hyderabad–Vijayawada / NH-65 corridor, linking smoothly toward outer rings.',
    note: 'Smooth transit route connecting town commutes with the Outer Ring Road.'
  },
  {
    icon: Navigation,
    title: 'Abdullapurmet',
    badge: 'ORR & NH-65 Link',
    desc: 'A nearby locality connected through NH-65 and the ORR, providing straightforward highway connectivity.',
    note: 'Great junction for transitioning onto open highway corridors.'
  },
  {
    icon: Film,
    title: 'Ramoji Film City',
    badge: 'Major Tourist Destination',
    desc: 'A major tourist attraction easily accessible from this side of Hyderabad along the NH-65 route.',
    note: 'Perfect destination for family day trips, group sightseeing, and weekend getaways.'
  },
  {
    icon: Waves,
    title: 'Hayathnagar Lake',
    badge: 'Local Landmark',
    desc: 'A local water body and scenic destination referenced in the surrounding Hayathnagar area.',
    note: 'Great for a calm morning or evening drive close to home.'
  },
  {
    icon: Route,
    title: 'Kuntloor',
    badge: 'Eastern Suburb',
    desc: 'A nearby locality on the eastern side of Hayathnagar, featuring growing residential areas.',
    note: 'Seamless to integrate into multi-stop neighbourhood errands.'
  }
];

const QUICK_INFO = [
  { need: 'Want to see available cars', info: 'Compare thousands of self-drive cars in the app' },
  { need: 'Want the same car you selected', info: 'Exact Car Guaranteed' },
  { need: 'Need flexible rental timing', info: 'Choose Your Own Hours' },
  { need: 'Planning a longer journey', info: 'Unlimited Kilometres' },
  { need: 'Need assistance during a breakdown', info: '24/7 breakdown help with replacement and towing' }
];

const LDC_FEATURES = [
  'Exact Car Guaranteed',
  'Unlimited Kilometres',
  'Choose Your Own Hours',
  'Original Car Photos in the app',
  'Compare thousands of self-drive cars',
  '30-second quick booking option',
  'Pay ₹200 to hold your car',
  '24/7 Breakdown Help',
  'Free car replacement guaranteed',
  'Towing service included'
];

const FAQS = [
  {
    q: '1. Can I book a self-drive car from Hayathnagar?',
    a: 'Customers travelling from Hayathnagar can explore available self-drive cars and booking options through Long Drive Cars.'
  },
  {
    q: '2. Can I see the actual car before booking?',
    a: 'Long Drive Cars provides original car photos and lists Exact Car Guaranteed as a feature.'
  },
  {
    q: '3. What documents does a new customer need?',
    a: 'The supplied information states that a new customer needs an Aadhaar photo or passport photo and a driving licence photo.'
  },
  {
    q: '4. Do existing customers need to submit documents again?',
    a: 'According to the supplied information, old customers do not need documents from the second booking.'
  },
  {
    q: '5. What happens if the rental car breaks down?',
    a: 'Long Drive Cars states that 24/7 breakdown help is available, including free car replacement and towing service.'
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

export default function HayathnagarGuidePage() {
  return (
    <>
      <Head>
        <title>Self Drive Cars for Rent in Hayathnagar, Hyderabad | Long Drive Cars</title>
        <meta
          name="description"
          content="Looking for self drive cars for rent in Hayathnagar, Hyderabad? Choose cars with flexible hours, unlimited km, exact car guarantee and 24/7 breakdown support."
        />
        <meta
          name="keywords"
          content="Self Drive Cars for Rent in Hayathnagar, self drive cars in Hayathnagar, Self driving cars in Hyderabad, Rent Self Drive Cars Hyderabad, self drive cars near Hayathnagar, Self Drive Cars LB Nagar"
        />
        <link rel="canonical" href={CANONICAL_URL} />
        <meta property="og:type" content="article" />
        <meta property="og:title" content="Self Drive Cars for Rent in Hayathnagar, Hyderabad | Long Drive Cars" />
        <meta
          property="og:description"
          content="Looking for self drive cars for rent in Hayathnagar, Hyderabad? Choose cars with flexible hours, unlimited km, exact car guarantee and 24/7 breakdown support."
        />
        <meta property="og:url" content={CANONICAL_URL} />
        <meta property="og:site_name" content="Long Drive Cars" />
        <meta property="og:image" content="https://www.longdrivecars.com/locationpages/hayathnagar.webp" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Self Drive Cars for Rent in Hayathnagar, Hyderabad | Long Drive Cars" />
        <meta
          name="twitter:description"
          content="Looking for self drive cars for rent in Hayathnagar, Hyderabad? Choose cars with flexible hours, unlimited km, exact car guarantee and 24/7 breakdown support."
        />
        <meta name="twitter:image" content="https://www.longdrivecars.com/locationpages/hayathnagar.webp" />
      </Head>

      <div className="min-h-screen bg-slate-50 text-slate-900 antialiased pt-24 lg:pt-0">
        {/* HEADER SECTION */}
        <header className="bg-white py-12 md:py-16 px-4 sm:px-6 lg:px-8 border-b border-slate-200">
          <div className="max-w-4xl mx-auto text-center space-y-4">
            <span className="inline-block px-3 py-1 text-xs font-semibold uppercase tracking-wider bg-slate-100 text-slate-700 rounded-full">
              Rental Guide & Travel Information
            </span>
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight text-slate-900 leading-tight">
              Need Self Drive Cars for Rent in Hayathnagar?
            </h1>
            <p className="text-slate-600 text-sm sm:text-base md:text-lg max-w-3xl mx-auto leading-relaxed">
              Self Drive Cars for Rent in Hayathnagar can be a practical option when you want control over your travel time, route and stops. Hayathnagar is a locality in South Hyderabad with road connectivity through Hayathnagar Road and LB Nagar Road, while the wider area connects towards NH-65 and the Outer Ring Road.
            </p>
            <p className="text-slate-600 text-sm sm:text-base max-w-3xl mx-auto leading-relaxed">
              Whether you are planning an office commute, family outing, shopping trip, airport travel or a weekend drive, having your own rental car gives you more flexibility than depending on fixed cab timings.
            </p>
          </div>
        </header>

        {/* COVER IMAGE */}
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 -mt-6">
          <div className="rounded-2xl overflow-hidden shadow-sm border border-slate-200 bg-white">
            <Image
              src="/locationpages/hayathnagar.webp"
              height={2000}
              width={2000}
              className="rounded-2xl object-cover w-full max-h-[480px]"
              alt="Self drive cars for rent in Hayathnagar Hyderabad for local travel and weekend trips"
              priority
            />
          </div>
        </div>

        {/* MAIN BODY */}
        <main className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-10 space-y-8">
          {/* WHY IS HAYATHNAGAR CONVENIENT */}
          <SectionCard title="Why Is Hayathnagar Convenient for a Self-Drive Trip?">
            <p className="text-slate-600 leading-relaxed text-sm sm:text-base">
              Hayathnagar is positioned towards the eastern side of Hyderabad and is connected with nearby areas such as Vanasthalipuram, LB Nagar, Pedda Amberpet, Kuntloor, Abdullapurmet and Thorrur. The locality's connection towards NH-65 also makes it relevant for journeys towards the eastern outskirts and destinations beyond Hyderabad.
            </p>
            <p className="text-slate-600 leading-relaxed text-sm sm:text-base">
              For customers looking for self drive car booking in Hayathnagar, having a vehicle can be useful when the plan involves multiple locations rather than travelling from one fixed point to another.
            </p>
            <div className="pt-2">
              <h3 className="text-sm font-bold text-slate-800 uppercase tracking-wide mb-3">
                Key Travel Advantages in Hayathnagar
              </h3>
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

          {/* PLACES TO EXPLORE AROUND HAYATHNAGAR */}
          <div className="space-y-4">
            <div>
              <h2 className="text-2xl font-bold text-slate-900">Places to Explore Around Hayathnagar</h2>
              <p className="text-slate-600 text-sm sm:text-base mt-1">
                Hayathnagar can be used as a starting point for exploring nearby areas and destinations:
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
            <div className="bg-white p-4 rounded-xl border border-slate-200 text-xs sm:text-sm text-slate-600 leading-relaxed">
              This makes Self drive car rental near Hayathnagar useful for both local movement and longer drives towards the eastern outskirts of Hyderabad.
            </div>
          </div>

          {/* FAMILY, FRIENDS AND WEEKEND DRIVES */}
          <SectionCard title="Hayathnagar for Family, Friends and Weekend Drives">
            <p className="text-slate-600 leading-relaxed text-sm sm:text-base">
              Imagine planning a family outing where you want to visit a few places during the same day. Instead of arranging separate transportation for every stop, a self-drive car lets you keep the same vehicle throughout the trip.
            </p>
            <p className="text-slate-600 leading-relaxed text-sm sm:text-base">
              For friends or colleagues, the same flexibility can be useful for a longer road trip. You can decide when to start, where to stop and when to return. This is especially useful when your itinerary changes during the journey.
            </p>
          </SectionCard>

          {/* WHAT DOES LONG DRIVE CARS OFFER */}
          <SectionCard title="What Does Long Drive Cars Offer?">
            <p className="text-slate-600 leading-relaxed text-sm sm:text-base">
              According to the Long Drive Cars information provided, customers can compare thousands of self-drive cars in the Long Drive Cars app and check the original car photos before booking. The company information also lists Exact Car Guaranteed.
            </p>
            <p className="text-slate-600 leading-relaxed text-sm sm:text-base">
              For customers who want a quick booking process, the supplied information promotes a 30-second booking option. It also states that customers can pay ₹200 to hold their car.
            </p>
            <p className="text-slate-700 font-medium text-sm sm:text-base bg-slate-50 p-4 rounded-xl border border-slate-200">
              Long Drive Cars also lists Unlimited Kilometres and Choose Your Own Hours, giving customers flexibility regarding distance and rental timing.
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-3 pt-2">
              {LDC_FEATURES.map((feat, idx) => (
                <div key={idx} className="flex items-center gap-2 p-3 rounded-xl bg-slate-50 border border-slate-200 text-xs sm:text-sm font-medium text-slate-700">
                  <CheckCircle2 className="w-4 h-4 text-slate-600 shrink-0" />
                  <span>{feat}</span>
                </div>
              ))}
            </div>
          </SectionCard>

          {/* QUICK INFORMATION TABLE */}
          <SectionCard
            title="Hayathnagar Self-Drive Booking: Quick Information"
            subtitle="Based on the specifications supplied by Long Drive Cars:"
          >
            <div className="overflow-x-auto">
              <table className="w-full text-left text-xs sm:text-sm border-collapse">
                <thead>
                  <tr className="border-b border-slate-200 bg-slate-50/80 text-slate-800 font-semibold">
                    <th className="py-3 px-3">What You Need</th>
                    <th className="py-3 px-3">Long Drive Cars Information</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-100 text-slate-600">
                  {QUICK_INFO.map((row, idx) => (
                    <tr key={idx} className="hover:bg-slate-50/50 transition">
                      <td className="py-3 px-3 font-medium text-slate-900">{row.need}</td>
                      <td className="py-3 px-3">{row.info}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </SectionCard>

          {/* DOCUMENTS AND BREAKDOWN ASSISTANCE */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <SectionCard title="Documents Required for Booking">
              <p className="text-slate-600 text-xs sm:text-sm leading-relaxed">
                For a new customer, the provided Long Drive Cars information states that an Aadhaar photo or passport photo along with a driving licence photo is required. From the second booking, existing customers do not need to submit documents again.
              </p>
              <p className="text-slate-600 text-xs sm:text-sm leading-relaxed">
                If you plan to rent a Self drive car in Hayathnagar for the first time, keeping the required documents ready can make the booking process easier.
              </p>
            </SectionCard>

            <SectionCard title="24/7 Breakdown Support">
              <p className="text-slate-600 text-xs sm:text-sm leading-relaxed">
                Long Drive Cars' supplied information highlights 24/7 breakdown help, with free car replacement guaranteed and towing service.
              </p>
              <p className="text-slate-600 text-xs sm:text-sm leading-relaxed">
                This can be useful when travelling longer distances because an unexpected vehicle issue can affect your plans. The stated breakdown service provides support during such situations.
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

          {/* CONCLUSION & CTA */}
          <section className="bg-white border border-slate-200 rounded-2xl p-8 sm:p-10 text-center space-y-4 shadow-xs">
            <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900">
              Conclusion
            </h2>
            <p className="text-slate-600 text-xs sm:text-sm max-w-2xl mx-auto leading-relaxed">
              Self Drive Cars for Rent in Hayathnagar can be useful when you want flexibility for local travel, family outings and longer road trips. With connections towards Vanasthalipuram, LB Nagar, Pedda Amberpet, Abdullapurmet and NH-65, Hayathnagar provides access to several parts of Hyderabad and its eastern outskirts.
            </p>
            <p className="text-slate-600 text-xs sm:text-sm max-w-2xl mx-auto leading-relaxed">
              Long Drive Cars provides features including Exact Car Guaranteed, Unlimited Kilometres, Choose Your Own Hours, original car photos, quick booking and 24/7 breakdown support, based on the supplied company information.
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