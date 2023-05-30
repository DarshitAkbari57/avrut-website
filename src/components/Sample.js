import Aos from 'aos';
import React from 'react';
import { useEffect } from 'react';
import Works from './Works';

function Sample() {
    useEffect(() => {
        Aos.init({ duration: 2000 });
    }, []);
    return (
        <>
            <div className=''>
                <section className="text-gray-600 dark:text-white body-font">
                    <div className="px-5 sm:px-5 md:px-10 lg:px-10 xl:px-10 2xl:px-10 py-7 ">
                        <div className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3 2xl:grid-cols-3">

                            {Works.map((e) => {
                                return (
                                    <>
                                        <div className="p-4  sm:mb-0 mb-6 animation" data-aos="zoom-in">
                                            <a href="#" className="h-80  ease-in-out duration-300 block group relative mx-2 overflow-hidden shadow-lg rounded-lg">
                                                <img src={e.Image} className="absolute z-0  w-full h-full" />
                                                <div className="absolute gradient transition duration-300 group-hover:bg-black group-hover:opacity-70 w-full h-72 md:h-96 z-100"></div>
                                                <div className="absolute  right-96 bottom-0 top-0 p-6 z-30  transition duration-300 h-full group-hover:translate-y-0 group-hover:translate-x-96 delay-200">
                                                    <div className="h-1/2 w-80">
                                                        <h2 className="font-bold text-white  transition capitalize duration-300 text-xl">{e.name}</h2>
                                                        <p className="text-white pb-4 opacity-0 transition duration-300 group-hover:opacity-100 capitalize">{e.detail}</p>
                                                    </div>
                                                </div>
                                            </a>
                                            <div className='ml-4'>
                                                <h1 className='mt-4'>{e.language}</h1>
                                                <h2 className="text-xl font-medium title-font text-gray-900 mt-2 dark:text-white">{e.name}</h2>
                                            </div>
                                        </div>
                                    </>
                                )
                            })
                            }
                        </div>
                    </div>
                </section>
            </div>
        </>
    )
}

export default Sample