import React from "react";
import First from "@/component/First/First";
import Faq from "@/component/FAQ";
import TechnologyServices from "@/component/Technology/TechnologyServices/TechnologyServices";
import WhyThisTechnology from "@/component/Technology/WhyThisTechnology/WhyThisTechnology";
import ImageTech from "../../../assets/technology/staff2.jpg";
import MainBanner from "../../../assets/technology/staffbanner.jpg";
import staff from "../../../assets/about/staff.webp";

function StaffAugmentation() {
  const services = [
    {
      numbers: "1",
      main: "Flexibility and Scalability",
      content:
        "Staff augmentation offers flexibility, enabling companies to scale their teams up or down based on project requirements. This agility is particularly beneficial for short-term or dynamic projects.",
    },
    {
      numbers: "2",
      main: "Access to Specialized Skills",
      content:
        "Organizations can tap into a pool of specialized skills by bringing in external professionals. This is advantageous for projects requiring specific expertise that might not be available in-house.",
    },
    {
      numbers: "3",
      main: "Cost-Effective Solution",
      content:
        "Staff augmentation can be a cost-effective solution compared to hiring full-time employees. Companies can avoid expenses related to benefits, training, and overhead while gaining access to skilled professionals as needed.",
    },
    {
      numbers: "4",
      main: "Faster Time-to-Market",
      content:
        "By quickly augmenting their workforce with external talent, organizations can accelerate project timelines. This is especially valuable in industries with fast-paced development cycles.",
    },
    {
      numbers: "5",
      main: "Risk Mitigation",
      content:
        "Staff augmentation mitigates the risks associated with long-term hiring commitments. Companies can adjust their workforce based on project demands without the challenges of layoffs during slow periods.",
    },
  ];

  const accordionItems = [
    {
      title: "01. How does staff augmentation differ from traditional hiring?",
      content:
        "Staff augmentation involves hiring external professionals on a temporary basis to supplement in-house teams, offering flexibility and scalability without the long-term commitments associated with traditional hiring.",
    },
    {
      title: "02. What types of projects benefit most from staff augmentation?",
      content:
        "Staff augmentation is beneficial for projects with fluctuating workloads, tight timelines, or those requiring specialized skills not readily available in-house. It provides an agile solution for dynamic project requirements.",
    },
    {
      title:
        "03. How do external professionals integrate with in-house teams during staff augmentation?",
      content:
        "External professionals seamlessly integrate with in-house teams, collaborating closely on project tasks. This collaborative approach fosters knowledge exchange, promotes diverse perspectives, and enhances overall project outcomes.",
    },
  ];
  const whyTechnoloy = [
    {
      numbers: "1",
      main: "Agile Scalability",
      content:
        "Enables businesses to swiftly scale their workforce based on project requirements, ensuring agility in response to changing demands without the need for long-term commitments.",
    },
    {
      numbers: "2",
      main: "Access to Specialized Skills",
      content:
        "Provides access to a diverse talent pool, allowing organizations to tap into specialized skills and expertise that may not be available in-house, enhancing project capabilities.",
    },
    {
      numbers: "3",
      main: "Cost-Effective Solution",
      content:
        "Offers a cost-effective alternative to traditional hiring by avoiding long-term expenses related to benefits, training, and overhead, allowing companies to optimize their budget.",
    },
    {
      numbers: "4",
      main: "Flexibility for Project Dynamics",
      content:
        "Caters to the dynamic nature of projects, allowing companies to adapt quickly to workload fluctuations, accelerate project timelines, and maintain competitiveness in fast-paced industries.",
    },
    {
      numbers: "5",
      main: "Risk Mitigation and Strategic Focus",
      content:
        "Mitigates risks associated with long-term hiring commitments, enabling organizations to maintain a strategic focus on core competencies while external professionals handle project-specific tasks.",
    },
  ];

  return (
    <>
      <First
        title="Staff Augmentation"
        subtitle="Staff augmentation is a business strategy where an organization hires external professionals, often through a third-party service provider."
        MainBanner={MainBanner.src}
      />
      <TechnologyServices
        title="Staff Augmentation"
        titleSpan=""
        content="This approach allows companies to scale their teams quickly, access specialized skills, and meet project demands without the long-term commitment of hiring full-time employees."
        services={services}
        Image={staff.src}
      />
      <WhyThisTechnology
        why="Why"
        title="Staff Augmentation ?"
        content="Staff augmentation is a dynamic workforce strategy where organizations enlist external professionals on a temporary basis to bolster their in-house teams."
        technologies={whyTechnoloy}
        ImageTech={ImageTech.src}
      />
      <Faq accordionItems={accordionItems} />
    </>
  );
}

export default StaffAugmentation;
