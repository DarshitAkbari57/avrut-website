import React from 'react'

function Footer() {
    return (
        <>
            <section className="relative overflow-hidden py-10">
                <div className="relative z-10 mx-auto container px-4">
                    <div className="-m-6 flex flex-wrap">
                        <div className="w-full px-10 py-6 md:w-1/2 lg:w-[40%]">
                            <div className="flex h-full flex-col justify-between">
                                <div className="mb-1 inline-flex items-center">
                                    <img className='h-[80px] w-[120px] object-cover' src="/images/assets/logo2.png" alt="" />
                                </div>
                                <div>
                                    <p className="mb-4  text-base font-medium">
                                        We are creative Peoples, passionate for designing well crafted,simple and functional web and mobile apps.
                                    </p>
                                    <p className="text-sm text-gray-600">
                                        © Copyright 2024. All Rights Reserved by Avrut Solutions.
                                    </p>
                                </div>
                            </div>
                        </div>
                        <div className="w-full px-10 py-6 md:w-1/2 lg:w-2/12">
                            <div className="h-full">
                                <h3 className="tracking-px mb-4  text-[16px] capitalize font-semibold  text-gray-500">
                                    Our Pages
                                </h3>
                                <ul className=' '>
                                    <li className="mb-4">
                                        <a
                                            className="text-sm font-medium hover:text-primary cursor-pointer"
                                        >
                                            Features
                                        </a>
                                    </li>
                                    <li className="mb-4">
                                        <a
                                            className=" text-sm font-medium hover:text-primary cursor-pointer"
                                            href="#"
                                        >
                                            Pricing
                                        </a>
                                    </li>
                                    <li className="mb-4">
                                        <a
                                            className=" text-sm font-medium hover:text-primary cursor-pointer"
                                            href="#"
                                        >
                                            Affiliate Program
                                        </a>
                                    </li>
                                    <li>
                                        <a
                                            className=" text-sm font-medium hover:text-primary cursor-pointer"
                                            href="#"
                                        >
                                            Press Kit
                                        </a>
                                    </li>
                                </ul>
                            </div>
                        </div>
                        <div className="w-full px-10 py-6 md:w-1/2 lg:w-2/12">
                            <div className="h-full">
                                <h3 className="tracking-px mb-4 text-[16px] font-semibold text-gray-500">
                                    Support
                                </h3>
                                <ul>
                                    <li className="mb-4">
                                        <a
                                            className="text-sm font-medium text-gray-900 hover:text-primary"
                                            href="#"
                                        >
                                            Account
                                        </a>
                                    </li>
                                    <li className="mb-4">
                                        <a
                                            className="text-sm font-medium text-gray-900 hover:text-primary"
                                            href="#"
                                        >
                                            Help
                                        </a>
                                    </li>
                                    <li className="mb-4">
                                        <a
                                            className="text-sm font-medium text-gray-900 hover:text-primary"
                                            href="#"
                                        >
                                            Contact Us
                                        </a>
                                    </li>
                                    <li>
                                        <a
                                            className="text-sm font-medium text-gray-900 hover:text-primary"
                                            href="#"
                                        >
                                            Customer Support
                                        </a>
                                    </li>
                                </ul>
                            </div>
                        </div>
                        <div className="w-full px-10 py-6 md:w-1/2 lg:w-3/12">
                            <div className="h-full">
                                <h3 className="tracking-px mb-4 text-[16px] text-xs font-semibold text-gray-500">
                                    Address
                                </h3>

                                <div className='text-sm'>
                                    309, Amby valley arcade, VIP Circle, Uttaran, Surat-394105
                                </div>

                                <div className='text-sm'>
                                    Mobile: +91 1234 567 890
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section >

        </>
    )
}

export default Footer