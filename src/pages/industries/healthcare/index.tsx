import Faq from "@/component/FAQ";
import React from "react";
import { MdHealthAndSafety } from "react-icons/md";
import { ImPower } from "react-icons/im";
import { CiCloudOn } from "react-icons/ci";
import { TbUsersGroup } from "react-icons/tb";
import First from "@/component/First/First";
import AboutIndustries from "@/component/Industries/AboutIndustries/AboutIndustries";
import IndustriesFeatures from "@/component/Industries/IndustriesFeatures/IndustriesFeatures";
import TechnologyServices from "@/component/Technology/TechnologyServices/TechnologyServices";

function Healthcare() {
  const services = [
    {
      numbers: "1",
      main: "Electronic Health Record (EHR) Systems",
      content:
        "Our qualified developers can curate EHR systems that allows healthcare providers to store, manage, and access patient medical records digitally, improving data accuracy and facilitating efficient healthcare delivery.",
    },
    {
      numbers: "2",
      main: "Telemedicine Applications",
      content:
        "Our expert team can help to create telemedicine platforms that enable remote consultations and virtual visits, expanding healthcare access to remote areas and providing convenient medical services to patients.",
    },
    {
      numbers: "3",
      main: "Health Monitoring Apps",
      content:
        "Our bunch of app specialists can design health monitoring applications and wearable devices that can help track vital signs and health metrics, empowering patients to proactively manage their health and share data with healthcare professionals for better care management.",
    },
    {
      numbers: "4",
      main: "Medical Billing And Claims Software",
      content:
        "Our team aces in developing advanced medical imaging and diagnostic solutions that help healthcare professionals in tracking accurate and timely diagnoses, leading to better treatment planning and patient outcomes.",
    },
    {
      numbers: "5",
      main: "AI-Driven Data Analytics",
      content:
        "Our company designs special data analytics tools that help healthcare institutions analyze vast amounts of patient data, allowing healthcare professionals to identify trends, conduct research, and make data-driven decisions to improve care delivery.",
    },
  ];

  const card = [
    {
      title: "25+ Expert Professionals",
      content:
        "The modern-day software developed using latest technology enables better patient monitoring, personalized treatment plans, and faster access to medical records, which leads to better patient outcomes and overall care quality.",
      icon: <MdHealthAndSafety />,
    },
    {
      title: "25+ Expert Professionals",
      content:
        "Modern made software with thorough research helps to automate administrative tasks, appointment scheduling, and billing processes, thereby reducing paperwork and saving up healthcare professionals' time for more valuable tasks.",
      icon: <ImPower />,
    },
    {
      title: "25+ Expert Professionals",
      content:
        "The latest software embedded with various features aids in employing robust security measures to safeguard sensitive patient information, protecting against data breaches and ensuring compliance with privacy regulations.",
      icon: <CiCloudOn />,
    },
    {
      title: "25+ Expert Professionals",
      content:
        "Integrated software platforms enable healthcare providers to share patient data and collaborate across departments or even healthcare facilities, facilitating more effective care coordination. ",
      icon: <TbUsersGroup />,
    },
  ];

  const why = [
    {
      numbers: "1",
      main: "Coding structure",
      content:
        "The coding structure in Node.js emphasizes modularity, asynchronous programming, event-driven architecture, and the use of expressive APIs. This structure enables developers to build efficient, scalable, and maintainable applications with ease.",
    },
    {
      numbers: "2",
      main: "Speedy programming",
      content:
        "By combining non-blocking, event-driven architecture, asynchronous programming, the V8 engine, a rich ecosystem, and developer productivity, Node.js enables speedy programming, making it a popular choice for building scalable and high-performance applications.",
    },
    {
      numbers: "3",
      main: "Custom widgets",
      content:
        "By utilizing modular code organization, NPM packages, templating engines, and custom middleware, developers can create and use custom widgets in Node.js applications. These widgets promote code reusability, enhance development efficiency, and enable the creation of scalable and customizable applications.",
    },
    {
      numbers: "4",
      main: "Fast & efficient testing",
      content:
        "Node.js development offers fast and efficient testing capabilities, allowing developers to ensure the quality and reliability of their applications. By leveraging fast execution, testing frameworks, asynchronous testing capabilities, mocking and stubbing, and CI support, Node.js enables developers to perform efficient and effective testing.",
    },
    {
      numbers: "5",
      main: "Seamless user experience",
      content:
        "Whether it's a real-time chat application, a high-performance web app, or a single-page application, Node.js empowers developers to deliver a user-centric experience that meets modern expectations.",
    },
    {
      numbers: "6",
      main: "Framework",
      content:
        "Node.js itself is not a framework but a runtime environment that executes JavaScript code on the server-side, allowing developers to build scalable and efficient web applications using various frameworks like Express, Koa, or Nest.js",
    },
  ];

  const accordionItems = [
    {
      title: "01. How is patient data secured in the healthcare industry?",
      content:
        "Patient data security is a top priority in healthcare. Stringent measures, including encryption, access controls, and compliance with regulations like HIPAA, are implemented to safeguard sensitive medical information and ensure patient confidentiality.",
    },
    {
      title: "02. What role does telemedicine play in modern healthcare?",
      content:
        "Telemedicine has become integral to healthcare, allowing remote consultations, monitoring, and follow-ups. It enhances accessibility to medical services, especially in underserved areas, and provides a convenient option for patients to connect with healthcare professionals.",
    },
    {
      title:
        "03. How does the healthcare industry address interoperability challenges among different health systems?",
      content:
        "Interoperability challenges are being addressed through initiatives promoting standardized data formats and protocols. The goal is to enable seamless information exchange among various health systems, ensuring continuity of care and improved collaboration among healthcare providers.",
    },
  ];

  return (
    <>
      <First
        title="Healthcare Industries"
        subtitle="The healthcare industry is a multifaceted ecosystem encompassing a diverse range of services, technologies, and entities committed to the well-being of individuals. Evolving towards patient-centric care, the sector undergoes a significant digital transformation with the integration of electronic health records, telemedicine, and wearable devices."
      />

      <div className="bg-purple px-2 py-10">
        <AboutIndustries
          title="About Healthcare Industries"
          content="The healthcare industry is a multifaceted ecosystem encompassing a diverse range of services, technologies, and entities committed to the well-being of individuals. Evolving towards patient-centric care, the sector undergoes a significant digital transformation with the integration of electronic health records, telemedicine, and wearable devices. Biomedical innovation remains pivotal, driving advancements in medical treatments and pharmaceuticals. Operating within a highly regulated environment, compliance with healthcare regulations is paramount. Addressing global health challenges, healthcare professionals collaborate across disciplines to combat diseases and enhance public health. Telehealth services and remote monitoring have gained prominence, providing remote access to medical consultations and monitoring. Healthcare analytics, fueled by vast datasets, plays a crucial role in identifying trends and improving overall healthcare delivery. Despite challenges like rising costs, the industry offers opportunities for innovation and efficiency improvements, fostering interdisciplinary collaboration among healthcare professionals. Understanding the intricacies of healthcare involves navigating a complex interplay of medical, technological, regulatory, and societal factors."
        />

        <IndustriesFeatures card={card} />

        <TechnologyServices
          title="Healthcare industry"
          titleSpan=""
          content="The healthcare industry plays a crucial role in society, encompassing a broad range of services, technologies, and organizations dedicated to maintaining and improving the health and well-being of individuals."
          services={services}
        />

        <Faq accordionItems={accordionItems} />
      </div>
    </>
  );
}

export default Healthcare;
