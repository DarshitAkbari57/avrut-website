import React, { useRef, useState } from "react";
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
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Navigation } from 'swiper/modules';
import { useRouter } from "next/router";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa6";
import Modal from "../Modal/ImageModal";


const all = [
  {
    image: acheti.src,
    type: "phone"
  },
  {
    image: proprtize.src,
    type: "web"
  },
  {
    image: dmatade.src,
    type: "web"
  },
  {
    image: glamsqad.src,
    type: "web"
  },
  {
    image: alphadog.src,
    type: "web"
  },
  {
    image: lybrate.src,
    type: "web"
  },
  {
    image: fanguru.src,
    type: "web"
  },
  {
    image: fashionphile.src,
    type: "web"
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


function Portfolio() {
  const [activeTab, setActiveTab] = useState(1);
  const [modalOpen, setModalOpen] = useState<boolean>(false);
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  const openModal = (imageUrl: string) => {
    setSelectedImage(imageUrl);
    setModalOpen(true);
  };

  const closeModal = () => {
    setSelectedImage(null);
    setModalOpen(false);
  };

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

        <div className=" mx-auto">
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
          <div className="relative w-[70%] md:w-[80%] mx-auto">
            <button className="prevref p-2 md:p-3 ml-2 bg-white shadow-lg absolute text-center z-50 border border-gray-300 md:-left-16 -left-12 -translate-y-1/2 top-1/2 rounded-full">
              <FaArrowLeft />
            </button>
            <button className="nextref p-2 md:p-3 mr-2 bg-white absolute z-50 shadow-lg text-center border border-gray-300 md:-right-16 -right-12 -translate-y-1/2 top-1/2 rounded-full">
              <FaArrowRight />
            </button>
            {modalOpen && <Modal imageUrl={selectedImage} onClose={closeModal} />}
            <Swiper
              className="my-8 "
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
                  slidesPerView: 1,
                  spaceBetween: 10,
                },
                480: {
                  slidesPerView: 1.5,
                  spaceBetween: 10,
                },
                768: {
                  slidesPerView: 3,
                  spaceBetween: 15,
                },
                1024: {
                  slidesPerView: 3.5,
                  spaceBetween: 15,
                },
                1280: {
                  slidesPerView: 3.6,
                  spaceBetween: 30,
                },
              }}
              modules={[Navigation]}
              navigation={{
                nextEl: '.nextref',
                prevEl: '.prevref',
              }}
            >
              {activeTab === 1 && (
                <>
                  {all.map((e: any) => {
                    return (
                      <>
                        <SwiperSlide >

                          <div >
                            <div className={`rounded-lg h-64 ${e?.type === "web" ? "w-76 " : "w-44 "}  shadow-md`}>
                              <img
                                onClick={() => openModal(e?.image)} // Assuming e?.image holds the URL of the image
                                className="object-fill h-full w-full rounded-2xl cursor-pointer"
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

        </div>

        {/* <div className="text-center">
          <button
            onClick={() => router.push("/portfolio")}
            className="p-3 py-2 px-10 font-normal mt-5 border-2 rounded-xl  text-white bg-primary "
          >
            View all
          </button>
        </div> */}
      </div >
    </>
  );
}

export default Portfolio;
