import React, { useEffect, useRef } from "react";
import { AiOutlineBranches } from "react-icons/ai";
import { CiMobile2, CiSettings } from "react-icons/ci";
import { TbApi } from "react-icons/tb";
import {
  MdMiscellaneousServices,
  MdOutlineMiscellaneousServices,
  MdOutlineUpload,
} from "react-icons/md";
import { BsAward, BsBrush } from "react-icons/bs";
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import gsap from "gsap";

gsap.registerPlugin(ScrollTrigger);

function Software() {
  const tech = [
    {
      icon: <BsBrush />,
      name: "UI/UX Design",
    },
    {
      icon: <CiMobile2 />,
      name: "Web & Mobile App Development",
    },
    {
      icon: <TbApi />,
      name: "Custom API Development",
    },
    {
      icon: <MdOutlineMiscellaneousServices />,
      name: "Project management services",
    },
    {
      icon: <CiSettings />,
      name: "DevOps",
    },
    {
      icon: <BsAward />,
      name: "Quality assurance",
    },
  ];


  // useEffect(() => {

  //   gsap.fromTo(".card2",
  //     { rotationY: 10, rotationX: -80, ease: "power2.out", duration: 1 },
  //     {
  //       scrollTrigger: {
  //         trigger: ".card2",
  //         scrub: true,
  //         start: "-40% 50%",
  //         end: "-20% 60%",
  //         markers: false,
  //       },
  //       rotationY: 0,
  //       rotationX: 0,
  //       duration: 4,
  //     });
  // }, [])


  return (
    <>
      <div className="max-w-4xl m-auto flex justify-center items-center gap-4 py-5 px-3">
        <hr className="w-[100px] h-[4px] bg-primary" />
        <div className="text-xl lg:text-4xl font-bold max-w-min text-center text1 ">
          Our Core
          <span className="text-transparent text_stroke tracking-widest md:tracking-wider mx-3">Software Development</span>
          Services
        </div>
        <hr className="w-[100px] h-[4px] bg-primary" />
      </div>
      <p className="text-[#777] text-xl text-center font-medium  max-w-3xl m-auto">
        Avrut Solutions offers full-cycle software development services that
        effortlessly adapt to the needs of your project and business.
      </p>

      <div className=" grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 justify-items-center  max-w-6xl m-auto  my-10 container mx-auto px-4">
        {tech.map((e) => {
          return (
            <>
              <div data-aos="flip-down" className="main w-full">
                <div className="card2 bg-gray-200 card2 w-full h-[300px] flex justify-center items-center font-semibold rounded-xl text-xl  flex-col hover:scale-105  hover:p-1 hover:shadow-sm hover:shadow-primary hover: border-primary hover:border duration-200">
                  <div className="my-3 text-4xl md:text-6xl text-primary">
                    {e?.icon}
                  </div>
                  <div className="text-center">{e?.name}</div>
                </div>
              </div>
            </>
          );
        })}
      </div>
    </>
  );
}
export default Software;
