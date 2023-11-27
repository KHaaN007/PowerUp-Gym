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
                    <button className="relative mt-8 flex h-[50px] w-48 items-center justify-center overflow-hidden bg-blue-600 font-medium text-white shadow-2xl transition-all rounded-lg duration-300 before:absolute before:inset-0 before:border-0 before:border-white before:duration-100 before:ease-linear hover:bg-white font-serif text-xl px-2 hover:text-blue-600 hover:shadow-blue-600 hover:before:border-[25px]">
                                            <span className="relative z-10">Join Classes Now</span>
                                        </button>
                </div>
            </SwiperSlide>

            <SwiperSlide>
                <img className='object-cover w-full lg:h-screen bg-black opacity-90' src="./banner01.jpg" alt="" />
                <div className='absolute z-50 bottom-44 left-96'>
                    <button className="relative mt-8 flex h-[50px] w-48 items-center justify-center overflow-hidden bg-blue-600 font-medium text-white shadow-2xl transition-all rounded-lg duration-300 before:absolute before:inset-0 before:border-0 before:border-white before:duration-100 before:ease-linear hover:bg-white font-serif text-xl px-2 hover:text-blue-600 hover:shadow-blue-600 hover:before:border-[25px]">
                                            <span className="relative z-10">Join Classes Now</span>
                                        </button>
                </div>
            </SwiperSlide>
            <SwiperSlide>
                <img className='object-cover w-full lg:h-screen bg-black opacity-90' src="./banner10.jpg" alt="" />
                <div className='absolute z-50 bottom-44 left-96'>
                    <button className="relative mt-8 flex h-[50px] w-48 items-center justify-center overflow-hidden bg-blue-600 font-medium text-white shadow-2xl transition-all rounded-lg duration-300 before:absolute before:inset-0 before:border-0 before:border-white before:duration-100 before:ease-linear hover:bg-white font-serif text-xl px-2 hover:text-blue-600 hover:shadow-blue-600 hover:before:border-[25px]">
                                            <span className="relative z-10">Join Classes Now</span>
                                        </button>
                </div>
            </SwiperSlide>
            <SwiperSlide>
                <img className='object-cover w-full lg:h-screen bg-black opacity-90' src="./banner06.jpg" alt="" />
                <div className='absolute z-50 bottom-44 left-96'>
                    <button className="relative mt-8 flex h-[50px] w-48 items-center justify-center overflow-hidden bg-blue-600 font-medium text-white shadow-2xl transition-all rounded-lg duration-300 before:absolute before:inset-0 before:border-0 before:border-white before:duration-100 before:ease-linear hover:bg-white font-serif text-xl px-2 hover:text-blue-600 hover:shadow-blue-600 hover:before:border-[25px]">
                                            <span className="relative z-10">Join Classes Now</span>
                                        </button>
                </div>
            </SwiperSlide>

            <SwiperSlide>
                <img className='object-cover w-full lg:h-screen bg-black opacity-90' src="./banner08.jpg" alt="" />
                <div className='absolute z-50 bottom-44 left-96'>
                    <button className="relative mt-8 flex h-[50px] w-48 items-center justify-center overflow-hidden bg-blue-600 font-medium text-white shadow-2xl transition-all rounded-lg duration-300 before:absolute before:inset-0 before:border-0 before:border-white before:duration-100 before:ease-linear hover:bg-white font-serif text-xl px-2 hover:text-blue-600 hover:shadow-blue-600 hover:before:border-[25px]">
                                            <span className="relative z-10">Join Classes Now</span>
                                        </button>
                </div>
            </SwiperSlide>
            <SwiperSlide>
                <img className='object-cover w-full lg:h-screen bg-black opacity-90' src="./banner02.jpg" alt="" />
                <div className='absolute z-50 bottom-44 left-96'>
                    <button className="relative mt-8 flex h-[50px] w-48 items-center justify-center overflow-hidden bg-blue-600 font-medium text-white shadow-2xl transition-all rounded-lg duration-300 before:absolute before:inset-0 before:border-0 before:border-white before:duration-100 before:ease-linear hover:bg-white font-serif text-xl px-2 hover:text-blue-600 hover:shadow-blue-600 hover:before:border-[25px]">
                                            <span className="relative z-10">Join Classes Now</span>
                                        </button>
                </div>
            </SwiperSlide>
            <SwiperSlide>
                <img className='object-cover w-full lg:h-screen bg-black opacity-90' src="./banner04.jpg" alt="" />
                <div className='absolute z-50 bottom-44 left-96'>
                    <button className="relative mt-8 flex h-[50px] w-48 items-center justify-center overflow-hidden bg-blue-600 font-medium text-white shadow-2xl transition-all rounded-lg duration-300 before:absolute before:inset-0 before:border-0 before:border-white before:duration-100 before:ease-linear hover:bg-white font-serif text-xl px-2 hover:text-blue-600 hover:shadow-blue-600 hover:before:border-[25px]">
                                            <span className="relative z-10">Join Classes Now</span>
                                        </button>
                </div>
            </SwiperSlide>

          
        </Swiper>
    );
};

export default Banner;