import React from 'react';
import Head from 'next/head';
import Image from 'next/image';
import Link from 'next/link';
import {
  CheckCircle2,
  ChevronDown,
  ArrowRight,
  Waves,
  ShoppingBag,
  Car,
  FileCheck,
  MapPin,
  Mountain,
  Building2,
  Trees
} from 'lucide-react';

const TARGET_URL = 'https://www.longdrivecars.com';
const CANONICAL_URL = 'https://www.longdrivecars.com/self-drive-car-rental-in-ecil';

const HIGHLIGHTS = [
  'ECIL X Roads is a major commercial junction connecting Kushaiguda, Moula Ali, AS Rao Nagar & Neredmet',
  'Direct access to a TSRTC bus terminal and roads heading towards Tarnaka and greater Hyderabad',
  'Total freedom to decide your route, stops, and travel time without cab dependency',
  'Seamless multi-stop travel between commercial hubs, residential areas, and scenic lakes',
  'Eliminates the hassle and cost of booking separate cabs for each leg of your journey'
];

const ATTRACTIONS = [
  {
    icon: MapPin,
    title: 'ECIL X Roads',
    badge: 'Major Commercial Junction',
    desc: 'ECIL X Roads is one of the most recognizable commercial and transport points in this part of Hyderabad. The junction connects Kushaiguda, AS Rao Nagar, Neredmet, Moula Ali and other surrounding neighbourhoods, with a bus terminal located beside the crossroads.',
    note: 'If you are staying in or around ECIL, this makes the junction a natural starting point for a city drive. You can pick up your rental car, complete your local errands and continue towards nearby neighbourhoods according to your schedule.'
  },
  {
    icon: ShoppingBag,
    title: 'AS Rao Nagar',
    badge: 'Shopping & Dining Hub',
    desc: 'AS Rao Nagar is one of the most active neighbourhoods near ECIL, with shopping, restaurants, services and residential communities. It has developed into an important commercial area for people living around ECIL, Sainikpuri, Neredmet and nearby localities.',
    note: 'A self-drive car can be particularly convenient when your plan combines shopping, food and family activities. You can visit several places in the same trip instead of depending on separate rides.'
  },
  {
    icon: Trees,
    title: 'Sainikpuri',
    badge: 'Residential & Green Outings',
    desc: 'Sainikpuri is a well-established residential neighbourhood close to ECIL and Kapra. Its quieter residential environment, parks and nearby attractions make it a popular area for families and evening outings.',
    note: 'If you are travelling with family or friends, having your own rental car gives you the flexibility to travel from ECIL towards Sainikpuri and continue towards Kapra or other nearby areas.'
  },
  {
    icon: Waves,
    title: 'Kapra Lake',
    badge: 'Oora Cheruvu',
    desc: 'Kapra Lake, also known as Oora Cheruvu, is located near Sainikpuri in northeast Hyderabad. The lake has a long bund and forms part of the interconnected lake system in this part of the city.',
    note: 'For someone planning a relaxed local drive, Kapra Lake can be included as one stop along with Sainikpuri and AS Rao Nagar.'
  },
  {
    icon: Waves,
    title: 'Safilguda Lake',
    badge: 'Mini Tank Bund / Nadimi Cheruvu',
    desc: 'Safilguda Lake, also known as Nadimi Cheruvu, is located in the Neredmet–Safilguda area. The lake has an adjoining park and a road around the water body that is popularly associated with the name "Mini Tank Bund."',
    note: 'A drive from ECIL towards Safilguda can therefore work well for an evening outing, especially when your plan involves spending time around the lake and nearby neighbourhoods.'
  },
  {
    icon: Mountain,
    title: 'Moula Ali Hill',
    badge: 'Heritage & Religious Landmark',
    desc: 'Moula Ali Hill is one of the prominent landmarks in northeast Hyderabad. The hill is associated with the historic Moula Ali Dargah and has a staircase leading towards the top.',
    note: 'If you enjoy combining a city drive with a heritage or religious landmark, Moula Ali can be included in a self-drive itinerary from ECIL.'
  },
  {
    icon: Building2,
    title: 'Kushaiguda',
    badge: 'Industrial & Institutional Area',
    desc: 'Kushaiguda is directly associated with the ECIL area and is close to the ECIL bus terminal. The locality also has connections to industrial and institutional areas, including the ECIL and NFC surroundings.',
    note: 'For everyday travel, office visits or meeting someone in the area, having a self-drive vehicle can make it easier to move between Kushaiguda, ECIL and neighbouring localities.'
  }
];

