import React, { useEffect, useRef, useState } from "react";
import gsap from "gsap";
// import SplitText from "gsap/dist/SplitText";
import { ScrollTrigger } from 'gsap/ScrollTrigger';

// gsap.registerPlugin(SplitText)
gsap.registerPlugin(ScrollTrigger);

function Technology() {
  const [index, setIndex] = useState(1);

  const mobile = [
    {
      id: 1,
      name: "Web development technologies",
      description:
        "Utilizing technologies such as React, Angular, and Node.js, Avrut Solutions excels in crafting dynamic and scalable web applications.",
      technologys: [
        {
          name: "TypeScript",
          images: "/images/ts.svg",
          path: "/technology/typescript",
        },
        {
          name: "Next.js",
          images: "/images/next.svg",
          path: "/technology/nextjs",
        },
        {
          name: "React",
          images: "/images/reactjs.svg",
          path: "/technology/reactjs",

        },
        {
          name: "Node.js",
          images: "/images/nodejs.svg",
          path: "/technology/nodejs",
        },
        {
          name: "Java",
          images: "/images/java.svg",
        },
      ],
    },
    {
      id: 2,
      name: "Mobile development technologies",
      description:
        "Specializing in React Native and Flutter, Avrut Solutions delivers cutting-edge mobile applications with a focus on cross-platform development.",
      technologys: [
        {
          name: "React Native",
          images: "/images/reactjs.svg",
        },
        {
          name: "Flutter",
          images: "/images/flutter.svg",
        },
      ],
    },
    {
      id: 3,
      name: "Backend",
      description:
        "Leveraging the power of Node.js and Express.js, Avrut Solutions ensures robust and efficient server-side development for seamless application functionality",
      technologys: [
        {
          name: "Nodejs",
          images: "/images/technology/node-js.svg",
        },
        {
          name: "Php",
          images: "/images/technology/php.svg",
        },
        {
          name: "Python",
          images: "/images/technology/python.svg",
        },
      ],
    },
    {
      id: 4,
      name: "Design",
      description:
        "With a strong emphasis on UI/UX design and proficiency in tools like Figma and Adobe XD, Avrut Solutions creates visually appealing and user-centric interfaces.",
      technologys: [
        {
          name: "Photoshop",
          images: "/images/technology/photoshop.png",
        },
        {
          name: "Figma",
          images: "/images/technology/figma.png",
        },
      ],
    },
    {
      id: 5,
      name: "Testing",
      description:
        "Employing both manual and automated testing, along with rigorous quality assurance practices, Avrut Solutions guarantees the reliability and performance of its software solutions.",
      technologys: [
        {
          name: "Jest",
          images: "/images/technology/jest.jpg",
        },
        {
          name: "Chai",
          images: "/images/technology/chai.png",
        },
      ],
    },
  ];

  const data = mobile?.find((e) => e?.id === index);
  const containerRef = useRef(null)


  const textRef = useRef(null);
  gsap.timeline()



  return (
    <>
      <div className="bg-purple my-10 py-10 overflow-hidden ">
        <div className=" m-auto flex justify-center items-center gap-4 mt-10 px-3  ">
          <hr className="w-[100px] h-[4px] bg-primary" />
          <div className="text-2xl md:text-5xl font-bold  text-center ">
            Our <span className="text-transparent   text_stroke">Technology</span>
          </div>
          <hr className="w-[100px] h-[4px] bg-primary" />
        </div>
        <p className="text-[#777] text-xl text-center font-medium my-6 m-auto">
          Our custom software development leverages various technologies for
          cutting-edge web apps, mobile apps, backend, design, and testing
        </p>

        <div className="flex flex-col lg:flex-row container justify-center mx-auto">
          <div className="flex flex-col w-full lg:w-[40%]  rounded-xl  border-gray-500 px-3 md:px-10">
            {mobile?.map((e) => {
              return (
                <>
                  <button
                    data-aos="fade-right"
                    onClick={() => setIndex(e?.id)}
                    className={`${e?.id === data?.id && "bg-primary text-white"
                      } py-4  text-black hover:bg-primary duration-300 hover:font-bold font-semibold  text-start hover:text-white px-5 shadow  mt-2 rounded-xl border`}
                  >
                    {e?.id + ". " + e?.name}
                  </button>
                  {index === e?.id && (
                    <div data-aos="fade-left" ref={containerRef} className="w-full flex md:hidden  bg-purple  flex-col mt-5   items-center ease-in transform transition-transform">
                      <>
                        <h1 className="text-black font-medium text-xl px-3">
                          {data?.description}
                        </h1>
                        <div className="grid grid-cols-3 gap-3 justify-items-center items-center my-10">
                          {data?.technologys.map((e) => {
                            return (
                              <>
                                <div className="bg-white w-[100px] h-[100px] md:w-[170px] md:h-[170px] p-7 md:p-14 flex flex-col justify-center rounded-2xl">
                                  <img className="" src={e.images} alt="" />
                                  {/* <div className='text-center font-semibold'>{e.name}</div> */}
                                </div>
                              </>
                            );
                          })}
                        </div>
                      </>
                    </div>
                  )}
                </>
              );
            })}
          </div>
          <div data-aos="fade-left" className="w-full hidden md:flex lg:w-[60%] bg-purple  flex-col   items-center ">
            <>
              <h1 className="text-black font-medium text-md px-20">
                {data?.description}
              </h1>
              <div className="grid grid-cols-3 gap-3 justify-items-center items-center my-10">
                {data?.technologys.map((e) => {
                  return (
                    <>
                      <div className="bg-white w-[170px] h-[170px] p-14 flex flex-col justify-center rounded-2xl">
                        <img className="" src={e.images} alt="" />
                        <div className="text-center font-semibold">
                          {e.name}
                        </div>
                      </div>
                    </>
                  );
                })}
              </div>
            </>
          </div>
        </div>
      </div>
    </>
  );
}

export default Technology;
