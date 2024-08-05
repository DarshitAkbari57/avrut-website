import First from "@/component/First/First";
import React from "react";
import MainBanner from "../../assets/technology/about-us.jpg";

function index() {
  const belive = [
    {
      id: "1",
      main: "Customer-Centric Approach",
      content:
        "At Avrut Solutions, our primary focus is on our customers rather than just the software. We collaborate closely with you to ensure your needs, requirements, and challenges are fully addressed. Our solutions are designed to tackle your pain points and remove obstacles to your growth. We believe in a partnership approach, deeply understanding your business to provide personalized solutions aligned with your strategic goals.",
    },
    {
      id: "2",
      main: "Continuous growth",
      content:
        "At Avrut Solutions, we believe that the pursuit of growth is essential for long-term business continuity. We set ambitious goals and continuously learn to stay abreast of the latest developments in technology. Employee learning and practice are prioritized, enabling our team to build top-class solutions for every client. Our commitment to growth ensures that we consistently deliver innovative and effective solutions, driving success for both our clients and our company.",
    },
    {
      id: "3",
      main: "Transparent Collaboration",
      content:
        "Effective communication and collaboration foster transparency and accuracy, crucial for our clients' success. At Avrut Solutions, we bring our technical expertise and high level of engagement to every project. Our development team collaborates seamlessly with partners across all continents and time zones, ensuring consistent team spirit. Whether it's internal collaboration or a client project, our experts approach every task as partners, providing optimal support to achieve the best results.",
    },
    {
      id: "4",
      main: "Collaborative Integrity",
      content:
        "At Avrut Solutions, we believe that transparency and accuracy are achieved through effective communication and collaboration. To ensure our clients' success, we apply our technical expertise and high level of engagement to every project. Our development team works seamlessly with partners across continents and time zones, promoting a strong team spirit. Whether collaborating internally or with clients, our experts adopt a partner mindset, delivering optimal support and fostering a fair and inclusive working environment.",
    },
  ];

  return (
    <>
      <First
        title="Making a Difference through Technology - One Solution at a Time"
        subtitle="At Avrut Solutions, we help our clients solve complex business
        problems and build themselves for the times ahead. Our tech teams
        develop a full range of scalable technology architecture solutions
        built upon a relationship of trust. The sole mission of our company
        is to help our customers, whether global brands, mid-sized or
        small-scale businesses, succeed."
        MainBanner={MainBanner.src}
      />

      <section className="container mx-auto py-4 lg:py-10 mt-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-5 md:gap-0 px-3 md:px-20">
          <div className="order-1 lg:order-2 flex flex-col w-full  justify-center items-start px-2 md:p-8">
            <h1 className="text-3xl md:text-5xl py-0 md:p-2 text-primary tracking-loose font-bold">
              Who We Are
            </h1>

            <p className="text-sm md:text-base text-black mb-4">
              At Avrut Solutions, we are a team of innovative tech professionals
              dedicated to bringing business ideas to life. We specialize in
              providing custom software solutions to enterprises around the
              world. Our experts take a deep dive into your project, thoroughly
              understanding your business needs to develop impactful digital
              products. Our agile development teams work hand-in-hand with your
              strategic objectives to ensure effective collaboration.
              <br />
              <br />
              Our solutions prioritize security, reliability, user-friendliness,
              and scalability. We serve a wide variety of businesses, delivering
              exceptional services with the support of our highly skilled
              engineers. Our relentless pursuit of excellence ensures that we
              consistently provide fast and reliable solutions.
            </p>
            <a
              href="#"
              className="bg-transparent hover:bg-primary text-primary hover:text-white rounded shadow hover:shadow-lg py-2 px-4 border border-primary hover:border-transparent duration-300"
            >
              Explore Now
            </a>
          </div>
          <div className="order-2 lg:order-1">
            <img
              src="https://images.pexels.com/photos/273209/pexels-photo-273209.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
              alt=""
              className=""
            />
          </div>
        </div>
      </section>

      <section className="container mx-auto py-4 lg:py-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-5 md:gap-0 px-3 md:px-20">
          <div className="order-1 lg:order-1 flex flex-col w-full  justify-center items-start px-2 md:p-8">
            <h1 className="text-3xl md:text-5xl py-0 md:pb-2 text-primary tracking-loose font-bold">
              What We Do
            </h1>
            <p className="text-sm md:text-base text-black mb-4">
              Avrut Solutions is a premier IT company dedicated to helping
              businesses tackle critical challenges using top-tier technology
              practices, including cloud engineering, DevOps, and software
              architecture services. As a leading software development firm, we
              deliver highly technical projects on time, within scope, and
              cost-effectively.
              <br />
              <br />
              Our IT specialists handle a wide range of projects, from basic
              information systems and web applications to complex enterprise
              architectures, desktops, and web apps. Driven by a passion for
              challenges, our tech experts work diligently to design
              cost-optimized services and solutions that drive business success.
            </p>
            <a
              href="#"
              className="bg-transparent hover:bg-primary text-primary hover:text-white rounded shadow hover:shadow-lg py-2 px-4 border border-primary hover:border-transparent duration-300"
            >
              Explore Now
            </a>
          </div>
          <div className="order-1 lg:order-2">
            <img
              alt=""
              src="https://images.pexels.com/photos/443383/pexels-photo-443383.jpeg?auto=compress&cs=tinysrgb&w=600"
            />
          </div>
        </div>
      </section>

      <div className="bg-purple">
        <div className=" container mx-auto md:p-10 md:pb-20">
          <h1 className="text-xl md:text-4xl text-primary text-center py-4 font-bold">
            What We Believe in
          </h1>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 border-primary px-3">
            {belive.map((e) => {
              return (
                <>
                  <div className="border border-primary shadow-lg p-4 rounded-xl ">
                    <h1 className="text-2xl font-medium flex items-center gap-3">
                      <div className=" bg-primary px-2 rounded-[50%] w-[30px] h-[30px] leading-[30px] text-white text-center text-base shadow-md shadow-primary">
                        {e?.id}
                      </div>
                      <div>{e?.main}</div>
                    </h1>
                    <p className="py-2 px-6">{e?.content}</p>
                  </div>
                </>
              );
            })}
          </div>
        </div>
      </div>
    </>
  );
}

export default index;
