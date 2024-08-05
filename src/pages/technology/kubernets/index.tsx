import React from "react";
import Faq from "@/component/FAQ";
import First from "@/component/First/First";
import Process from "@/component/Technology/Process/Process";
import TechnologyServices from "@/component/Technology/TechnologyServices/TechnologyServices";
import WhyThisTechnology from "@/component/Technology/WhyThisTechnology/WhyThisTechnology";
import MainBanner from "../../../assets/technology/kubernetsbanner.png";
import Kubernates from "../../../assets/about/kubernetes.jpg";
import ImageTech from "../../../assets/technology/Kubernets.png";

function Kubernetes() {
  const services = [
    {
      numbers: "1",
      main: "Container Orchestration",
      content:
        "Kubernetes provides a framework for automating the deployment, scaling, and management of containerized applications. It abstracts the underlying infrastructure, allowing developers to focus on application development.",
    },
    {
      numbers: "2",
      main: "Container Abstraction",
      content:
        "Kubernetes abstracts containers, making it agnostic to the containerization technology used. It supports popular container runtimes like Docker, containerd, and others, providing flexibility and compatibility.",
    },
    {
      numbers: "3",
      main: "Cluster Management",
      content:
        "Applications in Kubernetes are deployed and managed in clusters. A cluster consists of a set of nodes (physical or virtual machines) that host containerized applications. Kubernetes automates the distribution of containers across these nodes.",
    },
    {
      numbers: "4",
      main: "Pods",
      content:
        "The basic unit of deployment in Kubernetes is a Pod. A Pod represents the smallest deployable unit that can contain one or more tightly coupled containers. Containers within the same Pod share the same network namespace and storage volumes.",
    },
    {
      numbers: "5",
      main: "Services and Networking",
      content:
        "Kubernetes provides networking capabilities for communication between containers within the same Pod and across different Pods. Services abstract the networking details, allowing applications to discover and communicate with each other.",
    },
    {
      numbers: "6",
      main: "Scaling",
      content:
        "Kubernetes enables both horizontal and vertical scaling of applications. Horizontal scaling involves adjusting the number of replicas of a Pod, while vertical scaling involves modifying the resources allocated to a Pod.",
    },
  ];

  const whyTechnoloy = [
    {
      numbers: "1",
      main: "Microservices Architecture",
      content:
        "Kubernetes is well-suited for deploying and managing microservices-based applications.",
    },
    {
      numbers: "2",
      main: "Continuous Integration/Continuous Deployment (CI/CD)",
      content:
        "Kubernetes integrates seamlessly with CI/CD pipelines, automating the deployment and scaling of applications.",
    },
    {
      numbers: "3",
      main: "Scalable and Resilient Applications",
      content:
        "Kubernetes provides tools for horizontal scaling, ensuring applications can handle varying workloads and recover from failures.",
    },
    {
      numbers: "4",
      main: "Hybrid and Multi-Cloud Deployments",
      content:
        "Kubernetes supports deployment across on-premises, public cloud, and multi-cloud environments, providing flexibility and portability.",
    },
  ];

  const process = [
    {
      no: "01",
      main: "Introduction to Kubernetes",
      content:
        "At the beginning, developers familiarize themselves with Kubernetes, understanding its principles and how it facilitates containerization. They identify the project's requirements and evaluate its suitability for Kubernetes implementation.",
    },
    {
      no: "02",
      main: "Kubernetesfile Creation",
      content:
        "Developers craft Kubernetesfiles, specifying the steps to build a Kubernetes image. This includes defining the base image, adding dependencies, configuring environment variables, and setting up the application's runtime environment.",
    },
    {
      no: "03",
      main: "Image Building",
      content:
        "The Kubernetes image is constructed based on the Kubernetesfile. This process involves pulling necessary dependencies, installing packages, and configuring the application. The resulting image is a self-contained unit ready for deployment.",
    },
    {
      no: "04",
      main: "Containerization of Application",
      content:
        "The application is containerized using the previously created Kubernetes image. This encapsulates the application and its dependencies, ensuring consistency and portability across different environments.",
    },
    {
      no: "05",
      main: "Orchestration with Kubernetes Compose",
      content:
        "Kubernetes Compose is employed to manage multi-container applications. Developers define services, networks, and volumes in a Kubernetes-compose.yml file, enabling orchestrated deployment of interconnected containers.",
    },
    {
      no: "06",
      main: "Integration and Testing in Kubernetesized Environment",
      content:
        "Integration testing is performed in a Kubernetesized environment to ensure seamless communication between containers. Developers identify and address any issues related to container orchestration and interaction.",
    },
    {
      no: "07",
      main: "Continuous Integration and Deployment (CI/CD) with Kubernetes",
      content:
        "Kubernetes is integrated into the CI/CD pipeline, automating the testing and deployment processes. Continuous integration ensures that changes are tested in Kubernetes containers, and continuous deployment facilitates efficient and reliable releases.",
    },
  ];
  const accordionItems = [
    {
      title: "01. What is Kubernetes and why is it used?",
      content:
        "Kubernetes is an open-source container orchestration platform that automates the deployment, scaling, and management of containerized applications. It is used to simplify the process of deploying and managing applications in a scalable and resilient manner across various environments.",
    },
    {
      title: "02. How does Kubernetes handle scaling?",
      content:
        "Kubernetes supports both horizontal and vertical scaling. Horizontal scaling involves adjusting the number of replicas of a Pod, while vertical scaling involves modifying the resources allocated to a Pod. Kubernetes can dynamically scale applications based on demand, ensuring efficient resource utilization.",
    },
    {
      title: "03. What is a Kubernetes Pod?",
      content:
        "A Pod is the smallest deployable unit in Kubernetes and represents one or more containers that share the same network namespace and storage volumes. Pods provide a way to deploy and scale applications, and they are the basic building blocks for running containers in a Kubernetes cluster.",
    },
    {
      title: "04. How does Kubernetes ensure high availability?",
      content:
        "Kubernetes ensures high availability by distributing application components across multiple nodes in a cluster. It automatically reschedules Pods in case of node failures, and features like Replication Controllers or Deployments ensure that a specified number of replicas are maintained for each application component.",
    },
    {
      title: "05. Can Kubernetes be used with any container runtime?",
      content:
        "Yes, Kubernetes is container runtime-agnostic, meaning it can work with various container runtimes like Docker, containerd, or CRI-O. This flexibility allows users to choose the container runtime that best suits their needs while benefiting from Kubernetes' orchestration capabilities.",
    },
  ];

  return (
    <>
      <First
        title="Transforming Operations: Maximizing Efficiency with Kubernetes"
        subtitle="Avrut solutions is a leading Kubernetes development company catering a wide gamut of business segments from startups to enterprises."
        MainBanner={MainBanner.src}
      />

      <TechnologyServices
        title="Kubernetes"
        titleSpan="Service We offer"
        content="Kubernetes, often abbreviated as K8s, is an open-source container orchestration platform designed to automate the deployment, scaling, and management of containerized applications. Originally developed by Google and later donated to the Cloud Native Computing Foundation (CNCF), Kubernetes has become a de facto standard for container orchestration in the cloud-native ecosystem."
        services={services}
        Image={Kubernates.src}
      />

      <WhyThisTechnology
        why="Why"
        title="Kubernetes"
        content="Kubernetes has become a de facto standard for container orchestration in the cloud-native ecosystem."
        technologies={whyTechnoloy}
        ImageTech={ImageTech.src}
      />

      <Process process={process} />

      <Faq accordionItems={accordionItems} />
    </>
  );
}

export default Kubernetes;
