import Faq from "@/component/FAQ";
import First from "@/component/First/First";
import Portfolio from "@/component/Portfolio/Portfolio";
import Architecture from "@/component/Services/Architecture/Architecture";
import TechnologyServices from "@/component/Technology/TechnologyServices/TechnologyServices";
import WhyThisTechnology from "@/component/Technology/WhyThisTechnology/WhyThisTechnology";
import Link from "next/link";
import { useRouter } from "next/router";
import React from "react";
import ImageTech from "../../../../public/images/culture.png";

function Digitalproductdesign() {
  const services = [
    {
      numbers: "1",
      main: "In-depth user research",
      content:
        "Deep user research and analysis are the foundation of a robust digital product design. Our designers strive to acquire real insights about your users, so they understand what they truly want. They conduct user interviews, customer journey maps to become familiar with your customers wants, needs, and goals.",
    },
    {
      numbers: "2",
      main: "Outlining the problem",
      content:
        "The next step in creating user-friendly digital product design software is defining the problem. In this stage, our designers analyze the findings gained previously to comprehend the challenges of your users. Defining the problem makes them crystal clear on your customers' issues so that they can frame it in a user-centric way. After translating the challenge into words, it’s time to brainstorm possible solutions.",
    },
    {
      numbers: "3",
      main: "Product ideation",
      content:
        "This is the step where the designers start working on the most feasible solutions. During this phase, we effectively gather, prioritize, and implement ideas to deliver the best product or service. Fresh ideas are at the core of innovation and advancement. We perform product ideation through generation, selection, and actual implementation. The designers use various ideation techniques that challenge their beliefs and allow them to explore more options.",
    },
    {
      numbers: "4",
      main: "Product prototyping",
      content:
        "Intense brainstorming results in a rapid prototyping process. It helps us understand the user experience, facilitate market research, and identify potential flaws. Not only that, but it also sparks various invention ideas. This scaled-down version of the product puts every solution to the test, assimilates user feedback, and refines the product before the final launch. At this point, our product design services company assesses whether a good idea will actually work in the real world.",
    },
    {
      numbers: "5",
      main: "Product testing",
      content:
        "Testing is an integral part of creating a quality product that lasts. In simple words, it verifies that software does what it is supposed to do. From preventing bugs to minimizing development costs and boosting performance, testing is indispensable. However, it’s not always right to think of it as the last phase because its results often lead our designers to a prior stage after getting insights to redefine the problem statement. This stage also ignites new ideas, all of which go to making a product that delights your users.",
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

  const whyTechnoloy = [
    {
      numbers: "1",
      main: "Vast experience",
      content:
        "As a leading product design services company, we have experienced designers who ensure your product is a market success. We intensely focus on providing design services for the health, education, and finance domains. Our rich experience gives us a great understanding of your requirements, and we deliver nothing but the best.",
    },
    {
      numbers: "2",
      main: "A modernized and agile design process",
      content:
        "Braincuber Technologies has optimized design processes in place. By leveraging a unique combination of cutting-edge software and drawing from our development library, our streamlined design process is efficient and logical. Thus, we can always deliver high-caliber results to each one of our clients.",
    },
    {
      numbers: "3",
      main: "Custom widgets",
      content:
        "By utilizing modular code organization, NPM packages, templating engines, and custom middleware, developers can create and use custom widgets in React.js applications. These widgets promote code reusability, enhance development efficiency, and enable the creation of scalable and customizable applications.",
    },
    {
      numbers: "4",
      main: "Competitive prices",
      content:
        "Our prices are very rational and precisely align with your project. We offer the best-in-class technologies for product design and development to maximize your sales and brand value at highly competitive prices. Your price will fully match the quality of the solutions you get",
    },
    {
      numbers: "5",
      main: "Strategic solutions",
      content:
        "Before designing any product, we understand who you are and why you do what you do. This is crucial to understand the project properly, which, in turn, makes us draft highly strategic solutions.",
    },
  ];

  return (
    <>
      <First
        title="Digital Product design"
        subtitle="Digital product design is a multidisciplinary field that involves creating and designing user interfaces and experiences for digital products such as websites, mobile apps, software applications, and other interactive platforms"
      />

      <Architecture
        title="What About Software Architecture"
        subtitle="Software architecture reveals the system's structure and how
              the components are connected and interact. The architecture design
              software procedure involves utilizing technical and operative
              conditions to develop high-performance, proven-tested, and
              scalable solutions."
      />

      <TechnologyServices
        title="Digital Product Design"
        titleSpan="Stages"
        content="Product design using a human-centered approach allows us to build tools that your customers will love to use. We follow a five-stage process to design and develop optimized software that drives engagement."
        services={services}
      />

      <Portfolio />

      <WhyThisTechnology
        why="Why We are a Top Choice for"
        title="Digital Product Design"
        content="Avrut Solutions consists of a team of transparent, solution-oriented experts. We follow a data-driven and consumer-focused approach to unleash innovation that resolves real human problems."
        technologies={whyTechnoloy}
        ImageTech={ImageTech.src}
      />

      <Faq accordionItems={accordionItems} />
    </>
  );
}

export default Digitalproductdesign;
