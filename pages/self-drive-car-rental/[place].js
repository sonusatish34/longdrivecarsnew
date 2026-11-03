
import dynamic from 'next/dynamic';
import Layout from '../components/Layout/Layout';
import Head from 'next/head';

const components = {
  ameerpet: dynamic(() => import('../components/Branches/ameerpet')),
  dilshuknagar: dynamic(() => import('../components/Branches/dilshuknagar')),
  ecil: dynamic(() => import('../components/Branches/ecil')),
  kukatpally: dynamic(() => import('../components/Branches/kukatpally')),
  madhapur: dynamic(() => import('../components/Branches/madhapur')),
  medipally: dynamic(() => import('../components/Branches/medipally')),
  miyapur: dynamic(() => import('../components/Branches/miyapur')),
  secunderabad: dynamic(() => import('../components/Branches/secunderabad')),
  shamshabad: dynamic(() => import('../components/Branches/shamshabad')),
  ramanthapur: dynamic(() => import('../components/Branches/ramanthapur')),
  gachibowli: dynamic(() => import('../components/Branches/gachibowli')),
  manikonda: dynamic(() => import('../components/Branches/manikonda')),
  warangal: dynamic(() => import('../components/Branches/warangal')),
  uppal: dynamic(() => import('../components/Branches/uppal')),
  begumpet: dynamic(() => import('../components/Branches/begumpet')),
  lbnagar: dynamic(() => import('../components/Branches/lbnagar')),
  shamirpet: dynamic(() => import('../components/Branches/shamirpet')),
  alwal: dynamic(() => import('../components/Branches/alwal')),
  bachupally: dynamic(() => import('../components/Branches/bachupally')),
  balanagar: dynamic(() => import('../components/Branches/balanagar')),
  bnreddynagar: dynamic(() => import('../components/Branches/bnreddynagar')),
  bowenpally: dynamic(() => import('../components/Branches/bowenpally')),
  habsiguda: dynamic(() => import('../components/Branches/habsiguda')),
  hayatnagar: dynamic(() => import('../components/Branches/hayatnagar')),
  kachiguda: dynamic(() => import('../components/Branches/kachiguda')),
  nacharam: dynamic(() => import('../components/Branches/nacharam')),
  nampally: dynamic(() => import('../components/Branches/nampally')),
  saroornagar: dynamic(() => import('../components/Branches/saroornagar')),
  tarnaka: dynamic(() => import('../components/Branches/tarnaka')),
  vanasthalipuram: dynamic(() => import('../components/Branches/vanasthalipuram')),
};

const metadata = {

  ameerpet: {
    title: 'Self Drive Car Rental Ameerpet Long Drive Cars',
    description: 'Rent self drive cars in Ameerpet for daily or hourly plans. Clean rides, instant booking & flexible pricing options.'
  },

  dilshuknagar: {
    title: 'Car Rentals Dilsukhnagar Without a Driver',
    description: 'Find the best self drive rentals in Dilsukhnagar for solo or group travel. Simple online booking and great customer support.'

  },

  ecil: {
    title: 'Top Self Drive Cars in ECIL for Rent',
    description: 'Rent the best self drive cars in ECIL for work or weekend getaways. Safe, sanitized, and instantly available.'

  },

  kukatpally: {
    title: 'Car Rental in Kukatpally Long Drive Cars',
    description: 'Book self drive cars in Kukatpally at great prices. Quick booking, flexible rentals, and clean cars for every occasion.'
  },

  madhapur: {
    title: 'Best Car Hire in Madhapur Long Drive Cars',
    description: 'Choose from a range of best self drive cars in Madhapur. Reliable service and clean cars ready for your journey.'
  },

  medipally: {
    title: 'Affordable Self Drive Car Rental Medipally',
    description: 'Choose your budget friendly self drive car in Medipally. Easy booking, no hidden charges, and 24x7 support at Long Drive Cars.'
  },

  miyapur: {
    title: 'Rent a Self Drive Car in Miyapur Instantly',
    description: 'Get self drive cars in Miyapur at the best prices. Instant booking and 24x7 support from Long Drive Cars.'
  },

  secunderabad: {
    title: 'Top Car Rental Service in Secunderabad',
    description: 'Choose from a variety of Top self drive cars in Secunderabad. Rent hourly, daily, or for long trips at affordable rates.'
  },


  shamshabad: {
    title: 'Shamshabad Car Rentals for Self Drive Needs',
    description: 'Looking for self drive cars in Shamshabad? Book budget-friendly cars online with flexible plans and easy returns.'
  },

  ramanthapur: {
    title: 'Car Rentals Near You in Ramanthapur Today',
    description: 'Explore Ramanthapur with your own rental car. Self drive cars available with no deposit and flexible return options.'
  },

  gachibowli: {
    title: 'Self Drive Car Rental Gachibowli Long Drive Cars',
    description: 'Book self drive cars in Gachibowli with ease. Affordable rentals, instant booking, and flexible plans with Long Drive Cars.'

  },

  manikonda: {
    title: 'Self Drive Car Rental in Manikonda | Long Drive Cars',
    description: 'Rent self drive cars in Manikonda with flexible hourly, daily, and weekend plans. Clean cars, quick booking, and easy pickup nearby.'
  },

  lbnagar: {
    title: 'Car Rentals in LB Nagar | Affordable & Convenient Travel Guide',
    description: 'Book affordable self-drive and chauffeur car rentals in LB Nagar Hyderabad. Flexible rentals, transparent pricing, and easy booking for daily or outstation travel.'
  },

  // Add other branches here...
};
export async function getServerSideProps(context) {
  const { req } = context;
  const { place } = context.params;
  const normalizedPlace = place.toLowerCase();

  if (!components[normalizedPlace]) {
    return { notFound: true };
  }

  const { title = 'Default Title', description = 'Default Description', ogDescription = '' } = metadata[normalizedPlace] || {};
  const canonicalUrl = `https://www.longdrivecars.com/self-drive-car-rental/${normalizedPlace}`;

  return {
    props: {
      place: normalizedPlace,
      title,
      description,
      ogDescription,
      canonicalUrl
    },
  };
}

function Place({ place, title, description, ogDescription, canonicalUrl }) {
  const Component = components[place];

  return (
    <Layout phoneno={'9000-478-478'} wspno={'9000478478'}>
      <Head>
        <title>{title}</title>
        <meta name="description" content={description} />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta property="og:title" content={title} />
        <meta property="og:description" content={description} />
        <link rel="canonical" href={canonicalUrl} />  {/* Use canonicalUrl here */}
      </Head>
      <div><Component /></div>
    </Layout>
  );
}

export default Place;
