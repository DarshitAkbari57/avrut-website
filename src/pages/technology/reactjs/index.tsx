import Faq from "@/component/FAQ";
import First from "@/component/First/First";
import ChooseTechnology from "@/component/Technology/ChooseTechnology/ChooseTechnology";
import Process from "@/component/Technology/Process/Process";
import TechnologyServices from "@/component/Technology/TechnologyServices/TechnologyServices";
import WhyThisTechnology from "@/component/Technology/WhyThisTechnology/WhyThisTechnology";
import React from "react";
import ImageTech from "../../../assets/technology/react.png";
import MainBanner from "../../../assets/technology/reactbanner.png";
import Reacttech from "../../../assets/about/Reacttech.jpg";

function Reactjs() {
  const services = [
    {
      numbers: "1",
      main: "Custom ReactJS Development Services",
      content:
        "We avail robust & dynamic services to clients thereby giving them a competitive edge in respective industry. Our experienced team of developers is well versed in customizing your current application and integrating it with any third-party framework.",
    },
    {
      numbers: "2",
      main: "ReactJS Migration",
      content:
        "We help businesses to migrate seamlessly to JavaScript framework with the help of our ReactJS Development services based on the current setup and requirements. Our team is thorough with the norms of migrating to a new UI framework and can easily define and execute reliable processes to help businesses with a smooth migration.",
    },
    {
      numbers: "3",
      main: "ReactJS Web App Development",
      content:
        "We avail businesses with SEO-friendly and high-performing web apps using reactjs. We ensure the security of the developed applications with an end-to-end encryption. Our team engages in conducting ReactJS code audits to deliver high-quality web applications.",
    },
    {
      numbers: "4",
      main: "Cross domain React JS Development",
      content:
        "Our experienced team of ReactJS developers provides reactjs services to a gamut of industries such as eCommerce, finance, communication, healthcare, retail, education, etc.",
    },
    {
      numbers: "5",
      main: "React JS Integration",
      content:
        "We help clients in integrating existing applications and systems to upscale their businesses. We as a offer integration for specified features that save time and energy in rewriting the remaining application code.",
    },
    {
      numbers: "6",
      main: "ReactJS QA and Testing",
      content:
        "We ace in QA & Testing as well. Our experts make use of advanced development methods along with appropriate tools for delivering visually appealing UI on time without any security breach.",
    },
  ];

  const whyTechnoloy = [
    {
      numbers: "1",
      main: "Coding structure",
      content:
        "The coding structure in React.js emphasizes modularity, asynchronous programming, event-driven architecture, and the use of expressive APIs. This structure enables developers to build efficient, scalable, and maintainable applications with ease.",
    },
    {
      numbers: "2",
      main: "Speedy programming",
      content:
        "By combining non-blocking, event-driven architecture, asynchronous programming, the V8 engine, a rich ecosystem, and developer productivity, React.js enables speedy programming, making it a popular choice for building scalable and high-performance applications.",
    },
    {
      numbers: "3",
      main: "Custom widgets",
      content:
        "By utilizing modular code organization, NPM packages, templating engines, and custom middleware, developers can create and use custom widgets in React.js applications. These widgets promote code reusability, enhance development efficiency, and enable the creation of scalable and customizable applications.",
    },
    {
      numbers: "4",
      main: "Fast & efficient testing",
      content:
        "React.js development offers fast and efficient testing capabilities, allowing developers to ensure the quality and reliability of their applications. By leveraging fast execution, testing frameworks, asynchronous testing capabilities, mocking and stubbing, and CI support, React.js enables developers to perform efficient and effective testing.",
    },
    {
      numbers: "5",
      main: "Seamless user experience",
      content:
        "Whether it's a real-time chat application, a high-performance web app, or a single-page application, React.js empowers developers to deliver a user-centric experience that meets modern expectations.",
    },
    {
      numbers: "6",
      main: "Framework",
      content:
        "React.js itself is not a framework but a runtime environment that executes JavaScript code on the server-side, allowing developers to build scalable and efficient web applications using various frameworks like Express, Koa, or Nest.js",
    },
  ];

  const process = [
    {
      no: "01",
      main: "Requirement gathering",
      content:
        "At the initial stage, we meet & understand the client's requirements, goals, and objectives. Define the scope of the project and create a detailed project plan along with identifying key features, user stories, and technical specifications.",
    },
    {
      no: "02",
      main: "UI/UX Design",
      content:
        "In the second stage, our team of designers design the user interface (UI) and user experience (UX) of the application. We then Create wireframes, mockups, and prototypes for client approval.",
    },
    {
      no: "03",
      main: "Technology Stack & Architecture",
      content:
        "At this stage, we choose required technology stack, including ReactJS for the front-end. Design the overall architecture of the application, considering factors like component structure, state management, and data flow.",
    },
    {
      no: "04",
      main: "Front-End Development",
      content:
        "Here, our team engages in developing the front-end of the application using ReactJS. They create reusable components and ensure a modular structure by using responsive design for various devices and screen sizes.",
    },
    {
      no: "05",
      main: "Integration and Testing",
      content:
        "In this stage, we integrate the front-end with the back-end, perform unit testing and integration testing to identify and fix bugs, Conduct usability testing to ensure the application meets user expectations.",
    },
    {
      no: "06",
      main: "Deployment",
      content:
        "In the deployment stage, our team prepares the application for deployment by creating production builds. Next, we set up hosting environments, such as web servers or cloud platforms like AWS, Heroku, or Netlify and Deploy the application to the chosen hosting environment.",
    },
    {
      no: "07",
      main: "Maintenance",
      content:
        "Lastly, we monitor the application's performance and user experience in the production environment. Address any issues that arise and release updates as needed and provide ongoing maintenance and support to ensure the application remains functional and up to date.",
    },
  ];

  const accordionItems = [
    {
      title: "01.  What is the cost to develop Reactjs web app?",
      content:
        "This cost is subjective to various factors such as the development platform, App categories, Web Application complexity, country of operation and development, and several other features that you need in your app.",
    },
    {
      title: "02.  What is the time duration for Reactjs development?",
      content:
        "The duration might differ, according to different factors such as the experience level of the developer, the development platform, the complexity of the design, features, functionality, testing, etc.",
    },
    {
      title: "03.  What are the benefits of React?",
      content:
        "It makes creating interactive UIs an effortless process. You can develop new features in React without rewriting existing code.",
    },
    {
      title: "04.  What is React?",
      content:
        "React is an open-source front-end JavaScript library for building user interfaces or UI components.",
    },
    {
      title:
        "05.  Why choose Avrut Solutions for React App Development Company?",
      content:
        "We are a leading web & mobile app development company with experience in creating unique apps. Besides this, we have certified React Native App developers, who deliver customer centric approach for your business requirements.",
    },
  ];

  return (
    <>
      <First
        title="Revolutionize Your Web Experience with React.js Development"
        subtitle="Avrut Solutions is a leading React.js development company catering a wide amount of business segments from startups to enterprises."
        MainBanner={MainBanner.src}
      />

      <TechnologyServices
        title="React.js"
        titleSpan="Service We offer"
        content="From API development to robust backend systems, we harness the power of React.js to drive innovation and efficiency in your digital projects. With proficiency in backend development and API integration, we enable businesses to create robust and high-performance solutions using the versatility of React.js."
        services={services}
        Image={Reacttech.src}
      />

      <WhyThisTechnology
        why="Why"
        title="React.js"
        content=" With a focus on real-time communication, microservices, and seamless integration, we ensure your projects leverage the full potential of React.js for unparalleled performance and innovation."
        technologies={whyTechnoloy}
        ImageTech={ImageTech.src}
      />

      <Process process={process} />

      <Faq accordionItems={accordionItems} />
    </>
  );
}

export default Reactjs;
