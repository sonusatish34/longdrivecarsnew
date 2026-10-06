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
  Plane,
  Waves,
  Sparkles,
  MapPin,
  ShieldCheck,
  ArrowRight
} from 'lucide-react';

// ============================================================================
// SEO METADATA
// ============================================================================
export const metadata = {
  title: 'Shamshabad Travel & Lifestyle Guide | Self Drive Car Rental in Shamshabad',
  description:
    'Complete travel guide to Shamshabad Hyderabad. Discover airport connectivity, Escape Water Park, Wonderla, food spots, and seamless outstation getaways with self drive car rentals in Shamshabad.',
  keywords: [
    'Self Drive car rental in Shamshabad',
    'Book self drive cars in Shamshabad',
    'Online self drive car rental Shamshabad',
    'Shamshabad Travel Guide',
    'Hyderabad Airport Car Rental',
    'Self Drive Cars Shamshabad'
  ],
  alternates: {
    canonical: 'https://www.longdrivecars.com/shamshabad-travel-guide'
  },
  openGraph: {
    title: 'Shamshabad Travel & Lifestyle Guide | Self Drive Car Rentals',
    description:
      'Explore Shamshabad with complete freedom. Discover airport transit perks, amusement parks, lakes, and highway dining with self-drive car rentals.',
    url: 'https://www.longdrivecars.com',
    siteName: 'Long Drive Cars',
    images: [
      {
        url: '/locationpages/shamshabad.webp',
        width: 1200,
        height: 630,
        alt: 'Self Drive Car Rental in Shamshabad Hyderabad'
      }
    ],
    locale: 'en_IN',
    type: 'article'
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Shamshabad Travel & Lifestyle Guide | Self Drive Car Rental',
    description:
      'Book self-drive cars in Shamshabad near Hyderabad International Airport for city drives and outstation road trips.',
    images: ['/locationpages/shamshabad.webp']
  }
};

