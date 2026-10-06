import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import {
  Car,
  Compass,
  Calendar,
  CheckCircle2,
  ChevronDown,
  Clock,
  ShieldCheck,
  Shield,
  ArrowRight,
  Sparkles,
  MapPin,
  Trees,
  Landmark,
  Waves
} from 'lucide-react';

// ============================================================================
// SEO METADATA
// ============================================================================
export const metadata = {
  title: 'Rent a Best Self Drive Car in Hyderabad | Discover Warangal',
  description:
    'Plan a seamless road trip from Hyderabad to Warangal. Explore Warangal Fort, Thousand Pillar Temple, Ramappa Temple & Laknavaram Lake with self-drive car rentals.',
  keywords: [
    'Rent a Best Self Drive Car in Hyderabad',
    'Self drive car rental services in Hyderabad',
    'Hyderabad to Warangal road trip',
    'Warangal travel guide',
    'Car rental Hyderabad to Warangal',
    'Self Drive Cars Hyderabad'
  ],
  alternates: {
    canonical: 'https://www.longdrivecars.com/hyderabad-to-warangal-self-drive'
  },
  openGraph: {
    title: 'Rent a Best Self Drive Car in Hyderabad: Discover Warangal Like Never Before',
    description:
      'Experience the heritage and natural beauty of Warangal with the freedom of a self-drive car rental from Hyderabad.',
    url: 'https://www.longdrivecars.com',
    siteName: 'Long Drive Cars',
    images: [
      {
        url: '/locationpages/shamshabad.webp',
        width: 1200,
        height: 630,
        alt: 'Hyderabad to Warangal Road Trip Self Drive Car Rental'
      }
    ],
    locale: 'en_IN',
    type: 'article'
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Hyderabad to Warangal Self Drive Car Rental Guide',
    description:
      'Discover Warangal heritage, temples, and lakes with affordable self-drive car rentals from Hyderabad.',
    images: ['/locationpages/shamshabad.webp']
  }
};

