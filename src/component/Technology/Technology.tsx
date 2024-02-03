import React, { useState } from "react";

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
        },
        {
          name: "Next.js",
          images: "/images/next.svg",
        },
        {
          name: "React",
          images: "/images/reactjs.svg",
        },
        {
          name: "Node.js",
          images: "/images/nodejs.svg",
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
          images: "/images/nodejs.svg",
        },
        {
          name: "Flutter",
          images: "/images/nodejs.svg",
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
          name: "React Native",
          images: "/images/nodejs.svg",
        },
        {
          name: "Flutter",
          images: "/images/nodejs.svg",
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
          name: "React Native",
          images: "/images/nodejs.svg",
        },
        {
          name: "Flutter",
          images: "/images/nodejs.svg",
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
          name: "React Native",
          images: "/images/nodejs.svg",
        },
        {
          name: "Flutter",
          images: "/images/nodejs.svg",
        },
      ],
    },
  ];

  const data = mobile?.find((e) => e?.id === index);

  return (
    <>
      <div className="bg-purple my-10 py-10">
        <div className=" m-auto flex justify-center items-center gap-4 mt-10 px-3 ">
          <hr className="w-[100px] h-[4px] bg-primary" />
          <div className="text-2xl md:text-4xl font-bold  text-center">
            Our <span className="text-primary">Technology</span>
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
                    onClick={() => setIndex(e?.id)}
                    className={`${
                      e?.id === data?.id && "bg-primary text-white"
                    } py-4  text-black hover:bg-primary duration-300 hover:font-bold font-semibold  text-start hover:text-white px-5 shadow  mt-2 rounded-xl border`}
                  >
                    {e?.id + ". " + e?.name}
                  </button>
                  {index === e?.id && (
                    <div className="w-full flex md:hidden  bg-purple  flex-col mt-5   items-center ">
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
            {/* <button className='py-4 bg-white text-black hover:bg-primary duration-300 hover:font-bold font-semibold  text-start hover:text-white px-5 shadow  mt-2 rounded-xl'>02. Mobile development technologies</button>
                        <button className='py-4 bg-white text-black hover:bg-primary duration-300 hover:font-bold font-semibold  text-start hover:text-white px-5 shadow  mt-2 rounded-xl'>03. Backend</button>
                        <button className='py-4 bg-white text-black hover:bg-primary duration-300 hover:font-bold font-semibold  text-start hover:text-white px-5 shadow  mt-2 rounded-xl'>04. Design</button>
                        <button className='py-4 bg-white text-black hover:bg-primary duration-300 hover:font-bold font-semibold  text-start hover:text-white px-5 shadow  mt-2 rounded-xl'>05. Testing</button> */}
          </div>
          <div className="w-full hidden md:flex lg:w-[60%] bg-purple  flex-col   items-center ">
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
