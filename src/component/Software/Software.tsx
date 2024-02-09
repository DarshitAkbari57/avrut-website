import React from "react";
import { AiOutlineBranches } from "react-icons/ai";
import { CiMobile2, CiSettings } from "react-icons/ci";
import { TbApi } from "react-icons/tb";
import {
  MdMiscellaneousServices,
  MdOutlineMiscellaneousServices,
  MdOutlineUpload,
} from "react-icons/md";
import { FaMobileAlt } from "react-icons/fa";
import { BsAward, BsBrush } from "react-icons/bs";

function Software() {
  const tech = [
    {
      icon: <BsBrush />,
      name: "UI/UX Design",
    },
    {
      icon: <CiMobile2 />,
      name: "Web & Mobile App Devlopment",
    },
    {
      icon: <TbApi />,
      name: "Custom API devlopment",
    },
    {
      icon: <MdOutlineMiscellaneousServices />,
      name: "Project management services",
    },
    {
      icon: <CiSettings />,
      name: "DevOps",
    },
    // {
    //   icon: <MdOutlineUpload />,
    //   name: "Maintenance and Upgrades",
    // },
    {
      icon: <BsAward />,
      name: "Quality assurance",
    },
  ];

  return (
    <>
      <div className="max-w-4xl m-auto flex justify-center items-center gap-4 py-5 px-3">
        <hr className="w-[100px] h-[4px] bg-primary" />
        <div className="text-lg lg:text-4xl font-bold max-w-min text-center">
          Our Core
          <span className="text-primary mx-3">Software Development</span>
          Services
        </div>
        <hr className="w-[100px] h-[4px] bg-primary" />
      </div>
      <p className="text-[#777] text-xl text-center font-medium  max-w-3xl m-auto">
        Avrut Solutions offers full-cycle software development services that
        effortlessly adapt to the needs of your project and business.
      </p>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 justify-items-center  max-w-6xl m-auto  my-10 container mx-auto px-4">
        {tech.map((e) => {
          return (
            <>
              <div className="bg-gray-200 w-full h-[300px] flex justify-center items-center font-semibold rounded-xl text-xl  flex-col hover:scale-105  hover:p-1 hover:shadow-sm hover:shadow-primary hover: border-primary hover:border duration-200">
                <div className="my-3 text-4xl md:text-6xl text-primary">
                  {e?.icon}
                </div>
                <div className="text-center">{e?.name}</div>
              </div>
            </>
          );
        })}
      </div>
    </>
  );
}

export default Software;
