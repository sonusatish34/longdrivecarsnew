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
  Route,
  Navigation,
  Compass,
  GraduationCap,
  Trophy,
  Trees,
  Waves,
  Landmark,
  ShieldCheck,
  Wrench,
  Sparkles,
  MapPin
} from 'lucide-react';

const TARGET_URL = 'https://www.longdrivecars.com';
const CANONICAL_URL = 'https://www.longdrivecars.com/self-drive-car-rental-in-ramanthapur';

const HIGHLIGHTS = [
  'Strategically located in East Hyderabad between Uppal and Amberpet, close to Habsiguda, Kothapet, Nagole & Dilsukhnagar',
  'Convenient road connectivity towards Hyderabad–Warangal Road and key eastern transit corridors',
  'Total freedom to plan your day around local lakes, temples, stadiums, and retail hubs without public transit schedules',
  'Seamlessly link multiple eastern suburban stops in a single vehicle without multiple cab bookings',
  'Flexible packages featuring choose your own hours, unlimited kilometres, and zero deposit options'
];

const FAMOUS_PLACES = [
  {
    icon: Waves,
    title: '1. Ramanthapur Cheruvu',
    badge: 'Local Waterfront',
    desc: 'For a short local drive, Ramanthapur Cheruvu is one of the places associated directly with the locality. The lake area is near Ramanthapur and is also connected with nearby landmarks such as the Rajiv Gandhi International Cricket Stadium and NGRI Metro area. It can work well for a relaxed evening drive when you don’t want to plan a long-distance trip.',
    note: 'Self-drive idea: Ramanthapur → Ramanthapur Cheruvu → nearby local streets → return to Ramanthapur.'
  },
  {
    icon: Trees,
    title: '2. NGRI & Rock Garden Area',
    badge: 'Research & Nature',
    desc: 'The NGRI area is close to Ramanthapur and Habsiguda. It is also useful as a starting point if your plan includes exploring the eastern side of Hyderabad.',
    note: 'A self-drive car gives you the flexibility to combine NGRI with Habsiguda, Tarnaka or Uppal rather than making separate trips.'
  },
  {
    icon: Trophy,
    title: '3. Rajiv Gandhi International Cricket Stadium – Uppal',
    badge: 'Sports Landmark',
    desc: 'The Rajiv Gandhi International Cricket Stadium, popularly known as Uppal Stadium, is one of the major landmarks close to Ramanthapur. Sources place the stadium roughly 1–2 km from parts of the Ramanthapur area. If there is a match or event, travelling by your own rented car can be convenient for a group of friends or family.',
    note: 'Possible route: Ramanthapur → Uppal → Stadium area → NGRI → Ramanthapur.'
  },
  {
    icon: Compass,
    title: '4. Habsiguda',
    badge: 'Commercial & Institutional Hub',
    desc: 'Habsiguda is another nearby locality that connects naturally with Ramanthapur. The area is known for its educational institutions, commercial activity and connectivity toward Uppal and central Hyderabad.',
    note: 'For a local day plan, you can combine Habsiguda with NGRI and Uppal instead of treating each destination as a separate trip.'
  },
  {
    icon: GraduationCap,
    title: '5. Osmania University',
    badge: 'Historic Campus',
    desc: 'Osmania University is one of Hyderabad’s major educational landmarks and is located toward the western side of Ramanthapur. Ramanthapur’s surrounding locality network provides access toward the university and nearby areas.',
    note: 'A self-drive car can be useful if you are visiting the university area along with Tarnaka, Habsiguda or nearby parts of Hyderabad.'
  },
  {
    icon: Route,
    title: '6. Uppal',
    badge: 'Transit & Retail Gateway',
    desc: 'Uppal is one of the most important nearby areas for Ramanthapur. Ramanthapur lies between Uppal and Amberpet, making Uppal a natural destination for shopping, food, work and entertainment trips.',
    note: 'You can also combine Uppal with the cricket stadium, NGRI and Nagole during a longer local drive.'
  },
  {
    icon: Navigation,
    title: '7. Nagole',
    badge: 'East Hyderabad Corridor',
    desc: 'Nagole is another nearby East Hyderabad destination. It can be included in a self-drive itinerary along with Uppal, NGRI and Ramanthapur.',
    note: 'For friends travelling together, having a self-drive car makes it easier to decide spontaneously where to stop, eat or spend additional time.'
  },
  {
    icon: ShoppingBag,
    title: '8. Kothapet & Dilsukhnagar',
    badge: 'Major Commercial Hub',
    desc: 'Ramanthapur has convenient access toward Kothapet and Dilsukhnagar. Dilsukhnagar is a major commercial and residential hub, while Kothapet is known for its busy markets and shopping activity.',
    note: 'Useful for shopping, family outings, restaurant visits, cinema plans, evening drives, and multiple-stop trips.'
  },
  {
    icon: Waves,
    title: '9. Saroornagar Lake',
    badge: 'Outdoor Scenic Spot',
    desc: 'For people looking for a more relaxed outing, Saroornagar Lake is another destination that can be included from the Ramanthapur side. It gives you an option to combine a city drive with some outdoor time.',
    note: 'Suggested route: Ramanthapur → Kothapet → Saroornagar → Dilsukhnagar → Ramanthapur.'
  },
  {
    icon: Landmark,
    title: '10. Ashtalakshmi Temple',
    badge: 'Religious Landmark',
    desc: 'The Ashtalakshmi Temple in Dilsukhnagar is another nearby religious destination that can be included in a local self-drive itinerary. Local attraction listings identify it among places of interest around Ramanthapur.',
    note: 'For families, a self-drive car can make it easier to combine temple visits with shopping or dining in Dilsukhnagar and Kothapet.'
  }
];

