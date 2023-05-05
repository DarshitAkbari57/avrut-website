import React from 'react';
import 'swiper/css';
import 'swiper/swiper-bundle.css';
import 'swiper/css/free-mode';
import 'swiper/css/autoplay';
import { Swiper, SwiperSlide } from 'swiper/react';
import { FreeMode, Autoplay } from 'swiper';
import { Link, useNavigate } from 'react-router-dom';

function Slider() {
    

    const navigate = useNavigate();
    const handelclick = () =>{
        window.scrollTo(0, 0);
        navigate('/getintouch')
    }


    return (
        <>
            <Swiper
                // modules={[Autoplay]}
                spaceBetween={0}
                slidesPerView={1}
                loop={true}
                // autoplay={{
                //     delay: 2000,
                //     disableOnInteraction: false
                // }}
                // onSlideChange={() => console.log('slide change')}
                onSwiper={(swiper) => console.log(swiper)}>


                <SwiperSlide>
                    <div className="lg:flex dark:bg-black animation" data-aos="fade-up">
                        <div className=' dark:text-white animation z-10  animate__animated animate__fadeInUp  animate_delay-4s absolute left-[0%] lg:left-[15%] xl:left-[10%] 2xl:left-[20%]  top-[30%] 2xl:text-start xl:text-start justify-self-center lg:text-start  md:text-center sm:text-center text-center w-[100%] sm:w-[100%] md:w-[100%] lg:w-[50%] xl:w-[50%] 2xl:w-[50%]' data-aos="fade-up">
                            <div className=''>
                                <div className='lg:text-7xl text-2xl font-semibold leading-tight '>Grow Your Products Through,Innovation And Creativity.</div>
                                    <button onClick={handelclick} className='p-3 px-4 mt-5  rounded-full bg-black text-white dark:bg-white  dark:text-black'>Get in Touch</button>
                            </div>
                        </div>
                        <div className='ml-auto lg:w-3/5 relative'>
                            <img src={require('../images/1.jpg')} className=' object-cover  h-[700px] w-full' alt="" />
                        </div>
                    </div>
                </SwiperSlide>
            </Swiper>
        </>
    )
}

export default Slider