import React, { useEffect, useState } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/effect-coverflow';
import 'swiper/css/pagination';

// import './styles.css';

// import required modules
import { EffectCoverflow, Pagination } from 'swiper/modules';





const Testimonial = () => {



    const [reviews, setReviews] = useState([])



    useEffect(() => {
        fetch('http://localhost:5000/review')
            .then(res => res.json())
            .then(data => {

                setReviews(data)
            })
    }, [])




    return (
        <div>
            <>
                <Swiper
                 spaceBetween={30}
                 centeredSlides={true}
                 autoplay={{
                     delay: 3500,
                     disableOnInteraction: false,
                 }}
                    effect={'coverflow'}
                    grabCursor={true}
                    // centeredSlides={true}
                    slidesPerView={'auto'}
                    coverflowEffect={{
                        rotate: 50,
                        stretch: 0,
                        depth: 100,
                        modifier: 1,
                        slideShadows: true,
                    }}
                    
                    modules={[EffectCoverflow, Pagination]}
                    className="mySwiper"
                >

                    {
                        reviews && reviews.map(review=><SwiperSlide key={review._id}>

                            <section className=" dark:bg-gray-900">
                                <div className="max-w-6xl px-6 py-10 mx-auto">
                                    
    
                                    <h1 className="mt-2 text-2xl font-semibold text-gray-800 capitalize lg:text-3xl dark:text-white">
                                        What clients saying
                                    </h1>
    
                                    <main className="relative z-20 w-full mt-8 md:flex md:items-center xl:mt-12">
                                        <div className="absolute w-full bg-blue-600 -z-10 md:h-96 rounded-2xl"></div>
    
                                        <div className="w-full p-6 bg-blue-600 md:flex md:items-center rounded-2xl md:bg-transparent md:p-0 lg:px-12 md:justify-evenly">
                                            <img className="h-24 w-24 md:mx-6 rounded-full object-cover shadow-md md:h-[32rem] md:w-80 lg:h-[36rem] lg:w-[26rem] md:rounded-2xl" src={review.image_url} alt="client photo" />
    
                                            <div className="mt-2 md:mx-6">
                                                <div>
                                                    <button disabled className="btn text-2xl px-6 disabled  py-2 bg-gradient-to-r rounded-md shadow-2xl text-white font-serif from-blue-600 to-indigo-900">{review.name}</button>
                                                    <p className="text-blue-200 ">{review.location}</p>
                                                </div>
    
                                                <p className="mt-4 text-lg leading-relaxed text-white md:text-xl"> {review.testimonial}</p>
    
                                                <div className="flex items-center justify-between mt-6 md:justify-start">
                                                </div>
                                            </div>
                                        </div>
                                    </main>
                                </div>
                            </section>
                        </SwiperSlide>)
                    }

                </Swiper>
            </>
        </div>
    );
};

export default Testimonial;