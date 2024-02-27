import Faq from "@/component/FAQ";
import First from "@/component/First/First";
import Process from "@/component/Technology/Process/Process";
import TechnologyServices from "@/component/Technology/TechnologyServices/TechnologyServices";
import WhyThisTechnology from "@/component/Technology/WhyThisTechnology/WhyThisTechnology";
import React from "react";
import ImageTech from "../../../assets/technology/node.png";
import MainBanner from "../../../assets/technology/nodebanner.jpg";
import Node from "../../../assets/about/node.jpg"


function Nodejs() {
  const services = [
    {
      numbers: "1",
      main: "Node.js development",
      content:
        "Our company offers comprehensive Node.js development services to empower businesses with fast and scalable web applications. From API development and real-time applications to server-side scripting and microservices, our skilled Node.js developers harness the power of this runtime environment to deliver efficient and reliable solutions.",
    },
    {
      numbers: "2",
      main: "Custom node.js solutions",
      content:
        "Our Company specializes in providing custom Node.js solutions tailored to your specific business requirements. With our expertise in Node.js development, we create scalable, secure, and highly functional applications that cater to your unique needs, ensuring a seamless user experience and optimal performance.",
    },
    {
      numbers: "3",
      main: "Maintenance & support",
      content:
        "Our Node.js Company offers comprehensive maintenance and support services to ensure the smooth operation of your applications. From regular updates and bug fixes to performance optimization and security enhancements, we provide ongoing assistance to keep your Node.js applications up-to-date and running efficiently.",
    },
    {
      numbers: "4",
      main: "Node.js upgrade",
      content:
        "Our company provides Node.js upgrade solutions to ensure your applications stay up-to-date with the latest features and security enhancements. We handle the entire upgrade process, including migrating to newer versions, refactoring code, and integrating new functionalities, allowing you to leverage the full potential of Node.js for your business.",
    },
    {
      numbers: "5",
      main: "Node.js & advanced node.js development",
      content:
        "Our company offers both Node.js and advanced Node.js development solutions to cater to diverse business needs. With Node.js, we build scalable and efficient web applications, while our expertise in advanced Node.js techniques enables us to implement complex functionalities, optimize performance, and integrate with various technologies, ensuring robust and cutting-edge solutions for our clients.",
    },
    {
      numbers: "6",
      main: "Node.js design services",
      content:
        "Our Node.js development company offers comprehensive design services, leveraging industry best practices and creative expertise to deliver visually appealing and user-centric designs for Node.js applications.",
    },
  ];

  const whyTechnoloy = [
    {
      numbers: "1",
      main: "Coding structure",
      content:
        "The coding structure in Node.js emphasizes modularity, asynchronous programming, event-driven architecture, and the use of expressive APIs. This structure enables developers to build efficient, scalable, and maintainable applications with ease.",
    },
    {
      numbers: "2",
      main: "Speedy programming",
      content:
        "By combining non-blocking, event-driven architecture, asynchronous programming, the V8 engine, a rich ecosystem, and developer productivity, Node.js enables speedy programming, making it a popular choice for building scalable and high-performance applications.",
    },
    {
      numbers: "3",
      main: "Custom widgets",
      content:
        "By utilizing modular code organization, NPM packages, templating engines, and custom middleware, developers can create and use custom widgets in Node.js applications. These widgets promote code reusability, enhance development efficiency, and enable the creation of scalable and customizable applications.",
    },
    {
      numbers: "4",
      main: "Fast & efficient testing",
      content:
        "Node.js development offers fast and efficient testing capabilities, allowing developers to ensure the quality and reliability of their applications. By leveraging fast execution, testing frameworks, asynchronous testing capabilities, mocking and stubbing, and CI support, Node.js enables developers to perform efficient and effective testing.",
    },
    {
      numbers: "5",
      main: "Seamless user experience",
      content:
        "Whether it's a real-time chat application, a high-performance web app, or a single-page application, Node.js empowers developers to deliver a user-centric experience that meets modern expectations.",
    },
    {
      numbers: "6",
      main: "Framework",
      content:
        "Node.js itself is not a framework but a runtime environment that executes JavaScript code on the server-side, allowing developers to build scalable and efficient web applications using various frameworks like Express, Koa, or Nest.js",
    },
  ];

  const process = [
    {
      no: "01",
      main: "Requirement gathering",
      content:
        "This stage includes understanding the client's requirements and project goals. Collaborate with stakeholders to define the scope, features, and functionalities of the application.",
    },
    {
      no: "02",
      main: "Proposal & engagement",
      content:
        "The proposal stage in Node.js development involves preparing a comprehensive proposal that outlines the project details, objectives, scope, and estimated costs. is crucial for establishing a clear understanding between the client and the Node.js development team.",
    },
    {
      no: "03",
      main: "Designs, wireframes & mockups",
      content:
        "n this stage, the application's architecture and design are defined. This includes designing the database schema, planning the API structure, and creating a high-level system architecture. UI/UX design elements may also be considered.",
    },
    {
      no: "04",
      main: "Prototype demo",
      content:
        "This stage involves presenting the functional aspects of the backend logic, API functionality, and data processing, providing stakeholders with a tangible representation of the application's core features and user flows.",
    },
    {
      no: "05",
      main: "Changes requests",
      content:
        "The changes requests stage in Node.js development involves addressing and implementing requested modifications or additions to the application's functionality",
    },
    {
      no: "06",
      main: "Development",
      content:
        "At this stage, our Developers start writing code, following the defined architecture and design. Node.js and appropriate frameworks and libraries are used to implement server-side logic, API endpoints, data persistence, and any necessary integration.",
    },
    {
      no: "07",
      main: "Deployment",
      content:
        "Once testing is complete, the application is deployed to a production environment. This may involve setting up servers, configuring databases, and ensuring proper security measures",
    },
    {
      no: "08",
      main: "Support & maintenance",
      content:
        "Our team provides ongoing maintenance and support, including bug fixes, security updates, and feature enhancements. Monitor the application's performance, identify and resolve issues promptly, and provide regular updates as needed.",
    },
    {
      no: "09",
      main: "SEO",
      content:
        "The SEO stage in Node.js development involves optimizing the application for search engine visibility and improving its online presence.",
    },
  ];

  const accordionItems = [
    {
      title:
        "01.  What type of applications can be developed by a Node.js development company?",
      content:
        "Streaming apps, Social media apps, Smart city apps, Project management tools, Instant messaging apps, Real-time collaboration tools, Single page responsive apps, Real-time chat apps, Food ordering apps & more.",
    },
    {
      title: "02.  Which leading companies are using Node.js?",
      content: "LinkedIn, NASA, Netflix, Twitter, eBay, Uber & many more.",
    },
    {
      title: "03. Is Node.js a programming language?",
      content:
        "No, Node.js is an open-source, runtime environment that helps a Node.js development company build feature-rich, highly scalable, and full-stack applications",
    },
    {
      title: "04.  Which database do you use for Node.js app development?",
      content:
        "MongoDB, MySQL, MS-SQL, Oracle, MariaDB, Firebase, PostgreSQL & more.",
    },
    {
      title: "05. How much does it cost to build a Node.js application?",
      content:
        "The cost of developing a Node.js application depends on Requirements of the project, Project complexity, Expertise and experience of the Node.js Development Company, Features or functionality of the application, Level of security required & Third-party services.",
    },
  ];

  return (
    <>
      <First
        title="Node.js Development Company"
        subtitle="Avrut solutions is a leading Node.js development company catering a wide gamut of business segments from startups to enterprises."
        MainBanner={MainBanner.src}
      />

      <TechnologyServices
        title="Node.js"
        titleSpan="Service We offer"
        content="From API development to robust backend systems, we harness the power of Node.js to drive innovation and efficiency in your digital projects. With proficiency in backend development and API integration, we enable businesses to create robust and high-performance solutions using the versatility of Node.js."
        services={services}
        Image={Node.src}
      />

      <WhyThisTechnology
        why="Why"
        title="Node.js"
        content=" With a focus on real-time communication, microservices, and seamless integration, we ensure your projects leverage the full potential of Node.js for unparalleled performance and innovation."
        technologies={whyTechnoloy}
        ImageTech={ImageTech.src}
      />

      <Process process={process} />

      <Faq accordionItems={accordionItems} />
    </>
  );
}

export default Nodejs;
