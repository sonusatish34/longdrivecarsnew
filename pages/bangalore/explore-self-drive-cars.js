import React from 'react'
import ExploreCars from '../components/ExploreCars/ExploreCars'
import BangaloreLayout from '../components/Layout/BangaloreLayout'
function exploreselfdrivecars() {
  return (
    <BangaloreLayout locname={'bangalore'} phoneno={"912-912-2525"}>
      <div>
        <ExploreCars loc={'bangalore'} />
      </div>
    </BangaloreLayout>

  )
}

export default exploreselfdrivecars