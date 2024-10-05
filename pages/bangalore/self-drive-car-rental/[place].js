import React, { useState, useEffect } from 'react';
import { useRouter } from 'next/router';
import dynamic from 'next/dynamic';
import BangaloreLayout from '@/pages/components/Layout/BangaloreLayout';

const components = {
  sarjapur: dynamic(() => import('../../components/Branches/Bng/sarjapur')),
  electronic_city: dynamic(() => import('../../components/Branches/Bng/electronic_city')),
  indiranagar: dynamic(() => import('../../components/Branches/Bng/indiranagar')),
  jayanagar: dynamic(() => import('../../components/Branches/Bng/jayanagar')),
  whitefield: dynamic(() => import('../../components/Branches/Bng/whitefield')),
  koramangala: dynamic(() => import('../../components/Branches/Bng/koramangala')),
  hsrlayout: dynamic(() => import('../../components/Branches/Bng/hsr-layout')),
  malleshwaram: dynamic(() => import('../../components/Branches/Bng/malleshwaram')),
  sadashivanagar:dynamic(()=> import('../../components/Branches/Bng/sadashivanagar'))
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
    <BangaloreLayout>
      <div className='text-black lg:px- pt-32 lg:pt-10 leading-8 lg:leading-9 '>
        {Component ? <Component /> : <div>Loading...</div>}
      </div>
    </BangaloreLayout>
  );
}

export default Place;
