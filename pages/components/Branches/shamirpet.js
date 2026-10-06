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
  Waves,
  Camera,
  Coffee,
  Heart
} from 'lucide-react';

// ============================================================================
// SEO METADATA
// ============================================================================
export const metadata = {
  title: 'Shamirpet Travel Guide | Explore Nature with Self Driving Cars in Hyderabad',
  description:
    'Plan a scenic getaway to Shamirpet. Discover Shamirpet Lake, Jawahar Deer Park, luxury resorts, route details, and tips with self-driving cars in Hyderabad.',
  keywords: [
    'Self driving cars in Hyderabad',
    'Rent Self Drive Cars Hyderabad',
    'Premium self drive car rental services in Hyderabad',
    'Shamirpet Travel Guide',
    'Shamirpet Lake Road Trip',
    'Self Drive Cars Hyderabad'
  ],
  alternates: {
    canonical: 'https://www.longdrivecars.com/shamirpet-travel-guide'
  },
  openGraph: {
    title: 'Shamirpet Travel Guide: Explore Nature with Self Driving Cars in Hyderabad',
    description:
      'Escape city chaos with a scenic road trip to Shamirpet Lake and Jawahar Deer Park using self-driving cars in Hyderabad.',
    url: 'https://www.longdrivecars.com',
    siteName: 'Long Drive Cars',
    images: [
      {
        url: '/locationpages/shamshabad.webp',
        width: 1200,
        height: 630,
        alt: 'Shamirpet Travel Guide Self Drive Car Rental Hyderabad'
      }
    ],
    locale: 'en_IN',
    type: 'article'
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Shamirpet Travel Guide | Self Drive Cars Hyderabad',
    description:
      'Discover nature, lake views, and resorts in Shamirpet with flexible self-drive car rentals from Hyderabad.',
    images: ['/locationpages/shamshabad.webp']
  }
};

