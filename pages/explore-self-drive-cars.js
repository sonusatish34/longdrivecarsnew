import React from 'react';
import dynamic from 'next/dynamic';
import Layout from './components/Layout/Layout';

// Dynamically import the ExploreCars component
const ExploreCars = dynamic(() => import('./components/ExploreCars/ExploreCars'), {
  ssr: false, // Set to false if you want to load it only on the client side
});

function ExploreSelfDriveCars() {
  return (
    <div>
      <Layout phoneno={'9000-478-478'}>
        <ExploreCars loc={'hyderabad'} phoneno={"9000478478"} />
      </Layout>
    </div>
  );
}

export default ExploreSelfDriveCars;
