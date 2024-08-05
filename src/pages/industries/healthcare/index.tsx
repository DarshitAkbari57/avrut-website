import Faq from "@/component/FAQ";
import React from "react";
import First from "@/component/First/First";
import AboutIndustries from "@/component/Industries/AboutIndustries/AboutIndustries";
import IndustriesFeatures from "@/component/Industries/IndustriesFeatures/IndustriesFeatures";
import TechnologyServices from "@/component/Technology/TechnologyServices/TechnologyServices";
import {
  FaExchangeAlt,
  FaRegCalendarAlt,
  FaShieldAlt,
  FaUserMd,
} from "react-icons/fa";
import MainBanner from "../../../assets/technology/healthbanner.jpg";
import AboutImage from "../../../assets/technology/healthcare.jpg";
import health from "../../../assets/about/health.webp";

function Healthcare() {
  const services = [
    {
      numbers: "1",
      main: "Digital Health Record Systems",
      content:
        "We build tailored digital health record systems that streamline the storage, management, and access of patient records. This enhances data precision and supports efficient healthcare operations.",
    },
    {
      numbers: "2",
      main: "Virtual Care Platforms",
      content:
        "Our team develops virtual care solutions that facilitate remote consultations and online appointments, improving healthcare access for patients in underserved regions and offering greater convenience.",
    },
    {
      numbers: "3",
      main: "Health Tracking Applications",
      content:
        "We create health tracking apps and wearable technologies that monitor vital signs and health indicators. These tools enable patients to actively manage their health and share critical data with healthcare providers for enhanced care.",
    },
    {
      numbers: "4",
      main: "Billing and Claims Management Software",
      content:
        "We design sophisticated billing and claims management software to ensure precise and timely processing of medical claims, optimizing financial operations for healthcare organizations.",
    },
    {
      numbers: "5",
      main: "AI-Enhanced Data Insights",
      content:
        "We develop advanced analytics tools powered by AI to help healthcare institutions interpret large volumes of patient data. This capability supports trend analysis, research, and informed decision-making to improve patient care.",
    },
  ];

  const card = [
    {
      title: "Expert Medical Professionals",
      content:
        "Access a network of expert medical professionals dedicated to providing quality healthcare. Benefit from their experience and expertise in delivering personalized treatment plans and ensuring comprehensive patient care.",
      icon: <FaUserMd />,
    },
    {
      title: "Streamlined Appointment Scheduling",
      content:
        "Utilize streamlined appointment scheduling systems for efficient and convenient booking. Enhance patient accessibility to healthcare services and reduce wait times, optimizing the overall healthcare experience.",
      icon: <FaRegCalendarAlt />,
    },
    {
      title: "Robust Security Measures",
      content:
        "Implement the latest software with robust security measures to safeguard sensitive patient information. Ensure compliance with privacy regulations, protect against data breaches, and prioritize the confidentiality of healthcare data.",
      icon: <FaShieldAlt />,
    },
    {
      title: "Interoperable Healthcare Platforms",
      content:
        "Integrate software platforms that enable healthcare providers to share patient data and collaborate seamlessly. Enhance care coordination across departments or facilities, ensuring a cohesive and effective healthcare ecosystem.",
      icon: <FaExchangeAlt />,
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
        MainBanner={MainBanner.src}
      />

      <div className="bg-purple px-2 py-10">
        <AboutIndustries
          title="About Healthcare Industries"
          content="The healthcare industry is a multifaceted ecosystem encompassing a diverse range of services, technologies, and entities committed to the well-being of individuals. Evolving towards patient-centric care, the sector undergoes a significant digital transformation with the integration of electronic health records, telemedicine, and wearable devices. Biomedical innovation remains pivotal, driving advancements in medical treatments and pharmaceuticals. Operating within a highly regulated environment, compliance with healthcare regulations is paramount. Addressing global health challenges, healthcare professionals collaborate across disciplines to combat diseases and enhance public health. Telehealth services and remote monitoring have gained prominence, providing remote access to medical consultations and monitoring. Healthcare analytics, fueled by vast datasets, plays a crucial role in identifying trends and improving overall healthcare delivery. Despite challenges like rising costs, the industry offers opportunities for innovation and efficiency improvements, fostering interdisciplinary collaboration among healthcare professionals. Understanding the intricacies of healthcare involves navigating a complex interplay of medical, technological, regulatory, and societal factors."
          AboutImage={AboutImage.src}
        />

        <IndustriesFeatures
          title="The benefits of digital software to the healthcare industry include"
          card={card}
        />

        <TechnologyServices
          title="Healthcare industry"
          titleSpan=""
          content="The healthcare industry plays a crucial role in society, encompassing a broad range of services, technologies, and organizations dedicated to maintaining and improving the health and well-being of individuals."
          services={services}
          Image={health.src}
        />

        <Faq accordionItems={accordionItems} />
      </div>
    </>
  );
}

export default Healthcare;
