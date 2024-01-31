import React from 'react'

const ChooseTechnology = ({ title, content }: any) => {
    return (
        <div> <div className="relative flex flex-col items-center mx-auto lg:flex-row-reverse lg:max-w-5xl  my-10 xl:max-w-6xl">

            {/* <!-- Image Column --> */}
            <div className="w-full h-64 lg:w-1/2 lg:h-auto">
                <img className="h-full w-full object-cover" src="https://picsum.photos/id/1018/2000" alt="Winding mountain road" />
            </div>
            {/* <!-- Close Image Column --> */}

            {/* <!-- Text Column --> */}
            <div
                className="max-w-lg bg-white lg:max-w-2xl md:z-10 md:shadow-lg lg:absolute md:top-0  lg:w-3/5 lg:left-0 lg:mt-20 lg:ml-20 xl:mt-24 xl:ml-12 rounded-2xl">
                {/* <!-- Text Wrapper --> */}
                <div className="flex flex-col p-12 md:px-16">
                    <h2 className="text-2xl font-medium text-primary lg:text-4xl">{title}</h2>
                    <p className="mt-4">
                        {content}
                    </p>
                    {/* <!-- Button Container --> */}
                    <div className="mt-8">
                        <a
                            className="inline-block w-full text-center text-lg cursor-pointer font-medium text-gray-100 bg-primary border-solid b py-2 px-10  hover:shadow-md">Read
                            More</a>
                    </div>
                </div>
                {/* <!-- Close Text Wrapper --> */}
            </div>
            {/* <!-- Close Text Column --> */}

        </div></div>
    )
}

export default ChooseTechnology