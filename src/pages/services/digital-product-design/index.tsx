import Faq from "@/component/FAQ";
import First from "@/component/First/First";
import TechnologyServices from "@/component/Technology/TechnologyServices/TechnologyServices";
import WhyThisTechnology from "@/component/Technology/WhyThisTechnology/WhyThisTechnology";
import React from "react";
import ImageTech from "../../../assets/technology/digital3.jpg";
import MainBanner from "../../../assets/technology/digitalbanner.jpg";
import dp from "../../../assets/about/digital.jpg";

function Digitalproductdesign() {
  const services = [
    {
      numbers: "1",
      main: "Comprehensive User Research",
      content:
        "Thorough user research and analysis are essential for creating effective digital product designs. Our designers focus on gaining genuine insights into user preferences by conducting interviews, mapping customer journeys, and understanding their needs and goals.",
    },
    {
      numbers: "2",
      main: "Defining User Challenges",
      content:
        "The next phase involves clearly defining the problems based on the research findings. Our designers analyze these insights to understand user challenges better, which helps in framing the issues from a user-centric perspective. This stage includes brainstorming potential solutions to address these challenges.",
    },
    {
      numbers: "3",
      main: "Idea Generation and Prioritization",
      content:
        "During this phase, designers work on the most promising solutions. We collect, prioritize, and implement ideas to create the best possible product or service. This process involves generating, selecting, and executing ideas using various techniques to foster innovation and explore diverse options.",
    },
    {
      numbers: "4",
      main: "Rapid Prototyping",
      content:
        "Prototyping involves creating scaled-down versions of the product to test user experience, gather market feedback, and identify potential issues. This iterative process helps refine the product based on user feedback and assess the viability of ideas before the final launch.",
    },
    {
      numbers: "5",
      main: "Thorough Product Testing",
      content:
        "Testing is crucial for ensuring that the product functions as intended. It involves identifying and fixing bugs, minimizing development costs, and enhancing performance. Testing often leads to revisiting earlier stages to refine the problem statement and spark new ideas, ensuring the final product meets user expectations and quality standards.",
    },
  ];

  const accordionItems = [
    {
      title:
        "01. How important is user feedback in the digital product design process?",
      content:
        "User feedback is paramount in digital product design. It provides valuable insights into user preferences, behaviors, and pain points. By incorporating user feedback, designers can refine and optimize the product, ensuring it meets the needs and expectations of the target audience.",
    },
    {
      title: "02. What role does accessibility play in digital product design?",
      content:
        "Accessibility is a fundamental consideration in digital product design. Designing products that are accessible to users with diverse abilities ensures inclusivity. This involves creating interfaces that can be easily navigated by individuals with disabilities, enhancing the overall user experience for a broader audience.",
    },
    {
      title:
        "03. How do you address cross-platform design challenges in digital product design?",
      content:
        "Cross-platform design challenges are tackled by adopting responsive design principles. Our designers ensure that digital products seamlessly adapt to various devices and screen sizes. This approach involves designing flexible layouts, scalable components, and prioritizing a consistent user experience across different platforms.",
    },
  ];

  const whyTechnology = [
    {
      numbers: "1",
      main: "Extensive Expertise",
      content:
        "As a leading product design service provider, our experienced designers ensure your product achieves market success. We specialize in designing for the health, education, and finance sectors, bringing valuable insights and delivering top-quality results tailored to your needs.",
    },
    {
      numbers: "2",
      main: "Modern and Agile Design Process",
      content:
        "At Avrut Solutions, we employ an optimized and agile design process. By combining advanced software tools with our development library, we ensure a streamlined and efficient design workflow, consistently delivering high-quality outcomes for our clients.",
    },
    {
      numbers: "3",
      main: "Custom Widgets",
      content:
        "We leverage modular code organization, NPM packages, templating engines, and custom middleware to create and utilize custom widgets in React.js applications. These widgets enhance code reusability, improve development efficiency, and allow for the creation of scalable and adaptable applications.",
    },
    {
      numbers: "4",
      main: "Affordable Pricing",
      content:
        "Our pricing is competitive and aligns with your project requirements. We provide top-notch design and development technologies to enhance your sales and brand value, ensuring that the cost of our solutions reflects their quality.",
    },
    {
      numbers: "5",
      main: "Strategic Approach",
      content:
        "Before initiating any design project, we take the time to understand your business and objectives. This deep understanding enables us to craft strategic solutions that are aligned with your goals and drive success.",
    },
  ];

  return (
    <>
      <First
        title="Digital Product design"
        subtitle="Digital product design is a multidisciplinary field that involves creating and designing user interfaces and experiences for digital products such as websites, mobile apps, software applications, and other interactive platforms"
        MainBanner={MainBanner.src}
      />

      <TechnologyServices
        title="Digital Product Design"
        titleSpan="Stages"
        content="Product design using a human-centered approach allows us to build tools that your customers will love to use. We follow a five-stage process to design and develop optimized software that drives engagement."
        services={services}
        Image={dp.src}
      />

      {/* <Portfolio /> */}

      <WhyThisTechnology
        why="Why We are a Top Choice for"
        title="Digital Product Design"
        content="Avrut Solutions consists of a team of transparent, solution-oriented experts. We follow a data-driven and consumer-focused approach to unleash innovation that resolves real human problems."
        technologies={whyTechnology}
        ImageTech={ImageTech.src}
      />

      <Faq accordionItems={accordionItems} />
    </>
  );
}

export default Digitalproductdesign;
