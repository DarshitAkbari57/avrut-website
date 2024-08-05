import Faq from "@/component/FAQ";
import React from "react";
import First from "@/component/First/First";
import AboutIndustries from "@/component/Industries/AboutIndustries/AboutIndustries";
import IndustriesFeatures from "@/component/Industries/IndustriesFeatures/IndustriesFeatures";
import TechnologyServices from "@/component/Technology/TechnologyServices/TechnologyServices";
import {
  FaBookReader,
  FaChalkboardTeacher,
  FaGraduationCap,
  FaLaptopCode,
} from "react-icons/fa";
import MainBanner from "../../../assets/technology/educationbanner.jpg";
import AboutImage from "../../../assets/technology/edu1.jpg";
import Edutech from "../../../assets/about/Education.jpg";

function Education() {
  const services = [
    {
      numbers: "1",
      main: "E-Learning Platforms",
      content:
        "We specialize in developing interactive and user-friendly e-learning platforms that offer a variety of courses and materials for learners of all ages. These platforms can include multimedia content, quizzes, and progress tracking to engage students effectively.",
    },
    {
      numbers: "2",
      main: "Mobile Apps for Learning",
      content:
        "Our team creates educational mobile apps that allow students to access learning materials, practice exercises, and assessments on their smartphones and tablets. This enhances accessibility and convenience for students, particularly in remote areas.",
    },
    {
      numbers: "3",
      main: "Learning Management Systems (LMS)",
      content:
        "We design customized LMS software that enables educational institutions to manage and deliver online courses. Our LMS solutions support content creation, grading, communication, and performance tracking for both students and teachers.",
    },
    {
      numbers: "4",
      main: "Personalized Learning",
      content:
        "We develop adaptive learning software that tailors educational experiences to individual students' strengths and weaknesses. This personalized approach enhances learning outcomes and keeps students engaged.",
    },
    {
      numbers: "5",
      main: "Gamification",
      content:
        "We integrate gamification techniques into educational software to make learning more engaging and boost student motivation. Features like badges, leaderboards, and rewards encourage active participation and make learning enjoyable.",
    },
  ];

  const card = [
    {
      title: "Experienced Educators",
      content:
        "Engage with experienced educators who bring expertise and passion to the learning environment, fostering a conducive atmosphere for knowledge acquisition and academic growth.",
      icon: <FaChalkboardTeacher />,
    },
    {
      title: "Diverse Learning Resources",
      content:
        "Access a wealth of diverse learning resources, including textbooks, online materials, and multimedia content, providing students with comprehensive and varied sources to enhance their understanding of subjects.",
      icon: <FaBookReader />,
    },
    {
      title: "Graduation Pathways",
      content:
        "Explore well-structured graduation pathways that guide students through their academic journey, helping them navigate course requirements, set academic goals, and achieve successful graduation outcomes.",
      icon: <FaGraduationCap />,
    },
    {
      title: "Interactive Online Courses",
      content:
        "Participate in interactive online courses facilitated by cutting-edge e-learning platforms. Utilize virtual classrooms, collaborative tools, and hands-on assignments for an engaging and effective online learning experience.",
      icon: <FaLaptopCode />,
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
      title:
        "01. How has the education industry adapted to remote learning and online education?",
      content:
        "The education industry has undergone a significant shift towards remote learning and online education, leveraging digital platforms, interactive content, and collaborative tools to facilitate effective learning experiences from anywhere.",
    },
    {
      title:
        "02. What role does technology play in modernizing educational practices?",
      content:
        "Technology plays a crucial role in modernizing educational practices by enhancing accessibility, promoting interactive learning, and providing personalized experiences. Virtual classrooms, e-learning platforms, and educational apps are key components of this transformation.",
    },
    {
      title:
        "03. How is the education industry addressing the challenges of inclusivity and diversity?",
      content:
        "The education industry is actively working towards inclusivity and diversity by implementing inclusive curriculum designs, fostering a supportive learning environment, and embracing technology to accommodate diverse learning styles and backgrounds.",
    },
  ];

  return (
    <>
      <First
        title="Engineering Customized eLearning Products And Platforms For Improved Learning Experiences And Outcomes."
        MainBanner={MainBanner.src}
      />

      <div className="bg-purple px-2 py-10">
        <AboutIndustries
          title="About Education Industries"
          content="The Education industry is a multifaceted ecosystem encompassing a diverse range of services, technologies, and entities committed to the well-being of individuals. Evolving towards patient-centric care, the sector undergoes a significant digital transformation with the integration of electronic health records, telemedicine, and wearable devices. Biomedical innovation remains pivotal, driving advancements in medical treatments and pharmaceuticals. Operating within a highly regulated environment, compliance with healthcare regulations is paramount. Addressing global health challenges, healthcare professionals collaborate across disciplines to combat diseases and enhance public health. Telehealth services and remote monitoring have gained prominence, providing remote access to medical consultations and monitoring. Healthcare analytics, fueled by vast datasets, plays a crucial role in identifying trends and improving overall healthcare delivery. Despite challenges like rising costs, the industry offers opportunities for innovation and efficiency improvements, fostering interdisciplinary collaboration among healthcare professionals. Understanding the intricacies of healthcare involves navigating a complex interplay of medical, technological, regulatory, and societal factors."
          AboutImage={AboutImage.src}
        />

        <IndustriesFeatures
          title="The benefits of digital software to the education industry include"
          card={card}
        />

        <TechnologyServices
          title="Education industry"
          titleSpan=""
          content="Biomedical innovation remains pivotal, driving advancements in medical treatments and pharmaceuticals. Operating within a highly regulated environment, compliance with healthcare regulations is paramount."
          services={services}
          Image={Edutech.src}
        />

        <Faq accordionItems={accordionItems} />
      </div>
    </>
  );
}

export default Education;
