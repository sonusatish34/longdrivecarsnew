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
  ShoppingBag,
  Trees,
  Trophy,
  Waves,
  ArrowRight,
  ShieldCheck
} from 'lucide-react';

// ============================================================================
// SEO METADATA
// ============================================================================
export const metadata = {
  title: 'Gachibowli Travel & Lifestyle Guide | Book Self Drive Car in Gachibowli',
  description:
    'Discover the ultimate Gachibowli travel and lifestyle guide. Explore top attractions, cafes, and nearby weekend getaways by booking an affordable zero-deposit self-drive car in Gachibowli.',
  keywords: [
    'Book Self Drive Car in Gachibowli',
    'Affordable Car Rental Gachibowli',
    'Zero Deposit Car Rental Gachibowli',
    'Gachibowli Travel Guide',
    'Hyderabad Car Rentals',
    'Self Drive Cars Hyderabad'
  ],
  alternates: {
    canonical: 'https://www.longdrivecars.com/gachibowli-travel-guide'
  },
  openGraph: {
    title: 'Gachibowli Travel & Lifestyle Guide | Self Drive Car Rentals',
    description:
      'Plan your trip to Gachibowli with ease. Find top places to visit, dining spots, and travel tips with flexible self-drive car rentals.',
    url: 'https://www.longdrivecars.com',
    siteName: 'Long Drive Cars',
    images: [
      {
        url: '/locationpages/shamshabad.webp',
        width: 1200,
        height: 630,
        alt: 'Gachibowli Travel and Lifestyle Guide'
      }
    ],
    locale: 'en_IN',
    type: 'article'
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Gachibowli Travel & Lifestyle Guide | Book Self Drive Car',
    description:
      'Explore Gachibowli, top eateries, and weekend getaways with zero-deposit self-drive car rentals in Hyderabad.',
    images: ['/locationpages/shamshabad.webp']
  }
};

