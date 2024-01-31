import React from 'react'

function Slider() {
    return (
        <>
            <div className='w-auto lg:max-w-3xl m-auto my-5 lg:my-20 '>

                <div className='text-3xl lg:text-6xl text-center font-bold whitespace-normal'>
                    We Are  Software <br /> Development
                    Company
                </div>

                <p className='text-base md:text-xl text-center my-5'>Transform your business with adaptable and robust digital solutions that satisfy the needs of modern customers.</p>

                <div className='m-auto w-full flex justify-center'>
                    <button className='px-7 py-3 bg-primary rounded text-white'>Book free consultation</button>
                </div>

            </div>

            <div className='container mx-auto '>
                <img className='h-auto lg:h-[600px] object-cover w-full' src="/images/slider1.webp" alt="" />
            </div >

        </>
    )
}

export default Slider