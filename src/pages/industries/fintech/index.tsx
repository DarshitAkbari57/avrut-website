import Faq from "@/component/FAQ";
import React from "react";
import First from "@/component/First/First";
import AboutIndustries from "@/component/Industries/AboutIndustries/AboutIndustries";
import IndustriesFeatures from "@/component/Industries/IndustriesFeatures/IndustriesFeatures";
import TechnologyServices from "@/component/Technology/TechnologyServices/TechnologyServices";
import { BsBoundingBox } from "react-icons/bs";
import { FaDesktop, FaGamepad, FaMoneyCheckDollar, FaTwitter } from "react-icons/fa6";
import MainBanner from "../../../assets/technology/finbanner.jpg";
import AboutImage from "../../../assets/technology/fintech.svg";
import Etech from "../../../assets/about/fintech.jpg"
import { FaMobileAlt } from "react-icons/fa";
import { MdPayment } from "react-icons/md";


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
      title: " Mobile Wallet Solutions",
      content: "We develop e-Wallets that revolutionize the finance industry by providing unique experiences and a wide range of mobile payment solutions",
      icon: <FaMobileAlt />,
    },
    {
      title: "Banking Software Solutions",
      content: "With expertise in banking, our company helps to build scalable and compliant web, mobile, and back-end solutions for challenger banks and neobanks.",
      icon: < FaDesktop />,
    },
    {
      title: "Payment Solutions",
      content: "We deliver business finance solutions and implement complex workflows for payments.",
      icon: <MdPayment />,
    },
    {
      title: "Wealth Management ",
      content: "With an advanced software infrastructure in place, we build custom products in an efficient way significantly reducing go-to-market time for wealth management and private banking products. ",
      icon: <FaMoneyCheckDollar />,
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
