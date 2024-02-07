import Link from "next/link";
import { useRouter } from "next/router";
import React from "react";
import First from "@/component/First/First";
import Faq from "@/component/FAQ";
import Portfolio from "@/component/Portfolio/Portfolio";
import Architecture from "@/component/Services/Architecture/Architecture";
import TechnologyServices from "@/component/Technology/TechnologyServices/TechnologyServices";
import WhyThisTechnology from "@/component/Technology/WhyThisTechnology/WhyThisTechnology";
import ImageTech from "../../../assets/technology/dev.jpg";
import MainBanner from "../../../assets/technology/devopsbanner.jpg";

function Engineering() {
  const services = [
    {
      numbers: "1",
      main: "Continuous Integration (CI)",
      content:
        "Implementing CI ensures that code changes are automatically built, tested, and integrated into the main codebase. This practice enhances collaboration among development teams and helps identify and address integration issues early in the development lifecycle.",
    },
    {
      numbers: "2",
      main: "Continuous Deployment (CD)",
      content:
        "CD extends CI by automating the deployment process, allowing for the continuous delivery of code to production. This ensures that the software is always in a deployable state, reduces manual intervention, and accelerates the release cycle while maintaining reliability.",
    },
    {
      numbers: "3",
      main: "Infrastructure as Code (IaC)",
      content:
        "Adopting IaC involves managing and provisioning infrastructure through code, enhancing scalability, and reducing configuration errors. This practice enables the automated and consistent provisioning of infrastructure, promoting agility and reliability in the deployment process.",
    },
    {
      numbers: "4",
      main: "Monitoring and Logging",
      content:
        "Implementing robust monitoring and logging mechanisms is crucial for detecting and diagnosing issues in real-time. By analyzing system logs and performance metrics, DevOps teams can proactively address potential problems, optimize performance, and ensure system reliability.",
    },
    {
      numbers: "5",
      main: "Collaborative Culture",
      content:
        "Fostering a collaborative culture between development and operations teams is fundamental for successful DevOps implementation. Encouraging open communication, shared responsibilities, and a unified approach to problem-solving promotes efficiency, innovation, and continuous improvement.",
    },
  ];

  const accordionItems = [
    {
      title:
        "01. What is the role of Continuous Integration (CI) and Continuous Deployment (CD) in DevOps?",
      content:
        "Continuous Integration (CI) ensures regular integration of code changes into a shared repository, while Continuous Deployment (CD) automates the deployment process, allowing for the continuous delivery of code to production, ensuring efficiency and reliability in software development.",
    },
    {
      title:
        "02. How does Infrastructure as Code (IaC) contribute to DevOps practices?",
      content:
        "Infrastructure as Code (IaC) involves managing and provisioning infrastructure through code. It enhances scalability, reduces configuration errors, and promotes consistency across deployment environments, enabling automated and efficient infrastructure management in DevOps workflows.",
    },
    {
      title: "03. Why is a collaborative culture crucial in DevOps?",
      content:
        "A collaborative culture is fundamental in DevOps as it fosters open communication, shared responsibilities, and a unified approach to problem-solving between development and operations teams. This mindset promotes efficiency, innovation, and continuous improvement in the software development and operations lifecycle.",
    },
  ];

  const whyTechnoloy = [
    {
      numbers: "1",
      main: "Expertise in CI/CD Implementation",
      content:
        "Our team excels in implementing robust Continuous Integration (CI) and Continuous Deployment (CD) pipelines, ensuring rapid and reliable software delivery. With a focus on automation, we streamline the development lifecycle and enhance collaboration among teams.",
    },
    {
      numbers: "2",
      main: "Proficiency in Infrastructure as Code (IaC)",
      content:
        "We stand out for our expertise in Infrastructure as Code (IaC), enabling seamless and automated provisioning of infrastructure. By managing infrastructure through code, we enhance scalability, reduce errors, and promote consistency across deployment environments.",
    },
    {
      numbers: "3",
      main: "Comprehensive Monitoring and Logging Solutions",
      content:
        "Our team prioritizes comprehensive monitoring and logging practices to ensure real-time detection and resolution of issues. By analyzing system logs and performance metrics, we proactively optimize system performance, enhancing reliability and user experience.",
    },
    {
      numbers: "4",
      main: "Strategic Approach to Collaborative Culture",
      content:
        "We foster a collaborative culture by promoting open communication and shared responsibilities between development and operations teams. Our strategic approach encourages a unified problem-solving mindset, leading to increased efficiency, innovation, and continuous improvement.",
    },
    {
      numbers: "5",
      main: "Commitment to Continuous Learning and Improvement",
      content:
        "As a top choice, we are committed to staying at the forefront of industry trends and technologies. Our team actively engages in continuous learning, ensuring that our Engineering & DevOps practices evolve to meet the dynamic demands of modern software development and operations.",
    },
  ];

  return (
    <>
      <First
        title="Engineering & DevOps"
        subtitle="Engineering and DevOps involve the integration of development and operations practices to streamline software delivery and enhance collaboration."
        MainBanner={MainBanner.src}
      />

      {/* <Architecture
        title="What About Engineering & DevOps"
        subtitle="Engineering and DevOps involve the integration of development and operations practices to streamline software delivery and enhance collaboration. This synergy optimizes efficiency, accelerates deployment cycles, and ensures continuous improvement in software development processes."
      /> */}

      <TechnologyServices
        title="Engineering & DevOps"
        titleSpan="Stages"
        content="Engineering and DevOps involve the seamless integration of software development and IT operations to streamline and automate the software delivery pipeline."
        services={services}
      />

      {/* <Portfolio /> */}

      <WhyThisTechnology
        why="Why We are a Top Choice for"
        title="Engineering & DevOps"
        content="Our team stands out as a top choice for Engineering & DevOps with expertise in robust CI/CD implementation, proficiency in IaC, comprehensive monitoring solutions, a strategic collaborative culture."
        technologies={whyTechnoloy}
        ImageTech={ImageTech.src}
      />

      <Faq accordionItems={accordionItems} />
    </>
  );
}

export default Engineering;
