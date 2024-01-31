import React from 'react'
import { FaUserGroup } from "react-icons/fa6";

function Choose() {
    const cards = [
        {
            icon: <FaUserGroup />,
            Header: "We put our clients first",
            main: "At Avrut solutions, we focus on building launch-ready solutions. We follow established workflows, design standards, and guidelines to provide a unique, user..."
        },
        {
            icon: <FaUserGroup />,
            Header: "Highly skilled  teams",
            main: "Developers at Avrut Solutions have decades of experience working with advanced technologies. We work in sync with."
        },
        {
            icon: <FaUserGroup />,
            Header: "Budget-friendly quote",
            main: "We offer the best-in-class software development services on time and within budget. Our competitive pricing for high-performing apps"
        },
        {
            icon: <FaUserGroup />,
            Header: "Strong vision and mission",
            main: "Our aim is to consistently create ingenious solutions to help businesses thrive in this era of technology. We strive to provide"
        },
        {
            icon: <FaUserGroup />,
            Header: "100% transparency",
            main: "Our planning, designing, developing, testing, and deploying processes are fully transparent. We implement continuous"
        },
        {
            icon: <FaUserGroup />,
            Header: "We put our clients first",
            main: "At Avrut solutions, we focus on building launch-ready solutions. We follow established workflows, design standards, and guidelines to provide a unique, user..."
        }
    ]



    return (
        <>
            <div className='max-h-max w-full bg-black p-10' style={{ backgroundImage: `url("https://www.braincuber.com/_next/static/media/why-choose-us-bg.2b08a4f6.webp")` }}>
                <div className='container mx-auto text-center lg:px-56'>
                    <h1 className='text-center text-white pt-10 text-4xl font-semibold'>Why Choose Us</h1>
                    <p className='text-white pt-5'>Avrut Solutions develops affordable and quality digital products for a range of businesses. Our software development company has a proven record of great success stories. We pour our knowledge and experience into delivering solutions that fulfil your needs, expectations, and budget.</p>
                </div>
                <div className='container mx-auto text-center lg:px-28'>
                    <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 my-10'>
                        {cards.map((e) => {
                            return (
                                <>
                                    <div className="relative group cursor-pointer group overflow-hidden  text-gray-50 rounded-2xl hover:duration-700 duration-700 h-72">
                                        <div className="bg-[#202020] text-white h-72 w-full flex justify-center p-10 text-5xl md:text-9xl group-hover:text-3xl md:group-hover:text-5xl  ease-in-out duration-500">
                                            {e?.icon}
                                        </div>
                                        <div className="absolute  bg-gray-50 -bottom-[100px] h-40 group-hover:h-max w-full p-3 flex flex-col gap-1 group-hover:-bottom-0 group-hover:duration-700  duration-700 ease-in-out   ">
                                            {/* <span className="text-black font-bold text-xs">{e?.Header}</span> */}
                                            <span className="text-gray-800 font-bold text-2xl mb-3">{e?.Header} </span>
                                            <p className="text-neutral-800">{e?.main}</p>
                                        </div>
                                    </div>
                                </>
                            )
                        })}
                    </div>
                </div>
            </div>
        </>
    )
}

export default Choose