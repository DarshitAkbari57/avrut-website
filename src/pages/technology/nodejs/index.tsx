import Faq from '@/component/FAQ'
import First from '@/component/First/First'
import React from 'react'

function Nodejs() {


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


            <First title="Node.js Development Company" subtitle="Avrut solutions is a leading Node.js development company catering a wide gamut of business segments from startups to enterprises." />

            <div className="relative flex flex-col-reverse   items-center mx-auto lg:flex-row-reverse lg:max-w-5xl  md:my-10 xl:max-w-6xl">

                {/* <!-- Image Column --> */}
                <div className="w-full h-64 lg:w-1/2 lg:h-auto">
                    <img className="h-full w-full object-cover" src="https://picsum.photos/id/1018/2000" alt="Winding mountain road" />
                </div>
                {/* <!-- Close Image Column --> */}

                {/* <!-- Text Column --> */}
                <div
                    className="max-w-lg bg-white lg:max-w-2xl md:z-10 md:shadow-lg lg:absolute md:top-0  lg:w-3/5 lg:left-0 lg:mt-20 lg:ml-20 xl:mt-24 xl:ml-12 rounded-2xl">
                    {/* <!-- Text Wrapper --> */}
                    <div className="flex flex-col p-4 md:p-8 md:px-16">
                        <h2 className="text-2xl font-medium uppercase text-primary lg:text-4xl">Why Choose Us For Node.js</h2>
                        <p className="mt-4">
                            Our Node.js development company follows a proven development process that combines industry best practices, agile methodologies, and a focus on client collaboration to deliver successful and high-quality applications.
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

export default Nodejs

