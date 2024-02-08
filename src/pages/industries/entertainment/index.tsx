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
import MainBanner from "../../../assets/technology/entertainmentbanner.jpeg";
import AboutImage from "../../../assets/technology/entertainment.jpeg";
import Etech from "../../../assets/about/entertainment.jpg"


function Entertainment() {
  const services = [
    {
      numbers: "1",
      main: "Content Distribution Platforms",
      content:
        "Our developers are expert in creating digital platforms for streaming and distributing various forms of entertainment content, such as movies, TV shows, music, and digital publications. These platforms can support on-demand access and real-time streaming, ensuring content reaches a global audience.",
    },
    {
      numbers: "2",
      main: "Gaming Development",
      content:
        "Our developers Ninjas are known to design and develop interactive and immersive gaming experiences for various platforms, including PCs, consoles, mobile devices, and virtual reality (VR) headsets. We help create games that engage users and keep them coming back for more.",
    },
    {
      numbers: "3",
      main: "Augmented Reality (AR) & Virtual Reality (VR)",
      content:
        "We have a wide experience in AR and our team can help develop AR and VR applications that offer unique and innovative entertainment experiences. From interactive marketing campaigns to virtual tours and experiences, AR and VR technologies can add an extra layer of engagement.",
    },
    {
      numbers: "4",
      main: "Social Media And Content Sharing",
      content:
        "We are not behind in creating a buzz or helping creating a buzz on social media. Our team also lead in creating social media platforms or integrate social media features into entertainment apps to facilitate content sharing, user interactions, and community building. This enhances brand visibility and fosters user engagement.",
    },
    {
      numbers: "5",
      main: "Content Recommendation & Personalization",
      content:
        "Our team of experts uses appropriate algorithms and machine learning to analyze user behaviour and preferences, providing personalized content recommendations.",
    },
    {
      numbers: "6",
      main: "Analytics And Data Insights",
      content:
        "Our company can help in building data analytics tools to provide valuable insights into user behaviour, content performance, and market trends. These insights can guide decision-making and content optimization strategies.",
    },
    {
      numbers: "7",
      main: "Live Streaming",
      content:
        "Our team of professionals develop live streaming solutions for broadcasting events, shows, and performances in real-time. Live streaming capabilities help extend the reach of entertainment content to a broader spectrum of audience.",
    },
  ];

  const card = [
    {
      title: "Immersive Augmented Reality (AR) Experiences",
      content:
        "Deliver captivating entertainment through immersive AR experiences, allowing users to interact with content in innovative ways. From AR-enhanced live performances to interactive marketing campaigns, engage audiences in new and exciting dimensions of entertainment.",
      icon: <BsBoundingBox />,
    },
    {
      title: "Multi-Platform Streaming",
      content:
        "Provide users with seamless access to entertainment content across multiple platforms. Develop streaming services that offer a diverse range of movies, TV shows, live events, and original productions, ensuring flexibility and convenience for audiences to enjoy content anytime, anywhere.",
      icon: <FaDesktop />,
    },
    {
      title: "Interactive Gaming Experiences",
      content:
        "Create captivating gaming applications that offer engaging and interactive experiences. From casual games to multiplayer and augmented reality gaming, provide users with high-quality graphics, immersive gameplay, and social interaction features for a dynamic and entertaining gaming environment.",
      icon: <FaGamepad />,
    },
    {
      title: "Social Media Integration and Interaction",
      content:
        "Integrate social media features into entertainment platforms, allowing users to share, comment, and engage with content seamlessly. Enhance the sense of community by facilitating interactions between users and incorporating social media trends, fostering a dynamic and connected entertainment experience.",
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
        title="Reimagining Business Models To Address Media And Entertainment Industry Audience Demands."
        MainBanner={MainBanner.src}
      />

      <div className="bg-purple px-2 py-10">
        <AboutIndustries
          title="About Entertainment Industries"
          content="The entertainment industry is a vast and dynamic sector that encompasses a diverse range of activities and forms of content designed to captivate, amuse, and engage audiences. From traditional mediums such as television, film, and music to emerging platforms like streaming services, video games, and virtual reality, entertainment continually evolves to meet the changing preferences and behaviors of consumers. This multifaceted industry incorporates various genres, including comedy, drama, music, sports, and more, catering to a broad spectrum of tastes and interests."
          AboutImage={AboutImage.src}
        />

        <IndustriesFeatures
          title="The benefits of digital software to the entertainment industry include"
          card={card}
        />

        <TechnologyServices
          title="Entertainment"
          titleSpan="Industries"
          content="Entertainment experiences are increasingly immersive and interactive, with advancements in augmented reality (AR), virtual reality (VR), and artificial intelligence (AI) creating new possibilities for audience engagement. Social media platforms have become integral in shaping and amplifying entertainment trends, fostering fan communities, and enabling direct interactions between creators and their audiences."
          services={services}
          Image={Etech.src}
        />

        <Faq accordionItems={accordionItems} />
      </div>
    </>
  );
}

export default Entertainment;
