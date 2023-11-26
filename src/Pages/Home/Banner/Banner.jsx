// import React, { useRef, useState } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

// import './styles.css';

// import required modules
import { Autoplay, Pagination, Navigation } from 'swiper/modules';
import RowButton from '../../../RowCssComponent/RowButton/RowButton';


const Banner = () => {



    return (
        <Swiper
            spaceBetween={30}
            centeredSlides={true}
            autoplay={{
                delay: 3500,
                disableOnInteraction: false,
            }}
            pagination={{
                clickable: true,
            }}
            navigation={true}
            modules={[Autoplay, Pagination, Navigation]}
            className="mySwiper"
        >

            <SwiperSlide>
                <img className='object-cover w-full lg:h-screen bg-black opacity-90' src="./banner05.jpg" alt="" />
                <div className='absolute z-50 bottom-44 left-96'>
                    <RowButton></RowButton>
                </div>
            </SwiperSlide>

            <SwiperSlide>
                <img className='object-cover w-full lg:h-screen bg-black opacity-90' src="./banner01.jpg" alt="" />
                <div className='absolute z-50 bottom-44 left-96'>
                    <RowButton></RowButton>
                </div>
            </SwiperSlide>
            <SwiperSlide>
                <img className='object-cover w-full lg:h-screen bg-black opacity-90' src="./banner10.jpg" alt="" />
                <div className='absolute z-50 bottom-44 left-96'>
                    <RowButton></RowButton>
                </div>
            </SwiperSlide>
            <SwiperSlide>
                <img className='object-cover w-full lg:h-screen bg-black opacity-90' src="./banner06.jpg" alt="" />
                <div className='absolute z-50 bottom-44 left-96'>
                    <RowButton></RowButton>
                </div>
            </SwiperSlide>

            <SwiperSlide>
                <img className='object-cover w-full lg:h-screen bg-black opacity-90' src="./banner08.jpg" alt="" />
                <div className='absolute z-50 bottom-44 left-96'>
                    <RowButton></RowButton>
                </div>
            </SwiperSlide>
            <SwiperSlide>
                <img className='object-cover w-full lg:h-screen bg-black opacity-90' src="./banner02.jpg" alt="" />
                <div className='absolute z-50 bottom-44 left-96'>
                    <RowButton></RowButton>
                </div>
            </SwiperSlide>
            <SwiperSlide>
                <img className='object-cover w-full lg:h-screen bg-black opacity-90' src="./banner04.jpg" alt="" />
                <div className='absolute z-50 bottom-44 left-96'>
                    <RowButton></RowButton>
                </div>
            </SwiperSlide>

          
        </Swiper>
    );
};

export default Banner;