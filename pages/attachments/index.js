import { useEffect, useState } from 'react';  // Import useState and useEffect hooks
import { useRouter } from 'next/router';      // Import useRouter for routing
import Head from 'next/head';
import Navbar from "./components/navbar";
import Banner from "./components/Banner";
import Second from "./components/second";
import AttachmentHelp from './components/Attachmenthelp';
import CallBackSection from './components/callsection';
import CarEarningDashboard from './components/CarEarningsDashboard';
import Faq from './components/Faq';
import Footer from './components/Footer';
import CarEarningsSection from './components/CarEarningsSection';
import Sliderpage from './components/Slider';
import CarFeatures from './components/Carfeatures';

export default function Home() {
  const [canonicalUrl, setCanonicalUrl] = useState('');
  const router = useRouter();

  useEffect(() => {
    if (router.isReady) {  // Wait until the router is ready
      const fullUrl = `${window.location.origin}${router.asPath}`;
      setCanonicalUrl(fullUrl);  // Set the canonical URL
    }
  }, [router.isReady, router.asPath]);  // Update when router changes

  return (
    <div className='text-white'>
      <Head>
        <title>Car Attachment in Hyderabad with Long Drive Cars</title>
        <meta name="description" content="Attach your car and earn monthly income. Best car attachment plans in Hyderabad with assured returns." />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta property="og:title" content="Car Attachment in Hyderabad with Long Drive Cars" />
        <meta property="og:description" content="Attach your car and earn monthly income. Best car attachment plans in Hyderabad with assured returns." />

        {/* Only render canonical link once the URL is set */}
        {canonicalUrl && <link rel="canonical" href={canonicalUrl} />}
      </Head>

      <Navbar />
      <Banner />
      <Second />
      <AttachmentHelp />
      <Sliderpage />
      <CarFeatures />
      <CallBackSection />
      <CarEarningDashboard />
      <CarEarningsSection />
      <Faq />
      <Footer />
    </div>
  );
}