const FLEET_OPTIONS = [
  { requirement: 'Daily ECIL city travel', carType: 'Hatchback', why: 'Compact and easy to park' },
  { requirement: 'Couple outing', carType: 'Hatchback / Sedan', why: 'Comfortable for short and medium drives' },
  { requirement: 'Family shopping trip', carType: 'Sedan / Compact SUV', why: 'Better cabin and luggage space' },
  { requirement: 'Airport journey', carType: 'Sedan / SUV', why: 'Useful for passengers and luggage' },
  { requirement: 'Friends travelling together', carType: 'SUV / 7-seater', why: 'More passenger space' },
  { requirement: 'Weekend road trip', carType: 'SUV / MUV', why: 'Comfortable for longer drives' },
  { requirement: 'Long trip with luggage', carType: '7-seater / Large SUV', why: 'Additional passenger and luggage capacity' }
];

const SITUATIONS = [
  { title: 'Family outings', desc: 'If parents, children or relatives are travelling together, one rental car can make the journey easier to manage.' },
  { title: 'Shopping trips', desc: 'You can travel from ECIL to AS Rao Nagar, Sainikpuri or nearby commercial areas and return whenever you are ready.' },
  { title: 'Airport travel', desc: 'A self-drive car can be useful when you have multiple passengers or luggage and want greater control over your travel schedule.' },
  { title: 'Office travel', desc: 'If your work requires multiple visits around ECIL, Kushaiguda, Moula Ali, Uppal or other parts of Hyderabad, having one vehicle can simplify the day’s travel.' },
  { title: 'Weekend drives', desc: 'You can start from ECIL and build your own route instead of following a fixed sightseeing itinerary.' },
  { title: 'Personal vehicle unavailable', desc: 'If your own car is being serviced or is unavailable, a rental car can provide a temporary travel option.' }
];

const BENEFITS = [
  { title: 'Choose Your Own Hours', desc: 'Flexible hourly and daily rental durations tailored to your exact travel plans.' },
  { title: 'Unlimited Kilometres', desc: 'Travel across northeast Hyderabad and beyond without worrying about mileage caps or extra distance fees.' },
  { title: 'No Deposit', desc: 'Enjoy complete convenience with zero security deposit required to confirm your booking.' },
  { title: 'Check Original Car Photos', desc: 'Inspect original, real photos of vehicles before booking to ensure complete transparency.' },
  { title: '24/7 Breakdown Service', desc: 'Drive with peace of mind backed by round-the-clock roadside assistance across the city.' }
];

const BOOKING_STEPS = [
  'Open the Long Drive Cars app.',
  'Check the available cars near your location.',
  'Select a car based on your travel requirement.',
  'Choose your required rental duration.',
  'Review the vehicle and booking information.',
  'Complete the booking and payment.',
  'Upload the required documents for verification.',
  'Follow the pickup instructions provided after booking.'
];

