import React, { useEffect, useRef } from 'react'
import ScrollTrigger from 'gsap/dist/ScrollTrigger'
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';



if (typeof window !== 'undefined') {
    gsap.registerPlugin(ScrollTrigger, useGSAP);
}

const TechnologyServices = ({ title, titleSpan, content, services, Image }: any) => {

    const main = useRef<HTMLElement | any>();

    // useGSAP(
    //     () => {
    //         const boxes = gsap.utils.toArray('.box');
    //         boxes.forEach((box: any) => {
    //             gsap.to(box, {
    //                 x: 50,
    //                 ease: "bounce.in",
    //                 scrollTrigger: {
    //                     trigger: box,
    //                     start: 'bottom bottom',
    //                     end: 'top 20%',
    //                     scrub: true,
    //                     // markers: true,
    //                 },

    //                 duration: 12000
    //             });
    //         });
    //     },
    //     { scope: main }
    // );

    return (
        <div className='grid grid-cols-1 md:grid-cols-2 gap-6 py-5 md:py-10 lg:py-20 bg-purple px-5 lg
        
        
        :px-20 overflow-x-hidden' ref={main}>
            <div data-aos="fade-right">
                <p className='text-2xl md:text-4xl font-bold text-primary py-2'>{title} <span className='text-black'> {titleSpan}</span></p>
                <p>{content}</p>
                <img className={`${services.length > 4 ? " md:h-[800px]" : "h-[400px]"} mt-8 rounded-lg w-full object-cover`} src={Image} alt="" />
            </div>
            <div className='' data-aos="fade-left">
                {services.map((e: any) => {
                    return (
                        <>
                            <div className='card1 border box rounded-2xl border-primary flex p-4 gap-3 bg-white mb-5 hover:scale-105 duration-300 hover:shadow-md hover:shadow-primary'>
                                <div className='text-2xl text-primary font-bold'>0{e.numbers}.</div>
                                <div>
                                    <h1 className='text-xl font-semibold'>{e.main}</h1>
                                    <p className='my-2'>{e.content}</p>
                                </div>
                            </div>
                        </>
                    )
                })}

            </div>
        </div>
    )
}

export default TechnologyServices