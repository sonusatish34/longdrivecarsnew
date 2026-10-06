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
  Route,
  Navigation,
  Compass,
  GraduationCap,
  ShieldCheck,
  Wrench,
  Sparkles,
  Waves,
  MapPin
} from 'lucide-react';

const TARGET_URL = 'https://www.longdrivecars.com';
const CANONICAL_URL = 'https://www.longdrivecars.com/self-drive-car-rental-in-dilsukhnagar';

const HIGHLIGHTS = [
  'Directly located along NH 65 connecting Kothapet, Chaitanyapuri, Moosarambagh, Saroornagar, and LB Nagar',
  'Served by Dilsukhnagar Metro Station on Hyderabad Metro Red Line with connections towards Moosarambagh & LB Nagar',
  'Seamless multi-stop travel across major retail hubs, college campuses, and healthcare centers in one car',
  'Total flexibility to choose your own route, timing, and stops without depending on cab cancellations',
  'Eliminates the hassle, surge pricing, and delays of booking separate rides for every stop'
];

const NOTABLE_PLACES = [
  'Dilsukhnagar Metro Station',
  'Dilsukhnagar Bus Depot',
  'Kothapet',
  'Chaitanyapuri',
  'Saroornagar',
  'Saroornagar Lake',
  'Moosarambagh',
  'Gaddiannaram',
  'LB Nagar',
  'Kothapet Fruit Market',
  'Sai Baba Temple',
  'CMR Shopping Mall'
];

const EXPLORE_PLACES = [
  {
    icon: Compass,
    title: 'What Makes Dilsukhnagar a Convenient Starting Point?',
    badge: 'Red Line Corridor',
    desc: 'Dilsukhnagar is positioned along an important eastern Hyderabad travel corridor. NH 65, Saroor Nagar Road, Moosarambagh Road and other connecting roads provide access to surrounding areas. The area also has Dilsukhnagar Metro Station on the Red Line, with nearby connections towards Moosarambagh, Chaitanyapuri and LB Nagar.',
    note: 'For a person using a rental car, this means a single journey can cover several destinations without repeatedly arranging transportation. For example: Dilsukhnagar → Kothapet → Saroornagar → Chaitanyapuri → Dilsukhnagar.'
  },
  {
    icon: ShoppingBag,
    title: 'Can You Travel from Dilsukhnagar to Kothapet?',
    badge: 'Commercial Hub',
    desc: 'Yes. Kothapet is one of the important nearby commercial areas. The Chaitanyapuri Metro Station is located on Dilsukh Nagar Main Road in Kothapet and provides another important reference point for the surrounding neighbourhood.',
    note: 'A self drive car rental in Dilsukhnagar can be useful when your plans involve shopping, restaurants, appointments or visiting different locations around Kothapet.'
  },
  {
    icon: Waves,
    title: 'Can You Visit Saroornagar from Dilsukhnagar?',
    badge: 'Lake & Residential Hub',
    desc: 'Yes. Saroornagar is closely associated with the Dilsukhnagar area and is accessible through the surrounding road network. Saroornagar Lake is one of the notable landmarks around the locality. Other nearby destinations include Saroornagar Police Station, educational institutions and local shopping areas.',
    note: 'If you are travelling with family or friends, a self-drive car can make it easier to combine Saroornagar with Dilsukhnagar, Kothapet and Chaitanyapuri in one day.'
  },
  {
    icon: Train,
    title: 'Can You Drive from Dilsukhnagar to Chaitanyapuri?',
    badge: 'Direct Transit Link',
    desc: 'Yes. Dilsukhnagar and Chaitanyapuri are connected on Hyderabad Metro’s Red Line, and the two areas are also connected through Dilsukh Nagar Main Road. The Chaitanyapuri area includes landmarks such as the Fruit Market, Saroor Nagar Arch and nearby hospitals and educational institutions.',
    note: 'This makes the route useful for people travelling for shopping, education, appointments or personal visits.'
  },
  {
    icon: Navigation,
    title: 'Can You Travel from Dilsukhnagar Towards LB Nagar?',
    badge: 'Southeastern Corridor',
    desc: 'Yes. LB Nagar is one of the important destinations towards the southeastern side of Hyderabad. Dilsukhnagar Metro Station’s Red Line continues towards Chaitanyapuri and LB Nagar, making this an established travel corridor.',
    note: 'A rental car can be useful when your journey involves several stops rather than simply travelling from Dilsukhnagar to one destination.'
  },
  {
    icon: Route,
    title: 'Can You Visit Moosarambagh from Dilsukhnagar?',
    badge: 'Urban Connect',
    desc: 'Yes. Moosarambagh is another nearby area connected with the Dilsukhnagar corridor. This can be convenient for office work, shopping, family visits or other personal travel.',
    note: 'A possible local journey could be: Dilsukhnagar → Moosarambagh → Malakpet → Dilsukhnagar.'
  },
  {
    icon: MapPin,
    title: 'What Are the Famous Local Landmarks Around Dilsukhnagar?',
    badge: 'Civic & Retail Landmarks',
    desc: 'Dilsukhnagar itself has several recognisable local landmarks. The official metro station information lists Dilsukhnagar Bus Depot, Sai Baba Temple, Rajadhani 70MM Theatre and CMR Shopping Mall around the station. The wider area also connects to Saroornagar Lake, Kothapet Fruit Market, Chaitanyapuri and Moosarambagh.',
    note: 'This makes Dilsukhnagar a useful starting point for exploring several eastern and southeastern parts of Hyderabad.'
  }
];

