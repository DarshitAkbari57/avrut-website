import React from "react";
import Faq from "@/component/FAQ";
import First from "@/component/First/First";
import ChooseTechnology from "@/component/Technology/ChooseTechnology/ChooseTechnology";
import Process from "@/component/Technology/Process/Process";
import TechnologyServices from "@/component/Technology/TechnologyServices/TechnologyServices";
import WhyThisTechnology from "@/component/Technology/WhyThisTechnology/WhyThisTechnology";
import ImageTech from "../../../assets/technology/flutter.png";

function Flutter() {
  const services = [
    {
      numbers: "1",
      main: "Flutter development",
      content:
        "Transform your app ideas into reality with our expert Flutter development services, delivering cross-platform applications that combine stunning design, smooth performance, and seamless user experiences.",
    },
    {
      numbers: "2",
      main: "Custom Flutter solutions",
      content:
        "Experience tailor-made solutions for your unique needs with our custom Flutter development service, where we craft innovative and high-quality applications that set your business apart.",
    },
    {
      numbers: "3",
      main: "Maintenance & support",
      content:
        "Our comprehensive maintenance and support for Flutter development service ensures your applications remain up-to-date, secure, and seamlessly operational, providing you with peace of mind and continuous user satisfaction.",
    },
    {
      numbers: "4",
      main: "Flutter upgrade",
      content:
        "Stay at the forefront of technology with our Flutter upgrade service, as we swiftly migrate your applications to the latest versions, unlocking new features and optimizing performance for a cutting-edge user experience.",
    },
    {
      numbers: "5",
      main: "Native & advanced Flutter",
      content:
        "Combining the power of native development with advanced Flutter capabilities, our services deliver high-performance and feature-rich applications that cater to diverse business needs, ensuring a competitive edge in the mobile landscape.",
    },
    {
      numbers: "6",
      main: "Flutter design service",
      content:
        "Transforming ideas into delightful realities, our Flutter design service offers innovative and user-centric app interfaces, maximizing engagement and leaving a lasting impression on your audience.",
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
      main: "Requirement gathering",
      content:
        "At the requirement gathering stage in our Flutter development process, we conduct in-depth consultations with clients to comprehend their needs and objectives, laying the foundation for a well-defined and successful app development strategy.",
    },
    {
      no: "02",
      main: "Proposal & engagement",
      content:
        "The proposal and engagement stage in our Flutter development process involves understanding client requirements, proposing tailored solutions, and establishing a collaborative partnership to ensure a successful and satisfying development journey.",
    },
    {
      no: "03",
      main: "Designs, wireframes & mockups",
      content:
        "At the design wireframe and mockups stage in our Flutter development process, we meticulously craft the app's visual blueprint, ensuring a seamless and captivating user experience before moving on to development.",
    },
    {
      no: "04",
      main: "Prototype demo",
      content:
        "At the design wireframe and mockups stage in our Flutter development process, we meticulously craft the app's visual blueprint, ensuring a seamless and captivating user experience before moving on to development.",
    },
    {
      no: "05",
      main: "Changes requests",
      content:
        "At the changes requests stage in our Flutter development process, we prioritize client satisfaction, efficiently incorporating feedback and modifications to ensure the final product meets and exceeds expectations.",
    },
    {
      no: "06",
      main: "Development",
      content:
        "The development stage in our Flutter development process involves our expert team utilizing the power of Flutter framework to create robust and feature-rich mobile applications that align perfectly with your business objectives.",
    },
    {
      no: "07",
      main: "Deployment",
      content:
        "During the deployment stage of the Flutter development process, we meticulously handle the release and distribution of your applications across various platforms, ensuring a smooth and hassle-free launch for a wider audience reach.",
    },
    {
      no: "08",
      main: "Support & maintenance",
      content:
        "At this stage, our team provides prompt and comprehensive assistance, offering timely updates, bug fixes, and technical support to ensure the continuous performance and longevity of your Flutter applications",
    },
    {
      no: "09",
      main: "SEO",
      content:
        "Incorporating SEO best practices during the Flutter development process, we ensure your mobile applications are search engine optimized, helping you maximize visibility, organic traffic, and online presence.",
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
      />

      <ChooseTechnology
        title="Why Choose us as Flutter development?"
        content="Our team comprises skilled and experienced designers who excel in utilizing Figma to its full potential, ensuring high-quality and innovative design solutions for your projects."
      />

      <TechnologyServices
        title="Flutter Development"
        titleSpan="Service We offer"
        content="Our expertise in Flutter's rich widget library and fast rendering ensures you deliver visually engaging, high-performance apps, reaching both iOS and Android users effectively while maximizing development efficiency."
        services={services}
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
