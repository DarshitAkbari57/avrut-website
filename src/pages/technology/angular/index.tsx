import Faq from "@/component/FAQ";
import First from "@/component/First/First";
import ChooseTechnology from "@/component/Technology/ChooseTechnology/ChooseTechnology";
import Process from "@/component/Technology/Process/Process";
import TechnologyServices from "@/component/Technology/TechnologyServices/TechnologyServices";
import WhyThisTechnology from "@/component/Technology/WhyThisTechnology/WhyThisTechnology";
import React from "react";
import ImageTech from "../../../assets/technology/anguler.png";

function Angularjs() {
  const services = [
    {
      numbers: "1",
      main: "Angular development",
      content:
        "Avrut Solutions offers expert Angular development services by crafting cutting-edge web applications that deliver seamless user experiences and superior performance.",
    },
    {
      numbers: "2",
      main: "Custom Angular solutions",
      content:
        "Our company utilizes the power of Angular framework to curate bespoke web applications that precisely meet our clients' specific needs, ensuring a tailored and optimized user experience.",
    },
    {
      numbers: "3",
      main: "Maintenance & support",
      content:
        "With a dedicated team of Angular experts, we avail ongoing support, regular monitoring, and timely maintenance, thereby ensuring the longevity and optimal performance of our clients' Angular applications.",
    },
    {
      numbers: "4",
      main: "Angular upgrade",
      content:
        "Our team provides smooth transition from older versions to the latest Angular framework, enhancing performance, security, and leveraging new features for improved functionality.",
    },
    {
      numbers: "5",
      main: "Native & advanced Angular",
      content:
        "With our expertise in Angular techniques, we deliver native angular and advanced solutions incorporating its unique features such as real-time updates, offline functionality, and integration with third-party APIs for unparalleled functionality and versatility.",
    },
    {
      numbers: "6",
      main: "Angular design service",
      content:
        "Our team crafts visually pleasing and functional Angular applications that fits our clients' brand identity, driving enhanced user experiences and fostering brand loyalty.",
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
      main: "Requirement gathering",
      content:
        "This stage involves conducting meetings, interviews, and workshops to collect detailed specifications, user stories, use cases, and any other relevant information.",
    },
    {
      no: "02",
      main: "Proposal & engagement",
      content:
        "After requirement gathering, our team presents a detailed project scope, timeline, and cost estimates to the client, establishing clear expectations and terms for collaboration.",
    },
    {
      no: "03",
      main: "Designs, wireframes & mockups",
      content:
        "In this stage of Angular development, our UI/UX team crafts visual representations of the application's layout, navigation, and user interactions, maintaining a shared understanding between stakeholders and developers",
    },
    {
      no: "04",
      main: "Prototype demo",
      content:
        "We present an interactive prototype of the application at this stage, allowing stakeholders to see key functionalities and provide valuable feedback for further refinement.",
    },
    {
      no: "05",
      main: "Changes requests",
      content:
        "Our development team carefully evaluates changes requests if any, and implement approved changes efficiently to deliver a customized Angular application that meets the client's expectations.",
    },
    {
      no: "06",
      main: "Development",
      content:
        "Our dedicated team of developers employs industry best practices and coding standards to develop robust and scalable Angular applications",
    },
    {
      no: "07",
      main: "Deployment",
      content:
        "In the Deployment stage of Angular development, the application is prepared and configured for production, utilizing various tools and strategies to ensure smooth deployment on the intended platform.",
    },
    {
      no: "08",
      main: "Support & maintenance",
      content:
        "Our development team provides ongoing assistance, monitoring, and troubleshooting to address any issues or updates that may arise post-deployment.",
    },
    {
      no: "09",
      main: "SEO",
      content:
        "In this stage, our team implements best practices to optimize the Angular application for search engines, enhancing its visibility and discoverability in organic search results.",
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
        title="Angular Development Company"
        subtitle="Transform the look, feel and performance of your web applications with angular development services"
      />

      <ChooseTechnology
        title="Why Choose Us For Angular.js"
        content="Our Anguler.js development company follows a proven development process that combines industry best practices, agile methodologies, and a focus on client collaboration to deliver successful and high-quality applications."
      />

      <TechnologyServices
        title="Anguler.js"
        titleSpan="Service We offer"
        content="From API development to robust backend systems, we harness the power of Anguler.js to drive innovation and efficiency in your digital projects. With proficiency in backend development and API integration, we enable businesses to create robust and high-performance solutions using the versatility of Anguler.js."
        services={services}
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