const FLEET_OPTIONS = [
  { requirement: 'Daily city travel', carType: 'Hatchback', why: 'Compact for local travel' },
  { requirement: 'Couple outing', carType: 'Hatchback / Sedan', why: 'Comfortable for short and medium trips' },
  { requirement: 'Family outing', carType: 'Sedan / SUV', why: 'More cabin and luggage space' },
  { requirement: 'Airport travel', carType: 'Sedan / SUV', why: 'Useful with luggage' },
  { requirement: 'Friends travelling together', carType: 'SUV / 7-seater', why: 'More passenger capacity' },
  { requirement: 'Weekend road trip', carType: 'SUV / MUV', why: 'Suitable for longer drives' },
  { requirement: 'Long journey with luggage', carType: '7-seater / Large SUV', why: 'More passenger and luggage space' }
];

const SITUATIONS = [
  { title: 'Office travel', desc: 'Travel between Dilsukhnagar, Kothapet, Saroornagar, LB Nagar and other business areas without arranging multiple rides.' },
  { title: 'Shopping trips', desc: 'Visit Dilsukhnagar’s commercial areas, Kothapet and nearby shopping destinations and return according to your own schedule.' },
  { title: 'Family outings', desc: 'A sedan or SUV can provide additional space when travelling with parents, children or relatives.' },
  { title: 'College visits', desc: 'Dilsukhnagar and surrounding areas have several educational institutions, making flexible transportation useful for students and parents.' },
  { title: 'Airport travel', desc: 'A sedan or SUV can be convenient when travelling with passengers and luggage.' },
  { title: 'Weekend drives', desc: 'Start from Dilsukhnagar and continue towards destinations outside the immediate neighbourhood.' },
  { title: 'Personal vehicle unavailable', desc: 'A rental car can provide a temporary transportation option when your own vehicle is unavailable.' }
];

const PRICING_FEATURES = [
  { title: 'Starting from ₹999 / 6 hrs', desc: 'Cars starting at ₹999 for 6 hours and ₹1,992 for 24 hours, subject to applicable vehicle and booking conditions.' },
  { title: 'Choose Your Own Hours', desc: 'Reserve flexible hourly and daily slots matched to your schedule.' },
  { title: 'Unlimited Kilometres', desc: 'Drive freely across Hyderabad and highway corridors without extra distance charges.' },
  { title: 'Zero Deposit Option', desc: 'Zero Deposit option available to reserve your preferred vehicle easily.' },
  { title: 'Just Pay ₹200 to Hold', desc: 'Lock in your vehicle ahead of time with a minimal ₹200 hold advance.' },
  { title: 'Lowest Prices Guaranteed', desc: 'Transparent, competitive rates guaranteed across the full self-drive fleet.' },
  { title: 'Compare Thousands of Cars', desc: 'Browse and compare thousands of self-drive vehicles directly via the app.' }
];

const PROTECTION_FEATURES = [
  { title: 'No Documents for Old Customers', desc: 'Existing customers enjoy instant bookings without re-submitting documentation, subject to verification conditions.' },
  { title: 'Zero Headache Pass', desc: 'Protection against minor scratches and damages up to ₹10,000 without additional payment, subject to pass terms.' },
  { title: 'Free Toll Gates', desc: 'Enjoy free toll passage across national highways, subject to applicable terms.' },
  { title: 'Exact Car Guaranteed', desc: 'Receive the exact vehicle model and specifications shown during booking.' },
  { title: '30-Second Booking', desc: 'Fast, hassle-free digital checkout process designed for quick reservations.' }
];

