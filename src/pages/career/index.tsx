import Faq from "@/component/FAQ";
import First from "@/component/First/First";
import React from "react";
import MainBanner from "../../assets/technology/careerbanner.png";
import TechnologyServices from "@/component/Technology/TechnologyServices/TechnologyServices";
import Careertech from "../../assets/about/career.webp";

function Career() {
  const Culture = [
    {
      main: "Agile",
      content:
        "Avrut Solutions encourages quick decisions, independent actions, and a simple approach. Being flexible is important to us. It helps us adapt to changes and achieve success.",
    },
    {
      main: "Unbiased",
      content:
        "Committed to an unbiased workplace culture, we value and respect every professional. It means giving ample support for self-development and growth.",
    },
    {
      main: "Progressive",
      content:
        "Our company accepts challenges with open arms. We give every team member many resources to grow exponentially with us.",
    },
    {
      main: "Honesty and integrity",
      content:
        "Avrut Solutions is open to the opinions and ideas of every employee, even if they are brutally honest. We stand as a team, with honesty and responsibility as our intrinsic characteristics.",
    },
    {
      main: "Workplace diversity",
      content:
        "As a successful company, we think inclusively and globally. Diversity is in our DNA, with a workspace consisting of distinct individuals with unique traits and personalities.",
    },
    {
      main: "Continuous learning",
      content:
        "Team members here are encouraged to enhance their skills through continuous learning and research. This is what makes our employees experts in their domains.",
    },
  ];

  const services = [
    {
      numbers: "1",
      main: "Growth-Focused",
      content:
        "We keep employee growth in mind, with each development step and project we take up.",
    },
    {
      numbers: "2",
      main: "Bonus & Compensations",
      content:
        "Timely appraisals, bonus and compensations are made based on performance.",
    },
    {
      numbers: "3",
      main: "Periodic Upskilling Sessions",
      content:
        "We believe in constant learning and provide training sessions regularly to employees for their growth and development.",
    },
    {
      numbers: "4",
      main: "Competitive & Supportive Environment",
      content:
        "The atmosphere at Avrut Solutions challenges and nurtures you at the same time with a supportive team.",
    },
    {
      numbers: "5",
      main: "Flexible Working Hours",
      content:
        "Flexible work timing increases productivity and does not include stress for the team members.",
    },
  ];

  const accordionItems = [
    {
      title: "01. What industries does Avrut Solutions cater to?",
      content:
        "Avrut Solutions has successfully delivered projects across diverse industries, including eCommerce, finance, manufacturing, wellness, travel, and more.",
    },
    {
      title:
        "02.  What technologies does Avrut Solutions specialize in for web development?",
      content:
        "Avrut Solutions excels in web development technologies such as React, Angular, and Node.js, ensuring dynamic and scalable solutions.",
    },
    {
      title:
        "03.  Which mobile development frameworks does Avrut Solutions use?",
      content:
        "Avrut Solutions specializes in React Native and Flutter for mobile app development, offering cross-platform solutions with optimal performance.",
    },
    {
      title:
        "04.   How does Avrut Solutions ensure the quality of its software solutions?",
      content:
        "Avrut Solutions employs a comprehensive approach to testing, including manual and automated testing, along with rigorous quality assurance practices to ensure reliability and performance.",
    },
    {
      title:
        "05.  Can Avrut Solutions provide custom-tailored software solutions?",
      content:
        "Yes, Avrut Solutions specializes in crafting bespoke software solutions that precisely align with the unique requirements and objectives of each project.",
    },
    {
      title: "06.  What design tools does Avrut Solutions use for UI/UX?",
      content:
        "Avrut Solutions utilizes industry-standard design tools such as Figma and Adobe XD to create visually appealing and user-centric interfaces.",
    },
    {
      title:
        "07.   How collaborative is the development process with Avrut Solutions?",
      content:
        "Avrut Solutions values open communication and collaboration. We work closely with clients, ensuring their input is considered throughout the development process for client satisfaction.",
    },
    {
      title:
        "08. What is the typical duration for completing a software development project with Avrut Solutions?",
      content:
        "Project durations vary based on complexity and requirements. Avrut Solutions provides timelines during the project planning phase and strives to meet agreed-upon deadlines.",
    },
    {
      title:
        "09.  Does Avrut Solutions offer ongoing support for deployed software?",
      content:
        "Yes, Avrut Solutions provides end-to-end services, including deployment assistance and ongoing support to ensure the smooth operation and evolution of software solutions.",
    },
    {
      title: "10. How can I get started with Avrut Solutions for my project?",
      content:
        "To get started, you can contact us through our website or reach out to our team via email or phone. We'll be happy to discuss your project requirements and provide guidance on the next steps.",
    },
  ];

  return (
    <>
      <First
        title="Growth At Avrut Solutions"
        subtitle="Are you a developer, game tester, or passionate about providing solutions? If yes, then Avrut Solutions is the right place for your career growth. We are welcoming talented professionals from across the globe to work with us."
        MainBanner={MainBanner.src}
      />

      <div className="bg-purple">
        <div
          data-aos="zoom-in-up"
          className="text-xl lg:text-6xl text-center font-bold whitespace-normal px-10 py-3 lg:py-10"
        >
          We Are <span className="text-primary mx-1">Software Development</span>{" "}
          Company
        </div>
        <div className="grid grid-cols-1 lg:grid-cols-2  gap-5 px-4 md:px-10 items-center overflow-x-hidden">
          <div data-aos="fade-right" className="px-4 md:px-20">
            <ul className="list-disc  ">
              {Culture.map((e) => {
                return (
                  <>
                    <li className="mt-3">
                      <h1 className="text-lg font-medium">{e?.main}</h1>
                      <p>{e?.content}</p>
                    </li>
                  </>
                );
              })}
            </ul>
          </div>
          <div data-aos="fade-left" className="py-6 md:py-0 w-full">
            <img className="w-full" src="/images/culture.png" alt="" />
          </div>
        </div>

        <TechnologyServices
          title="Benefits and Perks"
          titleSpan="of Working with Avrut Solutions"
          content="From API development to robust backend systems, we harness the power of React.js to drive innovation and efficiency in your digital projects. With proficiency in backend development and API integration, we enable businesses to create robust and high-performance solutions using the versatility of React.js."
          services={services}
          Image={Careertech.src}
        />
      </div>
      <Faq accordionItems={accordionItems} />
    </>
  );
}

export default Career;
