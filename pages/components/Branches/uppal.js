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
  TrendingUp,
  Tag,
  DollarSign
} from 'lucide-react';
// ============================================================================
// SEO METADATA
// ============================================================================
export const metadata = {
  title: 'Self Drive Car Rentals in Uppal | The Smart Way to Travel in Hyderabad',
  description:
    'Complete guide to self drive car rentals in Uppal Hyderabad. Discover hourly, daily, and monthly rental options, pricing, and tips for budget self-drive car rentals.',
  keywords: [
    'Self Drive Car rentals in Uppal',
    'Best Self Drive Car Rentals in Uppal',
    'Budget self drive car Rental services in Uppal Hyderabad',
    'Uppal Car Rental Hyderabad',
    'Self Drive Cars Uppal'
  ],
  alternates: {
    canonical: 'https://www.longdrivecars.com/self-drive-car-rentals-uppal'
  },
  openGraph: {
    title: 'Self Drive Car Rentals in Uppal: The Smart Way to Travel in Hyderabad',
    description:
      'Rent self-drive cars in Uppal with complete freedom, flexible pricing, and verified fleets for city commutes and outstation trips.',
    url: 'https://www.longdrivecars.com',
    siteName: 'Long Drive Cars',
    images: [
      {
        url: '/locationpages/shamshabad.webp',
        width: 1200,
        height: 630,
        alt: 'Self Drive Car Rentals in Uppal Hyderabad'
      }
    ],
    locale: 'en_IN',
    type: 'article'
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Self Drive Car Rentals in Uppal | Travel Guide',
    description:
      'Explore Uppal and nearby Hyderabad destinations with affordable self-drive car rentals.',
    images: ['/locationpages/shamshabad.webp']
  }
};

