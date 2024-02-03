import First from "@/component/First/First";
import React from "react";

function index() {
  const belive = [
    {
      id: "1",
      main: "Emphasis on the voice of the customer",
      content:
        "Instead of a software-based approach, Avrut Solutions considers its customers as its main focus. For us, your needs, requirements, and problems are central. We work for our customers, and with our customers so they always feel fulfilled and satisfied. All our solutions focus on solving your pain points to help you get past various bottlenecks hindering your growth.",
    },
    {
      id: "2",
      main: "Continuous growth",
      content:
        "All compelling benefits are obtained by the pursuit of growth. It is critical for the long-term continuity of a business. We aim high and are always learning to understand every new development in the world of technology. Here, employee learning and practice are given utmost priority so they can build top-class solutions for every client.",
    },
    {
      id: "3",
      main: "Clear communication",
      content:
        "ffective communication and collaboration lead to transparency and accuracy. To ensure our clients' success, we bring our technical expertise and high level of engagement to every project. Our development team collaborates with our partners regardless of their continent or time zone. Be it an internal collaboration or a client project, we foster team spirit. All of our experts put on a partner hat and provides optimal support... Read More",
    },
    {
      id: "4",
      main: "Fair play",
      content:
        "Effective communication and collaboration lead to transparency and accuracy. To ensure our clients' success, we bring our technical expertise and high level of engagement to every project. Our development team collaborates with our partners regardless of their continent or time zone. Be it an internal collaboration or a client project, we foster team spirit. All of our experts put on a partner hat and provides optimal support... Read More",
    },
  ];

  return (
    <>
      <First
        title="Let’s Start Working Together Get In Touch With Us!"
        subtitle="Get in touch to discuss your employee wellbeing needs today. Please give us a call, drop us an email."
      />
    </>
  );
}

export default index;
