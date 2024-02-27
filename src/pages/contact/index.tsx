import First from "@/component/First/First";
import React from "react";
import MainBanner from "../../assets/technology/contact.png";

function index() {
  return (
    <>
      <First
        title="Let’s Start Working Together Get In Touch With Us!"
        subtitle="We are here to help you with any queries and questions you may have. Get familiar with us and kick-start with our services."
        MainBanner={MainBanner.src}
      />
    </>
  );
}

export default index;
