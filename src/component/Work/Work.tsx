import React, { useState } from "react";
import education from "../images/asset 30.gif";
import logistic from "../images/asset 31.gif";
import Game from "../images/asset 32.gif";
import Ecom from "../images/asset 33.gif";
import Mplace from "../images/asset 34.gif";
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/autoplay";
import { Swiper, SwiperSlide } from "swiper/react";
import dmatade from '../../assets/portfolio/dematade.png'
import acheti from '../../assets/portfolio/acheti.png'
import alphadog from '../../assets/portfolio/alphaDog.png'
import haat from '../../assets/portfolio/haat.png'
import glamsqad from '../../assets/portfolio/glamsquad.png'
import proprtize from '../../assets/portfolio/propertize.png'
import lybrate from '../../assets/portfolio/lybrate.png'
import fanguru from '../../assets/portfolio/fanguru.png'
import fashionphile from '../../assets/portfolio/fashionphile.png'






function Work() {
  const [activeTab, setActiveTab] = useState(1);

  const handleTabClick = (tabNumber: number) => {
    setActiveTab(tabNumber);
  };



  const all = [
    {
      image: acheti.src
    },
    {
      image: proprtize.src
    },
    {
      image: dmatade.src
    },
    {
      image: haat.src
    },
    {
      image: glamsqad.src
    },
    {
      image: alphadog.src
    },
    {
      image: lybrate.src
    },
    {
      image: fanguru.src
    },
    {
      image: fashionphile.src
    }
  ]

  const appdev = [
    {
      image: acheti.src
    },
    {
      image: proprtize.src
    },
    {
      image: haat.src
    },
  ]

  const webdev = [
    {
      image: dmatade.src
    },

    {
      image: glamsqad.src
    },
    {
      image: alphadog.src
    },
    {
      image: lybrate.src
    },
    {
      image: fanguru.src
    },
    {
      image: fashionphile.src
    }
  ]
  return (
    <>
      <div className="bg-purple justify-items-center p-5 border-2">
        <h1 className="mt-4 pt-5 mb-2 text-center capitalize text-4xl">
          Browse Our Digital Product Design Portfolio
        </h1>

        <hr className="w-1/5 mx-auto  border-2 my-5 border-primary rounded" />

        <div className="container mx-auto">
          <div className="flex gap-3 justify-center my-5">

            <button
              className={`px-8 py-4 rounded-2xl ${activeTab === 1 ? "bg-primary  text-white" : "bg-gray-200 "
                }`}
              onClick={() => handleTabClick(1)}
            >
              All
            </button>
            <button
              className={`px-8 py-4 rounded-2xl  ${activeTab === 2 ? "bg-primary  text-white" : "bg-gray-200 "
                }`}
              onClick={() => handleTabClick(2)}
            >
              App Devlopment
            </button>
            <button
              className={`px-8 py-4 rounded-2xl  ${activeTab === 3 ? "bg-primary  text-white" : "bg-gray-300 "
                }`}
              onClick={() => handleTabClick(3)}
            >
              Web Devlopment
            </button>

          </div>

          {/* Content for each tab */}
          <div className="max-w-5xl m-auto">
            {activeTab === 1 && (
              <>
                <div className="grid grid-cols-3 gap-10">
                  {all.map((e) => {
                    return (
                      <>
                        <div >
                          <div className="rounded-lg h-[300px] shadow-md">
                            <img
                              className="object-fill h-full w-full rounded-2xl"
                              src={e.image}
                              alt=""
                            />
                          </div>
                        </div>
                      </>
                    )
                  })}
                </div>
              </>
            )}
            {activeTab === 2 && (
              <>
                <div className="grid grid-cols-3 gap-10">
                  {/* <SwiperSlide> */}
                  {appdev.map((e) => {
                    return (
                      <>
                        <div >
                          <div className="rounded-lg h-[300px] shadow-md">
                            <img
                              className="object-fill h-full w-full rounded-2xl"
                              src={e.image}
                              alt=""
                            />
                          </div>
                        </div>
                      </>
                    )
                  })}
                  {/* </SwiperSlide> */}
                </div>
              </>
            )}
            {activeTab === 3 && (
              <>
                <div className="grid grid-cols-3 gap-10">
                  {/* <SwiperSlide> */}
                  {webdev.map((e) => {
                    return (
                      <>
                        <div >
                          <div className="rounded-lg h-[300px] shadow-md">
                            <img
                              className="object-fill h-full w-full rounded-2xl"
                              src={e.image}
                              alt=""
                            />
                          </div>
                        </div>
                      </>
                    )
                  })}
                  {/* </SwiperSlide> */}
                </div>
              </>
            )}
          </div>
        </div>

        {/* <div className="text-center">
          <button className="p-3 py-2 px-10 font-normal mt-5 border-2 rounded-xl  text-white bg-primary ">
            View all
          </button>
        </div> */}
      </div>
    </>
  );
}

export default Work;
