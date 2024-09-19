"use client"

import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';

import 'swiper/css';
import 'swiper/css/pagination';
import { Pagination, Autoplay } from 'swiper/modules';
import { initialProducts } from '@/app/asset';

const HeroSlider = () => {
    return (
        <div className='h-[50vh] '>
          <Swiper 
            direction={'vertical'} 
            loop= {true}
            centeredSlides={true}
            slidesPerView={2}
            autoplay={{ delay: 1500 }}
            pagination={{
              clickable: true,
            }}
            modules={[Pagination, Autoplay]}
            className="mySwiper"
          >
            <SwiperSlide className='bg-red-300 min-h-[100vh]'>
                <span className='relative'>
                <img src='' />
                </span>
            </SwiperSlide>
            <SwiperSlide className='  min-h-[100vh]'>
            <img src=' '  />
            </SwiperSlide>
            <SwiperSlide className='bg-blue-300 min-h-[100vh]'>
            <img src=' ' />
            </SwiperSlide>
            <SwiperSlide className='bg-green-300 min-h-[100vh]'>
            <img src='' />
            </SwiperSlide>
            <SwiperSlide className='bg-yellow-300 min-h-[100vh]'>

              </SwiperSlide> 
          </Swiper>
        </div>
      );
}

export default HeroSlider
        


