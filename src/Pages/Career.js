import Aos from 'aos';
import React from 'react';
import { useEffect } from 'react';
import Nav from '../components/Nav';
import Footer from '../components/Footer';
import { BsChevronDown } from 'react-icons/bs';

function Career() {

    useEffect(() => {
        Aos.init({ duration: 3000 });
    }, []);

    return (
        <>
            <Nav />
            <h1 className='text-center text-2xl font-semibold  py-14 animate__animated animate__fadeInUp'>Career</h1>
            <div className=' px-5 sm:px-5 md:px-10 lg:px-10 xl:px-10 2xl:px-10  animate__animated animate__fadeInUp container mx-auto'>

                {/* 1 */}
                <div className='grid lg:grid-cols-2 gap-10 grid-cols-1 justify-items-center animation   animate__animated animate__flipinX' >
                    <div class="p-6 sm:mt-10 bg-white border border-gray-200 rounded-lg shadow hover:scale-110 ease-in duration-300" data-aos="flip-down">
                        <a >
                            <h5 class="mb-2 text-2xl font-semibold tracking-tight text-black">Python Developer</h5>
                        </a>
                        <div className='flex justify-between font-semibold py-3 dark:text-black'>
                            <h3>Experience : 1-2 Years</h3>
                            <h3>Position : 2</h3>
                        </div>
                        <p class="mb-3 my-4 font-normal text-black">A mid-level to Python Developer with Excellent skills and responsible for coding, designing, deploying, and debugging development projects.</p>
                        {/* <a class="inline-flex items-center px-4 py-2 text-sm font-medium text-center rounded-full text-white bg-black hover:bg-white hover:text-black hover:border-2 border-black transition ">
                            Apply now <BsChevronDown className='ml-2'/>
                        </a> */}
                        <div className='text-black mt-3 flex items-center'>
                            <div className='font-semibold'>Apply now :</div>
                            <div className='ml-2  font-medium'> info@avrut.com</div>
                        </div>
                    </div>
                    <div class=" sm:mt-10 p-6 bg-white border border-gray-200 rounded-lg shadow hover:scale-110 ease-in duration-300" data-aos="flip-down">
                        <a >
                            <h5 class="mb-2 text-2xl font-semibold tracking-tight text-black">React Developer</h5>
                        </a>
                        <div className='flex justify-between font-semibold py-3 dark:text-black'>
                            <h3>Experience : 2-3 Years</h3>
                            <h3>Position : 1</h3>
                        </div>
                        <p class="mb-3 my-4 font-normal text-black">A mid-level to senior React Developer with Excellent skills and  designs and creates JavaScript-based applications for web or mobile environments.</p>
                        {/* <a class="inline-flex items-center px-4 py-2 text-sm font-medium text-center rounded-full text-white bg-black hover:bg-white hover:text-black hover:border-2 border-black transition ">
                            Apply now <BsChevronDown className='ml-2'/>
                        </a> */}
                       <div className='text-black mt-3  flex items-center'>
                            <div className='font-semibold'>Apply now :</div>
                            <div className='ml-2  font-medium'> info@avrut.com</div>
                        </div>
                    </div>
                    <div class=" p-6 sm:mt-10 bg-white border border-gray-200 rounded-lg shadow hover:scale-110 ease-in duration-300" data-aos="flip-down">
                        <a >
                            <h5 class="mb-2 text-2xl font-semibold tracking-tight text-black">Node Developer</h5>
                        </a>
                        <div className='flex justify-between font-semibold py-3 dark:text-black'>
                            <h3>Experience : 2-3 Years</h3>
                            <h3>Position : 1</h3>
                        </div>
                        <p class="mb-3 my-4 font-normal text-black">A mid-level to senior Node Js Developer with Excellent skills and  responsible for writing server-side web application logic in JavaScript or variants of it.</p>
                        {/* <a class="inline-flex items-center px-4 py-2 text-sm font-medium text-center rounded-full text-white bg-black hover:bg-white hover:text-black hover:border-2 border-black transition ">
                            Apply now <BsChevronDown className='ml-2'/>
                        </a> */}
                       <div className='text-black mt-3  flex items-center'>
                            <div className='font-semibold'>Apply now :</div>
                            <div className='ml-2  font-medium'> info@avrut.com</div>
                        </div>
                    </div>
                    <div class=" sm:mt-10 p-6 bg-white border border-gray-200 rounded-lg shadow hover:scale-110 ease-in duration-300" data-aos="flip-down">
                        <a >
                            <h5 class="mb-2 text-2xl font-semibold tracking-tight text-black">Android Developer</h5>
                        </a>
                        <div className='flex justify-between font-semibold py-3 dark:text-black'>
                            <h3>Experience : 2-3 Year </h3>
                            <h3>Position : 2</h3>
                        </div>
                        <p class="mb-3 my-4 font-normal text-black">A mid-level to senior Android Developer who possesses a passion for pushing mobile technologies</p>
                        {/* <a class="inline-flex items-center px-4 py-2 text-sm font-medium text-center rounded-full text-white bg-black hover:bg-white hover:text-black hover:border-2 border-black transition ">
                            Apply now <BsChevronDown className='ml-2'/>
                        </a> */}
                     <div className='text-black mt-3 flex items-center'>
                            <div className='font-semibold'>Apply now :</div>
                            <div className='ml-2  font-medium'> info@avrut.com</div>
                        </div>
                    </div>
                    <div class=" p-6 sm:mt-10 bg-white border border-gray-200 rounded-lg shadow hover:scale-110 ease-in duration-300" data-aos="flip-down">
                        <a >
                            <h5 class="mb-2 text-2xl font-semibold tracking-tight text-black">Fullstack Developer</h5>
                        </a>
                        <div className='flex justify-between font-semibold py-3 dark:text-black'>
                            <h3>Experience : 0-3</h3>
                            <h3>Position : 3-4 Years</h3>
                        </div>
                        <p class="mb-3 my-4 font-normal text-black">A mid-level to senior Full stack Developer with Excellent skills and Programming constructs, algorithms, and data structures, Advanced data structures, problem-solving, and computer science fundamentals ,Develop software and systems using OOP principles and system design techniques, Build efficient data processing systems with ETL pipelines, big data tech, and cloud services.</p>
                        {/* <a class="inline-flex items-center px-4 py-2 text-sm font-medium text-center rounded-full text-white bg-black hover:bg-white hover:text-black hover:border-2 border-black transition ">
                            Apply now <BsChevronDown className='ml-2'/>
                        </a> */}
                        <div className='text-black mt-3 flex items-center'>
                            <div className='font-semibold'>Apply now :</div>
                            <div className='ml-2  font-medium'> info@avrut.com</div>
                        </div>
                    </div>
                    <div class=" sm:mt-10 p-6 bg-white border border-gray-200 rounded-lg shadow hover:scale-110 ease-in duration-300" data-aos="flip-down">
                        <a >
                            <h5 class="mb-2 text-2xl font-semibold tracking-tight text-black">Frontend Designer</h5>
                        </a>
                        <div className='flex justify-between font-semibold py-3 dark:text-black'>
                            <h3>Experience : 1 - 2 Years</h3>
                            <h3>Position : 2</h3>
                        </div>
                        <p class="mb-3 my-4 font-normal text-black">A mid-level to senior Frontend Developer with Excellent skills and able learn new technologies quickly</p>
                        {/* <a class="inline-flex items-center px-4 py-2 text-sm font-medium text-center rounded-full text-white bg-black hover:bg-white hover:text-black hover:border-2 border-black transition ">
                            Apply now <BsChevronDown className='ml-2'/>
                        </a> */}
                       <div className='text-black mt-3 flex items-center'>
                            <div className='font-semibold'>Apply now :</div>
                            <div className='ml-2  font-medium'> info@avrut.com</div>
                        </div>
                    </div>
                </div>
            </div>
            <Footer />
        </>
    )
}

export default Career