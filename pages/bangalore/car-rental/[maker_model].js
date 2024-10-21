import React from 'react'
import MakerModel from '../../MakerModel'
import BangaloreLayout from '@/pages/components/Layout/BangaloreLayout';
function maker_model() {
  return (
    <BangaloreLayout locname={'bangalore'}  phoneno={'912-912-2525'}>
    <div>
      <MakerModel city={'bangalore'} phoneno={'9129122525'}/>
    </div>
    </BangaloreLayout>
  )
}

export default  maker_model;