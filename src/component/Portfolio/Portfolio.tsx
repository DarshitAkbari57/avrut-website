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
          <div className="flex gap-3 justify-center my-5">
            <button
              className={`px-4 py-2 mr-2 ${activeTab === 1
                  ? "bg-primary rounded-xl text-white"
                  : "bg-gray-200 rounded-2xl"
                }`}
              onClick={() => handleTabClick(1)}
            >
              App Development
            </button>
            <button
              className={`px-4 py-2 ${activeTab === 2
                  ? "bg-primary rounded-xl text-white"
                  : "bg-gray-200 rounded-2xl"
                }`}
              onClick={() => handleTabClick(2)}
            >
              App Design
            </button>
            <button
              className={`px-4 py-2 ${activeTab === 3
                  ? "bg-primary rounded-xl text-white"
                  : "bg-gray-200 rounded-2xl"
                }`}
              onClick={() => handleTabClick(3)}
            >
              Show all
            </button>
            <button
              className={`px-4 py-2 ${activeTab === 4
                  ? "bg-primary rounded-xl text-white"
                  : "bg-gray-200 rounded-2xl"
                }`}
              onClick={() => handleTabClick(4)}
            >
              Web Design
            </button>
            <button
              className={`px-4 py-2 ${activeTab === 5
                  ? "bg-primary rounded-xl text-white"
                  : "bg-gray-200 rounded-2xl"
                }`}
              onClick={() => handleTabClick(5)}
            >
              Dashboard
            </button>
          </div>

          {/* Content for each tab */}
          <Swiper
            className="my-8"
            spaceBetween={0}
            slidesPerView={3}
            loop={true}
            autoplay={{
              delay: 1200,
              disableOnInteraction: false,
            }}
            onSlideChange={() => console.log("slide change")}
            onSwiper={(swiper) => console.log(swiper)}
            breakpoints={{
              0: {
                slidesPerView: 1,
                spaceBetween: 10,
              },
              480: {
                slidesPerView: 2,
                spaceBetween: 10,
              },
              768: {
                slidesPerView: 3,
                spaceBetween: 15,
              },
              1024: {
                slidesPerView: 4,
                spaceBetween: 15,
              },
              1280: {
                slidesPerView: 4,
                spaceBetween: 30,
              },
            }}
          >
            {activeTab === 1 && (
              <>
                <SwiperSlide>
                  <div className="rounded-lg h-[250px]  shadow-md">
                    <img
                      className="object-cover h-full w-full rounded-2xl"
                      src="https://avrut.com/static/media/dematade.8b7b4793fac9b2305f79.png"
                      alt=""
                    />
                  </div>
                </SwiperSlide>
              </>
            )}
            {activeTab === 2 && (
              <>
                <SwiperSlide>
                  <div className=" h-[250px]  shadow-md">
                    <img
                      className="h-full w-full object-cover rounded-2xl"
                      src="https://www.braincuber.com/_next/static/media/ourwork_imag8.36a0c688.png"
                      alt=""
                    />
                  </div>
                </SwiperSlide>
              </>
            )}
            {activeTab === 3 && (
              <>
                <SwiperSlide>
                  <div className="mx-5 mt-5   bg-white rounded-lg p-5 shadow-md">
                    <img
                      src="https://avrut.com/static/media/dematade.8b7b4793fac9b2305f79.png"
                      alt=""
                    />
                  </div>
                </SwiperSlide>
                <SwiperSlide>
                  <div className="mx-5 mt-5   bg-white rounded-lg p-5 shadow-md">
                    <img
                      src="https://avrut.com/static/media/dematade.8b7b4793fac9b2305f79.png"
                      alt=""
                    />
                  </div>
                </SwiperSlide>
                <SwiperSlide>
                  <div className="mx-5 mt-5   bg-white rounded-lg p-5 shadow-md">
                    <img
                      src="https://avrut.com/static/media/dematade.8b7b4793fac9b2305f79.png"
                      alt=""
                    />
                  </div>
                </SwiperSlide>
                <SwiperSlide>
                  <div className="mx-5 mt-5   bg-white rounded-lg p-5 shadow-md">
                    <img
                      src="https://avrut.com/static/media/dematade.8b7b4793fac9b2305f79.png"
                      alt=""
                    />
                  </div>
                </SwiperSlide>
              </>
            )}
          </Swiper>
        </div>

        <div className="text-center">
          <button
            onClick={() => router.push("/portfolio")}
            className="p-3 py-2 px-10 font-normal mt-5 border-2 rounded-xl  text-white bg-primary "
          >
            View all
          </button>
        </div>
      </div>
    </>
  );
}

export default Portfolio;
