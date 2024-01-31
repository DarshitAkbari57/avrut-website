import React, { useState } from 'react';
import education from '../images/asset 30.gif';
import logistic from '../images/asset 31.gif';
import Game from '../images/asset 32.gif';
import Ecom from '../images/asset 33.gif';
import Mplace from '../images/asset 34.gif';
import 'swiper/css';
import 'swiper/css/free-mode';
import 'swiper/css/autoplay';
import { Swiper, SwiperSlide } from 'swiper/react';

function Work() {


    const [activeTab, setActiveTab] = useState(1);

    const handleTabClick = (tabNumber: number) => {
        setActiveTab(tabNumber);
    };


    const placeholderImages = Array.from({ length: 9 }).fill('https://avrut.com/static/media/dematade.8b7b4793fac9b2305f79.png');
    return (
        <>
            <div className='bg-purple justify-items-center p-5 border-2'>
                <h1 className='mt-4 pt-5 mb-2 text-center capitalize text-4xl'>Browse Our
                    Digital Product
                    Design
                    Portfolio</h1>


                <hr className='w-1/5 mx-auto  border-2 my-5' />


                <div className="container mx-auto">
                    <div className="flex gap-3 justify-center my-5">
                        <button
                            className={`px-8 py-4 rounded-2xl  ${activeTab === 1 ? 'bg-primary  text-white' : 'bg-gray-200 '
                                }`}
                            onClick={() => handleTabClick(1)}
                        >
                            App Devlopment
                        </button>
                        <button
                            className={`px-8 py-4 rounded-2xl ${activeTab === 2 ? 'bg-primary  text-white' : 'bg-gray-200 '
                                }`}
                            onClick={() => handleTabClick(2)}
                        >
                            App Design
                        </button>
                        <button
                            className={`px-8 py-4 rounded-2xl ${activeTab === 3 ? 'bg-primary  text-white' : 'bg-gray-200 '
                                }`}
                            onClick={() => handleTabClick(3)}
                        >
                            Show all
                        </button>
                        <button
                            className={`px-8 py-4 rounded-2xl ${activeTab === 4 ? 'bg-primary  text-white' : 'bg-gray-200 '
                                }`}
                            onClick={() => handleTabClick(4)}
                        >
                            Web Design
                        </button>
                        <button
                            className={`px-8 py-4 rounded-2xl ${activeTab === 5 ? 'bg-primary  text-white' : 'bg-gray-200 '
                                }`}
                            onClick={() => handleTabClick(5)}
                        >
                            Dashboard
                        </button>
                    </div>

                    {/* Content for each tab */}
                    <div>
                        {activeTab === 1 &&

                            <>
                                <div className="grid grid-cols-3 gap-10">
                                    {placeholderImages.map((url: any, index) => (
                                        <div key={index}>
                                            <div className="rounded-lg h-[300px] shadow-md">
                                                <img className="object-cover h-full w-full rounded-2xl" src={url} alt={`Image ${index + 1}`} />
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            </>
                        }
                        {activeTab === 2 &&

                            <>

                                <SwiperSlide>
                                    <div className=' h-[250px]  shadow-md'>
                                        <img className='h-full w-full object-cover rounded-2xl' src="https://www.braincuber.com/_next/static/media/ourwork_imag8.36a0c688.png" alt="" />
                                    </div>
                                </SwiperSlide>
                            </>
                        }
                        {activeTab === 3 &&
                            <>
                                <SwiperSlide>
                                    <div className='mx-5 mt-5   bg-white rounded-lg p-5 shadow-md'>
                                        <img src="https://avrut.com/static/media/dematade.8b7b4793fac9b2305f79.png" alt="" />
                                    </div>
                                </SwiperSlide>
                                <SwiperSlide>
                                    <div className='mx-5 mt-5   bg-white rounded-lg p-5 shadow-md'>
                                        <img src="https://avrut.com/static/media/dematade.8b7b4793fac9b2305f79.png" alt="" />
                                    </div>
                                </SwiperSlide>
                                <SwiperSlide>
                                    <div className='mx-5 mt-5   bg-white rounded-lg p-5 shadow-md'>
                                        <img src="https://avrut.com/static/media/dematade.8b7b4793fac9b2305f79.png" alt="" />
                                    </div>
                                </SwiperSlide>
                                <SwiperSlide>
                                    <div className='mx-5 mt-5   bg-white rounded-lg p-5 shadow-md'>
                                        <img src="https://avrut.com/static/media/dematade.8b7b4793fac9b2305f79.png" alt="" />
                                    </div>
                                </SwiperSlide>
                            </>
                        }
                    </div>


                </div>


                <div className='text-center'>
                    <button className='p-3 py-2 px-10 font-normal mt-5 border-2 rounded-xl  text-white bg-primary '>View all</button>
                </div>
            </div>

        </>
    )
}

export default Work