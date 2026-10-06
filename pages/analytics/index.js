import React from 'react';
import { Montserrat } from 'next/font/google';
import LoginForm from './comp/Login';

const montserrat = Montserrat({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700'], // Add any font weights you need
});

const Analytics = (props) => {
  return (
    <div className={montserrat.className}>
      <LoginForm />
    </div>
  );
};

export default Analytics;