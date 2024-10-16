import React from 'react'
import dynamic from 'next/dynamic';
const MakerModel = dynamic(() => import('../../MakerModel'));

import Layout from '../../components/Layout/Layout';
function maker_model() {
  return (
    <Layout locname={'vizag'}  phoneno={'96666-99583'}>
    <div>
      <MakerModel city={'vizag'} phoneno={'9666699583'}/>
    </div>
    </Layout>
  )
}

export default  maker_model;