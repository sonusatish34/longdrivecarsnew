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
  Building2,
  Clock,
  Car
} from 'lucide-react';

const TARGET_URL = 'https://www.longdrivecars.com';
const CANONICAL_URL = 'https://www.longdrivecars.com/self-drive-cars-for-rent-in-kachiguda';

const HIGHLIGHTS = [
  'Central Hyderabad locality anchored by the historic Kacheguda Railway Station terminal',
  'Seamless connectivity to Narayanguda, Barkatpura, Chaderghat, Nallakunta, Himayatnagar & Sultan Bazaar',
  'Direct access to Narayanguda Metro Station linking into the wider Hyderabad Metro network',
  'Total flexibility to combine railway transit, local shopping errands, and heritage sightseeing in one car',
  'Flexible rental features including Unlimited Kilometres, Choose Your Own Hours, and Exact Car Guaranteed'
];

const EXPLORE_PLACES = [
  {
    icon: Train,
    title: 'Kacheguda Railway Station',
    badge: 'Historic Railway Terminal',
    desc: 'The railway station is one of the most recognisable landmarks in the locality. The present station building dates to the Nizam period and is noted for its distinctive architectural design.',
    note: 'Convenient starting or pickup point for seamless road journeys across central Hyderabad.'
  },
  {
    icon: Navigation,
    title: 'Narayanguda',
    badge: 'Metro & Educational Hub',
    desc: 'Narayanguda is closely connected with Kachiguda. L&T Metro identifies Keshav Memorial Institute of Technology, Shanti Theatre, YMCA Circle and Kachiguda Station among the landmarks around Narayanguda Metro Station.',
    note: 'Effortlessly connect student commutes, metro pickups, and commercial stops.'
  },
  {
    icon: ShoppingBag,
    title: 'Barkatpura',
    badge: 'Urban Commercial Centre',
    desc: 'Barkatpura is another nearby urban area with shopping, educational institutions and everyday commercial activity. It can easily be included when planning a city drive from Kachiguda.',
    note: 'Great for everyday local errands, tutoring visits, and shopping trips.'
  },
  {
    icon: Building2,
    title: 'Himayatnagar',
    badge: 'Shopping & Dining Hub',
    desc: 'Himayatnagar is useful for shopping, restaurants and central Hyderabad activities, making it a natural addition to a multi-stop self-drive route.',
    note: 'Ideal for weekend family dinners and boutique retail shopping.'
  },
  {
    icon: Landmark,
    title: 'Salar Jung Museum and Old Hyderabad',
    badge: 'Heritage & Culture',
    desc: 'For a longer city outing, destinations such as Salar Jung Museum, Purani Haveli and Charminar are within the broader central Hyderabad area. Travel listings place several of these attractions within a few kilometres of Kacheguda Railway Station.',
    note: 'Perfect for cultural day trips, museum visits, and heritage exploration.'
  }
];

const PLANNING_STAGES = [
  { stage: 'Select a vehicle', action: 'Compare different cars in the Long Drive Cars app' },
  { stage: 'Check the actual vehicle', action: 'View original car photos before booking' },
  { stage: 'Reserve your choice', action: 'Pay ₹200 to hold the selected car' },
  { stage: 'Decide the schedule', action: 'Choose your own rental hours' },
  { stage: 'Plan multiple stops', action: 'Use the unlimited-kilometre option' },
  { stage: 'Keep emergency support ready', action: '24/7 breakdown help is available' }
];

const USEFUL_ROUTES = [
  { title: 'Central-City Outing', route: 'Kachiguda → Narayanguda → Himayatnagar' },
  { title: 'Shopping & City Activities', route: 'Kachiguda → Abids → Nampally' },
  { title: 'Sightseeing Drive', route: 'Kachiguda → Old Hyderabad → Charminar' },
  { title: 'Heritage-Focused Trip', route: 'Kachiguda → Salar Jung Museum → Purani Haveli' },
  { title: 'Longer Road Journeys', route: 'Kachiguda → nearby eastern Hyderabad areas' }
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
  'Free car replacement and towing service',
  'Zero-deposit and refundable deposit options'
];

