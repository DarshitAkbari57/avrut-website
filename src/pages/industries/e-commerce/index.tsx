import Faq from "@/component/FAQ";
import React from "react";
import First from "@/component/First/First";
import AboutIndustries from "@/component/Industries/AboutIndustries/AboutIndustries";
import IndustriesFeatures from "@/component/Industries/IndustriesFeatures/IndustriesFeatures";
import TechnologyServices from "@/component/Technology/TechnologyServices/TechnologyServices";
import {
  FaCreditCard,
  FaShoppingCart,
  FaTag,
  FaTruckLoading,
} from "react-icons/fa";
import MainBanner from "../../../assets/technology/ecombanner.jpg";
import AboutImage from "../../../assets/technology/ecom.jpg";
import Ecom from "../../../assets/about/ecom.jpg";

function ECommerce() {
  const services = [
    {
      numbers: "1",
      main: "E-Commerce Platforms",
      content:
        "We specialize in developing robust e-commerce platforms that empower businesses to create and manage online stores. Our solutions facilitate smooth product listings, secure payment processing, and efficient order management.",
    },
    {
      numbers: "2",
      main: "Shopping Cart Solutions",
      content:
        "We design and integrate shopping cart and checkout systems that enhance the online buying experience, convert viewers into buyers, reduce cart abandonment, and increase conversion rates.",
    },
    {
      numbers: "3",
      main: "Inventory Management Software",
      content:
        "We develop comprehensive inventory management solutions that help businesses track and manage their product inventory efficiently, ensuring optimal stock levels and preventing stockouts.",
    },
    {
      numbers: "4",
      main: "Payment Gateways",
      content:
        "Our team expertly integrates secure payment gateways into e-commerce platforms, enabling businesses to accept a variety of payment methods securely and build customer trust.",
    },
    {
      numbers: "5",
      main: "Analytics and Reporting Tools",
      content:
        "We provide data analytics and reporting tools that deliver valuable insights into customer behavior, sales performance, and marketing effectiveness, aiding businesses in making informed decisions.",
    },
    {
      numbers: "6",
      main: "Mobile Commerce Apps",
      content:
        "We develop mobile commerce applications that offer customers a convenient and seamless shopping experience on the go.",
    },
    {
      numbers: "7",
      main: "Fraud Prevention",
      content:
        "To ensure secure transactions, we implement advanced fraud detection and prevention mechanisms, protecting e-commerce businesses and their customers from fraudulent activities.",
    },
  ];

  const card = [
    {
      title: "Effortless Shopping Experience",
      content:
        "Offer customers an effortless shopping experience with a user-friendly interface, intuitive navigation, and a seamless checkout process, enhancing satisfaction and encouraging repeat business.",
      icon: <FaShoppingCart />,
    },
    {
      title: "Secure Online Transactions",
      content:
        "Ensure secure online transactions with robust payment gateways and encryption protocols, instilling confidence in customers to make purchases and protecting sensitive financial information.",
      icon: <FaCreditCard />,
    },
    {
      title: "Reliable Order Fulfillment",
      content:
        "Provide reliable order fulfillment with efficient shipping and tracking systems. Keep customers informed about their order status and delivery timelines, fostering trust and loyalty.",
      icon: <FaTruckLoading />,
    },
    {
      title: "Promotions and Discounts",
      content:
        "Implement dynamic promotions and discount strategies to attract and retain customers. Utilize promotional tags and discounts during checkout to enhance the value proposition for shoppers.",
      icon: <FaTag />,
    },
  ];
  const accordionItems = [
    {
      title: "01. What is the difference between B2C and B2B e-commerce?",
      content:
        "B2C (business-to-consumer) e-commerce involves transactions between businesses and individual consumers, while B2B (business-to-business) e-commerce involves transactions between businesses. The former is focused on direct retail, while the latter often involves bulk purchases and complex supply chain relationships.",
    },
    {
      title: "02. How does secure online payment work in e-commerce?",
      content:
        "Secure online payments in e-commerce involve encryption and authentication mechanisms. Payment gateways securely transmit sensitive financial information between the customer, the merchant, and the financial institution, ensuring the confidentiality and integrity of the transaction.",
    },
    {
      title: "03. What trends are shaping the future of e-commerce?",
      content:
        "Emerging trends in e-commerce include the rise of mobile shopping, the integration of artificial intelligence for personalized experiences, the growth of social commerce, and the increasing emphasis on sustainability and eco-friendly practices within the industry.",
    },
  ];

  return (
    <>
      <First
        title="Crafting Innovative Customer Experiences for Your Digital Commerce Store"
        MainBanner={MainBanner.src}
      />

      <div className="bg-purple px-2 py-10">
        <AboutIndustries
          title="About E-Commerce Industries"
          content="E-commerce, short for electronic commerce, refers to the buying and selling of goods and services over the internet. This dynamic industry encompasses online retail platforms, digital marketplaces, and various electronic transactions, providing consumers and businesses with a convenient and efficient way to engage in commercial activities globally. E-commerce involves diverse models such as B2C (business-to-consumer) and B2B (business-to-business), driven by secure online transactions, digital marketing strategies, and seamless user experiences. Rapid advancements in technology continue to shape the e-commerce landscape, influencing consumer behaviors, supply chain dynamics, and the overall evolution of modern commerce."
          AboutImage={AboutImage.src}
        />

        <IndustriesFeatures
          title="The benefits of digital software to the e-commerce industry include"
          card={card}
        />
        <TechnologyServices
          title="ECommerce industry"
          titleSpan=""
          content="E-commerce involves diverse models such as B2C (business-to-consumer) and B2B (business-to-business), driven by secure online transactions, digital marketing strategies, and seamless user experiences. Rapid advancements in technology continue to shape the e-commerce landscape, influencing consumer behaviors, supply chain dynamics, and the overall evolution of modern commerce."
          services={services}
          Image={Ecom.src}
        />

        <Faq accordionItems={accordionItems} />
      </div>
    </>
  );
}

export default ECommerce;
