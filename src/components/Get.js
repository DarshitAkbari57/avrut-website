import React from 'react'

function Get() {
    return (
        <>

            <div className='px-5 sm:px-5 md:px-10 lg:px-10 xl:px-20 2xl:px-10  py-3 text-black dark:text-white mt-20'>

                <h3 className='text-center'>HIRE US</h3>
                <h1 className='lg:text-3xl text-2xl   text-center'>Got a project to discuss? Get in touch.</h1>



               {/* <div className='grid lg:grid-cols-2 lg:justify-items-start grid-cols-1 justify-items-center container mx-auto'>
               <div className='pt-20 lg:text-start  text-center'>
                    <h3 className='font-semibold text-2xl'>Address</h3>
                    <div className='leading-10'>India (Head Office)</div>
                    <p className='leading-10'>309 Amby Valley arcade , Surat, Gujarat, India 395006</p>
                </div>
                <div className='pt-20 lg:text-start text-center'>
                    <h3 className='font-semibold text-2xl'>Contact Us</h3>
                    <div className='leading-10'>info@avrut.com</div>
                    <p className='leading-10'>309 Amby Valley arcade , Surat, Gujarat, India 395006</p>
                </div>
               </div> */}


                <div className='pt-20  text-center'>
                    <h3 className='font-semibold text-2xl'>Drop us a line</h3>
                    <div className='leading-10'>Use the form below or send us an email.</div>
                </div>
                <div class="flex items-center">
                    <div class="w-full m-auto  lg:w-[50%] xl:w-[50%] 2xl:w-[50%]">
                        <form  method="POST">
                            <div class="mb-5">
                                <label
                                    for="name"
                                    class="mb-3 block text-base font-medium "
                                >
                                    Full Name
                                </label>
                                <input
                                    type="text"
                                    name="name"
                                    id="name"
                                    placeholder="Full Name"
                                    class="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
                                />
                            </div>
                            <div class="mb-5">
                                <label
                                    for="email"
                                    class="mb-3 block text-base font-medium "
                                >
                                    Email Address
                                </label>
                                <input
                                    type="email"
                                    name="email"
                                    id="email"
                                    placeholder="example@domain.com"
                                    class="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
                                />
                            </div>
                            <div class="mb-5">
                                <label
                                    for="subject"
                                    class="mb-3 block text-base font-medium "
                                >
                                    Subject
                                </label>
                                <input
                                    type="text"
                                    name="subject"
                                    id="subject"
                                    placeholder="Enter your subject"
                                    class="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
                                />
                            </div>
                            <div class="mb-5">
                                <label
                                    for="message"
                                    class="mb-3 block text-base font-medium "
                                >
                                    Message
                                </label>
                                <textarea
                                    rows="4"
                                    name="message"
                                    id="message"
                                    placeholder="Type your message"
                                    class="w-full resize-none rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
                                ></textarea>
                            </div>
                            <div>
                                <button
                                    class="hover:shadow-form rounded-md bg-black dark:bg-white py-3 px-8 text-base font-semibold text-white dark:text-black outline-none"
                                >
                                    Submit
                                </button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Get