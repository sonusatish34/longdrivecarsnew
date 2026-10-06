import React from 'react';
import Head from 'next/head';
import Image from 'next/image';
import Link from 'next/link';
import {
  CheckCircle2,
  ChevronDown,
  ArrowRight,
  ShoppingBag,
  Train,
  Trees,
  Compass,
  Route,
  Navigation,
  Film,
  Building2
} from 'lucide-react';

const TARGET_URL = 'https://www.longdrivecars.com';
const CANONICAL_URL = 'https://www.longdrivecars.com/self-drive-car-rental-near-vanasthalipuram';

const HIGHLIGHTS = [
  'Residential and commercial locality positioned along the Hyderabad–Suryapet/Vijayawada (NH-65) highway corridor',
  'Close proximity to LB Nagar, LB Nagar Red Line Metro Station, Hayathnagar, and Chintalakunta',
  'Gateway for local city travel and quick getaways towards Ramoji Film City and Vijayawada highway',
  'Total freedom to plan your schedule, pick your route, and make multiple stops without cab availability issues',
  'Flexible rental features including Unlimited Kilometres, Choose Your Own Hours, and Exact Car Guaranteed'
];

const EXPLORE_PLACES = [
  {
    icon: Building2,
    title: 'LB Nagar',
    badge: 'Major Commercial Hub',
    desc: 'A major commercial and residential hub located northwest of Vanasthalipuram, bustling with shopping, transit, and business centers.',
    note: 'Convenient to combine with retail errands, appointments, and city-side travel.'
  },
  {
    icon: Train,
    title: 'LB Nagar Metro Station',
    badge: 'Red Line Terminal',
    desc: 'A prominent Hyderabad Metro Red Line station located close to Vanasthalipuram, offering seamless transit connections.',
    note: 'Ideal multi-modal starting point for commuters and family pickups.'
  },
  {
    icon: Route,
    title: 'Hayathnagar',
    badge: 'Highway Corridor',
    desc: 'A nearby locality connected directly through the Hyderabad–Suryapet highway corridor.',
    note: 'Smooth transit corridor for moving between eastern suburbs and outer belts.'
  },
  {
    icon: Navigation,
    title: 'Chintalakunta',
    badge: 'NH-65 Connection',
    desc: 'Located adjacent to Vanasthalipuram and closely connected through the primary NH-65 highway stretch.',
    note: 'Quick connection for everyday residential commutes and local commercial stops.'
  },
  {
    icon: Trees,
    title: 'Mahavir Harina Vanasthali National Park',
    badge: 'Green Landmark',
    desc: 'A prominent green-space attraction and wildlife sanctuary associated directly with the Vanasthalipuram locality.',
    note: 'Perfect for a tranquil nature visit and family morning drives.'
  },
  {
    icon: Trees,
    title: 'Rajiv Gandhi Park',
    badge: 'HMDA Park',
    desc: 'An HMDA-listed community park situated in Vanasthalipuram offering open green spaces.',
    note: 'Great for relaxing evening strolls and casual family downtime.'
  },
  {
    icon: ShoppingBag,
    title: 'Vanasthalipuram Rythu Bazar',
    badge: 'Local Market',
    desc: 'A recognized local market destination catering to the daily produce and grocery needs of the community.',
    note: 'Travel comfortably with ample trunk space for household shopping.'
  },
  {
    icon: Film,
    title: 'Sushma Theatre',
    badge: 'Local Landmark',
    desc: 'A well-known local cinema landmark located along the Vijayawada Highway corridor.',
    note: 'Easy destination to include for weekend movie runs and entertainment outings.'
  },
  {
    icon: Film,
    title: 'Ramoji Film City',
    badge: 'Major Tourist Attraction',
    desc: 'A globally renowned tourist destination comfortably reached from this side of Hyderabad along the Hyderabad–Suryapet highway.',
    note: 'Ideal for day-long weekend outings with family or groups of friends.'
  }
];

const QUICK_INFO = [
  { req: 'Want to compare different cars', info: 'Compare thousands of self-drive cars in the app' },
  { req: 'Want to book the selected vehicle', info: 'Exact Car Guaranteed' },
  { req: 'Need flexible rental timing', info: 'Choose Your Own Hours' },
  { req: 'Planning a longer journey', info: 'Unlimited Kilometres' },
  { req: 'Need support during a breakdown', info: '24/7 breakdown help with replacement and towing' }
];

const LDC_FEATURES = [
  'Exact Car Guaranteed',
  'Unlimited Kilometres',
  'Choose Your Own Hours',
  'Check original car photos in app',
  'Compare thousands of cars via app',
  '30-second quick booking option',
  'Pay ₹200 to hold your car',
  '24/7 Breakdown Help',
  'Free car replacement and towing service'
];

