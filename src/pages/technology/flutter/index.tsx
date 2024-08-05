import React from "react";
import Faq from "@/component/FAQ";
import First from "@/component/First/First";
import Process from "@/component/Technology/Process/Process";
import TechnologyServices from "@/component/Technology/TechnologyServices/TechnologyServices";
import WhyThisTechnology from "@/component/Technology/WhyThisTechnology/WhyThisTechnology";
import ImageTech from "../../../assets/technology/flutter.png";
import MainBanner from "../../../assets/technology/flutterbanner.png";
import Fluttertech from "../../../assets/about/flutter.jpg";

function Flutter() {
  const services = [
    {
      numbers: "1",
      main: "Expert Flutter Development",
      content:
        "Bring your app ideas to life with our Flutter development expertise, creating cross-platform applications that blend exceptional design with smooth performance and seamless user experiences.",
    },
    {
      numbers: "2",
      main: "Tailored Flutter Solutions",
      content:
        "Get custom-built solutions that cater specifically to your business needs with our Flutter development services, delivering innovative and high-quality applications that distinguish your brand.",
    },
    {
      numbers: "3",
      main: "Ongoing Maintenance & Support",
      content:
        "Ensure your Flutter applications are always up-to-date and performing at their best with our thorough maintenance and support services, providing you with continuous peace of mind and user satisfaction.",
    },
    {
      numbers: "4",
      main: "Flutter Version Upgrades",
      content:
        "Keep your applications cutting-edge with our Flutter upgrade service, smoothly transitioning your apps to the latest versions to take advantage of new features and enhanced performance.",
    },
    {
      numbers: "5",
      main: "Advanced & Native Flutter Solutions",
      content:
        "Leverage the power of native development combined with advanced Flutter features to create high-performance, feature-rich applications tailored to meet diverse business requirements and maintain a competitive edge.",
    },
    {
      numbers: "6",
      main: "Innovative Flutter Design Services",
      content:
        "Transform your ideas into engaging realities with our Flutter design services, crafting user-centric app interfaces that maximize engagement and leave a memorable impact on your audience.",
    },
  ];

  const whyTechnoloy = [
    {
      numbers: "1",
      main: "Coding structure",
      content:
        "The coding structure in Flutter development revolves around a declarative UI paradigm, where developers use Dart language and Flutter widgets to build flexible and visually engaging mobile applications.",
    },
    {
      numbers: "2",
      main: "Speedy programming",
      content:
        "With its hot reload feature and concise Dart language, Flutter development enables speedy programming, allowing developers to iterate quickly and efficiently during the app development process.",
    },
    {
      numbers: "3",
      main: "Custom widgets",
      content:
        "The custom widgets feature in Flutter development allows for the creation of reusable, modular components, streamlining the development process and ensuring a consistent design language across the entire mobile application.",
    },
    {
      numbers: "4",
      main: "Fast & efficient testing",
      content:
        "The fast and efficient testing feature of Flutter development enables developers to conduct rapid and reliable testing, ensuring robust app performance and a seamless user experience.",
    },
    {
      numbers: "5",
      main: "Seamless user experience",
      content:
        "The seamless user experience feature of Flutter development facilitates the creation of smooth and intuitive interfaces, enhancing user engagement and satisfaction with mobile applications.",
    },
    {
      numbers: "6",
      main: "Framework",
      content:
        "Flutter development's robust framework, built on Dart language, empowers developers to create natively compiled, high-performance applications for mobile, web, and desktop platforms.",
    },
  ];

  const process = [
    {
      no: "01",
      main: "Gathering Requirements",
      content:
        "We start by conducting detailed consultations to understand your needs and goals, setting the stage for a well-defined app development plan and strategy.",
    },
    {
      no: "02",
      main: "Proposal & Engagement",
      content:
        "We present a tailored proposal based on your requirements, establishing a clear scope, timeline, and collaborative approach to ensure a successful development journey.",
    },
    {
      no: "03",
      main: "Designs, Wireframes & Mockups",
      content:
        "Our design phase involves creating detailed wireframes and mockups to visualize the app’s layout and user interactions, ensuring a seamless and engaging user experience before development begins.",
    },
    {
      no: "04",
      main: "Prototype Demonstration",
      content:
        "We build and present an interactive prototype to showcase key functionalities, gather stakeholder feedback, and refine the app design to align with your vision.",
    },
    {
      no: "05",
      main: "Handling Change Requests",
      content:
        "We efficiently incorporate client feedback and requested changes, making necessary adjustments to meet your expectations and enhance the final product.",
    },
    {
      no: "06",
      main: "Development Phase",
      content:
        "Our developers leverage the Flutter framework to build robust, feature-rich applications that meet your business objectives, following industry best practices for quality and performance.",
    },
    {
      no: "07",
      main: "Deployment Process",
      content:
        "We manage the deployment of your application across various platforms, ensuring a smooth launch and broad reach to your target audience without any issues.",
    },
    {
      no: "08",
      main: "Support & Maintenance",
      content:
        "We offer ongoing support and maintenance, providing timely updates, bug fixes, and technical assistance to keep your Flutter applications running smoothly and efficiently.",
    },
    {
      no: "09",
      main: "Search Engine Optimization (SEO)",
      content:
        "We implement SEO best practices to enhance the visibility and ranking of your mobile application, maximizing organic traffic and improving online presence.",
    },
  ];

  const accordionItems = [
    {
      title: "01.  Can we use flutter for Web development?",
      content:
        "Flutter is a fantastic mobile and web development tool. Flutter is extremely compatible with today's web content, which is created using standards- based online technologies such as HTML, CSS, and JavaScript.",
    },
    {
      title: "02.  What is the cost to develop a Flutter app?",
      content:
        "The cost of Flutter app development depends on many factors such as the development platform, app categories, app complexity, the country of the developer, and the number of features you need in your app.",
    },
    {
      title: "03. Will I get post-mobile app development support?",
      content:
        "Yes. For the maintenance of the mobile app, we provide dedicated app support and maintenance service when required.",
    },
    {
      title: "04. Is Flutter better than React Native?",
      content:
        "Flutter and React Native both have their own pros and cons. However, Flutter is more popular with benefits like rich widgets, great performance, etc.",
    },
    {
      title: "05. How do I track my Flutter app development progress?",
      content:
        "Our Flutter app development team uses agile project management tools to keep track of the app development progress through that app, you can keep track of the progress of your Flutter app development.",
    },
  ];

  return (
    <>
      <First
        title="Flutter Development"
        subtitle="At Avrut Solutions, we specialize in leveraging the power of Flutter, Google's revolutionary cross-platform framework, to build stunning and high-performance mobile applications. Our experienced team of Flutter developers and designers are adept at creating seamless user experiences that run flawlessly on both Android and iOS platforms."
        MainBanner={MainBanner.src}
      />

      <TechnologyServices
        title="Flutter Development"
        titleSpan="Service We offer"
        content="Our expertise in Flutter's rich widget library and fast rendering ensures you deliver visually engaging, high-performance apps, reaching both iOS and Android users effectively while maximizing development efficiency."
        services={services}
        Image={Fluttertech.src}
      />

      <WhyThisTechnology
        why="Why"
        title="Flutter ?"
        content="We guarantee that your app stands out in the crowded market because to our dedication to innovation and track record of successfully completed projects."
        technologies={whyTechnoloy}
        ImageTech={ImageTech.src}
      />

      <Process process={process} />

      <Faq accordionItems={accordionItems} />
    </>
  );
}

export default Flutter;