const ON_ROAD_SUPPORT = [
  { title: '24/7 Breakdown Assistance', desc: 'Immediate round-the-clock roadside assistance wherever you are traveling.' },
  { title: 'Free Car Replacement Guarantee', desc: 'Prompt replacement car provided if mechanical issues arise, subject to conditions.' },
  { title: 'Towing Service Included', desc: 'Full towing and recovery dispatch on standby for complete travel security.' }
];

const BOOKING_STEPS = [
  'Open the Long Drive Cars App.',
  'Compare the available self-drive cars.',
  'Select your preferred vehicle.',
  'Choose your rental hours.',
  'Review the vehicle and booking information.',
  'Pay the applicable amount to hold the car.',
  'Complete the required verification.',
  'Follow the pickup instructions.',
  'Pick up your car and drive.'
];

const FAQS = [
  {
    q: 'Can I book a self-drive car in Dilsukhnagar for a family outing?',
    a: 'Yes. You can choose a vehicle according to your passengers, luggage and rental duration. Hatchbacks, sedans, SUVs and 7-seater options can be considered depending on availability.'
  },
  {
    q: 'What documents are required to rent a self-drive car in Dilsukhnagar?',
    a: 'The applicable verification process depends on the customer and booking. Long Drive Cars states that existing customers may have access to a no-documents-required option, subject to applicable verification conditions.'
  },
  {
    q: 'Can I take a self-drive rental car from Dilsukhnagar for an outstation trip?',
    a: 'This depends on the selected vehicle and applicable booking conditions. Check the terms associated with your booking before starting an outstation journey.'
  },
  {
    q: 'Does Long Drive Cars offer unlimited kilometres?',
    a: 'Yes. Unlimited kilometres is one of the features promoted by Long Drive Cars. Customers should check the applicable terms for their specific booking.'
  },
  {
    q: 'How much does a self-drive car cost in Dilsukhnagar?',
    a: 'Long Drive Cars currently promotes cars starting from ₹999 for 6 hours and ₹1,992 for 24 hours, subject to vehicle availability, booking conditions and applicable charges.'
  },
  {
    q: 'Can I hold my favourite car before booking?',
    a: 'Long Drive Cars promotes a ₹200 car-hold option. Check the current app terms for the specific vehicle and booking.'
  },
  {
    q: 'What happens if my rental car breaks down?',
    a: 'Long Drive Cars promotes 24/7 breakdown assistance, towing service and free car replacement, subject to the applicable service conditions.'
  },
  {
    q: 'Is there a zero-deposit option?',
    a: 'Yes. Long Drive Cars promotes a Zero Deposit option, subject to the vehicle and booking conditions.'
  },
  {
    q: 'Is there any protection against scratches and damages?',
    a: 'Long Drive Cars promotes a Zero Headache Pass, under which scratches and damages up to ₹10,000 are stated to have no payment requirement, subject to the applicable pass terms and conditions.'
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

export default function DilsukhnagarGuidePage() {
  return (
    <>
      <Head>
        <title>Self Drive Car Rental in Dilsukhnagar, Hyderabad | Long Drive Cars</title>
        <meta
          name="description"
          content="Looking for self drive car rental in Dilsukhnagar, Hyderabad? Choose hatchbacks, sedans, SUVs & 7-seaters with flexible hours, unlimited km and zero deposit."
        />
        <meta
          name="keywords"
          content="Self Drive Car Rental in Dilsukhnagar, self drive cars in Dilsukhnagar, Self driving cars in Hyderabad, Rent Self Drive Cars Hyderabad, self drive cars near Dilsukhnagar, Self Drive Cars Secunderabad"
        />
        <link rel="canonical" href={CANONICAL_URL} />
        <meta property="og:type" content="article" />
        <meta property="og:title" content="Self Drive Car Rental in Dilsukhnagar, Hyderabad | Long Drive Cars" />
        <meta
          property="og:description"
          content="Looking for self drive car rental in Dilsukhnagar, Hyderabad? Choose hatchbacks, sedans, SUVs & 7-seaters with flexible hours, unlimited km and zero deposit."
        />
        <meta property="og:url" content={CANONICAL_URL} />
        <meta property="og:site_name" content="Long Drive Cars" />
        <meta property="og:image" content="https://www.longdrivecars.com/locationpages/dilsukhnagar.webp" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Self Drive Car Rental in Dilsukhnagar, Hyderabad | Long Drive Cars" />
        <meta
          name="twitter:description"
          content="Looking for self drive car rental in Dilsukhnagar, Hyderabad? Choose hatchbacks, sedans, SUVs & 7-seaters with flexible hours, unlimited km and zero deposit."
        />
        <meta name="twitter:image" content="https://www.longdrivecars.com/locationpages/dilsukhnagar.webp" />
      </Head>

      <div className="min-h-screen bg-slate-50 text-slate-900 antialiased pt-24 lg:pt-0">
        {/* HEADER SECTION */}
        <header className="bg-white py-12 md:py-16 px-4 sm:px-6 lg:px-8 border-b border-slate-200">
          <div className="max-w-4xl mx-auto text-center space-y-4">
            <span className="inline-block px-3 py-1 text-xs font-semibold uppercase tracking-wider bg-slate-100 text-slate-700 rounded-full">
              Rental Guide & Travel Information
            </span>
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight text-slate-900 leading-tight">
              Need a Self Drive Car Around Dilsukhnagar?
            </h1>
            <p className="text-slate-600 text-sm sm:text-base md:text-lg max-w-3xl mx-auto leading-relaxed">
              Self Drive Car Rental in Dilsukhnagar can be a convenient option when you want to travel around Dilsukhnagar, Kothapet, Chaitanyapuri, Moosarambagh, Saroornagar, LB Nagar and nearby parts of Hyderabad without depending completely on cabs or fixed travel schedules.
            </p>
            <p className="text-slate-600 text-sm sm:text-base max-w-3xl mx-auto leading-relaxed">
              Dilsukhnagar is a major commercial and residential neighbourhood in Hyderabad, with busy shopping areas, educational institutions, restaurants, hospitals and transport connections. NH 65 is an important road through the area, while Dilsukhnagar Metro Station is located on Hyderabad Metro's Red Line.
            </p>
            <p className="text-slate-600 text-sm sm:text-base max-w-3xl mx-auto leading-relaxed">
              Whether you are planning an office commute, shopping trip, family outing, college visit, airport journey or weekend drive, having a self-drive car gives you greater control over your route, stops and travel time.
            </p>
          </div>
        </header>

        {/* COVER IMAGE */}
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 -mt-6">
          <div className="rounded-2xl overflow-hidden shadow-sm border border-slate-200 bg-white">
            <Image
              src="/locationpages/dilsukhnagar.webp"
              height={2000}
              width={2000}
              className="rounded-2xl object-cover w-full max-h-[480px]"
              alt="Self drive car rental in Dilsukhnagar Hyderabad for local travel and weekend trips"
              priority
            />
          </div>
        </div>

        {/* MAIN BODY */}
        <main className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-10 space-y-8">
          {/* WHY CHOOSE A SELF-DRIVE CAR IN DILSUKHNAGAR? */}
          <SectionCard title="Why Choose a Self-Drive Car in Dilsukhnagar?">
            <p className="text-slate-600 leading-relaxed text-sm sm:text-base">
              Dilsukhnagar connects naturally with Kothapet, Chaitanyapuri, Moosarambagh, Saroornagar, Gaddiannaram and LB Nagar. The area is also known for its busy commercial activity and public-transport connections.
            </p>
            <p className="text-slate-600 leading-relaxed text-sm sm:text-base">
              This is where self drive cars in Dilsukhnagar can be useful. Instead of booking separate rides for different destinations, you can use one rental car and manage your complete journey according to your own schedule.
            </p>
            <p className="text-slate-700 font-medium text-sm sm:text-base bg-slate-50 p-4 rounded-xl border border-slate-200">
              Long Drive Cars provides different vehicle categories and highlights features designed around flexible self-drive travel.
            </p>
            <div className="pt-2">
              <h3 className="text-sm font-bold text-slate-800 uppercase tracking-wide mb-3">Key Travel Advantages in Dilsukhnagar</h3>
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

          {/* WHAT CAN YOU EXPLORE AROUND DILSUKHNAGAR BY SELF-DRIVE CAR? */}
          <div className="space-y-4">
            <div>
              <h2 className="text-2xl font-bold text-slate-900">What Can You Explore Around Dilsukhnagar by Self-Drive Car?</h2>
              <p className="text-slate-600 text-sm sm:text-base mt-1">
                Dilsukhnagar is surrounded by several well-known neighbourhoods and local landmarks. Depending on your purpose, you can combine multiple destinations during the same drive.
              </p>
            </div>

            {/* NOTABLE PLACES BADGE LIST */}
            <div className="bg-white p-5 rounded-2xl border border-slate-200 shadow-xs space-y-3">
              <h3 className="text-sm font-bold text-slate-900 uppercase tracking-wide">
                Notable Places and Areas Around Dilsukhnagar:
              </h3>
              <div className="flex flex-wrap gap-2">
                {NOTABLE_PLACES.map((dest, idx) => (
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
                The official Hyderabad Metro station information lists landmarks around Dilsukhnagar including the bus depot, Sai Baba Temple, Rajadhani 70MM Theatre and CMR Shopping Mall.
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

          {/* WHICH CAR SHOULD YOU CHOOSE FOR A DILSUKHNAGAR TRIP? */}
          <SectionCard
            title="Which Car Should You Choose for a Dilsukhnagar Trip?"
            subtitle="Your vehicle choice depends on the number of passengers, luggage and purpose of your journey."
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
              Long Drive Cars offers different vehicle categories, subject to availability at the time of booking.
            </p>
          </SectionCard>

          {/* WHEN SHOULD YOU RENT A SELF-DRIVE CAR IN DILSUKHNAGAR? */}
          <SectionCard
            title="When Should You Rent a Self-Drive Car in Dilsukhnagar?"
            subtitle="A self drive car rental in Dilsukhnagar can be useful for several situations:"
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

          {/* WHAT MAKES LONG DRIVE CARS USEFUL FOR DILSUKHNAGAR CUSTOMERS? */}
          <div className="space-y-6">
            <div>
              <h2 className="text-2xl font-bold text-slate-900">
                What Makes Long Drive Cars Useful for Dilsukhnagar Customers?
              </h2>
              <p className="text-slate-600 text-sm mt-1">
                When comparing Self drive car rental in Dilsukhnagar, the rental features and vehicle condition are important considerations. Long Drive Cars highlights the following customer-focused options and features:
              </p>
            </div>

            {/* FLEXIBLE BOOKING & PRICING */}
            <div className="space-y-3">
              <h3 className="text-base font-bold text-slate-900 flex items-center gap-2">
                🚗 Flexible Booking & Pricing
              </h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-3">
                {PRICING_FEATURES.map((item, idx) => (
                  <div key={idx} className="bg-white p-4 rounded-xl border border-slate-200 shadow-xs space-y-1">
                    <h4 className="text-sm font-bold text-slate-900">{item.title}</h4>
                    <p className="text-xs text-slate-600 leading-relaxed">{item.desc}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* ADDITIONAL CUSTOMER BENEFITS */}
            <div className="space-y-3">
              <h3 className="text-base font-bold text-slate-900 flex items-center gap-2">
                🛡️ Additional Customer Benefits
              </h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-3">
                {PROTECTION_FEATURES.map((item, idx) => (
                  <div key={idx} className="bg-white p-4 rounded-xl border border-slate-200 shadow-xs space-y-1">
                    <h4 className="text-sm font-bold text-slate-900">{item.title}</h4>
                    <p className="text-xs text-slate-600 leading-relaxed">{item.desc}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* SUPPORT DURING THE JOURNEY */}
            <div className="space-y-3">
              <h3 className="text-base font-bold text-slate-900 flex items-center gap-2">
                ⚡ Support During the Journey
              </h3>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                {ON_ROAD_SUPPORT.map((item, idx) => (
                  <div key={idx} className="bg-white p-4 rounded-xl border border-slate-200 shadow-xs space-y-1">
                    <h4 className="text-sm font-bold text-slate-900">{item.title}</h4>
                    <p className="text-xs text-slate-600 leading-relaxed">{item.desc}</p>
                  </div>
                ))}
              </div>
              <p className="text-xs text-slate-600 pt-1">
                For customers, these features can be particularly relevant when planning a longer drive from Dilsukhnagar rather than a short local journey.
              </p>
            </div>
          </div>

          {/* HOW CAN YOU BOOK A SELF-DRIVE CAR IN DILSUKHNAGAR? */}
          <SectionCard
            title="How Can You Book a Self-Drive Car in Dilsukhnagar?"
            subtitle="If you want to rent a self drive car in Dilsukhnagar, you can check available vehicles through the Long Drive Cars app. Simple booking process:"
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
            <div className="p-3 bg-slate-50 rounded-xl border border-slate-200 text-xs font-semibold text-slate-800 text-center">
              The service promotes a simple Book → Pick Up → Drive process.
            </div>
          </SectionCard>

          {/* HOW CAN YOU PLAN A DILSUKHNAGAR DRIVE? */}
          <SectionCard title="How Can You Plan a Dilsukhnagar Drive?">
            <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
              The advantage of self drive cars near Dilsukhnagar is that you can combine several nearby locations into one journey.
            </p>
            <div className="space-y-2">
              <div className="p-3 bg-slate-50 rounded-xl border border-slate-200 text-xs sm:text-sm font-medium text-slate-800">
                <span className="font-bold text-slate-900">Route 1:</span> Dilsukhnagar → Kothapet → Saroornagar Lake → Chaitanyapuri → Dilsukhnagar
              </div>
              <div className="p-3 bg-slate-50 rounded-xl border border-slate-200 text-xs sm:text-sm font-medium text-slate-800">
                <span className="font-bold text-slate-900">Route 2:</span> Dilsukhnagar → Moosarambagh → Malakpet → LB Nagar → Dilsukhnagar
              </div>
            </div>
            <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
              For a family trip, a sedan or SUV may provide additional comfort. For a short city journey, a hatchback can be easier to handle.
            </p>
            <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
              Your vehicle choice should depend on your passengers, luggage, distance and travel purpose.
            </p>
          </SectionCard>

          {/* WHY CHOOSE LONG DRIVE CARS & OUTSTATION DUAL SECTION */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <SectionCard title="Why Choose Long Drive Cars for Self-Drive Travel in Dilsukhnagar?">
              <p className="text-slate-600 text-xs sm:text-sm leading-relaxed">
                Long Drive Cars focuses on self-drive rentals with flexible booking options. For customers travelling from Dilsukhnagar, features such as unlimited kilometres, choose-your-own-hours, zero-deposit options, quick booking, vehicle comparison and 24/7 breakdown assistance can be useful when the journey includes multiple destinations.
              </p>
              <p className="text-slate-600 text-xs sm:text-sm leading-relaxed">
                The service also promotes exact car guarantee, ₹200 car-hold payment, national-highway toll benefits and customer protection options, subject to the applicable terms and conditions. Whether your journey is around Dilsukhnagar, Kothapet and Saroornagar or extends towards LB Nagar, Moosarambagh and other parts of Hyderabad, you can select a vehicle according to your travel requirements and availability.
              </p>
            </SectionCard>

            <SectionCard title="Can You Use a Self-Drive Car for Local and Outstation Trips?">
              <p className="text-slate-600 text-xs sm:text-sm leading-relaxed">
                A rental car can be used for local journeys and, where permitted, longer drives. The exact conditions depend on the selected vehicle and booking.
              </p>
              <p className="text-slate-600 text-xs sm:text-sm leading-relaxed">
                A hatchback can work for everyday city travel, while a sedan or SUV may provide additional comfort for longer journeys. A 7-seater can be considered when travelling with more passengers or luggage.
              </p>
              <p className="text-slate-600 text-xs sm:text-sm leading-relaxed">
                Before an outstation journey, check the applicable booking conditions and permitted vehicle usage.
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
              Book Your Self-Drive Car in Dilsukhnagar
            </h2>
            <p className="text-slate-600 text-xs sm:text-sm max-w-2xl mx-auto leading-relaxed">
              Self Drive Car Rental in Dilsukhnagar gives you the flexibility to travel around Dilsukhnagar, Kothapet, Chaitanyapuri, Saroornagar, Moosarambagh, Gaddiannaram, LB Nagar and nearby parts of Hyderabad according to your own schedule.
            </p>
            <p className="text-slate-600 text-xs sm:text-sm max-w-2xl mx-auto leading-relaxed">
              Whether you need a car for office travel, shopping, college visits, family outings, airport travel or a weekend road trip, Long Drive Cars offers different vehicle options with features such as choose your own hours, unlimited kilometres, zero-deposit options and 24/7 breakdown assistance.
            </p>
            <p className="text-slate-900 font-semibold text-sm">
              Your favourite car is ready. Just book → pick up → drive! 🚗💨
            </p>
            <div className="pt-2">
              <Link
                href={TARGET_URL}
                className="px-6 py-3 bg-slate-900 text-white font-bold rounded-xl shadow-xs hover:bg-slate-800 transition inline-flex items-center gap-2 text-sm"
              >
                Book through the Long Drive Cars App <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </section>
        </main>
      </div>
    </>
  );
}