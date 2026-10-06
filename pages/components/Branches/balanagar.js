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
  ShieldCheck,
  Wrench,
  Sparkles
} from 'lucide-react';

const TARGET_URL = 'https://www.longdrivecars.com';
const CANONICAL_URL = 'https://www.longdrivecars.com/self-drive-car-rental-near-balanagar';

const HIGHLIGHTS = [
  'North-west Hyderabad locality with residential and industrial character, plus strong road and metro connectivity',
  'Direct access to Balanagar Metro station on the Red Line, linking to Moosapet and greater Hyderabad',
  'Close proximity to IDL Lake, Exhibition Grounds, Metro Cash & Carry, and local temples',
  'Seamless travel across Kukatpally, Moosapet, Bowenpally, Sanath Nagar, and Jeedimetla in one vehicle',
  'Total freedom to decide departure time, choose routes, and make multiple stops without fixed public transport timings'
];

const EXPLORE_PLACES = [
  {
    icon: Waves,
    title: 'IDL Lake',
    badge: 'Scenic Waterfront',
    desc: 'IDL Lake is one of the landmarks listed around the Balanagar Metro station. It can be included in a relaxed local drive, especially when you want to combine nearby areas rather than travel to a single destination.',
    note: 'Ideal for an easy-going morning or evening drive as part of a multi-stop itinerary.'
  },
  {
    icon: Landmark,
    title: 'Exhibition Grounds',
    badge: 'Events & Civic Landmark',
    desc: 'The Exhibition Grounds is another listed landmark around Balanagar. A self-drive car can make it easier to include the area along with other north-west Hyderabad destinations in the same outing.',
    note: 'Great starting or transit point for events and local visits in the northern corridor.'
  },
  {
    icon: Landmark,
    title: 'Sri Prasanna Venkateshwara Swamy Vari Devasthanam',
    badge: 'Religious Landmark',
    desc: 'For a religious outing, Sri Prasanna Venkateshwara Swamy Vari Devasthanam is among the landmarks identified around the Balanagar Metro area.',
    note: 'Convenient to combine with family temple visits and local dining without rushing.'
  },
  {
    icon: ShoppingBag,
    title: 'Kukatpally',
    badge: 'Retail & Dining Hub',
    desc: 'Kukatpally is one of the major nearby localities connected with Balanagar. You can combine a drive through Balanagar with shopping, food and entertainment around Kukatpally. The Balanagar area is connected toward Kukatpally through its main road network.',
    note: 'Perfect for shopping sprees, family dinners, and entertainment runs without coordinating cabs.'
  },
  {
    icon: Navigation,
    title: 'Moosapet',
    badge: 'Red Line Corridor',
    desc: 'Moosapet is another nearby destination that can be easily included in a north-west Hyderabad driving plan. The Moosapet and Balanagar metro stations are both on Hyderabad Metro’s Red Line.',
    note: 'Allows smooth transitions between commercial spots, wholesale hubs, and residential zones.'
  },
  {
    icon: Route,
    title: 'Bowenpally and Sanath Nagar',
    badge: 'Neighbouring Hubs',
    desc: 'For a longer local drive, you can continue from Balanagar toward Bowenpally and Sanath Nagar. These neighbouring areas provide additional options for shopping, food, work-related visits and city exploration.',
    note: 'Easily extend your route across north-west Hyderabad for commercial errands and visits.'
  }
];

const CUSTOMER_TABLE = [
  { need: 'Want to compare cars', info: 'Compare thousands of self-drive cars in the app' },
  { need: 'Want to reserve a car', info: 'Pay ₹200 to hold your car' },
  { need: 'Need a quick booking', info: '30-second booking option is promoted' },
  { need: 'First-time customer', info: 'Submit required ID and driving licence details' },
  { need: 'Returning customer', info: 'Old customers don’t need to submit documents again from the second booking' }
];

const LDC_FEATURES = [
  'Choose Your Own Hours',
  'Unlimited Kilometres',
  'Exact Car Guaranteed',
  'Original Car Photos',
  'Compare thousands of self-drive cars in the app',
  'Zero Deposit option available',
  '₹200 option to hold your car',
  '24/7 Breakdown Help',
  'Free car replacement and towing service',
  'Free toll on National Highways'
];

const BOOKING_STEPS = [
  'Open the Long Drive Cars app and select your preferred dates and hours.',
  'Compare available vehicles across 5-seater and 7-seater categories.',
  'Check the original car photos directly in the app.',
  'Select your preferred car model with Exact Car Guaranteed.',
  'Optionally pay ₹200 to hold your car and complete the 30-second booking.',
  'Book → pick up → drive → explore.'
];

