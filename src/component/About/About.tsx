import Link from "next/link";
import React from "react";
import "animate.css";

function About() {
  return (
    <>
      <div className="container mx-auto ">
        <div className="grid grid-cols-1 lg:grid-cols-2 justify-items-center items-center    px-4">
          <div className="animate__animated animate__fadeIn flex flex-col justify-center items-start w-full px-4">
            <div className="text-2xl md:text-4xl font-bold text-center md:text-start py-4 ">
              About <span className="text-primary ">Avrut Solutions</span>
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
          <div className="w-full flex ">
            <img className="m-auto" src="/images/about1.webp" alt="" />
          </div>
        </div>
      </div>
    </>
  );
}

export default About;
