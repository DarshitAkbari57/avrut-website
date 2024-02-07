import React from 'react'

const TechnologyServices = ({ title, titleSpan, content, services }: any) => {
    return (
        <div><div className='grid grid-cols-1 md:grid-cols-2 gap-4 py-20 bg-purple px-5 md:px-20'>
            <div>
                <p className='text-4xl font-bold text-primary py-2'>{title} <span className='text-black'> {titleSpan}</span></p>
                <p>{content}</p>
                <img className='mt-8 rounded-lg' src="/images/services/E-com.jpg" alt="" />
            </div>
            <div>
                {services.map((e: any) => {
                    return (
                        <>
                            <div className=' border rounded-2xl border-primary flex p-4 gap-3 bg-white mb-5 hover:scale-105 duration-300 hover:shadow-md hover:shadow-primary'>
                                <div className='text-2xl text-primary font-bold'>0{e.numbers}.</div>
                                <div>
                                    <h1 className='text-xl font-semibold'>{e.main}</h1>

                                    <p className='my-2'>{e.content}</p>
                                </div>
                            </div>
                        </>
                    )
                })}

            </div>
        </div></div>
    )
}

export default TechnologyServices