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
  Building,
  ShoppingBag,
  TrendingUp
} from 'lucide-react';

// ============================================================================
// SEO METADATA
// ============================================================================
export const metadata = {
  title: 'Car Rental in Madhapur | Your Complete Guide to Hassle-Free Travel',
  description:
    'Discover hassle-free car rental in Madhapur Hyderabad. Explore self-drive options, zero deposit bookings, hourly, daily, and monthly plans for IT commutes and weekend trips.',
  keywords: [
    'Car rental in Madhapur',
    'Best car rental services in Madhapur',
    'Cheap self drive cars in Madhapur Hyderabad',
    'Madhapur Car Rental Hyderabad',
    'Self Drive Cars Madhapur',
    'HITEC City Car Rental'
  ],
  alternates: {
    canonical: 'https://www.longdrivecars.com/car-rental-madhapur'
  },
  openGraph: {
    title: 'Car Rental in Madhapur – Your Complete Guide to Hassle-Free Travel',
    description:
      'Rent a self-drive car in Madhapur with zero deposit, unlimited kilometers, and complete schedule freedom in Hyderabad’s IT hub.',
    url: 'https://www.longdrivecars.com',
    siteName: 'Long Drive Cars',
    images: [
      {
        url: '/locationpages/shamshabad.webp',
        width: 1200,
        height: 630,
        alt: 'Car Rental in Madhapur Hyderabad'
      }
    ],
    locale: 'en_IN',
    type: 'article'
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Car Rental in Madhapur | Travel Guide',
    description:
      'Explore Madhapur, HITEC City, and Hyderabad attractions with affordable self-drive car rentals.',
    images: ['/locationpages/shamshabad.webp']
  }
};

