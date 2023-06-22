import React from 'react'
import { Link, useNavigate } from 'react-router-dom'

function Culture() {


    const navigate = useNavigate();
    const handelclick = () =>{
        window.scrollTo(0, 0);
        navigate('/about')
    }

    return (
        <>


            <div className="px-5 sm:px-5 md:px-10 lg:px-10 xl:px-10 2xl:px-10 grid lg:grid-cols-2   sm:grid-cols-1 mt-10  place-items-center overflow-x-hidden w-full">
                <div className="animation " data-aos="fade-right">
                    <img src={require('../images/culture.jpg')} className='2xl:[1500px] w-[650px] h-[500px] object-cover' alt="" />
                </div>
                <div className='mt-5 animation sm:px-5' data-aos="fade-left">
                    <div className='lg:mb-10'>CULTURE</div>
                    <div className='lg:text-7xl text-base font-bold  leading-tight'>Approach <br />
                        The Unknown</div>
                    <p className='lg:mt-20  sm:text-base'>
                        Avrut solution is one of the reckoned Web & Software  <br /> Development Company in Surat. Rapidly changing <br /> business state of affairs and latest technologies being <br />  introduced day by day,always raises the requirement for <br /> change in development which suits the client requirement <br /> and also alter the existing software’s to match the latest <br /> technology by not changing the methodologies defined for <br /> good software.
                    </p>
                    <div className=''>
                            <button onClick={handelclick} className='p-2 px-4 mt-5 rounded-full bg-transparent border-2 border-black dark:border-white dark:text-white text-black hover:bg-black hover:text-white'>About Us
                            </button>
                    </div>

                </div>

            </div>


        </>
    )
}

export default Culture