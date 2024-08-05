import Faq from "@/component/FAQ";
import First from "@/component/First/First";
import Process from "@/component/Technology/Process/Process";
import TechnologyServices from "@/component/Technology/TechnologyServices/TechnologyServices";
import WhyThisTechnology from "@/component/Technology/WhyThisTechnology/WhyThisTechnology";
import React from "react";
import ImageTech from "../../../assets/technology/next.png";
import MainBanner from "../../../assets/technology/nextbanner.png";
import Next from "../../../assets/about/next.jpg";

function Nodejs() {
  const services = [
    {
      numbers: "1",
      main: "Next.js development",
      content:
        "Our company offers comprehensive Next.js development services to empower businesses with fast and scalable web applications. From API development and real-time applications to server-side scripting and microservices, our skilled Next.js developers harness the power of this runtime environment to deliver efficient and reliable solutions.",
    },
    {
      numbers: "2",
      main: "Custom Next.js solutions",
      content:
        "We excel in delivering custom Next.js solutions adapting the flexibility and scalability of framework to build tailored web applications that allows us to resolve unique business challenges. With our expertise in Next.js, we aid clients to achieve their goals with highly customized and feature-rich applications.",
    },
    {
      numbers: "3",
      main: "Maintenance & support",
      content:
        "We are prompt in availing maintenance and support services with regular updates, bug fixes, performance optimization, and proactive monitoring. We also offer reliable support to address any issues and ensure the long-term success of our clients' Next.js projects.",
    },
    {
      numbers: "4",
      main: "Next.js upgrade",
      content:
        "We offer Next.js upgrade services, aiding clients to stay up-to-date with the latest version of Next.js and leverage its enhanced features and performance improvements. We handle the upgrade process seamlessly, ensuring a smooth transition and optimizing Next.js applications for better functionality and future scalability.",
    },
    {
      numbers: "5",
      main: "Next.js & advanced Next.js development",
      content:
        "We are expert in providing both native and advanced Next.js services. We deliver unique web applications that leverage Next.js's native capabilities and advanced features. With our expertise, we create high-performing and cutting-edge Next.js solutions.",
    },
    {
      numbers: "6",
      main: "Next.js design services",
      content:
        "By combining innovative design principles and Next.js's capabilities to create visually appealing and user-centric web interfaces, our designers indulge in crafting brand worthy designs. With a focus on UX/UI design, we deliver stunning designs that enhance the overall user experience of Next.js applications.",
    },
  ];

  const whyTechnoloy = [
    {
      numbers: "1",
      main: "Coding structure",
      content:
        "The coding structure in Next.js, facilitates code reusability, maintainability, and scalability, resulting in efficient and streamlined development processes.",
    },
    {
      numbers: "2",
      main: "Speedy programming",
      content:
        "With faster development cycles, quicker response times, and efficient performance, next.js allows developers to deliver robust web applications quicklys.",
    },
    {
      numbers: "3",
      main: "Custom widgets",
      content:
        "Custom widgets are like magic wizards that enhances code modularity and flexibility, enabling developers to create highly customized and interactive user interfaces for web applications with ease.",
    },
    {
      numbers: "4",
      main: "Fast & efficient testing",
      content:
        "Through its built-in testing utilities and frameworks, Next.js facilitates fast and efficient testing enabling developers to write comprehensive unit tests, integration tests, and end-to-end tests, ensuring the reliability and quality of Next.js applications.",
    },
    {
      numbers: "5",
      main: "Seamless user experience",
      content:
        "The seamless user experience in Next.js enhances user satisfaction, engagement, and conversion rates, resulting in improved customer retention and business success.",
    },
    {
      numbers: "6",
      main: "Framework",
      content:
        "Next.js itself is a framework for building server-side rendered (SSR) React applications. It provides a robust and opinionated framework that simplifies the development process, offers built-in routing, server-side rendering capabilities, and other features that make it an efficient and powerful choice for building web applications.",
    },
  ];

  const process = [
    {
      no: "01",
      main: "Requirement gathering",
      content:
        "This stage involves thoroughly understanding the client's needs, goals, and project requirements to define a clear roadmap and scope for the development project.",
    },
    {
      no: "02",
      main: "Proposal & engagement",
      content:
        "This stage involves presenting a detailed project proposal to the client, outlining the scope, timeline, deliverables, and terms of engagement, ensuring mutual understanding and agreement before starting the development project.",
    },
    {
      no: "03",
      main: "Designs, wireframes & mockups",
      content:
        "Here, our team creates visual representations of the application's user interface, ensuring a clear understanding of the design and layout before proceeding with the actual development.",
    },
    {
      no: "04",
      main: "Prototype demo",
      content:
        "In this stage, we present a working prototype of the application, showcasing its core features and functionality to stakeholders, and gathering feedback for further improvements and refinements.",
    },
    {
      no: "05",
      main: "Changes requests",
      content:
        "This stage involves addressing and implementing requested modifications or additions to the application, incorporating client feedback to refine and enhance user experience.",
    },
    {
      no: "06",
      main: "Development",
      content:
        "Writing code, implementing features, and building the application according to the defined requirements and design for efficient and scalable development is done in this stage.",
    },
    {
      no: "07",
      main: "Deployment",
      content:
        "The deployment stage involves preparing the application for production, setting up servers, configuring environments, and ensuring a smooth transition from development to a live environment",
    },
    {
      no: "08",
      main: "Support & maintenance",
      content:
        "This stage checks for the ongoing stability, performance, and updates of the application, providing continuous support, bug fixes, and enhancements to keep the Next.js application running smoothly and up-to-date.",
    },
    {
      no: "09",
      main: "SEO",
      content:
        "Here we implement best practices, optimizing page performance, and enhancing website visibility to improve search engine rankings and drive organic traffic to Next.js applications.",
    },
  ];

  const accordionItems = [
    {
      title: "01.  What are the features of NextJs?",
      content:
        "Hot Code Reloading, Automatic routing, Server Rendering, Ecosystem Compatible.",
    },
    {
      title: "02.  What Is NextJs?",
      content:
        "its a framework written in JavaScript. It can be used instead of Express. But it is not a replacement.",
    },
    {
      title: "03. When will your business need NextJs development?",
      content:
        "When the business needs reusable components that are first rendered on the server so that server pages are indexed by search engines.",
    },
    {
      title: "04.  What is Next.Js used for?",
      content:
        "It used for creating powerful dynamic or static sites and apps that are highly performant, scalable, and cost-effective for a variety of business verticals, such as eCommerce, education, social networking, lifestyle, healthcare, etc.",
    },
    {
      title: "05. Is Next.Js good for SEO?",
      content:
        "Yes. Next.Js is one of the leading frameworks for creating more indexable and SEO friendly websites and applications because of its features like server-side rendering.",
    },
  ];

  return (
    <>
      <First
        title="Next-Level Next.js Development Services for Your Business"
        subtitle="Collaborate with us for High performing - SEO friendly websites built with Next.js"
        MainBanner={MainBanner.src}
      />

      <TechnologyServices
        title="Next.js"
        titleSpan="Service We offer"
        content="From API development to robust backend systems, we harness the power of Next.js to drive innovation and efficiency in your digital projects. With proficiency in backend development and API integration, we enable businesses to create robust and high-performance solutions using the versatility of Next.js."
        services={services}
        Image={Next.src}
      />

      <WhyThisTechnology
        why="Why"
        title="Next.js"
        content=" With our in-depth expertise, we craft speedy and SEO-friendly applications, providing a seamless user experience backed by a history of innovative and successful Next.js implementations."
        technologies={whyTechnoloy}
        ImageTech={ImageTech.src}
      />

      <Process process={process} />

      <Faq accordionItems={accordionItems} />
    </>
  );
}

export default Nodejs;
