import Link from 'next/link'
import { useRouter } from 'next/router'
import React from 'react'

function Technologies() {
    const router = useRouter()

    const web = [

        {
            image: "https://www.braincuber.com/_next/static/media/nodejs-icon.92c0a4f1.svg",
            technologies: "Node.js",
            path: "/technology/nodejs"
        },
        {
            image: "https://www.braincuber.com/_next/static/media/typescript-icon.da8de1b1.svg",
            technologies: "Typescript",
            path: "/technology/typescript"
        },
        {
            image: "https://www.braincuber.com/_next/static/media/nextjs-icon.7078ea1b.svg",
            technologies: "Typescript",
            path: "/technology/nodejs"
        },
        {
            image: "https://www.braincuber.com/_next/static/media/reactjs-icon.6a7513f7.svg",
            technologies: "Typescript",
            path: "/technology/nextjs"
        },
        {
            image: "https://www.braincuber.com/_next/static/media/angular-icon.4784d388.svg",
            technologies: "anguler",
            path: "/technology/anguler"
        },
        // {
        //     image: "https://www.braincuber.com/_next/static/media/laravel-icon.223d74b8.svg",
        //     technologies: "Typescript",
        //     path: "/technology/nodejs"
        // },
        // {
        //     image: "https://www.braincuber.com/_next/static/media/svelte-icon.2755a238.svg",
        //     technologies: "Typescript",
        //     path: "/technology/nodejs"
        // },


    ]

    const mobile = [

        {
            image: "https://www.braincuber.com/_next/static/media/react-native-icon.c3721fcd.svg",
            technologies: "Node.js",
            path: "/technology/react-native"
        },
        {
            image: "https://www.braincuber.com/_next/static/media/flutter-icon.10b10518.svg",
            technologies: "TypeScript",
            path: "/technology/flutter"
        },
        {
            image: "https://www.braincuber.com/_next/static/media/angular-icon1.c25a72ac.svg",
            technologies: "Next.js",
            path: "/technology/anguler"
        },
        // {
        //     image: "https://www.braincuber.com/_next/static/media/android-icon.fac5e849.svg",
        //     technologies: "React.js",
        //     path: "/technology/"
        // },
    ]


    const backned = [

        {
            image: "https://www.braincuber.com/_next/static/media/graphql-icon.7d629d14.svg",
            technologies: "Node.js",
            path: "/technology/react-native"
        },
        {
            image: "https://www.braincuber.com/_next/static/media/firebase-icon.cec5de1c.svg",
            technologies: "TypeScript",
            path: "/technology/flutter"
        },
        {
            image: "https://www.braincuber.com/_next/static/media/angular-icon1.c25a72ac.svg",
            technologies: "Next.js",
            path: "/technology/anguler"
        },
        // {
        //     image: "https://www.braincuber.com/_next/static/media/android-icon.fac5e849.svg",
        //     technologies: "React.js",
        //     path: "/technology/"
        // },
    ]




    return (
        <>

            <>
                <div className="relative bg-gradient-to-r from-purple-600 to-blue-600 h-screen md:h-screen text-white overflow-hidden">
                    <div className="absolute inset-0">
                        <img src="https://images.unsplash.com/photo-1522252234503-e356532cafd5?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w0NzEyNjZ8MHwxfHNlYXJjaHw2fHxjb2RlfGVufDB8MHx8fDE2OTQwOTg0MTZ8MA&ixlib=rb-4.0.3&q=80&w=1080" alt="Background Image" className="object-cover object-center w-full h-full" />
                        <div className="absolute inset-0 bg-black opacity-50"></div>
                    </div>

                    <div className="relative z-10 flex flex-col justify-center items-center h-full text-center px-3">
                        <a href="#" className="bg-white text-primary py-2 px-6 rounded-xl text-lg font-semibold transition duration-300 ease-in-out transform hover:scale-105 hover:shadow-lg">Get Started</a>
                        <h1 className="text-3xl md:text-5xl font-bold leading-tight ">Welcome to Our Awesome Website</h1>
                        <p className="text-lg text-gray-300 mb-8">Discover amazing features and services that await you.</p>
                    </div>
                </div>



                <div className="container mx-auto  my-5">

                    {/* web devlopment */}

                    <div className="lg:mx-auto lg:grid  lg:grid-flow-col-dense lg:grid-cols-2 lg:gap-24 lg:px-8 px-3 items-center ">
                        <div className='bg-indigo-50 md:bg-gradient-to-l from-white to-indigo-100 order-1 py-3 my-3 '>
                            <div className="  grid grid-cols-3 lg:grid-cols-2 gap-4 lg:max-w-sm m-auto ">
                                {web.map((e) => {
                                    return (
                                        <>
                                            <Link href={e.path}>
                                                <div className='bg-white w-[80px] h-[80px] md:w-[150px] md:h-[150px] rounded-xl p-4 m-auto flex justify-center items-center shadow'>
                                                    <img src={e.image} alt="" />
                                                </div>
                                            </Link>
                                        </>
                                    )
                                })
                                }
                            </div>
                        </div>
                        <div className="mx-auto max-w-xl  lg:mx-0 lg:max-w-none lg:py-4 xl:py-8 lg:px-3 order-">
                            <div>
                                <div className="mt-6">
                                    <h2 className="text-5xl font-bold tracking-tight text-black">
                                        Web devlopment
                                    </h2>
                                    <p className="mt-4 text-lg text-[#1e1e1e]">
                                        Gone are the days when traditional Medicare was used for treatment and a lot many ailments had no on track record for treatment & early diagnosis.
                                        <br />
                                        Today health industry has been acing at a great pace using multiple technologies & equipment for diagnosis and treatment. With an aim for improving patient care, streamlining administrative processes, and enhancing medical research, we utilize the power of technology to create customized software applications custom-made to the unique needs of healthcare providers and institutions.
                                    </p>
                                    <div className="mt-6">
                                        <button onClick={() => router.push('/industries/healthcare')} className="inline-flex rounded-lg bg-primary px-4 py-1.5 text-base font-semibold leading-7 text-white shadow-sm ">
                                            Learn More
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </div>

                    </div>

                    {/* mobile devlopment */}

                    <div className="lg:mx-auto lg:grid  lg:grid-flow-col-dense lg:grid-cols-2 lg:gap-24 lg:px-8 px-3 items-center">
                        <div className='bg-indigo-50 md:bg-gradient-to-l from-white to-indigo-100 lg:order-1 py-3 my-3'>
                            <div className="  grid grid-cols-3 lg:grid-cols-2 gap-4 max-w-sm m-auto ">
                                {backned?.map((e) => {
                                    return (
                                        <>
                                            <Link href={e.path}>
                                                <div className='bg-white w-[80px] h-[80px] md:w-[150px] md:h-[150px] rounded-xl p-4 m-auto flex flex-col  justify-center items-center'>
                                                    <img src={e.image} alt="" />
                                                </div>
                                            </Link>
                                        </>
                                    )
                                })
                                }
                            </div>
                        </div>
                        <div className="mx-auto max-w-xl  lg:mx-0 lg:max-w-none lg:py-4 xl:py-8 lg:px-3 lg:order-2">
                            <div>
                                <div className="mt-6">
                                    <h2 className="text-5xl font-bold tracking-tight text-black">
                                        Mobile development
                                        technologies
                                    </h2>
                                    <p className="mt-4 text-lg text-[#1e1e1e]">
                                        Gone are the days when traditional Medicare was used for treatment and a lot many ailments had no on track record for treatment & early diagnosis.
                                        <br />
                                        Today health industry has been acing at a great pace using multiple technologies & equipment for diagnosis and treatment. With an aim for improving patient care, streamlining administrative processes, and enhancing medical research, we utilize the power of technology to create customized software applications custom-made to the unique needs of healthcare providers and institutions.
                                    </p>
                                    <div className="mt-6">
                                        <button onClick={() => router.push('/industries/entertainment')} className="inline-flex rounded-lg bg-primary px-4 py-1.5 text-base font-semibold leading-7 text-white shadow-sm ">
                                            Learn More
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </div>

                    </div>


                    {/*Backend */}

                    <div className="lg:mx-auto lg:grid  lg:grid-flow-col-dense lg:grid-cols-2 lg:gap-24 lg:px-8 px-3 items-center">
                        <div className='bg-indigo-50 md:bg-gradient-to-l from-white to-indigo-100 order-1 py-3 my-3'>
                            <div className="  grid grid-cols-3 lg:grid-cols-2 gap-4 max-w-sm m-auto ">
                                {web.map((e) => {
                                    return (
                                        <>
                                            <div className='bg-white w-[80px] h-[80px] md:w-[150px] md:h-[150px] rounded-xl p-4 m-auto flex justify-center items-center'>
                                                <img src={e.image} alt="" />
                                            </div>
                                        </>
                                    )
                                })
                                }
                            </div>
                        </div>
                        <div className="mx-auto max-w-xl  lg:mx-0 lg:max-w-none lg:py-4 xl:py-8 lg:px-3 order-">
                            <div>
                                <div className="mt-6">
                                    <h2 className="text-5xl font-bold tracking-tight text-black">
                                        Backend
                                    </h2>
                                    <p className="mt-4 text-lg text-[#1e1e1e]">
                                        Gone are the days when traditional Medicare was used for treatment and a lot many ailments had no on track record for treatment & early diagnosis.
                                        <br />
                                        Today health industry has been acing at a great pace using multiple technologies & equipment for diagnosis and treatment. With an aim for improving patient care, streamlining administrative processes, and enhancing medical research, we utilize the power of technology to create customized software applications custom-made to the unique needs of healthcare providers and institutions.
                                    </p>
                                    <div className="mt-6">
                                        <button onClick={() => router.push('/industries/healthcare')} className="inline-flex rounded-lg bg-primary px-4 py-1.5 text-base font-semibold leading-7 text-white shadow-sm ">
                                            Learn More
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </div>

                    </div>


                    {/*Front-end */}

                    <div className="lg:mx-auto lg:grid  lg:grid-flow-col-dense lg:grid-cols-2 lg:gap-24 lg:px-8 px-3 items-center">
                        <div className='bg-indigo-50 md:bg-gradient-to-l from-white to-indigo-100 lg:order-1 py-3 my-3'>
                            <div className="  grid grid-cols-3 lg:grid-cols-2 gap-4 max-w-sm m-auto ">
                                {mobile.map((e) => {
                                    return (
                                        <>
                                            <div className='bg-white w-[80px] h-[80px] md:w-[150px] md:h-[150px] rounded-xl p-4 m-auto flex flex-col  justify-center items-center'>
                                                <img src={e.image} alt="" />
                                                {/* <div className='my-2 font-medium'>{e?.technologies}</div> */}
                                            </div>
                                        </>
                                    )
                                })
                                }
                            </div>
                        </div>
                        <div className="mx-auto max-w-xl  lg:mx-0 lg:max-w-none lg:py-4 xl:py-8 lg:px-3 lg:order-2">
                            <div>
                                <div className="mt-6">
                                    <h2 className="text-5xl font-bold tracking-tight text-black">
                                        Front-end
                                    </h2>
                                    <p className="mt-4 text-lg text-[#1e1e1e]">
                                        Gone are the days when traditional Medicare was used for treatment and a lot many ailments had no on track record for treatment & early diagnosis.
                                        <br />
                                        Today health industry has been acing at a great pace using multiple technologies & equipment for diagnosis and treatment. With an aim for improving patient care, streamlining administrative processes, and enhancing medical research, we utilize the power of technology to create customized software applications custom-made to the unique needs of healthcare providers and institutions.
                                    </p>
                                    <div className="mt-6">
                                        <button onClick={() => router.push('/industries/entertainment')} className="inline-flex rounded-lg bg-primary px-4 py-1.5 text-base font-semibold leading-7 text-white shadow-sm ">
                                            Learn More
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </div>

                    </div>


                    {/* devops */}


                    <div className="lg:mx-auto lg:grid  lg:grid-flow-col-dense lg:grid-cols-2 lg:gap-24 lg:px-8 px-3 items-center">
                        <div className='bg-indigo-50 md:bg-gradient-to-l from-white to-indigo-100 order-1 py-3 my-3'>
                            <div className="  grid grid-cols-3 lg:grid-cols-2 gap-4 max-w-sm m-auto ">
                                {web.map((e) => {
                                    return (
                                        <>
                                            <div className='bg-white w-[80px] h-[80px] md:w-[150px] md:h-[150px] rounded-xl p-4 m-auto flex justify-center items-center'>
                                                <img src={e.image} alt="" />
                                            </div>
                                        </>
                                    )
                                })
                                }
                            </div>
                        </div>
                        <div className="mx-auto max-w-xl  lg:mx-0 lg:max-w-none lg:py-4 xl:py-8 lg:px-3 order-">
                            <div>
                                <div className="mt-6">
                                    <h2 className="text-5xl font-bold tracking-tight text-black">
                                        DevOps
                                    </h2>
                                    <p className="mt-4 text-lg text-[#1e1e1e]">
                                        Gone are the days when traditional Medicare was used for treatment and a lot many ailments had no on track record for treatment & early diagnosis.
                                        <br />
                                        Today health industry has been acing at a great pace using multiple technologies & equipment for diagnosis and treatment. With an aim for improving patient care, streamlining administrative processes, and enhancing medical research, we utilize the power of technology to create customized software applications custom-made to the unique needs of healthcare providers and institutions.
                                    </p>
                                    <div className="mt-6">
                                        <button onClick={() => router.push('/industries/healthcare')} className="inline-flex rounded-lg bg-primary px-4 py-1.5 text-base font-semibold leading-7 text-white shadow-sm ">
                                            Learn More
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </div>

                    </div>



                    {/* Database */}

                    <div className="lg:mx-auto lg:grid  lg:grid-flow-col-dense lg:grid-cols-2 lg:gap-24 lg:px-8 px-3 items-center">
                        <div className='bg-indigo-50 md:bg-gradient-to-l from-white to-indigo-100 lg:order-1 py-3 my-3'>
                            <div className="  grid grid-cols-3 lg:grid-cols-2 gap-4 max-w-sm m-auto ">
                                {mobile.map((e) => {
                                    return (
                                        <>
                                            <div className='bg-white w-[80px] h-[80px] md:w-[150px] md:h-[150px] rounded-xl p-4 m-auto flex flex-col  justify-center items-center'>
                                                <img src={e.image} alt="" />
                                                {/* <div className='my-2 font-medium'>{e?.technologies}</div> */}
                                            </div>
                                        </>
                                    )
                                })
                                }
                            </div>
                        </div>
                        <div className="mx-auto max-w-xl  lg:mx-0 lg:max-w-none lg:py-4 xl:py-8 lg:px-3 lg:order-2">
                            <div>
                                <div className="mt-6">
                                    <h2 className="text-5xl font-bold tracking-tight text-black">
                                        Database
                                    </h2>
                                    <p className="mt-4 text-lg text-[#1e1e1e]">
                                        Gone are the days when traditional Medicare was used for treatment and a lot many ailments had no on track record for treatment & early diagnosis.
                                        <br />
                                        Today health industry has been acing at a great pace using multiple technologies & equipment for diagnosis and treatment. With an aim for improving patient care, streamlining administrative processes, and enhancing medical research, we utilize the power of technology to create customized software applications custom-made to the unique needs of healthcare providers and institutions.
                                    </p>
                                    <div className="mt-6">
                                        <button onClick={() => router.push('/industries/entertainment')} className="inline-flex rounded-lg bg-primary px-4 py-1.5 text-base font-semibold leading-7 text-white shadow-sm ">
                                            Learn More
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </div>

                    </div>


                    {/*Design */}

                    <div className="lg:mx-auto lg:grid  lg:grid-flow-col-dense lg:grid-cols-2 lg:gap-24 lg:px-8 px-3 items-center">
                        <div className='bg-indigo-50 md:bg-gradient-to-l from-white to-indigo-100 order-1 py-3  my-3'>
                            <div className="  grid grid-cols-3 lg:grid-cols-2 gap-4 max-w-sm m-auto">
                                {web.map((e) => {
                                    return (
                                        <>
                                            <div className='bg-white w-[80px] h-[80px] md:w-[150px] md:h-[150px] rounded-xl p-4 m-auto flex justify-center items-center'>
                                                <img src={e.image} alt="" />
                                            </div>
                                        </>
                                    )
                                })
                                }
                            </div>
                        </div>
                        <div className="mx-auto max-w-xl  lg:mx-0 lg:max-w-none lg:py-4 xl:py-8 lg:px-3 order-">
                            <div>
                                <div className="mt-6">
                                    <h2 className="text-5xl font-bold tracking-tight text-black">
                                        Design
                                    </h2>
                                    <p className="mt-4 text-lg text-[#1e1e1e]">
                                        Gone are the days when traditional Medicare was used for treatment and a lot many ailments had no on track record for treatment & early diagnosis.
                                        <br />
                                        Today health industry has been acing at a great pace using multiple technologies & equipment for diagnosis and treatment. With an aim for improving patient care, streamlining administrative processes, and enhancing medical research, we utilize the power of technology to create customized software applications custom-made to the unique needs of healthcare providers and institutions.
                                    </p>
                                    <div className="mt-6">
                                        <button onClick={() => router.push('/industries/healthcare')} className="inline-flex rounded-lg bg-primary px-4 py-1.5 text-base font-semibold leading-7 text-white shadow-sm ">
                                            Learn More
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </div>

                    </div>




                </div>



                <div className="container mx-auto  my-5">

                </div>




            </>




        </>
    )
}

export default Technologies