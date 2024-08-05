import Faq from "@/component/FAQ";
import First from "@/component/First/First";
import Process from "@/component/Technology/Process/Process";
import TechnologyServices from "@/component/Technology/TechnologyServices/TechnologyServices";
import WhyThisTechnology from "@/component/Technology/WhyThisTechnology/WhyThisTechnology";
import React from "react";
import ImageTech from "../../../assets/technology/anguler.png";
import MainBanner from "../../../assets/technology/angularbanner.jpg";
import Anguler from "../../../assets/about/anguler.jpg";

function Angularjs() {
  const services = [
    {
      numbers: "1",
      main: "Expert Angular Development",
      content:
        "At Avrut Solutions, we specialize in Angular development, creating sophisticated web applications that provide exceptional user experiences and outstanding performance across all platforms.",
    },
    {
      numbers: "2",
      main: "Tailored Angular Solutions",
      content:
        "We leverage the Angular framework to develop custom web applications designed to meet your unique requirements, delivering a personalized and optimized user experience tailored to your business needs.",
    },
    {
      numbers: "3",
      main: "Ongoing Maintenance & Support",
      content:
        "Our team of Angular professionals offers comprehensive support, including regular monitoring and maintenance services, to ensure the continued efficiency and reliability of your Angular applications.",
    },
    {
      numbers: "4",
      main: "Angular Framework Upgrades",
      content:
        "We facilitate seamless upgrades from older Angular versions to the latest releases, enhancing your application’s performance, security, and functionality with the newest features available in the framework.",
    },
    {
      numbers: "5",
      main: "Advanced Angular Solutions",
      content:
        "Our expertise in Angular extends to advanced techniques, delivering solutions with real-time updates, offline capabilities, and seamless integration with third-party APIs, providing unmatched functionality and flexibility.",
    },
    {
      numbers: "6",
      main: "Custom Angular Design Services",
      content:
        "We design and build Angular applications that are not only visually appealing but also align with your brand identity, enhancing user engagement and fostering brand loyalty through intuitive and stylish interfaces.",
    },
  ];

  const whyTechnoloy = [
    {
      numbers: "1",
      main: "Coding structure",
      content:
        "The coding structure in Angular development emphasizes the use of components, services, and modules, promoting a modular and reusable approach that enhances code organization and maintainability.",
    },
    {
      numbers: "2",
      main: "Speedy programming",
      content:
        "Angular development supports rapid development cycles enable quicker iterations, avails prompt feature updates and enhancements, thereby leading to increased customer satisfaction and improved ROI.",
    },
    {
      numbers: "3",
      main: "Custom widgets",
      content:
        "Custom widgets enables code reusability and modularity, simplifying future development and maintenance tasks, resulting in a more efficient and scalable Angular application.",
    },
    {
      numbers: "4",
      main: "Fast & efficient testing",
      content:
        "Testing processes in angular development aids quicker feedback loops, enabling developers to make necessary adjustments promptly, leading to faster development iterations and timely delivery.",
    },
    {
      numbers: "5",
      main: "Seamless user experience",
      content:
        "By providing intuitive navigation, fast-loading pages, and responsive design, Angular applications offer a smooth experience, enhancing the overall brand perception and driving business success.",
    },
    {
      numbers: "6",
      main: "Framework",
      content:
        "The robust framework of angular supports modularization, dependency injection, and component-based architecture, which allows developers to build complex and maintainable web applications efficiently.",
    },
  ];

  const process = [
    {
      no: "01",
      main: "Requirements Analysis",
      content:
        "We begin by conducting meetings, interviews, and workshops to gather comprehensive specifications, user stories, and use cases, ensuring we understand all relevant information for the project.",
    },
    {
      no: "02",
      main: "Proposal & Agreement",
      content:
        "Following the requirements analysis, we present a detailed project proposal including scope, timeline, and cost estimates, setting clear expectations and terms for collaboration with the client.",
    },
    {
      no: "03",
      main: "Designs, Wireframes & Mockups",
      content:
        "Our UI/UX team creates visual layouts, navigation structures, and user interaction mockups, fostering a shared understanding among stakeholders and developers for the Angular application.",
    },
    {
      no: "04",
      main: "Interactive Prototype",
      content:
        "We deliver an interactive prototype demonstrating key functionalities of the application, allowing stakeholders to review and provide feedback for further refinement.",
    },
    {
      no: "05",
      main: "Change Requests",
      content:
        "We assess and implement approved change requests carefully, ensuring that any modifications align with the client’s expectations and contribute to delivering a tailored Angular application.",
    },
    {
      no: "06",
      main: "Development Phase",
      content:
        "Our team follows industry best practices and coding standards to build robust and scalable Angular applications, ensuring high performance and reliability.",
    },
    {
      no: "07",
      main: "Deployment",
      content:
        "In the deployment phase, we prepare and configure the Angular application for production, using various tools and strategies to ensure a smooth launch on the intended platform.",
    },
    {
      no: "08",
      main: "Support & Maintenance",
      content:
        "We provide ongoing support, monitoring, and troubleshooting to address any issues or updates that arise after deployment, ensuring the continued performance and stability of the application.",
    },
    {
      no: "09",
      main: "Search Engine Optimization (SEO)",
      content:
        "Our team implements SEO best practices to enhance the Angular application’s visibility and ranking in search engine results, improving its discoverability and reach.",
    },
  ];

  const accordionItems = [
    {
      title: "01.  What is Angular and what is it used for?",
      content:
        "Angular is a frontend JavaScript web application framework. Therefore, it is mainly used for the front-end development of MEAN stack web applications and websites.",
    },
    {
      title:
        "02.  Is post-deployment technical support for Angular project provided from your team?",
      content:
        "Yes, you will get post-deployment technical support from our team. We have a team that takes care of your project 24X7.",
    },
    {
      title: "03. Who will own the source code of my Angular project?",
      content:
        "As the client, you will own the source code. Once the project is launched successfully and payments are cleared, our development team will hand over the project including the source code.",
    },
    {
      title: "04.  What is the cost of developing angular based app?",
      content:
        "The cost of developing an Angular-based web application depends on several factors such as the complexity of the app, features, and functionalities, development time, etc.",
    },
    {
      title: "05. Can Angular be used for Mobile App Development?",
      content:
        "Angular is primarily designed for web application development but it can also be employed to build mobile applications using frameworks like Ionic or NativeScript.",
    },
  ];

  return (
    <>
      <First
        title="Your Premier Angular Development Partner: Empowering Digital Solutions"
        subtitle="Transform the look, feel and performance of your web applications with angular development services"
        MainBanner={MainBanner.src}
      />

      <TechnologyServices
        title="Anguler.js"
        titleSpan="Service We offer"
        content="From API development to robust backend systems, we harness the power of Anguler.js to drive innovation and efficiency in your digital projects. With proficiency in backend development and API integration, we enable businesses to create robust and high-performance solutions using the versatility of Anguler.js."
        services={services}
        Image={Anguler.src}
      />

      <WhyThisTechnology
        why="Why"
        title="Anguler ?"
        content=" With our dominance in the industry for unique approach and support services for angular development, we have ample reasons why you should partner with us."
        technologies={whyTechnoloy}
        ImageTech={ImageTech.src}
      />

      <Process process={process} />

      <Faq accordionItems={accordionItems} />
    </>
  );
}

export default Angularjs;
