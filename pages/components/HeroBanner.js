'use client';

import Image from 'next/image';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, EffectFade, Navigation, Pagination } from 'swiper/modules';

import 'swiper/css';
import 'swiper/css/effect-fade';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

const slides = [
  { id: 1, url: '/herobanners/1.jpeg' },
  { id: 2, url: '/herobanners/2.jpeg' },
  { id: 3, url: '/herobanners/3.jpeg' },
  // { id: 4, url: '/herobanners/of4.webp' },
  // { id: 5, url: '/herobanners/of5.webp' },
  // { id: 6, url: '/herobanners/of6.webp' },
];

export default function HeroBanner() {
  return (
    <section className="relative w-full overflow-hidden bg-[#a8a0d0]">
      <Swiper
        modules={[Autoplay, EffectFade, Navigation, Pagination]}
        effect="fade"
        speed={700}
        loop
        navigation
        pagination={{ clickable: true }}
        autoplay={{
          delay: 3000,
          disableOnInteraction: false,
          pauseOnMouseEnter: true,
        }}
        className="w-full"
      >
        {slides.map((slide, index) => (
          <SwiperSlide key={slide.id}>
            <div className="relative w-full aspect-[3/2]">
              <Image
                src={slide.url}
                alt={`Long Drive Cars banner ${index + 1}`}
                fill
                priority={index === 0}
                fetchPriority={index === 0 ? 'high' : 'auto'}
                loading={index === 0 ? 'eager' : 'lazy'}
                sizes="100vw"
                quality={75}
                className="object-cover object-center"
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