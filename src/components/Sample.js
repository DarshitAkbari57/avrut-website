import Aos from 'aos';
import React, { useState } from 'react';
import { useEffect } from 'react';
import Works from './Works';

function Sample() {
    useEffect(() => {
        Aos.init({ duration: 2000 });
    }, []);

    const [activeTab, setActiveTab] = useState(1);
    const [more, setMore] = useState(false);

    const changeTab = (tabNumber) => {
        setActiveTab(tabNumber);
    };
    const view = Works.filter((e) => {
        if (activeTab === 1) {
            return e.type == "web"
        } else if (activeTab === 2) {
            return e.type == 'app'
        }
    })
    const data = more ? view :view.slice(0,6)
 
    return (
        <>
            <div className='animation' data-aos="zoom-in">
                <section className="text-gray-600 dark:text-white body-font">
                    <div className="px-5 sm:px-5 md:px-10 lg:px-10 xl:px-10 2xl:px-10 py-7">
                        <div className="flex justify-center mb-4">
                            <button
                                className={`px-4 py-2 rounded-tl-lg focus:outline-none ${activeTab === 1 ? 'bg-slate-400 text-black font-semibold' : 'bg-white text-black font-semibold'
                                    }`}
                                onClick={() => changeTab(1)}
                            >
                                Web
                            </button>
                            <button
                                className={`px-4 py-2 rounded-tr-lg  focus:outline-none ${activeTab === 2 ? 'bg-slate-400 text-black font-semibold' : 'bg-white text-black font-semibold'
                                    }`}
                                onClick={() => changeTab(2)}
                            >
                                App
                            </button>
                        </div>
                        <div className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3 2xl:grid-cols-3">
                            {data.map((e) => {
                                return (
                                    <>
                                        <div className="p-4  sm:mb-0 mb-6 animation" >
                                            <a href="#" className="h-72   ease-in-out duration-300 block group relative mx-2 overflow-hidden shadow-lg rounded-lg">
                                                <img src={e.Image} className="absolute z-0  w-full h-full" />
                                                <div className="absolute gradient transition duration-300 group-hover:bg-black group-hover:opacity-70 w-full h-72 md:h-96 z-100"></div>
                                                <div className="absolute  right-96 bottom-0 top-0 p-6 z-30  transition duration-300 h-full group-hover:translate-y-0 group-hover:left-0 delay-200">
                                                    <div className="h-1/2 w-80">
                                                        <h2 className="font-bold text-white  transition capitalize duration-300 text-xl">{e.name}</h2>
                                                        <p className="text-white pb-4 opacity-0 transition duration-300 group-hover:opacity-100 capitalize">{e.detail}</p>
                                                        {/* <h4 className='text-md font-semibold'>{e.language}</h4> */}
                                                    </div>
                                                </div>
                                            </a>
                                            <div className='ml-4'>
                                                <h2 className="text-xl font-medium title-font text-gray-900 mt-2 dark:text-white">{e.name}</h2>
                                            </div>
                                        </div>
                                    </>
                                )
                            })
                            }
                        </div>
                    </div>

                    <div className='text-center' >
                        <button onClick={()=>{setMore(!more)}} className='bg-white text-black px-3 py-1 rounded-full'>
                            {more? <span>View Less</span>:                        
                            <span>View More</span>
                            }
                        </button>
                    </div>
                </section>
            </div>


        </>
    )
}

export default Sample