// ============================================================================
// PAGE COMPONENT
// ============================================================================
export default function GachibowliGuidePage() {
  const targetUrl = 'https://www.longdrivecars.com';

  const topPlaces = [
    {
      icon: Trophy,
      title: '1. Gachibowli Stadium – For Sports Lovers',
      badge: 'Sports Hub',
      whyVisit: ['International-level sports facility', 'Training and events', 'Great for fitness enthusiasts']
    },
    {
      icon: Trees,
      title: '2. Botanical Garden – Nature in the City',
      badge: 'Nature Retreat',
      whyVisit: ['Morning walks', 'Bird watching', 'Photography'],
      extraNote: (
        <>
          Traveling here is easier with{' '}
          <Link href={targetUrl} className="font-bold text-slate-900">
            Affordable Car Rental Gachibowli
          </Link>{' '}
          for flexible timings.
        </>
      )
    },
    {
      icon: ShoppingBag,
      title: '3. Inorbit Mall – Shopping & Entertainment',
      badge: 'Retail & Dining',
      whyVisit: ['Branded stores', 'Food courts', 'Multiplex cinema']
    },
    {
      icon: Waves,
      title: '4. Durgam Cheruvu – Scenic Lake View',
      badge: 'Secret Lake',
      whyVisit: ['Sunset views', 'Boating', 'Hanging bridge']
    }
  ];

  const getaways = [
    { name: '1. Ananthagiri Hills', tag: 'Nature & Trekking', bullets: ['Ideal for nature lovers', 'Trekking and camping'] },
    { name: '2. Ramoji Film City', tag: 'Family Entertainment', bullets: ['Family-friendly destination', 'Entertainment and tours'] },
    { name: '3. Osman Sagar Lake', tag: 'Scenic Water View', bullets: ['Peaceful picnic spot', 'Scenic views'] }
  ];

  const faqs = [
    { q: '1. Is it safe to book a self-driving Car in Gachibowli?', a: 'Yes, self-drive car rentals are safe and widely used, provided you follow traffic rules and choose a reliable service.' },
    { q: '2. What documents are required to rent a self-drive car?', a: 'You typically need a valid driving license and ID proof.' },
    { q: '3. Can I use the car for outstation trips?', a: 'Yes, most providers allow outstation travel.' },
    { q: '4. Which car is best for city travel?', a: 'Hatchbacks are ideal for city use, while SUVs are better for long trips.' },
    { q: '5. Are self-drive cars affordable in Gachibowli?', a: 'Yes, they are cost-effective compared to taxis, especially for longer durations.' }
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
            Gachibowli Travel &amp; Lifestyle Guide: Why You Should{' '}
            <Link href={targetUrl} className="font-bold text-slate-900">
              Book Self Drive Car in Gachibowli
            </Link>
          </h1>

          <p className="text-slate-600 text-sm sm:text-base md:text-lg max-w-3xl mx-auto leading-relaxed">
            Gachibowli, one of Hyderabad’s fastest-growing hubs, is more than just an IT corridor. It’s a vibrant blend of corporate life, modern lifestyle, entertainment zones, and nearby travel spots. Whether you’re a working professional, traveler, or weekend explorer, the smartest way to experience this area is to{' '}
            <Link href={targetUrl} className="font-bold text-slate-900">
              Book Self Drive Car in Gachibowli
            </Link>{' '}
            and explore at your own pace.
          </p>

          <p className="text-xs sm:text-sm text-slate-500 italic">
            In this guide, we’ll cover everything—from places to visit and food spots to travel tips.
          </p>
        </div>
      </header>

      {/* 2. COVER IMAGE */}
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 -mt-6">
        <div className="rounded-2xl overflow-hidden shadow-sm border border-slate-200 bg-white">
          <Image
            src="/locationpages/gachibowli.webp"
            height={2000}
            width={2000}
            className="rounded-2xl object-cover w-full max-h-[480px]"
            alt="Gachibowli travel and lifestyle guide cover image"
            priority
          />
        </div>
      </div>

      {/* 3. MAIN BODY */}
      <main className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-10 space-y-8">

        {/* SECTION: WHY GACHIBOWLI */}
        <section className="bg-white p-6 sm:p-8 rounded-2xl border border-slate-200 shadow-xs space-y-4">
          <h2 className="text-2xl font-bold text-slate-900">Why Gachibowli is a Must-Visit in Hyderabad</h2>
          <p className="text-slate-600 leading-relaxed text-sm sm:text-base">
            Gachibowli is known for its dynamic mix of technology, culture, and leisure. It’s home to major IT companies, stadiums, malls, and easy access to weekend getaways.
          </p>

          <h3 className="text-base font-bold text-slate-800 pt-1">Key Highlights of Gachibowli</h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            {[
              'Major IT and business hub',
              'Premium restaurants and cafes',
              'Close to tourist attractions',
              'Well-connected roads and highways'
            ].map((highlight, idx) => (
              <div key={idx} className="flex items-center gap-2.5 p-3.5 bg-slate-50 rounded-xl border border-slate-200/80 text-sm font-medium text-slate-700">
                <CheckCircle2 className="w-4 h-4 text-slate-600 shrink-0" />
                <span>{highlight}</span>
              </div>
            ))}
          </div>

          <p className="text-slate-600 text-sm pt-2">
            To make the most of your visit, it’s best to{' '}
            <Link href={targetUrl} className="font-bold text-slate-900">
              Book Self Drive Car in Gachibowli
            </Link>{' '}
            and move around without depending on cabs or public transport.
          </p>
        </section>

        {/* SECTION: TOP PLACES TO VISIT */}
        <section className="space-y-4">
          <div>
            <h2 className="text-2xl font-bold text-slate-900">Top Places to Visit in Gachibowli</h2>
            <p className="text-slate-600 text-sm mt-1">Discover prominent hubs and recreation spots.</p>
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
                      {idx === 1 ? 'Things to Do' : idx === 2 ? 'Highlights' : 'Why Visit?'}
                    </h4>
                    <ul className="space-y-1.5 text-xs sm:text-sm text-slate-600">
                      {place.whyVisit.map((item, pIdx) => (
                        <li key={pIdx} className="flex items-start gap-2">
                          <span className="w-1.5 h-1.5 rounded-full bg-slate-400 mt-2 shrink-0" />
                          <span>{item}</span>
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
          <h2 className="text-2xl font-bold text-slate-900">Best Cafes &amp; Restaurants in Gachibowli</h2>
          <p className="text-slate-600 text-sm sm:text-base">
            Gachibowli is a food lover’s paradise with diverse cuisines.
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-1">
            <div className="p-5 bg-slate-50 rounded-xl border border-slate-200/80">
              <h4 className="font-bold text-slate-900 text-sm mb-2">Top Picks</h4>
              <ul className="text-xs sm:text-sm text-slate-600 space-y-1.5">
                <li>• Multi-cuisine fine dining restaurants</li>
                <li>• Trendy cafes and coffee shops</li>
                <li>• Street food joints</li>
              </ul>
            </div>
            <div className="p-5 bg-slate-50 rounded-xl border border-slate-200/80">
              <h4 className="font-bold text-slate-900 text-sm mb-2">Must-Try Experiences</h4>
              <ul className="text-xs sm:text-sm text-slate-600 space-y-1.5">
                <li>• Rooftop dining</li>
                <li>• Late-night cafes</li>
                <li>• Authentic Hyderabadi cuisine</li>
              </ul>
            </div>
          </div>
        </section>

        {/* SECTION: WHY BOOK SELF DRIVE */}
        <section className="bg-slate-100/70 p-6 sm:p-8 rounded-2xl border border-slate-200 space-y-5">
          <div>
            <h2 className="text-2xl font-bold text-slate-900">Why Book Self-Driving Cars in Gachibowli?</h2>
            <p className="text-slate-600 text-sm mt-1">
              Transportation can make or break your experience. That’s why self-drive cars are gaining popularity.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div className="bg-white p-5 rounded-xl border border-slate-200 shadow-xs">
              <h3 className="font-bold text-slate-900 text-sm mb-2 flex items-center gap-2">
                <Car className="w-4 h-4 text-slate-600" /> Benefits of Self Drive Cars
              </h3>
              <ul className="text-xs sm:text-sm text-slate-600 space-y-1.5">
                <li>• Freedom to travel anytime</li>
                <li>• No dependency on drivers</li>
                <li>• Privacy and comfort</li>
                <li>• Cost-effective for daily use</li>
              </ul>
            </div>

            <div className="bg-white p-5 rounded-xl border border-slate-200 shadow-xs">
              <h3 className="font-bold text-slate-900 text-sm mb-2 flex items-center gap-2">
                <ShieldCheck className="w-4 h-4 text-slate-600" />
                Advantages When You{' '}
                <Link href={targetUrl} className="font-bold text-slate-900">
                  Book Self Drive Car in Gachibowli
                </Link>
              </h3>
              <ul className="text-xs sm:text-sm text-slate-600 space-y-1.5">
                <li>• Easy access to IT hubs and offices</li>
                <li>• Perfect for daily commute or weekend trips</li>
                <li>• Wide range of cars available</li>
                <li>• Affordable pricing options</li>
              </ul>
            </div>
          </div>
        </section>

        {/* SECTION: NEARBY GETAWAYS */}
        <section className="space-y-4">
          <h2 className="text-2xl font-bold text-slate-900">Nearby Getaways from Gachibowli</h2>
          
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
            Planning these trips becomes effortless with{' '}
            <Link href={targetUrl} className="font-bold text-slate-900">
              Affordable Car Rental Gachibowli
            </Link>{' '}
            and enjoy flexible travel.
          </div>
        </section>

        {/* SECTION: BEST TIME & TRAVEL TIPS */}
        <section className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="bg-white p-6 rounded-2xl border border-slate-200 shadow-xs space-y-3">
            <div className="flex items-center gap-2 text-slate-900 font-bold text-sm">
              <Calendar className="w-4 h-4 text-slate-600" /> Best Time to Visit Gachibowli
            </div>
            <h4 className="text-xs font-bold uppercase text-slate-400 tracking-wider">Seasonal Guide</h4>
            <ul className="text-xs sm:text-sm text-slate-600 space-y-2">
              <li className="p-2.5 bg-slate-50 rounded-lg"><strong>October to February:</strong> Pleasant weather</li>
              <li className="p-2.5 bg-slate-50 rounded-lg"><strong>March to June:</strong> Warm but manageable</li>
              <li className="p-2.5 bg-slate-50 rounded-lg"><strong>July to September:</strong> Refreshing monsoon vibes</li>
            </ul>
            <p className="text-xs sm:text-sm text-slate-600 pt-2 border-t border-slate-100">
              No matter the season, it’s convenient with{' '}
              <Link href={targetUrl} className="font-bold text-slate-900">
                Zero Deposit Car Rental Gachibowli
              </Link>{' '}
              for comfortable travel.
            </p>
          </div>

          <div className="bg-white p-6 rounded-2xl border border-slate-200 shadow-xs space-y-3">
            <div className="flex items-center gap-2 text-slate-900 font-bold text-sm">
              <Compass className="w-4 h-4 text-slate-600" /> Travel Tips for Exploring Gachibowli
            </div>
            
            <h4 className="text-xs font-bold uppercase text-slate-400 tracking-wider">Smart Travel Tips</h4>
            <ul className="text-xs sm:text-sm text-slate-600 space-y-1">
              <li>• Avoid peak traffic hours</li>
              <li>• Plan routes in advance</li>
              <li>• Keep digital maps handy</li>
            </ul>

            <h4 className="text-xs font-bold uppercase text-slate-400 tracking-wider pt-2">Essentials to Carry</h4>
            <ul className="text-xs sm:text-sm text-slate-600 space-y-1">
              <li>• Water bottle</li>
              <li>• Phone charger</li>
              <li>• ID proof for rentals</li>
            </ul>
          </div>
        </section>

        {/* SECTION: FAQS (ACCORDION WITH HTML DETAILS FOR NATIVE SSR / SEO) */}
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
            Gachibowli is a perfect mix of work, lifestyle, and travel experiences. From modern infrastructure to scenic spots and nearby getaways, it offers something for everyone.
          </p>
          <p className="text-slate-600 text-xs sm:text-sm max-w-2xl mx-auto leading-relaxed">
            To truly explore everything this vibrant area has to offer, the best choice is to{' '}
            <Link href={targetUrl} className="font-bold text-slate-900">
              Book Self Drive Car in Gachibowli
            </Link>
            . It gives you the flexibility, comfort, and freedom to travel on your own terms.
          </p>
          <p className="text-slate-600 text-xs sm:text-sm max-w-2xl mx-auto leading-relaxed font-medium">
            Whether it’s a quick city ride or a weekend escape, take control of your journey and experience Gachibowli like never before.
          </p>
          <div className="pt-2">
            <Link
              href={targetUrl}
              className="px-6 py-3 bg-slate-900 text-white font-bold rounded-xl shadow-xs hover:bg-slate-800 transition inline-flex items-center gap-2 text-sm"
            >
              Book Self Drive Car in Gachibowli <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </section>

      </main>
    </div>
  );
}