import React from 'react'
import dynamic from 'next/dynamic';
const DynNearby = dynamic(() => import('../pages/components/GetNearByPage/GetNearByPage'), {
    ssr: false, // Set to false if you want to load it only on the client side
});
const Dynfooter =  dynamic(() => import('../pages/components/Footer/Footer'), {
    ssr: false, // Set to false if you want to load it only on the client side
});
function getnearbycars() {
  return (
    <div className='bg-white'>
        <DynNearby/>
        <Dynfooter/>
    </div>
  )
}

export default getnearbycars