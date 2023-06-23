import React from 'react'
import Culture from '../components/Culture'
import Hero from '../components/Hero'
import Sample from '../components/Sample'
import Slider from '../components/Slider'
import Testimonial from '../components/Testimonial'
import Footer from '../components/Footer'
import Nav from '../components/Nav'
import Service from '../components/Service'

function Home() {
    return (
        <>
            <Nav />
            <Slider />
            <Hero />
            <Sample />
            <Service/>
            <Culture />
            <Testimonial />
            <Footer />
        </>
    )
}

export default Home