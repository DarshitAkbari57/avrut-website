import Aos from 'aos';
import React from 'react';
import { useEffect } from 'react';

function Service1() {


    useEffect(() => {
        Aos.init({ duration: 3000 });
    }, []);


    return (
        <>

          

            {/* design */}

            <section class="text-black dark:text-white body-font ">
                <div class="px-5 md:px-10 lg:px-20 xl:px-20 2xl:px-20 py-10 overflow-x-hidden">
                    <div class="justify-items-center flex flex-col-reverse sm:flex-col-reverse md:flex-col lg:flex-row xl:flex-row 2xl:flex-row  px-2       ">
                    <img alt="ecommerce" class="w-full  md:w-[50%] lg:w-[50%] xl:w-[50%] 2xl:w-[50%] lg:h-[500px] lg:px-2 px-3 h-64 object-cover object-center rounded animation" data-aos="fade-left"   src={require('../images/service1.jpg')} />
                        <div class="w-full  md:w-[50%] lg:w-[50%] xl:w-[50%] 2xl:w-[50%] lg:justify-self-start  lg:ml-20 lg:px-2 px-3  mt-6 lg:mt-0 animation" data-aos="fade-left"   >
                            <div className=''>
                                <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="feather feather-edit size-md str-width-md text-accent"><path d="M11 4H4a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7"></path><path d="M18.5 2.5a2.121 2.121 0 0 1 3 3L12 15l-4 1 1-4 9.5-9.5z"></path></svg>
                            </div>
                            <h1 class="text-3xl title-font font-medium my-4">Designing</h1>
                            <p class="leading-relaxed">Avrut Solutions is being the choice of many now as we provide a complete package and also affordable price with well designed, responsive, interactive, customized and user friendly website.</p>
                            <div className='mt-5 flex'>
                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-check size-2xs str-width-lg text-accent mr-3"><polyline points="20 6 9 17 4 12"></polyline></svg>
                                <h3>Logo & Identity</h3>
                            </div>
                            <div className='mt-2 flex'>
                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-check size-2xs str-width-lg text-accent mr-3"><polyline points="20 6 9 17 4 12"></polyline></svg>
                                <h3>UI/UX design</h3>
                            </div>
                            <div className='mt-2 flex'>
                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-check size-2xs str-width-lg text-accent mr-3"><polyline points="20 6 9 17 4 12"></polyline></svg>
                                <h3>Application Design</h3>
                            </div>
                            <div className='mt-2 flex'>
                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-check size-2xs str-width-lg text-accent mr-3"><polyline points="20 6 9 17 4 12"></polyline></svg>
                                <h3>Website Design</h3>
                            </div>
                            <div className='mt-2 flex'>
                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-check size-2xs str-width-lg text-accent mr-3"><polyline points="20 6 9 17 4 12"></polyline></svg>
                                <h3>HTML/CSS</h3>
                            </div>
                            <div className='mt-2 flex'>
                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-check size-2xs str-width-lg text-accent mr-3"><polyline points="20 6 9 17 4 12"></polyline></svg>
                                <h3>Mobile/Web Landing</h3>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* devlop */}

            <section class="text-black dark:text-white body-font ">
                <div class="px-5 md:px-10 lg:px-20 xl:px-20 2xl:px-20 py-10 overflow-x-hidden">
                    <div class="justify-items-center flex flex-col-reverse sm:flex-col-reverse md:flex-col lg:flex-row xl:flex-row 2xl:flex-row  px-2">
                        <div class="w-full  md:w-[50%] lg:w-[50%] xl:w-[50%] 2xl:w-[50%] lg:justify-self-end lg:mr-20  lg:px-2 px-3  mt-6 lg:mt-0 animation" data-aos="fade-right">
                            <div className=''>
                                <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="feather feather-sliders size-md str-width-md text-accent"><line x1="4" y1="21" x2="4" y2="14"></line><line x1="4" y1="10" x2="4" y2="3"></line><line x1="12" y1="21" x2="12" y2="12"></line><line x1="12" y1="8" x2="12" y2="3"></line><line x1="20" y1="21" x2="20" y2="16"></line><line x1="20" y1="12" x2="20" y2="3"></line><line x1="1" y1="14" x2="7" y2="14"></line><line x1="9" y1="8" x2="15" y2="8"></line><line x1="17" y1="16" x2="23" y2="16"></line></svg>
                            </div>
                            <h1 class=" text-3xl title-font font-medium my-4">Development</h1>
                            <p class="leading-relaxed">With the escalation of smartphones the best deal would be to bring your business online on smartphones and for this Avrut Solutions help you to create user friendly, accessible and secure Website and/or Mobile Apps.</p>
                            <div className='mt-5 flex'>
                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-check size-2xs str-width-lg text-accent mr-3"><polyline points="20 6 9 17 4 12"></polyline></svg>
                                <h3>Web Development</h3>
                            </div>
                            <div className='mt-2 flex'>
                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-check size-2xs str-width-lg text-accent mr-3"><polyline points="20 6 9 17 4 12"></polyline></svg>
                                <h3>Android APP Development</h3>
                            </div>
                            <div className='mt-2 flex'>
                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-check size-2xs str-width-lg text-accent mr-3"><polyline points="20 6 9 17 4 12"></polyline></svg>
                                <h3>IOS APP development</h3>
                            </div>
                            <div className='mt-2 flex'>
                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-check size-2xs str-width-lg text-accent mr-3"><polyline points="20 6 9 17 4 12"></polyline></svg>
                                <h3>Flutter Development</h3>
                            </div>
                            <div className='mt-2 flex'>
                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-check size-2xs str-width-lg text-accent mr-3"><polyline points="20 6 9 17 4 12"></polyline></svg>
                                <h3>React Native Development</h3>
                            </div>
                        </div>
                        <img alt="ecommerce" class="w-full  md:w-[50%] lg:w-[50%] xl:w-[50%] 2xl:w-[50%] lg:h-[500px] lg:px-2 px-3 h-64 object-cover object-center rounded animation" data-aos="fade-left"   src={require('../images/service2.jpg')} />
                    </div>
                </div>
            </section>

            {/* branding */}

            <section class="text-black dark:text-white body-font overflow-hidden">
                <div class="px-5 md:px-10 lg:px-20 xl:px-20 2xl:px-20 py-10 overflow-x-hidden">
                    <div class="justify-items-center flex flex-col sm:flex-col-reverse md:flex-col lg:flex-row xl:flex-row 2xl:flex-row px-2">
                        <img alt="ecommerce" class=" w-full  md:w-[50%] lg:w-[50%] xl:w-[50%] 2xl:w-[50%] lg:h-[500px] lg:px-2 px-3 h-64 object-cover object-center rounded animation" data-aos="fade-right"   src={require('../images/service3.jpg')} />
                        <div class="w-full  md:w-[50%] lg:w-[50%] xl:w-[50%] 2xl:w-[50%] lg:justify-self-start  lg:ml-20 lg:px-2 px-3  mt-6 lg:mt-0 animation" data-aos="fade-left"  >
                            <div className=''>
                                <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="feather feather-feather size-md str-width-md text-accent"><path d="M20.24 12.24a6 6 0 0 0-8.49-8.49L5 10.5V19h8.5z"></path><line x1="16" y1="8" x2="2" y2="22"></line><line x1="17.5" y1="15" x2="9" y2="15"></line></svg>
                            </div>
                            <h1 class="text-3xl title-font font-medium my-4">Branding</h1>
                            <p class="leading-relaxed">Avrut technology brings a fresh perspective that helps you to grow business by branding which is a way of identifying your business.In today's time where everyone is going with digital for promoting or branding. we don't just create strategies but also measure the performance as well.</p>
                            <div className='mt-5 flex'>
                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-check size-2xs str-width-lg text-accent mr-3"><polyline points="20 6 9 17 4 12"></polyline></svg>
                                <h3>Social Media Posts</h3>
                            </div>
                            <div className='mt-2 flex'>
                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-check size-2xs str-width-lg text-accent mr-3"><polyline points="20 6 9 17 4 12"></polyline></svg>
                                <h3>Flyers</h3>
                            </div>
                            <div className='mt-2 flex'>
                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-check size-2xs str-width-lg text-accent mr-3"><polyline points="20 6 9 17 4 12"></polyline></svg>
                                <h3>Banners Design</h3>
                            </div>
                            <div className='mt-2 flex'>
                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-check size-2xs str-width-lg text-accent mr-3"><polyline points="20 6 9 17 4 12"></polyline></svg>
                                <h3>And More.</h3>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

        </>
    )
}

export default Service1