const FAQS = [
  {
    q: '1. Can I compare multiple cars before booking?',
    a: 'Yes. Long Drive Cars says its app allows customers to compare thousands of self-drive cars before making a booking.'
  },
  {
    q: '2. Can I check the actual car before selecting it?',
    a: 'The company information says customers can check original car photos and book through the app.'
  },
  {
    q: '3. Is there an option to hold a selected car?',
    a: 'Yes. Long Drive Cars states that customers can pay ₹200 to hold their car.'
  },
  {
    q: '4. Do I need documents every time I book?',
    a: 'No. The company states that new customers need the specified identity and driving-licence documents, while old customers do not need to submit documents again from their second booking.'
  },
  {
    q: '5. Is breakdown assistance available during the trip?',
    a: 'Yes. Long Drive Cars states that 24/7 breakdown help is available, with free car replacement and towing service.'
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

export default function KachigudaGuidePage() {
  return (
    <>
      <Head>
        <title>Self Drive Cars for Rent in Kachiguda, Hyderabad | Long Drive Cars</title>
        <meta
          name="description"
          content="Looking for self drive cars for rent in Kachiguda, Hyderabad? Compare cars with flexible hours, unlimited km, original photos and 24/7 breakdown support."
        />
        <meta
          name="keywords"
          content="Self Drive Cars for Rent in Kachiguda, self drive cars in Kachiguda, Self driving cars in Hyderabad, Rent Self Drive Cars Hyderabad, self drive cars near Kachiguda Railway Station, Self Drive Cars Central Hyderabad"
        />
        <link rel="canonical" href={CANONICAL_URL} />
        <meta property="og:type" content="article" />
        <meta property="og:title" content="Self Drive Cars for Rent in Kachiguda, Hyderabad | Long Drive Cars" />
        <meta
          property="og:description"
          content="Looking for self drive cars for rent in Kachiguda, Hyderabad? Compare cars with flexible hours, unlimited km, original photos and 24/7 breakdown support."
        />
        <meta property="og:url" content={CANONICAL_URL} />
        <meta property="og:site_name" content="Long Drive Cars" />
        <meta property="og:image" content="https://www.longdrivecars.com/locationpages/kachiguda.webp" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Self Drive Cars for Rent in Kachiguda, Hyderabad | Long Drive Cars" />
        <meta
          name="twitter:description"
          content="Looking for self drive cars for rent in Kachiguda, Hyderabad? Compare cars with flexible hours, unlimited km, original photos and 24/7 breakdown support."
        />
        <meta name="twitter:image" content="https://www.longdrivecars.com/locationpages/kachiguda.webp" />
      </Head>

      <div className="min-h-screen bg-slate-50 text-slate-900 antialiased pt-24 lg:pt-0">
        {/* HEADER SECTION */}
        <header className="bg-white py-12 md:py-16 px-4 sm:px-6 lg:px-8 border-b border-slate-200">
          <div className="max-w-4xl mx-auto text-center space-y-4">
            <span className="inline-block px-3 py-1 text-xs font-semibold uppercase tracking-wider bg-slate-100 text-slate-700 rounded-full">
              Rental Guide & Travel Information
            </span>
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight text-slate-900 leading-tight">
              Need Self Drive Cars for Rent in Kachiguda? Here’s What to Know
            </h1>
            <p className="text-slate-600 text-sm sm:text-base md:text-lg max-w-3xl mx-auto leading-relaxed">
              If you are searching for Self Drive Cars for Rent in Kachiguda, the locality can be a practical starting point for exploring central Hyderabad and travelling towards nearby areas. Kachiguda is a well-established neighbourhood, with Kacheguda Railway Station being one of its major landmarks.
            </p>
            <p className="text-slate-600 text-sm sm:text-base max-w-3xl mx-auto leading-relaxed">
              The area also has access to nearby localities such as Narayanguda, Barkatpura, Chaderghat, Nallakunta, Himayatnagar and Sultan Bazaar.
            </p>
          </div>
        </header>

        {/* COVER IMAGE */}
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 -mt-6">
          <div className="rounded-2xl overflow-hidden shadow-sm border border-slate-200 bg-white">
            <Image
              src="/locationpages/kachiguda.webp"
              height={2000}
              width={2000}
              className="rounded-2xl object-cover w-full max-h-[480px]"
              alt="Self drive cars for rent in Kachiguda Hyderabad for local travel and weekend trips"
              priority
            />
          </div>
        </div>

        {/* MAIN BODY */}
        <main className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-10 space-y-8">
          {/* WHY KACHIGUDA CAN BE A CONVENIENT STARTING POINT */}
          <SectionCard title="Why Kachiguda Can Be a Convenient Starting Point">
            <p className="text-slate-600 leading-relaxed text-sm sm:text-base">
              Kachiguda is particularly useful for travellers who want to combine railway travel, local city visits and road journeys. Kacheguda Railway Station is an important railway terminal, while Narayanguda Metro Station provides access to the Hyderabad Metro network. L&T Metro also lists Kachiguda Station among the landmarks around Narayanguda Metro Station.
            </p>
            <p className="text-slate-600 leading-relaxed text-sm sm:text-base">
              This makes a self-drive car useful when your plan involves multiple destinations instead of travelling only between two fixed points. For example, a day could involve:
            </p>
            <div className="p-3 bg-slate-50 rounded-xl border border-slate-200 text-xs sm:text-sm font-semibold text-slate-800">
              Suggested Itinerary: Kachiguda → Narayanguda → Himayatnagar → Abids → Nampally → return to Kachiguda
            </div>
            <p className="text-slate-600 text-sm leading-relaxed">
              With a rental car, you can organise the route around your own schedule rather than depending on individual cab bookings for every stop.
            </p>
            <div className="pt-2">
              <h3 className="text-sm font-bold text-slate-800 uppercase tracking-wide mb-3">
                Key Travel Advantages Around Kachiguda
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

          {/* PLACES AND AREAS TO EXPLORE FROM KACHIGUDA */}
          <div className="space-y-4">
            <div>
              <h2 className="text-2xl font-bold text-slate-900">Places and Areas to Explore from Kachiguda</h2>
              <p className="text-slate-600 text-sm sm:text-base mt-1">
                Kachiguda is surrounded by several established Hyderabad neighbourhoods and attractions:
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

          {/* WHAT TO CHECK BEFORE BOOKING A CAR */}
          <SectionCard title="What to Check Before Booking a Car">
            <p className="text-slate-600 leading-relaxed text-sm sm:text-base">
              Long Drive Cars provides several features designed around flexible self-drive travel. The company information says customers can compare thousands of self-drive cars through the app and check original car photos before booking.
            </p>
            <p className="text-slate-600 leading-relaxed text-sm sm:text-base">
              The company also promotes Choose Your Own Hours, so customers can plan the rental around their schedule rather than using a fixed travel duration. For longer journeys, Long Drive Cars states that its vehicles come with unlimited kilometres.
            </p>
            <p className="text-slate-700 font-medium text-sm sm:text-base bg-slate-50 p-4 rounded-xl border border-slate-200">
              Another booking option mentioned in the company information is paying ₹200 to hold the selected car.
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

          {/* TRIP PLANNING TABLE */}
          <SectionCard
            title="A Kachiguda Self-Drive Plan Can Look Like This"
            subtitle="Instead of using the car for only one destination, you can build your journey around several nearby places:"
          >
            <div className="overflow-x-auto">
              <table className="w-full text-left text-xs sm:text-sm border-collapse">
                <thead>
                  <tr className="border-b border-slate-200 bg-slate-50/80 text-slate-800 font-semibold">
                    <th className="py-3 px-3">Trip Planning Stage</th>
                    <th className="py-3 px-3">What You Can Do</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-100 text-slate-600">
                  {PLANNING_STAGES.map((row, idx) => (
                    <tr key={idx} className="hover:bg-slate-50/50 transition">
                      <td className="py-3 px-3 font-medium text-slate-900">{row.stage}</td>
                      <td className="py-3 px-3">{row.action}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            <p className="text-xs text-slate-600 pt-2 border-t border-slate-100">
              The company information also states that booking can be completed in around 30 seconds, making the process suitable for customers who want to arrange a car quickly.
            </p>
          </SectionCard>

          {/* USEFUL ROUTES STARTING FROM KACHIGUDA */}
          <SectionCard
            title="Useful Routes Starting from Kachiguda"
            subtitle="A self-drive car can be useful for different types of journeys from the locality:"
          >
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-1">
              {USEFUL_ROUTES.map((item, idx) => (
                <div key={idx} className="p-4 rounded-xl border border-slate-200 bg-slate-50/50 space-y-1">
                  <h3 className="font-bold text-sm text-slate-900 flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-slate-600 shrink-0" />
                    {item.title}
                  </h3>
                  <p className="text-xs sm:text-sm font-semibold text-slate-700 pl-6">{item.route}</p>
                </div>
              ))}
            </div>
            <p className="text-xs text-slate-600 pt-2 border-t border-slate-100">
              For travellers considering self drive car booking Kachiguda, the right vehicle can depend on the number of passengers, journey duration and whether the plan is limited to Hyderabad or extends outside the city.
            </p>
          </SectionCard>

          {/* DOCUMENTS AND BREAKDOWN ASSISTANCE */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <SectionCard title="Documents and Booking Information">
              <p className="text-slate-600 text-xs sm:text-sm leading-relaxed">
                For a new customer, Long Drive Cars states that an identification photo or passport photo along with a driving licence photo is required. From the second booking onward, existing customers do not need to submit documents again.
              </p>
              <p className="text-slate-600 text-xs sm:text-sm leading-relaxed">
                The company information also mentions a zero-deposit option. Security-deposit options are also listed for certain vehicle categories, including a refundable ₹2,000 option for premium cars and ₹5,000 for luxury cars.
              </p>
            </SectionCard>

            <SectionCard title="What If the Car Has a Breakdown?">
              <p className="text-slate-600 text-xs sm:text-sm leading-relaxed">
                Long Drive Cars states that it provides 24/7 breakdown help, along with free car replacement and towing service.
              </p>
              <p className="text-slate-600 text-xs sm:text-sm leading-relaxed">
                This can be particularly relevant when your route extends beyond central Hyderabad and you are planning a longer road trip. For customers specifically looking for rental self drive cars near Kachiguda Railway Station, checking the available vehicle, booking requirements, rental hours and support options before starting the journey can make the trip easier to organise.
              </p>
            </SectionCard>
          </div>

          {/* FREQUENTLY ASKED QUESTIONS */}
          <SectionCard title="FAQs About Self-Drive Cars in Kachiguda">
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
              Start Your Drive from Kachiguda
            </h2>
            <p className="text-slate-600 text-xs sm:text-sm max-w-2xl mx-auto leading-relaxed">
              Kachiguda’s railway connectivity, nearby metro access and position within central Hyderabad make it a useful starting point for both local travel and longer road journeys.
            </p>
            <p className="text-slate-600 text-xs sm:text-sm max-w-2xl mx-auto leading-relaxed">
              If you are looking for Self Drive Cars for Rent in Kachiguda, compare the available vehicles, check the original car photos, select your preferred hours and plan your route according to your travel needs.
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