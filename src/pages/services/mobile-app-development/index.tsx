import React from "react";
import First from "@/component/First/First";
import Faq from "@/component/FAQ";
import TechnologyServices from "@/component/Technology/TechnologyServices/TechnologyServices";
import WhyThisTechnology from "@/component/Technology/WhyThisTechnology/WhyThisTechnology";
import ImageTech from "../../../assets/technology/appdev.jpg";
import MainBanner from "../../../assets/technology/mobilebanner.jpg";
import App from "../../../assets/about/mobile.jpeg";


function MobileApp() {
  const services = [
    {
      numbers: "1",
      main: "Cross-Platform Development",
      content:
        "Select cross-platform frameworks like React Native or Flutter for efficient development, allowing the creation of apps compatible with both iOS and Android platforms.",
    },
    {
      numbers: "2",
      main: "User-Centric Design",
      content:
        "Prioritize user experience (UX) design to create a user-friendly interface, intuitive navigation, and an overall positive experience for increased app adoption and retention.",
    },
    {
      numbers: "3",
      main: "Offline Functionality",
      content:
        "Implement offline mode support to enable users to access specific app features even without an internet connection, enhancing usability and convenience.",
    },
    {
      numbers: "4",
      main: "Security Measures",
      content:
        "Ensure data security through robust encryption mechanisms, especially when handling sensitive information like login credentials or personal details.",
    },
    {
      numbers: "5",
      main: "App Performance Optimization",
      content:
        "Optimize app performance by minimizing load times and ensuring responsiveness, providing users with a smooth and enjoyable experience.",
    },
  ];

  const accordionItems = [
    {
      title:
        "01. What factors should be considered during the initial planning phase of mobile app development?",
      content:
        "During the planning phase, it's crucial to define the app's purpose, identify the target audience, conduct market research, and outline key features. Considering the choice of development platform (iOS, Android, or cross-platform) and establishing a clear roadmap are also essential for a successful mobile app launch.",
    },
    {
      title:
        "02. How can I ensure my mobile app is user-friendly and provides an excellent user experience (UX)?",
      content:
        "Achieving a positive UX involves intuitive design, easy navigation, and responsiveness. Conducting user testing, gathering feedback, and refining the app based on user input are essential. Prioritizing accessibility features and optimizing performance contribute to an overall enhanced user experience.",
    },
    {
      title:
        "03. security measures are essential to protect user data in a mobile app?",
      content:
        "Security is paramount in mobile app development. Implementing secure data encryption, using secure authentication methods, and incorporating secure coding practices are crucial. Regular security audits, addressing vulnerabilities promptly, and complying with industry regulations contribute to maintaining a secure mobile app environment.",
    },
  ];

  const whyTechnoloy = [
    {
      numbers: "1",
      main: "Innovative Feature Integration",
      content:
        "We stand out for our ability to seamlessly integrate innovative features, including augmented reality (AR) and voice user interface (VUI), enhancing user experiences and setting our mobile apps apart.",
    },
    {
      numbers: "2",
      main: "Client-Centric Collaboration",
      content:
        "Our client-centric approach involves close collaboration, ensuring that client goals and visions are integral to the development process, resulting in tailored and impactful mobile solutions.",
    },
    {
      numbers: "3",
      main: "Agile Development Excellence",
      content:
        "Embracing agile methodologies, we prioritize adaptive planning and flexibility, allowing us to respond swiftly to changing requirements and deliver high-quality mobile apps with continuous improvement.",
    },
    {
      numbers: "4",
      main: "Security-Driven Development",
      content:
        "Our commitment to security includes blockchain integration for enhanced data protection, providing clients with a secure and tamper-resistant environment for transactions and sensitive information handling.",
    },
    {
      numbers: "5",
      main: "Accessibility and Offline Optimization",
      content:
        "We go beyond by prioritizing accessibility compliance and adopting an offline-first architecture, ensuring our mobile apps are inclusive and perform seamlessly in diverse connectivity scenarios.",
    },
  ];

  return (
    <>
      <First
        title="Mobile App Development"
        subtitle="Mobile app development is the process of creating software applications specifically designed to run on mobile devices such as smartphones and tablets."
        MainBanner={MainBanner.src}
      />

      {/* <Architecture
        title="What About Mobile App Development"
        subtitle="It involves a combination of designing the user interface, developing the application's functionality, and ensuring optimal performance on various mobile platforms. Here are key aspects and phases associated with mobile app development."
      /> */}

      <TechnologyServices
        title=" Mobile App Development"
        titleSpan="Services"
        content="Mobile app development is the process of creating software applications specifically designed to run on mobile devices such as smartphones and tablets."
        services={services}
        Image={App.src}
      />

      {/* <Portfolio /> */}

      <WhyThisTechnology
        why="Why We are a Top Choice for"
        title="Mobile App Development"
        content="Optimize app performance by minimizing load times and ensuring responsiveness, providing users with a smooth and enjoyable experience."
        technologies={whyTechnoloy}
        ImageTech={ImageTech.src}
      />

      <Faq accordionItems={accordionItems} />
    </>
  );
}

export default MobileApp;
