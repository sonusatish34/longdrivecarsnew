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
  Waves,
  Landmark,
  Trophy,
  Building2
} from 'lucide-react';

const TARGET_URL = 'https://www.longdrivecars.com';
const CANONICAL_URL = 'https://www.longdrivecars.com/self-drive-cars-around-saroornagar';

const HIGHLIGHTS = [
  'Central connectivity linking Kothapet, Chaitanyapuri, LB Nagar, Saidabad, and Vanasthalipuram',
  'Close proximity to Victoria Memorial Metro Station, linking to the Hyderabad Metro network',
  'Home to scenic landmarks including Saroornagar Lake, Priyadarshini Park, and Saroornagar Indoor Stadium',
  'Includes developed layout areas like Saroornagar and Saroornagar (Chitra Layout) listed by HMDA',
  'Manage multi-stop errands, family outings, and eastern highway drives in one vehicle without cab dependencies'
];

const EXPLORE_PLACES = [
  {
    icon: Waves,
    title: 'Saroornagar Lake',
    badge: 'Prominent Waterfront',
    desc: 'One of the prominent water bodies and scenic landmarks of the locality, offering a refreshing open atmosphere.',
    note: 'Ideal for a calming morning or evening stop during your local city drive.'
  },
  {
    icon: Trees,
    title: 'Priyadarshini Park',
    badge: 'HMDA Theme Park',
    desc: 'An HMDA-developed theme park located right in Saroornagar, featuring green pathways and family-friendly recreation.',
    note: 'Great destination to include for family outings, children’s play, and peaceful walks.'
  },
  {
    icon: Trophy,
    title: 'Saroornagar Indoor Stadium',
    badge: 'Sports Landmark',
    desc: 'A well-known sporting landmark listed among key reference points around the Victoria Memorial Metro Station.',
    note: 'Easily accessible when attending sports tournaments, events, or practice sessions.'
  },
  {
    icon: Landmark,
    title: 'Shri Ashtalakshmi Temple',
    badge: 'Religious Landmark',
    desc: 'A prominent and sacred temple located nearby, recognized by Hyderabad Metro as a major cultural destination.',
    note: 'Convenient to combine with family temple visits and local dining trips.'
  },
  {
    icon: Building2,
    title: 'Victoria Memorial Home',
    badge: 'Historic Landmark',
    desc: 'A historic institutional landmark located in the Saroornagar area and directly associated with Victoria Memorial Metro Station.',
    note: 'Serves as an identifiable heritage reference point along the metro corridor.'
  },
  {
    icon: ShoppingBag,
    title: 'Kothapet & Chaitanyapuri',
    badge: 'Commercial Hubs',
    desc: 'Vibrant nearby urban areas filled with markets, shopping complexes, dining spots, and everyday retail services.',
    note: 'Perfect for shopping sprees and dining without juggling multiple cab bookings.'
  },
  {
    icon: Route,
    title: 'LB Nagar & Vanasthalipuram',
    badge: 'Eastern Transit Corridor',
    desc: 'Convenient nearby localities when your journey extends across the eastern and southern parts of Hyderabad.',
    note: 'Direct connectivity for onward journeys towards the Vijayawada highway.'
  }
];

const CHECKLIST_ITEMS = [
  { before: 'Vehicle selection', check: 'Compare available cars through the app' },
  { before: 'Car condition', check: 'Check original car photos before booking' },
  { before: 'Booking hold', check: '₹200 can be paid to hold the selected car' },
  { before: 'Driving duration', check: 'Choose your own hours' },
  { before: 'Distance planning', check: 'Unlimited kilometres are promoted' },
  { before: 'Emergency support', check: '24/7 breakdown assistance is available' }
];

const LDC_FEATURES = [
  'Choose your own hours',
  'Unlimited kilometres',
  'Compare thousands of cars in the app',
  'Original car photos before booking',
  '₹200 option to hold your car',
  '30-second booking process',
  '24/7 breakdown help',
  'Free car replacement guarantee',
  'Towing service included',
  'Refundable deposit options available'
];