// ============================================================================
// PAGE COMPONENT
// ============================================================================
export default function MadhapurCarRentalPage() {
  const targetUrl = 'https://www.longdrivecars.com';

  const reasons = [
    { title: 'Complete Freedom', desc: 'Travel at your own pace without depending on drivers' },
    { title: 'Cost-Effective', desc: 'Affordable compared to daily cab bookings' },
    { title: 'Flexible Plans', desc: 'Hourly, daily, and monthly rental options' },
    { title: 'Perfect for All Needs', desc: 'Ideal for office commutes, weekend trips, or errands' }
  ];

  const rentalServices = [
    {
      icon: Car,
      title: '1. Self-Drive Car Rentals',
      subtitle: 'Most preferred choice today',
      points: ['Privacy and independence', 'No driver charges', 'Flexible travel schedule'],
      extraNote: (
        <>
          This makes{' '}
          <Link href={targetUrl} className="font-bold text-slate-900">
            Best car rental services in Madhapur
          </Link>{' '}
          ideal for professionals and young travelers.
        </>
      )
    },
    {
      icon: Clock,
      title: '2. Daily and Hourly Rentals',
      subtitle: 'Perfect for short duration requirements',
      points: [
        'Pay only for the time you use',
        'Great for meetings, shopping, or city travel',
        'Budget-friendly plans'
      ]
    },
    {
      icon: Calendar,
      title: '3. Monthly Car Rentals',
      subtitle: 'Great savings for long-term users',
      points: [
        'Lower cost per day',
        'Best for corporate employees',
        'No need for vehicle ownership'
      ],
      extraNote: (
        <>
          Choosing a long-term{' '}
          <Link href={targetUrl} className="font-bold text-slate-900">
            Best car rental services in Madhapur
          </Link>{' '}
          can significantly reduce your commuting costs.
        </>
      )
    }
  ];

  const attractions = [
    { name: 'HITEC City', desc: 'The heart of Hyderabad’s IT industry and vibrant nightlife' },
    { name: 'Durgam Cheruvu', desc: 'Perfect for evening drives, waterfront relaxation, and cable bridge views' },
    { name: 'Inorbit Mall', desc: 'Premier shopping, culinary food courts, and entertainment hub' },
    { name: 'Shilparamam', desc: 'Cultural arts, traditional crafts village, and live folk performances' }
  ];

  const keyFeatures = [
    { title: 'Unlimited Kilometers', desc: 'Travel without distance restrictions and per-km worry' },
    { title: 'Zero Deposit Options', desc: 'Budget-friendly booking with no locked security amounts' },
    { title: '24/7 Roadside Assistance', desc: 'Continuous round-the-clock safety and emergency support' },
    { title: 'Transparent Pricing', desc: 'No hidden charges, surge rates, or surprise fees' },
    { title: 'Easy Booking Process', desc: 'Quick digital reservations via mobile apps and web' }
  ];

  const bookingSteps = [
    'Choose your preferred car type',
    'Select rental duration (hourly/daily/monthly)',
    'Upload required documents',
    'Make a small advance payment',
    'Confirm your booking'
  ];

  const dealTips = [
    { title: 'Book in Advance', desc: 'Prices are lower when reserved early' },
    { title: 'Compare Plans', desc: 'Check multiple hourly, daily, and weekly rental packages' },
    { title: 'Choose the Right Car', desc: 'Select based on your usage, group size, and parking needs' },
    { title: 'Avoid Peak Hours', desc: 'Weekend and holiday rates may be slightly higher' },
    { title: 'Check Reviews', desc: 'Always go with trusted and verified providers' }
  ];

  const faqs = [
    {
      q: '1. What documents are required for car rental in Madhapur?',
      a: 'You need a valid driving license, government-issued ID proof, and sometimes a refundable deposit depending on the provider.'
    },
    {
      q: '2. Is car rental in Madhapur available without deposit?',
      a: 'Yes, many services now offer zero deposit options, making rentals more accessible.'
    },
    {
      q: '3. Can I book a car rental in Madhapur for long-term use?',
      a: 'Absolutely. Monthly rental plans are available and are cost-effective for long-term users.'
    },
    {
      q: '4. Are there unlimited kilometer options?',
      a: 'Yes, most providers offer unlimited kilometer plans for stress-free travel.'
    },
    {
      q: '5. Is self-drive car rental safe in Madhapur?',
      a: 'Yes, with proper documentation and verified providers, it is completely safe and widely used.'
    }
  ];

  return (
    <div className="min-h-screen bg-slate-50 text-slate-900 antialiased pt-24 lg:pt-0">
      
      {/* 1. HEADER SECTION */}
      <header className="bg-white py-12 md:py-16 px-4 sm:px-6 lg:px-8 border-b border-slate-200">
        <div className="max-w-4xl mx-auto text-center space-y-4">
          <span className="inline-block px-3 py-1 text-xs font-semibold uppercase tracking-wider bg-slate-100 text-slate-700 rounded-full">
            Travel &amp; Rental Guide
          </span>

          <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight text-slate-900 leading-tight">
            Car Rental in Madhapur – Your Complete Guide to Hassle-Free Travel
          </h1>

          <p className="text-slate-600 text-sm sm:text-base md:text-lg max-w-3xl mx-auto leading-relaxed">
            Madhapur, the bustling IT hub of Hyderabad, is known for its tech parks, vibrant nightlife, and fast-paced lifestyle. Whether you're a working professional, a tourist, or someone exploring the city, choosing a{' '}
            <Link href={targetUrl} className="font-bold text-slate-900">
              Car rental in Madhapur
            </Link>{' '}
            is the smartest way to travel with flexibility and comfort.
          </p>

          <p className="text-xs sm:text-sm text-slate-500 italic">
            In this guide, we’ll walk you through everything you need to know about renting a car in Madhapur, along with expert tips, benefits, and FAQs to help you make the right choice.
          </p>
        </div>
      </header>

      {/* 2. DEDICATED COVER IMAGE CONTAINER (max-h-[480px]) */}
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 -mt-6">
        <div className="rounded-2xl overflow-hidden shadow-sm border border-slate-200 bg-white">
          <Image
            src="/locationpages/madhapur.webp"
            height={2000}
            width={2000}
            className="rounded-2xl object-cover w-full max-h-[480px]"
            alt="Car Rental in Madhapur Hyderabad cover guide"
            priority
          />
        </div>
      </div>

      {/* 3. MAIN BODY */}
      <main className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-10 space-y-8">

        {/* SECTION: WHY CHOOSE */}
        <section className="bg-white p-6 sm:p-8 rounded-2xl border border-slate-200 shadow-xs space-y-4">
          <h2 className="text-2xl font-bold text-slate-900">Why Choose Car Rental in Madhapur?</h2>
          <p className="text-slate-600 leading-relaxed text-sm sm:text-base">
            Here’s why renting a car is a great choice:
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            {reasons.map((reason, idx) => (
              <div key={idx} className="p-3.5 bg-slate-50 rounded-xl border border-slate-200/80">
                <div className="flex items-center gap-2 text-slate-900 font-semibold text-sm">
                  <CheckCircle2 className="w-4 h-4 text-slate-600 shrink-0" />
                  <span>{reason.title}</span>
                </div>
                <p className="text-xs text-slate-600 mt-1 pl-6">{reason.desc}</p>
              </div>
            ))}
          </div>

          <p className="text-slate-600 text-sm pt-2">
            With the rise of self-drive services,{' '}
            <Link href={targetUrl} className="font-bold text-slate-900">
              Car rental in Madhapur
            </Link>{' '}
            offers a modern, stress-free way to explore Hyderabad.
          </p>
        </section>

        {/* SECTION: TYPES OF CAR RENTAL SERVICES */}
        <section className="space-y-4">
          <div>
            <h2 className="text-2xl font-bold text-slate-900">Types of Car Rental Services Available in Madhapur</h2>
            <p className="text-slate-600 text-sm mt-1">Select the ideal rental format for your personal or business schedule.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {rentalServices.map((service, idx) => {
              const Icon = service.icon;
              return (
                <div key={idx} className="bg-white p-5 rounded-2xl border border-slate-200 shadow-xs flex flex-col justify-between">
                  <div>
                    <div className="p-2.5 rounded-xl bg-slate-100 text-slate-700 w-fit mb-3">
                      <Icon className="w-5 h-5" />
                    </div>
                    <h3 className="text-base font-bold text-slate-900">{service.title}</h3>
                    <p className="text-xs text-slate-500 mb-3">{service.subtitle}</p>

                    <ul className="space-y-1.5 text-xs sm:text-sm text-slate-600">
                      {service.points.map((pt, pIdx) => (
                        <li key={pIdx} className="flex items-start gap-1.5">
                          <span className="w-1.5 h-1.5 rounded-full bg-slate-400 mt-2 shrink-0" />
                          <span>{pt}</span>
                        </li>
                      ))}
                    </ul>

                    {service.extraNote && (
                      <div className="mt-4 pt-3 border-t border-slate-100 text-xs sm:text-sm text-slate-600">
                        {service.extraNote}
                      </div>
                    )}
                  </div>
                </div>
              );
            })}
          </div>
        </section>

        {/* SECTION: BEST PLACES TO VISIT */}
        <section className="bg-white p-6 sm:p-8 rounded-2xl border border-slate-200 shadow-xs space-y-4">
          <div>
            <h2 className="text-2xl font-bold text-slate-900">Best Places to Visit Using Car Rental in Madhapur</h2>
            <p className="text-slate-600 text-sm mt-1">Top Nearby Attractions:</p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            {attractions.map((place, idx) => (
              <div key={idx} className="p-3.5 bg-slate-50 rounded-xl border border-slate-200/80">
                <span className="font-bold text-slate-900 text-sm">{place.name}: </span>
                <span className="text-xs sm:text-sm text-slate-600">{place.desc}</span>
              </div>
            ))}
          </div>

          <p className="text-xs sm:text-sm text-slate-600 pt-1">
            With your own vehicle, you can visit these places without worrying about cab availability.
          </p>
        </section>

        {/* SECTION: KEY FEATURES */}
        <section className="space-y-4">
          <div>
            <h2 className="text-2xl font-bold text-slate-900">Key Features to Look for in Car Rental Services</h2>
            <p className="text-slate-600 text-sm mt-1">Must-Have Features that ensure a smooth and hassle-free experience:</p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
            {keyFeatures.map((feat, idx) => (
              <div key={idx} className="bg-white p-4 rounded-xl border border-slate-200 shadow-xs">
                <div className="flex items-center gap-2 font-bold text-slate-900 text-sm mb-1">
                  <ShieldCheck className="w-4 h-4 text-slate-600 shrink-0" />
                  <span>{feat.title}</span>
                </div>
                <p className="text-xs text-slate-600 pl-6">{feat.desc}</p>
              </div>
            ))}
          </div>
        </section>

        {/* SECTION: HOW TO BOOK & TIPS */}
        <section className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="bg-white p-6 rounded-2xl border border-slate-200 shadow-xs space-y-3">
            <h3 className="text-lg font-bold text-slate-900">How to Book a Car Rental in Madhapur</h3>
            <ol className="text-xs sm:text-sm text-slate-600 space-y-2 list-decimal pl-4">
              {bookingSteps.map((step, idx) => (
                <li key={idx}>{step}</li>
              ))}
            </ol>
            <p className="text-xs text-slate-500 pt-1">
              Most platforms now offer mobile apps, making it even easier to book your ride instantly.
            </p>
          </div>

          <div className="bg-white p-6 rounded-2xl border border-slate-200 shadow-xs space-y-3">
            <h3 className="text-lg font-bold text-slate-900">Tips to Get the Best Car Rental Deals</h3>
            <ul className="text-xs sm:text-sm text-slate-600 space-y-1.5">
              {dealTips.map((tip, idx) => (
                <li key={idx}>
                  <strong>{tip.title}:</strong> {tip.desc}
                </li>
              ))}
            </ul>
            <p className="text-xs text-slate-500 pt-1">
              These strategies can help you save money while enjoying premium service.
            </p>
          </div>
        </section>

        {/* SECTION: WHY BETTER THAN CABS */}
        <section className="bg-white p-6 sm:p-8 rounded-2xl border border-slate-200 shadow-xs space-y-4">
          <div>
            <h2 className="text-2xl font-bold text-slate-900">Why Car Rental in Madhapur is Better Than Cabs</h2>
            <p className="text-slate-600 text-sm mt-1">
              Many people still rely on ride-hailing apps, but{' '}
              <Link href={targetUrl} className="font-bold text-slate-900">
                Cheap self drive cars in Madhapur Hyderabad
              </Link>{' '}
              offers clear advantages:
            </p>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
            {['No surge pricing', 'No waiting time', 'More privacy', 'Better cost control'].map((item, idx) => (
              <div key={idx} className="p-3 bg-slate-50 rounded-xl border border-slate-200/80 text-center">
                <p className="text-xs sm:text-sm font-semibold text-slate-800">{item}</p>
              </div>
            ))}
          </div>

          <p className="text-xs sm:text-sm text-slate-600 pt-1">
            For frequent travelers, renting a car is a smarter and more economical choice.
          </p>
        </section>

        {/* SECTION: FAQS */}
        <section className="bg-white p-6 sm:p-8 rounded-2xl border border-slate-200 shadow-xs space-y-4">
          <h2 className="text-2xl font-bold text-slate-900">FAQs – Car Rental in Madhapur</h2>

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
            Choosing a{' '}
            <Link href={targetUrl} className="font-bold text-slate-900">
              Car rental in Madhapur
            </Link>{' '}
            is the perfect solution for anyone looking for convenience, flexibility, and affordability. Whether you're commuting daily, planning a weekend getaway, or exploring Hyderabad, renting a car gives you complete control over your journey.
          </p>
          <p className="text-slate-600 text-xs sm:text-sm max-w-2xl mx-auto leading-relaxed font-medium">
            Make the smart choice today and enjoy a hassle-free driving experience.
          </p>
          <div className="pt-2">
            <Link
              href={targetUrl}
              className="px-6 py-3 bg-slate-900 text-white font-bold rounded-xl shadow-xs hover:bg-slate-800 transition inline-flex items-center gap-2 text-sm"
            >
              Car rental in Madhapur <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </section>
      </main>
    </div>
  );
}