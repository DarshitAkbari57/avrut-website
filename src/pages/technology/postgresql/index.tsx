import Faq from '@/component/FAQ'
import First from '@/component/First/First'
import ChooseTechnology from '@/component/Technology/ChooseTechnology/ChooseTechnology'
import Process from '@/component/Technology/Process/Process'
import TechnologyServices from '@/component/Technology/TechnologyServices/TechnologyServices'
import WhyThisTechnology from '@/component/Technology/WhyThisTechnology/WhyThisTechnology'
import React from 'react'
import ImageTech from "../../../assets/technology/postgresql.png"


function Postgresql() {


    const services = [
        {
            numbers: "1",
            main: "PostgreSQL development",
            content: "Avrut Solutions offers top-notch PostgreSQL development services, encompassing advanced query optimization, robust data modelling, and expert support, delivering high-performance database solutions tailored to clients' specific needs."
        },
        {
            numbers: "2",
            main: "Custom PostgreSQL solutions",
            content: "We specialize in custom PostgreSQL development services, providing tailored database solutions, bespoke query optimizations, and personalized support to meet unique business requirements efficiently."
        },
        {
            numbers: "3",
            main: "Maintenance and support",
            content: "We offer proactive monitoring, prompt issue resolution, and continuous optimizations to ensure the stability and optimal performance of clients' PostgreSQL databases."
        },
        {
            numbers: "4",
            main: "PostgreSQL upgrade",
            content: "Our team offers seamless PostgreSQL upgrade services by providing smooth migration, version compatibility checks, and thorough testing to ensure a successful and hassle-free transition to the latest PostgreSQL version."
        },
        {
            numbers: "5",
            main: "Native & advanced PostgreSQL",
            content: "We provide comprehensive native and advanced PostgreSQL services, offering standard database solutions and specialized features to address complex requirements, ensuring optimal performance and scalability for clients' projects."
        },
        {
            numbers: "6",
            main: "PostgreSQL design service",
            content: "Our company offers expert PostgreSQL design services, employing best practices in data modelling, indexing, and schema design to create efficient and well-structured databases tailored to clients' specific needs."
        }
    ]

    const whyTechnoloy = [
        {
            numbers: "1",
            main: "Coding structure",
            content: "The coding structure of PostgreSQL follows a modular and well-organized design, incorporating SQL and procedural language constructs for efficient database management and extensibility."
        },
        {
            numbers: "2",
            main: "Speedy programming",
            content: "PostgreSQL's speedy programming is attributed to its advanced query planner, intelligent indexing, parallel processing capabilities, and continuous performance optimizations, ensuring efficient data handling and quick response times for applications and queries."
        },
        {
            numbers: "3",
            main: "Custom widgets",
            content: "PostgreSQL offers a custom widgets feature that empowers developers to design and integrate tailored graphical user interface components, enhancing the versatility and user interactivity of applications."
        },
        {
            numbers: "4",
            main: "Fast & efficient testing",
            content: "PostgreSQL offers a fast and efficient testing feature that enables developers to conduct comprehensive tests on database functions and queries, ensuring reliable and optimized performance."
        },
        {
            numbers: "5",
            main: "Seamless user experience",
            content: "PostgreSQL ensures a seamless user experience with its user-friendly interfaces, comprehensive documentation, and efficient error handling, simplifying database management and fostering an intuitive user journey."
        },
        {
            numbers: "6",
            main: "Framework",
            content: "PostgreSQL provides a flexible and extensible framework that allows developers to integrate custom extensions and plugins, enhancing the functionality and adaptability of the database management system."
        }
    ]

    const process = [
        {
            no: "01",
            main: "Requirement gathering",
            content: "Our team engages in extensive discussions with clients to elicit detailed project requirements, enabling the creation of a customized and efficient database solution that aligns precisely with the client's objective"
        },
        {
            no: "02",
            main: "Proposal & engagement",
            content: "We present a comprehensive project proposal outlining the scope, timeline, and deliverables, ensuring clear communication and mutual agreement before commencing the development journey."
        },
        {
            no: "03",
            main: "Designs, wireframes & mockups",
            content: "Our design team crafts visual prototypes of the database schema and application interface, facilitating effective communication and collaboration with clients for a user-centric and intuitive database solution."
        },
        {
            no: "04",
            main: "Prototype demo",
            content: "Our company showcases a working model of the database solution to clients, enabling real-time feedback and iterative improvements, ensuring the final product meets the desired specifications and expectations"
        },
        {
            no: "05",
            main: "Changes requests",
            content: "During this stage, company accommodates client's requested modifications to the database solution, fostering agile development and delivering a tailored and responsive system that aligns precisely with the client's evolving requirements."
        },
        {
            no: "06",
            main: "Development",
            content: "During development stage, the team meticulously refines PostgreSQL, incorporating innovative features and rigorous testing to ensure a robust and reliable database management system."
        },
        {
            no: "07",
            main: "Deployment",
            content: "Our team systematically releases PostgreSQL, streamlining installation procedures and conducting thorough compatibility tests to guarantee a stable and efficient database management system for users."
        },
        {
            no: "08",
            main: "Support & maintenance",
            content: "During the Support & Maintenance stage, our experts diligently addresses bug fixes, security updates, and performance optimizations, ensuring PostgreSQL users receive ongoing assistance and reliable long-term support."
        },
        {
            no: "09",
            main: "SEO",
            content: "Our company optimizes PostgreSQL database configurations and implements SEO strategies to maximize search engine visibility and ensure efficient handling of web-based applications and content."
        },
    ]

    const accordionItems = [
        { title: '01.  Does SQL Developer support PostgreSQL?', content: 'Oracle SQL developer supports SQL developer by connecting with the third party JDBC Driver.' },
        {
            title: '02.  Is PostgreSQL production ready software?', content: 'No, PostgreSQL is not a production ready software. It requires additional tools to support its functionality like connection pooling, high availability software, monitoring, etc.'
        },
        {
            title: '03.  When was PostgreSQL developed?', content: 'PostgreSQL was developed in 1986 by Michael Stonebraker, a computer science professor at Berkley. It was a follow up to INGRES and was originally called Postgres.'
        },
        {
            title: '04. What is PostgreSQL?', content: 'PostgreSQL is an open-source and robust relational database management system that offers a high-performance and scalable database.'
        },
        {
            title: '05. What is the difference between SQL and PostgreSQL?', content: 'SQL is a database management system that offers data warehousing solutions and is typically used by eCommerce applications. PostgreSQL is used for dataware housing and storage. It is an advanced version of SQL and is used for several web and mobile applications.'
        },
    ];


    return (
        <>
            <First title="PostgreSQL Development Company" subtitle="Empowering businesses with efficient data management with PostgreSQL services" />

            <ChooseTechnology title="Why Choose Us For PostgreSQL" content="With a wide experience and ability to consistently deliver high-quality, robust, and feature-rich database solutions, the development process followed by our team meets client needs, ensuring stability, security, and optimal performance for mission-critical applications." />

            <TechnologyServices title="PostgreSQL" titleSpan="Service We offer" content="From schema design to performance tuning, we ensure seamless data management, scalability, and reliability for applications built on the foundation of PostgreSQL." services={services} />

            <WhyThisTechnology why="Why" title="PostgreSQL" content="With in-depth knowledge & expertise in PostgreSQL's advanced features, we enable businesses to harness the full potential of this powerful platform for secure, high-performance data management that fuels business growth." technologies={whyTechnoloy} ImageTech={ImageTech.src} />

            <Process process={process} />

            <Faq accordionItems={accordionItems} />
        </>
    )
}

export default Postgresql

