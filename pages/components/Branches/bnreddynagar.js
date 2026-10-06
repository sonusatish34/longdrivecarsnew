import React from 'react';
import Head from 'next/head';
import Image from 'next/image';
import Link from 'next/link';
import {
  CheckCircle2,
  ChevronDown,
  ArrowRight,
  ShoppingBag,
  Film,
  Building2,
  Compass,
  Route,
  Navigation,
  Car,
  Landmark,
  ShieldCheck,
  AlertCircle
} from 'lucide-react';

const TARGET_URL = 'https://www.longdrivecars.com';
const CANONICAL_URL = 'https://www.longdrivecars.com/self-drive-cars-bnreddynagar';

const HIGHLIGHTS = [
  'Southern and southeastern Hyderabad connectivity linking directly to LB Nagar, Vanasthalipuram, and Hayathnagar',
  'Convenient starting hub for city travel, airport drives, and eastward routes towards Ramoji Film City',
  'Explore available rental vehicles within a 20 km radius around your location via the mobile app',
  'Total autonomy over departure times, multi-stop routes, and schedule changes without cab dependency',
  'Key platform features include Choose Your Own Hours, Unlimited Kilometres, No Deposit, and 24/7 Breakdown Service'
];

const VEHICLE_CATEGORIES = [
  { requirement: 'Solo or couple travel', category: 'Hatchback', why: 'Easier city driving and parking' },
  { requirement: 'Small family', category: 'Sedan / hatchback', why: 'Comfortable for everyday Hyderabad travel' },
  { requirement: 'Family with more luggage', category: 'Sedan / SUV', why: 'More luggage and seating comfort' },
  { requirement: '5–7 people', category: '7-seater', why: 'More passenger capacity' },
  { requirement: 'Weekend road trip', category: 'Sedan / SUV', why: 'Better suited to longer drives' },
  { requirement: 'Business travel', category: 'Hatchback / sedan', why: 'Practical for office and client visits' },
  { requirement: 'Longer family journey', category: 'SUV / 7-seater', why: 'Additional space and comfort' }
];

const EXPLORE_PLACES = [
  {
    icon: Film,
    title: 'Ramoji Film City',
    badge: 'Integrated Studio Complex',
    desc: 'One of the major tourist attractions accessible from the southeastern side of Hyderabad. Telangana Tourism describes it as a large integrated film studio complex with film sets, themed gardens, live shows, amusement activities, and tour packages.',
    note: 'Ideal for a full-day family outing or group road trip starting along the eastern corridor.'
  },
  {
    icon: Landmark,
    title: 'Sanghi Temple',
    badge: 'Pilgrimage Destination',
    desc: 'An iconic religious landmark in the broader eastern Hyderabad travel circuit. Telangana Tourism lists Sanghi among its famous temples and highlights it as a major spiritual and scenic getaway near Hyderabad.',
    note: 'Easily combined into a peaceful morning or day-trip itinerary along highway routes.'
  },
  {
    icon: Landmark,
    title: 'Statue of Equality',
    badge: 'Architectural & Spiritual Site',
    desc: 'A prominent attraction on the Hyderabad outskirts featuring the 216-foot statue dedicated to Sri Ramanujacharya, 108 Divya Desams, a gold deity, and evening fountain/laser-show attractions.',
    note: 'Convenient to add to a weekend circuit for families interested in cultural architecture.'
  },
  {
    icon: Compass,
    title: 'Central Hyderabad Attractions',
    badge: 'Heritage & Sightseeing',
    desc: 'Major heritage and tourist destinations officially listed by Hyderabad District include Charminar, Golconda Fort, Salar Jung Museum, Mecca Masjid, Nehru Zoological Park, and NTR Gardens.',
    note: 'A self-drive car allows you to combine multiple inner-city monuments in a single day.'
  }
];

const PRE_BOOKING_CHECKS = [
  'Vehicle availability',
  'Rental duration',
  'Pickup location',
  'Required documents',
  'Applicable payment or deposit terms',
  'Cancellation conditions',
  'Extension charges',
  'Vehicle photos',
  'Support arrangements'
];

