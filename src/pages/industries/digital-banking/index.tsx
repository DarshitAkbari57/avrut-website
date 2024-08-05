import Faq from "@/component/FAQ";
import React from "react";
import First from "@/component/First/First";
import AboutIndustries from "@/component/Industries/AboutIndustries/AboutIndustries";
import IndustriesFeatures from "@/component/Industries/IndustriesFeatures/IndustriesFeatures";
import TechnologyServices from "@/component/Technology/TechnologyServices/TechnologyServices";
import { FaChartLine, FaCreditCard, FaLock, FaMobileAlt } from "react-icons/fa";
import MainBanner from "../../../assets/technology/bankbanner.jpeg";
import AboutImage from "../../../assets/technology/digital2.jpg";
import banking from "../../../assets/about/digitalbanking.jpg";

function DigitalBanking() {
  const services = [
    {
      numbers: "1",
      main: "Mobile Banking Applications",
      content:
        "Develop user-friendly mobile banking applications that empower customers to manage their accounts, transfer funds, pay bills, and access financial information securely from their smartphones, ensuring a seamless and convenient banking experience.",
    },
    {
      numbers: "2",
      main: "Contactless Payments and Digital Wallets",
      content:
        "Implement contactless payment solutions and digital wallets, allowing users to make secure transactions using their mobile devices or wearables. This enhances payment convenience, reduces the reliance on physical cards, and contributes to a more efficient and modernized payment ecosystem.",
    },
    {
      numbers: "3",
      main: "Personal Financial Management (PFM) Tools",
      content:
        "Create Personal Financial Management tools that offer users insights into their spending patterns, budgeting capabilities, and financial goal tracking. These tools empower customers to make informed financial decisions and achieve their financial objectives.",
    },
    {
      numbers: "4",
      main: "AI-Powered Chatbots for Customer Support",
      content:
        "Integrate AI-powered chatbots into digital banking platforms to provide instant and personalized customer support. These chatbots can assist users with inquiries, transaction details, and general banking information, enhancing customer service efficiency.",
    },
    {
      numbers: "5",
      main: "Biometric Authentication and Security Features",
      content:
        "Implement advanced biometric authentication methods, such as fingerprint or facial recognition, to enhance the security of digital banking applications. Additionally, incorporate robust security features, including encryption and secure login protocols, to safeguard user data and transactions.",
    },
  ];

  const card = [
    {
      title: "Mobile Banking Applications",
      content:
        "Develop user-friendly mobile banking applications that empower customers to manage their accounts, transfer funds, pay bills, and access financial information securely from their smartphones, ensuring a seamless and convenient banking experience.",
      icon: <FaMobileAlt />,
    },
    {
      title: "Contactless Payments and Digital Wallets",
      content:
        "Implement contactless payment solutions and digital wallets, allowing users to make secure transactions using their mobile devices or wearables. This enhances payment convenience, reduces the reliance on physical cards, and contributes to a more efficient and modernized payment ecosystem.",
      icon: <FaCreditCard />,
    },
    {
      title: "Personal Financial Management (PFM) Tools",
      content:
        "Create Personal Financial Management tools that offer users insights into their spending patterns, budgeting capabilities, and financial goal tracking. These tools empower customers to make informed financial decisions and achieve their financial objectives.",
      icon: <FaChartLine />,
    },
    {
      title: "AI-Powered Chatbots for Customer Support",
      content:
        "Integrate AI-powered chatbots into digital banking platforms to provide instant and personalized customer support. These chatbots can assist users with inquiries, transaction details, and general banking information, enhancing customer service efficiency.",
      icon: <FaLock />,
    },
  ];
  const accordionItems = [
    {
      title:
        "01. What is digital banking, and how does it differ from traditional banking?",
      content:
        "Digital banking refers to the use of digital channels and technology to provide banking services, offering convenient, online access to account management, transactions, and financial services. It differs from traditional banking by leveraging digital platforms, often eliminating the need for physical branches and enabling 24/7 accessibility.",
    },
    {
      title:
        "02. How secure are digital banking transactions, and what measures are in place to protect user data?",
      content:
        "Digital banking transactions are secured through advanced encryption protocols and multi-factor authentication, ensuring the confidentiality and integrity of user data. Financial institutions implement robust cybersecurity measures, such as firewalls and regular security audits, to protect against cyber threats and unauthorized access.",
    },
    {
      title:
        "03. What services and functionalities are typically offered through digital banking platforms?",
      content:
        "Digital banking platforms offer a range of services, including online account management, fund transfers, bill payments, mobile check deposits, and personalized financial insights. Additionally, users can access digital wallets, receive real-time transaction alerts, and engage in contactless payments, contributing to a seamless and efficient banking experience.",
    },
  ];

  return (
    <>
      <First
        title="Empowering Financial Institutions Worldwide with Cutting-Edge Digital Banking Platforms and Integrated Solutions"
        MainBanner={MainBanner.src}
      />

      <div className="bg-purple px-2 py-10">
        <AboutIndustries
          title="About Digital Banking"
          content="Digital banking represents a transformative shift in the financial landscape, redefining how individuals and businesses manage their finances. At its core, digital banking leverages cutting-edge technologies to deliver a comprehensive suite of financial services through online platforms and mobile applications, eliminating the constraints of traditional brick-and-mortar banking. This evolution is driven by the seamless integration of digital channels, empowering users with unprecedented access to banking functionalities anytime, anywhere."
          AboutImage={AboutImage.src}
        />

        <IndustriesFeatures
          title="The benefits of digital software to the digital banking include"
          card={card}
        />

        <TechnologyServices
          title="Digital Banking"
          titleSpan="Services"
          content="Digital banking platforms offer a diverse array of services, ranging from routine account management to sophisticated financial planning tools. Users can access real-time transaction information, set up automated savings plans, and receive personalized insights into their spending patterns. Mobile check deposits, contactless payments, and digital wallets further enhance the flexibility and efficiency of financial transactions."
          services={services}
          Image={banking.src}
        />

        <Faq accordionItems={accordionItems} />
      </div>
    </>
  );
}

export default DigitalBanking;
