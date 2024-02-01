import Faq from '@/component/FAQ'
import React from 'react'

function Career() {


    const Culture = [

        {
            main: "Agile",
            content: "Avrut Solutions encourages quick decisions, independent actions, and a simple approach. Being flexible is important to us. It helps us adapt to changes and achieve success."
        },
        {
            main: "Unbiased",
            content: "Committed to an unbiased workplace culture, we value and respect every professional. It means giving ample support for self-development and growth."
        },
        {
            main: "Progressive",
            content: "Our company accepts challenges with open arms. We give every team member many resources to grow exponentially with us."
        },
        {
            main: "Honesty and integrity",
            content: "Avrut Solutions is open to the opinions and ideas of every employee, even if they are brutally honest. We stand as a team, with honesty and responsibility as our intrinsic characteristics."
        },
        {
            main: "Workplace diversity",
            content: "As a successful company, we think inclusively and globally. Diversity is in our DNA, with a workspace consisting of distinct individuals with unique traits and personalities."
        }, {
            main: "Continuous learning",
            content: "Team members here are encouraged to enhance their skills through continuous learning and research. This is what makes our employees experts in their domains."
        },
    ]

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

    const accordionItems = [
        { title: '01.  What services does Avrut Solutions offer?', content: 'Avrut Solutions is a leading software development company that designs and builds applications and other software parts for businesses. We offer a wide range of services, from UI/UX design, web, and mobile app development, custom API development, and DevOps, to project management and business analysis' },
        { title: '02.  Is Avrut Solutions the best for software development?', content: 'Avrut Solutions excels at creating digitally adaptable products that solve real-world problems. Our developers deliver cutting-edge apps on time, regardless of the complexity involved in the development process. We are easily one of the best in the field of software development.' },
        { title: '03.  How is Avrut Solutions better than others?', content: 'Avrut Solutions is better than others because we have a pool of highly skilled engineers with exceptional technical knowledge. Our software developers are experienced in using the latest software standards, tools, frameworks, and technologies. Moreover, we continuously invest in their training and education, so they can respond effectively to any new technology challenges and demands from our customers.' },
    ];


    return (
        <>
            <div className="relative bg-gradient-to-r from-purple-600 to-blue-600 h-max md:h-screen py-10 text-white overflow-hidden">
                <div className="absolute inset-0">
                    <img src="https://images.unsplash.com/photo-1522252234503-e356532cafd5?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w0NzEyNjZ8MHwxfHNlYXJjaHw2fHxjb2RlfGVufDB8MHx8fDE2OTQwOTg0MTZ8MA&ixlib=rb-4.0.3&q=80&w=1080" alt="Background Image" className="object-cover object-center w-full h-full" />
                    <div className="absolute inset-0 bg-black opacity-50"></div>
                </div>

                <div className="relative z-10 flex flex-col justify-center items-center h-full text-center px-5 md:max-w-4xl m-auto">
                    <a href="#" className="bg-white text-primary py-2 px-6 rounded-xl text-lg font-semibold transition duration-300 ease-in-out transform hover:scale-105 hover:shadow-lg my-2">Book now</a>
                    <h1 className="text-2xl  md:text-5xl font-bold leading-tight mb-4">Kickstart a Rewarding Career Avrut Solutions</h1>
                    <p className="text-lg text-gray-300 mb-8">Avrut Solutions is a place where you shape new realities with inspiring ideas and innovative technology. Here, you will be part of a culture conducive to your personal and professional growth. If you love to explore creative solutions and aren’t afraid of challenges, we are excited to meet you. We welcome people passionate about learning new skills and enhancing their capabilities and leadership qualities. Avrut Solutions excels in solving challenges to complex software development through our thought process and cutting-edge technology solutions. We are a fast-growing and dynamic, fun-loving company. Come, and be a part of our ever-growing family. For us, your career growth is a priority.z</p>
                </div>
            </div>

            <div className='bg-purple'>
                <div className='text-xl lg:text-6xl text-center font-bold whitespace-normal px-10 py-3 lg:py-10'>
                    We Are <span className='text-primary mx-1'>Software Development</span> Company
                </div>
                <div className="grid grid-cols-1 lg:grid-cols-2  gap-5 px-4 md:px-10 items-center">

                    <div className='px-4 md:px-20'>
                        <ul className='list-disc  '>
                            {Culture.map((e) => {
                                return (
                                    <>
                                        <li className='mt-3'>
                                            <h1 className='text-lg font-medium'>{e?.main}</h1>
                                            <p>{e?.content}</p>
                                        </li>
                                    </>
                                )
                            })}
                        </ul>
                    </div>
                    <div className='py-6 md:py-0 w-full'>
                        <img className='w-full' src="/images/culture.png" alt="" />
                    </div>
                </div>

                <div className='grid grid-cols-1 lg:grid-cols-2 gap-4 py-4  px-2 md:px-20 mt-5 md:mt-10'>
                    <div>
                        <p className='text-black font-medium text-2xl md:text-6xl'>
                            <span className='text-primary'>Benefits and Perks</span> <br className='hidden md:block' />
                            of Working with <br className='hidden md:block' />
                            Braincuber
                            <br className='hidden md:block' />
                            Technologies
                        </p>
                    </div>
                    <div>
                        {services.map((e) => {
                            return (
                                <>
                                    <div className=' border rounded-2xl border-primary flex flex-col md:flex-row p-4 gap-3 bg-white mb-5'>
                                        <div className='text-2xl text-primary font-bold'>0{e.numbers}.</div>
                                        <div>
                                            <h1 className='text-xl font-semibold'>{e?.main}</h1>
                                            <p className='my-2'>{e?.content}</p>
                                        </div>
                                    </div>
                                </>
                            )
                        })}
                    </div>
                </div>
            </div >
            <Faq accordionItems={accordionItems} />
        </>
    )
}

export default Career