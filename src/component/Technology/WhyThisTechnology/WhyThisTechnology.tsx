import React from 'react'

const WhyThisTechnology = ({ why, title, content, technologies, ImageTech }: any) => {

    return (
        <div>
            <div className=' m-auto flex justify-center items-center gap-4 mt-10 '>
                <hr className='w-[100px] h-[4px] bg-primary' />
                <div className='text-4xl font-bold  text-center'>
                    {why} <span className='text-primary'>{title}</span>
                </div>
                <hr className='w-[100px] h-[4px] bg-primary' />
            </div>
            <p className='py-2 max-w-3xl m-auto text-center text-lg'>
                {content}
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-3 justify-items-center items-center px-10 py-10">
                <div >
                    <img src={ImageTech} alt="" />
                </div>
                <div className='justify-items-center px-2'>
                    {technologies.map((data: any) => {
                        return (
                            <>
                                <div className='mb-5'>
                                    <h1 className='text-xl font-bold'>• {data?.main}</h1>
                                    <p className='mb-3'>
                                        {data?.content}
                                    </p>
                                </div>
                            </>
                        )
                    })
                    }
                </div>
            </div>

        </div>
    )
}

export default WhyThisTechnology