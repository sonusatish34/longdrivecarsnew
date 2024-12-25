import React, { useEffect } from 'react';
import { useRouter } from 'next/router';
const ComponentName = ({canonicalUrl}) => {
    console.log(canonicalUrl,"kkk");
    
    const router = useRouter()
    useEffect(()=>{
        router.push(canonicalUrl)
    },[])
  return (
    <div>
      HI
    </div>
  );
};

export default ComponentName;

export async function getServerSideProps({ req }) {

    const host = req.headers.host;
    const canonicalUrl = host.includes('.in')
        ? 'https://www.longdrivecars.in/hyderabad'
        : 'https://www.longdrivecars.com/hyderabad';

    return {
        props: {
            canonicalUrl,
        },
    };
}