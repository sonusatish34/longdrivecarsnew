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
  Landmark,
  Compass,
  Route,
  Navigation,
  Trees,
  Trophy
} from 'lucide-react';

const TARGET_URL = 'https://www.longdrivecars.com';
const CANONICAL_URL = 'https://www.longdrivecars.com/self-drive-cars-near-nampally';

const HIGHLIGHTS = [
  'Central Hyderabad locality with direct access to Nampally Railway Station and Nampally Metro Station (Red Line / Corridor I)',
  'Surrounded by major hubs including Lakdikapul, Abids, Basheerbagh, Khairatabad, Mehdipatnam, and Afzalgunj',
  'Close proximity to cultural and historic landmarks like Public Gardens, Numaish, and Salar Jung Museum',
  'Seamless travel across central commercial and heritage circuits in a single vehicle without booking multiple rides',
  'Flexible rental features including Unlimited Kilometres, Choose Your Own Hours, and Exact Car Guaranteed'
];

const EXPLORE_PLACES = [
  {
    icon: Train,
    title: 'Nampally Railway Station',
    badge: 'Major Transit Landmark',
    desc: 'An important railway and transport point in the locality, serving trains across regional and national routes.',
    note: 'Convenient starting or pickup point for seamless onward road journeys across Hyderabad.'
  },
  {
    icon: Trees,
    title: 'Public Gardens',
    badge: 'Historic Open Space',
    desc: 'A historic recreational space in Nampally, also associated with the State Legislative Assembly, Lalitha Kala Toranam and Jawahar Bal Bhavan.',
    note: 'Ideal for peaceful walks, family outings, and exploring heritage structures.'
  },
  {
    icon: Landmark,
    title: 'Y.S.R. State Museum',
    badge: 'Art & Archaeology',
    desc: 'Located inside Public Gardens and known for its rich archaeological collections, antique artifacts, and fine arts.',
    note: 'A rewarding cultural stop easily added to any central city itinerary.'
  },
  {
    icon: ShoppingBag,
    title: 'Nampally Market',
    badge: 'Local Retail & Bazaars',
    desc: 'One of the bustling commercial and shopping landmarks identified around Nampally Metro Station.',
    note: 'Great for local shopping, street food, and experiencing the city’s lively retail pulse.'
  },
  {
    icon: Landmark,
    title: 'Salar Jung Museum',
    badge: 'World-Renowned Museum',
    desc: 'Located at Afzalgunj and known globally for its extensive collections of international art, historic antiques, and manuscripts.',
    note: 'A must-visit cultural destination situated just minutes from Nampally.'
  },
  {
    icon: Landmark,
    title: 'Birla Mandir',
    badge: 'White-Marble Temple',
    desc: 'A prominent white-marble temple situated on Kala Pahad near Hussain Sagar, offering panoramic city views.',
    note: 'Easily combined with an evening drive along the lakeside.'
  },
  {
    icon: Compass,
    title: 'Charminar',
    badge: 'Iconic Historic Landmark',
    desc: 'One of Hyderabad’s most recognised historic landmarks, with the famous Laad Bazaar located right alongside.',
    note: 'Perfect for culture enthusiasts, pearl shopping, and culinary exploration in Old City.'
  },
  {
    icon: Trophy,
    title: 'Assembly and LB Stadium',
    badge: 'Civic & Sports Hubs',
    desc: 'Both are prominent civic and sporting landmarks located right around the Assembly Metro Station.',
    note: 'Seamless to visit or pass through while driving along central avenues.'
  }
];

const QUICK_INFO = [
  { need: 'Explore different vehicles', info: 'Compare thousands of cars in the app' },
  { need: 'Want the car you selected', info: 'Exact Car Guaranteed' },
  { need: 'Plan your own schedule', info: 'Choose Your Own Hours' },
  { need: 'Combine multiple destinations', info: 'Unlimited Kilometres' },
  { need: 'Need roadside assistance', info: '24/7 breakdown help, replacement and towing' }
];

const LDC_FEATURES = [
  'Exact Car Guaranteed',
  'Unlimited Kilometres',
  'Choose Your Own Hours',
  'Original Car Photos in the app',
  'Compare thousands of cars via app',
  '30-second quick booking option',
  'Pay ₹200 to hold your car',
  '24/7 Breakdown Help',
  'Free car replacement guaranteed',
  'Towing service included'
];