const CITY_ATTRACTIONS = [
  'Hussain Sagar Lake',
  'NTR Gardens',
  'Charminar',
  'Salar Jung Museum',
  'Birla Mandir',
  'Golconda Fort',
  'Qutb Shahi Tombs',
  'Nehru Zoological Park'
];

const FEATURE_TABLE = [
  { feature: 'Choose Your Own Hours', benefit: 'Drive when you want' },
  { feature: 'Unlimited Kilometres', benefit: 'Explore more places freely' },
  { feature: 'Exact Car Guaranteed', benefit: 'Get the car you selected' },
  { feature: 'Zero Deposit Option', benefit: 'Book without a deposit option' },
  { feature: '24/7 Breakdown Help', benefit: 'Support when you need it' }
];

const LDC_FEATURES = [
  {
    title: 'Choose Your Own Hours',
    desc: 'Instead of planning your day around a fixed itinerary, the company information promotes “Choose your Own hours.” This can be useful for short local trips as well as longer drives.'
  },
  {
    title: 'Unlimited Kilometres',
    desc: 'For customers planning multiple destinations, the company information highlights unlimited kilometres. That can be particularly relevant when your Ramanthapur trip expands into Uppal, Nagole, Dilsukhnagar or other Hyderabad destinations.'
  },
  {
    title: 'Compare Cars Before Booking',
    desc: 'The Long Drive Cars information says customers can compare thousands of self-drive cars through the Long Drive Cars app. This can help you compare different vehicle categories before selecting a car.'
  },
  {
    title: 'Check Original Car Photos',
    desc: 'The company information also highlights the ability to check original car photos and book directly through the mobile application.'
  },
  {
    title: 'Exact Car Guaranteed',
    desc: 'The uploaded material promotes an “Exact Car Guaranteed” feature, ensuring you get the specific vehicle model you booked.'
  },
  {
    title: 'Zero Deposit Option',
    desc: 'The company information states that a zero-deposit option is available, while its broader deposit information describes refundable deposit alternatives depending on the vehicle category.'
  },
  {
    title: '24/7 Breakdown Assistance',
    desc: 'For longer drives, the uploaded material highlights 24/7 breakdown help, free car replacement guarantee, and towing service.'
  }
];

