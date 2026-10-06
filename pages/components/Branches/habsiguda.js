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
  GraduationCap,
  Trees,
  Trophy
} from 'lucide-react';

const TARGET_URL = 'https://www.longdrivecars.com';
const CANONICAL_URL = 'https://www.longdrivecars.com/self-drive-car-rental-in-habsiguda';

const HIGHLIGHTS = [
  'Located between Tarnaka and Uppal with direct links to Nacharam, Secunderabad, and wider eastern Hyderabad',
  'Served by Habsiguda Metro Station as a recognizable local and multimodal transport hub',
  'Total flexibility to choose your route, manage stops, and drive on your personal schedule',
  'Connect educational institutions, research campuses, shopping hubs, and stadiums in one car',
  'Eliminates the cost, delays, and coordination of booking individual cabs for every stop'
];

const EXPLORE_PLACES = [
  {
    icon: Compass,
    title: 'What Makes Habsiguda a Convenient Starting Point?',
    badge: 'Central Transit Hub',
    desc: 'Habsiguda connects naturally with Tarnaka, Uppal, Nacharam, Ramanthapur and Osmania University. The area is also served by Habsiguda Metro Station, making it a recognisable local transport point.',
    note: 'For someone travelling by rental car, the advantage is being able to plan a route around several destinations instead of travelling only from one point to another.'
  },
  {
    icon: Route,
    title: 'Can You Drive from Habsiguda to Tarnaka?',
    badge: 'University Corridor',
    desc: 'Yes. Tarnaka is one of the closest major areas to Habsiguda and forms an important connection towards Osmania University and other central-eastern parts of Hyderabad. The route can be useful for students, office employees, visitors and families travelling between Habsiguda, Tarnaka and surrounding neighbourhoods.',
    note: 'Osmania University identifies the general area where its campus is located as Tarnaka, with the Arts College being one of the best-known landmarks on the university campus. A self-drive car can therefore be practical when your day involves multiple stops around Tarnaka and the university area.'
  },
  {
    icon: GraduationCap,
    title: 'Can You Visit Osmania University from Habsiguda?',
    badge: 'Academic Landmark',
    desc: "Yes. Osmania University is a major landmark around the Habsiguda–Tarnaka side of Hyderabad. The university's official route information identifies Tarnaka as the general area where the campus is located and Arts College as a well-known campus landmark.",
    note: 'If you are travelling for an academic visit, meeting someone, attending an event or exploring the surrounding area, having your own rental car can make it easier to manage your travel schedule.'
  },
  {
    icon: ShoppingBag,
    title: 'Can You Visit Uppal from Habsiguda by Self-Drive Car?',
    badge: 'Commercial Hub',
    desc: 'Yes. Uppal is one of the important destinations on Hyderabad’s eastern side and is directly relevant to travel from Habsiguda. A self-drive journey can be useful if you want to combine Habsiguda with Uppal shopping, restaurants, appointments or entertainment on the same day.',
    note: 'The wider Habsiguda–Uppal corridor also provides access towards other eastern Hyderabad locations.'
  },
  {
    icon: Trees,
    title: 'What Can You Explore Around the NGRI Area?',
    badge: 'Research & Nature',
    desc: 'The NGRI area in Habsiguda is another notable local reference point. A local attraction listed around this area is NGRI Rock Garden, while the broader NGRI campus is an established landmark in Habsiguda.',
    note: 'For travellers who have appointments or activities around Habsiguda’s institutional and research areas, a rental car can provide flexibility when the journey involves multiple stops.'
  },
  {
    icon: Navigation,
    title: 'Can You Drive from Habsiguda Towards Secunderabad?',
    badge: 'Inter-City Corridor',
    desc: 'Yes. Habsiguda has road connectivity towards Secunderabad through the Tarnaka and Mettuguda side. For example, the Hyderabad Traffic Police route information includes the Sangeet Junction–Habsiguda X Roads route through Rail Nilayam, Mettuguda and Tarnaka X Road.',
    note: 'This makes a self-drive car useful when your plans include Habsiguda, Tarnaka, Mettuguda and Secunderabad during the same day.'
  },
  {
    icon: Building2,
    title: 'Can You Include Nacharam and Mallapur in a Habsiguda Drive?',
    badge: 'Industrial & Suburb Link',
    desc: 'Yes. Nacharam and Mallapur are part of the broader eastern Hyderabad travel network around Habsiguda. If your day involves office work, shopping, meeting friends or visiting family across Habsiguda, Nacharam and Mallapur, one rental car can make the journey easier to manage.',
    note: 'Instead of booking different rides for every stop, you can plan the entire route around your own schedule.'
  },
  {
    icon: Trophy,
    title: 'Can You Visit Uppal Stadium from Habsiguda?',
    badge: 'Sports Landmark',
    desc: 'For cricket fans and visitors attending events, the Rajiv Gandhi International Cricket Stadium, commonly known as Uppal Stadium, is an important destination on the eastern side of Hyderabad. It is listed among notable places around the wider Habsiguda/Uppal area.',
    note: 'If you are travelling with friends or family for a match or event, choosing a suitable sedan, SUV or larger vehicle can provide additional passenger and luggage space.'
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
  { title: 'Office travel', desc: 'If your work involves Habsiguda, Tarnaka, Uppal, Nacharam or nearby business areas, one rental car can simplify a day involving multiple stops.' },
  { title: 'Family outings', desc: 'A single vehicle can make travelling with parents, children or relatives more convenient.' },
  { title: 'Shopping trips', desc: 'You can travel between Habsiguda, Uppal, Tarnaka and nearby shopping areas without arranging another ride for the return journey.' },
  { title: 'Educational visits', desc: 'If you need to travel around Osmania University, Tarnaka or nearby institutions, a rental car gives you control over your schedule.' },
  { title: 'Airport travel', desc: 'A sedan or SUV can be useful when travelling with luggage or several passengers.' },
  { title: 'Weekend drives', desc: 'You can start from Habsiguda and continue towards destinations outside the immediate neighbourhood.' },
  { title: 'Personal vehicle unavailable', desc: 'If your own car is under maintenance or unavailable, a self-drive rental can provide a temporary travel option.' }
];

const BENEFITS = [
  { title: 'Choose Your Own Hours', desc: 'Customizable rental periods to match your exact itinerary without rigid constraints.' },
  { title: 'Unlimited Kilometres', desc: 'Explore freely around eastern Hyderabad and beyond without per-km penalties or distance limits.' },
  { title: 'No Deposit', desc: 'Book with complete transparency and zero security deposit required.' },
  { title: 'Check Original Car Photos', desc: 'Review real, original vehicle photos before confirming your booking.' },
  { title: '24/7 Breakdown Service', desc: 'Round-the-clock roadside assistance ensures a safe, supported journey wherever you go.' }
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
    q: 'Can I book a self-drive car in Habsiguda for a family outing?',
    a: 'Yes. You can select a vehicle according to the number of passengers, luggage and duration of your journey. Hatchbacks, sedans, SUVs and 7-seater options can be considered depending on availability.'
  },
  {
    q: 'What documents are required to rent a self-drive car in Habsiguda?',
    a: 'Long Drive Cars requires customers to complete the applicable verification process and upload the required documents before the scheduled pickup time.'
  },
  {
    q: 'Can I take a self-drive rental car from Habsiguda for an outstation trip?',
    a: 'This depends on the applicable booking conditions and permitted vehicle usage. Before starting an outstation journey, check the terms associated with your selected vehicle and booking.'
  },
  {
    q: 'Does Long Drive Cars offer unlimited kilometres?',
    a: 'Yes. Unlimited kilometres is currently listed among Long Drive Cars’ key rental features. Customers should check the applicable terms for their specific booking.'
  },
  {
    q: 'Why should I choose a self-drive car instead of a cab in Habsiguda?',
    a: 'A self-drive rental gives you greater control over your route, stops and travel schedule. Instead of arranging separate rides when travelling between Habsiguda, Tarnaka, Uppal, Nacharam or Mallapur, you can use one rental vehicle throughout your journey.'
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

export default function HabsigudaGuidePage() {
  return (
    <>
      <Head>
        <title>Self Drive Car Rental in Habsiguda, Hyderabad | Long Drive Cars</title>
        <meta
          name="description"
          content="Looking for self drive car rental in Habsiguda, Hyderabad? Choose hatchbacks, sedans, SUVs & 7-seaters with flexible hours, unlimited km and no deposit."
        />
        <meta
          name="keywords"
          content="Self Drive Car Rental in Habsiguda, self drive cars in Habsiguda, Self driving cars in Hyderabad, Rent Self Drive Cars Hyderabad, self drive cars near Habsiguda, Self Drive Cars Secunderabad"
        />
        <link rel="canonical" href={CANONICAL_URL} />
        <meta property="og:type" content="article" />
        <meta property="og:title" content="Self Drive Car Rental in Habsiguda, Hyderabad | Long Drive Cars" />
        <meta
          property="og:description"
          content="Looking for self drive car rental in Habsiguda, Hyderabad? Choose hatchbacks, sedans, SUVs & 7-seaters with flexible hours, unlimited km and no deposit."
        />
        <meta property="og:url" content={CANONICAL_URL} />
        <meta property="og:site_name" content="Long Drive Cars" />
        <meta property="og:image" content="https://www.longdrivecars.com/locationpages/habsiguda.webp" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Self Drive Car Rental in Habsiguda, Hyderabad | Long Drive Cars" />
        <meta
          name="twitter:description"
          content="Looking for self drive car rental in Habsiguda, Hyderabad? Choose hatchbacks, sedans, SUVs & 7-seaters with flexible hours, unlimited km and no deposit."
        />
        <meta name="twitter:image" content="https://www.longdrivecars.com/locationpages/habsiguda.webp" />
      </Head>

      <div className="min-h-screen bg-slate-50 text-slate-900 antialiased pt-24 lg:pt-0">
        {/* HEADER SECTION */}
        <header className="bg-white py-12 md:py-16 px-4 sm:px-6 lg:px-8 border-b border-slate-200">
          <div className="max-w-4xl mx-auto text-center space-y-4">
            <span className="inline-block px-3 py-1 text-xs font-semibold uppercase tracking-wider bg-slate-100 text-slate-700 rounded-full">
              Rental Guide & Travel Information
            </span>
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight text-slate-900 leading-tight">
              Wondering Where Self Drive Cars Are Available in Habsiguda?
            </h1>
            <p className="text-slate-600 text-sm sm:text-base md:text-lg max-w-3xl mx-auto leading-relaxed">
              Self Drive Cars in Habsiguda can be a convenient option for travelling across Habsiguda, Tarnaka, Nacharam, Mallapur, Uppal and other nearby parts of Hyderabad. Whether you are planning an office commute, family outing, shopping trip, airport journey or weekend drive, a self-drive car gives you the flexibility to choose your route, manage your stops and travel according to your own schedule.
            </p>
            <p className="text-slate-600 text-sm sm:text-base max-w-3xl mx-auto leading-relaxed">
              Habsiguda is located on the eastern side of Hyderabad, between Tarnaka and Uppal. Its surrounding road network connects travellers towards areas such as Nacharam, Uppal, Tarnaka and the wider Secunderabad side.
            </p>
          </div>
        </header>

        {/* COVER IMAGE */}
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 -mt-6">
          <div className="rounded-2xl overflow-hidden shadow-sm border border-slate-200 bg-white">
            <Image
              src="/locationpages/habsiguda.webp"
              height={2000}
              width={2000}
              className="rounded-2xl object-cover w-full max-h-[480px]"
              alt="Self drive car rental in Habsiguda Hyderabad for local travel and weekend trips"
              priority
            />
          </div>
        </div>

        {/* MAIN BODY */}
        <main className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-10 space-y-8">
          {/* WHY CHOOSE A SELF-DRIVE CAR IN HABSIGUDA? */}
          <SectionCard title="Why Choose a Self-Drive Car in Habsiguda?">
            <p className="text-slate-600 leading-relaxed text-sm sm:text-base">
              Habsiguda is surrounded by residential areas, educational institutions, research organisations, shopping destinations and important road corridors. A typical day could involve travelling from Habsiguda to Tarnaka for an appointment, continuing towards Osmania University, heading to Uppal for shopping and returning home later.
            </p>
            <p className="text-slate-600 leading-relaxed text-sm sm:text-base">
              This is where self drive cars in Habsiguda can be useful. Instead of arranging separate rides for every destination, you can use one rental car and manage your journey according to your own schedule.
            </p>
            <p className="text-slate-700 font-medium text-sm sm:text-base bg-slate-50 p-4 rounded-xl border border-slate-200">
              Long Drive Cars currently highlights features such as choosing your own hours, unlimited kilometres, no deposit, 24/7 breakdown service and original car photos before booking.
            </p>
            <div className="pt-2">
              <h3 className="text-sm font-bold text-slate-800 uppercase tracking-wide mb-3">Key Travel Advantages in Habsiguda</h3>
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

          {/* WHAT CAN YOU EXPLORE AROUND HABSIGUDA BY SELF-DRIVE CAR? */}
          <div className="space-y-4">
            <div>
              <h2 className="text-2xl font-bold text-slate-900">What Can You Explore Around Habsiguda by Self-Drive Car?</h2>
              <p className="text-slate-600 text-sm sm:text-base mt-1">
                Habsiguda is well positioned for exploring several established parts of Hyderabad’s eastern side. From educational landmarks and research areas to shopping, entertainment and cricket destinations, a self-drive car can make it easier to combine multiple stops in one journey.
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

          {/* WHICH CAR SHOULD YOU CHOOSE FOR A HABSIGUDA TRIP? */}
          <SectionCard
            title="Which Car Should You Choose for a Habsiguda Trip?"
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

          {/* WHEN SHOULD YOU RENT A SELF-DRIVE CAR IN HABSIGUDA? */}
          <SectionCard
            title="When Should You Rent a Self-Drive Car in Habsiguda?"
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

          {/* WHAT MAKES LONG DRIVE CARS USEFUL FOR HABSIGUDA CUSTOMERS? */}
          <div className="space-y-4">
            <div>
              <h2 className="text-2xl font-bold text-slate-900">
                What Makes Long Drive Cars Useful for Habsiguda Customers?
              </h2>
              <p className="text-slate-600 text-sm mt-1">
                When comparing Self drive car rental in Habsiguda, it is useful to consider both the vehicle and the rental features.
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

          {/* HOW CAN YOU BOOK A SELF-DRIVE CAR IN HABSIGUDA? */}
          <SectionCard
            title="How Can You Book a Self-Drive Car in Habsiguda?"
            subtitle="If you want to rent a self drive car in Habsiguda, you can check the available vehicles through the Long Drive Cars platform. Simple booking process:"
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

          {/* HOW CAN YOU PLAN A HABSIGUDA DRIVE WITH A RENTAL CAR? */}
          <SectionCard title="How Can You Plan a Habsiguda Drive with a Rental Car?">
            <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
              The advantage of self drive cars near Habsiguda is the flexibility to combine several nearby locations in one journey.
            </p>
            <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
              For example, you could start from Habsiguda, travel towards Tarnaka for an appointment, continue towards Osmania University, head towards Uppal for shopping or food, and then return through the Habsiguda side.
            </p>
            <div className="p-3 bg-slate-50 rounded-xl border border-slate-200 text-xs sm:text-sm font-semibold text-slate-800">
              Popular Route: Habsiguda → Nacharam → Mallapur → Uppal → Habsiguda
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
            <SectionCard title="Why Choose Long Drive Cars for Self-Drive Travel in Habsiguda?">
              <p className="text-slate-600 text-xs sm:text-sm leading-relaxed">
                Long Drive Cars focuses on self-drive rentals with features designed around flexibility.
              </p>
              <p className="text-slate-600 text-xs sm:text-sm leading-relaxed">
                For customers travelling from Habsiguda, features such as choose your own hours, unlimited kilometres, no deposit, 24/7 breakdown service and original car photos before booking can be useful when the journey involves several destinations instead of a simple point-to-point trip.
              </p>
              <p className="text-slate-600 text-xs sm:text-sm leading-relaxed">
                Whether your plan is around Habsiguda and Tarnaka or extends towards Uppal, Nacharam and other parts of Hyderabad, the rental car can be selected according to your travel requirement and availability.
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
              Book Your Self-Drive Car in Habsiguda
            </h2>
            <p className="text-slate-600 text-xs sm:text-sm max-w-2xl mx-auto leading-relaxed">
              If you are planning to travel from Habsiguda to nearby areas or explore different parts of Hyderabad, a self-drive car can give you greater control over your journey. From short local trips and daily travel to airport transfers and weekend drives, Self Drive Cars in Habsiguda can provide a flexible way to plan your travel around your own time and route.
            </p>
            <p className="text-slate-600 text-xs sm:text-sm max-w-2xl mx-auto leading-relaxed">
              Whether you need a car for office travel, shopping, family outings, an educational visit, airport travel or a weekend road trip, Long Drive Cars provides multiple vehicle options with features such as flexible hours, unlimited kilometres, no deposit and 24/7 breakdown service.
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