import Link from "next/link";
import { useRouter } from "next/router";
import React from "react";
import First from "@/component/First/First";
import Faq from "@/component/FAQ";
import Portfolio from "@/component/Portfolio/Portfolio";
import Architecture from "@/component/Services/Architecture/Architecture";
import TechnologyServices from "@/component/Technology/TechnologyServices/TechnologyServices";
import WhyThisTechnology from "@/component/Technology/WhyThisTechnology/WhyThisTechnology";
import ImageTech from "../../../assets/technology/architecture.jpg";
import MainBanner from "../../../assets/technology/3.jpg";
import soft from "../../../assets/about/soft.jpg";


function SoftwareArchitecture() {
  const services = [
    {
      numbers: "1",
      main: "Scalability and Performance Optimization",
      content:
        "Effective software architecture anticipates future growth by designing scalable solutions. It focuses on optimizing performance, ensuring the system can handle increasing loads without sacrificing responsiveness or efficiency.",
    },
    {
      numbers: "2",
      main: "Security Integration",
      content:
        "Security is a top priority in software architecture. The design includes robust measures to safeguard against potential vulnerabilities and cyber threats. This involves encryption, authentication, and authorization mechanisms to protect sensitive data and ensure a secure user experience.",
    },
    {
      numbers: "3",
      main: "Modularity and Component Reusability",
      content:
        "Software architecture emphasizes modularity, breaking down the system into independent and reusable components. This modular approach enhances maintainability, facilitates updates, and allows for the efficient reuse of components across different parts of the application.",
    },
    {
      numbers: "4",
      main: "Technology Stack Selection",
      content:
        "Choosing the right technology stack is crucial in software architecture. It involves selecting the appropriate programming languages, frameworks, and tools that align with the project's requirements, ensuring compatibility, performance, and scalability.",
    },
    {
      numbers: "5",
      main: "Documentation and Communication",
      content:
        "Clear documentation is a cornerstone of effective software architecture. It provides a comprehensive understanding of the system's structure, components, and interactions. Additionally, communication among development teams is emphasized to ensure everyone has a shared understanding of the architecture and its implications.",
    },
  ];

  const accordionItems = [
    {
      title: "01. What is the typical duration of a product design sprint?",
      content:
        "The duration of a product design sprint can vary based on the complexity of the project and the goals set. Generally, a design sprint can last anywhere from one to two weeks, providing an intensive and focused approach to solving specific design challenges.",
    },
    {
      title:
        "02. How do you ensure the security of sensitive data during the design process?",
      content:
        "Ensuring the security of sensitive data is a top priority in our design process. We implement industry best practices for data encryption, user authentication, and authorization. Our team follows strict security protocols to safeguard confidential information and protect the privacy of our clients and end-users.",
    },
    {
      title:
        "03 . Can I request changes to the design during the development phase?",
      content:
        "Yes, we encourage collaboration and feedback throughout the development phase. If you have specific design changes or enhancements, our team is flexible and responsive to accommodate your requirements. We believe in an iterative process that ensures the final product aligns perfectly with your vision and goals.",
    },
  ];

  const whyTechnoloy = [
    {
      numbers: "1",
      main: "Cross-Domain Expertise",
      content:
        "Our technology proficiency spans various domains, ensuring versatility in addressing diverse client needs. With expertise in multiple sectors beyond health, education, and finance, we bring a broad perspective to product design, enhancing adaptability and innovation in our solutions.",
    },
    {
      numbers: "2",
      main: "Continuous Learning and Innovation",
      content:
        "Staying at the forefront of technological advancements, our team engages in continuous learning and innovation. By incorporating the latest tools and methodologies, we remain agile and adept, providing clients with cutting-edge solutions that leverage the most current industry trends.",
    },
    {
      numbers: "3",
      main: "User-Centric Technology Stack",
      content:
        "We prioritize technologies that align with user preferences and behaviors. By employing a user-centric technology stack, we ensure seamless and engaging experiences, enhancing user satisfaction and overall product success.",
    },
    {
      numbers: "4",
      main: "Collaborative Development Ecosystem",
      content:
        "Our collaborative development ecosystem fosters communication and teamwork. With tools like version control systems, collaborative coding platforms, and agile methodologies, we create an environment that promotes efficient development, transparency, and client involvement throughout the project lifecycle.",
    },
    {
      numbers: "5",
      main: "Data-Driven Decision Making",
      content:
        "We leverage data analytics tools and insights to drive decision-making. By analyzing user behavior, market trends, and performance metrics, we make informed choices throughout the design process, ensuring that our solutions are not only aesthetically pleasing but also strategically aligned with client objectives.",
    },
  ];

  return (
    <>
      <First
        title="Software Architecture"
        subtitle="Soft architecture involves designing flexible and adaptable systems, prioritizing resilience and ease of modification over rigid structures, fostering sustainability and responsiveness to evolving user needs in the digital landscape."
        MainBanner={MainBanner.src}
      />

      {/* <Architecture
        title="What About Software Architecture"
        subtitle="Software architecture reveals the system's structure and how
              the components are connected and interact. The architecture design
              software procedure involves utilizing technical and operative
              conditions to develop high-performance, proven-tested, and
              scalable solutions."
      /> */}

      <TechnologyServices
        title="Software Architecture"
        titleSpan="Stages"
        content="Software architecture involves designing and structuring the fundamental components of a software system, defining their relationships and interactions to ensure scalability, maintainability, and optimal performance"
        services={services}
        Image={soft.src}
      />

      {/* <Portfolio /> */}

      <WhyThisTechnology
        why="Why We are a Top Choice for"
        title="Software Architecture"
        content="It serves as a blueprint for developers, guiding the development process and facilitating effective communication among team members."
        technologies={whyTechnoloy}
        ImageTech={ImageTech.src}
      />

      <Faq accordionItems={accordionItems} />
    </>
  );
}

export default SoftwareArchitecture;
