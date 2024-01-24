import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { MdClear, MdDarkMode, MdLightMode } from "react-icons/md";
import {
  BsBehance,
  BsDribbble,
  BsFacebook,
  BsInstagram,
  BsLinkedin,
  BsTwitter,
} from "react-icons/bs";

function Nav() {
  const [mobileNavOpen, setMobileNavOpen] = useState(false);
  const [theme, settheme] = useState("dark");
  const [icon, seticon] = useState("true");
  const [logo, setlogo] = useState("true");

  useEffect(() => {
    if (theme === "dark") {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, [theme]);

  const hswitch = () => {
    // settheme(theme === "dark" ? "light" : "dark");
    // seticon(!icon);
    setlogo(!logo);
    window.scrollTo(0, 0);
  };

  const handleClick = () => {
    window.scrollTo(0, 0);
    setMobileNavOpen(!mobileNavOpen);
  };

  return (
    <>
      {/* Page Container */}
      <div
        id="page-container"
        className="flex flex-col fixed top-0 z-10 w-full "
      >
        {/* Page Header */}
        <header
          id="page-header"
          className="flex flex-none items-center z-20  w-full h-20 "
        >
          <div className="w-full px-2 sm:px-5 md:px-10 lg:px-10 xl:px-10 2xl:px-10">
            <div className="flex justify-between px-4  bg-transparent ">
              {/* Left Section */}
              <div className="flex items-center justify-between">
                {/* Logo */}
                <Link to="/">
                  <a
                    className="group inline-flex items-center font-bold text-lg tracking-wide text-gray-700 active:text-gray-700 no-underline "
                    onClick={hswitch}
                  >
                    <span>
                      {logo ? (
                        <img
                          src={require("../images/logo3.png")}
                          alt=""
                          width="90px"
                          className="mx-3"
                        />
                      ) : (
                        <img
                          src={require("../images/logo3.png")}
                          alt=""
                          width="90px"
                          className="mx-3"
                        />
                      )}
                    </span>
                  </a>
                </Link>
                {/* END Logo */}
              </div>
              {/* END Left Section */}

              {/* Right Section */}
              <div className="flex items-center space-x-1 lg:space-x-5">
                {/* Toggle Mobile Navigation */}
                <div className="dark:text-white text-black  ">
                  <button
                    type="button"
                    className="inline-flex justify-center bg-black items-center space-x-2 font-semibold focus:outline-none px-2 py-1 leading-6 rounded"
                    onClick={() => setMobileNavOpen(!mobileNavOpen)}
                  >
                    <svg
                      fill="currentColor"
                      viewBox="0 0 20 20"
                      xmlns="http://www.w3.org/2000/svg"
                      className="hi-solid hi-menu inline-block w-7  h-7 text-black mix-blend-difference dark:text-white"
                    >
                      <path
                        fillRule="evenodd"
                        d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z"
                        clipRule="evenodd"
                      />
                    </svg>
                  </button>
                  {/* <button className='text-3xl  text-black dark:text-white' onClick={hswitch}>
                                        {icon ? <MdLightMode  /> : <MdDarkMode />}
                                    </button> */}
                </div>
                {/* END Toggle Mobile Navigation */}
              </div>
              {/* END Right Section */}
            </div>

            {/* Mobile Navigation */}
            <div className={` ${mobileNavOpen ? "hideen" : "hidden"}`}>
              <nav className="flex flex-col absolute w-full top-0 left-0  py-8 border-t bg-white h-screen dark:bg-black px-0 lg:px-10 xl:px-10 2xl:px-10  animate__animated animate__fadeInLeft">
                <div className="flex justify-between px-4 lg:px-8 xl:px-8 2xl:px-8">
                  <div className="">
                    <img
                      src={require("../images/logo1.png")}
                      alt=""
                      width="60px"
                      className="mx-3"
                    />
                  </div>
                  <div className="dark:text-white text-black">
                    <button
                      type="button"
                      className="inline-flex justify-center items-center space-x-2 font-semibold focus:outline-none px-3 py-2 text-3xl leading-6 rounded"
                      onClick={() => setMobileNavOpen(!mobileNavOpen)}
                    >
                      <MdClear />
                    </button>
                  </div>
                </div>

                <div className="container mx-auto">
                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-4 gap-10 px-10  lg:px-28 xl:px-10 2xl:px-20 py-10 justify-items-center">
                    {/* div-1 */}

                    <div className="w-full">
                      <h2 className="title-font font-medium tracking-widest text-lg">
                        Site Map
                      </h2>
                      <div className="w-[90%] flex flex-row flex-wrap gap-3 px-2 lg:px-0  lg:justify-start md:justify-start  justify-start">
                        <Link to="/" className="mt-2" onClick={handleClick}>
                          Home
                        </Link>
                        <Link
                          to="/about"
                          className="mt-2"
                          onClick={handleClick}
                        >
                          About
                        </Link>
                        <Link
                          to="/service"
                          className="mt-2"
                          onClick={handleClick}
                        >
                          Service
                        </Link>
                        <Link
                          to="/getintouch"
                          className="mt-2"
                          onClick={handleClick}
                        >
                          Contact
                        </Link>
                        <Link
                          to="/careear"
                          className="mt-2 lg:mt-0 px-0 lg:px-0 "
                          onClick={handleClick}
                        >
                          Career
                        </Link>
                      </div>
                    </div>

                    {/* div-2*/}

                    <div className="w-full">
                      <h2 className="title-font font-medium tracking-widest text-lg">
                        Our Services
                      </h2>
                      <div className=" mb-10 flex flex-col lg:justify-start md:justify-start  justify-center">
                        <Link className="mt-2">Android App Development</Link>
                        <Link className="mt-2">Ios App Development</Link>
                        <Link className="mt-2">Web Development</Link>
                        <Link className="mt-2">Unity Game Development</Link>
                        <Link className="mt-2">UI/UX Design</Link>
                        <Link className="mt-2">SEO / ASO</Link>
                      </div>
                    </div>

                    {/* div-3*/}

                    {/* <div className="w-full flex flex-col lg:justify-start md:justify-start  justify-center">
                                            <h2 className="title-font font-medium tracking-widest text-lg">Contact Us</h2>
                                            <div className='flex  justify-center mt-2'>
                                                <div className='text-md'>
                                                    <span className='font-semibold'>Location : </span>
                                                    309, Amby valley arcade, VIP Circle, Uttaran, SURAT-394105
                                                </div>
                                            </div>
                                            <div className='flex gap-3 mt-2'>
                                                <div className=' text-md font-semibold '>
                                                    Tel :
                                                </div>
                                                <div className='text-left'>
                                                    +91 9712697297
                                                </div>
                                            </div>
                                            <div className='flex gap-3 mt-2'>
                                                <div className=' text-md font-semibold '>
                                                    E-mail :
                                                </div>
                                                <div className='text-left'>
                                                    info@avrut.com
                                                </div>
                                            </div>
                                        </div> */}

                    {/* div-4*/}

                    <div className=" w-full flex flex-col lg:justify-start md:justify-start  justify-start">
                      <h2 className="title-font font-medium tracking-widest text-lg">
                        Follow Us
                      </h2>
                      <div className="flex  gap-5 py-3 ">
                        {/* <div >
                                    <BsFacebook className='text-xl' />
                                </div> */}
                        {/* <div >
                                    <BsInstagram className='text-xl' />
                                </div> */}
                        <Link
                          to="https://www.linkedin.com/company/avrut-solutions/"
                          target="_blank"
                        >
                          <BsLinkedin className="text-xl" />
                        </Link>
                        {/* <div>
                                    <BsTwitter className='text-xl' />
                                </div> */}
                      </div>
                    </div>
                  </div>
                </div>
              </nav>
            </div>
            {/* END Mobile Navigation */}
          </div>
        </header>
      </div>
    </>
  );
}

export default Nav;
