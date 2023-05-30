import Aos from 'aos';
import React from 'react'
import { useEffect } from 'react';
import Nav from './Nav'

function Aboutus() {
    useEffect(() => {
        Aos.init({ duration: 3000 });
    }, []);


    return (
        <>
            <div className='z-10 animate__animated animate__fadeInUp dark:text-white dark:bg-black '>
                <div className='px-5 sm:px-5 md:px-10 lg:px-10 xl:px-10 2xl:px-10 grid justify-items-center m-auto lg:grid-cols-2 grid-cols-1 py-5  animation' >
                    <div className='flex items-center lg:text-4xl text-2xl font-semibold lg:text-center'>
                        5+ years of successful projects and digital expertise that we can’t wait to share with you.
                    </div>
                    <div className='lg:px-20 my-10'>
                        <p className='mt-5'>
                            we are launch of creative professional needs we've been helping companies make or save money with their products by proviading visions technical solution with innovative design and devlopment
                            At Avrut solutions we are aware that creating client-oriented softwares takes a minutes of technical excellence  and  our communication .
                            We are client-oriented and crazy enough to innovate and create new opportunities , we provides reliable and innovative technology solution to successfully meet clients business goal
                        </p>
                    </div>
                </div>
                <div className=' px-5 sm:px-5 md:px-10 lg:px-10 xl:px-10 2xl:px-10 '>
                    <img src={require('../images/about1.jpg')} className="object-cover h-full w-full" alt="" />
                </div>
            </div>

        </>
    )
}

export default Aboutus