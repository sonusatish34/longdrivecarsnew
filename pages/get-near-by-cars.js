import React from 'react'
import dynamic from 'next/dynamic';
import Layout from './components/Layout/Layout';
const DynNearby = dynamic(() => import('../pages/components/GetNearByPage/GetNearByPage'), {
    ssr: false, // Set to false if you want to load it only on the client side
});
const Dynfooter =  dynamic(() => import('../pages/components/Footer/Footer'), {
    ssr: false, // Set to false if you want to load it only on the client side
});
function getnearbycars() {
  return (
    <div className='bg-white'>
      <Layout>

        <DynNearby/>
      </Layout>
        
    </div>
  )
}

export default getnearbycars