// ============================================================================
// PAGE COMPONENT
// ============================================================================
export default function UppalCarRentalsGuidePage() {
  const targetUrl = 'https://www.longdrivecars.com';

  const benefits = [
    { title: 'Complete Independence', desc: 'Drive at your own pace without relying on drivers or schedules.' },
    { title: 'Privacy & Comfort', desc: 'Ideal for couples, families, and solo travelers.' },
    { title: 'Cost-Effective', desc: 'No driver charges mean better savings.' },
    { title: 'Wide Range of Vehicles', desc: 'Choose from hatchbacks, sedans, SUVs, and luxury cars.' }
  ];

  const rentalTypes = [
    {
      title: '1. Hourly Rentals',
      subtitle: 'Perfect for short trips',
      points: ['Local errands', 'Meetings', 'Shopping']
    },
    {
      title: '2. Daily Rentals',
      subtitle: 'Best for full-day travel',
      points: ['Family outings', 'Day trips', 'Personal use']
    },
    {
      title: '3. Weekly & Monthly Rentals',
      subtitle: 'Ideal for long-term travel',
      points: ['Long-term travel', 'Temporary vehicle replacement', 'Business requirements']
    }
  ];

  const popularUses = [
    'Airport pickups and drop-offs',
    'Visiting nearby attractions like Yadadri Temple',
    'Weekend drives to scenic spots',
    'Attending events or weddings'
  ];

  const features = [
    'GPS-enabled vehicles',
    'Well-maintained cars',
    'Flexible fuel policy',
    'Insurance coverage',
    'Roadside assistance'
  ];

  const advantages = [
    'No waiting time',
    'Better hygiene and safety',
    'Door-to-door convenience',
    'Freedom to explore hidden places'
  ];

  const moneySavingTips = [
    { title: 'Book in Advance', desc: 'Avoid surge pricing during busy periods' },
    { title: 'Choose Off-Peak Days', desc: 'Lower demand means lower rental rates' },
    { title: 'Use Promo Codes', desc: 'Look for online discounts and coupon offers' },
    { title: 'Select the Right Car', desc: 'Don’t overpay for unnecessary features' }
  ];

  const faqs = [
    {
      q: '1. What documents are required for self drive car rentals in Uppal?',
      a: 'You need a valid driving license, government-issued ID proof, and a refundable security deposit.'
    },
    {
      q: '2. Are self drive car rentals in Uppal safe?',
      a: 'Yes, most providers offer insured vehicles, regular maintenance, and roadside assistance.'
    },
    {
      q: '3. Can I book a self drive car in Uppal for outstation trips?',
      a: 'Yes, many services allow outstation travel with flexible packages.'
    },
    {
      q: '4. What is the minimum age to rent a self drive car?',
      a: 'Typically, you must be at least 21 years old with a valid driving license.'
    },
    {
      q: '5. Are there luxury self drive cars available in Uppal?',
      a: 'Yes, premium and luxury vehicles are available depending on the provider.'
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

          <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight text-slate-900 md:leading-normal">
            Self Drive Car Rentals in Uppal: The Smart Way to Travel in Hyderabad
          </h1>

          <p className="text-slate-600 text-sm sm:text-base md:text-lg max-w-3xl mx-auto leading-relaxed">
            If you value freedom, flexibility, and comfort while traveling,{' '}
            <Link href={targetUrl} className="font-bold text-slate-900">
              Self Drive Car rentals in Uppal
            </Link>{' '}
            are quickly becoming the go-to choice for residents and visitors alike. Whether you're heading to work, planning a weekend getaway, or exploring the vibrant streets of Hyderabad, renting a self-drive car gives you complete control over your journey.
          </p>
        </div>
      </header>

      {/* 2. DEDICATED COVER IMAGE CONTAINER (max-h-[480px]) */}
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 -mt-6">
        <div className="rounded-2xl overflow-hidden shadow-sm border border-slate-200 bg-white">
          <Image
            src="/locationpages/uppal.webp"
            height={2000}
            width={2000}
            className="rounded-2xl object-cover w-full max-h-[480px]"
            alt="Self Drive Car Rentals in Uppal Hyderabad cover guide"
            priority
          />
        </div>
      </div>

      {/* 3. MAIN BODY */}
      <main className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-10 space-y-8">

        {/* SECTION: WHY CHOOSE */}
        <section className="bg-white p-6 sm:p-8 rounded-2xl border border-slate-200 shadow-xs space-y-4">
          <h2 className="text-2xl font-bold text-slate-900">Why Choose Self Drive Car Rentals in Uppal?</h2>
          <p className="text-slate-600 leading-relaxed text-sm sm:text-base">
            Uppal is one of the fastest-growing residential and commercial areas in Hyderabad. With landmarks like Rajiv Gandhi International Cricket Stadium and excellent connectivity, travel demand is high. That’s where{' '}
            <Link href={targetUrl} className="font-bold text-slate-900">
              Self Drive Car rentals in Uppal
            </Link>{' '}
            come in.
          </p>

          <h3 className="text-base font-bold text-slate-800 pt-1">Key Benefits</h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            {benefits.map((benefit, idx) => (
              <div key={idx} className="p-3.5 bg-slate-50 rounded-xl border border-slate-200/80">
                <div className="flex items-center gap-2 text-slate-900 font-semibold text-sm">
                  <CheckCircle2 className="w-4 h-4 text-slate-600 shrink-0" />
                  <span>{benefit.title}</span>
                </div>
                <p className="text-xs text-slate-600 mt-1 pl-6">{benefit.desc}</p>
              </div>
            ))}
          </div>
        </section>

        {/* SECTION: TYPES OF RENTAL OPTIONS */}
        <section className="space-y-4">
          <div>
            <h2 className="text-2xl font-bold text-slate-900">Types of Self Drive Car Rental Options in Uppal</h2>
            <p className="text-slate-600 text-sm mt-1">
              When exploring{' '}
              <Link href={targetUrl} className="font-bold text-slate-900">
                Best Self Drive Car Rentals in Uppal
              </Link>
              , you’ll find multiple options tailored to different needs:
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {rentalTypes.map((type, idx) => (
              <div key={idx} className="bg-white p-5 rounded-2xl border border-slate-200 shadow-xs flex flex-col justify-between">
                <div>
                  <h3 className="text-base font-bold text-slate-900">{type.title}</h3>
                  <p className="text-xs text-slate-500 mb-3">{type.subtitle}</p>
                  <ul className="space-y-1.5 text-xs sm:text-sm text-slate-600">
                    {type.points.map((pt, pIdx) => (
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
        </section>

        {/* SECTION: POPULAR USES */}
        <section className="bg-white p-6 sm:p-8 rounded-2xl border border-slate-200 shadow-xs space-y-4">
          <div>
            <h2 className="text-2xl font-bold text-slate-900">Popular Uses of Self Drive Car Rentals in Uppal</h2>
            <p className="text-slate-600 text-sm mt-1">
              People choose{' '}
              <Link href={targetUrl} className="font-bold text-slate-900">
                Best Self Drive Car Rentals in Uppal
              </Link>{' '}
              for a variety of travel needs:
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            {popularUses.map((use, idx) => (
              <div key={idx} className="flex items-center gap-2.5 p-3.5 bg-slate-50 rounded-xl border border-slate-200/80 text-sm font-medium text-slate-700">
                <CheckCircle2 className="w-4 h-4 text-slate-600 shrink-0" />
                <span>{use}</span>
              </div>
            ))}
          </div>
        </section>

        {/* SECTION: HOW TO CHOOSE & PRICING GUIDE */}
        <section className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="bg-white p-6 rounded-2xl border border-slate-200 shadow-xs space-y-3">
            <h3 className="text-lg font-bold text-slate-900">How to Choose the Best Rental</h3>
            <p className="text-xs text-slate-600">
              With many providers offering{' '}
              <Link href={targetUrl} className="font-bold text-slate-900">
                Self Drive Car rentals in Uppal
              </Link>
              , choosing the right one is crucial:
            </p>
            <ul className="text-xs sm:text-sm text-slate-600 space-y-2">
              <li>
                <strong>Check Customer Reviews:</strong> Look for Google ratings, testimonials, and service feedback.
              </li>
              <li>
                <strong>Compare Pricing:</strong> Evaluate hourly vs. daily rates, fuel policy, and security deposit.
              </li>
              <li>
                <strong>Vehicle Condition:</strong> Inspect cleanliness, verify mileage, and check insurance coverage.
              </li>
              <li>
                <strong>Booking Convenience:</strong> Choose platforms offering easy online booking, mobile apps, and 24/7 support.
              </li>
            </ul>
          </div>

          <div className="bg-white p-6 rounded-2xl border border-slate-200 shadow-xs space-y-3">
            <h3 className="text-lg font-bold text-slate-900">Pricing Guide</h3>
            <p className="text-xs text-slate-600">
              The cost of{' '}
              <Link href={targetUrl} className="font-bold text-slate-900">
                Self Drive Car rentals in Uppal
              </Link>{' '}
              depends on vehicle type, rental duration, season, and additional services.
            </p>
            <h4 className="text-xs font-bold uppercase text-slate-400 tracking-wider pt-1">Average Pricing</h4>
            <ul className="text-xs sm:text-sm text-slate-600 space-y-1">
              <li>• <strong>Hatchbacks:</strong> ₹1,000 – ₹1,800/day</li>
              <li>• <strong>Sedans:</strong> ₹1,500 – ₹2,800/day</li>
              <li>• <strong>SUVs:</strong> ₹2,500 – ₹4,500/day</li>
            </ul>
          </div>    
        </section>

        {/* SECTION: TOP FEATURES & ADVANTAGES */}
        <section className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="bg-white p-6 rounded-2xl border border-slate-200 shadow-xs space-y-3">
            <h3 className="text-lg font-bold text-slate-900">Top Features to Look For</h3>
            <p className="text-xs text-slate-600">
              When booking{' '}
              <Link href={targetUrl} className="font-bold text-slate-900">
                Self Drive Car rentals in Uppal
              </Link>
              , ensure the service includes:
            </p>
            <ul className="text-xs sm:text-sm text-slate-600 space-y-1.5 pt-1">
              {features.map((feat, idx) => (
                <li key={idx} className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-slate-600 shrink-0" />
                  <span>{feat}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="bg-white p-6 rounded-2xl border border-slate-200 shadow-xs space-y-3">
            <h3 className="text-lg font-bold text-slate-900">Advantages Over Traditional Transport</h3>
            <p className="text-xs text-slate-600">
              Why{' '}
              <Link href={targetUrl} className="font-bold text-slate-900">
                Budget self drive car Rental services in Uppal Hyderabad
              </Link>{' '}
              are gaining popularity:
            </p>
            <ul className="text-xs sm:text-sm text-slate-600 space-y-1.5 pt-1">
              {advantages.map((adv, idx) => (
                <li key={idx} className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-slate-600 shrink-0" />
                  <span>{adv}</span>
                </li>
              ))}
            </ul>
          </div>
        </section>

        {/* SECTION: TIPS TO GET BEST DEALS */}
        <section className="bg-white p-6 sm:p-8 rounded-2xl border border-slate-200 shadow-xs space-y-4">
          <h2 className="text-2xl font-bold text-slate-900">Tips to Get the Best Deals</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            {moneySavingTips.map((tip, idx) => (
              <div key={idx} className="p-3.5 bg-slate-50 rounded-xl border border-slate-200/80">
                <span className="font-bold text-slate-900 text-sm">{tip.title}: </span>
                <span className="text-xs sm:text-sm text-slate-600">{tip.desc}</span>
              </div>
            ))}
          </div>
        </section>

        {/* SECTION: SAFETY, DOCUMENTATION & GROWING DEMAND */}
        <section className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="bg-white p-6 rounded-2xl border border-slate-200 shadow-xs space-y-3">
            <div className="flex items-center gap-2 text-slate-900 font-bold text-sm">
              <ShieldCheck className="w-4 h-4 text-slate-600" /> Safety &amp; Documentation Requirements
            </div>
            <h4 className="text-xs font-bold uppercase text-slate-400 tracking-wider">Before Booking</h4>
            <ul className="text-xs sm:text-sm text-slate-600 space-y-1">
              <li>• Valid driving license</li>
              <li>• Government ID proof</li>
              <li>• Refundable security deposit</li>
            </ul>
            <h4 className="text-xs font-bold uppercase text-slate-400 tracking-wider pt-2">Safety Measures</h4>
            <ul className="text-xs sm:text-sm text-slate-600 space-y-1">
              <li>• Regular vehicle sanitization</li>
              <li>• Emergency roadside assistance</li>
              <li>• Comprehensive insurance coverage</li>
            </ul>
          </div>

          <div className="bg-white p-6 rounded-2xl border border-slate-200 shadow-xs space-y-3">
            <div className="flex items-center gap-2 text-slate-900 font-bold text-sm">
              <TrendingUp className="w-4 h-4 text-slate-600" /> Growing Demand in Uppal
            </div>
            <p className="text-xs text-slate-600">
              With increasing urbanization and changing travel preferences,{' '}
              <Link href={targetUrl} className="font-bold text-slate-900">
                Budget self drive car Rental services in Uppal Hyderabad
              </Link>{' '}
              are witnessing rapid growth.
            </p>
            <h4 className="text-xs font-bold uppercase text-slate-400 tracking-wider pt-1">Why Demand is Rising</h4>
            <ul className="text-xs sm:text-sm text-slate-600 space-y-1">
              <li>• Strong preference for personal mobility</li>
              <li>• Rise in app-based booking platforms</li>
              <li>• Increased tourism and local weekend travel</li>
            </ul>
          </div>
        </section>

        {/* SECTION: FAQS */}
        <section className="bg-white p-6 sm:p-8 rounded-2xl border border-slate-200 shadow-xs space-y-4">
          <h2 className="text-2xl font-bold text-slate-900">FAQs: Self Drive Car Rentals in Uppal</h2>

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
            <Link href={targetUrl} className="font-bold text-slate-900">
              Self Drive Car rentals in Uppal
            </Link>{' '}
            are transforming the way people travel in Hyderabad. With unmatched flexibility, affordability, and convenience, they are the perfect solution for modern commuters and travelers.
          </p>
          <p className="text-slate-600 text-xs sm:text-sm max-w-2xl mx-auto leading-relaxed font-medium">
            Make the smart move today rent a car, take the wheel, and explore Uppal on your terms.
          </p>
          <div className="pt-2">
            <Link
              href={targetUrl}
              className="px-6 py-3 bg-slate-900 text-white font-bold rounded-xl shadow-xs hover:bg-slate-800 transition inline-flex items-center gap-2 text-sm"
            >
              Self Drive Car rentals in Uppal <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </section>

      </main>
    </div>
  );
}