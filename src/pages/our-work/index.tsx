import Portfolio from '@/component/Portfolio/Portfolio'
import Work from '@/component/Work/Work'
import React from 'react'

function Ourwork() {
    return (
        <>
            <div className="relative bg-gradient-to-r from-purple-600 to-blue-600 h-screen text-white overflow-hidden">
                <div className="absolute inset-0">
                    <img src="https://images.unsplash.com/photo-1522252234503-e356532cafd5?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w0NzEyNjZ8MHwxfHNlYXJjaHw2fHxjb2RlfGVufDB8MHx8fDE2OTQwOTg0MTZ8MA&ixlib=rb-4.0.3&q=80&w=1080" alt="Background Image" className="object-cover object-center w-full h-full" />
                    <div className="absolute inset-0 bg-black opacity-50"></div>
                </div>

                <div className="relative z-10 flex flex-col justify-center items-center h-full text-center">
                    <a href="#" className="bg-white text-primary py-2 px-6 rounded-xl text-lg font-semibold transition duration-300 ease-in-out transform hover:scale-105 hover:shadow-lg">Testimonial</a>
                    <h1 className="text-5xl font-bold leading-tight ">Our Work</h1>
                    <p className="text-lg text-gray-300 mb-8">
                        Our sitemap will go through the content of our website and bring you to
                        <br />
                        the sites you wish to see.</p>
                </div>
            </div>
            <Work />



        </>
    )
}

export default Ourwork