// ============================================================================
// PAGE COMPONENT
// ============================================================================
export default function ShamshabadGuidePage() {
  const targetUrl = 'https://www.longdrivecars.com';

  const places = [
    {
      icon: Plane,
      title: '1. Rajiv Gandhi International Airport Area – Modern Infrastructure Hub',
      badge: 'Airport Corridor',
      sectionLabel: 'Why Visit?',
      points: [
        'Clean and well-planned surroundings',
        'Ideal for smooth highway drives',
        'Great connectivity across Hyderabad'
      ],
      extraNote: (
        <>
          <Link href={targetUrl} className="font-bold text-slate-900">
            Book self drive cars in Shamshabad
          </Link>{' '}
          and the airport transfers and nearby travel become effortless.
        </>
      )
    },
    {
      icon: Waves,
      title: '2. Escape Water Park – Fun & Relaxation',
      badge: 'Family Fun',
      sectionLabel: 'Things to Do',
      points: [
        'Water rides and slides',
        'Poolside relaxation',
        'Group and family activities'
      ]
    },
    {
      icon: Sparkles,
      title: '3. Wonderla Amusement Park (Nearby)',
      badge: 'Thrill & Entertainment',
      sectionLabel: 'Highlights',
      points: [
        'High-thrill adventure rides',
        'Complete family entertainment',
        'Full-day immersive fun experience'
      ]
    },
    {
      icon: MapPin,
      title: '4. Nearby Attractions',
      badge: 'Heritage & Nature',
      sectionLabel: 'Connected Landmarks',
      points: [
        'Ramoji Film City',
        'Gandipet Lake',
        'Chilkur Balaji Temple',
        'Himayat Sagar Lake'
      ],
      extraNote: (
        <>
          Traveling to these places becomes easy and flexible when you{' '}
          <Link href={targetUrl} className="font-bold text-slate-900">
            Book self drive cars in Shamshabad
          </Link>
          .
        </>
      )
    }
  ];

  const getaways = [
    {
      name: '1. Ananthagiri Hills',
      tag: 'Trekking & Nature',
      bullets: ['Scenic trekking destination', 'Fresh air and lush greenery']
    },
    {
      name: '2. Osman Sagar Lake',
      tag: 'Scenic Picnics',
      bullets: ['Ideal for family picnics', 'Peaceful waterfront surroundings']
    },
    {
      name: '3. Ramoji Film City',
      tag: 'Family Entertainment',
      bullets: ['Entertainment and guided studio tours', 'Great for families and groups']
    }
  ];

  const faqs = [
    {
      q: '1. Is it safe to use self-drive cars in Shamshabad?',
      a: 'Yes, Self Drive car rental in Shamshabad is safe when you follow traffic rules and choose a reliable provider.'
    },
    {
      q: '2. What documents are required for renting a self-drive car?',
      a: 'You need a valid driving license and a government-issued ID.'
    },
    {
      q: '3. Can I use the rental car for outstation trips?',
      a: 'Yes, most services allow outstation travel with proper permissions.'
    },
    {
      q: '4. Are self-drive cars available near the airport?',
      a: 'Yes, many providers offer Self Drive car rental in Shamshabad near the airport for easy access.'
    },
    {
      q: '5. Is it affordable to rent a self-drive car in Shamshabad?',
      a: 'Yes, it is cost-effective, especially for frequent travelers and long-duration rentals.'
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
            Shamshabad Travel &amp; Lifestyle Guide: Why Choose{' '}
            <Link href={targetUrl} className="font-bold text-slate-900">
              Self Drive car rental in Shamshabad
            </Link>
          </h1>

          <p className="text-slate-600 text-sm sm:text-base md:text-lg max-w-3xl mx-auto leading-relaxed">
            Shamshabad, located on the outskirts of Hyderabad, has rapidly transformed into a key travel and connectivity hub. Known for housing the Rajiv Gandhi International Airport, this area is not just a transit point—it’s a growing destination with excellent infrastructure, smooth highways, and access to scenic getaways.
          </p>

          <p className="text-slate-600 text-sm sm:text-base md:text-lg max-w-3xl mx-auto leading-relaxed">
            Whether you're a frequent traveler, a business professional, or someone planning a quick trip, the best way to explore this region is by choosing{' '}
            <Link href={targetUrl} className="font-bold text-slate-900">
              Self Drive car rental in Shamshabad
            </Link>
            . It offers flexibility, privacy, and complete control over your journey.
          </p>

          <p className="text-xs sm:text-sm text-slate-500 italic">
            In this guide, we’ll explore Shamshabad’s highlights, places to visit, food options, and why self-drive cars are the most convenient way to travel.
          </p>
        </div>
      </header>

      {/* 2. DEDICATED COVER IMAGE CONTAINER (max-h-[480px]) */}
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 -mt-6">
        <div className="rounded-2xl overflow-hidden shadow-sm border border-slate-200 bg-white">
          <Image
            src="/locationpages/shamshabad.webp"
            height={2000}
            width={2000}
            className="rounded-2xl object-cover w-full max-h-[480px]"
            alt="Shamshabad travel and lifestyle guide cover image"
            priority
          />
        </div>
      </div>

      {/* 3. MAIN BODY */}
      <main className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-10 space-y-8">

        {/* SECTION: WHY SHAMSHABAD */}
        <section className="bg-white p-6 sm:p-8 rounded-2xl border border-slate-200 shadow-xs space-y-4">
          <h2 className="text-2xl font-bold text-slate-900">Why Shamshabad is a Must-Visit in Hyderabad</h2>
          <p className="text-slate-600 leading-relaxed text-sm sm:text-base">
            Shamshabad is more than just an airport zone—it’s a strategic location with excellent connectivity and modern development.
          </p>

          <h3 className="text-base font-bold text-slate-800 pt-1">Key Highlights of Shamshabad</h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            {[
              'Home to Hyderabad’s international airport',
              'Well-developed road infrastructure',
              'Easy access to ORR (Outer Ring Road)',
              'Close to business hubs and industrial zones',
              'Gateway to multiple tourist destinations'
            ].map((highlight, idx) => (
              <div key={idx} className="flex items-center gap-2.5 p-3.5 bg-slate-50 rounded-xl border border-slate-200/80 text-sm font-medium text-slate-700">
                <CheckCircle2 className="w-4 h-4 text-slate-600 shrink-0" />
                <span>{highlight}</span>
              </div>
            ))}
          </div>

          <p className="text-slate-600 text-sm pt-2">
            To make the most of your travel here, opting for{' '}
            <Link href={targetUrl} className="font-bold text-slate-900">
              Self Drive car rental in Shamshabad
            </Link>{' '}
            ensures seamless movement without delays.
          </p>
        </section>

        {/* SECTION: TOP PLACES TO VISIT */}
        <section className="space-y-4">
          <div>
            <h2 className="text-2xl font-bold text-slate-900">Top Places to Visit in Shamshabad</h2>
            <p className="text-slate-600 text-sm mt-1">Discover airport infrastructure, amusement parks, and nearby lakes.</p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {places.map((place, idx) => {
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
            <Utensils className="w-4 h-4 text-slate-600" /> Dining &amp; Food Hubs
          </div>
          <h2 className="text-2xl font-bold text-slate-900">Best Cafes &amp; Restaurants in Shamshabad</h2>
          <p className="text-slate-600 text-sm sm:text-base">
            Shamshabad offers a mix of highway dining, cafes, and premium restaurants.
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-1">
            <div className="p-5 bg-slate-50 rounded-xl border border-slate-200/80">
              <h4 className="font-bold text-slate-900 text-sm mb-2">Top Picks</h4>
              <ul className="text-xs sm:text-sm text-slate-600 space-y-1.5">
                <li>• Highway food joints</li>
                <li>• Multi-cuisine restaurants</li>
                <li>• Airport lounge dining</li>
              </ul>
            </div>
            <div className="p-5 bg-slate-50 rounded-xl border border-slate-200/80">
              <h4 className="font-bold text-slate-900 text-sm mb-2">Must-Try Experiences</h4>
              <ul className="text-xs sm:text-sm text-slate-600 space-y-1.5">
                <li>• Quick bites before flights</li>
                <li>• Late-night dining options</li>
                <li>• Traditional Hyderabadi meals</li>
              </ul>
            </div>
          </div>

          <p className="text-slate-600 text-sm pt-2">
            Exploring food options becomes more convenient when you{' '}
            <Link href={targetUrl} className="font-bold text-slate-900">
              Book self drive cars in Shamshabad
            </Link>
            .
          </p>
        </section>

        {/* SECTION: WHY CHOOSE SELF DRIVE */}
        <section className="bg-slate-100/70 p-6 sm:p-8 rounded-2xl border border-slate-200 space-y-5">
          <div>
            <h2 className="text-2xl font-bold text-slate-900">Why Choose Self Drive Car Rental in Shamshabad?</h2>
            <p className="text-slate-600 text-sm mt-1">
              Transportation near airports and highways can be expensive and restrictive. That’s why self-drive rentals are gaining popularity.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div className="bg-white p-5 rounded-xl border border-slate-200 shadow-xs">
              <h3 className="font-bold text-slate-900 text-sm mb-2 flex items-center gap-2">
                <Car className="w-4 h-4 text-slate-600" /> Benefits of Self Drive Cars
              </h3>
              <ul className="text-xs sm:text-sm text-slate-600 space-y-1.5">
                <li>• Travel at your own schedule</li>
                <li>• No waiting for taxis</li>
                <li>• Complete privacy and comfort</li>
                <li>• Ideal for business and leisure</li>
                <li>• Cost-effective for longer durations</li>
              </ul>
            </div>

            <div className="bg-white p-5 rounded-xl border border-slate-200 shadow-xs">
              <h3 className="font-bold text-slate-900 text-sm mb-2 flex items-center gap-2">
                <ShieldCheck className="w-4 h-4 text-slate-600" />
                Advantages of{' '}
                <Link href={targetUrl} className="font-bold text-slate-900">
                  Self Drive car rental in Shamshabad
                </Link>
              </h3>
              <ul className="text-xs sm:text-sm text-slate-600 space-y-1.5">
                <li>• Smooth airport pickups and drop-offs</li>
                <li>• Perfect for outstation trips</li>
                <li>• Flexible booking options</li>
                <li>• Wide range of vehicles available</li>
              </ul>
            </div>
          </div>
        </section>

        {/* SECTION: NEARBY GETAWAYS */}
        <section className="space-y-4">
          <div>
            <h2 className="text-2xl font-bold text-slate-900">Nearby Getaways from Shamshabad</h2>
            <p className="text-slate-600 text-sm mt-1">Shamshabad is perfectly located for quick escapes and weekend trips.</p>
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
        </section>

        {/* SECTION: BEST TIME & TRAVEL TIPS */}
        <section className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="bg-white p-6 rounded-2xl border border-slate-200 shadow-xs space-y-3">
            <div className="flex items-center gap-2 text-slate-900 font-bold text-sm">
              <Calendar className="w-4 h-4 text-slate-600" /> Best Time to Visit Shamshabad
            </div>
            <h4 className="text-xs font-bold uppercase text-slate-400 tracking-wider">Seasonal Guide</h4>
            <ul className="text-xs sm:text-sm text-slate-600 space-y-2">
              <li className="p-2.5 bg-slate-50 rounded-lg"><strong>October to February:</strong> Best weather for travel</li>
              <li className="p-2.5 bg-slate-50 rounded-lg"><strong>March to June:</strong> Warm but manageable</li>
              <li className="p-2.5 bg-slate-50 rounded-lg"><strong>July to September:</strong> Refreshing monsoon drives</li>
            </ul>
            <p className="text-xs sm:text-sm text-slate-600 pt-2 border-t border-slate-100">
              No matter the season,{' '}
              <Link href={targetUrl} className="font-bold text-slate-900">
                Online self drive car rental Shamshabad
              </Link>{' '}
              ensures a comfortable journey.
            </p>
          </div>

          <div className="bg-white p-6 rounded-2xl border border-slate-200 shadow-xs space-y-3">
            <div className="flex items-center gap-2 text-slate-900 font-bold text-sm">
              <Compass className="w-4 h-4 text-slate-600" /> Travel Tips for Exploring Shamshabad
            </div>

            <h4 className="text-xs font-bold uppercase text-slate-400 tracking-wider">Smart Travel Tips</h4>
            <ul className="text-xs sm:text-sm text-slate-600 space-y-1">
              <li>• Use ORR for faster travel</li>
              <li>• Plan routes before starting</li>
              <li>• Avoid peak airport traffic times</li>
            </ul>

            <h4 className="text-xs font-bold uppercase text-slate-400 tracking-wider pt-2">Essentials to Carry</h4>
            <ul className="text-xs sm:text-sm text-slate-600 space-y-1">
              <li>• Valid driving license</li>
              <li>• ID proof</li>
              <li>• Phone charger</li>
              <li>• Water bottle</li>
            </ul>

            <p className="text-xs sm:text-sm text-slate-600 pt-2 border-t border-slate-100">
              Having your own vehicle through{' '}
              <Link href={targetUrl} className="font-bold text-slate-900">
                Online self drive car rental Shamshabad
              </Link>{' '}
              simplifies your entire travel plan.
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
            Shamshabad is no longer just an airport location—it’s a fast-growing travel hub with excellent connectivity and access to some of Hyderabad’s best attractions. Whether you’re traveling for business, leisure, or a quick getaway, having the right mode of transport makes all the difference.
          </p>
          <p className="text-slate-600 text-xs sm:text-sm max-w-2xl mx-auto leading-relaxed">
            Choosing{' '}
            <Link href={targetUrl} className="font-bold text-slate-900">
              Self Drive car rental in Shamshabad
            </Link>{' '}
            gives you unmatched flexibility, comfort, and convenience. From airport transfers to weekend road trips, it allows you to take full control of your journey.
          </p>
          <div className="pt-2">
            <Link
              href={targetUrl}
              className="px-6 py-3 bg-slate-900 text-white font-bold rounded-xl shadow-xs hover:bg-slate-800 transition inline-flex items-center gap-2 text-sm"
            >
              Self Drive car rental in Shamshabad <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </section>

      </main>

    </div>
  );
}