const TRIP_IDEAS = [
  {
    title: 'Short Evening Drive',
    route: 'Ramanthapur → Habsiguda → NGRI → Uppal → Ramanthapur',
    desc: 'Ideal for a quick city outing after office or for a relaxed evening break.'
  },
  {
    title: 'Family Day Out',
    route: 'Ramanthapur → Uppal → Saroornagar → Dilsukhnagar → Kothapet',
    desc: 'A seamless combination of shopping, food, entertainment, and local sightseeing.'
  },
  {
    title: "Friends' City Drive",
    route: 'Ramanthapur → Nagole → Uppal → Habsiguda → Tarnaka',
    desc: 'A flexible route where you can stop at different places along the way spontaneously.'
  },
  {
    title: 'Hyderabad Heritage Drive',
    route: 'Ramanthapur → Charminar → Salar Jung Museum → Hussain Sagar → Ramanthapur',
    desc: "For a longer full-day city experience connecting Ramanthapur with Hyderabad's major heritage sites like Charminar, Golconda Fort, Chowmahalla Palace, and Qutb Shahi Tombs."
  }
];

const BOOKING_STEPS = [
  {
    title: 'Open the Long Drive Cars app',
    detail: 'Choose your location and rental dates.'
  },
  {
    title: 'Compare available cars',
    detail: 'Check different car categories and the available vehicle information.'
  },
  {
    title: 'Check the car photos',
    detail: 'The company promotes original car photos through the app.'
  },
  {
    title: 'Select your preferred car',
    detail: 'Choose a hatchback, sedan, SUV or 7-seater depending on your trip.'
  },
  {
    title: 'Complete the booking',
    detail: 'Confirm your rental details and applicable charges.'
  },
  {
    title: 'Pick up the car and drive',
    detail: 'Follow pickup instructions and enjoy your journey.'
  }
];

