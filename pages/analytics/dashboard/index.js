import { Montserrat,Figtree } from 'next/font/google';

const montserrat = Montserrat({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700'], // Add any font weights you need
});

const figtree = Figtree({
  subsets: ['latin'],
  weight: ['300', '400', '500', '600', '700', '800', '900'], // Select weights you need
  variable: '--font-figtree', // Optional: CSS variable
  display: 'swap',
});

import { Inter } from 'next/font/google';

const inter = Inter({
  subsets: ['latin'],
  display: 'swap',
});

// const Analytics = (props) => {
//   return (
//     <div className={montserrat.className}></div>



import React from 'react';
import AnalyticsDashboard from '../comp/AnalyticsDashboard';

const dashboard = (props) => {
  return (
    <div className={montserrat.className}>
      <AnalyticsDashboard/>
    </div>
  );
};

export default dashboard;