const FAQS = [
  {
    q: '1. Is self-drive car rental available for customers in Vanasthalipuram?',
    a: 'Customers looking for a self-drive car for travel from Vanasthalipuram can explore available cars and booking options through Long Drive Cars.'
  },
  {
    q: '2. Can I choose the exact car before booking?',
    a: 'Yes. Long Drive Cars provides an Exact Car Guaranteed feature and also allows customers to check original car photos before booking.'
  },
  {
    q: '3. Do I need to submit documents for every booking?',
    a: 'For a new customer, the specified identification and driving licence details are required. From the second booking, existing customers do not need to submit documents again according to the provided information.'
  },
  {
    q: '4. Can I use the car for a longer journey without a kilometre limit?',
    a: 'Long Drive Cars lists Unlimited Kilometres as one of its features.'
  },
  {
    q: '5. What support is available if the rental car breaks down?',
    a: 'The provided information states that 24/7 breakdown help is available, with free car replacement guaranteed and towing service.'
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

export default function VanasthalipuramGuidePage() {
  return (
    <>
      <Head>
        <title>Self Drive Car Rental near Vanasthalipuram, Hyderabad | Long Drive Cars</title>
        <meta
          name="description"
          content="Looking for self drive car rental near Vanasthalipuram, Hyderabad? Choose cars with flexible hours, unlimited km, exact car guarantee and 24/7 breakdown support."
        />
        <meta
          name="keywords"
          content="Self Drive Car Rental near Vanasthalipuram, self drive cars in Vanasthalipuram, Self driving cars in Hyderabad, Rent Self Drive Cars Hyderabad, self drive cars near Vanasthalipuram, Self Drive Cars LB Nagar"
        />
        <link rel="canonical" href={CANONICAL_URL} />
        <meta property="og:type" content="article" />
        <meta property="og:title" content="Self Drive Car Rental near Vanasthalipuram, Hyderabad | Long Drive Cars" />
        <meta
          property="og:description"
          content="Looking for self drive car rental near Vanasthalipuram, Hyderabad? Choose cars with flexible hours, unlimited km, exact car guarantee and 24/7 breakdown support."
        />
        <meta property="og:url" content={CANONICAL_URL} />
        <meta property="og:site_name" content="Long Drive Cars" />
        <meta property="og:image" content="https://www.longdrivecars.com/locationpages/vanasthalipuram.webp" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Self Drive Car Rental near Vanasthalipuram, Hyderabad | Long Drive Cars" />
        <meta
          name="twitter:description"
          content="Looking for self drive car rental near Vanasthalipuram, Hyderabad? Choose cars with flexible hours, unlimited km, exact car guarantee and 24/7 breakdown support."
        />
        <meta name="twitter:image" content="https://www.longdrivecars.com/locationpages/vanasthalipuram.webp" />
      </Head>

      <div className="min-h-screen bg-slate-50 text-slate-900 antialiased pt-24 lg:pt-0">
        {/* HEADER SECTION */}
        <header className="bg-white py-12 md:py-16 px-4 sm:px-6 lg:px-8 border-b border-slate-200">
          <div className="max-w-4xl mx-auto text-center space-y-4">
            <span className="inline-block px-3 py-1 text-xs font-semibold uppercase tracking-wider bg-slate-100 text-slate-700 rounded-full">
              Rental Guide & Travel Information
            </span>
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight text-slate-900 leading-tight">
              What Should You Know Before Booking a Self Drive Car Near Vanasthalipuram?
            </h1>
            <p className="text-slate-600 text-sm sm:text-base md:text-lg max-w-3xl mx-auto leading-relaxed">
              Self Drive Car Rental near Vanasthalipuram can be useful when you want the flexibility to travel around LB Nagar, Hayathnagar, Chintalakunta, Bairamalguda and other parts of Hyderabad without depending on fixed cab timings. Vanasthalipuram is a residential and commercial locality in the southern part of Hyderabad, situated along the Hyderabad–Suryapet/Vijayawada highway corridor.
            </p>
            <p className="text-slate-600 text-sm sm:text-base max-w-3xl mx-auto leading-relaxed">
              Whether you need a car for an office commute, family outing, shopping, airport-related travel or a weekend drive, a self-drive car lets you decide your own route, stops and travel schedule.
            </p>
          </div>
        </header>

        {/* COVER IMAGE */}
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 -mt-6">
          <div className="rounded-2xl overflow-hidden shadow-sm border border-slate-200 bg-white">
            <Image
              src="/locationpages/vanasthalipuram.webp"
              height={2000}
              width={2000}
              className="rounded-2xl object-cover w-full max-h-[480px]"
              alt="Self drive car rental near Vanasthalipuram Hyderabad for local travel and weekend trips"
              priority
            />
          </div>
        </div>

        {/* MAIN BODY */}
        <main className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-10 space-y-8">
          {/* WHY IS VANASTHALIPURAM CONVENIENT */}
          <SectionCard title="Why Is Vanasthalipuram Convenient for a Self-Drive Trip?">
            <p className="text-slate-600 leading-relaxed text-sm sm:text-base">
              Vanasthalipuram is surrounded by areas such as LB Nagar, Hayathnagar, Chintalakunta, Hastinapuram, Bairamalguda and Mansoorabad. The locality also has road connectivity towards the Hyderabad–Suryapet/Vijayawada side, making it useful as a starting point for both city travel and longer drives.
            </p>
            <p className="text-slate-600 leading-relaxed text-sm sm:text-base">
              For someone searching for self drive cars in Vanasthalipuram, the location can be practical when a journey involves multiple stops. Instead of planning every movement around cab availability, you can keep the car with you throughout the trip.
            </p>
            <div className="pt-2">
              <h3 className="text-sm font-bold text-slate-800 uppercase tracking-wide mb-3">
                Key Travel Advantages in Vanasthalipuram
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

          {/* PLACES TO EXPLORE AROUND VANASTHALIPURAM */}
          <div className="space-y-4">
            <div>
              <h2 className="text-2xl font-bold text-slate-900">Places to Explore Around Vanasthalipuram</h2>
              <p className="text-slate-600 text-sm sm:text-base mt-1">
                A self-drive trip from Vanasthalipuram can include nearby residential, commercial, recreational and transport destinations:
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
              This makes Self drive car rental in Vanasthalipuram relevant for both local travel and trips towards the eastern and southern parts of Hyderabad.
            </div>
          </div>

          {/* FAMILY, FRIENDS AND WEEKEND DRIVES */}
          <SectionCard title="Vanasthalipuram for Family, Friends and Weekend Drives">
            <p className="text-slate-600 leading-relaxed text-sm sm:text-base">
              Imagine planning a family outing where you want to combine a park, shopping stop and a meal without repeatedly arranging transportation. A self-drive car gives you the flexibility to decide when to leave, where to stop and when to return.
            </p>
            <p className="text-slate-600 leading-relaxed text-sm sm:text-base">
              For friends, the same flexibility can be useful when planning a drive towards the outskirts of Hyderabad or nearby attractions. If your plan involves multiple locations, self drive cars near Vanasthalipuram can help you keep the same vehicle throughout the journey.
            </p>
          </SectionCard>

          {/* WHAT DOES LONG DRIVE CARS OFFER */}
          <SectionCard title="What Does Long Drive Cars Offer?">
            <p className="text-slate-600 leading-relaxed text-sm sm:text-base">
              According to the Long Drive Cars information provided, customers can compare thousands of self-drive cars in the Long Drive Cars app and check original car photos before booking. The information also lists Exact Car Guaranteed.
            </p>
            <p className="text-slate-600 leading-relaxed text-sm sm:text-base">
              The company information also promotes a 30-second booking option and says customers can pay ₹200 to hold their car. For customers who want more flexibility during their journey, Long Drive Cars lists Unlimited Kilometres and Choose Your Own Hours among its features.
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
            title="Vanasthalipuram Self-Drive Booking: Quick Information"
            subtitle="Based on the specifications provided by Long Drive Cars:"
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

          {/* DOCUMENTS AND BREAKDOWN ASSISTANCE */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <SectionCard title="Documents Required for Booking">
              <p className="text-slate-600 text-xs sm:text-sm leading-relaxed">
                For a new customer, the provided Long Drive Cars information states that an identification photo or passport photo along with a driving licence photo is required. For an existing customer from the second booking, documents are not required again.
              </p>
              <p className="text-slate-600 text-xs sm:text-sm leading-relaxed">
                If you are planning to rent a self drive car in Vanasthalipuram for the first time, keeping the required documents ready can make the booking process smoother.
              </p>
            </SectionCard>

            <SectionCard title="24/7 Breakdown Support">
              <p className="text-slate-600 text-xs sm:text-sm leading-relaxed">
                Long Drive Cars' provided information highlights 24/7 breakdown help, including free car replacement and towing service.
              </p>
              <p className="text-slate-600 text-xs sm:text-sm leading-relaxed">
                This feature can be relevant for longer journeys because an unexpected vehicle problem can interrupt your travel plans. The provided company information specifically mentions replacement and towing support as part of the breakdown service.
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
              Self Drive Car Rental near Vanasthalipuram can be a practical option when you want control over your travel time, route and stops. With connections towards LB Nagar, Hayathnagar, Chintalakunta, Bairamalguda, Mansoorabad and the Hyderabad–Suryapet highway, Vanasthalipuram can work as a convenient starting point for local trips and longer drives.
            </p>
            <p className="text-slate-600 text-xs sm:text-sm max-w-2xl mx-auto leading-relaxed">
              Long Drive Cars provides features such as Exact Car Guaranteed, Unlimited Kilometres, Choose Your Own Hours, original car photos, quick booking and 24/7 breakdown support, based on the supplied company information.
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