const FAQS = [
  {
    q: '1. Is self-drive car rental available for Ramanthapur?',
    a: 'Yes, Ramanthapur customers can look for available self-drive cars through Long Drive Cars and select a vehicle based on their required date, duration and car category.'
  },
  {
    q: '2. Which places can I visit from Ramanthapur by self-drive car?',
    a: 'You can plan local drives toward Uppal, Habsiguda, NGRI, Nagole, Kothapet, Dilsukhnagar and Saroornagar, or continue toward major Hyderabad attractions depending on the time available.'
  },
  {
    q: '3. Can I take a self-drive car for a full-day Hyderabad trip?',
    a: 'Yes, the company information includes different rental-duration and vehicle options. Check the current availability and applicable price in the app before booking.'
  },
  {
    q: '4. Is there a zero-deposit option?',
    a: 'The uploaded Long Drive Cars information states that a zero-deposit option is available. Other deposit options may apply depending on the selected vehicle category.'
  },
  {
    q: '5. What happens if the car develops a problem during the trip?',
    a: 'The uploaded information highlights 24/7 breakdown help, free car replacement and towing service. Customers should check the current terms applicable to their booking.'
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

export default function RamanthapurGuidePage() {
  return (
    <>
      <Head>
        <title>Self Drive Car Rental in Ramanthapur, Hyderabad | Long Drive Cars</title>
        <meta
          name="description"
          content="Looking for self drive car rental in Ramanthapur, Hyderabad? Choose hatchbacks, sedans, SUVs & 7-seaters with flexible hours, unlimited km and zero deposit."
        />
        <meta
          name="keywords"
          content="Self Drive Car Rental in Ramanthapur, self drive cars in Ramanthapur, Self driving cars in Hyderabad, Rent Self Drive Cars Hyderabad, self drive cars near Ramanthapur, Self Drive Cars Secunderabad"
        />
        <link rel="canonical" href={CANONICAL_URL} />
        <meta property="og:type" content="article" />
        <meta property="og:title" content="Self Drive Car Rental in Ramanthapur, Hyderabad | Long Drive Cars" />
        <meta
          property="og:description"
          content="Looking for self drive car rental in Ramanthapur, Hyderabad? Choose hatchbacks, sedans, SUVs & 7-seaters with flexible hours, unlimited km and zero deposit."
        />
        <meta property="og:url" content={CANONICAL_URL} />
        <meta property="og:site_name" content="Long Drive Cars" />
        <meta property="og:image" content="https://www.longdrivecars.com/locationpages/ramanthapur.webp" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Self Drive Car Rental in Ramanthapur, Hyderabad | Long Drive Cars" />
        <meta
          name="twitter:description"
          content="Looking for self drive car rental in Ramanthapur, Hyderabad? Choose hatchbacks, sedans, SUVs & 7-seaters with flexible hours, unlimited km and zero deposit."
        />
        <meta name="twitter:image" content="https://www.longdrivecars.com/locationpages/ramanthapur.webp" />
      </Head>

      <div className="min-h-screen bg-slate-50 text-slate-900 antialiased pt-24 lg:pt-0">
        {/* HEADER SECTION */}
        <header className="bg-white py-12 md:py-16 px-4 sm:px-6 lg:px-8 border-b border-slate-200">
          <div className="max-w-4xl mx-auto text-center space-y-4">
            <span className="inline-block px-3 py-1 text-xs font-semibold uppercase tracking-wider bg-slate-100 text-slate-700 rounded-full">
              Rental Guide & Travel Information
            </span>
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight text-slate-900 leading-tight">
              Need Self Drive Car Rental in Ramanthapur for Your Next Drive?
            </h1>
            <p className="text-slate-600 text-sm sm:text-base md:text-lg max-w-3xl mx-auto leading-relaxed">
              Looking for a self drive car rental in Ramanthapur for a local outing, shopping trip, family visit, office work, or a weekend drive from Hyderabad? Ramanthapur is a well-connected locality in East Hyderabad, situated between Uppal and Amberpet and close to areas such as Habsiguda, Kothapet, Nagole and Dilsukhnagar. It also connects conveniently toward the Hyderabad–Warangal Road.
            </p>
            <p className="text-slate-600 text-sm sm:text-base max-w-3xl mx-auto leading-relaxed">
              With a self-drive car, you can start from Ramanthapur and plan your day around nearby lakes, temples, shopping areas, entertainment destinations and major Hyderabad attractions without depending on fixed public-transport timings.
            </p>
          </div>
        </header>

        {/* COVER IMAGE */}
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 -mt-6">
          <div className="rounded-2xl overflow-hidden shadow-sm border border-slate-200 bg-white">
            <Image
              src="/locationpages/ramanthapur.webp"
              height={2000}
              width={2000}
              className="rounded-2xl object-cover w-full max-h-[480px]"
              alt="Self drive car rental in Ramanthapur Hyderabad for local travel and weekend trips"
              priority
            />
          </div>
        </div>

        {/* MAIN BODY */}
        <main className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-10 space-y-8">
          {/* WHY CHOOSE A SELF-DRIVE CAR IN RAMANTHAPUR? */}
          <SectionCard title="Why Choose a Self Drive Car in Ramanthapur?">
            <p className="text-slate-600 leading-relaxed text-sm sm:text-base">
              Ramanthapur is surrounded by several residential, educational, commercial and recreational areas. A self-drive car can be useful when you want to combine multiple places in one trip.
            </p>
            <p className="text-slate-600 leading-relaxed text-sm sm:text-base">
              For example, you could start from Ramanthapur, drive towards Habsiguda, continue to NGRI, visit Uppal, spend some time around Saroornagar, or head toward Dilsukhnagar and Kothapet.
            </p>
            <p className="text-slate-700 font-medium text-sm sm:text-base bg-slate-50 p-4 rounded-xl border border-slate-200">
              The Long Drive Cars information document highlights features such as choosing your own hours, unlimited kilometres, checking original car photos, exact-car availability, 24/7 breakdown assistance and zero-deposit options.
            </p>
            <div className="pt-2">
              <h3 className="text-sm font-bold text-slate-800 uppercase tracking-wide mb-3">Key Travel Advantages in Ramanthapur</h3>
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

          {/* FAMOUS PLACES TO EXPLORE AROUND RAMANTHAPUR */}
          <div className="space-y-4">
            <div>
              <h2 className="text-2xl font-bold text-slate-900">
                Famous Places to Explore Around Ramanthapur by Self Drive Car
              </h2>
              <p className="text-slate-600 text-sm sm:text-base mt-1">
                From scenic cheruvus and cricket stadiums to retail centers and heritage corridors, navigate your day effortlessly:
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {FAMOUS_PLACES.map(({ icon: Icon, title, badge, desc, note }, idx) => (
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

          {/* RAMANTHAPUR TO HYDERABAD CITY ATTRACTIONS */}
          <SectionCard
            title="Ramanthapur to Hyderabad City Attractions"
            subtitle="If you have booked the car for a full day, you don’t have to restrict your trip to Ramanthapur alone."
          >
            <p className="text-slate-600 text-xs sm:text-sm leading-relaxed">
              Depending on your planned route, you can continue toward major Hyderabad tourist destinations highlighted by the Hyderabad District and Telangana Tourism websites:
            </p>

            <div className="flex flex-wrap gap-2 pt-1">
              {CITY_ATTRACTIONS.map((attr, idx) => (
                <span
                  key={idx}
                  className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-slate-50 border border-slate-200 text-xs sm:text-sm font-medium text-slate-700"
                >
                  <CheckCircle2 className="w-3.5 h-3.5 text-slate-500 shrink-0" />
                  {attr}
                </span>
              ))}
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2">
              <div className="p-3.5 bg-slate-50 rounded-xl border border-slate-200 text-xs sm:text-sm text-slate-700">
                <span className="font-bold text-slate-900">Route Option 1:</span> Ramanthapur → Habsiguda → Tank Bund / Hussain Sagar → NTR Gardens → return
              </div>
              <div className="p-3.5 bg-slate-50 rounded-xl border border-slate-200 text-xs sm:text-sm text-slate-700">
                <span className="font-bold text-slate-900">Route Option 2:</span> Ramanthapur → Dilsukhnagar → Charminar → Salar Jung Museum → return
              </div>
            </div>

            <p className="text-xs text-slate-500 italic pt-1">
              The exact route and travel time will depend on traffic and your selected destinations.
            </p>
          </SectionCard>

          {/* 5-POINT WHY CHOOSE LONG DRIVE CARS TABLE */}
          <SectionCard
            title="Why Choose Long Drive Cars in Ramanthapur?"
            subtitle="Simple, transparent self-drive benefits for your local or long-distance travel:"
          >
            <div className="overflow-x-auto">
              <table className="w-full text-left text-xs sm:text-sm border-collapse">
                <thead>
                  <tr className="border-b border-slate-200 bg-slate-50/80 text-slate-800 font-semibold">
                    <th className="py-3 px-3">Feature</th>
                    <th className="py-3 px-3">Benefit</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-100 text-slate-600">
                  {FEATURE_TABLE.map((row, idx) => (
                    <tr key={idx} className="hover:bg-slate-50/50 transition">
                      <td className="py-3 px-3 font-medium text-slate-900">{row.feature}</td>
                      <td className="py-3 px-3">{row.benefit}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </SectionCard>

          {/* LONG DRIVE CARS FEATURES FOR RAMANTHAPUR TRIP */}
          <div className="space-y-4">
            <div>
              <h2 className="text-2xl font-bold text-slate-900">
                Long Drive Cars Features for Your Ramanthapur Trip
              </h2>
              <p className="text-slate-600 text-sm mt-1">
                The uploaded company information highlights several rental features that can be naturally useful for Ramanthapur customers:
              </p>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
              {LDC_FEATURES.map((item, idx) => (
                <div key={idx} className="bg-white p-5 rounded-2xl border border-slate-200 shadow-xs space-y-1">
                  <h3 className="text-base font-bold text-slate-900">{item.title}</h3>
                  <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>

          {/* DOCUMENTS REQUIRED */}
          <SectionCard title="What Documents Are Required?">
            <p className="text-slate-600 text-xs sm:text-sm leading-relaxed">
              According to the uploaded company information, customers can provide one government ID photo or passport photo along with a driving licence photo. It also specifically states that from the second booking, old customers do not need to submit documents again.
            </p>
            <p className="text-slate-600 text-xs sm:text-sm leading-relaxed">
              For a new booking, customers should check the current document requirements in the Long Drive Cars app before confirming the rental.
            </p>
          </SectionCard>

          {/* HOW TO BOOK A SELF DRIVE CAR IN RAMANTHAPUR */}
          <SectionCard
            title="How to Book a Self Drive Car in Ramanthapur?"
            subtitle="The process is simple and can be completed entirely on your phone:"
          >
            <ol className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs sm:text-sm text-slate-700">
              {BOOKING_STEPS.map((step, idx) => (
                <li key={idx} className="flex items-start gap-2.5 p-3.5 rounded-xl bg-slate-50 border border-slate-200">
                  <span className="font-bold text-slate-900 text-xs mt-0.5 shrink-0 bg-slate-200 px-2 py-0.5 rounded-full">
                    {idx + 1}
                  </span>
                  <div>
                    <h4 className="font-bold text-slate-900">{step.title}</h4>
                    <p className="text-slate-600 text-xs">{step.detail}</p>
                  </div>
                </li>
              ))}
            </ol>
          </SectionCard>

          {/* SELF DRIVE TRIP IDEAS STARTING FROM RAMANTHAPUR */}
          <div className="space-y-4">
            <div>
              <h2 className="text-2xl font-bold text-slate-900">
                Self Drive Trip Ideas Starting From Ramanthapur
              </h2>
              <p className="text-slate-600 text-sm mt-1">
                Curated route templates designed around your schedule and travel companions:
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
          </div>

          {/* WHY RAMANTHAPUR IS A CONVENIENT STARTING POINT */}
          <SectionCard title="Why Ramanthapur Is a Convenient Starting Point for a Self Drive Trip">
            <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
              Ramanthapur's position between Uppal and Amberpet, together with access toward Habsiguda, Kothapet, Nagole and Dilsukhnagar, makes it possible to plan several different types of city drives from one starting point.
            </p>
            <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
              Instead of taking separate rides for every destination, you can book one self-drive car, choose your own schedule and build your route around the places you actually want to visit.
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

          {/* PLAN YOUR RAMANTHAPUR DRIVE & CTA */}
          <section className="bg-white border border-slate-200 rounded-2xl p-8 sm:p-10 text-center space-y-4 shadow-xs">
            <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900">
              Plan Your Ramanthapur Drive
            </h2>
            <p className="text-slate-600 text-xs sm:text-sm max-w-2xl mx-auto leading-relaxed">
              Whether you are planning a quick evening outing to Uppal or Habsiguda, a shopping trip around Kothapet and Dilsukhnagar, a family visit to a temple, or a longer Hyderabad sightseeing drive, a self-drive car gives you the flexibility to decide your own route and schedule.
            </p>
            <p className="text-slate-900 font-semibold text-sm">
              Book → Pick Up → Drive → Explore Ramanthapur & Hyderabad
            </p>
            <p className="text-xs text-slate-500">
              Long Drive Cars — Self Drive Cars for your Hyderabad journeys.
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