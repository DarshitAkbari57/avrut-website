import React from "react";
import { FaUserGroup } from "react-icons/fa6";
import { GrUserExpert } from "react-icons/gr";
import { MdOutlineSpatialTracking } from "react-icons/md";
import { AiOutlineSolution } from "react-icons/ai";
import { GrGroup } from "react-icons/gr";
import { LiaIndustrySolid } from "react-icons/lia";
import { TbDeviceMobileCode } from "react-icons/tb";
import { AiOutlineUserSwitch } from "react-icons/ai";
import { GrCycle } from "react-icons/gr";

function Choose() {
  const cards = [
    {
      icon: <GrUserExpert />,
      Header: "Expertise Across Technologies",
      main: "Avrut Solutions boasts a team of skilled professionals proficient in a variety of cutting-edge technologies, ensuring that your project benefits from the latest advancements in the industry...",
    },
    {
      icon: <MdOutlineSpatialTracking />,
      Header: "Proven Track Record",
      main: "With over 250 successfully completed projects, we have a proven track record of delivering high-quality software solutions across diverse industries, showcasing our commitment to excellence...",
    },
    {
      icon: <AiOutlineSolution />,
      Header: "Tailored Solutions",
      main: "We understand that each project is unique. Avrut Solutions specializes in crafting bespoke software solutions that precisely align with your business objectives and requirements, ensuring a tailored fit.",
    },
    {
      icon: <GrGroup />,
      Header: "Passionate Teams",
      main: "Our teams of React, React Native, Angular, Node, and Flutter developers and designers are not just professionals but enthusiasts. Passion drives us to create innovative and impactful digital products.",
    },
    {
      icon: <LiaIndustrySolid />,
      Header: "Diverse Industry Experience",
      main: "From eCommerce and finance to manufacturing, wellness, and travel, Avrut Solutions has successfully navigated various industries, bringing a wealth of experience and insights to each project.",
    },
    {
      icon: <TbDeviceMobileCode />,
      Header: "Responsive Design and Development",
      main: "Avrut Solutions prioritizes responsive design and development, ensuring that your software functions seamlessly across devices and platforms, providing an optimal user experience.",
    },
    {
      icon: <AiOutlineUserSwitch />,
      Header: "Client-Centric Approach",
      main: "We value open communication and collaboration, prioritizing your input throughout the development process. Your satisfaction is our top priority, and we work closely with you to meet and exceed your expectations.",
    },
    {
      icon: <GrCycle />,
      Header: "Full-Cycle Services",
      main: "Avrut Solutions offers end-to-end services, from conceptualization and development to testing, deployment, and ongoing support. We are your reliable partner throughout the entire software development lifecycle.",
    },
  ];

  return (
    <>
      <div
        className="max-h-max w-full bg-black p-10"
        style={{
          backgroundImage: `url("https://www.braincuber.com/_next/static/media/why-choose-us-bg.2b08a4f6.webp")`,
        }}
      >
        <div className="container mx-auto text-center lg:px-56">
          <h1 className="text-center text-white pt-10 text-4xl font-semibold">
            Why Choose Us
          </h1>
          <p className="text-white pt-5">
            Avrut Solutions develops affordable and quality digital products for
            a range of businesses. Our software development company has a proven
            record of great success stories. We pour our knowledge and
            experience into delivering solutions that fulfil your needs,
            expectations, and budget.
          </p>
        </div>
        <div className="container mx-auto text-center lg:px-28">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 my-10">
            {cards.map((e, index) => {
              return (
                <>
                  <div key={index} className="relative group cursor-pointer group overflow-hidden  text-gray-50 rounded-2xl hover:duration-700 duration-700 h-72">
                    <div className="bg-[#202020] text-white h-72 w-full flex justify-center p-10 text-5xl md:text-9xl group-hover:text-3xl group-hover:mt-[-20px] md:group-hover:text-5xl  ease-in-out duration-500">
                      {e?.icon}
                    </div>
                    <div className="absolute  bg-gray-50 -bottom-[100px] h-40 group-hover:h-max w-full p-3 flex flex-col gap-1 group-hover:-bottom-0 group-hover:duration-700  duration-700 ease-in-out   ">
                      {/* <span className="text-black font-bold text-xs">{e?.Header}</span> */}
                      <span className="text-gray-800 font-bold text-1xl mb-4">
                        {e?.Header}{" "}
                      </span>
                      <p className="text-neutral-800">{e?.main}</p>
                    </div>
                  </div >
                </>
              );
            })}
          </div>
        </div>
      </div >
    </>
  );
}

export default Choose;
