import React from 'react';
import Head from 'next/head';
import Image from 'next/image';
import Link from 'next/link';
import {
  CheckCircle2,
  ChevronDown,
  ArrowRight,
  ShoppingBag,
  Waves,
  Landmark,
  Compass,
  Route,
  Navigation,
  GraduationCap,
  Sparkles,
  TreePine
} from 'lucide-react';

const TARGET_URL = 'https://www.longdrivecars.com';
const CANONICAL_URL = 'https://www.longdrivecars.com/self-drive-car-rental-in-bachupally';

const HIGHLIGHTS = [
  'Growing north-west Hyderabad locality with direct connections to the IT corridor, Miyapur, JNTU, Nizampet & ORR',
  'Surrounded by residential communities, educational institutions, hospitals, lakes, and temples',
  'Access to Miyapur Metro Station on the Red Line for seamless multi-modal transit',
  'Flexibility to link multiple stops across Bowrampet, Mallampet, Pragathi Nagar & Kukatpally in one vehicle',
  'Full travel autonomy without depending on cab cancellations or fixed public transport timings'
];

const EXPLORE_PLACES = [
  {
    icon: Waves,
    title: 'Bachupally Cheruvu',
    badge: 'Local Water Body',
    desc: 'Bachupally Cheruvu is one of the local water bodies identified in the Nizampet Municipal Corporation master plan. A short drive around the lake and surrounding neighbourhoods can be part of a relaxed local outing.',
    note: 'Ideal for a quiet morning or evening drive close to residential pockets.'
  },
  {
    icon: Waves,
    title: 'Pragathi Nagar Lake',
    badge: 'Recreational Waterfront',
    desc: 'Pragathi Nagar Lake is another nearby destination that can be included in a local self-drive plan. It is located in the wider Bachupally–Pragathi Nagar area and is useful for combining an outdoor stop with nearby residential and food destinations.',
    note: 'Convenient stop to combine scenic lakeside views with local dining.'
  },
  {
    icon: Route,
    title: 'Mallampet',
    badge: 'ORR Corridor',
    desc: 'Mallampet lies north-west of Bachupally and provides a route toward the ORR side. Mallampet and its surrounding lake areas can be considered when planning a longer drive from Bachupally.',
    note: 'Great gateway for connecting toward the Outer Ring Road and northern highways.'
  },
  {
    icon: Navigation,
    title: 'Nizampet',
    badge: 'Neighbouring Urban Hub',
    desc: 'Nizampet is one of the closest major neighbouring areas to Bachupally. It is part of the same rapidly developing north-west Hyderabad urban region and has residential, commercial and local recreational destinations.',
    note: 'Smooth connection for everyday errands, grocery runs, and family visits.'
  },
  {
    icon: Navigation,
    title: 'Miyapur',
    badge: 'Commercial & Metro Terminal',
    desc: 'Miyapur is another important nearby destination. Bachupally has road connectivity toward Miyapur, and Miyapur Metro Station is identified as one of the nearby metro options for the area.',
    note: 'Direct route connecting northern residential belts with Red Line metro transit.'
  },
  {
    icon: GraduationCap,
    title: 'JNTU and VNR VJIET',
    badge: 'Higher Education Hubs',
    desc: 'For students, parents and visitors, the JNTU and VNR VJIET areas are important nearby educational destinations. HMDA’s Bachupally layout specifically identifies JNTU and VNR VJIET among the area’s educational infrastructure.',
    note: 'Convenient for campus visits, counseling sessions, and academic events.'
  },
  {
    icon: GraduationCap,
    title: 'Oakridge and Silver Oaks',
    badge: 'Prominent Schools',
    desc: 'Bachupally is also surrounded by well-known educational institutions including Oakridge International School and Silver Oaks International School. These are particularly relevant for families visiting the area for school-related purposes.',
    note: 'Ideal for parent-teacher meetings, school events, and admissions.'
  },
  {
    icon: Sparkles,
    title: 'Dhola-Ri-Dhani',
    badge: 'Ethnic Resort & Dining',
    desc: 'For entertainment, Dhola-Ri-Dhani is listed among the attractions in HMDA’s Bachupally location material. It can be included in a family or friends’ outing when planning a longer local drive.',
    note: 'A popular cultural and dining destination for evening and weekend outings.'
  },
  {
    icon: Landmark,
    title: 'Shri Mallikarjuna Temple',
    badge: 'Religious Landmark',
    desc: 'The Shri Mallikarjuna Temple is another landmark identified in the HMDA Bachupally layout. A self-drive car can be useful when combining a temple visit with other nearby destinations.',
    note: 'Easily integrate family devotional visits with shopping and dining stops.'
  },
  {
    icon: TreePine,
    title: 'Ameenpur Lake',
    badge: 'Biodiversity Heritage Site',
    desc: 'If you want to extend your drive beyond the immediate Bachupally neighbourhood, Ameenpur Lake is another notable destination in the wider area. It is located southwest of Bachupally Mandal and is recognised as an urban biodiversity heritage site.',
    note: 'Perfect for birdwatching, nature drives, and peaceful weekend escapes.'
  }
];