const FAQS = [
  {
    q: '1. Can I choose my own rental hours?',
    a: 'Yes. The document highlights "Choose Your Own Hours", allowing customers to select their preferred rental duration.'
  },
  {
    q: '2. Does Long Drive Cars offer unlimited kilometres?',
    a: 'Yes. Unlimited Kilometres is listed as one of the rental features in the document.'
  },
  {
    q: '3. Can I get the exact car I selected?',
    a: 'The document highlights "Exact Car Guaranteed" as a feature.'
  },
  {
    q: '4. Is a zero-deposit option available?',
    a: 'Yes. The document states that a Zero Deposit option is available.'
  },
  {
    q: '5. What support is available if the car breaks down?',
    a: 'The document highlights 24/7 breakdown help, along with free car replacement and towing service.'
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
        <title>Self Drive Car Rental near Balanagar, Hyderabad | Long Drive Cars</title>
        <meta
          name="description"
          content="Looking for self drive car rental near Balanagar, Hyderabad? Choose 5-seater & 7-seater cars with flexible hours, unlimited km and zero deposit."
        />
        <meta
          name="keywords"
          content="Self Drive Car Rental near Balanagar, self drive cars in Balanagar, Self driving cars in Hyderabad, Rent Self Drive Cars Hyderabad, self drive cars near Balanagar, Self Drive Cars Secunderabad"
        />
        <link rel="canonical" href={CANONICAL_URL} />
        <meta property="og:type" content="article" />
        <meta property="og:title" content="Self Drive Car Rental near Balanagar, Hyderabad | Long Drive Cars" />
        <meta
          property="og:description"
          content="Looking for self drive car rental near Balanagar, Hyderabad? Choose 5-seater & 7-seater cars with flexible hours, unlimited km and zero deposit."
        />
        <meta property="og:url" content={CANONICAL_URL} />
        <meta property="og:site_name" content="Long Drive Cars" />
        <meta property="og:image" content="https://www.longdrivecars.com/locationpages/balanagar.webp" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Self Drive Car Rental near Balanagar, Hyderabad | Long Drive Cars" />
        <meta
          name="twitter:description"
          content="Looking for self drive car rental near Balanagar, Hyderabad? Choose 5-seater & 7-seater cars with flexible hours, unlimited km and zero deposit."
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
              How Easy Is It to Get a Self Drive Car Near Balanagar?
            </h1>
            <p className="text-slate-600 text-sm sm:text-base md:text-lg max-w-3xl mx-auto leading-relaxed">
              Self Drive Car Rental near Balanagar can be a convenient option when you want to explore Balanagar, Kukatpally, Moosapet, IDPL Colony, Bowenpally and nearby parts of Hyderabad on your own schedule. Balanagar is a north-west Hyderabad locality known for its residential and industrial character, with good road and metro connectivity.
            </p>
            <p className="text-slate-600 text-sm sm:text-base max-w-3xl mx-auto leading-relaxed">
              The Balanagar Metro area also provides access to nearby landmarks such as IDL Lake, Exhibition Grounds, Metro Cash & Carry, Sri Prasanna Venkateshwara Swamy Vari Devasthanam and NKNR Gardens.
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
              alt="Self drive car rental near Balanagar Hyderabad for local travel and weekend trips"
              priority
            />
          </div>
        </div>

        {/* MAIN BODY */}
        <main className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-10 space-y-8">
          {/* WHY CHOOSE A SELF-DRIVE CAR IN BALANAGAR */}
          <SectionCard title="Why Choose a Self Drive Car for a Balanagar Trip?">
            <p className="text-slate-600 leading-relaxed text-sm sm:text-base">
              For people looking for Self drive car rental in Balanagar, choosing a self-drive vehicle can be useful when the day’s plan includes several stops. You can decide your departure time, select your preferred vehicle and change your route according to your plans instead of depending on fixed transport timings.
            </p>
            <p className="text-slate-700 font-medium text-sm sm:text-base bg-slate-50 p-4 rounded-xl border border-slate-200">
              The Long Drive Cars information document highlights Choose Your Own Hours and Unlimited Kilometres, which can be useful for both short local drives and longer road trips.
            </p>
            <div className="pt-2">
              <h3 className="text-sm font-bold text-slate-800 uppercase tracking-wide mb-3">
                Key Travel Advantages in Balanagar
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

          {/* EXPLORE BALANAGAR AND NEARBY PLACES BY CAR */}
          <div className="space-y-4">
            <div>
              <h2 className="text-2xl font-bold text-slate-900">Explore Balanagar and Nearby Places by Car</h2>
              <p className="text-slate-600 text-sm sm:text-base mt-1">
                If you are searching for self drive cars in Balanagar, you can plan a short city outing or a longer Hyderabad drive depending on your available time. Balanagar connects with places such as Kukatpally, Moosapet, Bowenpally, Sanath Nagar and Jeedimetla, making it possible to combine several destinations in one trip.
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

          {/* BOOKING & CUSTOMER INFORMATION TABLE */}
          <SectionCard
            title="Long Drive Cars – Booking & Customer Information"
            subtitle="Transparent and convenient booking features matched to customer needs:"
          >
            <div className="overflow-x-auto">
              <table className="w-full text-left text-xs sm:text-sm border-collapse">
                <thead>
                  <tr className="border-b border-slate-200 bg-slate-50/80 text-slate-800 font-semibold">
                    <th className="py-3 px-3">Customer Need</th>
                    <th className="py-3 px-3">Long Drive Cars Information</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-100 text-slate-600">
                  {CUSTOMER_TABLE.map((row, idx) => (
                    <tr key={idx} className="hover:bg-slate-50/50 transition">
                      <td className="py-3 px-3 font-medium text-slate-900">{row.need}</td>
                      <td className="py-3 px-3">{row.info}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </SectionCard>

          {/* CHOOSE THE CAR YOU WANT */}
          <SectionCard title="Choose the Car You Want">
            <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
              If you are looking for self drive cars near Balanagar, Long Drive Cars provides different vehicle categories, including 5-seater and 7-seater collections. The uploaded information also highlights Exact Car Guaranteed, allowing customers to select from available vehicles rather than simply choosing a general car category.
            </p>
            <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
              The company information also promotes checking original car photos in the app, allowing customers to see vehicle images before booking.
            </p>
          </SectionCard>

          {/* FEATURES THAT MAKE YOUR DRIVE EASIER */}
          <SectionCard
            title="Features That Make Your Drive Easier"
            subtitle="Long Drive Cars’ uploaded information highlights several features that can be useful when planning a drive from Balanagar:"
          >
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-1">
              {LDC_FEATURES.map((feat, idx) => (
                <div key={idx} className="flex items-center gap-2.5 p-3 rounded-xl bg-slate-50 border border-slate-200 text-xs sm:text-sm font-medium text-slate-700">
                  <CheckCircle2 className="w-4 h-4 text-slate-600 shrink-0" />
                  <span>{feat}</span>
                </div>
              ))}
            </div>
          </SectionCard>

          {/* DOCUMENTS, ZERO HEADACHE PASS & BREAKDOWN DUAL/TRIPLE SECTION */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <SectionCard title="Documents for Booking">
              <p className="text-slate-600 text-xs sm:text-sm leading-relaxed">
                The uploaded information states that a new customer can provide one government ID photo or passport photo along with a driving licence photo. It also states that from the second booking, old customers do not need to submit documents again.
              </p>
              <p className="text-slate-600 text-xs sm:text-sm leading-relaxed">
                Customers should check the current requirements shown during booking because applicable requirements can vary.
              </p>
            </SectionCard>

            <SectionCard title="Zero Headache Pass">
              <p className="text-slate-600 text-xs sm:text-sm leading-relaxed">
                For customers concerned about minor scratches or damages, the uploaded Long Drive Cars information presents a Zero Headache Pass with zero payment for eligible scratches and damages below the applicable limit.
              </p>
              <p className="text-slate-600 text-xs sm:text-sm leading-relaxed">
                The document shows coverage information associated with the plan, so customers should check the current terms before booking.
              </p>
            </SectionCard>

            <SectionCard title="24/7 Breakdown Support">
              <p className="text-slate-600 text-xs sm:text-sm leading-relaxed">
                A road trip does not always go exactly as planned. Long Drive Cars’ information highlights 24/7 breakdown help, free car replacement and towing service for customers who experience vehicle problems during their rental.
              </p>
            </SectionCard>
          </div>

          {/* PLAN A DRIVE FROM BALANAGAR */}
          <SectionCard title="Plan a Drive From Balanagar">
            <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
              A simple local itinerary could start with Balanagar → IDL Lake → Moosapet → Kukatpally → return to Balanagar. For a longer city outing, you can extend the drive toward Sanath Nagar, Bowenpally or other Hyderabad destinations depending on your available rental period.
            </p>
            <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
              Because Balanagar is connected to several major roads and neighbouring localities, it can also work as a starting point for longer drives beyond the immediate neighbourhood.
            </p>
          </SectionCard>

          {/* HOW TO BOOK */}
          <SectionCard
            title="How to Book"
            subtitle="The uploaded information promotes a simple 30-second booking process with car comparison through the app and the option to pay ₹200 to hold a selected car:"
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

          {/* CONCLUSION & CTA */}
          <section className="bg-white border border-slate-200 rounded-2xl p-8 sm:p-10 text-center space-y-4 shadow-xs">
            <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900">
              Conclusion
            </h2>
            <p className="text-slate-600 text-xs sm:text-sm max-w-2xl mx-auto leading-relaxed">
              Planning Self Drive Car Rental near Balanagar gives you the flexibility to explore local landmarks such as IDL Lake and Exhibition Grounds while also connecting with Kukatpally, Moosapet, Bowenpally and Sanath Nagar. With features such as flexible hours, unlimited kilometres, vehicle selection, original car photos and 24/7 breakdown support highlighted by Long Drive Cars, you can plan your Balanagar drive around your own schedule.
            </p>
            <p className="text-slate-900 font-semibold text-sm">
              Book → pick up → drive → explore.
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