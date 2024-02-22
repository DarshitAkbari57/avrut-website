import About from "@/component/About/About";
import Cards from "@/component/Cards/Cards";
import Choose from "@/component/Choose";
import Faq from "@/component/FAQ";
import Footer from "@/component/Footer/Footer";
import Getintouch from "@/component/Getintouch";
import Nav from "@/component/Nav/Nav";
import Slider from "@/component/Sliders/Slider";
import Software from "@/component/Software/Software";
import Technology from "@/component/Technology/Technology";
import React, { useState } from "react";

function Home() {


  return (
    <>
      <Slider />
      <Cards />
      <About />
      <Software />
      <Technology />
      <Choose />
      {/* <Faq accordionItems={accordionItems} /> */}

      {/* <Getintouch /> */}
    </>
  );
}

export default Home;
