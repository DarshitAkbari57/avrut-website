import gsap from 'gsap';
import ScrollTrigger from 'gsap/dist/ScrollTrigger';
import React, { useEffect, useRef } from 'react'
import { BsBarChartFill, BsBuildingFill, BsCheckSquareFill, BsPeopleFill } from 'react-icons/bs'
gsap.registerPlugin(ScrollTrigger);

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



    // useEffect(() => {
    //     gsap.to('.cards', {
    //         scrollTrigger: {
    //             trigger: '.cards',
    //             markers: true,
    //             start: "-20% 60%",
    //             end: "80% 0%",
    //             // scrub: true,
    //             toggleActions: "restart pause reverse pause"
    //         },
    //         x: 20,
    //         rotation: 360,
    //         duration: 1,
    //         ease: "none"
    //     });

    // })

    return (
        <>

            <section className="text-gray-700 body-font">
                <div className="container 2xl:px-10 md:px-5 py-10 md:py-20 mx-auto">
                    <div className="flex flex-wrap text-center ">
                        {card.map((e, index) => (
                            <div data-aos="zoom-in" data-aos-offset="50%" key={index} className="p-4 lg:w-1/4 md:w-1/2 w-full cards">
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