const FLEET_MODELS = [
  'Wagon R',
  'Swift',
  'Dzire',
  'Baleno',
  'Grand Nios',
  'i20',
  'Venue',
  'Sonet',
  'Seltos',
  'Ertiga',
  'Thar'
];

const LDC_FEATURES = [
  'Choose Your Own Hours',
  'Unlimited Kilometres',
  'No Deposit option available',
  '24/7 Breakdown Service',
  'Check original car photos in app',
  'Explore cars within 20 km radius',
  'Exact car guaranteed',
  'Faster pickup process',
  'Free car replacement and towing service'
];

const FAQS = [
  {
    q: '1. Can I book a self-drive car for travel around BN Reddy Nagar?',
    a: 'Yes. You can check current Long Drive Cars availability for the Hyderabad area through its website or app and verify the nearest available vehicle and pickup location before booking. The platform allows customers to search available cars around their location.'
  },
  {
    q: '2. Which car is suitable for a family trip from BN Reddy Nagar?',
    a: 'The choice depends on the number of passengers and luggage. A sedan can suit a smaller family, while a 7-seater such as Ertiga can provide additional passenger capacity. The current Hyderabad inventory includes both categories.'
  },
  {
    q: '3. Can I use a rental car from BN Reddy Nagar for a Hyderabad sightseeing trip?',
    a: 'Yes, subject to the applicable booking and rental conditions. A self-drive car can be used to plan multiple sightseeing stops across Hyderabad. Popular attractions include Charminar, Golconda Fort, Salar Jung Museum and Ramoji Film City.'
  },
  {
    q: '4. What documents are required to book a self-drive car?',
    a: 'The current Long Drive Cars website states that customers can upload a selfie, Aadhaar card and driving licence through the app after booking, with verification by the team. The uploaded company material specifies an Aadhaar or passport photo together with a driving licence photo for the required-document process.'
  },
  {
    q: '5. Does Long Drive Cars provide support during the rental?',
    a: 'The current Hyderabad website lists 24/7 Breakdown Service as one of its rental features. The company information document also describes 24/7 breakdown help, towing service and free car replacement as part of its promotional service offering.'
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

export default function BnReddyNagarGuidePage() {
  return (
    <>
      <Head>
        <title>Self Drive Cars in BN Reddy Nagar, Hyderabad | Long Drive Cars</title>
        <meta
          name="description"
          content="Find self drive cars in BN Reddy Nagar for local travel, family outings and road trips. Explore car options, nearby attractions and booking tips."
        />
        <meta
          name="keywords"
          content="Self drive cars in BN Reddy Nagar, Best self drive cars in BN Reddy Nagar, self drive cars near BN Reddy Nagar, Self driving cars in Hyderabad, Rent Self Drive Cars Hyderabad, Self Drive Cars LB Nagar"
        />
        <link rel="canonical" href={CANONICAL_URL} />
        <meta property="og:type" content="article" />
        <meta property="og:title" content="Self Drive Cars in BN Reddy Nagar, Hyderabad | Long Drive Cars" />
        <meta
          property="og:description"
          content="Find self drive cars in BN Reddy Nagar for local travel, family outings and road trips. Explore car options, nearby attractions and booking tips."
        />
        <meta property="og:url" content={CANONICAL_URL} />
        <meta property="og:site_name" content="Long Drive Cars" />
        <meta property="og:image" content="https://www.longdrivecars.com/locationpages/bnreddynagar.webp" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Self Drive Cars in BN Reddy Nagar, Hyderabad | Long Drive Cars" />
        <meta
          name="twitter:description"
          content="Find self drive cars in BN Reddy Nagar for local travel, family outings and road trips. Explore car options, nearby attractions and booking tips."
        />
        <meta name="twitter:image" content="https://www.longdrivecars.com/locationpages/bnreddynagar.webp" />
      </Head>

      <div className="min-h-screen bg-slate-50 text-slate-900 antialiased pt-24 lg:pt-0">
        {/* HEADER SECTION */}
        <header className="bg-white py-12 md:py-16 px-4 sm:px-6 lg:px-8 border-b border-slate-200">
          <div className="max-w-4xl mx-auto text-center space-y-4">
            <span className="inline-block px-3 py-1 text-xs font-semibold uppercase tracking-wider bg-slate-100 text-slate-700 rounded-full">
              Rental Guide & Travel Information
            </span>
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight text-slate-900 leading-tight">
              Where Can You Find Self Drive Cars in BN Reddy Nagar?
            </h1>
            <p className="text-slate-600 text-sm sm:text-base md:text-lg max-w-3xl mx-auto leading-relaxed">
              Self drive cars in BN Reddy Nagar can be a practical option for local travel, family outings, business visits and road trips from the southeastern side of Hyderabad. BN Reddy Nagar is connected with nearby areas such as LB Nagar, Vanasthalipuram, Hayathnagar and other parts of Hyderabad, making access to a personal rental car useful when you want to plan your journey around your own schedule.
            </p>
            <p className="text-slate-600 text-sm sm:text-base max-w-3xl mx-auto leading-relaxed">
              For people looking for a self-drive rental, Long Drive Cars provides an online platform where customers can check available vehicles, select a rental duration and complete the booking process. The current Hyderabad page lists options ranging from compact 5-seater cars to SUVs and 7-seater vehicles, with available cars searchable within 20 km around the selected location.
            </p>
          </div>
        </header>

        {/* COVER IMAGE */}
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 -mt-6">
          <div className="rounded-2xl overflow-hidden shadow-sm border border-slate-200 bg-white">
            <Image
              src="/locationpages/bnreddynagar.webp"
              height={2000}
              width={2000}
              className="rounded-2xl object-cover w-full max-h-[480px]"
              alt="Self drive cars in BN Reddy Nagar Hyderabad for local travel and road trips"
              priority
            />
          </div>
        </div>

        {/* MAIN BODY */}
        <main className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-10 space-y-8">
          {/* WHY A SELF-DRIVE CAR IS USEFUL AROUND BN REDDY NAGAR */}
          <SectionCard title="Why can a self-drive car be useful around BN Reddy Nagar?">
            <p className="text-slate-600 leading-relaxed text-sm sm:text-base">
              BN Reddy Nagar is in southern Hyderabad, with easy access to LB Nagar, Vanasthalipuram, Hayathnagar and routes toward Ramoji Film City. For those looking for self drive cars near BN Reddy Nagar, several car options can suit local and longer trips.
            </p>
            <p className="text-slate-600 leading-relaxed text-sm sm:text-base">
              A self-drive rental can be useful when the journey involves several stops instead of one fixed destination. For example, a family may want to travel from BN Reddy Nagar to a shopping area, temple or tourist attraction and return later. A business traveller may need to visit multiple locations during the same day.
            </p>
            <p className="text-slate-700 font-medium text-sm sm:text-base bg-slate-50 p-4 rounded-xl border border-slate-200">
              Long Drive Cars currently promotes Choose Your Own Hours, Unlimited Kilometers, 24/7 Breakdown Service, No Deposit and checking original car photos before booking on its Hyderabad rental platform. The company's uploaded information also highlights cars available near customers through the app, faster pickup, and flexible rental durations.
            </p>
            <div className="pt-2">
              <h3 className="text-sm font-bold text-slate-800 uppercase tracking-wide mb-3">
                Key Travel Advantages Around BN Reddy Nagar
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

          {/* WHAT TYPES OF CARS CAN YOU CONSIDER */}
          <SectionCard
            title="What types of cars can you consider for travel from BN Reddy Nagar?"
            subtitle="The right vehicle depends on the number of passengers, luggage, driving distance and purpose of the trip."
          >
            <p className="text-slate-600 text-sm leading-relaxed">
              For a solo traveller or couple, a compact hatchback can be easier to handle in city traffic and parking areas. Cars such as Wagon R, Swift, Baleno and similar models are listed on the current Hyderabad platform. A sedan can make sense when boot space and comfortable seating are more important. For families or groups, a 7-seater such as the Ertiga can provide additional passenger capacity.
            </p>
            <p className="text-slate-600 text-sm leading-relaxed">
              For longer highway trips, the Best self drive cars in BN Reddy Nagar can include SUVs such as Venue, Sonet, Seltos and Thar, depending on your route and luggage. The company's information document also groups vehicles into 5-seater Prime, Elite and Platinum collections and 7-seater Prestige and VIP collections.
            </p>

            {/* VEHICLE FLEET TABLE */}
            <div className="overflow-x-auto pt-2">
              <table className="w-full text-left text-xs sm:text-sm border-collapse">
                <thead>
                  <tr className="border-b border-slate-200 bg-slate-50/80 text-slate-800 font-semibold">
                    <th className="py-3 px-3">Travel requirement</th>
                    <th className="py-3 px-3">Suitable vehicle category</th>
                    <th className="py-3 px-3">Why consider it?</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-100 text-slate-600">
                  {VEHICLE_CATEGORIES.map((row, idx) => (
                    <tr key={idx} className="hover:bg-slate-50/50 transition">
                      <td className="py-3 px-3 font-medium text-slate-900">{row.requirement}</td>
                      <td className="py-3 px-3 font-semibold text-slate-800">{row.category}</td>
                      <td className="py-3 px-3">{row.why}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            <p className="text-xs text-slate-500 italic pt-1">
              Vehicle availability, pricing and rental conditions can change, so customers should check the current listing before booking.
            </p>
          </SectionCard>

          {/* HOW CAN YOU BOOK & PRE-BOOKING CHECKLIST */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <SectionCard title="How can you book a self-drive car near BN Reddy Nagar?">
              <p className="text-slate-600 text-xs sm:text-sm leading-relaxed">
                The booking process is designed around selecting a vehicle, choosing the required rental period and completing the booking online. Long Drive Cars currently describes its process as choosing a car, booking and paying online, and uploading the required documents.
              </p>
              <p className="text-slate-600 text-xs sm:text-sm leading-relaxed">
                The website states that customers must be at least 18 years old. After a successful booking, documents can be uploaded through the app for verification. The uploaded company material states that a new customer may need an Aadhaar or passport photo along with a driving licence photo, while it says documents are not required from the second booking for old customers.
              </p>
              <p className="text-slate-700 font-medium text-xs sm:text-sm bg-slate-50 p-3 rounded-xl border border-slate-200">
                The current website says the exact vehicle location is provided through My Trips after successful booking and document upload.
              </p>
            </SectionCard>

            <SectionCard title="Before Confirming a Booking, Check:">
              <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs sm:text-sm text-slate-700">
                {PRE_BOOKING_CHECKS.map((item, idx) => (
                  <li key={idx} className="flex items-center gap-2 p-2.5 rounded-lg bg-slate-50 border border-slate-200">
                    <CheckCircle2 className="w-3.5 h-3.5 text-slate-600 shrink-0" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
              <p className="text-xs text-slate-500 pt-1">
                Verify the complete booking details rather than relying only on an advertised daily base rate.
              </p>
            </SectionCard>
          </div>

          {/* WHERE CAN YOU TRAVEL FROM BN REDDY NAGAR */}
          <div className="space-y-4">
            <div>
              <h2 className="text-2xl font-bold text-slate-900">
                Where can you travel from BN Reddy Nagar?
              </h2>
              <p className="text-slate-600 text-sm sm:text-base mt-1">
                BN Reddy Nagar can work as a starting point for exploring different parts of Hyderabad and nearby destinations:
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

          {/* HOW TO CHOOSE & WHAT TO CHECK */}
          <SectionCard title="How should you choose the best self drive cars in BN Reddy Nagar?">
            <p className="text-slate-600 leading-relaxed text-sm sm:text-base">
              Start with your actual travel requirement instead of selecting a car only because of its appearance. For city travel, a smaller hatchback can be convenient. For family travel, consider passenger space and luggage. For a longer road trip, look at seating comfort, luggage capacity, vehicle condition and the route you will drive.
            </p>
            <div className="pt-1">
              <h4 className="text-xs font-bold uppercase tracking-wider text-slate-700 mb-2">
                Popular Fleet Models Available Across Hyderabad:
              </h4>
              <div className="flex flex-wrap gap-2">
                {FLEET_MODELS.map((model, idx) => (
                  <span
                    key={idx}
                    className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-slate-50 border border-slate-200 text-xs font-medium text-slate-700"
                  >
                    <Car className="w-3.5 h-3.5 text-slate-500 shrink-0" />
                    {model}
                  </span>
                ))}
              </div>
            </div>
            <p className="text-slate-600 text-xs sm:text-sm pt-2 leading-relaxed">
              Before payment, check the exact vehicle, rental hours, pickup instructions, documents, cancellation policy and extension rules. If you are planning an outstation trip, also consider fuel, route conditions, parking and toll requirements. Long Drive Cars currently states that its Hyderabad service offers unlimited kilometres, exact-car availability, flexible rental periods, original vehicle photos and 24/7 breakdown service with towing and a free car-replacement guarantee.
            </p>
          </SectionCard>

          {/* LOCATION ADVISORY / BRANCH NOTICE */}
          <SectionCard
            title="Is there a Long Drive Cars branch directly in BN Reddy Nagar?"
            className="border-slate-300 bg-slate-50/50"
          >
            <div className="flex items-start gap-3">
              <AlertCircle className="w-5 h-5 text-slate-700 shrink-0 mt-0.5" />
              <div className="space-y-2 text-xs sm:text-sm text-slate-600 leading-relaxed">
                <p>
                  The current Long Drive Cars website does not list BN Reddy Nagar as a dedicated location page. It currently lists Hyderabad locations including LB Nagar, Uppal, Shamshabad, Gachibowli, Manikonda, Secunderabad, Ameerpet, Madhapur, Kukatpally, Begumpet and Shamirpet.
                </p>
                <p>
                  Therefore, customers searching for a car in BN Reddy Nagar should check the Long Drive Cars platform for current nearby vehicle availability and the exact pickup location rather than assuming there is a dedicated BN Reddy Nagar branch. This is particularly useful because the current platform says customers can explore cars near their location within 20 km and provides the exact vehicle location after a successful booking.
                </p>
              </div>
            </div>
          </SectionCard>

          {/* AFFORDABILITY & MOST USEFUL PLACES */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <SectionCard title="Where can you find affordable self drive cars in BN Reddy Nagar?">
              <p className="text-slate-600 text-xs sm:text-sm leading-relaxed">
                Rental pricing depends on the vehicle category, rental period, availability and applicable offers. The current Long Drive Cars Hyderabad page displays different 24-hour prices for hatchbacks, sedans, SUVs and 7-seater vehicles.
              </p>
              <p className="text-slate-600 text-xs sm:text-sm leading-relaxed">
                The uploaded company material also contains promotional pricing and limited-time offers, including new-customer discounts and longer-duration offers. Rather than comparing only the daily rental price, consider the complete trip: rental duration, kilometres, fuel, tolls, parking and any applicable additional charges.
              </p>
            </SectionCard>

            <SectionCard title="What are the most useful places to visit from BN Reddy Nagar?">
              <p className="text-slate-600 text-xs sm:text-sm leading-relaxed">
                For a local Hyderabad outing, travellers can plan around city attractions such as Charminar, Salar Jung Museum and other heritage locations. For the eastern and southeastern side, Ramoji Film City, Sanghi Temple and the Statue of Equality can form useful day-trip options.
              </p>
              <p className="text-slate-600 text-xs sm:text-sm leading-relaxed">
                For longer road trips, Hyderabad also provides routes toward destinations such as Nagarjuna Sagar, Srisailam, Warangal and other parts of Telangana. Telangana Tourism currently lists Nagarjuna Sagar and Srisailam among its tour packages.
              </p>
            </SectionCard>
          </div>

          {/* FREQUENTLY ASKED QUESTIONS */}
          <SectionCard title="Frequently Asked Questions About BN Reddy Nagar">
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
              Self drive cars in BN Reddy Nagar can make local Hyderabad travel, family outings, business visits and planned road trips more flexible because travellers can select their vehicle and rental duration around their own itinerary. Long Drive Cars provides a range of vehicle categories through its Hyderabad platform, along with features such as flexible hours, unlimited kilometres, original car photos and 24/7 breakdown service.
            </p>
            <p className="text-slate-600 text-xs sm:text-sm max-w-2xl mx-auto leading-relaxed">
              For BN Reddy Nagar customers, the important step is to check current nearby availability, exact pickup location, vehicle category, rental terms and applicable pricing before confirming a booking. From local Hyderabad sightseeing to destinations such as Ramoji Film City, Sanghi Temple, the Statue of Equality and longer Telangana road trips, the right rental vehicle can be selected according to the passengers, luggage, duration and route.
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