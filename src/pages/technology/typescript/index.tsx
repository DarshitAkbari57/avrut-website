import Faq from "@/component/FAQ";
import First from "@/component/First/First";
import ChooseTechnology from "@/component/Technology/ChooseTechnology/ChooseTechnology";
import Process from "@/component/Technology/Process/Process";
import TechnologyServices from "@/component/Technology/TechnologyServices/TechnologyServices";
import WhyThisTechnology from "@/component/Technology/WhyThisTechnology/WhyThisTechnology";
import React from "react";
import ImageTech from "../../../assets/technology/typescript.png";
import MainBanner from "../../../assets/technology/tsbanner.png";

function Nodejs() {
  const services = [
    {
      numbers: "1",
      main: "Typescript development",
      content:
        "Using the TypeScript development services and implementing its benefits of static typing, advanced tooling, and enhanced JavaScript features, our team of experts build scalable and maintainable applications tailored to meet your specific business needs.",
    },
    {
      numbers: "2",
      main: "Custom typescript solutions",
      content:
        "We avail custom TypeScript solutions tailor made to suit your unique business requirements. Our expertise in TypeScript development, enables us to deliver highly flexible and scalable applications that renders optimal performance and code maintainability.",
    },
    {
      numbers: "3",
      main: "Maintenance & support",
      content:
        "In order to keep your TypeScript applications up-to-date and running efficiently, we offer robust maintenance and support services including regular updates, bug fixes, and proactive monitoring for TypeScript applications, ensuring their smooth operation and longevity.",
    },
    {
      numbers: "4",
      main: "Typescript upgrade",
      content:
        "We help you transition to the latest versions of TypeScript by handling the entire upgrade process, including code refactoring, compatibility checks, and integration of new TypeScript functionalities, thereby ensuring a seamless migration.",
    },
    {
      numbers: "5",
      main: "Typescript & advanced typescript development",
      content:
        "With an expertise in both TypeScript, as well as advanced language features and design patterns, we offer robust, scalable, and highly maintainable applications that utilize the full potential of TypeScript for your business growth.",
    },
    {
      numbers: "6",
      main: "Typescript design services",
      content:
        "To deliver unique user experience and modern design principles, we create interfaces that amplify usability and avail a seamless interaction with your TypeScript applications.",
    },
  ];

  const whyTechnoloy = [
    {
      numbers: "1",
      main: "Coding structure",
      content:
        "TypeScript coding structure has a modular and object-oriented approach, which enables clean and maintainable code organization.",
    },
    {
      numbers: "2",
      main: "Speedy programming",
      content:
        "Typecsript offers speedy programming with static typing allowing for early detection of errors and availing better code intelligence that results in faster development cycles and improved productivity.",
    },
    {
      numbers: "3",
      main: "Custom widgets",
      content:
        "We use custom widgets in Typescript to instill highly customized and intuitive user interface which provides a unique and engaging experience for our clients' applications.",
    },
    {
      numbers: "4",
      main: "Fast & efficient testing",
      content:
        "Fast and efficient testing in TypeScript development is achieved By employing robust testing frameworks and methodologies that validates code integrity, identify bugs early, and deliver reliable and high-quality applications",
    },
    {
      numbers: "5",
      main: "Seamless user experience",
      content:
        "We deliver a seamless user experience in TypeScript development, by blending modern design principles, responsive interfaces, and intuitive interactions that create applications that delight users and drive engagement.",
    },
    {
      numbers: "6",
      main: "Framework",
      content:
        "TypeScript development provides an array of frameworks like Angular, React, and Vue.js which provide a structured and efficient environment for building robust and feature-rich application.",
    },
  ];

  const process = [
    {
      no: "01",
      main: "Requirement gathering",
      content:
        "At this stage, our team gathers and analyzes the client's requirements, project goals, and user needs. Defines the scope of work and establish a clear understanding of the desired functionalities.",
    },
    {
      no: "02",
      main: "Proposal & engagement",
      content:
        "This stage involves Proposal Preparation, Proposal Presentation, Contract Negotiation and initiating the on boarding process to ensure a smooth transition into the development phase.",
    },
    {
      no: "03",
      main: "Designs, wireframes & mockups",
      content:
        "Here we design the database structure, API endpoints, and user interface components, ensuring scalability and flexibility.",
    },
    {
      no: "04",
      main: "Prototype demo",
      content:
        "At this stage, the team presents the functional aspects of the application, demonstrating core features, user flows, and the overall user experience.",
    },
    {
      no: "05",
      main: "Changes requests",
      content:
        "This stage involves addressing and implementing requested modifications or additions to the",
    },
  ];

  const accordionItems = [
    {
      title: "01.  What is TypeScript?",
      content:
        "TypeScript is an open-source programming language developed by Microsoft that extends JavaScript by adding optional static typing, classes, and interfaces.",
    },
    {
      title:
        "02.  Is post-deployment technical support for Angular project provided from your team?",
      content:
        "TypeScript offers several additional features, including generics, tuples, type aliases, interfaces, function overloading, and abstract classes.",
    },
    {
      title:
        "03. What kind of maintenance and support services do you offer for TypeScript applications?",
      content:
        "We provide version upgrades and maintenance services to keep the app updated at all times. We also offer expert consultation on implementing TypeScript in your existing or new web or mobile application projects.",
    },
    {
      title:
        "04.  Why choose Braincuber technologies for TypeScript development project?",
      content:
        "We have highly skilled developers with relevant experience and access to all the resources they need. We also have a dedicated QA team to deliver solutions that are free from bugs and errors.",
    },
    {
      title:
        "05. Do you offer support and assistance at the end of the project?",
      content:
        "Our TypeScript developers also provide expert support and maintenance for your existing & recently launched projects.",
    },
  ];

  return (
    <>
      <First
        title="Typescript Development Company"
        subtitle="Flexible & scalable applications custom made using typescript to suit your business needs"
        MainBanner={MainBanner.src}
      />

      <ChooseTechnology
        title="Why Choose Us For Typescript"
        content="Our TypeScript Development Company follows a proven development process that combines industry best practices, agile methodologies, and a client-centric approach."
      />

      <TechnologyServices
        title="Typescript"
        titleSpan="Service We offer"
        content="Our development company offers tailored solutions, leveraging TypeScript's strong typing to enhance code quality, scalability, and overall project reliability."
        services={services}
      />

      <WhyThisTechnology
        why="Why"
        title="Typescript"
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
