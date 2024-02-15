import React from 'react'

const Process = ({ process }: any) => {
    return (
        <div>
            <div data-aos="fade-right" className=' m-auto flex justify-center items-center gap-4 mt-10 '>
                <hr className='w-[100px] h-[4px] bg-primary' />
                <div className='text-4xl font-bold  text-center'>
                    The <span className='text-primary'>Process</span> we follow
                </div>
                <hr className='w-[100px] h-[4px] bg-primary' />
            </div>

            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 px-2 md:px-14 gap-5  my-8'>
                {process.map((e: any) => {
                    return (
                        <>
                            <div data-aos="zoom-in" className='text-center'>
                                <h1 className='text-8xl font-bold text-[#f2f2f2]'>{e?.no}</h1>
                                <div className='text-xl font-bold'>{e.main}</div>
                                <p>{e?.content}</p>
                            </div>
                        </>
                    )
                })}
            </div>
        </div>
    )
}

export default Process