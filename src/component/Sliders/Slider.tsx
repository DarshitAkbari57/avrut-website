import React from "react";
import First from "../First/First";
import MainBanner from "../../../public/images/slider1.webp";

function Slider() {
  return (
    <>
      <First
        title="We Are Software Development Company"
        subtitle="Transform your business with adaptable and robust digital solutions
        that satisfy the needs of modern customers."
        MainBanner={MainBanner.src}
      />
    </>
  );
}

export default Slider;