const TRIP_IDEAS = [
  {
    title: 'Family Outing',
    route: 'Bachupally → Pragathi Nagar → Dhola-Ri-Dhani → return',
    desc: 'A relaxed cultural, dining, and scenic family trip.'
  },
  {
    title: "Friends' Drive",
    route: 'Bachupally → Nizampet → Miyapur → Kukatpally',
    desc: 'Great for shopping, food, entertainment, and cafe hopping.'
  },
  {
    title: 'Nature-Oriented Drive',
    route: 'Bachupally → Bachupally Cheruvu → Pragathi Nagar Lake → Ameenpur Lake',
    desc: 'A calming circuit connecting local lakes and urban biodiversity hotspots.'
  },
  {
    title: 'Longer City Drive',
    route: 'Bachupally → Miyapur → JNTU → Hitech City → return',
    desc: 'Direct corridor route connecting northern suburbs with the core IT district.'
  }
];

const QUICK_INFO = [
  { req: 'Compare vehicles', info: 'Compare thousands of self-drive cars in the app' },
  { req: 'Reserve your choice', info: 'Pay ₹200 to hold your car' },
  { req: 'Quick booking', info: '30-second booking option' },
  { req: 'New customer', info: 'Submit required ID and driving licence details' },
  { req: 'Returning customer', info: 'No documents required from the second booking' }
];

const LDC_FEATURES = [
  'Choose your own rental hours',
  'Unlimited kilometres',
  'Exact Car Guaranteed',
  'Check original car photos in app',
  'Compare thousands of cars via app',
  'Zero Deposit option available',
  'Pay ₹200 to hold your car',
  '30-second booking process',
  '24/7 breakdown assistance with replacement & towing'
];

const BOOKING_STEPS = [
  'Open the Long Drive Cars app.',
  'Select your preferred dates and rental hours.',
  'Compare available cars and check original vehicle photos.',
  'Select your suitable vehicle with Exact Car Guaranteed.',
  'Optionally pay ₹200 to hold your car or complete the 30-second booking.',
  'Book → Pick Up → Drive → Explore.'
];

