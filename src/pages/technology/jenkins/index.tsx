import Faq from "@/component/FAQ";
import First from "@/component/First/First";
import Process from "@/component/Technology/Process/Process";
import TechnologyServices from "@/component/Technology/TechnologyServices/TechnologyServices";
import WhyThisTechnology from "@/component/Technology/WhyThisTechnology/WhyThisTechnology";
import React from "react";
import ImageTech from "../../../assets/technology/docker.jpg";
import MainBanner from "../../../assets/technology/jenkinsbanner.png";
import Jenkinstech from "../../../assets/about/jenkins.webp"


function Jenkins() {
  const services = [
    {
      numbers: "1",
      main: "Pipeline as Code",
      content:
        "Jenkins allows defining build and deployment pipelines as code using the Jenkinsfile. This enables version-controlled and reproducible CI/CD processes.",
    },
    {
      numbers: "2",
      main: "Extensibility",
      content:
        "Jenkins has a vast ecosystem of plugins that extend its functionality. These plugins cover various areas, including version control systems, build tools, deployment platforms, and more.",
    },
    {
      numbers: "3",
      main: "Distributed Builds",
      content:
        "Jenkins supports distributed builds, allowing the distribution of build and test workloads across multiple machines. This enhances scalability and reduces build times.",
    },
    {
      numbers: "4",
      main: "Integration with Version Control",
      content:
        "Jenkins seamlessly integrates with popular version control systems like Git, enabling automated builds triggered by code changes.",
    },
    {
      numbers: "5",
      main: "Artifact Management",
      content:
        "Jenkins manages build artifacts, making it easy to archive, retrieve, and share outputs of successful builds. This aids in traceability and versioning.",
    },
    {
      numbers: "6",
      main: "Notification and Reporting",
      content:
        "Jenkins provides notification features to inform teams about build status. It also generates reports and visualizations, aiding in monitoring and analysis.",
    },
  ];

  const whyTechnoloy = [
    {
      numbers: "1",
      main: "Continuous Integration and Deployment",
      content:
        "Jenkins is widely used for automating CI/CD pipelines, enabling frequent and reliable software releases.",
    },
    {
      numbers: "2",
      main: "Automated Testing",
      content:
        "Jenkins automates the execution of test suites, ensuring rapid feedback on code changes and reducing the likelihood of defects.",
    },
    {
      numbers: "3",
      main: "Scheduled Jobs and Cron Jobs",
      content:
        "Jenkins can be utilized for scheduling and automating repetitive tasks, such as data backups, server maintenance, and periodic jobs.",
    },
    {
      numbers: "4",
      main: "Infrastructure as Code (IaC)",
      content:
        "Jenkins can integrate with IaC tools, automating the provisioning and configuration of infrastructure resources.",
    },
  ];

  const process = [
    {
      no: "01",
      main: "Download and Install Jenkins",
      content:
        "Begin the setup by downloading Jenkins and installing it on your server or machine. Follow the specific installation instructions provided by the official Jenkins documentation for your operating system.",
    },
    {
      no: "02",
      main: "Launch the Jenkins Server",
      content:
        "After installation, start the Jenkins server. Access the Jenkins web interface by opening a web browser and navigating to the specified address (usually http://localhost:8080) where Jenkins is running.",
    },
    {
      no: "03",
      main: "Unlock Jenkins",
      content:
        "During the first launch, Jenkins provides an initial setup wizard. Retrieve the initial administrator password from the Jenkins server's file system and use it to unlock Jenkins.",
    },
    {
      no: "04",
      main: "Customize the Installation",
      content:
        "Follow the setup wizard to customize the Jenkins installation. This includes selecting and installing recommended plugins, creating the administrator user, and defining the Jenkins URL.",
    },
    {
      no: "05",
      main: "Access the Jenkins Dashboard",
      content:
        "Once configured, access the Jenkins dashboard. This serves as the central hub for creating, managing, and monitoring Jenkins jobs and pipelines.",
    },
    {
      no: "06",
      main: "Create Your First Job",
      content:
        "Generate a new Jenkins job to automate a specific task, such as building a project, running tests, or deploying an application. Define the job's configuration, including source code management and build steps.",
    },
    {
      no: "07",
      main: "Build and Test Your Project",
      content:
        "Run the Jenkins job to build and test your project. Jenkins will execute the defined build steps and report the results, highlighting any issues that may arise during the process.",
    },
    {
      no: "08",
      main: "Explore Additional Jenkins Features",
      content:
        "Explore additional features within Jenkins, including plugins, integrations, and advanced configuration options. Tailor Jenkins to meet your specific CI/CD requirements and workflow.",
    },
  ];

  const accordionItems = [
    {
      title: "01. What is Jenkins and what is its primary purpose?",
      content:
        "Jenkins is an open-source automation server designed for automating the building, testing, and deployment of software. Its primary purpose is to facilitate continuous integration and continuous delivery (CI/CD) processes.",
    },
    {
      title: "02. How does Jenkins support version control?",
      content:
        "Jenkins integrates with version control systems like Git, allowing developers to automate builds and tests triggered by code changes. Jenkins can pull code from repositories, initiate builds, and provide feedback on the integration status.",
    },
    {
      title: "03. What is a Jenkins pipeline?",
      content:
        "A Jenkins pipeline is a set of automated processes defined in code (Jenkinsfile). It includes stages for building, testing, and deploying applications. Pipelines provide a structured approach to CI/CD and support version-controlled, reproducible builds.",
    },
    {
      title: "04. How does Jenkins ensure security?",
      content:
        "Jenkins incorporates security features, including user authentication, authorization, and role-based access control (RBAC). These measures help control access to Jenkins resources and ensure secure execution of automation tasks.",
    },
    {
      title: "05. Can Jenkins be extended with additional functionalities?",
      content:
        "Yes, Jenkins has a robust plugin ecosystem. Users can extend Jenkins' capabilities by installing plugins that cover various areas such as source code management, build tools, deployment platforms, and more.",
    },
  ];
  return (
    <>
      <First
        title="Efficient CI/CD Pipelines: Navigating Jenkins for Modern Development"
        subtitle="Avrut solutions is a leading Jenkins development company catering a wide gamut of business segments from startups to enterprises."
        MainBanner={MainBanner.src}
      />

      <TechnologyServices
        title="Jenkins"
        titleSpan="Service We offer"
        content="Jenkins is an open-source automation server that facilitates building, testing, and deploying code."
        services={services}
        Image={Jenkinstech.src}

      />

      <WhyThisTechnology
        why="Why"
        title="Jenkins"
        content="Jenkins is an open-source automation server that facilitates building, testing, and deploying code."
        technologies={whyTechnoloy}
        ImageTech={ImageTech.src}
      />

      <Process process={process} />

      <Faq accordionItems={accordionItems} />
    </>
  );
}

export default Jenkins;
