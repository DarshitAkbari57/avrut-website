import About from "@/component/About/About";
import Cards from "@/component/Cards/Cards";
import Choose from "@/component/Choose";
import Faq from "@/component/FAQ";
import Footer from "@/component/Footer/Footer";
import Getintouch from "@/component/Getintouch";
import Nav from "@/component/Nav/Nav";
import Slider from "@/component/Sliders/Slider";
import Software from "@/component/Software/Software";
import Technology from "@/component/Technology/Technology";
import React from "react";

function Home() {
  const accordionItems = [
    {
      title: "01. What industries does Avrut Solutions cater to?",
      content:
        "Avrut Solutions has successfully delivered projects across diverse industries, including eCommerce, finance, manufacturing, wellness, travel, and more.",
    },
    {
      title:
        "02.  What technologies does Avrut Solutions specialize in for web development?",
      content:
        "Avrut Solutions excels in web development technologies such as React, Angular, and Node.js, ensuring dynamic and scalable solutions.",
    },
    {
      title:
        "03.  Which mobile development frameworks does Avrut Solutions use?",
      content:
        "Avrut Solutions specializes in React Native and Flutter for mobile app development, offering cross-platform solutions with optimal performance.",
    },
    {
      title:
        "04.   How does Avrut Solutions ensure the quality of its software solutions?",
      content:
        "Avrut Solutions employs a comprehensive approach to testing, including manual and automated testing, along with rigorous quality assurance practices to ensure reliability and performance.",
    },
    {
      title:
        "05.  Can Avrut Solutions provide custom-tailored software solutions?",
      content:
        "Yes, Avrut Solutions specializes in crafting bespoke software solutions that precisely align with the unique requirements and objectives of each project.",
    },
    {
      title: "06.  What design tools does Avrut Solutions use for UI/UX?",
      content:
        "Avrut Solutions utilizes industry-standard design tools such as Figma and Adobe XD to create visually appealing and user-centric interfaces.",
    },
    {
      title:
        "07.   How collaborative is the development process with Avrut Solutions?",
      content:
        "Avrut Solutions values open communication and collaboration. We work closely with clients, ensuring their input is considered throughout the development process for client satisfaction.",
    },
    {
      title:
        "08. What is the typical duration for completing a software development project with Avrut Solutions?",
      content:
        "Project durations vary based on complexity and requirements. Avrut Solutions provides timelines during the project planning phase and strives to meet agreed-upon deadlines.",
    },
    {
      title:
        "09.  Does Avrut Solutions offer ongoing support for deployed software?",
      content:
        "Yes, Avrut Solutions provides end-to-end services, including deployment assistance and ongoing support to ensure the smooth operation and evolution of software solutions.",
    },
    {
      title: "10. How can I get started with Avrut Solutions for my project?",
      content:
        "To get started, you can contact us through our website or reach out to our team via email or phone. We'll be happy to discuss your project requirements and provide guidance on the next steps.",
    },
  ];

  return (
    <>
      <Slider />
      <Cards />
      <About />
      <Software />
      <Technology />
      <Choose />
      <Faq accordionItems={accordionItems} />

      {/* <Getintouch /> */}
    </>
  );
}

export default Home;
