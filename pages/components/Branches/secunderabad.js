import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import {
  Car,
  Compass,
  Utensils,
  Calendar,
  CheckCircle2,
  ChevronDown,
  Clock,
  Trees,
  Waves,
  ArrowRight,
  ShieldCheck
} from 'lucide-react';

// ============================================================================
// SEO METADATA
// ============================================================================
export const metadata = {
  title: 'Secunderabad Travel & Lifestyle Guide | Best Car Rentals in Secunderabad',
  description:
    'Explore the ultimate Secunderabad travel and lifestyle guide. Discover Hussain Sagar, Clock Tower, Necklace Road, food spots, and getaways with the best car rentals in Secunderabad.',
  keywords: [
    'Best Car Rentals in Secunderabad',
    'Top car rentals in Secunderabad',
    'Online car booking in Secunderabad',
    'Secunderabad Travel Guide',
    'Self Drive Cars Secunderabad',
    'Hyderabad Car Rentals'
  ],
  alternates: {
    canonical: 'https://www.longdrivecars.com/secunderabad-travel-guide'
  },
  openGraph: {
    title: 'Secunderabad Travel & Lifestyle Guide | Car Rentals',
    description:
      'Plan your trip to Secunderabad with ease. Find top attractions, dining hubs, and travel tips with flexible car rentals.',
    url: 'https://www.longdrivecars.com',
    siteName: 'Long Drive Cars',
    images: [
      {
        url: '/locationpages/shamshabad.webp',
        width: 1200,
        height: 630,
        alt: 'Secunderabad Travel and Lifestyle Guide'
      }
    ],
    locale: 'en_IN',
    type: 'article'
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Secunderabad Travel & Lifestyle Guide | Best Car Rentals',
    description:
      'Explore Secunderabad, heritage spots, and weekend getaways with flexible car rental options in Hyderabad.',
    images: ['/locationpages/shamshabad.webp']
  }
};