const FAQS = [
  {
    q: '1. Can I book a self-drive car in ECIL for a family outing?',
    a: 'Yes. You can select a vehicle according to your number of passengers, luggage and travel duration. Long Drive Cars lists different categories of vehicles, including hatchbacks, sedans, SUVs and larger cars.'
  },
  {
    q: '2. What documents are required to book a self-drive car in ECIL?',
    a: 'Long Drive Cars states that customers need to upload a selfie photo, Aadhaar card and valid driving licence for verification after booking. The documents should be uploaded before the scheduled pickup time.'
  },
  {
    q: '3. Can I use a rental car from ECIL for an outstation trip?',
    a: 'It depends on the applicable booking conditions and permitted vehicle usage. Before starting an outstation journey, check the terms associated with your selected vehicle and booking.'
  },
  {
    q: '4. Does Long Drive Cars offer unlimited kilometres?',
    a: "Yes. Unlimited kilometres is listed among Long Drive Cars' key rental features. Customers should check the applicable booking terms for their specific reservation."
  },
  {
    q: '5. Why choose a self-drive car instead of booking cabs around ECIL?',
    a: 'A self-drive car gives you greater control over your route and schedule. Instead of arranging separate rides when travelling between ECIL, AS Rao Nagar, Sainikpuri, Kapra or Moula Ali, you can use one rental vehicle for the journey.'
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

export default function EcilGuidePage() {
  return (
    <>
      <Head>
        <title>Self Drive Car Rental in ECIL, Hyderabad | Long Drive Cars</title>
        <meta
          name="description"
          content="Looking for self drive car rental in ECIL, Hyderabad? Choose hatchbacks, sedans, SUVs & 7-seaters with flexible hours, unlimited km and no deposit."
        />
        <meta
          name="keywords"
          content="Self Drive Car Rental in ECIL, self drive cars in ECIL, Self driving cars in Hyderabad, Rent Self Drive Cars Hyderabad, self drive cars near ECIL, Self Drive Cars Secunderabad"
        />
        <link rel="canonical" href={CANONICAL_URL} />
        <meta property="og:type" content="article" />
        <meta property="og:title" content="Self Drive Car Rental in ECIL, Hyderabad | Long Drive Cars" />
        <meta
          property="og:description"
          content="Looking for self drive car rental in ECIL, Hyderabad? Choose hatchbacks, sedans, SUVs & 7-seaters with flexible hours, unlimited km and no deposit."
        />
        <meta property="og:url" content={CANONICAL_URL} />
        <meta property="og:site_name" content="Long Drive Cars" />
        <meta property="og:image" content="https://www.longdrivecars.com/locationpages/ecil.webp" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Self Drive Car Rental in ECIL, Hyderabad | Long Drive Cars" />
        <meta
          name="twitter:description"
          content="Looking for self drive car rental in ECIL, Hyderabad? Choose hatchbacks, sedans, SUVs & 7-seaters with flexible hours, unlimited km and no deposit."
        />
        <meta name="twitter:image" content="https://www.longdrivecars.com/locationpages/ecil.webp" />
      </Head>

      <div className="min-h-screen bg-slate-50 text-slate-900 antialiased pt-24 lg:pt-0">
        {/* HEADER SECTION */}
        <header className="bg-white py-12 md:py-16 px-4 sm:px-6 lg:px-8 border-b border-slate-200">
          <div className="max-w-4xl mx-auto text-center space-y-4">
            <span className="inline-block px-3 py-1 text-xs font-semibold uppercase tracking-wider bg-slate-100 text-slate-700 rounded-full">
              Rental Guide & Travel Information
            </span>
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight text-slate-900 leading-tight">
              Looking for Self Drive Car Rental in ECIL?
            </h1>
            <p className="text-slate-600 text-sm sm:text-base md:text-lg max-w-3xl mx-auto leading-relaxed">
              Self Drive Car Rental in ECIL is a convenient option when you want to travel around ECIL, AS Rao Nagar, Kapra, Sainikpuri, Kushaiguda, Moula Ali and other parts of northeast Hyderabad without depending on cabs or fixed travel schedules. Whether you are planning a family outing, shopping trip, office travel, airport journey or weekend road trip, a self-drive car gives you the freedom to decide your route, stops and travel time.
            </p>
            <p className="text-slate-600 text-sm sm:text-base max-w-3xl mx-auto leading-relaxed">
              ECIL X Roads is a major commercial junction connecting several established residential areas, including Kushaiguda and Moula Ali. It is also served by a TSRTC bus terminal, while roads from the junction connect towards Neredmet, AS Rao Nagar, Tarnaka and other parts of Hyderabad.
            </p>
          </div>
        </header>

        {/* COVER IMAGE */}
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 -mt-6">
          <div className="rounded-2xl overflow-hidden shadow-sm border border-slate-200 bg-white">
            <Image
              src="/locationpages/ecil.webp"
              height={2000}
              width={2000}
              className="rounded-2xl object-cover w-full max-h-[480px]"
              alt="Self drive car rental in ECIL Hyderabad for local travel and weekend trips"
              priority
            />
          </div>
        </div>

        {/* MAIN BODY */}
        <main className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-10 space-y-8">
          {/* WHY SELF-DRIVE MAKES SENSE IN ECIL */}
          <SectionCard title="Why Self-Drive Makes Sense in ECIL">
            <p className="text-slate-600 leading-relaxed text-sm sm:text-base">
              ECIL is not just a single residential pocket. The wider area includes busy commercial streets, established residential neighbourhoods, shopping destinations and connections towards Sainikpuri, Kapra, Kushaiguda, Moula Ali and Neredmet.
            </p>
            <p className="text-slate-600 leading-relaxed text-sm sm:text-base">
              This makes self drive cars in ECIL useful when your journey involves multiple stops. For example, you might start at ECIL X Roads, meet someone in AS Rao Nagar, shop around Sainikpuri and later drive towards Moula Ali without having to arrange a separate cab for every part of the journey.
            </p>
            <p className="text-slate-700 font-medium text-sm sm:text-base bg-slate-50 p-4 rounded-xl border border-slate-200">
              Long Drive Cars offers features including choose your own hours, unlimited kilometres, no deposit, 24/7 breakdown service and the option to check original car photos before booking.
            </p>
            <div className="pt-2">
              <h3 className="text-sm font-bold text-slate-800 uppercase tracking-wide mb-3">Key Travel Advantages in ECIL</h3>
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

          {/* EXPLORE ECIL AND NEARBY PLACES BY SELF-DRIVE CAR */}
          <div className="space-y-4">
            <div>
              <h2 className="text-2xl font-bold text-slate-900">Explore ECIL and Nearby Places by Self-Drive Car</h2>
              <p className="text-slate-600 text-sm sm:text-base mt-1">
                One advantage of renting a car in ECIL is the ability to combine nearby local favourites into one flexible outing.
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {ATTRACTIONS.map(({ icon: Icon, title, badge, desc, note }, idx) => (
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

          {/* WHICH CAR SHOULD YOU CHOOSE FOR AN ECIL TRIP? */}
          <SectionCard
            title="Which Car Should You Choose for an ECIL Trip?"
            subtitle="The right vehicle depends on your passengers, luggage and type of journey."
          >
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
              Long Drive Cars currently lists a range of hatchbacks, sedans, SUVs and larger vehicles, with availability depending on location and booking time.
            </p>
          </SectionCard>

          {/* WHEN TO RENT A SELF-DRIVE CAR IN ECIL */}
          <SectionCard
            title="When to Rent a Self-Drive Car in ECIL"
            subtitle="There are several situations where a self-drive rental can be useful:"
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

          {/* WHAT MAKES LONG DRIVE CARS USEFUL FOR ECIL CUSTOMERS? */}
          <div className="space-y-4">
            <div>
              <h2 className="text-2xl font-bold text-slate-900">
                What Makes Long Drive Cars Useful for ECIL Customers?
              </h2>
              <p className="text-slate-600 text-sm mt-1">
                When comparing options for Self drive car rental in ECIL, look beyond just the vehicle and consider the rental terms and booking process.
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
              The platform also allows customers to check cars available near their location and book through the Long Drive Cars app. This can be useful for an ECIL journey where you may want to visit several nearby areas instead of travelling directly from one destination to another.
            </div>
          </div>

          {/* HOW TO BOOK A SELF-DRIVE CAR */}
          <SectionCard
            title="How to Book a Self-Drive Car"
            subtitle="If you want to rent a self drive car in ECIL, you can check available vehicles through the Long Drive Cars platform."
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
                Long Drive Cars states that customers must be 18+ and that after a successful booking they can upload a selfie photo, Aadhaar card and driving licence through the app for verification. The company also states that documents need to be uploaded before pickup time.
              </p>
            </div>
          </SectionCard>

          {/* PLAN YOUR ECIL DRIVE YOUR WAY */}
          <SectionCard title="Plan Your ECIL Drive Your Way">
            <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
              The benefit of self drive cars near ECIL is that your journey does not have to follow a fixed route.
            </p>
            <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
              For example, you could start from ECIL X Roads, stop at AS Rao Nagar for shopping, continue towards Sainikpuri and Kapra Lake, drive towards Moula Ali and return to ECIL later in the evening.
            </p>
            <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
              For a family outing, you may prefer a sedan or SUV with more cabin space. For a short city trip, a compact hatchback may be easier to handle.
            </p>
            <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
              The important point is to select the vehicle based on your number of passengers, luggage, driving distance and planned itinerary.
            </p>
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

          {/* CTA SECTION */}
          <section className="bg-white border border-slate-200 rounded-2xl p-8 sm:p-10 text-center space-y-4 shadow-xs">
            <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900">
              Book Your Self-Drive Car in ECIL
            </h2>
            <p className="text-slate-600 text-xs sm:text-sm max-w-2xl mx-auto leading-relaxed">
              Self Drive Car Rental in ECIL gives you the flexibility to explore ECIL, AS Rao Nagar, Sainikpuri, Kapra, Kushaiguda, Safilguda and Moula Ali according to your own schedule. Whether you need a car for everyday travel, shopping, family outings, airport travel or a weekend road trip, Long Drive Cars provides different vehicle options with features such as flexible hours, unlimited kilometres, no deposit and 24/7 breakdown service.
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