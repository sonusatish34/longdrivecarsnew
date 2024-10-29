import React from 'react'
import MakerModel from '../../MakerModel'
import BangaloreLayout from '@/pages/components/Layout/BangaloreLayout';
function maker_model() {
  return (
    <BangaloreLayout locname={'bangalore'}  phoneno={'988-6666-883'}>
    <div>
      <MakerModel city={'bangalore'} phoneno={'9886666883'}/>
    </div>
    </BangaloreLayout>
  )
}

export default  maker_model;