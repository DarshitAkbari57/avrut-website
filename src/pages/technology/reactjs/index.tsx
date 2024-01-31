import Faq from '@/component/FAQ'
import First from '@/component/First/First'
import React from 'react'

function Reactjs() {


    const services = [

        {
            numbers: "1",
            main: "React.js development",
            content: "Our company offers comprehensive React.js development services to empower businesses with fast and scalable web applications. From API development and real-time applications to server-side scripting and microservices, our skilled React.js developers harness the power of this runtime environment to deliver efficient and reliable solutions."
        },
        {
            numbers: "2",
            main: "Custom React.js solutions",
            content: "Our Company specializes in providing custom React.js solutions tailored to your specific business requirements. With our expertise in React.js development, we create scalable, secure, and highly functional applications that cater to your unique needs, ensuring a seamless user experience and optimal performance."
        },
        {
            numbers: "3",
            main: "Maintenance & support",
            content: "Our React.js Company offers comprehensive maintenance and support services to ensure the smooth operation of your applications. From regular updates and bug fixes to performance optimization and security enhancements, we provide ongoing assistance to keep your React.js applications up-to-date and running efficiently."
        },
        {
            numbers: "4",
            main: "React.js upgrade",
            content: "Our company provides React.js upgrade solutions to ensure your applications stay up-to-date with the latest features and security enhancements. We handle the entire upgrade process, including migrating to newer versions, refactoring code, and integrating new functionalities, allowing you to leverage the full potential of React.js for your business. "
        },
        {
            numbers: "5",
            main: "React.js & advanced React.js development",
            content: "Our company offers both React.js and advanced React.js development solutions to cater to diverse business needs. With React.js, we build scalable and efficient web applications, while our expertise in advanced React.js techniques enables us to implement complex functionalities, optimize performance, and integrate with various technologies, ensuring robust and cutting-edge solutions for our clients."
        },
        {
            numbers: "6",
            main: "React.js design services",
            content: "Our React.js development company offers comprehensive design services, leveraging industry best practices and creative expertise to deliver visually appealing and user-centric designs for React.js applications."
        }
    ]



    const why = [

        {
            numbers: "1",
            main: "Coding structure",
            content: "The coding structure in React.js emphasizes modularity, asynchronous programming, event-driven architecture, and the use of expressive APIs. This structure enables developers to build efficient, scalable, and maintainable applications with ease."
        },
        {
            numbers: "2",
            main: "Speedy programming",
            content: "By combining non-blocking, event-driven architecture, asynchronous programming, the V8 engine, a rich ecosystem, and developer productivity, React.js enables speedy programming, making it a popular choice for building scalable and high-performance applications."
        },
        {
            numbers: "3",
            main: "Custom widgets",
            content: "By utilizing modular code organization, NPM packages, templating engines, and custom middleware, developers can create and use custom widgets in React.js applications. These widgets promote code reusability, enhance development efficiency, and enable the creation of scalable and customizable applications."
        },
        {
            numbers: "4",
            main: "Fast & efficient testing",
            content: "React.js development offers fast and efficient testing capabilities, allowing developers to ensure the quality and reliability of their applications. By leveraging fast execution, testing frameworks, asynchronous testing capabilities, mocking and stubbing, and CI support, React.js enables developers to perform efficient and effective testing."
        },
        {
            numbers: "5",
            main: "Seamless user experience",
            content: "Whether it's a real-time chat application, a high-performance web app, or a single-page application, React.js empowers developers to deliver a user-centric experience that meets modern expectations."
        },
        {
            numbers: "6",
            main: "Framework",
            content: "React.js itself is not a framework but a runtime environment that executes JavaScript code on the server-side, allowing developers to build scalable and efficient web applications using various frameworks like Express, Koa, or Nest.js"
        }
    ]



    const process = [
        {
            no: "01",
            main: "Requirement gathering",
            content: "This stage includes understanding the client's requirements and project goals. Collaborate with stakeholders to define the scope, features, and functionalities of the application."
        },
        {
            no: "02",
            main: "Requirement gathering",
            content: "This stage includes understanding the client's requirements and project goals. Collaborate with stakeholders to define the scope, features, and functionalities of the application."
        },
        {
            no: "03",
            main: "Requirement gathering",
            content: "This stage includes understanding the client's requirements and project goals. Collaborate with stakeholders to define the scope, features, and functionalities of the application."
        },
        {
            no: "04",
            main: "Requirement gathering",
            content: "This stage includes understanding the client's requirements and project goals. Collaborate with stakeholders to define the scope, features, and functionalities of the application."
        },
        {
            no: "05",
            main: "Requirement gathering",
            content: "This stage includes understanding the client's requirements and project goals. Collaborate with stakeholders to define the scope, features, and functionalities of the application."
        },
        {
            no: "06",
            main: "Requirement gathering",
            content: "This stage includes understanding the client's requirements and project goals. Collaborate with stakeholders to define the scope, features, and functionalities of the application."
        },
        {
            no: "07",
            main: "Requirement gathering",
            content: "This stage includes understanding the client's requirements and project goals. Collaborate with stakeholders to define the scope, features, and functionalities of the application."
        },
        {
            no: "08",
            main: "Requirement gathering",
            content: "This stage includes understanding the client's requirements and project goals. Collaborate with stakeholders to define the scope, features, and functionalities of the application."
        },
    ]

    return (
        <>


            <First title="React.js Development Company" subtitle="Avrut solutions is a leading React.js development company catering a wide gamut of business segments from startups to enterprises." />



            <div className="relative flex flex-col items-center mx-auto lg:flex-row-reverse lg:max-w-5xl  my-10 xl:max-w-6xl">

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
                        <h2 className="text-2xl font-medium uppercase text-primary lg:text-4xl">Why Choose Us For React.js</h2>
                        <p className="mt-4">
                            Our React.js development company follows a proven development process that combines industry best practices, agile methodologies, and a focus on client collaboration to deliver successful and high-quality applications.
                        </p>
                        {/* <!-- Button Container --> */}
                        <div className="mt-8">
                            <a href="#"
                                className="inline-block w-full text-center text-lg font-medium text-gray-100 bg-primary border-solid b py-2 px-10  hover:shadow-md">Read
                                More</a>
                        </div>
                    </div>
                    {/* <!-- Close Text Wrapper --> */}
                </div>
                {/* <!-- Close Text Column --> */}

            </div>

            <div className='grid grid-cols-1 md:grid-cols-2 gap-4 py-20 bg-purple px-5 md:px-20'>
                <div>
                    <p className='text-4xl font-bold text-primary'>React.js <span className='text-black'> Service We offer</span></p>
                    <p>From API development to robust backend systems, we harness the power of React.js to drive innovation and efficiency in your digital projects. With proficiency in backend development and API integration, we enable businesses to create robust and high-performance solutions using the versatility of React.js.</p>
                </div>
                <div>

                    {services.map((e) => {
                        return (
                            <>
                                <div className=' border rounded-2xl border-primary flex p-4 gap-3 bg-white mb-5'>
                                    <div className='text-2xl text-primary font-bold'>0{e.numbers}.</div>
                                    <div>
                                        <h1 className='text-xl font-semibold'>React.js development</h1>

                                        <p className='my-2'>Our company offers comprehensive React.js development services to empower businesses with fast and scalable web applications. From API development and real-time applications to server-side scripting and microservices, our skilled React.js developers harness the power of this runtime environment to deliver efficient and reliable solutions.</p>
                                    </div>
                                </div>
                            </>
                        )
                    })}

                </div>
            </div>

            <div className=' m-auto flex justify-center items-center gap-4 mt-10 '>
                <hr className='w-[100px] h-[4px] bg-primary' />
                <div className='text-4xl font-bold  text-center'>
                    Why <span className='text-primary'>React.js</span>
                </div>
                <hr className='w-[100px] h-[4px] bg-primary' />
            </div>
            <p className='py-2 max-w-3xl m-auto text-center text-lg'>
                With a focus on real-time communication, microservices, and seamless integration, we ensure your projects leverage the full potential of React.js for unparalleled performance and innovation.
            </p>


            <div className="grid grid-cols-1 md:grid-cols-2 gap-3 justify-items-center items-center px-10 py-10">
                <div >
                    <img src="https://www.braincuber.com/_next/static/media/why-react-js.94efd491.png" alt="" />
                </div>
                <div className='justify-items-center px-2'>
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


            <div className=' m-auto flex justify-center items-center gap-4 mt-10 '>
                <hr className='w-[100px] h-[4px] bg-primary' />
                <div className='text-4xl font-bold  text-center'>
                    The <span className='text-primary'>Process</span> we follow
                </div>
                <hr className='w-[100px] h-[4px] bg-primary' />
            </div>

            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 px-2 md:px-14 gap-5  my-8'>
                {process.map((e) => {
                    return (
                        <>
                            <div className='text-center'>
                                <h1 className='text-9xl font-bold text-[#f2f2f2]'>{e?.no}</h1>
                                <div className='text-xl font-bold'>{e.main}</div>
                                <p>{e?.content}</p>
                            </div>
                        </>
                    )
                })}
            </div>

            <Faq />




        </>
    )
}

export default Reactjs

