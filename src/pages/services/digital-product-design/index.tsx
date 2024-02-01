import Faq from '@/component/FAQ'
import Portfolio from '@/component/Portfolio/Portfolio'
import Link from 'next/link'
import { useRouter } from 'next/router'
import React from 'react'

function Digitalproductdesign() {


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

    const accordionItems = [
        { title: '01.  What services does Avrut Solutions offer?', content: 'Avrut Solutions is a leading software development company that designs and builds applications and other software parts for businesses. We offer a wide range of services, from UI/UX design, web, and mobile app development, custom API development, and DevOps, to project management and business analysis' },
        { title: '02.  Is Avrut Solutions the best for software development?', content: 'Avrut Solutions excels at creating digitally adaptable products that solve real-world problems. Our developers deliver cutting-edge apps on time, regardless of the complexity involved in the development process. We are easily one of the best in the field of software development.' },
        { title: '03.  How is Avrut Solutions better than others?', content: 'Avrut Solutions is better than others because we have a pool of highly skilled engineers with exceptional technical knowledge. Our software developers are experienced in using the latest software standards, tools, frameworks, and technologies. Moreover, we continuously invest in their training and education, so they can respond effectively to any new technology challenges and demands from our customers.' },
    ];

    const router = useRouter()



    return (
        <>


            <div className="relative bg-gradient-to-r from-purple-600 to-blue-600 h-screen text-white overflow-hidden">
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




            <section className='container mx-auto py-4 lg:py-10 mt-10'>
                <div className='grid grid-cols-1 lg:grid-cols-2 gap-5 md:gap-0 '>
                    <div className=" flex flex-col w-full  justify-center items-start px-2 md:p-8">
                        <h1 className="text-3xl md:text-5xl py-0 md:p-2 text-primary tracking-loose">Who
                            About
                            Software
                            Architecture
                        </h1>

                        <p className="text-sm md:text-base text-black mb-4">
                            Software architecture reveals the system's structure and how the components are connected and interact. The architecture design software procedure involves utilizing technical and operative conditions to develop high-performance, proven-tested, and scalable solutions.
                        </p>
                        <a href="#"
                            className="bg-transparent hover:bg-primary text-primary hover:text-black rounded shadow hover:shadow-lg py-2 px-4 border border-primary hover:border-transparent">
                            Explore Now</a>
                    </div>
                    <div className=''>
                        <img src="https://www.braincuber.com/_next/static/media/about-software-architecture.bf3e2a0b.webp" alt="" />
                    </div>


                </div>
            </section>





            <div className='grid grid-cols-2 gap-4 py-20 bg-purple px-20'>
                <div>
                    <p className='text-4xl font-bold text-primary'>Node.js <span className='text-black'> Service We offer</span></p>
                    <p>From API development to robust backend systems, we harness the power of Node.js to drive innovation and efficiency in your digital projects. With proficiency in backend development and API integration, we enable businesses to create robust and high-performance solutions using the versatility of Node.js.</p>
                </div>
                <div>

                    {services.map((e) => {
                        return (
                            <>
                                <div className=' border rounded-2xl border-primary flex p-4 gap-3 bg-white mb-5'>
                                    <div className='text-2xl text-primary font-bold'>0{e.numbers}.</div>
                                    <div>
                                        <h1 className='text-xl font-semibold'>Node.js development</h1>

                                        <p className='my-2'>Our company offers comprehensive Node.js development services to empower businesses with fast and scalable web applications. From API development and real-time applications to server-side scripting and microservices, our skilled Node.js developers harness the power of this runtime environment to deliver efficient and reliable solutions.</p>
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
                    Why <span className='text-primary'>Node.js</span>
                </div>
                <hr className='w-[100px] h-[4px] bg-primary' />
            </div>
            <p className='py-2 max-w-3xl m-auto text-center text-lg'>
                With a focus on real-time communication, microservices, and seamless integration, we ensure your projects leverage the full potential of Node.js for unparalleled performance and innovation.
            </p>


            <div className="grid grid-cols-2 gap-3 justify-items-center items-center px-10 py-10">
                <div>
                    <img src="https://www.braincuber.com/_next/static/media/why-react-js.94efd491.png" alt="" />
                </div>
                <div className='justify-items-center px-10'>
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


            <Portfolio />

            <Faq accordionItems={accordionItems} />




        </>
    )
}

export default Digitalproductdesign

