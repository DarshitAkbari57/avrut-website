import React, { useState } from "react";
import { BsFacebook, BsInstagram, BsLinkedin, BsTwitter } from "react-icons/bs";
import { Link } from "react-router-dom";

function Footer() {
  // const [show, setShow] = useState(null);

  const handleClick = () => {
    window.scrollTo(0, 0);
  };

  return (
    <>
      <footer className="text-black dark:text-white  body-font">
        <div className="container mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-4 gap-10 px-10  lg:px-28 xl:px-10 2xl:px-20 py-10 justify-items-center">
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

            {/* div-1 */}

            <div className="w-full">
              <h2 className="title-font font-medium tracking-widest text-lg">
                Site Map
              </h2>
              <div className="w-[90%] flex flex-row flex-wrap gap-3 px-2 lg:px-0  lg:justify-start md:justify-start  justify-start">
                <Link to="/" className="mt-2" onClick={handleClick}>
                  Home
                </Link>
                <Link to="/about" className="mt-2" onClick={handleClick}>
                  About
                </Link>
                <Link to="/service" className="mt-2" onClick={handleClick}>
                  Service
                </Link>
                <Link to="/getintouch" className="mt-2" onClick={handleClick}>
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

        <div className="bg-gray-100 dark:text-white dark:bg-black">
          <div className="container justify-center py-6 mx-auto flex items-center sm:flex-row flex-col">
            <p className="text-sm text-gray-500 mt-4 dark:text-white">
              © 2023 —
              <a className="text-center text-white" target="_blank">
                {" "}
                @Avrut solution
              </a>
            </p>
          </div>
        </div>
      </footer>
    </>
  );
}

export default Footer;
