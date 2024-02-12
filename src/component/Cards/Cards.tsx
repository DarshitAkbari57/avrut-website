import React, { useEffect, useRef } from 'react'
import { BsBarChartFill, BsBuildingFill, BsCheckSquareFill, BsPeopleFill } from 'react-icons/bs'
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

function Cards() {

    const card = [
        {
            title: "6+ Years in Industry",
            icon: <BsBuildingFill />
        },
        {
            title: "100+ Happy Clients",
            icon: <BsBarChartFill />
        },
        {
            title: "10+ Expert Employees",
            icon: < BsPeopleFill />
        },
        {
            title: "40+Completed Projects",
            icon: < BsCheckSquareFill />
        }
    ]

    const sectionRef = useRef(null);

    // useEffect(() => {
    //     if (typeof window !== 'undefined') {
    //         gsap.registerPlugin(ScrollTrigger);

    //         const sectionElement = sectionRef.current;

    //         if (sectionElement) {
    //             const sectionTimeline = gsap.timeline({
    //                 paused: true,
    //                 scrollTrigger: {
    //                     trigger: sectionElement,
    //                     start: 'top 80%', // Adjust the start position based on your preference
    //                     end: 'bottom top',
    //                     scrub: true,
    //                 },
    //             });

    //             sectionTimeline.to(sectionElement, { opacity: 0, y: 50, duration: 2, ease: 'power3.inOut' });

    //             sectionTimeline.play();

    //             return () => {
    //                 sectionTimeline.kill();
    //             };
    //         }
    //     }
    // }, []);



    return (
        <>

            <section className="text-gray-700 body-font">
                <div className="container md:px-5 py-10 md:py-20 mx-auto">
                    <div className="flex flex-wrap text-center">
                        {card.map((e, index) => (
                            <div key={index} className="p-4 md:w-1/4 sm:w-1/2 w-full">
                                <div className="group px-4 rounded-lg transform transition duration-500 hover:scale-110 flex gap-4 flex-col md:flex-row justify-center items-center">
                                    <div className='w-max flex justify-center text-4xl mb-3 p-8 border border-primary text-primary rounded-full bg-purple shadow-xl '>
                                        {e?.icon}
                                    </div>
                                    <h2 className="title-font font-medium text-lg md:text-xl text-gray-900 text-start">
                                        {e?.title}
                                    </h2>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>
        </>
    )
}

export default Cards