// components/Slider.js
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';

const SliderComponent = () => {
  return (
    <div className="w-full h-[80vh] bg-gray-800">
      <Swiper
        spaceBetween={50}
        slidesPerView={1}
        navigation
        pagination={{ clickable: true }}
        loop
      >
        {/* Slide 1 - App Development */}
        <SwiperSlide>
          <div className="relative flex items-center justify-center h-full text-white">
            <div className="absolute inset-0 bg-cover bg-center" style={{ backgroundImage: "url('https://via.placeholder.com/1200x800?text=App+Development')" }}></div>
            <div className="z-10 text-center px-8">
              <h2 className="text-4xl font-bold mb-4">App Development</h2>
              <p className="text-lg">We build high-performance mobile applications tailored to your business needs.</p>
            </div>
          </div>
        </SwiperSlide>

        {/* Slide 2 - Web Development */}
        <SwiperSlide>
          <div className="relative flex items-center justify-center h-full text-white py-10">
            <div className="absolute inset-0 bg-cover bg-center" style={{ backgroundImage: "url('/hero/1.png')" }}></div>
            <div className="z-10 text-center px-8">
              <h2 className="text-4xl font-bold mb-4">Web Development</h2>
              <p className="text-lg">Crafting responsive and dynamic websites to engage users and enhance business growth.</p>
            </div>
          </div>
        </SwiperSlide>

        {/* Slide 3 - Digital Marketing */}
        <SwiperSlide>
          <div className="relative flex items-center justify-center h-full text-white">
            <div className="absolute inset-0 bg-cover bg-center" style={{ backgroundImage: "url('https://via.placeholder.com/1200x800?text=Digital+Marketing')" }}></div>
            <div className="z-10 text-center px-8">
              <h2 className="text-4xl font-bold mb-4">Digital Marketing</h2>
              <p className="text-lg">Take your business to the next level with our comprehensive digital marketing strategies.</p>
            </div>
          </div>
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default SliderComponent;
