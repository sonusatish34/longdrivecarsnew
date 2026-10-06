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
  Plane,
  Building2,
  Compass,
  Route,
  Navigation,
  Clock,
  Car
} from 'lucide-react';

const TARGET_URL = 'https://www.longdrivecars.com';
const CANONICAL_URL = 'https://www.longdrivecars.com/self-drive-car-rental-in-bowenpally';

const HIGHLIGHTS = [
  'Well-connected Secunderabad locality linking Old Bowenpally & New Bowenpally',
  'Direct connectivity towards NH-44, NH-7, NH-9, Balanagar, Tadbund, and Trimulgherry',
  'Convenient gateway for both intra-city multi-stop errands and highway road trips',
  'Decide your own departure time, route, and duration without depending on fixed cab schedules',
  'Eliminates the cost and delays of arranging separate rides across North and Central Hyderabad'
];

const EXPLORE_PLACES = [
  {
    icon: Navigation,
    title: 'Tadbund',
    badge: 'Connecting Locality',
    desc: 'Tadbund is a nearby locality and an important connecting area right beside Bowenpally.',
    note: 'Convenient transit zone linking local commercial markets and central routes.'
  },
  {
    icon: Compass,
    title: 'Trimulgherry',
    badge: 'Eastern Secunderabad Link',
    desc: 'Located towards the eastern side of Bowenpally, Trimulgherry offers established residential and shopping spots.',
    note: 'Effortlessly combine shopping, errands, and family visits in a single drive.'
  },
  {
    icon: Route,
    title: 'Alwal',
    badge: 'Residential & Commercial Area',
    desc: 'Alwal is a vibrant nearby locality easily accessible along the northern suburban corridor.',
    note: 'Ideal for local visits, errands, and connecting onward to northern suburbs.'
  },
  {
    icon: Building2,
    title: 'Balanagar',
    badge: 'Industrial & Highway Link',
    desc: 'Connected directly from New Bowenpally through the Balanagar Road corridor.',
    note: 'Seamlessly transition between Bowenpally and north-west Hyderabad business pockets.'
  },
  {
    icon: Train,
    title: 'Secunderabad Railway Station',
    badge: 'Major Transit Hub',
    desc: 'An important transit landmark located near Old Bowenpally, connecting major national rail networks.',
    note: 'Pick up or drop off traveling relatives with complete control over baggage and timing.'
  },
  {
    icon: Plane,
    title: 'Begumpet Airport / Old Airport',
    badge: 'Aviation Landmark',
    desc: 'Located southwest of Bowenpally, Begumpet Airport remains a landmark anchor in the area.',
    note: 'Convenient geographic reference point connecting smoothly toward central city corridors.'
  },
  {
    icon: Building2,
    title: 'Spanish Mosque',
    badge: 'Heritage Architecture',
    desc: 'A notable architectural landmark situated in the nearby Begumpet area.',
    note: 'Great addition for culture and heritage exploration across the Secunderabad belt.'
  },
  {
    icon: ShoppingBag,
    title: 'Bowenpally Market Yard',
    badge: 'Local Commercial Centre',
    desc: 'A prominent and recognized commercial destination within the local Bowenpally region.',
    note: 'Handle bulk family shopping and wholesale runs with plenty of boot space.'
  }
];

const QUICK_INFO = [
  { req: 'Want to compare cars', info: 'Compare thousands of self-drive cars in the app' },
  { req: 'Want the exact vehicle', info: 'Exact Car Guaranteed' },
  { req: 'Need flexible timing', info: 'Choose Your Own Hours' },
  { req: 'Planning a longer drive', info: 'Unlimited Kilometres' },
  { req: 'Need help during a breakdown', info: '24/7 breakdown help with replacement and towing' }
];

const LDC_FEATURES = [
  'Exact Car Guaranteed',
  'Unlimited Kilometres',
  'Choose Your Own Hours',
  'Original Car Photos in the app',
  '30-second quick booking option',
  'Pay ₹200 to hold your selected car',
  '24/7 Breakdown Help',
  'Free car replacement guaranteed',
  'Towing service included'
];