const FAQS = [
  {
    q: '1. Can I book a self-drive car near Nampally?',
    a: 'Customers travelling around Nampally can explore available self-drive cars and booking options through Long Drive Cars.'
  },
  {
    q: '2. What places can I visit from Nampally by car?',
    a: 'Depending on your itinerary, you can plan drives towards Public Gardens, Y.S.R. State Museum, Salar Jung Museum, Charminar, Birla Mandir and other Hyderabad destinations.'
  },
  {
    q: '3. Can I see the original car photos before booking?',
    a: 'Yes. The supplied Long Drive Cars information states that customers can check original car photos and book through the app.'
  },
  {
    q: '4. What documents are required for a first booking?',
    a: 'A new customer needs an Aadhaar photo or passport photo and driving licence photo according to the supplied information. Existing customers do not need documents again from their second booking.'
  },
  {
    q: '5. Is breakdown assistance available during the rental?',
    a: 'Yes. The supplied information states that 24/7 breakdown help includes free car replacement and towing service.'
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

export default function NampallyGuidePage() {
  return (
    <>
      <Head>
        <title>Self Drive Cars Near Nampally, Hyderabad | Long Drive Cars</title>
        <meta
          name="description"
          content="Looking for self drive cars near Nampally, Hyderabad? Choose cars with flexible hours, unlimited km, exact car guarantee and 24/7 breakdown support."
        />
        <meta
          name="keywords"
          content="Self Drive Cars Near Nampally, self drive cars in Nampally, Self driving cars in Hyderabad, Rent Self Drive Cars Hyderabad, self drive cars near Nampally, Self Drive Cars Central Hyderabad"
        />
        <link rel="canonical" href={CANONICAL_URL} />
        <meta property="og:type" content="article" />
        <meta property="og:title" content="Self Drive Cars Near Nampally, Hyderabad | Long Drive Cars" />
        <meta
          property="og:description"
          content="Looking for self drive cars near Nampally, Hyderabad? Choose cars with flexible hours, unlimited km, exact car guarantee and 24/7 breakdown support."
        />
        <meta property="og:url" content={CANONICAL_URL} />
        <meta property="og:site_name" content="Long Drive Cars" />
        <meta property="og:image" content="https://www.longdrivecars.com/locationpages/nampally.webp" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Self Drive Cars Near Nampally, Hyderabad | Long Drive Cars" />
        <meta
          name="twitter:description"
          content="Looking for self drive cars near Nampally, Hyderabad? Choose cars with flexible hours, unlimited km, exact car guarantee and 24/7 breakdown support."
        />
        <meta name="twitter:image" content="https://www.longdrivecars.com/locationpages/nampally.webp" />
      </Head>

      <div className="min-h-screen bg-slate-50 text-slate-900 antialiased pt-24 lg:pt-0">
        {/* HEADER SECTION */}
        <header className="bg-white py-12 md:py-16 px-4 sm:px-6 lg:px-8 border-b border-slate-200">
          <div className="max-w-4xl mx-auto text-center space-y-4">
            <span className="inline-block px-3 py-1 text-xs font-semibold uppercase tracking-wider bg-slate-100 text-slate-700 rounded-full">
              Rental Guide & Travel Information
            </span>
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight text-slate-900 leading-tight">
              Looking for Self Drive Cars Near Nampally?
            </h1>
            <p className="text-slate-600 text-sm sm:text-base md:text-lg max-w-3xl mx-auto leading-relaxed">
              Self Drive Cars Near Nampally can be a useful option when you want flexible travel across central Hyderabad without depending on cab availability or fixed schedules. Nampally is a well-known central-city locality with important transport, commercial and cultural landmarks. The Nampally Metro Station is located opposite Nampally Railway Station, and the metro station area includes landmarks such as Nampally Market, Public Gardens, Nampally Railway Station and Numaish.
            </p>
            <p className="text-slate-600 text-sm sm:text-base max-w-3xl mx-auto leading-relaxed">
              Whether you are planning a city commute, family outing, shopping trip, airport journey or a drive around Hyderabad's heritage areas, a self-drive car lets you decide your own route and timing.
            </p>
          </div>
        </header>

        {/* COVER IMAGE */}
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 -mt-6">
          <div className="rounded-2xl overflow-hidden shadow-sm border border-slate-200 bg-white">
            <Image
              src="/locationpages/nampally.webp"
              height={2000}
              width={2000}
              className="rounded-2xl object-cover w-full max-h-[480px]"
              alt="Self drive cars near Nampally Hyderabad for local travel and city trips"
              priority
            />
          </div>
        </div>

        {/* MAIN BODY */}
        <main className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-10 space-y-8">
          {/* WHY CHOOSE A SELF-DRIVE CAR AROUND NAMPALLY */}
          <SectionCard title="Why Choose a Self-Drive Car Around Nampally?">
            <p className="text-slate-600 leading-relaxed text-sm sm:text-base">
              Nampally is positioned close to several important central Hyderabad areas, including Lakdikapul, Abids, Basheerbagh, Khairatabad, Mehdipatnam and Afzalgunj. It is also part of Hyderabad Metro's Corridor I, which connects Nampally with areas including Ameerpet, Punjagutta, Lakdikapul, LB Nagar and other parts of the city.
            </p>
            <p className="text-slate-600 leading-relaxed text-sm sm:text-base">
              This central location can be particularly useful when your travel plan includes multiple stops. Instead of booking separate rides for each destination, you can use one self-drive car throughout your journey.
            </p>
            <p className="text-slate-700 font-medium text-sm sm:text-base bg-slate-50 p-4 rounded-xl border border-slate-200">
              For people searching for Self drive car rental near Nampally, the flexibility can be useful for both short city trips and longer Hyderabad drives.
            </p>
            <div className="pt-2">
              <h3 className="text-sm font-bold text-slate-800 uppercase tracking-wide mb-3">
                Key Travel Advantages Around Nampally
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

          {/* PLACES TO EXPLORE AROUND NAMPALLY */}
          <div className="space-y-4">
            <div>
              <h2 className="text-2xl font-bold text-slate-900">Places to Explore Around Nampally</h2>
              <p className="text-slate-600 text-sm sm:text-base mt-1">
                Nampally is surrounded by several places that can be included in a Hyderabad city drive:
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
              This makes self drive cars around Nampally relevant for people who want to combine several destinations in one trip.
            </div>
          </div>

          {/* A SELF-DRIVE DAY AROUND NAMPALLY */}
          <SectionCard title="A Self-Drive Day Around Nampally">
            <p className="text-slate-600 leading-relaxed text-sm sm:text-base">
              Consider a simple Hyderabad city plan: start around Nampally, visit Public Gardens and the State Museum, continue towards Salar Jung Museum, and then drive towards the Charminar area for an evening visit.
            </p>
            <p className="text-slate-600 leading-relaxed text-sm sm:text-base">
              A self-drive car gives you the freedom to change the order of these stops depending on your schedule. For a family trip, friends' outing or personal city exploration, this flexibility can be more convenient than arranging separate rides between locations.
            </p>
          </SectionCard>

          {/* WHAT CAN YOU EXPECT FROM LONG DRIVE CARS */}
          <SectionCard title="What Can You Expect from Long Drive Cars?">
            <p className="text-slate-600 leading-relaxed text-sm sm:text-base">
              The Long Drive Cars information provided for this page states that customers can compare thousands of self-drive cars through the Long Drive Cars app and check original car photos before booking. It also lists Exact Car Guaranteed.
            </p>
            <p className="text-slate-600 leading-relaxed text-sm sm:text-base">
              The company information also promotes a 30-second booking option and says customers can pay ₹200 to hold their car.
            </p>
            <p className="text-slate-700 font-medium text-sm sm:text-base bg-slate-50 p-4 rounded-xl border border-slate-200">
              For customers planning different types of journeys, Long Drive Cars lists Unlimited Kilometres and Choose Your Own Hours.
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
            title="Nampally Self-Drive Options at a Glance"
            subtitle="Based on the specifications supplied by Long Drive Cars:"
          >
            <div className="overflow-x-auto">
              <table className="w-full text-left text-xs sm:text-sm border-collapse">
                <thead>
                  <tr className="border-b border-slate-200 bg-slate-50/80 text-slate-800 font-semibold">
                    <th className="py-3 px-3">Travel Requirement</th>
                    <th className="py-3 px-3">Long Drive Cars Feature</th>
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
            <SectionCard title="Booking a Car for the First Time?">
              <p className="text-slate-600 text-xs sm:text-sm leading-relaxed">
                The supplied Long Drive Cars information states that new customers need one government ID photo or passport photo along with a driving licence photo. From the second booking, existing customers do not need to submit documents again.
              </p>
              <p className="text-slate-600 text-xs sm:text-sm leading-relaxed">
                So, if you are planning to rent a self drive car near Nampally for your first booking, keeping these documents ready can help simplify the process.
              </p>
            </SectionCard>

            <SectionCard title="What If the Car Breaks Down?">
              <p className="text-slate-600 text-xs sm:text-sm leading-relaxed">
                Long Drive Cars' supplied information highlights 24/7 breakdown help, with free car replacement guaranteed and towing service.
              </p>
              <p className="text-slate-600 text-xs sm:text-sm leading-relaxed">
                This can be relevant when your Nampally trip extends to destinations outside central Hyderabad. The stated breakdown support provides assistance if an unexpected vehicle issue affects the journey.
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
              Self Drive Cars Near Nampally can be useful when your Hyderabad itinerary includes several stops across the central part of the city. With access to Nampally Railway Station, Public Gardens, Nampally Market, Salar Jung Museum, Charminar, Birla Mandir and other nearby destinations, the area can work as a convenient starting point for city exploration.
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