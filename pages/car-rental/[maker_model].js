import React from 'react'
import MakerModel from '../MakerModel'
import Layout from '../components/Layout/Layout';
function maker_model() {
  return (
    <Layout>
    <div>
      <MakerModel city={'hyderabad'} phoneno={'96666478'}/>
    </div>
    </Layout>
  )
}

export default  maker_model;