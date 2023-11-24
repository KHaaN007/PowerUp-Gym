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


    const containerStyles = {
        position: 'relative',
    };



    const overlayStyles = {
        position: 'absolute',
        top: 0,
        left: 0,
        width: '100%',
        height: '100%',
        background: 'rgba(0, 0, 0, 0.)',
    };




    return (
        <Swiper
            spaceBetween={30}
            centeredSlides={true}
            autoplay={{
                delay: 5000,
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
                <div>
                    <div style={containerStyles}>

                        <video
                            className="w-full object-cover"
                            // style={videoStyles}
                            autoPlay
                            loop
                            muted
                        >
                            <source className="" src="/banner01.mp4" type="video/mp4" />
                            Your browser does not support the video tag.
                        </video>
                        <div style={overlayStyles}></div>
                        <div className="absolute inset-0 flex items-center justify-center text-white lg:text-8xl font-mono font-bold">

                            <div className="font-extrabold text-lg md:text-5xl [text-wrap:balance] bg-clip-text text-transparent bg-gradient-to-r from-slate-200/60 to-50% to-slate-200">Trusted by the most innovative minds in <span class="text-indigo-500 inline-flex flex-col">
                                <ul className="block text-left leading-tight [&_li]:block">
                                    <li>Road </li>
                                    <hr />
                                    <li>Revolution</li>
                                </ul>
                            </span></div>

                        </div>
                    </div>
                </div>
            </SwiperSlide>
            <SwiperSlide>
                <div>
                    <div style={containerStyles}>

                        <video
                            className="w-full"
                            // style={videoStyles}
                            autoPlay
                            loop
                            muted
                        >
                            <source className="" src="/banner02.mp4" type="video/mp4" />
                            Your browser does not support the video tag.
                        </video>
                        <div style={overlayStyles}></div>
                        <div className="absolute inset-0 flex items-center justify-center text-white lg:text-8xl font-mono font-bold">

                            <div className="font-extrabold text-lg md:text-5xl [text-wrap:balance] bg-clip-text text-transparent bg-gradient-to-r from-slate-200/60 to-50% to-slate-200">Trusted by the most innovative minds in <span class="text-indigo-500 inline-flex flex-col">
                                <ul className="block text-left leading-tight [&_li]:block">
                                    <li>Road </li>
                                    <hr />
                                    <li>Revolution</li>
                                </ul>
                            </span></div>

                        </div>
                    </div>
                </div>
            </SwiperSlide>

            <SwiperSlide>
                <div>
                    <div style={containerStyles}>

                        <video
                            className="w-full"
                            // style={videoStyles}
                            autoPlay
                            loop
                            muted
                        >
                            <source className="" src="/banner04.mp4" type="video/mp4" />
                            Your browser does not support the video tag.
                        </video>
                        <div style={overlayStyles}></div>
                        <div className="absolute inset-0 flex items-center justify-center text-white lg:text-8xl font-mono font-bold">

                            <div className="font-extrabold text-lg md:text-5xl [text-wrap:balance] bg-clip-text text-transparent bg-gradient-to-r from-slate-200/60 to-50% to-slate-200">Trusted by the most innovative minds in <span class="text-indigo-500 inline-flex flex-col">
                                <ul className="block text-left leading-tight [&_li]:block">
                                    <li>Road </li>
                                    <hr />
                                    <li>Revolution</li>
                                </ul>
                            </span></div>

                        </div>
                    </div>
                </div>
            </SwiperSlide>

            
           
           
            
            <SwiperSlide>
                <div>
                    <div style={containerStyles}>

                        <video
                            className="w-full"
                            // style={videoStyles}
                            autoPlay
                            loop
                            muted
                        >
                            <source className="" src="/banner10.mp4" type="video/mp4" />
                            Your browser does not support the video tag.
                        </video>
                        <div style={overlayStyles}></div>
                        <div className="absolute inset-0 flex items-center justify-center text-white lg:text-8xl font-mono font-bold">

                            <div className="font-extrabold text-lg md:text-5xl [text-wrap:balance] bg-clip-text text-transparent bg-gradient-to-r from-slate-200/60 to-50% to-slate-200">Trusted by the most innovative minds in <span class="text-indigo-500 inline-flex flex-col">
                                <ul className="block text-left leading-tight [&_li]:block">
                                    <li>Road </li>
                                    <hr />
                                    <li>Revolution</li>
                                </ul>
                            </span></div>

                        </div>
                    </div>
                </div>
            </SwiperSlide>
        </Swiper>
    );
};

export default Banner;