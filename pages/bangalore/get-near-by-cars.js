import React from 'react'
import dynamic from 'next/dynamic';
import BangaloreLayout from '../components/Layout/BangaloreLayout';
const DynNearby = dynamic(() => import('../components/GetNearByPage/GetNearByPage'), {
  ssr: false, // Set to false if you want to load it only on the client side
});

function getnearbycars() {
  return (
    <div className='bg-white'>
      <BangaloreLayout>
        <DynNearby />
      </BangaloreLayout>
    </div>
  )
}

export default getnearbycars