const FAQS = [
  {
    q: '1. Can I compare different self-drive cars before booking?',
    a: 'Yes. Long Drive Cars states that customers can compare thousands of self-drive cars through its app.'
  },
  {
    q: '2. Can I select my own rental hours?',
    a: 'Yes. The company information specifically promotes Choose Your Own Hours, allowing customers to select their preferred driving duration.'
  },
  {
    q: '3. Do new customers need to submit documents?',
    a: 'Yes. New customers need an Aadhaar photo or passport photo along with a driving licence photo.'
  },
  {
    q: '4. Do returning customers need to submit documents again?',
    a: 'According to the company information, old customers do not need to submit documents from their second booking onward.'
  },
  {
    q: '5. What happens if the rental car has a breakdown?',
    a: 'Long Drive Cars states that it provides 24/7 breakdown help, free car replacement and towing service.'
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

export default function SaroornagarGuidePage() {
  return (
    <>
      <Head>
        <title>Self Drive Cars Around Saroornagar, Hyderabad | Long Drive Cars</title>
        <meta
          name="description"
          content="Looking for self drive cars around Saroornagar, Hyderabad? Compare cars with flexible hours, unlimited km, original photos and 24/7 breakdown support."
        />
        <meta
          name="keywords"
          content="Self Drive Cars Around Saroornagar, self drive cars in Saroornagar, Self driving cars in Hyderabad, Rent Self Drive Cars Hyderabad, self drive cars near Saroornagar, Self Drive Cars LB Nagar"
        />
        <link rel="canonical" href={CANONICAL_URL} />
        <meta property="og:type" content="article" />
        <meta property="og:title" content="Self Drive Cars Around Saroornagar, Hyderabad | Long Drive Cars" />
        <meta
          property="og:description"
          content="Looking for self drive cars around Saroornagar, Hyderabad? Compare cars with flexible hours, unlimited km, original photos and 24/7 breakdown support."
        />
        <meta property="og:url" content={CANONICAL_URL} />
        <meta property="og:site_name" content="Long Drive Cars" />
        <meta property="og:image" content="https://www.longdrivecars.com/locationpages/saroornagar.webp" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Self Drive Cars Around Saroornagar, Hyderabad | Long Drive Cars" />
        <meta
          name="twitter:description"
          content="Looking for self drive cars around Saroornagar, Hyderabad? Compare cars with flexible hours, unlimited km, original photos and 24/7 breakdown support."
        />
        <meta name="twitter:image" content="https://www.longdrivecars.com/locationpages/saroornagar.webp" />
      </Head>

      <div className="min-h-screen bg-slate-50 text-slate-900 antialiased pt-24 lg:pt-0">
        {/* HEADER SECTION */}
        <header className="bg-white py-12 md:py-16 px-4 sm:px-6 lg:px-8 border-b border-slate-200">
          <div className="max-w-4xl mx-auto text-center space-y-4">
            <span className="inline-block px-3 py-1 text-xs font-semibold uppercase tracking-wider bg-slate-100 text-slate-700 rounded-full">
              Rental Guide & Travel Information
            </span>
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight text-slate-900 leading-tight">
              Looking for Self Drive Cars Around Saroornagar? Here’s What to Know
            </h1>
            <p className="text-slate-600 text-sm sm:text-base md:text-lg max-w-3xl mx-auto leading-relaxed">
              If you are searching for Self Drive Cars Around Saroornagar, the area can be a convenient starting point for local travel as well as longer drives across Hyderabad. Saroornagar is connected with nearby areas such as Kothapet, Chaitanyapuri, LB Nagar, Saidabad and Vanasthalipuram, making it practical for people who want a car for flexible day-to-day travel.
            </p>
            <p className="text-slate-600 text-sm sm:text-base max-w-3xl mx-auto leading-relaxed">
              The locality is also known for Saroornagar Lake, parks and its connectivity through the Hyderabad Metro network. The official L&T Metro page for Victoria Memorial lists Saroornagar Lake, Saroornagar Indoor Stadium and Shri Ashtalakshmi Temple among the nearby landmarks.
            </p>
          </div>
        </header>

        {/* COVER IMAGE */}
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 -mt-6">
          <div className="rounded-2xl overflow-hidden shadow-sm border border-slate-200 bg-white">
            <Image
              src="/locationpages/saroornagar.webp"
              height={2000}
              width={2000}
              className="rounded-2xl object-cover w-full max-h-[480px]"
              alt="Self drive cars around Saroornagar Hyderabad for local travel and weekend trips"
              priority
            />
          </div>
        </div>

        {/* MAIN BODY */}
        <main className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-10 space-y-8">
          {/* WHAT MAKES SAROORNAGAR USEFUL */}
          <SectionCard title="What Makes Saroornagar Useful for a Self-Drive Trip?">
            <p className="text-slate-600 leading-relaxed text-sm sm:text-base">
              Saroornagar can work as a starting point when your plans involve several stops rather than travelling to only one destination. You might need a car for shopping around Kothapet, visiting family in LB Nagar, attending an event, travelling towards Vanasthalipuram or planning a longer weekend drive outside Hyderabad.
            </p>
            <p className="text-slate-600 leading-relaxed text-sm sm:text-base">
              HMDA also lists Priyadarshini Park and HUDA Complex Park in Saroornagar among its developed parks, while Saroornagar STP Park is listed under lake/STP parks. For someone choosing a rental car, the important point is having flexibility over when to start, where to go and how long to keep the vehicle.
            </p>
            <div className="pt-2">
              <h3 className="text-sm font-bold text-slate-800 uppercase tracking-wide mb-3">
                Key Travel Advantages in Saroornagar
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

          {/* PLACES TO EXPLORE AROUND SAROORNAGAR */}
          <div className="space-y-4">
            <div>
              <h2 className="text-2xl font-bold text-slate-900">Places to Explore Around Saroornagar</h2>
              <p className="text-slate-600 text-sm sm:text-base mt-1">
                A self-drive booking from this side of Hyderabad can be useful for visiting or connecting several nearby destinations:
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
              Saroornagar is also included in HMDA's developed-layout records, showing Saroornagar and Saroornagar (Chitra Layout) among its developed layouts.
            </div>
          </div>

          {/* A DIFFERENT WAY TO LOOK AT YOUR SAROORNAGAR TRIP */}
          <SectionCard title="A Different Way to Look at Your Saroornagar Trip">
            <p className="text-slate-600 leading-relaxed text-sm sm:text-base">
              Instead of booking a car only for a single destination, you can plan your journey around multiple stops.
            </p>
            <div className="p-3.5 bg-slate-50 rounded-xl border border-slate-200 text-xs sm:text-sm font-semibold text-slate-800">
              Suggested Itinerary: Saroornagar → Kothapet → Chaitanyapuri → LB Nagar → Vanasthalipuram → return to Saroornagar
            </div>
            <p className="text-slate-600 text-sm leading-relaxed">
              This type of route is where having your own rental vehicle can provide more control over timing and stopovers without coordinating separate rides.
            </p>
          </SectionCard>

          {/* WHY LONG DRIVE CARS CAN FIT THIS KIND OF TRIP */}
          <SectionCard title="Why Long Drive Cars Can Fit This Kind of Trip">
            <p className="text-slate-600 leading-relaxed text-sm sm:text-base">
              Long Drive Cars provides several options that are useful when you want control over your travel schedule rather than depending on fixed cab timings. The company information states that customers can choose their own hours, compare thousands of self-drive cars through the app and check original car photos before booking.
            </p>
            <p className="text-slate-600 leading-relaxed text-sm sm:text-base">
              The service also promotes unlimited kilometres, allowing customers to plan longer drives without a stated kilometre limit. Another useful option is the ₹200 booking hold, where customers can pay ₹200 to hold their selected car.
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

          {/* CHECKLIST TABLE */}
          <SectionCard
            title="Saroornagar Self-Drive Booking Checklist"
            subtitle="The app promotes a 30-second booking process and allows customers to compare thousands of self-drive cars:"
          >
            <div className="overflow-x-auto">
              <table className="w-full text-left text-xs sm:text-sm border-collapse">
                <thead>
                  <tr className="border-b border-slate-200 bg-slate-50/80 text-slate-800 font-semibold">
                    <th className="py-3 px-3">Before Booking</th>
                    <th className="py-3 px-3">What You Can Check</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-100 text-slate-600">
                  {CHECKLIST_ITEMS.map((row, idx) => (
                    <tr key={idx} className="hover:bg-slate-50/50 transition">
                      <td className="py-3 px-3 font-medium text-slate-900">{row.before}</td>
                      <td className="py-3 px-3">{row.check}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </SectionCard>

          {/* BEFORE YOU PICK UP YOUR CAR & BREAKDOWN SUPPORT */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <SectionCard title="Before You Pick Up Your Car">
              <p className="text-slate-600 text-xs sm:text-sm leading-relaxed">
                For a new customer, the company information specifies an Aadhaar photo or passport photo along with a driving licence photo. From the second booking onward, old customers do not need to submit documents again.
              </p>
              <p className="text-slate-600 text-xs sm:text-sm leading-relaxed">
                There are also different security-deposit options mentioned in the company information, including a refundable ₹2,000 deposit for premium cars and ₹5,000 for luxury cars.
              </p>
            </SectionCard>

            <SectionCard title="24/7 Roadside Assistance">
              <p className="text-slate-600 text-xs sm:text-sm leading-relaxed">
                For customers who need roadside assistance, Long Drive Cars states that it provides 24/7 breakdown help, free car replacement and towing service.
              </p>
              <p className="text-slate-600 text-xs sm:text-sm leading-relaxed">
                This offers continuous peace of mind whether traveling on everyday errands or driving on highways towards the outskirts of Hyderabad.
              </p>
            </SectionCard>
          </div>

          {/* FREQUENTLY ASKED QUESTIONS */}
          <SectionCard title="FAQs About Self-Drive Cars Around Saroornagar">
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
              Plan Your Drive from Saroornagar
            </h2>
            <p className="text-slate-600 text-xs sm:text-sm max-w-2xl mx-auto leading-relaxed">
              Whether you are travelling within Saroornagar, moving between Kothapet and LB Nagar, or planning a longer Hyderabad road trip, choosing a rental car around your preferred location can make the journey easier to organise.
            </p>
            <p className="text-slate-600 text-xs sm:text-sm max-w-2xl mx-auto leading-relaxed">
              If you are looking for Self Drive Cars Around Saroornagar, check the available vehicles, compare the options and choose a car based on your planned duration and route.
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