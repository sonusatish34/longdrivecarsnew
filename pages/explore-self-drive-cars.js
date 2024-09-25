import React from 'react';
import dynamic from 'next/dynamic';

// Dynamically import the ExploreCars component
const ExploreCars = dynamic(() => import('./components/ExploreCars/ExploreCars'), {
  ssr: false, // Set to false if you want to load it only on the client side
});

function ExploreSelfDriveCars() {
  return (
    <div>
      <ExploreCars loc={'hyderabad'} />
    </div>
  );
}

export default ExploreSelfDriveCars;
