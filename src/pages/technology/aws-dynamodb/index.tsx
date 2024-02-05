import React from "react";
import Faq from "@/component/FAQ";
import First from "@/component/First/First";
import ChooseTechnology from "@/component/Technology/ChooseTechnology/ChooseTechnology";
import Process from "@/component/Technology/Process/Process";
import TechnologyServices from "@/component/Technology/TechnologyServices/TechnologyServices";
import WhyThisTechnology from "@/component/Technology/WhyThisTechnology/WhyThisTechnology";
import ImageTech from "../../../assets/technology/dynamodb.png";
import MainBanner from "../../../assets/technology/dynamobanner.png";

function dynamoDB() {
  const services = [
    {
      numbers: "1",
      main: "DynamoDB Web App Development",
      content:
        "We build powerful web apps that automatically scale up and down without any need to maintain servers, and your apps can have highly automated availability.",
    },
    {
      numbers: "2",
      main: "DynamoDB Mobile App Development",
      content:
        "Leveraging the features of DynamoDB, our developers create and deliver stunning, robust and smooth mobile apps with quality UX.",
    },
    {
      numbers: "3",
      main: "DynamoDB Migration",
      content:
        "We help clients in database migrations from MongoDB, MySQL, RDBMS, Cassandra to DynamoDB.",
    },
    {
      numbers: "4",
      main: "DynamoDB Consultation",
      content:
        "We are a leading DynamoDB development company offering expert DynamoDB consulting for quick fix of existing back-end problems.",
    },
    {
      numbers: "5",
      main: "Amazon DynamoDB database maintenance & support",
      content:
        "We avail complete support for the Amazon DynamoDB database service after deployment for all your queries and bugs.",
    },
  ];

  const whyTechnoloy = [
    {
      numbers: "1",
      main: "Proven development process",
      content:
        "With a well-established development process crafted after a wide experience & success of years, our company delivers top-notch mobile & web applications that are feature-rich, reliable, and tailored made to exceed client’s expectations.",
    },
    {
      numbers: "2",
      main: "Experienced Team",
      content:
        "We have a team of experienced and certified AWS professionals, who avail precise, prompt & flawless output with the help of their cutting-edge skillset.",
    },
    {
      numbers: "3",
      main: "Agile Methodology",
      content:
        "Our team initiates a project by dividing it up into several stages and with constant collaboration with the clients for continuous enhancement and iteration at every stage.",
    },
    {
      numbers: "4",
      main: "Quality Assurance",
      content:
        "Our quality assurance specialist ensures that the final product complies with the industry quality standards.",
    },
    {
      numbers: "5",
      main: "Cross-domain experience",
      content:
        "Our Company’s cross-domain experience empowers us to create versatile applications that cater to diverse industries, addressing unique challenges with cutting-edge solutions.",
    },
    {
      numbers: "6",
      main: "Relentless support & maintenance",
      content:
        "By availing relentless support and maintenance, our company ensures that clients' applications run flawlessly, stay up-to-date, and continuously evolve to adapt to changing needs and technologies.",
    },
  ];

  const process = [
    {
      no: "01",
      main: "Requirement gathering",
      content:
        "In the initial stage, we connect with the client to understand the application's requirements and data access patterns. This clarifies the data structure, expected workload, read and write patterns, and any specific performance or scalability requirements.",
    },
    {
      no: "02",
      main: "Data Modeling",
      content:
        "Based on the gathered requirements, the development team designs the data model. This step involves creating tables and defining primary keys.",
    },
    {
      no: "03",
      main: "Indexing Strategy",
      content:
        "In this stage, our development team decides which GSIs to create based on the application's query requirements. Proper indexing ensures efficient data retrieval without resorting to full table scans.",
    },
    {
      no: "04",
      main: "Access Patterns & Query Design",
      content:
        "This is an important stage as Designing efficient query is crucial for optimizing performance. Our development team designs the queries to make optimal use of primary keys and secondary indexes. This step includes considering data pagination, filtering, and projection attributes to minimize data transfer.",
    },
    {
      no: "05",
      main: "Development & Integration",
      content:
        "Once the data model and access patterns are defined, our development team integrates DynamoDB into the application. This involves using the AWS SDKs or APIs to interact with the database, including operations like PutItem, GetItem, Query, and UpdateItem.",
    },
    {
      no: "06",
      main: "Data Migration",
      content:
        "If the client requires migrating application from a different database solution to DynamoDB, our development team plans and executes the data migration process. This involves transforming and transferring data from the old database to DynamoDB.",
    },
    {
      no: "07",
      main: "Deployment",
      content:
        "After completion of development and testing, the application is deployed to the production environment. This involves configuring the necessary AWS resources and ensuring that the application can seamlessly interact with DynamoDB.",
    },
    {
      no: "08",
      main: "Monitoring and Maintenance",
      content:
        "Our team avails continuous monitoring and maintenance for keeping the application running smoothly. The development team sets up logging, monitoring, and alerting mechanisms to detect and address any performance or availability issues promptly.",
    },
  ];

  const accordionItems = [
    {
      title: "01.  What is Amazon DynamoDB?",
      content:
        "Amazon DynamoDB is a fully managed NoSQL database service that can store and retrieve any amount of data, and serve any level of request traffic. It is designed to provide fast and predictable performance with seamless scalability.",
    },
    {
      title: "02.  Why is AWS DynamoDB for web and mobile app development?",
      content:
        "It is important for web and mobile app development because it offers a flexible, scalable, and cost-effective database solution that can handle heavy traffic and high volumes of data. It can be used to build a variety of applications across different industries such as gaming, ad tech, IoT solutions, and more.",
    },
    {
      title: "03.  Why is DynamoDB so popular?",
      content:
        "DynamoDB aligns with the ideals of serverless applications—automated scalability based on your application load, pay-per-use pricing, ease of use, and no need to manage servers. As a result, it is a popular choice for AWS Serverless applications.",
    },
    {
      title: "04. Is DynamoDB a SQL database?",
      content:
        "It is important to remember that DynamoDB does not use SQL at all. Nor does it use the NoSQL equivalent made popular by Apache Cassandra, Cassandra Query Language (CQL). Instead, it uses JSON to encapsulate queries.",
    },
    {
      title: "05. Is DynamoDB faster than MongoDB?",
      content:
        "In terms of performance, DynamoDB is generally considered to be faster and more scalable than MongoDB, especially for simple key-value operations.",
    },
  ];

  return (
    <>
      <First
        title="AWS DynamoDB development company"
        subtitle="Accelerating enterprise experience by developing apps with dynamic AWS DynamoDB"
        MainBanner={MainBanner.src}
      />

      <ChooseTechnology
        title="Why Choose us as AWS DynamoDB development?"
        content="DynamoDB handles large volumes of data and high traffic loads with consistent low latency, making it an excellent choice for applications that require fast, reliable access to data."
      />

      <TechnologyServices
        title="AWS DynamoDB Development"
        titleSpan="Service We offer"
        content="We develop faster, more flexible, and highly functional applications using the no-SQL database services of Amazon DynamoDB."
        services={services}
      />

      <WhyThisTechnology
        why="Why"
        title="DynamoDB?"
        content="As a leading DynamoDB development company, we develop and deliver robust database capabilities to businesses across a wide range of industries."
        technologies={whyTechnoloy}
        ImageTech={ImageTech.src}
      />

      <Process process={process} />

      <Faq accordionItems={accordionItems} />
    </>
  );
}

export default dynamoDB;