const FAQS = [
  {
    q: '1. Is self-drive car rental available for customers in Bowenpally?',
    a: 'Yes. Customers looking for a self-drive car for travel from Bowenpally can explore available cars and booking options through Long Drive Cars.'
  },
  {
    q: '2. Can I choose the exact car before booking?',
    a: 'Long Drive Cars provides an Exact Car Guaranteed feature and also allows customers to check original car photos before booking.'
  },
  {
    q: '3. Do I need to submit documents for every booking?',
    a: 'For a new customer, the specified identification and driving licence details are required. From the second booking, existing customers do not need to submit documents again according to the provided information.'
  },
  {
    q: '4. Can I drive without worrying about kilometre limits?',
    a: 'Long Drive Cars lists Unlimited Kilometres as one of its features.'
  },
  {
    q: '5. What support is available if the car breaks down?',
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

export default function BowenpallyGuidePage() {
  return (
    <>
      <Head>
        <title>Self Drive Car Rental in Bowenpally, Hyderabad | Long Drive Cars</title>
        <meta
          name="description"
          content="Looking for self drive car rental in Bowenpally, Hyderabad? Choose cars with flexible hours, unlimited km, exact car guarantee and 24/7 breakdown support."
        />
        <meta
          name="keywords"
          content="Self Drive Car Rental in Bowenpally, self drive cars in Bowenpally, Self driving cars in Hyderabad, Rent Self Drive Cars Hyderabad, self drive cars near Bowenpally, Self Drive Cars Secunderabad"
        />
        <link rel="canonical" href={CANONICAL_URL} />
        <meta property="og:type" content="article" />
        <meta property="og:title" content="Self Drive Car Rental in Bowenpally, Hyderabad | Long Drive Cars" />
        <meta
          property="og:description"
          content="Looking for self drive car rental in Bowenpally, Hyderabad? Choose cars with flexible hours, unlimited km, exact car guarantee and 24/7 breakdown support."
        />
        <meta property="og:url" content={CANONICAL_URL} />
        <meta property="og:site_name" content="Long Drive Cars" />
        <meta property="og:image" content="https://www.longdrivecars.com/locationpages/bowenpally.webp" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Self Drive Car Rental in Bowenpally, Hyderabad | Long Drive Cars" />
        <meta
          name="twitter:description"
          content="Looking for self drive car rental in Bowenpally, Hyderabad? Choose cars with flexible hours, unlimited km, exact car guarantee and 24/7 breakdown support."
        />
        <meta name="twitter:image" content="https://www.longdrivecars.com/locationpages/bowenpally.webp" />
      </Head>

      <div className="min-h-screen bg-slate-50 text-slate-900 antialiased pt-24 lg:pt-0">
        {/* HEADER SECTION */}
        <header className="bg-white py-12 md:py-16 px-4 sm:px-6 lg:px-8 border-b border-slate-200">
          <div className="max-w-4xl mx-auto text-center space-y-4">
            <span className="inline-block px-3 py-1 text-xs font-semibold uppercase tracking-wider bg-slate-100 text-slate-700 rounded-full">
              Rental Guide & Travel Information
            </span>
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight text-slate-900 leading-tight">
              What Self Drive Car Options Can You Find Around Bowenpally?
            </h1>
            <p className="text-slate-600 text-sm sm:text-base md:text-lg max-w-3xl mx-auto leading-relaxed">
              Self Drive Car Rental in Bowenpally can be useful when you want the flexibility to travel around Secunderabad, Hyderabad and nearby areas without depending on fixed cab timings. Bowenpally is a well-connected locality in the Secunderabad region, with connections towards NH-44, NH-7 and NH-9, along with routes towards Balanagar, Tadbund, Trimulgherry, Alwal and other parts of the city.
            </p>
            <p className="text-slate-600 text-sm sm:text-base max-w-3xl mx-auto leading-relaxed">
              Whether you need a car for an office commute, family outing, shopping, airport-related travel or a weekend drive, having a self-drive vehicle allows you to decide your own route and timing.
            </p>
          </div>
        </header>

        {/* COVER IMAGE */}
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 -mt-6">
          <div className="rounded-2xl overflow-hidden shadow-sm border border-slate-200 bg-white">
            <Image
              src="/locationpages/bowenpally.webp"
              height={2000}
              width={2000}
              className="rounded-2xl object-cover w-full max-h-[480px]"
              alt="Self drive car rental in Bowenpally Hyderabad for local travel and weekend trips"
              priority
            />
          </div>
        </div>

        {/* MAIN BODY */}
        <main className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-10 space-y-8">
          {/* WHY IS BOWENPALLY CONVENIENT */}
          <SectionCard title="Why Is Bowenpally Convenient for a Self-Drive Trip?">
            <p className="text-slate-600 leading-relaxed text-sm sm:text-base">
              Bowenpally connects several important parts of Hyderabad and Secunderabad. Old Bowenpally and New Bowenpally form the main parts of the locality, while nearby areas include Tadbund, Tirumalagiri, Alwal, Balanagar and Trimulgherry. The locality also connects towards major highways, making it suitable as a starting point for both city and longer-distance drives.
            </p>
            <p className="text-slate-600 leading-relaxed text-sm sm:text-base">
              For someone searching for self drive cars in Bowenpally, the location can be practical when the trip involves multiple stops rather than travelling directly from one point to another.
            </p>
            <div className="pt-2">
              <h3 className="text-sm font-bold text-slate-800 uppercase tracking-wide mb-3">
                Key Travel Advantages in Bowenpally
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

          {/* PLACES TO EXPLORE AROUND BOWENPALLY */}
          <div className="space-y-4">
            <div>
              <h2 className="text-2xl font-bold text-slate-900">Places to Explore Around Bowenpally</h2>
              <p className="text-slate-600 text-sm sm:text-base mt-1">
                One advantage of starting a drive from Bowenpally is that several familiar Hyderabad and Secunderabad locations can be reached through connected local roads:
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
              This makes Self drive car rental in Bowenpally relevant not only for travelling within the locality but also for moving between different parts of North and Central Hyderabad.
            </div>
          </div>

          {/* FAMILY, FRIENDS AND WEEKEND DRIVES */}
          <SectionCard title="Bowenpally for Family, Friends and Weekend Drives">
            <p className="text-slate-600 leading-relaxed text-sm sm:text-base">
              Imagine planning a family outing where you want to visit a few places in Secunderabad and return home without worrying about cab availability. A self-drive car gives you the freedom to decide when to start, where to stop and when to return.
            </p>
            <p className="text-slate-600 leading-relaxed text-sm sm:text-base">
              For friends, the same flexibility can be useful for a city drive or a longer trip outside Hyderabad. If your plan involves several locations, self drive cars near Bowenpally can make the journey more flexible because you control the travel schedule.
            </p>
          </SectionCard>

          {/* WHAT DOES LONG DRIVE CARS OFFER */}
          <SectionCard title="What Does Long Drive Cars Offer?">
            <p className="text-slate-600 leading-relaxed text-sm sm:text-base">
              According to the Long Drive Cars information provided, customers can compare thousands of self-drive cars through the Long Drive Cars app and check original car photos before booking. The company also promotes Exact Car Guaranteed, allowing customers to book the specific car they select.
            </p>
            <p className="text-slate-600 leading-relaxed text-sm sm:text-base">
              The booking process is designed to be quick, with a 30-second booking option and the ability to pay ₹200 to hold the selected car.
            </p>
            <p className="text-slate-700 font-medium text-sm sm:text-base bg-slate-50 p-4 rounded-xl border border-slate-200">
              Long Drive Cars also provides Unlimited Kilometres and allows customers to Choose Your Own Hours, which can be useful when the travel schedule is not fixed.
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
            title="Bowenpally Self-Drive Booking: Quick Information"
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
                If you are planning to rent a self drive car in Bowenpally for the first time, keeping the required documents ready can make the booking process smoother.
              </p>
            </SectionCard>

            <SectionCard title="24/7 Breakdown Support">
              <p className="text-slate-600 text-xs sm:text-sm leading-relaxed">
                Long Drive Cars' information also highlights 24/7 breakdown help, including free car replacement and towing service.
              </p>
              <p className="text-slate-600 text-xs sm:text-sm leading-relaxed">
                This can be particularly relevant when travelling longer distances because unexpected vehicle problems can affect your journey. Having breakdown assistance available provides a defined support option during the rental.
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
              Self Drive Car Rental in Bowenpally can be a convenient option when you want control over your travel time, route and stops. With Bowenpally's connections towards Tadbund, Trimulgherry, Alwal, Balanagar, Secunderabad and major highway routes, a self-drive car can be used for both local travel and longer journeys.
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