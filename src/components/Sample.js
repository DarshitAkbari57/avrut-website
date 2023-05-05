import Aos from 'aos';
import React from 'react';
import { useEffect } from 'react';

function Sample() {
    useEffect(()=>{
        Aos.init({duration: 2000});
},[]);
    return (
        <>
            <div className=''>
                <section className="text-gray-600 dark:text-white body-font">
                    <div className="px-5 sm:px-5 md:px-10 lg:px-10 xl:px-10 2xl:px-10 py-7 ">
                        <div className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
                            <div className="p-4  sm:mb-0 mb-6 animation" data-aos="zoom-in">
                                <div className="rounded-lg h-80 overflow-hidden">
                                    <img alt="content" className="object-cover object-center h-full w-full hover:scale-110 transition ease-in duration-300" src={require('../images/s1.png')} />
                                </div>
                                <h1 className='mt-4'>UI/UX Design</h1>
                                <h2 className="text-xl font-medium title-font text-gray-900 mt-2 dark:text-white">Emulsion</h2>
                            </div>
                            <div className="p-4  sm:mb-0 mb-6 animation" data-aos="zoom-in">
                                <div className="rounded-lg h-80 overflow-hidden">
                                    <img alt="content" className="object-cover object-center h-full w-full hover:scale-110 transition ease-in duration-300" src={require('../images/s2.jpg')} />
                                </div>
                                <h1 className='mt-4'>UI/UX Design</h1>
                                <h2 className="text-xl font-medium title-font text-gray-900 mt-2 dark:text-white">In Powered Lights</h2>
                            </div>
                            <div className="p-4  sm:mb-0 mb-6 animation"  data-aos="zoom-in">
                                <div className="rounded-lg h-80 overflow-hidden">
                                    <img alt="content" className="object-cover object-center h-full w-full hover:scale-110 transition ease-in duration-300" src={require('../images/s3.jpg')} />
                                </div>
                                <h1 className='mt-4'>UI/UX Design</h1>
                                <h2 className="text-xl font-medium title-font text-gray-900 mt-2 dark:text-white">Money Tap</h2>
                            </div>
                            <div className="p-4  sm:mb-0 mb-6 animation"  data-aos="zoom-in">
                                <div className="rounded-lg h-80 overflow-hidden">
                                    <img alt="content" className="object-cover object-center h-full w-full hover:scale-110 transition ease-in duration-300" src={require('../images/s4.jpg')} />
                                </div>
                                <h1 className='mt-4'>Web Design</h1>
                                <h2 className="text-xl font-medium title-font text-gray-900 mt-2 dark:text-white">Interviewer.AI</h2>
                            </div>
                            <div className="p-4  sm:mb-0 mb-6 animation"  data-aos="zoom-in">
                                <div className="rounded-lg h-80 overflow-hidden">
                                    <img alt="content" className="object-cover object-center h-full w-full hover:scale-110 transition ease-in duration-300" src={require('../images/s5.jpg')} />
                                </div>
                                <h1 className='mt-4'>Web Design</h1>
                                <h2 className="text-xl font-medium title-font text-gray-900 mt-2 dark:text-white">Art Stock
                                    Exchange</h2>
                            </div>
                            <div className="p-4  sm:mb-0 mb-6 animation"  data-aos="zoom-in">
                                <div className="rounded-lg h-80 overflow-hidden">
                                    <img alt="content" className="object-cover object-center h-full w-full hover:scale-110 transition ease-in duration-300" src={require('../images/s6.jpg')} />
                                </div>
                                <h1 className='mt-4'>Web Design</h1>
                                <h2 className="text-xl font-medium title-font text-gray-900 mt-2 dark:text-white">Care.Com</h2>
                            </div>
                            <div className="p-4  sm:mb-0 mb-6 animation"  data-aos="zoom-in">
                                <div className="rounded-lg h-80 overflow-hidden">
                                    <img alt="content" className="object-cover object-center h-full w-full hover:scale-110 transition ease-in duration-300" src={require('../images/s7.png')} />
                                </div>
                                <h1 className='mt-4'>Web Design</h1>
                                <h2 className="text-xl font-medium title-font text-gray-900 mt-2 dark:text-white">Enspyre Digital</h2>
                            </div>
                            <div className="p-4  sm:mb-0 mb-6 animation"  data-aos="zoom-in">
                                <div className="rounded-lg h-80 overflow-hidden">
                                    <img alt="content" className="object-cover object-center h-full w-full hover:scale-110 transition ease-in duration-300" src={require('../images/s8.png')} />
                                </div>
                                <h1 className='mt-4'>UI/UX Design</h1>
                                <h2 className="text-xl font-medium title-font text-gray-900 mt-2 dark:text-white">Outflue</h2>
                            </div>
                            <div className="p-4  sm:mb-0 mb-6 animation"  data-aos="zoom-in" >
                                <div className="rounded-lg h-80 overflow-hidden">
                                    <img alt="content" className="object-cover object-center h-full w-full hover:scale-110 transition ease-in duration-300" src={require('../images/s9.png')} />
                                </div>
                                <h1 className='mt-4'>Web Design</h1>
                                <h2 className="text-xl font-medium title-font text-gray-900 mt-2 dark:text-white">Momu Bank</h2>
                            </div>
                        </div>
                    </div>
                </section>
               
            </div>
        </>
    )
}

export default Sample