import React from 'react'
import ExploreCars from '../components/ExploreCars/ExploreCars'
import BangaloreLayout from '../components/Layout/BangaloreLayout'
function exploreselfdrivecars() {
  return (
    <BangaloreLayout>
      <div>
        <ExploreCars loc={'bangalore'} />
      </div>
    </BangaloreLayout>

  )
}

export default exploreselfdrivecars