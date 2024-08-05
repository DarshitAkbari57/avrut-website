import React from "react";
import About from "@/component/About/About";
import Cards from "@/component/Cards/Cards";
import Choose from "@/component/Choose";
import Slider from "@/component/Sliders/Slider";
import Software from "@/component/Software/Software";
import Technology from "@/component/Technology/Technology";

function Home() {
  return (
    <>
      <Slider />
      <Cards />
      <About />
      <Software />
      <Technology />
      <Choose />
    </>
  );
}

export default Home;