// ============================================================================
// PAGE COMPONENT
// ============================================================================
export default function SecunderabadGuidePage() {
  const targetUrl = 'https://www.longdrivecars.com';

  const topPlaces = [
    {
      icon: Waves,
      title: '1. Hussain Sagar Lake – A Scenic Escape',
      badge: 'Scenic Waterfront',
      sectionLabel: 'Why Visit?',
      points: ['Boating and water activities', 'Stunning sunset views', 'Buddha statue at the center'],
      extraNote: (
        <>
          Traveling here becomes effortless when you use the{' '}
          <Link href={targetUrl} className="font-bold text-slate-900">
            Top car rentals in Secunderabad
          </Link>{' '}
          for flexible timing.
        </>
      )
    },
    {
      icon: Clock,
      title: '2. Secunderabad Clock Tower – A Historic Landmark',
      badge: 'Heritage Site',
      sectionLabel: 'Highlights',
      points: ['Heritage architecture', 'Central location', 'Great for quick visits and photos']
    },
    {
      icon: Compass,
      title: '3. Necklace Road – Perfect for Leisure',
      badge: 'Popular Hangout',
      sectionLabel: 'Things to Do',
      points: ['Street food exploration', 'Cycling and jogging', 'Lakeside relaxation']
    },
    {
      icon: Trees,
      title: '4. Sanjeevaiah Park – Nature in the City',
      badge: 'Nature Retreat',
      sectionLabel: 'Why Visit?',
      points: ['Lush gardens and open spaces', 'Ideal for picnics', 'Bird watching opportunities'],
      extraNote: (
        <>
          With the{' '}
          <Link href={targetUrl} className="font-bold text-slate-900">
            Top car rentals in Secunderabad
          </Link>
          , visiting these spots becomes seamless and enjoyable.
        </>
      )
    }
  ];

  const getaways = [
    {
      name: '1. Ananthagiri Hills',
      tag: 'Nature & Trekking',
      bullets: ['Ideal for trekking and nature lovers', 'Refreshing greenery and cool climate']
    },
    {
      name: '2. Yadadri Temple',
      tag: 'Spiritual Destination',
      bullets: ['Popular spiritual destination', 'Peaceful and scenic surroundings']
    },
    {
      name: '3. Ramoji Film City',
      tag: 'Family Entertainment',
      bullets: ['Entertainment hub for families', 'Guided tours and attractions']
    }
  ];

  const faqs = [
    {
      q: '1. What are the benefits of choosing the best car rentals in Secunderabad?',
      a: 'The Best Car Rentals in Secunderabad offer flexibility, privacy, and convenience, making travel easier and more enjoyable.'
    },
    {
      q: '2. Is it safe to rent a car in Secunderabad?',
      a: 'Yes, it is safe if you choose a reliable rental service and follow traffic rules.'
    },
    {
      q: '3. What documents are required for car rental?',
      a: 'You need a valid driving license and a government-issued ID.'
    },
    {
      q: '4. Can I use rental cars for outstation trips?',
      a: 'Yes, most providers allow outstation travel with proper permissions.'
    },
    {
      q: '5. Are car rentals affordable in Secunderabad?',
      a: 'Yes, the Best Car Rentals in Secunderabad are cost-effective, especially for long-term use.'
    }
  ];

  return (
    <div className="min-h-screen bg-slate-50 text-slate-900 antialiased pt-24 lg:pt-0">
      
      {/* 1. HEADER SECTION */}
      <header className="bg-white py-12 md:py-16 px-4 sm:px-6 lg:px-8 border-b border-slate-200">
        <div className="max-w-4xl mx-auto text-center space-y-4">
          <span className="inline-block px-3 py-1 text-xs font-semibold uppercase tracking-wider bg-slate-100 text-slate-700 rounded-full">
            Travel &amp; Lifestyle Guide
          </span>

          <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight text-slate-900 md:leading-snug">
            Secunderabad Travel &amp; Lifestyle Guide: Discover the{' '}
            <Link href={targetUrl} className="font-bold text-slate-900">
              Best Car Rentals in Secunderabad
            </Link>
          </h1>

          <p className="text-slate-600 text-sm sm:text-base md:text-lg max-w-3xl mx-auto leading-relaxed">
            Secunderabad, often called the twin city of Hyderabad, is a vibrant destination that beautifully blends colonial charm with modern urban living. Known for its railway connectivity, bustling markets, serene lakes, and historical landmarks, Secunderabad attracts both locals and tourists year-round.
          </p>

          <p className="text-slate-600 text-sm sm:text-base md:text-lg max-w-3xl mx-auto leading-relaxed">
            To truly explore everything this dynamic area has to offer, choosing the{' '}
            <Link href={targetUrl} className="font-bold text-slate-900">
              Best Car Rentals in Secunderabad
            </Link>{' '}
            is the smartest move. Whether you're commuting, sightseeing, or planning a weekend getaway, having your own vehicle ensures comfort, flexibility, and convenience.
          </p>
        </div>
      </header>

      {/* 2. DEDICATED COVER IMAGE (max-h-[480px]) */}
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 -mt-6">
        <div className="rounded-2xl overflow-hidden shadow-sm border border-slate-200 bg-white">
          <Image
            src="/locationpages/secunderbad.webp"
            height={2000}
            width={2000}
            className="rounded-2xl object-cover w-full max-h-[480px]"
            alt="Secunderabad travel and lifestyle guide cover image"
            priority
          />
        </div>
      </div>

      {/* 3. MAIN BODY */}
      <main className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-10 space-y-8">

        {/* SECTION: WHY SECUNDERABAD */}
        <section className="bg-white p-6 sm:p-8 rounded-2xl border border-slate-200 shadow-xs space-y-4">
          <h2 className="text-2xl font-bold text-slate-900">Why Secunderabad is a Must-Visit Destination</h2>
          <p className="text-slate-600 leading-relaxed text-sm sm:text-base">
            Secunderabad stands out for its unique mix of history, culture, and modern infrastructure. From heritage sites to shopping streets and peaceful lakes, it offers something for everyone.
          </p>

          <h3 className="text-base font-bold text-slate-800 pt-1">Key Highlights of Secunderabad</h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            {[
              'Excellent railway and road connectivity',
              'Rich colonial history and architecture',
              'Popular shopping markets and local bazaars',
              'Proximity to major Hyderabad attractions',
              'Variety of food and entertainment options'
            ].map((highlight, idx) => (
              <div key={idx} className="flex items-center gap-2.5 p-3.5 bg-slate-50 rounded-xl border border-slate-200/80 text-sm font-medium text-slate-700">
                <CheckCircle2 className="w-4 h-4 text-slate-600 shrink-0" />
                <span>{highlight}</span>
              </div>
            ))}
          </div>

          <p className="text-slate-600 text-sm pt-2">
            To explore these highlights efficiently, opting for the{' '}
            <Link href={targetUrl} className="font-bold text-slate-900">
              Best Car Rentals in Secunderabad
            </Link>{' '}
            helps you move around freely without relying on public transport.
          </p>
        </section>

        {/* SECTION: TOP PLACES TO VISIT */}
        <section className="space-y-4">
          <div>
            <h2 className="text-2xl font-bold text-slate-900">Top Places to Visit in Secunderabad</h2>
            <p className="text-slate-600 text-sm mt-1">Discover popular lakes, heritage towers, and parks.</p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {topPlaces.map((place, idx) => {
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

                    <h4 className="text-xs font-bold uppercase tracking-wider text-slate-400 mt-4 mb-2">
                      {place.sectionLabel}
                    </h4>
                    <ul className="space-y-1.5 text-xs sm:text-sm text-slate-600">
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

        {/* SECTION: RESTAURANTS & CAFES */}
        <section className="bg-white p-6 sm:p-8 rounded-2xl border border-slate-200 shadow-xs space-y-4">
          <div className="flex items-center gap-2 text-slate-700 font-bold text-sm">
            <Utensils className="w-4 h-4 text-slate-600" /> Food Lover's Guide
          </div>
          <h2 className="text-2xl font-bold text-slate-900">Best Cafes &amp; Restaurants in Secunderabad</h2>
          <p className="text-slate-600 text-sm sm:text-base">
            Secunderabad is a paradise for food lovers, offering everything from street food to premium dining.
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-1">
            <div className="p-5 bg-slate-50 rounded-xl border border-slate-200/80">
              <h4 className="font-bold text-slate-900 text-sm mb-2">Top Picks</h4>
              <ul className="text-xs sm:text-sm text-slate-600 space-y-1.5">
                <li>• Authentic Hyderabadi cuisine</li>
                <li>• Multi-cuisine restaurants</li>
                <li>• Trendy cafes and bakeries</li>
              </ul>
            </div>
            <div className="p-5 bg-slate-50 rounded-xl border border-slate-200/80">
              <h4 className="font-bold text-slate-900 text-sm mb-2">Must-Try Experiences</h4>
              <ul className="text-xs sm:text-sm text-slate-600 space-y-1.5">
                <li>• Traditional biryani spots</li>
                <li>• Rooftop dining</li>
                <li>• Late-night food joints</li>
              </ul>
            </div>
          </div>
        </section>

        {/* SECTION: WHY CHOOSE CAR RENTALS */}
        <section className="bg-slate-100/70 p-6 sm:p-8 rounded-2xl border border-slate-200 space-y-5">
          <div>
            <h2 className="text-2xl font-bold text-slate-900">Why Choose the Best Car Rentals in Secunderabad?</h2>
            <p className="text-slate-600 text-sm mt-1">
              Transportation plays a vital role in shaping your travel experience.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div className="bg-white p-5 rounded-xl border border-slate-200 shadow-xs">
              <h3 className="font-bold text-slate-900 text-sm mb-2 flex items-center gap-2">
                <Car className="w-4 h-4 text-slate-600" /> Benefits of Car Rentals
              </h3>
              <ul className="text-xs sm:text-sm text-slate-600 space-y-1.5">
                <li>• Freedom to travel anytime</li>
                <li>• No waiting for cabs or public transport</li>
                <li>• Comfortable and private travel</li>
                <li>• Ideal for families and groups</li>
                <li>• Cost-effective for long durations</li>
              </ul>
            </div>

            <div className="bg-white p-5 rounded-xl border border-slate-200 shadow-xs">
              <h3 className="font-bold text-slate-900 text-sm mb-2 flex items-center gap-2">
                <ShieldCheck className="w-4 h-4 text-slate-600" />
                Advantages of Using the{' '}
                <Link href={targetUrl} className="font-bold text-slate-900">
                  Best Car Rentals in Secunderabad
                </Link>
              </h3>
              <ul className="text-xs sm:text-sm text-slate-600 space-y-1.5">
                <li>• Easy access to tourist spots</li>
                <li>• Perfect for business and leisure travel</li>
                <li>• Wide range of vehicles available</li>
                <li>• Flexible rental plans</li>
              </ul>
            </div>
          </div>
        </section>

        {/* SECTION: NEARBY GETAWAYS */}
        <section className="space-y-4">
          <div>
            <h2 className="text-2xl font-bold text-slate-900">Nearby Getaways from Secunderabad</h2>
            <p className="text-slate-600 text-sm mt-1">Secunderabad’s location makes it a great starting point for short trips and weekend getaways.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {getaways.map((item, idx) => (
              <div key={idx} className="bg-white p-5 rounded-2xl border border-slate-200 shadow-xs">
                <span className="text-[11px] font-semibold px-2 py-0.5 bg-slate-100 text-slate-700 rounded mb-2 inline-block">
                  {item.tag}
                </span>
                <h3 className="font-bold text-slate-900 text-base">{item.name}</h3>
                <ul className="text-xs sm:text-sm text-slate-600 mt-2 space-y-1">
                  {item.bullets.map((b, bIdx) => (
                    <li key={bIdx}>• {b}</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          <div className="p-4 bg-white border border-slate-200 rounded-xl text-xs sm:text-sm text-slate-700">
            Planning these trips becomes easy when you choose the{' '}
            <Link href={targetUrl} className="font-bold text-slate-900">
              Online car booking in Secunderabad
            </Link>{' '}
            for flexible travel.
          </div>
        </section>

        {/* SECTION: BEST TIME & TRAVEL TIPS */}
        <section className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="bg-white p-6 rounded-2xl border border-slate-200 shadow-xs space-y-3">
            <div className="flex items-center gap-2 text-slate-900 font-bold text-sm">
              <Calendar className="w-4 h-4 text-slate-600" /> Best Time to Visit Secunderabad
            </div>
            <h4 className="text-xs font-bold uppercase text-slate-400 tracking-wider">Seasonal Guide</h4>
            <ul className="text-xs sm:text-sm text-slate-600 space-y-2">
              <li className="p-2.5 bg-slate-50 rounded-lg"><strong>October to February:</strong> Ideal weather for sightseeing</li>
              <li className="p-2.5 bg-slate-50 rounded-lg"><strong>March to June:</strong> Warm but manageable</li>
              <li className="p-2.5 bg-slate-50 rounded-lg"><strong>July to September:</strong> Refreshing monsoon ambiance</li>
            </ul>
          </div>

          <div className="bg-white p-6 rounded-2xl border border-slate-200 shadow-xs space-y-3">
            <div className="flex items-center gap-2 text-slate-900 font-bold text-sm">
              <Compass className="w-4 h-4 text-slate-600" /> Travel Tips for Exploring Secunderabad
            </div>

            <h4 className="text-xs font-bold uppercase text-slate-400 tracking-wider">Smart Travel Tips</h4>
            <ul className="text-xs sm:text-sm text-slate-600 space-y-1">
              <li>• Plan your routes in advance</li>
              <li>• Avoid peak traffic hours</li>
              <li>• Use navigation apps for real-time updates</li>
            </ul>

            <h4 className="text-xs font-bold uppercase text-slate-400 tracking-wider pt-2">Essentials to Carry</h4>
            <ul className="text-xs sm:text-sm text-slate-600 space-y-1">
              <li>• Valid driving license</li>
              <li>• ID proof</li>
              <li>• Phone charger</li>
              <li>• Water bottle</li>
            </ul>

            <p className="text-xs sm:text-sm text-slate-600 pt-2 border-t border-slate-100">
              With the{' '}
              <Link href={targetUrl} className="font-bold text-slate-900">
                Online car booking in Secunderabad
              </Link>
              , managing your travel becomes easier and more efficient.
            </p>
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

        {/* SECTION: CONCLUSION & CTA */}
        <section className="bg-white border border-slate-200 rounded-2xl p-8 sm:p-10 text-center space-y-4 shadow-xs">
          <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900">Conclusion</h2>
          <p className="text-slate-600 text-xs sm:text-sm max-w-2xl mx-auto leading-relaxed">
            Secunderabad is a lively destination that offers a perfect blend of history, culture, and modern lifestyle. From scenic lakes and parks to bustling markets and food streets, it has something for everyone.
          </p>
          <p className="text-slate-600 text-xs sm:text-sm max-w-2xl mx-auto leading-relaxed">
            To truly explore this vibrant city without limitations, choosing the{' '}
            <Link href={targetUrl} className="font-bold text-slate-900">
              Best Car Rentals in Secunderabad
            </Link>{' '}
            is the ideal solution. It gives you the freedom to travel at your own pace, the comfort of private transportation, and the convenience of flexible planning.
          </p>
          <div className="pt-2">
            <Link
              href={targetUrl}
              className="px-6 py-3 bg-slate-900 text-white font-bold rounded-xl shadow-xs hover:bg-slate-800 transition inline-flex items-center gap-2 text-sm"
            >
              Best Car Rentals in Secunderabad <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </section>

      </main>

     

    </div>
  );
}