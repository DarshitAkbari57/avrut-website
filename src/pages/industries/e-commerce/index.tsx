import Faq from '@/component/FAQ'
import React from 'react'
import { MdHealthAndSafety } from 'react-icons/md';
import { ImPower } from "react-icons/im";
import { CiCloudOn } from 'react-icons/ci';
import { TbUsersGroup } from 'react-icons/tb';

function Healthcare() {


    const services = [

        {
            numbers: "1",
            main: "Node.js development",
            content: "Our company offers comprehensive Node.js development services to empower businesses with fast and scalable web applications. From API development and real-time applications to server-side scripting and microservices, our skilled Node.js developers harness the power of this runtime environment to deliver efficient and reliable solutions."
        },
        {
            numbers: "2",
            main: "Custom node.js solutions",
            content: "Our Company specializes in providing custom Node.js solutions tailored to your specific business requirements. With our expertise in Node.js development, we create scalable, secure, and highly functional applications that cater to your unique needs, ensuring a seamless user experience and optimal performance."
        },
        {
            numbers: "3",
            main: "Maintenance & support",
            content: "Our Node.js Company offers comprehensive maintenance and support services to ensure the smooth operation of your applications. From regular updates and bug fixes to performance optimization and security enhancements, we provide ongoing assistance to keep your Node.js applications up-to-date and running efficiently."
        },
        {
            numbers: "4",
            main: "Node.js upgrade",
            content: "Our company provides Node.js upgrade solutions to ensure your applications stay up-to-date with the latest features and security enhancements. We handle the entire upgrade process, including migrating to newer versions, refactoring code, and integrating new functionalities, allowing you to leverage the full potential of Node.js for your business. "
        },
        {
            numbers: "5",
            main: "Node.js & advanced node.js development",
            content: "Our company offers both Node.js and advanced Node.js development solutions to cater to diverse business needs. With Node.js, we build scalable and efficient web applications, while our expertise in advanced Node.js techniques enables us to implement complex functionalities, optimize performance, and integrate with various technologies, ensuring robust and cutting-edge solutions for our clients."
        },
        {
            numbers: "6",
            main: "Node.js design services",
            content: "Our Node.js development company offers comprehensive design services, leveraging industry best practices and creative expertise to deliver visually appealing and user-centric designs for Node.js applications."
        }
    ]

    const card = [
        {
            title: "25+ Expert Professionals",
            content: "The modern-day software developed using latest technology enables better patient monitoring, personalized treatment plans, and faster access to medical records, which leads to better patient outcomes and overall care quality.",
            icon: <MdHealthAndSafety />
        },
        {
            title: "25+ Expert Professionals",
            content: "Modern made software with thorough research helps to automate administrative tasks, appointment scheduling, and billing processes, thereby reducing paperwork and saving up healthcare professionals' time for more valuable tasks.",
            icon: <ImPower />
        },
        {
            title: "25+ Expert Professionals",
            content: "The latest software embedded with various features aids in employing robust security measures to safeguard sensitive patient information, protecting against data breaches and ensuring compliance with privacy regulations.",
            icon: <CiCloudOn />
        },
        {
            title: "25+ Expert Professionals",
            content: "Integrated software platforms enable healthcare providers to share patient data and collaborate across departments or even healthcare facilities, facilitating more effective care coordination. ",
            icon: <TbUsersGroup />
        }
    ]


    const why = [

        {
            numbers: "1",
            main: "Coding structure",
            content: "The coding structure in Node.js emphasizes modularity, asynchronous programming, event-driven architecture, and the use of expressive APIs. This structure enables developers to build efficient, scalable, and maintainable applications with ease."
        },
        {
            numbers: "2",
            main: "Speedy programming",
            content: "By combining non-blocking, event-driven architecture, asynchronous programming, the V8 engine, a rich ecosystem, and developer productivity, Node.js enables speedy programming, making it a popular choice for building scalable and high-performance applications."
        },
        {
            numbers: "3",
            main: "Custom widgets",
            content: "By utilizing modular code organization, NPM packages, templating engines, and custom middleware, developers can create and use custom widgets in Node.js applications. These widgets promote code reusability, enhance development efficiency, and enable the creation of scalable and customizable applications."
        },
        {
            numbers: "4",
            main: "Fast & efficient testing",
            content: "Node.js development offers fast and efficient testing capabilities, allowing developers to ensure the quality and reliability of their applications. By leveraging fast execution, testing frameworks, asynchronous testing capabilities, mocking and stubbing, and CI support, Node.js enables developers to perform efficient and effective testing."
        },
        {
            numbers: "5",
            main: "Seamless user experience",
            content: "Whether it's a real-time chat application, a high-performance web app, or a single-page application, Node.js empowers developers to deliver a user-centric experience that meets modern expectations."
        },
        {
            numbers: "6",
            main: "Framework",
            content: "Node.js itself is not a framework but a runtime environment that executes JavaScript code on the server-side, allowing developers to build scalable and efficient web applications using various frameworks like Express, Koa, or Nest.js"
        }
    ]






    return (
        <>


            <div className="relative bg-gradient-to-r from-purple-600 to-blue-600 h-screen md:h-screen text-white overflow-hidden">
                <div className="absolute inset-0">
                    <img src="https://images.unsplash.com/photo-1522252234503-e356532cafd5?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w0NzEyNjZ8MHwxfHNlYXJjaHw2fHxjb2RlfGVufDB8MHx8fDE2OTQwOTg0MTZ8MA&ixlib=rb-4.0.3&q=80&w=1080" alt="Background Image" className="object-cover object-center w-full h-full" />
                    <div className="absolute inset-0 bg-black opacity-50"></div>
                </div>

                <div className="relative z-10 flex flex-col justify-center items-center h-full text-center">
                    <a href="#" className="bg-white text-primary py-2 px-6 rounded-xl text-lg font-semibold transition duration-300 ease-in-out transform hover:scale-105 hover:shadow-lg">Get Started</a>
                    <h1 className="text-5xl font-bold leading-tight mb-4">Welcome to Our Awesome Website</h1>
                    <p className="text-lg text-gray-300 mb-8">Discover amazing features and services that await you.</p>
                </div>
            </div>

            <div className="bg-purple px-2 py-10">
                <div className="container mx-auto  my-5">
                    <div className="lg:mx-auto lg:grid  lg:grid-flow-col-dense lg:grid-cols-2 lg:gap-24 lg:px-8  items-center">
                        <div className="mx-auto max-w-xl px-6 lg:mx-0 lg:max-w-none lg:py-16 lg:px-0 ">
                            <div>
                                <div className="mt-6">
                                    <h2 className="text-5xl font-bold tracking-tight text-black">
                                        About
                                        Healthcare
                                        Industries

                                    </h2>
                                    <p className="mt-4 text-lg text-[#1e1e1e]">
                                        Gone are the days when traditional Medicare was used for treatment and a lot many ailments had no on track record for treatment & early diagnosis.
                                        <br />

                                        Today health industry has been acing at a great pace using multiple technologies & equipment for diagnosis and treatment. With an aim for improving patient care, streamlining administrative processes, and enhancing medical research, we utilize the power of technology to create customized software applications custom-made to the unique needs of healthcare providers and institutions.
                                        <br />
                                        From electronic health record systems and telemedicine platforms to AI-driven data analytics and patient engagement apps, we strive to cater the healthcare sector with transformative digital tools, rendering a healthier, connected, and patient-centric future.
                                        <br />
                                        We help the healthcare industry by crafting customized software solutions and applications that aid organize administrative tasks, enhance patient care, improve data management and analysis, facilitate telemedicine services, and ensure compliance with regulatory standards, ultimately leading to increased efficiency, accuracy, and patient satisfaction.
                                    </p>
                                    <div className="mt-6">
                                        <a className="inline-flex rounded-lg bg-primary px-4 py-1.5 text-base font-semibold leading-7 text-white shadow-sm "
                                            href="/login">
                                            Learn More
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="mt-12 sm:mt-16 lg:mt-0">
                            <img loading="lazy" width="647" height="486"
                                className="w-full rounded-xl shadow-2xl ring-1 ring-black ring-opacity-5 "
                                src="https://images.unsplash.com/photo-1569144157591-c60f3f82f137" />
                        </div>
                    </div>
                </div>

                <div id="features" className="mx-auto">
                    <p className="text-center text-base font-semibold leading-7 text-primary">Features</p>
                    <h2 className="text-center font-display text-3xl font-bold tracking-tight text-slate-900 md:text-4xl">
                        The benefits of digital software to the <br className='hidden md:block' />
                        healthcare
                        industry include
                    </h2>
                    <section className="text-gray-700 body-font">
                        <div className="container py-10 md:py-10 mx-auto">

                            <div className="flex flex-wrap text-center">
                                {card.map((e) => {
                                    return (
                                        <>
                                            <div className="p-4 lg:w-1/4 md:w-1/2 w-full">
                                                <div className="group px-4 rounded-lg transform transition duration-500 hover:scale-110 flex flex-col  justify-center items-center">
                                                    <div className='w-max flex justify-center text-3xl mb-3 p-3 border border-primary text-primary rounded-full bg-purple '>{e?.icon}</div>
                                                    <h2 className="title-font font-medium text-xl md:text-2xl text-gray-900">{e?.title}</h2>
                                                    <p>{e?.content}</p>
                                                    {/* <p className="leading-relaxed">Downloads</p> */}
                                                </div>
                                            </div>
                                        </>
                                    )
                                })}

                            </div>
                        </div>
                    </section>
                </div>

                <div className=' m-auto flex justify-center items-center gap-4 mt-10 '>
                    <div className='text-4xl font-bold  text-center'>
                        How can we help the  <span className='text-primary'>Healthcare
                            industry? </span>
                    </div>
                </div>
                <p className='py-2 max-w-3xl m-auto text-center text-lg'>
                    With a focus on real-time communication, microservices, and seamless integration, we ensure your projects leverage the full potential of Node.js for unparalleled performance and innovation.
                </p>
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-3 justify-items-center items-center px-3 lg:px-10 py-10">
                    <div >
                        <img src="/images/technology/node.png" alt="" />
                    </div>
                    <div className='justify-items-center px-2 lg:px-10'>
                        {why.map((e) => {
                            return (
                                <>
                                    <div className='mb-5'>
                                        <h1 className='text-xl font-bold'>• {e?.main}</h1>
                                        <p className='mb-3'>
                                            {e?.content}
                                        </p>
                                    </div>
                                </>
                            )
                        })

                        }

                    </div>

                </div>




                <Faq />


            </div>
        </>

    )
}

export default Healthcare

