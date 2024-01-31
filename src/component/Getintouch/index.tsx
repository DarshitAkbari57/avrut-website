import React from 'react'
import { BsClock, BsHouse, BsPhone, BsWatch } from 'react-icons/bs'
import { MdOutlineEmail } from 'react-icons/md'

function Getintouch() {
    return (
        <>
            <div className=''>
                <div className="container mx-auto p-2 md:p-5  max-w-5xl rounded-2xl border shadow-xl my-5">
                    <div className="grid grid-cols-1 md:grid-cols-2 ">
                        <div className="bg-transparent p-3 md:p-10 text-black">
                            <p className="mt-4 text-sm leading-7 font-regular capitalize">
                                Contact us
                            </p>
                            <h3 className="text-3xl sm:text-4xl leading-normal font-extrabold tracking-tight">
                                Get In <span className="text-primary">Touch</span>
                            </h3>
                            <p className="mt-4 leading-7 ">
                                Please inform us about your project, and we'll get back to you as soon as possible.
                            </p>

                            <div className="flex items-center mt-5 gap-4">
                                <BsHouse />
                                <span className="text-sm">309, Amby valley arcade, VIP Circle, Uttaran, Surat-394105</span>
                            </div>
                            <div className="flex items-center mt-5 gap-4">
                                <MdOutlineEmail />
                                <span className="text-sm">info@avrutsolution.com</span>
                            </div>
                            <div className="flex items-center mt-5 gap-4">
                                <BsPhone />
                                <span className="text-sm">+91 1234 567 890</span>
                            </div>

                        </div>
                        <form method="post" className=" p-3 md:p-5 ">
                            <div className="flex flex-wrap -mx-3 mb-3">
                                <div className="w-full px-3">
                                    <label className="block  tracking-wide text-gray-700 text-sm font-bold mb-2"
                                        htmlFor="grid-password">
                                        Name
                                    </label>
                                    <input
                                        className="appearance-none block w-full bg-gray-50 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-primary"
                                        id="grid-email" type="email" placeholder="Name" />
                                </div>
                            </div>
                            <div className="flex flex-wrap -mx-3 mb-3">
                                <div className="w-full px-3">
                                    <label className="block  tracking-wide text-gray-700 text-sm font-bold mb-2"
                                        htmlFor="grid-password">
                                        Email Address
                                    </label>
                                    <input
                                        className="appearance-none block w-full bg-gray-50 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-primary"
                                        id="grid-email" type="email" placeholder="Email address" />
                                </div>
                            </div>
                            <div className="flex flex-wrap -mx-3 mb-3">
                                <div className="w-full px-3">
                                    <label className="block  tracking-wide text-gray-700 text-sm font-bold mb-2"
                                        htmlFor="grid-password">
                                        Mobile number
                                    </label>
                                    <input
                                        className="appearance-none block w-full bg-gray-50 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-primary"
                                        id="grid-email" type="email" placeholder="Mobile number" />
                                </div>
                            </div>

                            <div className="flex flex-wrap -mx-3 mb-3">
                                <div className="w-full px-3">
                                    <label className="block  tracking-wide text-gray-700 text-sm font-bold mb-2"
                                        htmlFor="grid-password">
                                        Your Message
                                    </label>
                                    <textarea rows={5}
                                        placeholder='Message'
                                        className="appearance-none block w-full bg-gray-50 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-primary"></textarea>
                                </div>
                                <div className="flex justify-end w-full px-3">
                                    {/* <div className="md:flex md:items-center">
                                        <label className="block text-gray-500 font-bold">
                                            <input className="mr-2 leading-tight" type="checkbox" />
                                            <span className="text-sm">
                                                Send me your newsletter!
                                            </span>
                                        </label>
                                    </div> */}
                                    <button
                                        className="shadow bg-primary hover:bg-indigo-400 focus:shadow-outline focus:outline-none text-white font-bold py-2 px-6 rounded"
                                        type="submit">
                                        Send Message
                                    </button>

                                </div>
                            </div>

                        </form>

                    </div>
                </div >
            </div>
        </>
    )
}

export default Getintouch