import React from 'react'
import { BsBarChartFill, BsBuildingFill, BsCheckSquareFill, BsPeopleFill } from 'react-icons/bs'

function Cards() {

    const card = [
        {
            title: "25+ Expert Professionals",
            icon: <BsBuildingFill />
        },
        {
            title: "25+ Expert Professionals",
            icon: <BsBarChartFill />
        },
        {
            title: "25+ Expert Professionals",
            icon: <BsPeopleFill />
        },
        {
            title: "25+ Expert Professionals",
            icon: <BsCheckSquareFill />
        }
    ]
    return (
        <>

            <section className="text-gray-700 body-font">
                <div className="container md:px-5 py-10 md:py-20 mx-auto">

                    <div className="flex flex-wrap text-center">
                        {card.map((e) => {
                            return (
                                <>
                                    <div className="p-4 md:w-1/4 sm:w-1/2 w-full ">
                                        <div className="group px-4 rounded-lg transform transition duration-500 hover:scale-110 flex flex-col md:flex-row justify-center items-center">
                                            <div className='w-max flex justify-center text-4xl mb-3 p-8 border border-primary text-primary rounded-full bg-purple shadow-xl '>{e?.icon}</div>
                                            <h2 className="title-font font-medium text-xl md:text-2xl text-gray-900">{e?.title}</h2>
                                            {/* <p className="leading-relaxed">Downloads</p> */}
                                        </div>
                                    </div>
                                </>
                            )
                        })}

                    </div>
                </div>
            </section>
        </>
    )
}

export default Cards