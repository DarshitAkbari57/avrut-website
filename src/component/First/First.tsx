import React from "react";
import 'aos/dist/aos.css';

function First({ title, subtitle, MainBanner }: any) {
  return (
    <>
      <div className="relative bg-gradient-to-r from-purple-600 to-blue-600 py-4 md:py-2 h-max md:h-screen text-white overflow-hidden">
        <div className="absolute inset-0">
          <img
            data-aos="zoom-in"
            src={MainBanner}
            alt="Background Image"
            className="object-cover object-center w-full h-full"
          />
          <div className="absolute inset-0 bg-black opacity-50"></div>
        </div>

        <div data-aos='fade-up' className="relative z-10 flex flex-col justify-center items-center h-full text-center  px-5 md:max-w-4xl m-auto mt-2">
          <h1 className="text-3xl px-3 md:text-5xl font-bold leading-tight mb-5 text1 ">
            {title}
          </h1>
          <p className="text-lg text-gray-300 mb-6 text-wrap w-4/5 text2">
            {subtitle}
          </p>

          <a
            href="#contact"
            className="bg-white  text-primary py-2 mt-2 px-6 rounded text-lg font-semibold transition duration-300 ease-in-out transform hover:scale-105 hover:shadow-lg"
          >
            Book now
          </a>
        </div>
      </div>
    </>
  );
}

export default First;