// ============================================================================
// PAGE COMPONENT
// ============================================================================
export default function WarangalGuidePage() {
  const targetUrl = 'https://www.longdrivecars.com';

  const attractions = [
    {
      icon: Landmark,
      title: '1. Warangal Fort',
      badge: 'Kakatiya Heritage',
      points: [
        'A symbol of Kakatiya dynasty brilliance with massive stone gateways and intricate carvings',
        'Best time to visit: Early morning or sunset',
        'Ideal for history lovers and photographers'
      ]
    },
    {
      icon: Landmark,
      title: '2. Thousand Pillar Temple',
      badge: 'Architectural Wonder',
      points: [
        'Architectural marvel known for detailed carvings and spiritual significance',
        'Dedicated to Lord Shiva, Vishnu, and Surya',
        'A peaceful place to experience heritage'
      ]
    },
    {
      icon: Landmark,
      title: '3. Ramappa Temple (UNESCO Site)',
      badge: 'UNESCO Heritage',
      points: [
        'Located about 70 km from Warangal, this temple is a masterpiece of ancient engineering',
        'Famous for lightweight floating bricks and sandbox technology'
      ],
      extraNote: (
        <>
          Perfect for a day trip with{' '}
          <Link href={targetUrl} className="font-bold text-slate-900">
            Self drive car rental services in Hyderabad
          </Link>
          .
        </>
      )
    },
    {
      icon: Waves,
      title: '4. Laknavaram Lake',
      badge: 'Nature & Adventure',
      points: [
        'A scenic getaway surrounded by lush greenery and a famous hanging bridge',
        'Great for picnics, boat rides, and relaxation',
        'Ideal for nature lovers and weekend explorers'
      ]
    }
  ];

  const carTypes = [
    {
      type: 'Hatchbacks',
      subtitle: 'Budget-friendly & Agile',
      points: ['Budget-friendly pricing', 'Ideal for solo or couple trips', 'Easy to drive and park']
    },
    {
      type: 'Sedans',
      subtitle: 'Comfortable & Smooth',
      points: ['Comfortable for long drives', 'Suitable for small families', 'Spacious boot space']
    },
    {
      type: 'SUVs',
      subtitle: 'Spacious & Powerful',
      points: ['Spacious and powerful performance', 'Best for group travel and rough terrains', 'High ground clearance']
    },
    {
      type: 'Luxury Cars',
      subtitle: 'Premium Experience',
      points: ['Premium comfort and luxury interiors', 'Ideal for special occasions and long highway cruises']
    }
  ];

  const safetyTips = [
    'Check vehicle condition before driving',
    'Carry valid driving license',
    'Follow traffic rules strictly',
    'Avoid night driving in unknown areas',
    'Keep emergency contacts handy'
  ];

  const faqs = [
    {
      q: 'Q1: Is it safe to Rent a Best Self Drive Car in Hyderabad?',
      a: 'Yes, it is safe if you choose a reliable provider, check the vehicle condition, and follow traffic rules.'
    },
    {
      q: 'Q2: What documents are required for self-drive car rental?',
      a: 'You need a valid driving license, ID proof, and sometimes a refundable security deposit.'
    },
    {
      q: 'Q3: Can I take a rental car from Hyderabad to Warangal?',
      a: 'Yes, most providers allow outstation travel when you Rent a Best Self Drive Car in Hyderabad.'
    },
    {
      q: 'Q4: Which car is best for a Warangal road trip?',
      a: 'SUVs are ideal for comfort and space, but sedans are also a great option for smooth highways.'
    },
    {
      q: 'Q5: How early should I book a rental car?',
      a: 'It’s best to book at least 2–3 days in advance, especially during weekends and holidays.'
    }
  ];

  return (
    <div className="min-h-screen bg-slate-50 text-slate-900 antialiased pt-24 lg:pt-0">
      
      {/* 1. HEADER SECTION */}
      <header className="bg-white py-12 md:py-16 px-4 sm:px-6 lg:px-8 border-b border-slate-200">
        <div className="max-w-4xl mx-auto text-center space-y-4">
          <span className="inline-block px-3 py-1 text-xs font-semibold uppercase tracking-wider bg-slate-100 text-slate-700 rounded-full">
            Road Trip &amp; Travel Guide
          </span>

          <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight text-slate-900 md:leading-snug">
            Rent a Best Self Drive Car in Hyderabad: Discover Warangal Like Never Before
          </h1>

          <p className="text-slate-600 text-sm sm:text-base md:text-lg max-w-3xl mx-auto leading-relaxed">
            Warangal, a city rich in history, culture, and natural beauty, is one of the most underrated travel destinations in Telangana. While many travelers focus on Hyderabad, those who take the road less traveled often find Warangal to be far more rewarding. The best way to explore this heritage city?{' '}
            <Link href={targetUrl} className="font-bold text-slate-900">
              Rent a Best Self Drive Car in Hyderabad
            </Link>{' '}
            and enjoy a seamless journey at your own pace.
          </p>
        </div>
      </header>

      {/* 2. DEDICATED COVER IMAGE CONTAINER (max-h-[480px]) */}
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 -mt-6">
        <div className="rounded-2xl overflow-hidden shadow-sm border border-slate-200 bg-white">
          <Image
            src="/locationpages/warangal.webp"
            height={2000}
            width={2000}
            className="rounded-2xl object-cover w-full max-h-[480px]"
            alt="Rent a self drive car in Hyderabad for Warangal road trip"
            priority
          />
        </div>
      </div>

      {/* 3. MAIN BODY */}
      <main className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-10 space-y-8">

        {/* SECTION: WHY CHOOSE SELF DRIVE FOR WARANGAL */}
        <section className="bg-white p-6 sm:p-8 rounded-2xl border border-slate-200 shadow-xs space-y-4">
          <h2 className="text-2xl font-bold text-slate-900">
            Why Choose to Rent a Best Self Drive Car in Hyderabad for a Warangal Trip?
          </h2>
          <p className="text-slate-600 leading-relaxed text-sm sm:text-base">
            Traveling from Hyderabad to Warangal (approx. 150 km) is a scenic experience filled with greenery, small towns, and hidden attractions.
          </p>

          <h3 className="text-base font-bold text-slate-800 pt-1">Key Benefits</h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            {[
              { title: 'Freedom to Travel Anytime', desc: 'No dependency on bus or train schedules' },
              { title: 'Comfort & Privacy', desc: 'Ideal for families, couples, and solo travelers' },
              { title: 'Cost-Effective', desc: 'Saves money compared to taxis for round trips' },
              { title: 'Flexible Stops', desc: 'Explore offbeat locations along the route' }
            ].map((benefit, idx) => (
              <div key={idx} className="p-3.5 bg-slate-50 rounded-xl border border-slate-200/80">
                <div className="flex items-center gap-2 text-slate-900 font-semibold text-sm">
                  <CheckCircle2 className="w-4 h-4 text-slate-600 shrink-0" />
                  <span>{benefit.title}</span>
                </div>
                <p className="text-xs text-slate-600 mt-1 pl-6">{benefit.desc}</p>
              </div>
            ))}
          </div>

          <p className="text-slate-600 text-sm pt-2">
            When you{' '}
            <Link href={targetUrl} className="font-bold text-slate-900">
              Rent a Best Self Drive Car in Hyderabad
            </Link>
            , you transform a simple trip into a personalized travel experience.
          </p>
        </section>

        {/* SECTION: TOP ATTRACTIONS IN WARANGAL */}
        <section className="space-y-4">
          <div>
            <h2 className="text-2xl font-bold text-slate-900">Top Attractions in Warangal You Can Explore</h2>
            <p className="text-slate-600 text-sm mt-1">
              Warangal is packed with historical monuments, serene lakes, and architectural wonders. Here are some must-visit places:
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {attractions.map((place, idx) => {
              const Icon = place.icon;
              return (
                <div key={idx} className="bg-white p-6 rounded-2xl border border-slate-200 shadow-xs flex flex-col justify-between">
                  <div>
                    <div className="flex items-center gap-3 mb-3">
                      <div className="p-2.5 rounded-xl bg-slate-100 text-slate-700">
                        <Icon className="w-5 h-5" />
                      </div>
                      <div>
                        <h3 className="text-base font-bold text-slate-900">{place.title}</h3>
                        <p className="text-xs font-semibold text-slate-500">{place.badge}</p>
                      </div>
                    </div>

                    <ul className="space-y-1.5 text-xs sm:text-sm text-slate-600 mt-3">
                      {place.points.map((pt, pIdx) => (
                        <li key={pIdx} className="flex items-start gap-2">
                          <span className="w-1.5 h-1.5 rounded-full bg-slate-400 mt-2 shrink-0" />
                          <span>{pt}</span>
                        </li>
                      ))}
                    </ul>

                    {place.extraNote && (
                      <div className="mt-4 pt-3 border-t border-slate-100 text-xs sm:text-sm text-slate-600">
                        {place.extraNote}
                      </div>
                    )}
                  </div>
                </div>
              );
            })}
          </div>
        </section>

        {/* SECTION: ROAD TRIP GUIDE */}
        <section className="bg-white p-6 sm:p-8 rounded-2xl border border-slate-200 shadow-xs space-y-4">
          <div>
            <h2 className="text-2xl font-bold text-slate-900">Road Trip Guide: Hyderabad to Warangal</h2>
            <p className="text-slate-600 text-sm sm:text-base mt-1">
              Planning a smooth journey is easy when you{' '}
              <Link href={targetUrl} className="font-bold text-slate-900">
                Rent a Best Self Drive Car in Hyderabad
              </Link>
              .
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
            <div className="p-4 bg-slate-50 rounded-xl border border-slate-200/80">
              <h4 className="font-bold text-slate-900 text-sm mb-1">Route Overview</h4>
              <p className="text-xs text-slate-600">Distance: ~150 km</p>
              <p className="text-xs text-slate-600">Travel Time: 3–4 hours</p>
              <p className="text-xs text-slate-600">Highway: NH163</p>
            </div>

            <div className="p-4 bg-slate-50 rounded-xl border border-slate-200/80">
              <h4 className="font-bold text-slate-900 text-sm mb-1">What to Expect</h4>
              <p className="text-xs text-slate-600">• Smooth multi-lane highways</p>
              <p className="text-xs text-slate-600">• Food joints &amp; local dhabas</p>
              <p className="text-xs text-slate-600">• Scenic countryside views</p>
            </div>

            <div className="p-4 bg-slate-50 rounded-xl border border-slate-200/80">
              <h4 className="font-bold text-slate-900 text-sm mb-1">Pro Tips</h4>
              <p className="text-xs text-slate-600">• Start early to beat city traffic</p>
              <p className="text-xs text-slate-600">• Carry water &amp; road snacks</p>
              <p className="text-xs text-slate-600">• Keep GPS navigation active</p>
            </div>
          </div>
        </section>

        {/* SECTION: TYPES OF CARS AVAILABLE */}
        <section className="space-y-4">
          <div>
            <h2 className="text-2xl font-bold text-slate-900">Types of Cars Available for Self Drive in Hyderabad</h2>
            <p className="text-slate-600 text-sm mt-1">
              With{' '}
              <Link href={targetUrl} className="font-bold text-slate-900">
                Self drive car rental services in Hyderabad
              </Link>
              , you’ll find a wide range of vehicles to suit your needs:
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {carTypes.map((car, idx) => (
              <div key={idx} className="bg-white p-5 rounded-2xl border border-slate-200 shadow-xs flex flex-col justify-between">
                <div>
                  <h3 className="text-base font-bold text-slate-900">{car.type}</h3>
                  <p className="text-xs text-slate-500 mb-3">{car.subtitle}</p>
                  <ul className="space-y-1.5 text-xs sm:text-sm text-slate-600">
                    {car.points.map((pt, pIdx) => (
                      <li key={pIdx} className="flex items-start gap-1.5">
                        <span className="w-1.5 h-1.5 rounded-full bg-slate-400 mt-2 shrink-0" />
                        <span>{pt}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>

          <p className="text-xs sm:text-sm text-slate-600 pt-1">
            Choosing the right vehicle enhances your travel experience when you{' '}
            <Link href={targetUrl} className="font-bold text-slate-900">
              Rent a Best Self Drive Car in Hyderabad
            </Link>
            .
          </p>
        </section>

        {/* SECTION: BEST TIME & SAFETY TIPS */}
        <section className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="bg-white p-6 rounded-2xl border border-slate-200 shadow-xs space-y-3">
            <div className="flex items-center gap-2 text-slate-900 font-bold text-sm">
              <Calendar className="w-4 h-4 text-slate-600" /> Best Time to Visit Warangal
            </div>
            <p className="text-xs sm:text-sm text-slate-600">Timing your trip right can enhance your experience.</p>
            <ul className="text-xs sm:text-sm text-slate-600 space-y-2 pt-1">
              <li className="p-2.5 bg-slate-50 rounded-lg">
                <strong>October to February:</strong> Pleasant weather, best for sightseeing
              </li>
              <li className="p-2.5 bg-slate-50 rounded-lg">
                <strong>Monsoon (July–September):</strong> Lush greenery, scenic beauty
              </li>
              <li className="p-2.5 bg-slate-50 rounded-lg">
                <strong>Summer (March–June):</strong> Hot, but manageable for early morning travel
              </li>
            </ul>
            <p className="text-xs sm:text-sm text-slate-600 pt-2 border-t border-slate-100">
              No matter the season, when you{' '}
              <Link href={targetUrl} className="font-bold text-slate-900">
                Rent a Best Self Drive Car in Hyderabad
              </Link>
              , you can plan your trip according to your comfort.
            </p>
          </div>

          <div className="bg-white p-6 rounded-2xl border border-slate-200 shadow-xs space-y-3">
            <div className="flex items-center gap-2 text-slate-900 font-bold text-sm">
              <ShieldCheck className="w-4 h-4 text-slate-600" /> Safety Tips for a Smooth Road Trip
            </div>
            <p className="text-xs sm:text-sm text-slate-600">
              Safety should always be a priority when you{' '}
              <Link href={targetUrl} className="font-bold text-slate-900">
                Rent a Best Self Drive Car in Hyderabad
              </Link>
              .
            </p>
            <ul className="text-xs sm:text-sm text-slate-600 space-y-1.5 pt-1">
              {safetyTips.map((tip, idx) => (
                <li key={idx} className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-slate-600 shrink-0" />
                  <span>{tip}</span>
                </li>
              ))}
            </ul>
          </div>
        </section>

        {/* SECTION: FAQS */}
        <section className="bg-white p-6 sm:p-8 rounded-2xl border border-slate-200 shadow-xs space-y-4">
          <h2 className="text-2xl font-bold text-slate-900">FAQs</h2>

          <div className="space-y-2.5">
            {faqs.map((faq, idx) => (
              <details key={idx} className="group border border-slate-200/80 rounded-xl overflow-hidden">
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
        </section>

        {/* SECTION: FINAL THOUGHTS & CTA */}
        <section className="bg-white border border-slate-200 rounded-2xl p-8 sm:p-10 text-center space-y-4 shadow-xs">
          <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900">Final Thoughts</h2>
          <p className="text-slate-600 text-xs sm:text-sm max-w-2xl mx-auto leading-relaxed">
            Warangal is a destination that deserves more attention, and the journey from Hyderabad is just as exciting as the city itself. When you{' '}
            <Link href={targetUrl} className="font-bold text-slate-900">
              Rent a Best Self Drive Car in Hyderabad
            </Link>
            , you unlock the true potential of your trip—freedom, flexibility, and unforgettable memories.
          </p>
          <p className="text-slate-600 text-xs sm:text-sm max-w-2xl mx-auto leading-relaxed font-medium">
            From ancient temples to serene lakes, every corner of Warangal tells a story. So pack your bags, hit the road, and experience Telangana like never before.
          </p>
          <div className="pt-2">
            <Link
              href={targetUrl}
              className="px-6 py-3 bg-slate-900 text-white font-bold rounded-xl shadow-xs hover:bg-slate-800 transition inline-flex items-center gap-2 text-sm"
            >
              Rent a Best Self Drive Car in Hyderabad <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </section>

      </main>

    </div>
  );
}