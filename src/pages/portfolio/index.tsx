import First from "@/component/First/First";
import Portfolio from "@/component/Portfolio/Portfolio";
import React from "react";
import MainBanner from "../../assets/technology/contact.jpg";

function Ourwork() {
  return (
    <>
      <First
        title="Our Wall Of Pride And Creativity"
        subtitle="When we say that Avrut Solutions is a leading custom software development solution provider in the India, there’s a reason behind it - Our work. Check out our portfolio where you will come across some of the mind-blowing projects we have been a part of."
        MainBanner={MainBanner.src}
      />
      {/* <Work /> */}
      <Portfolio />
    </>
  );
}

export default Ourwork;
