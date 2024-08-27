import { Swiper, SwiperSlide } from 'swiper/react';
// import 'swiper/swiper-bundle.min.css'; // Import Swiper styles

const MySwiper = () => (
    <div className='text-red-400 pt-60'>
        <Swiper
            spaceBetween={50}
            slidesPerView={1}
            loop={true}
            // pagination={{ clickable: true }}
            // navigation={true}
        >
            <SwiperSlide><div className='w-40 h-40 bg-black'></div>Slide 1</SwiperSlide>
            <SwiperSlide><div className='w-40 h-40 bg-black'></div>Slide 2</SwiperSlide>
            <SwiperSlide><div className='w-40 h-40 bg-black'></div>Slide 3</SwiperSlide>
    
            {/* Add more slides */}
        </Swiper>
    </div>

);

export default MySwiper;
