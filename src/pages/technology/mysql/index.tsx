import Faq from "@/component/FAQ";
import First from "@/component/First/First";
import Process from "@/component/Technology/Process/Process";
import TechnologyServices from "@/component/Technology/TechnologyServices/TechnologyServices";
import WhyThisTechnology from "@/component/Technology/WhyThisTechnology/WhyThisTechnology";
import React from "react";
import ImageTech from "../../../assets/technology/mysql.png";
import MainBanner from "../../../assets/technology/mysqlbanner.jpg";
import sql from "../../../assets/about/sql.jpg"

function Nodejs() {
  const services = [
    {
      numbers: "1",
      main: "MySQL development",
      content:
        "We provide comprehensive MySQL development services, encompassing custom database design, efficient query optimization, and seamless application integration, ensuring optimal performance for clients' projects.",
    },
    {
      numbers: "2",
      main: "Custom MySQL solutions",
      content:
        "Avrut Solutions excels in custom MySQL development services, offering bespoke database solutions, optimized query design, and seamless integration, tailored to meet clients' specific project demands with precision.",
    },
    {
      numbers: "3",
      main: "Maintenance and support",
      content:
        "We ensure smooth operations, timely updates, and expert assistance to maximize database performance and resolve any issues promptly.",
    },
    {
      numbers: "4",
      main: "MySQL upgrade",
      content:
        "Our team provides expert MySQL upgrade services, handling version migration, data integrity checks, and rigorous testing to ensure a seamless and efficient transition to the latest MySQL release",
    },
    {
      numbers: "5",
      main: "Native & advanced MySQL",
      content:
        "We offer both native and advanced MySQL services, catering to varied client needs with standard database solutions as well as customized features and optimizations for high-performance applications.",
    },
    {
      numbers: "6",
      main: "MySQL design service",
      content:
        "We avail compelling MySQL design services, implementing effective data modelling and schema design techniques to develop optimized and scalable databases that matches to clients' unique business requirements.",
    },
  ];

  const whyTechnoloy = [
    {
      numbers: "1",
      main: "Coding structure",
      content:
        "MySQL coding structure is flexible and follows an intuitive approach, utilizing SQL queries and stored procedures to facilitate seamless data management and retrieval.",
    },
    {
      numbers: "2",
      main: "Speedy programming",
      content:
        "Due to its intelligent query optimizer and efficient indexing, ensuring rapid data processing and retrieval for enhanced performance, MySQL avails speedy programming.",
    },
    {
      numbers: "3",
      main: "Custom widgets",
      content:
        "MySQL provides a set of custom widgets feature that allows developers to create and integrate customized graphical user interface components to enhance the functionality and user experience of applications.",
    },
    {
      numbers: "4",
      main: "Fast & efficient testing",
      content:
        "MySQL offers a fast and efficient testing feature that allows developers to conduct rigorous tests on database operations and queries, ensuring robustness and high performance.",
    },
    {
      numbers: "5",
      main: "Seamless user experience",
      content:
        "MySQL offers a seamless user experience feature by providing intuitive interfaces, user-friendly tools, and streamlined interactions, making database management and querying straightforward for users of all levels.",
    },
    {
      numbers: "6",
      main: "Framework",
      content:
        "MySQL offers a robust and versatile framework, allowing developers to build scalable applications and websites while benefiting from its rich ecosystem of extensions and plugins.",
    },
  ];

  const process = [
    {
      no: "01",
      main: "Requirement gathering",
      content:
        "Our team collaborates closely with clients to gather comprehensive insights and define precise project goals, laying a solid foundation for a successful database solution tailored to the client's specific needs.",
    },
    {
      no: "02",
      main: "Proposal & engagement",
      content:
        "In this stage, our team formulates a detailed project proposal, encompassing cost estimates, project scope, and timelines, to establish a transparent and collaborative agreement with the client.",
    },
    {
      no: "03",
      main: "Designs, wireframes & mockups",
      content:
        "Our experts create visual representations of the database structure and user interface, enabling clients to visualize and provide feedback on the system's layout and functionality before implementation.",
    },
    {
      no: "04",
      main: "Prototype demo",
      content:
        "Presents a functional demonstration of the database solution to clients, enabling them to experience the system's capabilities first hand and provide valuable feedback for further refinement.",
    },
    {
      no: "05",
      main: "Changes requests",
      content:
        "During this stage, our team diligently assesses and implements client's modification requests, ensuring flexibility and adaptability to evolving project needs while maintaining code integrity and project timelines.",
    },
    {
      no: "06",
      main: "Development",
      content:
        "Our team dedicates itself to enhancing MySQL, diligently implementing optimizations and addressing user feedback to deliver a high-performance, scalable, and feature-rich database system.",
    },
    {
      no: "07",
      main: "Deployment",
      content:
        "Our team meticulously prepares and releases the MySQL database system, ensuring seamless integration and providing comprehensive documentation to facilitate a smooth user experience.",
    },
    {
      no: "08",
      main: "Support & maintenance",
      content:
        "During the Support & Maintenance stage, our team proactively addresses issues, releases timely patches, and provides continuous assistance to ensure MySQL users receive reliable performance and seamless operations.",
    },
    {
      no: "09",
      main: "SEO",
      content:
        "During the SEO stage, the team optimizes MySQL database configurations and implements SEO best practices to enhance search engine visibility and improve overall performance for web applications and websites.",
    },
  ];

  const accordionItems = [
    {
      title: "01.  Does SQL Developer support MySQL?",
      content:
        "Oracle SQL developer supports SQL developer by connecting with the third party JDBC Driver.",
    },
    {
      title: "02.  Is MySQL production ready software?",
      content:
        "No, MySQL is not a production ready software. It requires additional tools to support its functionality like connection pooling, high availability software, monitoring, etc.",
    },
    {
      title: "03.  When was MySQL developed?",
      content:
        "MySQL was developed in 1986 by Michael Stonebraker, a computer science professor at Berkley. It was a follow up to INGRES and was originally called Postgres.",
    },
    {
      title: "04. What is MySQL?",
      content:
        "MySQL is an open-source and robust relational database management system that offers a high-performance and scalable database.",
    },
    {
      title: "05. What is the difference between SQL and MySQL?",
      content:
        "SQL is a database management system that offers data warehousing solutions and is typically used by eCommerce applications. MySQL is used for dataware housing and storage. It is an advanced version of SQL and is used for several web and mobile applications.",
    },
  ];

  return (
    <>
      <First
        title="Maximizing Your Data Potential with MySQL Development"
        subtitle="Avrut Solutions is a leading MySQL development company, backed by a team of skilled developers proficient in optimizing MySQL databases for enhanced performance and seamless user experiences."
        MainBanner={MainBanner.src}
      />

      <TechnologyServices
        title="MySQL Development"
        titleSpan="Service We offer"
        content="With a history of delivering innovative and reliable database solutions, we aim to dominate the segment with unmatched development output & reliability that garners trust & goodwill."
        services={services}
        Image={sql.src}
      />

      <WhyThisTechnology
        why="Why"
        title="MySQL"
        content="We are the best MySQL development company offering the best cutting-edge solutions with a touch of class, integrity, and client satisfaction"
        technologies={whyTechnoloy}
        ImageTech={ImageTech.src}
      />

      <Process process={process} />

      <Faq accordionItems={accordionItems} />
    </>
  );
}

export default Nodejs;
