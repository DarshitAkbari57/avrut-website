import Aos from 'aos';
import React from 'react';
import { useEffect } from 'react';

function Career() {

    useEffect(() => {
        Aos.init({ duration: 3000 });
    }, []);

    return (
        <>
            <h1 className='text-center text-6xl font-semibold  animate__animated animate__fadeInUp'>Career</h1>
            <div className=' px-5 sm:px-5 md:px-10 lg:px-10 xl:px-10 2xl:px-10  py-10 animate__animated animate__fadeInUp'>

                {/* 1 */}
                <div className='grid lg:grid-cols-2 gap-10 grid-cols-1 justify-items-center animation   animate__animated animate__flipinX' >
                    <div class="p-6 sm:mt-10 bg-white border border-gray-200 rounded-lg shadow hover:scale-110 ease-in duration-300" data-aos="flip-down">
                        <a href="#">
                            <h5 class="mb-2 text-2xl font-semibold tracking-tight text-black">Business Development Executive</h5>
                        </a>
                        <div className='flex justify-between font-semibold py-3 dark:text-black'>
                            <h3>Experience : 0-3</h3>
                            <h3>Position : 2</h3>
                        </div>
                        <p class="mb-3 my-4 font-normal text-black">A mid-level to senior BDE Expert with wide range of Management skills who is able to understand and learn new technologies quickly. Must have a fluent english communication</p>
                        <a href="#" class="inline-flex items-center px-4 py-2 text-sm font-medium text-center rounded-full text-white bg-black hover:bg-white hover:text-black hover:border-2 border-black transition ">
                            Read more
                        </a>
                    </div>
                    <div class=" sm:mt-10 p-6 bg-white border border-gray-200 rounded-lg shadow hover:scale-110 ease-in duration-300" data-aos="flip-down">
                        <a href="#">
                            <h5 class="mb-2 text-2xl font-semibold tracking-tight text-black">Business Development Executive</h5>
                        </a>
                        <div className='flex justify-between font-semibold py-3 dark:text-black'>
                            <h3>Experience : 0-3</h3>
                            <h3>Position : 2</h3>
                        </div>
                        <p class="mb-3 my-4 font-normal text-black">A mid-level to senior BDE Expert with wide range of Management skills who is able to understand and learn new technologies quickly. Must have a fluent english communication</p>
                        <a href="#" class="inline-flex items-center px-4 py-2 text-sm font-medium text-center rounded-full text-white bg-black hover:bg-white hover:text-black hover:border-2 border-black transition ">
                            Read more
                        </a>
                    </div>
                    <div class=" p-6 sm:mt-10 bg-white border border-gray-200 rounded-lg shadow hover:scale-110 ease-in duration-300" data-aos="flip-down">
                        <a href="#">
                            <h5 class="mb-2 text-2xl font-semibold tracking-tight text-black">Business Development Executive</h5>
                        </a>
                        <div className='flex justify-between font-semibold py-3 dark:text-black'>
                            <h3>Experience : 0-3</h3>
                            <h3>Position : 2</h3>
                        </div>
                        <p class="mb-3 my-4 font-normal text-black">A mid-level to senior BDE Expert with wide range of Management skills who is able to understand and learn new technologies quickly. Must have a fluent english communication</p>
                        <a href="#" class="inline-flex items-center px-4 py-2 text-sm font-medium text-center rounded-full text-white bg-black hover:bg-white hover:text-black hover:border-2 border-black transition ">
                            Read more
                        </a>
                    </div>
                    <div class=" sm:mt-10 p-6 bg-white border border-gray-200 rounded-lg shadow hover:scale-110 ease-in duration-300" data-aos="flip-down">
                        <a href="#">
                            <h5 class="mb-2 text-2xl font-semibold tracking-tight text-black">Business Development Executive</h5>
                        </a>
                        <div className='flex justify-between font-semibold py-3 dark:text-black'>
                            <h3>Experience : 0-3</h3>
                            <h3>Position : 2</h3>
                        </div>
                        <p class="mb-3 my-4 font-normal text-black">A mid-level to senior BDE Expert with wide range of Management skills who is able to understand and learn new technologies quickly. Must have a fluent english communication</p>
                        <a href="#" class="inline-flex items-center px-4 py-2 text-sm font-medium text-center rounded-full text-white bg-black hover:bg-white hover:text-black hover:border-2 border-black transition ">
                            Read more
                        </a>
                    </div>
                    <div class=" p-6 sm:mt-10 bg-white border border-gray-200 rounded-lg shadow hover:scale-110 ease-in duration-300" data-aos="flip-down">
                        <a href="#">
                            <h5 class="mb-2 text-2xl font-semibold tracking-tight text-black">Business Development Executive</h5>
                        </a>
                        <div className='flex justify-between font-semibold py-3 dark:text-black'>
                            <h3>Experience : 0-3</h3>
                            <h3>Position : 2</h3>
                        </div>
                        <p class="mb-3 my-4 font-normal text-black">A mid-level to senior BDE Expert with wide range of Management skills who is able to understand and learn new technologies quickly. Must have a fluent english communication</p>
                        <a href="#" class="inline-flex items-center px-4 py-2 text-sm font-medium text-center rounded-full text-white bg-black hover:bg-white hover:text-black hover:border-2 border-black transition ">
                            Read more
                        </a>
                    </div>
                    <div class=" sm:mt-10 p-6 bg-white border border-gray-200 rounded-lg shadow hover:scale-110 ease-in duration-300" data-aos="flip-down">
                        <a href="#">
                            <h5 class="mb-2 text-2xl font-semibold tracking-tight text-black">Business Development Executive</h5>
                        </a>
                        <div className='flex justify-between font-semibold py-3 dark:text-black'>
                            <h3>Experience : 0-3</h3>
                            <h3>Position : 2</h3>
                        </div>
                        <p class="mb-3 my-4 font-normal text-black">A mid-level to senior BDE Expert with wide range of Management skills who is able to understand and learn new technologies quickly. Must have a fluent english communication</p>
                        <a href="#" class="inline-flex items-center px-4 py-2 text-sm font-medium text-center rounded-full text-white bg-black hover:bg-white hover:text-black hover:border-2 border-black transition ">
                            Read more
                        </a>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Career