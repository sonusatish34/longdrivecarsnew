'use client';

import Image from 'next/image';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, EffectFade, Navigation, Pagination } from 'swiper/modules';

import 'swiper/css';
import 'swiper/css/effect-fade';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

const slides = [
  { url: '/herobanners/1.webp' },
  { url: '/herobanners/2.webp' },
  { url: '/herobanners/3.webp' },
  { url: '/herobanners/9.webp' },
  { url: '/herobanners/10.webp' },
  { url: '/herobanners/11.webp' },
  { url: '/herobanners/12.webp' },
  { url: '/herobanners/13.webp' },
  { url: '/herobanners/14.webp' },
  { url: '/herobanners/15.webp' },
  { url: '/herobanners/16.webp' },
  { url: '/herobanners/17.webp' },
  { url: '/herobanners/18.webp' },
  { url: '/herobanners/19.webp' },
  { url: '/herobanners/21.webp' },
  { url: '/herobanners/22.webp' },
  { url: '/herobanners/23.webp' },
  { url: '/herobanners/24.webp' },
  { url: '/herobanners/25.webp' },
  { url: '/herobanners/28.webp' },
  { url: '/herobanners/30.webp' },
  { url: '/herobanners/31.webp' },
  { url: '/herobanners/32.webp' },
  { url: '/herobanners/33.webp' },
  { url: '/herobanners/34.webp' },
];

export default function HeroBanner() {
  return (
    <section className="relative w-full overflow-hidden bg-[#a8a0d0]">
      <Swiper
        modules={[Autoplay, EffectFade, Navigation]}
        effect="fade"
        speed={700}
        loop
        navigation
        // pagination={{ clickable: true }}
        autoplay={{
          delay: 3000,
          disableOnInteraction: false,
          pauseOnMouseEnter: true,
        }}
        className="w-full"
      >
        {slides.map((slide, index) => (
          <SwiperSlide key={index+1}>
            {/* 
              aspect-[2367/1742] matches your exact banner dimension.
              max-h-[85vh] prevents it from stretching too tall on ultra-wide screens.
            */}
            <div className="relative w-full aspect-[2367/1742] ">
              <Image
                src={slide.url}
                alt={`Long Drive Cars banner ${index + 1}`}
                fill
                priority={index === 0}
                fetchPriority={index === 0 ? 'high' : 'low'}
                loading={index === 0 ? 'eager' : 'lazy'}
                sizes="100vw"
                quality={70}
                className="object-contain sm:object-cover object-center"
              />

              <div
                className="absolute inset-0 bg-black/0"
                aria-hidden="true"
              />
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
}