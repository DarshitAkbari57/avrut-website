import Faq from "@/component/FAQ";
import React from "react";
import { MdHealthAndSafety } from "react-icons/md";
import { ImPower } from "react-icons/im";
import { CiCloudOn } from "react-icons/ci";
import { TbUsersGroup } from "react-icons/tb";
import First from "@/component/First/First";
import AboutIndustries from "@/component/Industries/AboutIndustries/AboutIndustries";
import IndustriesFeatures from "@/component/Industries/IndustriesFeatures/IndustriesFeatures";
import TechnologyServices from "@/component/Technology/TechnologyServices/TechnologyServices";
import { BsBoundingBox } from "react-icons/bs";
import { FaDesktop, FaGamepad, FaTwitter } from "react-icons/fa6";
import MainBanner from "../../../assets/technology/finbanner.jpg";
import AboutImage from "../../../assets/technology/fintech.svg";
import Etech from "../../../assets/about/fintech.jpg"


function Fintech() {
  const services = [
    {
      numbers: "1",
      main: "Higher Technology Resilience",
      content:
        "A well-architected cloud creates a highly resilient environment where development, configuration, and change management can be done in a more controlled way.",
    },
    {
      numbers: "2",
      main: "Enhanced IT Security",
      content:
        "We provide a comprehensive strategy to monitor and manage your security posture, by incorporating security best practices with advanced AWS tools.",
    },
    {
      numbers: "3",
      main: "Increased Agility",
      content:
        "A shorter development cycle and customized cloud solutions from Ibexlabs means faster response to your customer’s needs‍",
    },
    {
      numbers: "4",
      main: "Regulatory requirements analysis and data confidentiality",
      content:
        "Safeguard your data, applications, and infrastructure, and make your cloud environment audit ready with a comprehensive range of managed security services.",
    },

  ];

  const card = [
    {
      title: "Audit Ready Cloud Environment",
      content: "Regulations such as PCI DSS, and SOC 2 have many stringent requirements which can become complicated for small and mid-sized businesses. We work with external auditors to make your cloud environment audit ready from day one.",
      icon: <BsBoundingBox />,
    },
    {
      title: "Cybersecurity",
      content:
        "Security must be baked into the DevOps process and—importantly—must be a shared responsibility. We take responsibility for securing your cloud environment and review your status and plans on a regular basis.",
      icon: <FaDesktop />,
    },
    {
      title: "AWS Well-Architected Framework Review",
      content:
        "Achieve compliance and establish trust with a Well-Architected Framework Review. Identify how and where you can make efficiency upgrades and transform your current infrastructure to a well-architected one with a detailed roadmap.",
      icon: <FaGamepad />,
    },
    {
      title: "Grow with AWS Control Tower",
      content:
        "Ensure manageable growth in a multi-account environment with AWS Control Tower. Configure and govern a new AWS environment, automate policy management, and incorporate multiple levels of security such as IAM and resource provisioning with Avrut, an AWS Control Tower Partner",
      icon: <FaTwitter />,
    },
  ];

  const accordionItems = [
    {
      title:
        "01. How has technology influenced the evolution of entertainment experiences?",
      content:
        "Technology has profoundly influenced entertainment, driving innovations like streaming services, virtual reality, and interactive experiences. These advancements have transformed how content is created, distributed, and consumed, offering audiences diverse and immersive entertainment options.",
    },
    {
      title:
        "02. What role does data analytics play in shaping content recommendations and personalized experiences in the entertainment industry?",
      content:
        "Data analytics plays a crucial role in the entertainment industry by analyzing user preferences and behaviors. This data-driven approach enhances content recommendations, tailoring experiences to individual tastes, and contributing to a more personalized and engaging entertainment landscape.",
    },
    {
      title:
        "03. How do entertainment platforms ensure content security and protect against piracy?",
      content:
        "Entertainment platforms employ robust security measures, including digital rights management (DRM) and encryption, to safeguard content against piracy. Additionally, legal frameworks and collaborations with industry stakeholders are pursued to mitigate copyright infringement and protect intellectual property.",
    },
  ];
  return (
    <>
      <First
        title="Financial Sector"
        MainBanner={MainBanner.src}
      />

      <div className="bg-purple px-2 py-10">
        <AboutIndustries
          title="About Fintech Industries"
          content="The goal of the BFSI (Banking, Financial Services, and Insurance) and Fintech industries is to revolutionize their processes by placing customers at the heart of their present and future strategies. Startups and early growth BFSI and Fintech companies are eager to shake up the industry. However, with entrepreneurial talent and enthusiasm comes operational hurdles."
          AboutImage={AboutImage.src}
        />

        <IndustriesFeatures
          title="A shorter development cycle and customized cloud solutions from Avrut means faster response to your customer’s needs."
          card={card}
        />

        <TechnologyServices
          title="Fintech"
          titleSpan="Industries"
          content="We understand that scalability, security, technology resilience are some essential attributes for migrating to the cloud. We combine this understanding with technical savvy to create a precise, strategic blueprint for each client. This includes choices related to methodology, applications, and timing; what falls under the cloud transformation umbrella, and what does not."
          services={services}
          Image={Etech.src}
        />

        <Faq accordionItems={accordionItems} />
      </div>
    </>
  );
}

export default Fintech;