const FAQS = [
  {
    q: '1. Is self-drive car rental available in Bachupally?',
    a: 'Customers can check Long Drive Cars’ app for available self-drive vehicles, rental hours and booking options for their required trip.'
  },
  {
    q: '2. What places can I visit from Bachupally by self-drive car?',
    a: 'You can plan trips toward Nizampet, Pragathi Nagar, Miyapur, Mallampet, Bowrampet, JNTU, Ameenpur and nearby Hyderabad destinations.'
  },
  {
    q: '3. Can I compare different cars before booking?',
    a: 'Yes. The uploaded Long Drive Cars information promotes comparing thousands of self-drive cars through the app.'
  },
  {
    q: '4. Do returning customers need to submit documents again?',
    a: 'According to the uploaded document, old customers do not need documents from their second booking.'
  },
  {
    q: '5. What happens if my rental car breaks down?',
    a: 'The uploaded information highlights 24/7 breakdown help, free car replacement and towing service. Customers should check the terms applicable to their booking.'
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

export default function BachupallyGuidePage() {
  return (
    <>
      <Head>
        <title>Self Drive Car Rental in Bachupally, Hyderabad | Long Drive Cars</title>
        <meta
          name="description"
          content="Looking for self drive car rental in Bachupally, Hyderabad? Explore Nizampet, Miyapur, Pragathi Nagar & Mallampet with flexible hours, unlimited km and zero deposit."
        />
        <meta
          name="keywords"
          content="Self Drive Car Rental in Bachupally, self drive cars in Bachupally, Self driving cars in Hyderabad, Rent Self Drive Cars Hyderabad, self drive cars near Bachupally, Self Drive Cars Secunderabad"
        />
        <link rel="canonical" href={CANONICAL_URL} />
        <meta property="og:type" content="article" />
        <meta property="og:title" content="Self Drive Car Rental in Bachupally, Hyderabad | Long Drive Cars" />
        <meta
          property="og:description"
          content="Looking for self drive car rental in Bachupally, Hyderabad? Explore Nizampet, Miyapur, Pragathi Nagar & Mallampet with flexible hours, unlimited km and zero deposit."
        />
        <meta property="og:url" content={CANONICAL_URL} />
        <meta property="og:site_name" content="Long Drive Cars" />
        <meta property="og:image" content="https://www.longdrivecars.com/locationpages/bachupally.webp" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Self Drive Car Rental in Bachupally, Hyderabad | Long Drive Cars" />
        <meta
          name="twitter:description"
          content="Looking for self drive car rental in Bachupally, Hyderabad? Explore Nizampet, Miyapur, Pragathi Nagar & Mallampet with flexible hours, unlimited km and zero deposit."
        />
        <meta name="twitter:image" content="https://www.longdrivecars.com/locationpages/bachupally.webp" />
      </Head>

      <div className="min-h-screen bg-slate-50 text-slate-900 antialiased pt-24 lg:pt-0">
        {/* HEADER SECTION */}
        <header className="bg-white py-12 md:py-16 px-4 sm:px-6 lg:px-8 border-b border-slate-200">
          <div className="max-w-4xl mx-auto text-center space-y-4">
            <span className="inline-block px-3 py-1 text-xs font-semibold uppercase tracking-wider bg-slate-100 text-slate-700 rounded-full">
              Rental Guide & Travel Information
            </span>
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight text-slate-900 leading-tight">
              What Should You Know Before Booking a Self Drive Car Near Bachupally?
            </h1>
            <p className="text-slate-600 text-sm sm:text-base md:text-lg max-w-3xl mx-auto leading-relaxed">
              Self Drive Car Rental in Bachupally can be a practical option when you want to explore Bachupally and nearby places such as Nizampet, Pragathi Nagar, Miyapur, Mallampet, Bowrampet and Kukatpally at your own pace.
            </p>
            <p className="text-slate-600 text-sm sm:text-base max-w-3xl mx-auto leading-relaxed">
              Bachupally is a growing north-west Hyderabad locality with road connections toward the IT corridor, Miyapur, JNTU, Nizampet and the Outer Ring Road.
            </p>
          </div>
        </header>

        {/* COVER IMAGE */}
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 -mt-6">
          <div className="rounded-2xl overflow-hidden shadow-sm border border-slate-200 bg-white">
            <Image
              src="/locationpages/bachupally.webp"
              height={2000}
              width={2000}
              className="rounded-2xl object-cover w-full max-h-[480px]"
              alt="Self drive car rental in Bachupally Hyderabad for local travel and weekend trips"
              priority
            />
          </div>
        </div>

        {/* MAIN BODY */}
        <main className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-10 space-y-8">
          {/* WHY CHOOSE A SELF-DRIVE CAR IN BACHUPALLY */}
          <SectionCard title="Explore Bachupally by Self Drive Car">
            <p className="text-slate-600 leading-relaxed text-sm sm:text-base">
              Bachupally is surrounded by residential communities, educational institutions, hospitals, lakes, temples and commercial destinations. This makes a self-drive car useful when your plan involves several stops rather than travelling to only one destination.
            </p>
            <p className="text-slate-600 leading-relaxed text-sm sm:text-base">
              The area has road connectivity toward Miyapur, Nizampet, Pragathi Nagar, Bowrampet and the ORR, while the wider Bachupally area also has access toward JNTU and the Hyderabad IT corridor.
            </p>
            <p className="text-slate-700 font-medium text-sm sm:text-base bg-slate-50 p-4 rounded-xl border border-slate-200">
              If you are planning a self drive car in Bachupally, you can create your own route instead of depending on separate rides for every destination. For example, you could start at Bachupally, visit Nizampet, continue toward Pragathi Nagar and Miyapur, and return later in the day. For a longer outing, you can extend the route toward Mallampet, the ORR or other Hyderabad destinations depending on your rental duration.
            </p>
            <div className="pt-2">
              <h3 className="text-sm font-bold text-slate-800 uppercase tracking-wide mb-3">
                Key Travel Advantages in Bachupally
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

          {/* PLACES TO VISIT AND EXPLORE AROUND BACHUPALLY */}
          <div className="space-y-4">
            <div>
              <h2 className="text-2xl font-bold text-slate-900">
                Places to Visit and Explore Around Bachupally
              </h2>
              <p className="text-slate-600 text-sm sm:text-base mt-1">
                From municipal lakes and prominent educational institutions to cultural resorts and heritage nature sites:
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

          {/* BACHUPALLY TO NEARBY PLACES - TRIP IDEAS */}
          <div className="space-y-4">
            <div>
              <h2 className="text-2xl font-bold text-slate-900">
                Bachupally to Nearby Places
              </h2>
              <p className="text-slate-600 text-sm mt-1">
                A self-drive trip can be planned around different travel purposes:
              </p>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {TRIP_IDEAS.map((idea, idx) => (
                <div key={idx} className="bg-white p-5 rounded-2xl border border-slate-200 shadow-xs space-y-2">
                  <h3 className="text-base font-bold text-slate-900">{idea.title}</h3>
                  <div className="p-2.5 bg-slate-50 rounded-lg border border-slate-200 text-xs font-semibold text-slate-800">
                    {idea.route}
                  </div>
                  <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">{idea.desc}</p>
                </div>
              ))}
            </div>
            <p className="text-xs text-slate-500 italic pt-1">
              Note: The actual travel time can vary considerably with traffic, road conditions and the time of day.
            </p>
          </div>

          {/* QUICK INFORMATION TABLE */}
          <SectionCard
            title="Long Drive Cars – Quick Information"
            subtitle="Taken directly from Long Drive Cars booking, document, and vehicle selection specifications:"
          >
            <div className="overflow-x-auto">
              <table className="w-full text-left text-xs sm:text-sm border-collapse">
                <thead>
                  <tr className="border-b border-slate-200 bg-slate-50/80 text-slate-800 font-semibold">
                    <th className="py-3 px-3">Customer Requirement</th>
                    <th className="py-3 px-3">Long Drive Cars Information</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-100 text-slate-600">
                  {QUICK_INFO.map((row, idx) => (
                    <tr key={idx} className="hover:bg-slate-50/50 transition">
                      <td className="py-3 px-3 font-medium text-slate-900">{row.req}</td>
                      <td className="py-3 px-3">{row.info}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </SectionCard>

          {/* LONG DRIVE CARS FEATURES */}
          <SectionCard
            title="Long Drive Cars Features"
            subtitle="Key advantages available for customers starting a trip from Bachupally:"
          >
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-3 pt-1">
              {LDC_FEATURES.map((feat, idx) => (
                <div key={idx} className="flex items-center gap-2.5 p-3 rounded-xl bg-slate-50 border border-slate-200 text-xs sm:text-sm font-medium text-slate-700">
                  <CheckCircle2 className="w-4 h-4 text-slate-600 shrink-0" />
                  <span>{feat}</span>
                </div>
              ))}
            </div>
          </SectionCard>

          {/* DOCUMENTS, EXACT CAR & BREAKDOWN SUPPORT */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <SectionCard title="Documents for Booking">
              <p className="text-slate-600 text-xs sm:text-sm leading-relaxed">
                For new customers, the uploaded information shows one government ID photo or passport photo along with a driving licence photo. It also states that from the second booking, old customers do not need to submit documents again.
              </p>
              <p className="text-slate-600 text-xs sm:text-sm leading-relaxed">
                Customers should verify the current requirements shown during the booking process.
              </p>
            </SectionCard>

            <SectionCard title="Exact Car and Original Photos">
              <p className="text-slate-600 text-xs sm:text-sm leading-relaxed">
                The company information highlights Exact Car Guaranteed and the ability to check original car photos in the app.
              </p>
              <p className="text-slate-600 text-xs sm:text-sm leading-relaxed">
                This helps customers understand exactly which vehicle they are selecting before completing their reservation.
              </p>
            </SectionCard>

            <SectionCard title="24/7 Breakdown Support">
              <p className="text-slate-600 text-xs sm:text-sm leading-relaxed">
                For longer trips starting from Bachupally, roadside support is an important consideration.
              </p>
              <p className="text-slate-600 text-xs sm:text-sm leading-relaxed">
                The uploaded document highlights 24/7 breakdown help with free car replacement and towing service if any vehicle problems occur.
              </p>
            </SectionCard>
          </div>

          {/* BACHUPALLY SELF DRIVE CAR BOOKING */}
          <SectionCard
            title="Bachupally Self Drive Car Booking"
            subtitle="To book, customers can use the Long Drive Cars app with 30-second booking and ₹200 hold options:"
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
              With Self Drive Car Rental in Bachupally, you can plan a flexible local outing around Bachupally Cheruvu, Pragathi Nagar Lake, Nizampet, Miyapur and Mallampet, or extend your journey toward Ameenpur, JNTU and the Hyderabad IT corridor. Bachupally’s road connections and surrounding residential, educational and recreational destinations make it a useful starting point for both short city drives and longer road trips.
            </p>
            <p className="text-slate-900 font-semibold text-sm">
              Book your car → Pick it up → Choose your route → Explore Bachupally and Hyderabad.
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