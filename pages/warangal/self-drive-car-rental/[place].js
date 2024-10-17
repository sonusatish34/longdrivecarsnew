import React, { useState, useEffect } from 'react';
import { useRouter } from 'next/router';
import dynamic from 'next/dynamic';
import Layout from '@/pages/components/Layout/Layout';
import Head from 'next/head';

const components = {
  sarjapur: dynamic(() => import('../../components/Branches/Bng/sarjapur')),
  electronic_city: dynamic(() => import('../../components/Branches/Bng/electronic_city')),
  indiranagar: dynamic(() => import('../../components/Branches/Bng/indiranagar')),
  jayanagar: dynamic(() => import('../../components/Branches/Bng/jayanagar')),
  whitefield: dynamic(() => import('../../components/Branches/Bng/whitefield')),
  koramangala: dynamic(() => import('../../components/Branches/Bng/koramangala')),
  hsrlayout: dynamic(() => import('../../components/Branches/Bng/hsr-layout')),
  malleshwaram: dynamic(() => import('../../components/Branches/Bng/malleshwaram')),
  sadashivanagar: dynamic(() => import('../../components/Branches/Bng/sadashivanagar'))
};

function Place() {
  const [Component, setComponent] = useState(null);
  const router = useRouter();
  const { place } = router.query;

  useEffect(() => {
    if (place) {
      const component = components[place.toLowerCase()];
      if (component) {
        setComponent(component);
      } else {
        setComponent(null);
      }
    }
  }, [place]);

  return (
    <Layout locname={'warangal'} phoneno={"9000-777-665"}>
      <Head>
        <script
          async
          src="https://www.googletagmanager.com/gtag/js?id=AW-16731119855"
        ></script>
        <script
          dangerouslySetInnerHTML={{
            __html: `
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'AW-16731119855');
          `,
          }}
        ></script>
      </Head>
      <div className='text-black lg:px- pt-32 lg:pt-10 leading-8 lg:leading-9 '>
        {Component ? <Component /> : <div>Loading...</div>}
      </div>
    </Layout>
  );
}

export default Place;
