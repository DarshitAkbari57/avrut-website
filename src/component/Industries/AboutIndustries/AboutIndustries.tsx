import React from "react";
import Image from "next/image";

const AboutIndustries = ({ title, content, AboutImage }: any) => {
  return (
    <div>
      <div className="container mx-auto  my-5 overflow-x-hidden">
        <div className="lg:mx-auto lg:grid  lg:grid-flow-col-dense lg:grid-cols-2 lg:gap-24 lg:px-8  items-center">
          <div data-aos="fade-right" className="mx-auto max-w-xl px-6 lg:mx-0 lg:max-w-none lg:py-16 lg:px-0 ">
            <div>
              <div className="mt-6">
                <h2 className="text-5xl font-bold tracking-tight text-black">
                  {title}
                </h2>
                <p className="mt-4 text-lg text-[#1e1e1e]">{content}</p>

              </div>
            </div>
          </div>
          <div data-aos="fade-left" className="mt-12 sm:mt-16 lg:mt-0">
            <Image
              alt=""
              loading="lazy"
              width="647"
              height="486"
              className="w-full rounded-xl shadow-2xl ring-1 ring-black ring-opacity-5 "
              src={AboutImage}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutIndustries;
