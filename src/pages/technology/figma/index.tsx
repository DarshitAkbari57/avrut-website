import React from "react";
import Faq from "@/component/FAQ";
import First from "@/component/First/First";
import ChooseTechnology from "@/component/Technology/ChooseTechnology/ChooseTechnology";
import Process from "@/component/Technology/Process/Process";
import TechnologyServices from "@/component/Technology/TechnologyServices/TechnologyServices";
import WhyThisTechnology from "@/component/Technology/WhyThisTechnology/WhyThisTechnology";
import ImageTech from "../../../assets/technology/figma.png";
import MainBanner from "../../../assets/technology/figmabanner.png";
import Figmatech from "../../../assets/about/figma.jpg"

function Figma() {
  const services = [
    {
      numbers: "1",
      main: "Creation of wireframes & prototypes",
      content:
        "Our team excels in curating exceptional wireframes and prototypes using the powerful Figma design platform, providing clients with dynamic visualizations and interactive representations of their projects, ensuring optimal user experiences and streamlined product development.",
    },
    {
      numbers: "2",
      main: "Unique & interactive design",
      content:
        "We ace in rendering unique and interactive designs that matches client’s imagination. Utilizing the full potential of the Figma platform, we create captivating user interfaces and experiences that enthrall audiences.",
    },
    {
      numbers: "3",
      main: "Typography & branding",
      content:
        "We leverage Figma to skillfully integrate typography and branding into every project. Our expert designers curate custom font selections, harmonize color schemes, and create stunning visual elements, ensuring that our clients' brand identity is thoroughly represented.",
    },
    {
      numbers: "4",
      main: "Style guidelines",
      content:
        "From defining color palettes, typography choices, iconography, and spacing, to establishing UI component libraries, our style guidelines guarantee a seamless and unified user experience, elevating our clients' brands and products to new heights.",
    },
    {
      numbers: "5",
      main: "User Research",
      content:
        "Via thorough analysis and understanding of user needs and behaviours, we gather invaluable insights that shape our design decisions. Utilizing Figma's collaborative capabilities, we ideate, prototype, and test designs, ensuring that our clients' products are tailored to meet the expectations of their target audience",
    },
    {
      numbers: "6",
      main: "Standard industry tools & practices",
      content:
        "We follow industry-leading practices and use Figma's versatile toolkit to deliver exceptional results. Collaboratively, our expert teams utilize Figma's real-time collaboration features to streamline communication and feedback, ensuring efficient project management.",
    },
  ];

  const whyTechnoloy = [
    {
      numbers: "1",
      main: "Real-time collaboration",
      content:
        "Figma allows multiple designers to work together in real-time on the same project, promoting seamless teamwork and eliminating version control issues.",
    },
    {
      numbers: "2",
      main: "Cloud-based platform",
      content:
        "Being cloud-based, Figma enables access to designs from any device with an internet connection, providing the flexibility to work on projects anytime, anywhere.",
    },
    {
      numbers: "3",
      main: "Live preview and prototyping",
      content:
        "Designers can instantly see how their designs will look and function with Figma's live preview and prototyping features, facilitating rapid iteration and user testing.",
    },
    {
      numbers: "4",
      main: "Component-based design",
      content:
        "Figma's component-based design system allows the creation and maintenance of design libraries, ensuring consistent styles and elements across multiple projects.",
    },
    {
      numbers: "5",
      main: "Developer-friendly",
      content:
        "Figma's design-to-code features enable developers to inspect designs, extract assets, and access design specs, streamlining the handoff process and reducing development time.",
    },
    {
      numbers: "6",
      main: "Versatility",
      content:
        "Figma supports a wide range of design tasks, including UI/UX design, wireframing, prototyping, icon design, and more, making it a comprehensive solution for designers.",
    },
    {
      numbers: "7",
      main: "Cost-effectiveness",
      content:
        "Figma's subscription-based pricing model, along with its cloud-based nature, eliminates the need for expensive software licenses and hardware upgrades.",
    },
    {
      numbers: "8",
      main: "Regular updates and community support",
      content:
        "Figma consistently improves its platform with new features and enhancements, and its active community shares valuable resources and plugins, enriching the design experience.",
    },
  ];

  const process = [
    {
      no: "01",
      main: "Discovery & Research",
      content:
        "We begin by thoroughly understanding your project's goals, target audience, and unique requirements. Extensive research is conducted to gain insights into industry trends, user behaviors, and competitor analysis.",
    },
    {
      no: "02",
      main: "Ideation & Wireframing",
      content:
        "Our designers collaborate to brainstorm creative ideas, sketching rough wireframes on paper or digital platforms. Figma's powerful vector editing tools are then used to create detailed wireframes that outline the layout and structure of the design.",
    },
    {
      no: "03",
      main: "Visual Design",
      content:
        "Using Figma's robust design features, we craft stunning visual elements, select appropriate color schemes, typography, and create a cohesive user interface.",
    },
    {
      no: "04",
      main: "Prototyping",
      content:
        "Figma's prototyping capabilities come into play as we create interactive prototypes that simulate user interactions and demonstrate the flow of the design. This allows us to test the usability and refine the design further.",
    },
    {
      no: "05",
      main: "Collaboration & Feedback",
      content:
        "At this stage, we share the designs with clients for feedback, ensuring that everyone involved is on the same page throughout the process.",
    },
    {
      no: "06",
      main: "User Testing",
      content:
        "Before finalizing the design, we conduct user testing to gather valuable feedback and insights. This helps us identify any usability issues and make necessary adjustments to enhance the user experience.",
    },
    {
      no: "07",
      main: "Development Handoff",
      content:
        "Figma's design-to-code features facilitate a smooth handoff to the development team. Developers can inspect design specifications, export assets, and access CSS code snippets, streamlining the development process.",
    },
    {
      no: "08",
      main: "Delivery & Support",
      content:
        "Once the design is complete, we deliver the assets and necessary files to the development team. We also provide ongoing support and assistance to ensure a seamless implementation of the design.",
    },
  ];

  const accordionItems = [
    {
      title: "01.  What is Figma?",
      content:
        "Figma is a vector graphics editor and prototyping tool – the first interface design tool with real-time collaboration",
    },
    {
      title: "02.  Figma is available on which OS?",
      content:
        "Figma is available for macOS, Windows, and Linux. Figma has been building up quite a following lately.",
    },
    {
      title: "03. For whom is Figma useful?",
      content:
        "Figma is a vector-based design tool that is gaining popularity in the design community, especially among those who design for web and mobile app interfaces.",
    },
    {
      title: "04. Which Company use Figma?",
      content:
        "Figma is used by designers at companies like Google, Facebook, Netflix, Airbnb, Uber, and more.",
    },
    {
      title: "05. What Kind of Company Is Figma?",
      content:
        "Figma is a collaborative online platform that offers vector editing, version control, and live collaboration for design teams. It was founded in 2012 by Dylan Field and Evan Wallace.",
    },
  ];

  return (
    <>
      <First
        title="Figma Design company"
        subtitle="As trailblazers in the digital landscape, Avrut Solutions is dedicated to crafting exceptional user experiences and stunning visual aesthetics that leave a remarkable footprint. We own a team of skilled designers and developers who smartly & efficiently utilizes Figma's collaborative power to create seamless, customer-centric designs that fit with client’s demand and enables them multiply their business forward.Join us on a journey of innovation and creativity, where Figma acts as our gateway to transforming your visions into reality."
        MainBanner={MainBanner.src}
      />

      <TechnologyServices
        title="Figma Design"
        titleSpan="Service We offer"
        content="Our company offers Figma services that empower collaborative and efficient design workflows, enabling teams to create, iterate, and prototype user-centric interfaces seamlessly. With our expertise, you'll harness Figma's real-time collaboration and design versioning, ensuring visually stunning and functional digital products."
        services={services}
        Image={Figmatech.src}
      />

      <WhyThisTechnology
        why="Why"
        title="Figma ?"
        content="Figma revolutionizes collaborative design. Contact us for seamless teamwork, prototyping, and UI/UX design. Elevate your creative process with Figma today."
        technologies={whyTechnoloy}
        ImageTech={ImageTech.src}
      />

      <Process process={process} />

      <Faq accordionItems={accordionItems} />
    </>
  );
}

export default Figma;
