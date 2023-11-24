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


    // const containerStyles = {
    //     position: 'relative',
    // };



    const overlayStyles = {
        position: 'absolute',
        top: 0,
        left: 0,
        width: '100%',
        height: '100%',
        background: 'rgba(0, 0, 0, 0.1)',
    };




    return (
        <Swiper
            spaceBetween={30}
            centeredSlides={true}
            autoplay={{
                delay: 2000,
                disableOnInteraction: false,
            }}
            pagination={{
                clickable: true,
            }}
            navigation={true}
            modules={[Autoplay, Pagination, Navigation]}
            className="mySwiper"
        >
            {/* <SwiperSlide>
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
                            <source className="" src="/banner0. " type="video/mp4" />
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
            </SwiperSlide> */}

            <SwiperSlide>
                <img className='object-cover w-full h-screen bg-black opacity-90' src="./banner0 (1).jpg" alt="" />
                <div>
                    <div style={overlayStyles}></div>
                    <div className="absolute inset-0 flex items-center justify-center text-white lg:text-8xl font-mono font-bold">

                        <div className="font-extrabold text-lg md:text-8xl [text-wrap:balance] bg-clip-text text-transparent bg-gradient-to-r text-white">WORK WITH <span className=" inline-flex flex-col">
                            <ul className="block text-left leading-tight [&_li]:block">
                                <br />
                                <li>PROFESSIONALS</li>
                                <hr />
                            </ul>
                        </span>
                            <li className='lg:text-xl lg:my-10 text-xs  mx-auto text-center text-gray-300'>Unlock Your Potential: Transform Your Fitness Journey <br /> with Our Premier Gym Experience!</li>
                            <div className='flex gap-5 justify-center items-center'>
                                <button className="before:ease text-lg relative h-12 w-40 overflow-hidden border border-green-500 bg-green-500 text-black font-bold shadow-2xl transition-all before:absolute before:right-0 before:top-0 before:h-12 before:w-6 before:translate-x-12 before:rotate-6 before:bg-white before:opacity-10 before:duration-700 hover:shadow-green-500 hover:before:-translate-x-40">
                                    <span relative="relative z-10">START NOW</span>
                                </button>
                                <button className="before:ease text-lg relative h-12 w-40 overflow-hidden border border-green-500 bg-green-500 text-white shadow-2xl transition-all before:absolute before:right-0 before:top-0 before:h-12 before:w-6 before:translate-x-12 before:rotate-6 before:bg-white before:opacity-10 before:duration-700 hover:shadow-green-500 hover:before:-translate-x-40">
                                    <span relative="relative z-10">LEARN MORE</span>
                                </button>
                            </div>
                        </div>

                    </div>
                </div>
            </SwiperSlide>
            {/* <SwiperSlide> */}
            {/* <img className='object-cover w-full h-screen bg-black opacity-80' src="./banner0 (2).jpg" alt="" />
            </SwiperSlide>
            <SwiperSlide>
                <img className='object-cover w-full h-screen bg-black opacity-80' src="./banner0 (3).jpg" alt="" />
            </SwiperSlide>
            <SwiperSlide>
                <img className='object-cover w-full h-screen bg-black opacity-80' src="./banner0 (4).jpg" alt="" />
            </SwiperSlide>
            <SwiperSlide>
                <img className='object-cover w-full h-screen bg-black opacity-80' src="./banner0 (5).jpg" alt="" />
            </SwiperSlide>
            <SwiperSlide>
                <img className='object-cover w-full h-screen bg-black opacity-80' src="./banner0 (6).jpg" alt="" />
            </SwiperSlide>
            <SwiperSlide>
                <img className='object-cover w-full h-screen bg-black opacity-80' src="./banner0 (7).jpg" alt="" />
            </SwiperSlide>
            <SwiperSlide>
                <img className='object-cover w-full h-screen bg-black opacity-80' src="./banner0 (8).jpg" alt="" />
            </SwiperSlide>
            <SwiperSlide>
                <img className='object-cover w-full h-screen bg-black opacity-80' src="./banner0 (9).jpg" alt="" />
            </SwiperSlide>
            <SwiperSlide>
                <img className='object-cover w-full h-screen bg-black opacity-80' src="./banner0 (10).jpg" alt="" />
            </SwiperSlide>
            <SwiperSlide>
                <img className='object-cover w-full h-screen bg-black opacity-80' src="./banner0 (11).jpg" alt="" />
            </SwiperSlide> */}
        </Swiper>
    );
};

export default Banner;