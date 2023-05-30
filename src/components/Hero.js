import React from 'react';
import Aos from 'aos';
import 'aos/dist/aos.css';
import { useEffect } from 'react';
import { BsCodeSquare, BsEye, BsFillRocketTakeoffFill, BsPinFill } from "react-icons/bs";


function Hero() {

    useEffect(() => {

        Aos.init({ duration: 2000 });
    }, []);

    return (

        <>

            <div id='myElement' className='overflow-y-hidden' >
                <div className="px-5 sm:px-5 md:px-10 lg:px-10 xl:px-10 2xl:px-10 animation" data-aos="fade-up">
                    <div className="flex flex-col lg:text-start text-center w-full mt-10 sm:mt-20 lg:ml-3 ">
                        <h2 className="text-xl font-semibold text-black tracking-widest title-font mb-1 lg:ml-1 dark:text-white">ABOUT</h2>
                        <h1 className="text-lg     mb-4 text-black dark:text-white">We Are Bunch Of Creative Professional Nerds We We've Been Helping Companies Make Or Save Money With Their Products By Providing Visions Technical Solution With Innovative Design And Devlopment</h1>
                    </div>
                </div>

                <div className="px-5 py-5 sm:px-5 md:px-10 lg:px-10 xl:px-10 2xl:px-10 grid lg:grid-cols-3 gap-4 grid-cols-1 sm:justify-items-center ">
                    <div className="animation bg-slate-600 bg-opacity-10 border-2    border-black dark:border-white rounded-lg py-10 px-6 text-center" data-aos="fade-up">
                        <div className='w-16 h-16 bg-black dark:bg-slate-300 flex items-center justify-center rounded-full m-auto my-4'>
                            <BsFillRocketTakeoffFill className='dark:text-black text-white text-3xl animate-pulse' />
                        </div>
                        <h2 className="text-xl font-medium title-font text-gray-900  dark:text-white">Our Mission</h2>
                        <p className="text-base leading-relaxed mt-2">To Enable Business To Leverages The Power Digital Innovation And Artificial Intelligence By Building Scalable Sustainable And Viscous Technical Solutions.</p>
                    </div>
                    <div className="animation bg-slate-800 border-2 border-black dark:border-white bg-opacity-10 rounded-lg py-10 px-6 text-center" data-aos="fade-up">
                        <div className='w-16 h-16 bg-black border-2 border-white dark:bg-slate-300 flex items-center justify-center rounded-full m-auto my-4'>
                            <BsEye className='dark:text-black text-white text-3xl animate-pulse' />
                        </div>
                        <h2 className="text-xl font-medium title-font text-gray-900 dark:text-white">Our Vision</h2>
                        <p className="text-base leading-relaxed mt-2">To Early Lifelong Resheet Of Our Clients And Employees  By Consistently Providing The Highest Quality Software  And Cost Work Cultures.</p>
                    </div>
                    <div className="animation border-2 border-black dark:border-white  bg-slate-600 bg-opacity-10 rounded-lg py-10 px-6 text-center" data-aos="fade-up">
                        <div className='w-16 h-16 bg-black dark:bg-slate-300 flex items-center justify-center rounded-full m-auto my-4'>
                            <img src={require('../images/goal.png')} className='dark:text-black w-8 h-8 text-white text-3xl animate-pulse' />
                        </div>
                        <h2 className="text-xl font-medium title-font text-gray-900 dark:text-white">Our Goals</h2>
                        <p className="text-base leading-relaxed mt-2">Delivering Your Vision Through Visions Technical Solution We Are Transforming Business By Developing Products, Services, & Experience At Best.</p>
                    </div>
                    {/* <div className="animation border-2 border-black dark:border-white  bg-slate-600 bg-opacity-10 rounded-lg py-10 px-6 text-center" data-aos="fade-up">
                        <div className='w-16 h-16 bg-black dark:bg-slate-300 flex items-center justify-center rounded-full m-auto my-4'>
                            <BsCodeSquare className='dark:text-black text-white text-3xl animate-pulse' />
                        </div>
                        <h2 className="text-xl font-medium title-font text-gray-900 dark:text-white">Tech specialization</h2>
                        <p className="text-base leading-relaxed mt-2"> We Will Be The Next Moonshot Of Your Project Or We Are Building Next Generation
                        Products Platform & Experience  In The Below Technologies And Frameworks & Platform
                        React, Node, Amazon web Services ...</p>
                    </div> */}
                </div>
            </div>

            <div className="px-5 sm:px-5 md:px-10 lg:px-10 xl:px-10 2xl:px-10 animation my-5" data-aos="fade-up">
                <div className="flex flex-col lg:text-start text-center w-full  lg:ml-3 ">
                    <h2 className="text-2xl font-semibold py-4 text-black dark:text-white">Tech specialization</h2>
                    <p className="text-lg  mb-4 text-gray-900 dark:text-white">
                        We Will Be The Next Moonshot Of Your Project Or We Are Building Next Generation
                        Products Platform & Experience  In The Below Technologies And Frameworks & Platform
                        React, Node, Amazon web Services ...</p>
                </div>
            </div>
        </>

    )
}

export default Hero