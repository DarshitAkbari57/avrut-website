
import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom';
import { MdClear, MdDarkMode, MdLightMode } from "react-icons/md";
import { BsBehance, BsDribbble, BsFacebook, BsInstagram } from "react-icons/bs";


function Nav() {

    const [mobileNavOpen, setMobileNavOpen] = useState(false);
    const [theme, settheme] = useState("dark");
    const [icon, seticon] = useState("true")
    const [logo, setlogo] = useState("true")


    useEffect(() => {

        if (theme === "dark") {
            document.documentElement.classList.add("dark");
        }
        else {
            document.documentElement.classList.remove("dark");
        }

    }, [theme]);

    const hswitch = () => {
        // settheme(theme === "dark" ? "light" : "dark");
        // seticon(!icon);
        setlogo(!logo);
        window.scrollTo(0, 0);

    }

    const handleClick = () => {
        window.scrollTo(0, 0);
        setMobileNavOpen(!mobileNavOpen)
    };




    return (
        <>
            {/* Page Container */}
            <div id="page-container" className="flex flex-col fixed top-0 z-10 w-full ">
                {/* Page Header */}
                <header id="page-header" className="flex flex-none items-center z-20  w-full h-20 ">
                    <div className="w-full px-2 sm:px-5 md:px-10 lg:px-10 xl:px-10 2xl:px-10" >
                        <div className="flex justify-between px-4  bg-transparent ">
                            {/* Left Section */}
                            <div className="flex items-center justify-between">
                                {/* Logo */}
                                <Link to='/'>
                                    <a  className="group inline-flex items-center font-bold text-lg tracking-wide text-gray-700 active:text-gray-700 no-underline " onClick={hswitch}>
                                        <span>
                                            {logo ?
                                                <img src={require('../images/logo3.png')} alt="" width='90px' className='mx-3' />
                                                : <img src={require('../images/logo3.png')} alt="" width='90px' className='mx-3' />
                                            }
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
                                        <svg fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg" className="hi-solid hi-menu inline-block w-7  h-7 text-black mix-blend-difference dark:text-white"><path fillRule="evenodd" d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z" clipRule="evenodd" /></svg>
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
                        <div
                            className={` ${mobileNavOpen ? "hideen" : "hidden"
                                }`}
                        >
                            <nav className="flex flex-col absolute w-full top-0 left-0  py-8 border-t bg-white h-screen dark:bg-black px-0 lg:px-10 xl:px-10 2xl:px-10  animate__animated animate__fadeInLeft">

                                <div className="flex justify-between px-4 lg:px-8 xl:px-8 2xl:px-8">
                                    <div className=''>
                                        <img src={require('../images/logo1.png')} alt="" width='60px' className='mx-3' />
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

                                <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-3 xl:grid-cols-3 2xl:grid-cols-3 justify-items-center text-white bg-black md:px-10 lg:px-10 xl:px-10 2xl:px-10">

                                    <div className='mt-10 justify-self-center lg:justify-self-start xl:justify-self-start 2xl:justify-self-start '>

                                    <h1 className='mb-5 font-bold text-2xl'>Site map</h1>

                                        <Link to='/'>
                                            <a  onClick={handleClick} className="lg:text-lg sm:text-lg font-medium flex items-center  no-underline py-2 rounded ">
                                                <span>Home</span>
                                            </a>
                                        </Link>
                                        <Link to='/about'>
                                            <a  onClick={handleClick} className="lg:text-lg sm:text-lg font-medium flex items-center no-underline lg:py-4 py-2 rounded ">
                                                <span>About</span>
                                            </a>
                                        </Link>
                                        <Link to='/service'>
                                            <a  onClick={handleClick} className="lg:text-lg sm:text-lg font-medium flex items-center no-underline lg:py-4 py-2 rounded ">
                                                <span>Services</span>
                                            </a>
                                        </Link>
                                        <Link to='/portfolio'>
                                            <a  onClick={handleClick} className="lg:text-lg sm:text-lg font-medium flex items-center  no-underline lg:py-4 py-2 rounded ">
                                                <span>Portfolio</span>
                                            </a>
                                        </Link>
                                        <Link to='/careear'>
                                            <a  onClick={handleClick} className="lg:text-lg sm:text-lg font-medium flex items-center  no-underline lg:py-4 py-2 rounded ">
                                                <span>Career</span>
                                            </a>
                                        </Link>
                                        <Link to='/getintouch'>
                                            <a  onClick={handleClick} className="lg:text-lg sm:text-lg font-medium flex items-center no-underline lg:py-4 py-2 rounded ">
                                                <span>Get in touch</span>
                                            </a>
                                        </Link>
                                    </div>

                                    <div className='mt-10 justify-self-center lg:justify-self-start xl:justify-self-start 2xl:justify-self-start '> 

                                        <h1 className='mb-5 font-bold text-2xl'>Our Services</h1>

                                            <div  className="lg:text-lg sm:text-lg font-medium flex items-center no-underline lg:py-4 py-2 rounded ">
                                                <span>Web Development</span>
                                            </div>

                                            <div  className="lg:text-lg sm:text-lg font-medium flex items-center  no-underline py-2 rounded ">
                                                <span>Android App Development</span>
                                            </div>
                                            <div  className="lg:text-lg sm:text-lg font-medium flex items-center no-underline lg:py-4 py-2 rounded ">
                                                <span>Ios App Development</span>
                                            </div>

                                            <div  className="lg:text-lg sm:text-lg font-medium flex items-center  no-underline lg:py-4 py-2 rounded ">
                                                <span>Unity Game Development</span>
                                            </div>
                                            <div  className="lg:text-lg sm:text-lg font-medium flex items-center  no-underline lg:py-4 py-2 rounded ">
                                                <span>UI/UX Design</span>
                                            </div>
                                            <div  className="lg:text-lg sm:text-lg font-medium flex items-center no-underline lg:py-4 py-2 rounded ">
                                                <span>SEO / ASO</span>
                                            </div>
                                    </div>



                                    <div className='mt-10  justify-self-center lg:justify-self-start xl:justify-self-start 2xl:justify-self-start text-black dark:text-white'>
                                        <h3 className='font-semibold text-2xl'>Address</h3>
                                        <div className='leading-10'>India (Head Office)</div>
                                        <p className='leading-10'>309 Ambevally arcade , Surat, Gujarat, India 395006</p>
                                        <div className='dark:text-white text-3xl flex  mt-7 justify-start'>
                                            <BsInstagram className='text-white lg:mr-3  mx-2' />
                                            <BsFacebook className='text-white lg:mx-3 mx-2' />
                                            <BsBehance className='text-white lg:mx-3 mx-2' />
                                            <BsDribbble className='text-white lg:mx-3 mx-2' />
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
    )
}

export default Nav


