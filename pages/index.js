import Homepage from "./components/HomePage/Homepage";
import Head from "next/head";
import Layout from "./components/Layout/Layout";

export default function Home({ cars,canonicalUrl }) {
  
  return (
    <div className="bg-white">
      <Layout phoneno={'9000-478-478'}>
        <Head>
          <title>Zero Deposit & Unlimited Km - Self-Drive Car Rentals In Hyderabad</title>
          <meta name="description" content="Self-drive cars start at 62/hr, We offer Long Drive Cars for the best prices with unlimited km & Zero deposit, Book clDzire @ ₹83/hr, Baleno @ ₹91/hr, Ertiga @ ₹124/hr, Swift @ ₹83/hr, Thar @ ₹208/hr." />
          <meta name="viewport" content="width=device-width, initial-scale=1" />
          <meta property="og:title" content="Zero Deposit & Unlimited km - Self-Drive Car Rentals In Hyderabad" />
          <meta property="og:description" content="Self-drive cars start at 62/hr, We offer Long Drive Cars for the best prices with unlimited km & Zero deposit, Book Dzire @ ₹83/hr, Baleno @ ₹91/hr, Ertiga @ ₹124/hr, Swift @ ₹83/hr, Thar @ ₹208/hr." />
          <link rel="canonical" href={canonicalUrl} />
        </Head>
        <Homepage data={cars} />
      </Layout>
    </div>
  );
}

export async function getServerSideProps({req}) {
  const response = await fetch('https://api.longdrivecarz.in/site/cars-info?location=Hyderabad');
  const items = await response.json();
  const cars = items?.data?.results;
  const host = req.headers.host;
  const canonicalUrl = host.includes('.in')
    ? 'https://www.longdrivecars.in'
    : 'https://www.longdrivecars.com';

  return {
    props: {
      cars,
      canonicalUrl,
    },
  };
}