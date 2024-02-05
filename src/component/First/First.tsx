import React from "react";

function First({ title, subtitle, MainBanner }: any) {
  return (
    <>
      <div className="relative bg-gradient-to-r from-purple-600 to-blue-600 h-screen md:h-screen text-white overflow-hidden">
        <div className="absolute inset-0">
          {/* <img
            src="https://miro.medium.com/v2/resize:fit:1358/1*LpBTv_cXZ6MG3Gddb0f_Kg.png"
            alt="Background Image"
            className="object-cover object-center w-full h-full"
          /> */}
          <img
            src={MainBanner}
            alt="Background Image"
            className="object-cover object-center w-full h-full"
          />
          <div className="absolute inset-0 bg-black opacity-50"></div>
        </div>

        <div className="relative z-10 flex flex-col justify-center items-center h-full text-center  px-5 md:max-w-4xl m-auto mt-2">
          <a
            href="#contact"
            className="bg-white text-primary py-2 px-6 rounded-xl text-lg font-semibold transition duration-300 ease-in-out transform hover:scale-105 hover:shadow-lg"
          >
            Book now
          </a>
          <h1 className="text-3xl px-3 md:text-5xl font-bold leading-tight mb-5">
            {title}
          </h1>

          <p className="text-lg text-gray-300 mb-8 text-wrap w-4/5">
            {subtitle}
          </p>
        </div>
      </div>
    </>
  );
}

export default First;
