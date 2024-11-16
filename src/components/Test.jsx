import { Swiper, SwiperSlide } from 'swiper/react';
import img1 from '../assets/Sajek.png'
// Import Swiper styles
import 'swiper/css';

import { Pagination } from 'swiper/modules';



const Test = () => {
    return (
        <div>



<Swiper
        slidesPerView={4}
        centeredSlides={true}
        spaceBetween={10}
        grabCursor={true}
        pagination={{
          clickable: true,
        }}
        modules={[Pagination]}
        className="mySwiper"
      >
        <SwiperSlide>
            <img className='w-60' src={img1} alt="" />
        </SwiperSlide>
        <SwiperSlide>
        <img className='w-60' src={img1} alt="" />
        </SwiperSlide>
        <SwiperSlide>
        <img className='w-60' src={img1} alt="" />
        </SwiperSlide>
        <SwiperSlide> <img className='w-60' src={img1} alt="" /></SwiperSlide>
        <SwiperSlide> <img className='w-60' src={img1} alt="" /></SwiperSlide>
        
      </Swiper>
          
        </div>
    );
};

export default Test;