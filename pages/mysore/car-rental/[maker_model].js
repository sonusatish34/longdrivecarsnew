import React from 'react'
import dynamic from 'next/dynamic';
const MakerModel = dynamic(() => import('../../MakerModel'));
import Layout from '../../components/Layout/Layout';
function maker_model() {
  return (
    <Layout locname={'mysore'}  phoneno={'998-6666-078'}>
    <div>
      <MakerModel city={'mysore'} phoneno={'9986666078'}/>
    </div>
    </Layout>
  )
}

export default  maker_model;