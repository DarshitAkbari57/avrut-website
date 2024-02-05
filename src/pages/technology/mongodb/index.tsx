import Faq from "@/component/FAQ";
import First from "@/component/First/First";
import ChooseTechnology from "@/component/Technology/ChooseTechnology/ChooseTechnology";
import Process from "@/component/Technology/Process/Process";
import TechnologyServices from "@/component/Technology/TechnologyServices/TechnologyServices";
import WhyThisTechnology from "@/component/Technology/WhyThisTechnology/WhyThisTechnology";
import React from "react";
import ImageTech from "../../../assets/technology/mongodb.png";
import MainBanner from "../../../assets/technology/mongodbbanner.jpg";

function MongoDB() {
  const services = [
    {
      numbers: "1",
      main: "Custom MongoDB Development",
      content:
        "We ace in Developing dynamic web and mobile applications with MongoDB as the data backend which is closely supervised by our MongoDB developers.",
    },
    {
      numbers: "2",
      main: "MongoDB integration",
      content:
        "Our database development experts help in optimizing MongoDB database integration for your business solution with various apps to deliver a seamless performance.",
    },
    {
      numbers: "3",
      main: "Restful API development",
      content:
        "Our team develops RESTful API frameworks, servers, and interfaces that allow languages like Ruby, Node.JS, AngularJS, HTML, and Python to communicate with, write data to, and read data from MongoDB.",
    },
    {
      numbers: "4",
      main: "Upgrades and migration",
      content:
        "Our team of talented developers offers a bug and risk-free cost-effective migration service based on our latest upgrade facilities.",
    },
    {
      numbers: "5",
      main: "Support and maintenance",
      content:
        "Our MongoDB developers, avails efficient support & maintenance facilities to monitor and resolve any deployment issues faster.",
    },
  ];

  const whyTechnoloy = [
    {
      numbers: "1",
      main: "Cost-effective",
      content:
        "MongoDB offers multiple flexible approaches. When using the cloud-based MongoDB Atlas, you can choose an instance size that fits your current needs. You can also adjust your cluster to automatically scale when needed.",
    },
    {
      numbers: "2",
      main: "Schemas",
      content:
        "MongoDB supports creating explicit schemas and validating data. This flexibility is an incredible asset when handling real-world data and changes in requirements or environment.",
    },
    {
      numbers: "3",
      main: "Query & Analytics",
      content:
        "The MongoDB Query API allows you to query deep into documents, and even perform complex analytics pipelines with just a few lines of declarative code.",
    },
    {
      numbers: "4",
      main: "Scalability",
      content:
        "MongoDB avails horizontal scaling via sharding. It can spread data management across multiple machines, allowing for high-throughput processes with massive data volumes.",
    },
    {
      numbers: "5",
      main: "High Performance",
      content:
        "MongoDB can easily manage requirements for fast data processing and large data loads. It can run both regular and ad-hoc queries, which boosts system performance.",
    },
  ];

  const process = [
    {
      no: "01",
      main: "Requirement gathering",
      content:
        "In the first stage, our team meets the client and gathers the application's data requirements and use cases which help us determine the data structure, relationships, and any specific querying needs.",
    },
    {
      no: "02",
      main: "Data Modeling",
      content:
        "In the second stage, our development team designs the data model, including collections and documents while considering the application's data access patterns.",
    },
    {
      no: "03",
      main: "Choosing the Right Data Model",
      content:
        "In this stage, our development team selects the appropriate data model based on the application's needs, considering factors like read and write patterns, relationships, and data complexity.",
    },
    {
      no: "04",
      main: "Development and Integration",
      content:
        "In the development stage, our development team integrates MongoDB into the application. This involves using MongoDB drivers or libraries to connect to the database, insert, update, query, and delete documents.",
    },
    {
      no: "05",
      main: "Query Design",
      content:
        "Our development team designs queries that utilize indexes, aggregation pipelines, and other MongoDB-specific features to retrieve data in the most optimal way.",
    },
    {
      no: "06",
      main: "Data Migration",
      content:
        "To migrate from a different database solution to MongoDB, our development team plans and executes the data migration process, ensuring data consistency and integrity.",
    },
    {
      no: "07",
      main: "Deployment",
      content:
        "In this stage, the application is deployed to the production environment. Our development team configures MongoDB instances, ensuring proper resource allocation and connectivity.",
    },
    {
      no: "08",
      main: "Monitoring and Maintenance",
      content:
        "We avail ongoing monitoring and maintenance by setting up monitoring tools, logs, and alerts to proactively identify and address any issues.",
    },
  ];

  const accordionItems = [
    {
      title: "01.  What is MongoDB?",
      content:
        "MongoDB is a document-oriented NoSQL database aimed at storing high-volumes of data. MongoDB is a flexible database which allows you to store unstructured data and provides indexing and replication with rich APIs.",
    },
    {
      title: "02.  Which language is used in MongoDB?",
      content:
        "MongoDB uses the MongoDB Query Language (MQL). For typical database operations, the documentation contrasts the syntax of MQL with SQL.",
    },
    {
      title: "03.  When to use MongoDB?",
      content:
        "Databases like MongoDB are of great use when your data is document-centric and doesn’t fit well into a relational database schema. It helps you accommodate massive scale, rapidly prototyping, and a few other use cases.",
    },
    {
      title: "04. Why should I choose MongoDB development?",
      content:
        "Choose MongoDB development for Hire highly skilled work personnel from a large batch of industry professionals Avoid the tedious process of recruiting full- time employees. Hire only the required number skilled workers whenever you need them It leads to project - centric approaches only suitable candidates with the required skill set are chosen. Saves costs without deterring quality.",
    },
    {
      title:
        "05. What industries and applications is MongoDB typically used for?",
      content:
        "MongoDB is generally known to design and develop CMS, ERP, CRM apps, and enterprise mobility apps. Along with that MongoDB can be used forHire highly skilled work personnel from a large batch of industry professionals Avoid the tedious process of recruiting full - time employees Hire only the required number skilled workers whenever you need them It leads to project - centric approaches only suitable candidates with the required skill set are chosen Saves costs without deterring quality Enhances overall performance and productivity.",
    },
  ];

  return (
    <>
      <First
        title="MongoDB database design"
        subtitle="Our MongoDB expert team understands your business needs and create appropriate data models tailored to your application."
        MainBanner={MainBanner.src}
      />

      <ChooseTechnology
        title="Why Choose us as MongoDB Database"
        content="With a wide experience and ability to consistently deliver high-quality, robust, and feature-rich database solutions, the development process followed by our team meets client needs, ensuring stability, security, and optimal performance for mission-critical applications."
      />

      <TechnologyServices
        title="MongoDB development"
        titleSpan="Service We offer"
        content="We help you build web and mobile applications using the powerful MongoDB database that is smarter, scalable, and lets you market your ideas faster."
        services={services}
      />

      <WhyThisTechnology
        why="Why"
        title="MongoDB"
        content="We are the best MongoDB development company offering the best cutting-edge solutions with a touch of class, integrity, and client satisfaction"
        technologies={whyTechnoloy}
        ImageTech={ImageTech.src}
      />

      <Process process={process} />

      <Faq accordionItems={accordionItems} />
    </>
  );
}

export default MongoDB;
