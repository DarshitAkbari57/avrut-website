import Faq from "@/component/FAQ";
import First from "@/component/First/First";
import ChooseTechnology from "@/component/Technology/ChooseTechnology/ChooseTechnology";
import Process from "@/component/Technology/Process/Process";
import TechnologyServices from "@/component/Technology/TechnologyServices/TechnologyServices";
import WhyThisTechnology from "@/component/Technology/WhyThisTechnology/WhyThisTechnology";
import React from "react";
import ImageTech from "../../../assets/technology/docker.jpg";
import MainBanner from "../../../assets/technology/dockerbanner.png";

function Docker() {
  const services = [
    {
      numbers: "1",
      main: "Containerization Technology",
      content:
        "Docker containers are a form of containerization technology, enabling the packaging of applications and dependencies into portable units for consistent deployment across different environments.",
    },
    {
      numbers: "2",
      main: "Lightweight and Portable",
      content:
        "Containers are lightweight and portable, encapsulating application code, runtime, system tools, libraries, and dependencies. This ensures consistent application execution across diverse environments.",
    },
    {
      numbers: "3",
      main: "Docker Image as a Blueprint",
      content:
        "Containers are created from Docker images, which serve as blueprints for the application environment. Docker images include all necessary components for easy sharing, distribution, and deployment.",
    },
    {
      numbers: "4",
      main: "Isolation and Resource Efficiency",
      content:
        "Containers provide process and resource isolation, enhancing security and resource efficiency. Multiple containers can run on a single host without interference.",
    },
    {
      numbers: "5",
      main: "Faster Deployment and Scaling",
      content:
        "Containers enable rapid deployment and scaling of applications. They start quickly, consume fewer resources, and can be easily replicated to efficiently scale applications based on workload demands.",
    },
    {
      numbers: "6",
      main: "Dockerfile and Build Process",
      content:
        "Containers are defined by Dockerfiles, declarative files outlining the steps to create Docker images. The build process incorporates application code and dependencies into a container-ready format.",
    },
  ];

  const whyTechnoloy = [
    {
      numbers: "1",
      main: "Portability and Consistency",
      content:
        "Docker ensures that applications run consistently across various environments, providing portability and reducing potential issues related to dependencies and configurations.",
    },
    {
      numbers: "2",
      main: "Resource Efficiency",
      content:
        "Containers are lightweight and share the host OS kernel, optimizing resource utilization and allowing multiple containers to run efficiently on a single host system.",
    },
    {
      numbers: "3",
      main: "Accelerated Development Cycles",
      content:
        "Docker accelerates the development process by providing a consistent environment throughout the development lifecycle, reducing the 'it works on my machine' problem.",
    },
    {
      numbers: "4",
      main: "Support for Microservices",
      content:
        "Docker is integral to microservices architecture, facilitating the encapsulation of individual services within containers for modularity, scalability, and easier maintenance.",
    },
    {
      numbers: "5",
      main: "DevOps Enablement",
      content:
        "Docker promotes DevOps practices by offering consistent environments for development, testing, and production. It fosters collaboration between development and operations teams for more efficient workflows.",
    },
  ];

  const process = [
    {
      no: "01",
      main: "Introduction to Docker",
      content:
        "At the beginning, developers familiarize themselves with Docker, understanding its principles and how it facilitates containerization. They identify the project's requirements and evaluate its suitability for Docker implementation.",
    },
    {
      no: "02",
      main: "Dockerfile Creation",
      content:
        "Developers craft Dockerfiles, specifying the steps to build a Docker image. This includes defining the base image, adding dependencies, configuring environment variables, and setting up the application's runtime environment.",
    },
    {
      no: "03",
      main: "Image Building",
      content:
        "The Docker image is constructed based on the Dockerfile. This process involves pulling necessary dependencies, installing packages, and configuring the application. The resulting image is a self-contained unit ready for deployment.",
    },
    {
      no: "04",
      main: "Containerization of Application",
      content:
        "The application is containerized using the previously created Docker image. This encapsulates the application and its dependencies, ensuring consistency and portability across different environments.",
    },
    {
      no: "05",
      main: "Orchestration with Docker Compose",
      content:
        "Docker Compose is employed to manage multi-container applications. Developers define services, networks, and volumes in a docker-compose.yml file, enabling orchestrated deployment of interconnected containers.",
    },
    {
      no: "06",
      main: "Integration and Testing in Dockerized Environment",
      content:
        "Integration testing is performed in a Dockerized environment to ensure seamless communication between containers. Developers identify and address any issues related to container orchestration and interaction.",
    },
    {
      no: "07",
      main: "Continuous Integration and Deployment (CI/CD) with Docker",
      content:
        "Docker is integrated into the CI/CD pipeline, automating the testing and deployment processes. Continuous integration ensures that changes are tested in Docker containers, and continuous deployment facilitates efficient and reliable releases.",
    },
  ];

  const accordionItems = [
    {
      title: "01. What is Docker and how does it work?",
      content:
        "Docker is a containerization platform that enables developers to package applications and their dependencies into containers. Containers are lightweight, portable, and isolated environments that run consistently across various systems, making it easier to deploy and manage applications.",
    },
    {
      title: "02. How does Docker differ from traditional virtualization?",
      content:
        "Unlike traditional virtualization, Docker uses containerization, which operates at the OS level. Containers share the host OS kernel, resulting in faster startup times, lower resource consumption, and greater efficiency compared to virtual machines that require separate operating systems for each instance.",
    },
    {
      title: "03. What are the key benefits of using Docker?",
      content:
        "Docker provides benefits such as improved portability, scalability, resource efficiency, and faster deployment. It simplifies the development process, enhances collaboration through consistent environments, and supports microservices architecture. Docker also facilitates DevOps practices and offers a vast ecosystem of pre-built images.",
    },
    {
      title: "04. How can Docker be used in a microservices architecture?",
      content:
        "In a microservices architecture, Docker enables the encapsulation of individual services within containers. Each microservice runs independently, allowing for modularity, scalability, and ease of maintenance. Docker orchestration tools like Kubernetes or Docker Swarm help manage and scale containerized microservices.",
    },
    {
      title: "05. Is Docker suitable for all types of applications?",
      content:
        "Docker is versatile and suitable for a wide range of applications, including web applications, microservices, monolithic applications, and distributed systems. It is especially beneficial for applications with complex dependencies and those requiring scalability, consistency, and efficient resource utilization.",
    },
  ];

  return (
    <>
      <First
        title="Docker Development Company"
        subtitle="Avrut solutions is a leading Docker development company catering a wide gamut of business segments from startups to enterprises."
        MainBanner={MainBanner.src}
      />

      <TechnologyServices
        title="Docker"
        titleSpan="Service We offer"
        content="Docker containers encapsulate an application and its dependencies, including libraries, binaries, and runtime. Containers ensure consistency across different environments, making it easier to deploy and run applications consistently across various systems."
        services={services}
      />

      <WhyThisTechnology
        why="Why"
        title="Docker"
        content="Docker is crucial in modern software development and deployment due to its ability to streamline and simplify the application lifecycle."
        technologies={whyTechnoloy}
        ImageTech={ImageTech.src}
      />

      <Process process={process} />

      <Faq accordionItems={accordionItems} />
    </>
  );
}

export default Docker;
