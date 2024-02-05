import React from "react";

const Architecture = ({ title, subtitle }: any) => {
  return (
    <div>
      <section className="container mx-auto py-4 lg:py-10 mt-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-5 md:gap-0 ">
          <div className=" flex flex-col w-full  justify-center items-start px-2 md:p-8">
            <h1 className="text-3xl md:text-5xl py-0 md:p-2 text-primary tracking-loose">
              {title}
            </h1>
            <p className="text-sm md:text-base text-black mb-4">{subtitle}</p>
            <a
              href="#"
              className="bg-transparent hover:bg-primary text-primary hover:text-white duration-300 hover:text-black rounded shadow hover:shadow-lg py-2 px-4 border border-primary hover:border-transparent"
            >
              Explore Now
            </a>
          </div>
          <div className="">
            <img
              src="https://www.braincuber.com/_next/static/media/about-software-architecture.bf3e2a0b.webp"
              alt=""
            />
          </div>
        </div>
      </section>
    </div>
  );
};

export default Architecture;
