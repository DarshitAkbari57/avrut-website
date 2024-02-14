import Link from "next/link";
import React, { useEffect, useRef, useState } from "react";
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger';

// Register ScrollTrigger with GSAP
gsap.registerPlugin(ScrollTrigger);

function About() {




  useEffect(() => {
    // Animation for the left side
    gsap.from('.left-animation', {
      x: '-100%',
      opacity: 0,
      duration: 1,
      scrollTrigger: {
        trigger: '.left-animation',
        start: 'top 80%', // Adjust the start position as needed
        end: '+=300', // Adjust the end position as needed
        scrub: 1, // Smooth scrubbing effect
      },
    });

    // Animation for the right side
    gsap.from('.right-animation', {
      x: '100%',
      opacity: 0,
      duration: 1,
      scrollTrigger: {
        trigger: '.right-animation',
        start: 'top 80%', // Adjust the start position as needed
        end: '+=300', // Adjust the end position as needed
        scrub: 1, // Smooth scrubbing effect
      },
    });
  }, []);


  return (
    <>
      <div data-aos="fade-up" className="container  mx-auto overflow-hidden">
        <div className="grid grid-cols-1 lg:grid-cols-2 justify-items-center items-center    px-4">
          <div className=" flex flex-col justify-center items-start w-full px-4 left-animation">
            <div className="text-2xl md:text-4xl font-bold text-center md:text-start py-4 ">
              About <span className="text-transparent text_stroke ">Avrut Solutions</span>
            </div>
            <p className="py-2 text-center md:text-start">
              Avrut Solutions is an Indian-based custom software development
              company specializing in mobile and web app development. With over
              250+ projects offered to companies across the globe, we have the
              expertise needed to develop, test, and deploy tailored software
              solutions.
            </p>
            <p className="py-2 text-center md:text-start">
              We have talented teams of React, React Native, Angular, Node, and
              Flutter developers and designers who are highly passionate about
              designing solutions for various industries. Avrut Solutions has
              developed innovative digital products for eCommerce, finance,
              manufacturing, wellness, travel, and more.
            </p>
            <p className="py-2 text-center md:text-start">
              Count on us for custom, responsive software solutions built with
              cutting-edge technologies designed to add value.
            </p>

            <div className="w-full text-center lg:text-start my-4">
              <Link
                href="/about-us"
                className="px-6 py-2 rounded bg-primary text-white"
              >
                Learn more
              </Link>
            </div>
          </div>
          <div className="w-full flex right-animation">
            <img className="m-auto" src="/images/about1.webp" alt="" />
          </div>
        </div>
      </div>
    </>
  );
}

export default About;
