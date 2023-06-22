import React from 'react';
import 'swiper/css';
import 'swiper/swiper-bundle.css';
import 'swiper/css/free-mode';
import 'swiper/css/autoplay';
import { Swiper, SwiperSlide } from 'swiper/react';
import { FreeMode, Autoplay } from 'swiper';
import testi from './Testi';

function Testimonial() {
    return (
        <>
            <Swiper
                modules={[Autoplay]}
                spaceBetween={0}
                slidesPerView={1}
                loop={true}
                autoplay={{
                    delay: 2000,
                    disableOnInteraction: false
                }}
                speed={4000}
                onSlideChange={() => console.log('slide change')}
                onSwiper={(swiper) => console.log(swiper)} >

                {/* items */}

                {testi.map((e) => {
                    return (
                        <>
                            <SwiperSlide>
                                <section className="text-black body-font mt-10 bg-white dark:bg-black dark:text-white animation" data-aos="zoom-in-up">
                                    <div className="px-5 sm:px-5 md:px-10 lg:px-10 xl:px-10 2xl:px-10 py-10">
                                        <div className="xl:w-1/2 lg:w-3/4 w-full mx-auto text-center">
                                            <img alt="testimonial" className="w-20 h-20 mb-8 p-2  object-center rounded-full inline-block border-2 border-gray-200 bg-black" src={e.Image} />
                                            <p className="leading-relaxed text-lg">{e.detail}</p>
                                            <h2 className="text-black dark:text-white mt-3 font-medium title-font tracking-wider text-sm">{e.name}</h2>
                                            {/* <p className="text-gray-500">Senior Product Designer</p> */}
                                        </div>
                                    </div>
                                </section>
                            </SwiperSlide>
                        </>
                    )
                })


                }









            </Swiper>
        </>
    )
}

export default Testimonial