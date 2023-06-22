import React, { useState } from 'react';
import { Link } from 'react-router-dom';

function Footer() {

    // const [show, setShow] = useState(null);


    const handleClick = () => {
        window.scrollTo(0, 0);
    };

    return (
        <>

            <footer className="text-black dark:text-white  body-font">
                <div className="">
                    <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-3 xl:grid-cols-3 2xl:grid-cols-3 gap-9 px-10  lg:px-28 xl:px-28 2xl:px-28 py-10">

                        {/* div-1 */}

                        <div className="w-full">
                            <h2 className="title-font font-medium tracking-widest text-lg">Site Map</h2>
                            <div className=" flex flex-col lg:justify-start md:justify-start  justify-center">
                                <Link to='/' className='mt-2' onClick={handleClick}>Home</Link>
                                <Link to='/about' className='mt-2' onClick={handleClick}>About</Link>
                                <Link to='/service' className='mt-2' onClick={handleClick}>Service</Link>
                                <Link to='/getintouch' className='mt-2' onClick={handleClick}>Contact</Link>
                                <Link to='/careear' className='mt-2' onClick={handleClick}>Career</Link>
                            </div>
                        </div>

                        {/* div-2*/}

                        <div className="w-full">
                            <h2 className="title-font font-medium tracking-widest text-lg">Our Services</h2>
                            <div className=" mb-10 flex flex-col lg:justify-start md:justify-start  justify-center">
                                <Link className='mt-2' >Android App Development</Link>
                                <Link className='mt-2' >Ios App Development</Link>
                                <Link className='mt-2'>Web Development</Link>
                                <Link className='mt-2' >Unity Game Development</Link>
                                <Link className='mt-2' >UI/UX Design</Link>
                                <Link className='mt-2' >SEO / ASO</Link>

                            </div>
                        </div>

                        {/* div-3*/}

                        <div className=" w-[80%] flex flex-col lg:justify-start md:justify-start  justify-center">
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
                        </div>









                    </div>
                </div>








                <div className="bg-gray-100 dark:text-white dark:bg-black">
                    <div className="container justify-center py-6 mx-auto flex items-center sm:flex-row flex-col" >
                        <p className="text-sm text-gray-500 mt-4 dark:text-white">© 2023 —
                            <a className="text-center text-white" target="_blank"> @Avrut solution</a>
                        </p>

                    </div>
                </div>
            </footer>
        </>
    )
}

export default Footer