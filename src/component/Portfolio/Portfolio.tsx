import React, { useState } from "react";
import education from "../images/asset 30.gif";
import logistic from "../images/asset 31.gif";
import Game from "../images/asset 32.gif";
import Ecom from "../images/asset 33.gif";
import Mplace from "../images/asset 34.gif";
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/autoplay";
import dmatade from '../../assets/portfolio/dematade.png'
import acheti from '../../assets/portfolio/acheti.png'
import alphadog from '../../assets/portfolio/alphaDog.png'
import glamsqad from '../../assets/portfolio/glamsquad.png'
import proprtize from '../../assets/portfolio/propertize.png'
import lybrate from '../../assets/portfolio/lybrate.png'
import fanguru from '../../assets/portfolio/fanguru.png'
import fashionphile from '../../assets/portfolio/fashionphile.png'

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

import { Swiper, SwiperSlide } from "swiper/react";
import { useRouter } from "next/router";

function Portfolio() {
  const [activeTab, setActiveTab] = useState(1);

  const handleTabClick = (tabNumber: number) => {
    setActiveTab(tabNumber);
  };

  const router = useRouter();
  return (
    <>
      <div className="bg-purple justify-items-center p-5 border-2">
        <h1 className="mt-4 pt-5 mb-2 text-center capitalize text-4xl">
          Browse Our Digital Product Design Portfolio
        </h1>

        <hr className="w-1/5 mx-auto border-2 my-5" />

        <div className="container mx-auto">
          <div className="flex flex-col sm:flex-row gap-3 justify-center my-5">
            <button
              className={`px-4 py-2 mr-2 ${activeTab === 1
                ? "bg-primary rounded-xl text-white"
                : "bg-gray-200 rounded-2xl"
                }`}
              onClick={() => handleTabClick(1)}
            >
              All
            </button>
            <button
              className={`px-4 py-2 ${activeTab === 2
                ? "bg-primary rounded-xl text-white"
                : "bg-gray-200 rounded-2xl"
                }`}
              onClick={() => handleTabClick(2)}
            >
              App Devlopment
            </button>
            <button
              className={`px-4 py-2 ${activeTab === 3
                ? "bg-primary rounded-xl text-white"
                : "bg-gray-200 rounded-2xl"
                }`}
              onClick={() => handleTabClick(3)}
            >
              Web Devlopment
            </button>
          </div>

          {/* Content for each tab */}
          <Swiper
            className="my-8"
            spaceBetween={0}
            loop={true}
            autoplay={{
              delay: 1200,
              disableOnInteraction: false,
            }}
            onSlideChange={() => console.log("slide change")}
            onSwiper={(swiper) => console.log(swiper)}
            breakpoints={{
              0: {
                slidesPerView: 1.1,
                spaceBetween: 10,
              },
              480: {
                slidesPerView: 1.1,
                spaceBetween: 10,
              },
              768: {
                slidesPerView: 2,
                spaceBetween: 15,
              },
              1024: {
                slidesPerView: 4.2,
                spaceBetween: 15,
              },
              1280: {
                slidesPerView: 4.2,
                spaceBetween: 30,
              },
            }}
            navigation={{
              nextEl: '.swiper-button-next',
              prevEl: '.swiper-button-prev',
            }}
          >
            {activeTab === 1 && (
              <>
                {all.map((e: any) => {
                  return (
                    <>
                      <SwiperSlide>
                        <div >
                          <div className="rounded-lg h-[300px] shadow-md">
                            <img
                              className="object-fill h-full w-full rounded-2xl"
                              src={e.image}
                              alt=""
                            />
                          </div>
                        </div>
                      </SwiperSlide >
                    </>
                  )
                })}
              </>
            )}
            {activeTab === 2 && (
              <>
                {appdev.map((e: any) => {
                  return (
                    <>
                      <SwiperSlide>
                        <div >
                          <div className="rounded-lg h-[300px] shadow-md">
                            <img
                              className="object-fill h-full w-full rounded-2xl"
                              src={e.image}
                              alt=""
                            />
                          </div>
                        </div>
                      </SwiperSlide >
                    </>
                  )
                })}
              </>
            )}
            {activeTab === 3 && (
              <>
                {webdev.map((e: any) => {
                  return (
                    <>
                      <SwiperSlide>
                        <div >
                          <div className="rounded-lg h-[300px] shadow-md">
                            <img
                              className="object-fill h-full w-full rounded-2xl"
                              src={e.image}
                              alt=""
                            />
                          </div>
                        </div>
                      </SwiperSlide >
                    </>
                  )
                })}
              </>
            )}
          </Swiper>

        </div>

        {/* <div className="text-center">
          <button
            onClick={() => router.push("/portfolio")}
            className="p-3 py-2 px-10 font-normal mt-5 border-2 rounded-xl  text-white bg-primary "
          >
            View all
          </button>
        </div> */}
      </div>
    </>
  );
}

export default Portfolio;
