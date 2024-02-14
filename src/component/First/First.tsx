import React, { useEffect, useRef } from "react";
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);





function First({ title, subtitle, MainBanner }: any) {


  const timeline = gsap.timeline({
    scrollTrigger: {
      trigger: ".text2",
      start: "50% 50%",
      end: "20%",
      markers: false,
      scrub: 1,
    }
  })

  useEffect(() => {
    gsap.to(".purple", {
      rotation: 360,
      duration: 2,
      repeat: -1

      ,
      repeatDelay: 2,
      ease: 'bounce.in'
    });
  }, [])


  useEffect(() => {
    // Animation for the left side
    gsap.to('.text1', {
      ease: "back.out",
      opacity: 1,
      duration: 2.5,
      scrollTrigger: {
        trigger: '.text1',
        start: '10% 20%', // Adjust the start position as needed
        end: '10% 20%', // Adjust the end position as needed
        scrub: true, // Smooth scrubbing effect
        markers: false
      },
    });
  }, []);

  return (
    <>
      <div className="relative bg-gradient-to-r from-purple-600 to-blue-600 h-screen md:h-screen text-white overflow-hidden">
        <div className="absolute inset-0">
          <img
            src={MainBanner}
            alt="Background Image"
            className="object-cover object-center w-full h-full"
          />
          <div className="absolute inset-0 bg-black opacity-50"></div>
        </div>

        <div className="relative z-10 flex flex-col justify-center items-center h-full text-center  px-5 md:max-w-4xl m-auto mt-2">
          <h1 className="text-3xl px-3 md:text-5xl font-bold leading-tight mb-5 text1 ">
            {title}
          </h1>
          <p className="text-lg text-gray-300 mb-6 text-wrap w-4/5 text2">
            {subtitle}
          </p>

          <a
            href="#contact"
            className="bg-white purple text-primary py-2 mt-2 px-6 rounded text-lg font-semibold transition duration-300 ease-in-out transform hover:scale-105 hover:shadow-lg"
          >
            Book now
          </a>
        </div>
      </div>
    </>
  );
}

export default First;