// ============================================================================
// PAGE COMPONENT
// ============================================================================
export default function ShamirpetGuidePage() {
  const targetUrl = 'https://www.longdrivecars.com';

  const highlights = [
    'Scenic Shamirpet Lake views',
    'Lush greenery and forest areas',
    'Quiet, less crowded environment',
    'Ideal for picnics and photography',
    'Close proximity to Hyderabad (~25 km)'
  ];

  const attractions = [
    {
      icon: Waves,
      title: '1. Shamirpet Lake',
      badge: 'Scenic Waterfront',
      points: [
        'A serene spot perfect for relaxation, photography, and nature walks',
        'Early mornings here are magical with calm water and refreshing breeze',
        'Great vantage point for sunset views along the rocky banks'
      ]
    },
    {
      icon: Trees,
      title: '2. Jawahar Deer Park',
      badge: 'Wildlife & Nature',
      points: [
        'A must-visit destination for nature and wildlife enthusiasts',
        'Spot deer species in their natural, peaceful habitat',
        'Surrounded by rich canopy and dense green vegetation'
      ]
    },
    {
      icon: Sparkles,
      title: '3. Resorts and Retreats',
      badge: 'Leisure & Spa',
      points: [
        'Swimming pools & landscaped lawns',
        'Rejuvenating spa services and wellness retreats',
        'Outdoor adventure activities and sports'
      ],
      extraNote: (
        <>
          Using{' '}
          <Link href={targetUrl} className="font-bold text-slate-900">
            Self driving cars in Hyderabad
          </Link>{' '}
          makes it easier to explore multiple resorts in one trip.
        </>
      )
    }
  ];

  const benefits = [
    {
      title: '1. Complete Freedom and Flexibility',
      desc: 'With Self driving cars in Hyderabad, you’re not tied to schedules or drivers. You can stop anywhere, anytime—whether it’s for photos, snacks, or just to enjoy the view.'
    },
    {
      title: '2. Comfortable and Premium Travel',
      desc: 'Long drives become smoother and more enjoyable when you choose Rent Self Drive Cars Hyderabad with modern features like air conditioning, GPS navigation, spacious seating, and safety features.'
    },
    {
      title: '3. Perfect for Couples and Groups',
      desc: 'Enjoy complete privacy for romantic drives, ample luggage and seating space for family and friends, and personalized travel schedules.'
    },
    {
      title: '4. Cost-Effective for Short Trips',
      desc: 'Compared to traditional taxis with waiting charges, Rent Self Drive Cars Hyderabad can be more economical, especially for full-day outings.'
    }
  ];

  const travelTips = [
    'Start early to avoid city traffic',
    'Carry sufficient drinking water and road snacks',
    'Wear comfortable clothing and walking shoes',
    'Keep your camera ready for scenic lake and bird shots',
    'Choose self-drive cars for flexible stops along the highway'
  ];

  const mustTryExperiences = [
    'Enjoy lakeside photography during golden hours',
    'Try local food at nearby highway dhabas',
    'Relax and unwind at luxury nature resorts',
    'Explore tranquil nature and forest trails'
  ];

  const faqs = [
    {
      q: '1. Why choose self driving cars in Hyderabad for Shamirpet?',
      a: 'Self driving cars in Hyderabad offer flexibility, comfort, and privacy, making them perfect for short road trips.'
    },
    {
      q: '2. How far is Shamirpet from Hyderabad?',
      a: 'Shamirpet is approximately 25 km from Hyderabad and takes around 45 minutes to 1 hour to reach.'
    },
    {
      q: '3. Is Shamirpet good for a one-day trip?',
      a: 'Yes, Shamirpet is an ideal destination for a quick, refreshing one-day getaway.'
    },
    {
      q: '4. What is the best time to visit Shamirpet?',
      a: 'Early mornings and late evenings are the best times to visit Shamirpet for pleasant weather and views.'
    },
    {
      q: '5. Are self driving cars safe for road trips?',
      a: 'Yes, Self driving cars in Hyderabad come with modern safety features, verified maintenance, and roadside assistance, ensuring a secure journey.'
    }
  ];

  return (
    <div className="min-h-screen bg-slate-50 text-slate-900 antialiased pt-24 lg:pt-0">
      
      {/* 1. HEADER SECTION */}
      <header className="bg-white py-12 md:py-16 px-4 sm:px-6 lg:px-8 border-b border-slate-200">
        <div className="max-w-4xl mx-auto text-center space-y-4">
          <span className="inline-block px-3 py-1 text-xs font-semibold uppercase tracking-wider bg-slate-100 text-slate-700 rounded-full">
            Weekend Getaway Guide
          </span>

          <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight text-slate-900 leading-tight">
            Shamirpet Travel Guide: Explore Nature with{' '}
            <Link href={targetUrl} className="font-bold text-slate-900">
              Self driving cars in Hyderabad
            </Link>
          </h1>

          <p className="text-slate-600 text-sm sm:text-base md:text-lg max-w-3xl mx-auto leading-relaxed">
            Looking for a quick escape from city chaos? Shamirpet is one of the most refreshing getaways near Hyderabad, offering a perfect mix of nature, serenity, and scenic landscapes. Whether you’re planning a solo retreat, a romantic drive, or a weekend trip with friends, choosing{' '}
            <Link href={targetUrl} className="font-bold text-slate-900">
              Self driving cars in Hyderabad
            </Link>{' '}
            can completely transform your travel experience.
          </p>
        </div>
      </header>

      {/* 2. DEDICATED COVER IMAGE CONTAINER (max-h-[480px]) */}
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 -mt-6">
        <div className="rounded-2xl overflow-hidden shadow-sm border border-slate-200 bg-white">
          <Image
            src="/locationpages/shamirpet.webp"
            height={2000}
            width={2000}
            className="rounded-2xl object-cover w-full max-h-[480px]"
            alt="Shamirpet road trip and travel guide cover"
            priority
          />
        </div>
      </div>

      {/* 3. MAIN BODY */}
      <main className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-10 space-y-8">

        {/* SECTION: WHY SHAMIRPET IS PERFECT */}
        <section className="bg-white p-6 sm:p-8 rounded-2xl border border-slate-200 shadow-xs space-y-4">
          <h2 className="text-2xl font-bold text-slate-900">Why Shamirpet is the Perfect Weekend Getaway</h2>
          <p className="text-slate-600 leading-relaxed text-sm sm:text-base">
            Located around 25 km from Hyderabad, Shamirpet is known for its peaceful environment and lush surroundings. It’s an ideal destination for people who want a break without traveling too far.
          </p>

          <h3 className="text-base font-bold text-slate-800 pt-1">Key Highlights of Shamirpet:</h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            {highlights.map((highlight, idx) => (
              <div key={idx} className="flex items-center gap-2.5 p-3.5 bg-slate-50 rounded-xl border border-slate-200/80 text-sm font-medium text-slate-700">
                <CheckCircle2 className="w-4 h-4 text-slate-600 shrink-0" />
                <span>{highlight}</span>
              </div>
            ))}
          </div>

          <p className="text-slate-600 text-sm pt-2">
            Travelers increasingly prefer{' '}
            <Link href={targetUrl} className="font-bold text-slate-900">
              Self driving cars in Hyderabad
            </Link>{' '}
            to reach Shamirpet because it allows them to explore hidden spots along the way.
          </p>
        </section>

        {/* SECTION: WHY CHOOSE SELF DRIVING CARS */}
        <section className="space-y-4">
          <div>
            <h2 className="text-2xl font-bold text-slate-900">
              Why Choose Self Driving Cars in Hyderabad for Shamirpet Trip
            </h2>
            <p className="text-slate-600 text-sm mt-1">
              Elevate your weekend drive with personalized control and comfort.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {benefits.map((benefit, idx) => (
              <div key={idx} className="bg-white p-5 rounded-2xl border border-slate-200 shadow-xs flex flex-col justify-between">
                <div>
                  <h3 className="text-base font-bold text-slate-900 mb-2">{benefit.title}</h3>
                  <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">{benefit.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* SECTION: TOP PLACES TO VISIT IN SHAMIRPET */}
        <section className="space-y-4">
          <div>
            <h2 className="text-2xl font-bold text-slate-900">Top Places to Visit in Shamirpet</h2>
            <p className="text-slate-600 text-sm mt-1">Discover popular lakes, deer parks, and luxury retreats.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {attractions.map((place, idx) => {
              const Icon = place.icon;
              return (
                <div key={idx} className="bg-white p-5 rounded-2xl border border-slate-200 shadow-xs flex flex-col justify-between">
                  <div>
                    <div className="p-2.5 rounded-xl bg-slate-100 text-slate-700 w-fit mb-3">
                      <Icon className="w-5 h-5" />
                    </div>
                    <h3 className="text-base font-bold text-slate-900">{place.title}</h3>
                    <p className="text-xs font-semibold text-slate-500 mb-3">{place.badge}</p>

                    <ul className="space-y-1.5 text-xs sm:text-sm text-slate-600">
                      {place.points.map((pt, pIdx) => (
                        <li key={pIdx} className="flex items-start gap-1.5">
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

        {/* SECTION: BEST TIME & ROUTE GUIDE */}
        <section className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="bg-white p-6 rounded-2xl border border-slate-200 shadow-xs space-y-3">
            <div className="flex items-center gap-2 text-slate-900 font-bold text-sm">
              <Calendar className="w-4 h-4 text-slate-600" /> Best Time to Visit Shamirpet
            </div>
            <p className="text-xs text-slate-600">Timing can enhance your experience significantly.</p>
            <h4 className="text-xs font-bold uppercase text-slate-400 tracking-wider pt-1">Ideal Time Slots:</h4>
            <ul className="text-xs sm:text-sm text-slate-600 space-y-1.5">
              <li>• <strong>Morning:</strong> Fresh air, quiet paths, and fewer crowds</li>
              <li>• <strong>Evening:</strong> Calming sunset views near the lake</li>
              <li>• <strong>Winter Season:</strong> Pleasant weather for outdoor picnics</li>
            </ul>
            <p className="text-xs sm:text-sm text-slate-600 pt-2 border-t border-slate-100">
              With{' '}
              <Link href={targetUrl} className="font-bold text-slate-900">
                Self driving cars in Hyderabad
              </Link>
              , you can plan your visit without worrying about time restrictions.
            </p>
          </div>

          <div className="bg-white p-6 rounded-2xl border border-slate-200 shadow-xs space-y-3">
            <div className="flex items-center gap-2 text-slate-900 font-bold text-sm">
              <Compass className="w-4 h-4 text-slate-600" /> Route Guide: Hyderabad to Shamirpet
            </div>
            <p className="text-xs text-slate-600">The drive is smooth and scenic, making it perfect for a short road trip.</p>
            <h4 className="text-xs font-bold uppercase text-slate-400 tracking-wider pt-1">Route Details:</h4>
            <ul className="text-xs sm:text-sm text-slate-600 space-y-1">
              <li>• <strong>Distance:</strong> ~25 km</li>
              <li>• <strong>Travel Time:</strong> 45 minutes to 1 hour</li>
              <li>• <strong>Best Route:</strong> Via Rajiv Rahadari / Karimnagar Highway</li>
            </ul>
            <p className="text-xs sm:text-sm text-slate-600 pt-2 border-t border-slate-100">
              Choosing{' '}
              <Link href={targetUrl} className="font-bold text-slate-900">
                Self driving cars in Hyderabad
              </Link>{' '}
              ensures a hassle-free and enjoyable journey.
            </p>
          </div>
        </section>

        {/* SECTION: TRAVEL TIPS & MUST-TRY EXPERIENCES */}
        <section className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="bg-white p-6 rounded-2xl border border-slate-200 shadow-xs space-y-3">
            <h3 className="text-base font-bold text-slate-900">Travel Tips for Shamirpet Trip</h3>
            <p className="text-xs text-slate-600">Make your trip even better with these practical tips:</p>
            <ul className="text-xs sm:text-sm text-slate-600 space-y-1.5 pt-1">
              {travelTips.map((tip, idx) => (
                <li key={idx} className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-slate-600 shrink-0" />
                  <span>{tip}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="bg-white p-6 rounded-2xl border border-slate-200 shadow-xs space-y-3">
            <h3 className="text-base font-bold text-slate-900">Must-Try Experiences in Shamirpet</h3>
            <ul className="text-xs sm:text-sm text-slate-600 space-y-2 pt-1">
              {mustTryExperiences.map((exp, idx) => (
                <li key={idx} className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-slate-600 shrink-0" />
                  <span>{exp}</span>
                </li>
              ))}
            </ul>
            <p className="text-xs sm:text-sm text-slate-600 pt-2 border-t border-slate-100">
              With{' '}
              <Link href={targetUrl} className="font-bold text-slate-900">
                Premium self drive car rental services in Hyderabad
              </Link>
              , you can easily cover all these experiences in one trip.
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
            Shamirpet is a hidden gem near Hyderabad that offers the perfect escape into nature. From peaceful lakes to scenic drives, it’s a destination that refreshes your mind and soul.
          </p>
          <p className="text-slate-600 text-xs sm:text-sm max-w-2xl mx-auto leading-relaxed">
            To truly elevate your trip, choosing{' '}
            <Link href={targetUrl} className="font-bold text-slate-900">
              Self driving cars in Hyderabad
            </Link>{' '}
            is the smartest decision. It gives you the freedom to explore, the comfort to relax, and the flexibility to create unforgettable memories.
          </p>
          <div className="pt-2">
            <Link
              href={targetUrl}
              className="px-6 py-3 bg-slate-900 text-white font-bold rounded-xl shadow-xs hover:bg-slate-800 transition inline-flex items-center gap-2 text-sm"
            >
              Self driving cars in Hyderabad <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </section>

      </main>
    </div>
  );
}