import React, { useEffect } from 'react'
import gsap from 'gsap'
import ScrollTrigger from 'gsap/dist/ScrollTrigger'
import { start } from 'repl'

const TechnologyServices = ({ title, titleSpan, content, services, Image }: any) => {



    return (
        <div><div className='grid grid-cols-1 md:grid-cols-2 gap-6 py-20 bg-purple px-5 md:px-20'>
            <div>
                <p className='text-4xl font-bold text-primary py-2'>{title} <span className='text-black'> {titleSpan}</span></p>
                <p>{content}</p>
                <img className={`${services.length > 4 ? " md:h-[800px]" : "h-[400px]"} mt-8 rounded-lg w-full object-cover`} src={Image} alt="" />
            </div>
            <div>
                {services.map((e: any) => {
                    return (
                        <>
                            <div className='card1 border rounded-2xl border-primary flex p-4 gap-3 bg-white mb-5 hover:scale-105 duration-300 hover:shadow-md hover:shadow-primary'>
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
        </div></div>
    )
}

export default TechnologyServices