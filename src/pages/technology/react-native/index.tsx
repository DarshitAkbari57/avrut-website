import React from "react";
import Faq from "@/component/FAQ";
import First from "@/component/First/First";
import ChooseTechnology from "@/component/Technology/ChooseTechnology/ChooseTechnology";
import Process from "@/component/Technology/Process/Process";
import TechnologyServices from "@/component/Technology/TechnologyServices/TechnologyServices";
import WhyThisTechnology from "@/component/Technology/WhyThisTechnology/WhyThisTechnology";
import ImageTech from "../../../assets/technology/react-native.png";
import MainBanner from "../../../assets/technology/reactbanner.png";

function ReactNative() {
  const services = [
    {
      numbers: "1",
      main: "React native development",
      content:
        "We create highly functional and visually appealing cross-platform applications that work seamlessly on both iOS and Android devices. Our services galore include end-to-end solutions, including UI/UX design, coding, testing, and deployment, ensuring a smooth and hassle-free development process. Demands of a new app or migrating an existing one to React Native are fulfilled by us via reliable and cost-effective solutions to help you stay ahead in the mobile app market.",
    },
    {
      numbers: "2",
      main: "Custom react native solutions",
      content:
        "Owing an in-depth knowledge and experience in building highly customized mobile applications using React Native framework, our team work connects with our clients to understand their specific requirements and deliver tailored solutions that align with their brand identity and user expectations.",
    },
    {
      numbers: "3",
      main: "Maintenance & support",
      content:
        "Our Maintenance and support team provides regular updates, bug fixes, and feature enhancements to ensure proper functionality of your app. Along with it, we also offer proactive monitoring, troubleshooting, and technical support to promptly address any issues that may arise.",
    },
    {
      numbers: "4",
      main: "React native upgrade",
      content:
        "Upgrades and optimizations are a requisite in competitive times. Our team conducts thorough assessments of your existing app & initiates upgrade process compatibility testing, code refactoring, and integration of new libraries or APIs.",
    },
    {
      numbers: "5",
      main: "Native & advanced react native development",
      content:
        "We offer both React Native and Advanced React Native services to cater to varied needs of the client. With React Native, we build cross-platform mobile apps that deliver a consistent user experience across iOS and Android platforms. For clients with demand of advanced solutions we avail services including integrating complex APIs, implementing native modules, and optimizing app performance.",
    },
    {
      numbers: "6",
      main: "React native design services",
      content:
        "Crafting visually stunning designs imbibing latest color schemes and trends, we ensure that our React Native app delivers an exceptional user experience, enhancing user satisfaction and engagement.",
    },
  ];

  const whyTechnoloy = [
    {
      numbers: "1",
      main: "Coding structure",
      content:
        "React Native enables one to reuse a significant portion of your code across different platforms. This means one can share common logic and components, resulting in faster development, easier maintenance, and reduced development costs.",
    },
    {
      numbers: "2",
      main: "Speedy programming",
      content:
        "Developers can build applications more quickly using React native thereby making it an ideal choice for projects that have strict timelines without compromising on quality or performance.",
    },
    {
      numbers: "3",
      main: "Custom widgets",
      content:
        "Custom widgets tailored to meet specific design and functionality requirements can be created using react native’s component-based architecture, JSX syntax, styling options, native integration capabilities, and community resources.",
    },
    {
      numbers: "4",
      main: "Fast & efficient testing",
      content:
        "React Native development offers fast and efficient testing capabilities with built-in features like hot-reloading, cross-platform testing, mocking, third-party testing libraries, and community support.",
    },
    {
      numbers: "5",
      main: "Seamless user experience",
      content:
        "Developers can create mobile apps with seamless user experiences by leveraging native performance, smooth animations, consistent UI, responsive updates, and fast iterations.",
    },
    {
      numbers: "6",
      main: "Framework",
      content:
        "React native’s framework handles the communication between JavaScript and the native platform, allowing developers to pay attention on writing code and delivering high-quality mobile applications.",
    },
  ];

  const process = [
    {
      no: "01",
      main: "Requirement gathering",
      content:
        "This stage involves understanding the client's requirements, identifying project goals, and defining the scope of the application. Gathering all necessary details and specifications helps in creating a clear project plan.",
    },
    {
      no: "02",
      main: "Proposal & engagement",
      content:
        "The proposal and engagement stage ensures that both parties are aligned in terms of project expectations, scope, and contractual obligations, setting the stage for the subsequent stages of the React Native development process.",
    },
    {
      no: "03",
      main: "Designs, wireframes & mockups",
      content:
        "The design phase focuses on creating a visually appealing and intuitive user interface. It involves wire framing, prototyping, and creating UI designs that align with the client's branding and user experience goals.",
    },
    {
      no: "04",
      main: "Prototype demo",
      content:
        "During the prototype demo stage, our team showcases a functional demonstration of the app prototype. We present a visually appealing and interactive representation of the user interface, demonstrating key features and user flows.",
    },
    {
      no: "05",
      main: "Changes requests",
      content:
        "In the change requests stage, our React Native company actively engages with clients to accommodate any desired modifications or additions to the app's requirements.",
    },
    {
      no: "06",
      main: "Development",
      content:
        "In this stage, developers write the code to build the application. They utilize the React Native framework, JavaScript, and any necessary libraries or APIs to implement the desired functionalities.",
    },
    {
      no: "07",
      main: "Deployment",
      content:
        "Once the application has been thoroughly tested and meets the desired quality standards, it is prepared for deployment. The app is packaged and released on the respective app stores or any other distribution platforms as per the client's requirements.",
    },
    {
      no: "08",
      main: "Support & maintenance",
      content:
        "Once the application has been thoroughly tested and meets the desired quality standards, it is prepared for deployment. The app is packaged and released on the respective app stores or any other distribution platforms as per the client's requirements.",
    },
    {
      no: "09",
      main: "SEO",
      content:
        "In the SEO stage, our React Native company works closely with clients to optimize their mobile app for search engine visibility and discoverability. We conduct thorough keyword research and analysis to identify relevant search terms and incorporate them strategically into the app's content and metadata",
    },
  ];

  const accordionItems = [
    {
      title: "01.  What are the advantages of React Native App Development?",
      content:
        "React Native is easy to use and offers simplified UI development with cross-platform compatibility. Companies choose React Native considering the below factors-Code reusability Open-source framework A wide community Ease of hiring Hot Reloading High performance",
    },
    {
      title:
        "02.  Why React Native is popular for cross-platform app development?",
      content:
        "With React Native, there is no need to hire different developers for iOS and Android platforms. It allows cross-platform app development that supports multiple platforms. It is widely used by companies worldwide to create web and mobile user interfaces.",
    },
    {
      title: "03. What is the difference between React Native and React?",
      content:
        "React Native uses React. React Native is the entire framework while React is a JavaScript library. React is used for responsive, high-performing, dynamic UI development. React Native is an ideal framework for developing cross-platform app development.",
    },
    {
      title: "04. What apps are built with React Native?",
      content:
        "React Native enables developers to accelerate the process of building apps across different platforms, thanks to the possibility of reusing most of the code between them. Taking into account all the pros and cons, it’s no wonder that many companies settle on React Native for their mobile app development. Among them, we can distinguish such brands as Facebook, Uber Eats, Delivery.com, Skype, Tesla, and Walmart.",
    },
    {
      title: "05. What is React Native used for?",
      content:
        "React Native is a framework for building cross-platform mobile apps using JavaScript. In a nutshell, the main idea behind RN is to create multiplatform UI components with JSX, which are then bridged to native code and converted to Android and iOS views. The logic is written entirely in JavaScript, so you don’t need to know Java, Kotlin, Objective-C, or Swift to write a mobile app that feels native.",
    },
  ];

  return (
    <>
      <First
        title="React Native Development Company"
        subtitle="Curating highly functional and visually appealing cross-platform applications with React native"
        MainBanner={MainBanner.src}
      />

      <ChooseTechnology
        title="Why Choose us as React Native development?"
        content="Our team of Bitbucket specialists indulge in seamless integration of frontend and backend development, enabling the creation of cross-platform mobile applications with a powerful and efficient database backend."
      />

      <TechnologyServices
        title="React Native Development"
        titleSpan="Service We offer"
        content="From robust backend integration to intuitive UI/UX design, we specialize in providing comprehensive React Native services tailored to your unique project needs."
        services={services}
      />

      <WhyThisTechnology
        why="Why"
        title="Native ?"
        content="With a proven track record of successful projects and a commitment to innovation, we ensure your app stands out in the competitive market."
        technologies={whyTechnoloy}
        ImageTech={ImageTech.src}
      />

      <Process process={process} />

      <Faq accordionItems={accordionItems} />
    </>
  );
}

export default ReactNative;
