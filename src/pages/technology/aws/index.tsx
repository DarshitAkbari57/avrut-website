import Faq from "@/component/FAQ";
import First from "@/component/First/First";
import ChooseTechnology from "@/component/Technology/ChooseTechnology/ChooseTechnology";
import Process from "@/component/Technology/Process/Process";
import TechnologyServices from "@/component/Technology/TechnologyServices/TechnologyServices";
import WhyThisTechnology from "@/component/Technology/WhyThisTechnology/WhyThisTechnology";
import React from "react";
import ImageTech from "../../../assets/technology/AWS.png";
import MainBanner from "../../../assets/technology/awsbanner.png";
import Awstech from "../../../assets/about/aws.jpg"

function Aws() {
  const services = [
    {
      numbers: "1",
      main: "Compute Services",
      content:
        "AWS provides a range of compute services, including Amazon EC2 for scalable virtual servers, AWS Lambda for serverless computing, and Amazon ECS for container orchestration.",
    },
    {
      numbers: "2",
      main: "Storage Services",
      content:
        "AWS offers various storage services such as Amazon S3 for scalable object storage, Amazon EBS for block storage, and Amazon Glacier for long-term archival.",
    },
    {
      numbers: "3",
      main: "Database Services",
      content:
        "Database services include Amazon RDS for managed relational databases, Amazon DynamoDB for NoSQL databases, and Amazon Redshift for data warehousing.",
    },
    {
      numbers: "4",
      main: "Networking",
      content:
        "AWS provides Virtual Private Cloud (VPC) for network isolation, Amazon Route 53 for domain registration and DNS, and AWS Direct Connect for dedicated network connections.",
    },
    {
      numbers: "5",
      main: "Machine Learning and AI Services",
      content:
        "AWS offers machine learning services like Amazon SageMaker for building, training, and deploying ML models, and AI services such as Amazon Rekognition for image and video analysis.",
    },
    {
      numbers: "6",
      main: "Security and Compliance",
      content:
        "AWS prioritizes security with services like AWS Identity and Access Management (IAM), AWS Key Management Service (KMS), and AWS WAF for web application firewall. Compliance certifications are available for various industry standards.",
    },
  ];

  const whyTechnoloy = [
    {
      numbers: "1",
      main: "Data Analytics",
      content:
        "Businesses leverage AWS for data analytics by utilizing services like Amazon Redshift, Amazon EMR, and Amazon Athena.",
    },
    {
      numbers: "2",
      main: "Global Reach",
      content:
        " AWS has a vast global infrastructure, allowing users to deploy applications and services in multiple regions.",
    },
    {
      numbers: "3",
      main: "Extensive Service Portfolio",
      content:
        "With a wide range of services, AWS provides solutions for diverse use cases, from hosting simple websites to complex machine learning applications.",
    },
    {
      numbers: "4",
      main: "Reliability and Scalability",
      content:
        "AWS offers high reliability and scalability, ensuring that applications can handle varying workloads and remain available.",
    },
  ];

  const process = [
    {
      no: "01",
      main: "Requirements Analysis",
      content:
        "Engage with stakeholders to understand project requirements, business goals, and technical specifications. Identify the necessary AWS services based on scalability, performance, and security needs.",
    },
    {
      no: "02",
      main: "Designing the Architecture",
      content:
        "Create a detailed architecture design considering AWS best practices. Define the infrastructure layout, including Virtual Private Cloud (VPC) configuration, subnet design, security groups, and high availability architecture.",
    },
    {
      no: "03",
      main: "Selecting AWS Services",
      content:
        "Choose appropriate AWS services based on the application's requirements. Select compute services like EC2 or serverless options, storage solutions such as S3, and databases like RDS or DynamoDB, among others.",
    },
    {
      no: "04",
      main: "Network Configuration",
      content:
        "Configure the network infrastructure using AWS services like VPC, Route 53 for DNS, and Elastic Load Balancing for distributing incoming traffic. Implement secure and efficient communication between components.",
    },
    {
      no: "05",
      main: "Security Implementation",
      content:
        "Implement security measures using AWS Identity and Access Management (IAM), encryption with AWS Key Management Service (KMS), and network security controls. Apply security groups, NACLs, and SSL/TLS as needed.",
    },
    {
      no: "06",
      main: "Deployment and Scaling",
      content:
        "Deploy the application components using AWS deployment services like AWS Elastic Beanstalk, AWS CloudFormation, or CI/CD pipelines. Implement auto-scaling configurations for dynamic resource adjustment.",
    },
    {
      no: "07",
      main: "Monitoring and Optimization",
      content:
        "Set up monitoring and logging using AWS CloudWatch and other services to track performance, detect issues, and optimize resources. Use AWS Trusted Advisor for recommendations on cost, performance, and security.",
    },
    {
      no: "08",
      main: "Disaster Recovery Planning",
      content:
        "Develop a disaster recovery plan with backup and recovery strategies. Utilize AWS services like Amazon S3 for data backup, and implement multi-region setups for enhanced resilience.",
    },
  ];

  const accordionItems = [
    {
      title: "01. What is AWS and how does it work?",
      content:
        "AWS is a cloud computing platform that provides a variety of on-demand services. It works by allowing users to access and utilize computing resources, storage, and other services over the internet.",
    },
    {
      title: "02. How does AWS ensure security?",
      content:
        "AWS prioritizes security through features like AWS Identity and Access Management (IAM), encryption with AWS Key Management Service (KMS), and network security using Virtual Private Cloud (VPC). Regular audits and compliance certifications contribute to a secure environment.",
    },
    {
      title: "03. What is AWS Lambda?",
      content:
        "AWS Lambda is a serverless computing service that allows developers to run code without provisioning or managing servers. It automatically scales based on the incoming request volume, making it suitable for event-driven applications.",
    },
    {
      title: "04. Can AWS be used for hosting websites?",
      content:
        "Yes, AWS is commonly used for hosting websites. Amazon S3 provides scalable object storage, and Amazon EC2 allows the deployment of virtual servers to host web applications.",
    },
    {
      title: "05. How does AWS support DevOps practices?",
      content:
        "AWS supports DevOps practices with services like AWS CodePipeline for continuous delivery, AWS CodeBuild for continuous integration, and AWS CodeDeploy for automated application deployment. These services facilitate the automation of the software development lifecycle.",
    },
  ];

  return (
    <>
      <First
        title="AWS Architect Company"
        subtitle="Amazon Web Services (AWS) is a comprehensive and widely adopted cloud computing platform provided by Amazon. "
        MainBanner={MainBanner.src}
      />

      <TechnologyServices
        title="Aws"
        titleSpan="Service We offer"
        content="AWS provides a range of compute services, including Amazon EC2 for scalable virtual servers, AWS Lambda for serverless computing, and Amazon ECS for container orchestration."
        services={services}
        Image={Awstech.src}
      />

      <WhyThisTechnology
        why="Why"
        title="AWS"
        content="Amazon Web Services (AWS) is a comprehensive and widely adopted cloud computing platform provided by Amazon."
        technologies={whyTechnoloy}
        ImageTech={ImageTech.src}
      />

      <Process process={process} />

      <Faq accordionItems={accordionItems} />
    </>
  );
}

export default Aws;
