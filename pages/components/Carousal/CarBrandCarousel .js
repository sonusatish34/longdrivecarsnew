// components/CarBrandCarousel.js
import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
// import 'globals.css';
import img1 from '../../images/mahindra.webp'
import img2 from '../../images/renault.webp'
import img3 from '../../images/suz.webp'
import img4 from '../../images/tata2.webp'
import Image from 'next/image';
import styles from './CarBrandCarousal.module.css'
const carBrands = [
  img1,img2,img3,img4
  // Add more brand image paths here
];

const CarBrandCarousel = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 2,
    slidesToScroll: 1,
    centerMode: true,
    centerPadding: '0',
    focusOnSelect: true,
    arrows: false,
  };

  return (
    <div className={`${styles.carouselcontainer}`}>
        
      <Slider {...settings}>
        {carBrands.map((brand, index) => (
          <div key={index} className={`${styles.brandslide}`}>
            <Image src={brand} alt={`Brand ${index}`} />
          </div>
        ))}
      </Slider>
      
    </div>
  );
};

export default CarBrandCarousel;
