import First from "@/component/First/First";
import React from "react";
import MainBanner from "../../assets/technology/about-us.jpg";

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
              Avrut Solutions is a family of tech pioneers with in-depth
              knowledge and experience in transforming business ideas into
              reality. We deliver the most feasible custom software solutions to
              enterprises worldwide. Our experts don’t just initiate your
              project, we put ourselves into your shoes and analyze every inch
              of your business landscape to build the most meaningful digital
              product. The agile teams of developers immerse themselves fully in
              your project and work in tandem with your strategic goals.
              <br />
              <br />
              Security, reliability, user-friendliness, and scalability define
              our custom solutions and services. Our consultants work with
              diverse businesses. Avrut Solutions offers world-class services,
              relying on an exceptionally talented pool of engineers. Our
              pursuit for excellence enables us to deliver rapid and fool-proof
              solutions every single time.
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
              src="https://braincuber.com/wp-content/uploads/2024/02/Mask-group-3.webp"
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
              Avrut Solutions is a top IT company that helps businesses identify
              and solve critical challenges with the best technology practices,
              such as cloud engineering, DevOps, and software architecture
              services. As one of the leading software development firms, we
              execute highly technical projects within scope, on time, and in a
              cost-effective way.
              <br />
              <br />
              Our IT experts work on various projects ranging from basic
              information systems and web applications to complex enterprise
              architectures, desktops, and web apps. A love for challenges runs
              in our bones. To this end, every tech expert here works zealously
              to design cost-optimized services and solutions that help
              businesses succeed
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
              src="https://braincuber.com/wp-content/uploads/2024/02/Mask-group-5.webp"
              alt=""
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

      {/* <div className="grid lg:grid-cols-3 gap-5 container mx-auto justify-items-center items-center py-5 px-3 md:px-10 ">
        <div className="w-full">
          <img
            className="mb-4 object-cover w-full"
            src="https://www.braincuber.com/_next/static/media/exploring1.46730b60.png"
            alt=""
          />
          <img
            className="object-cover w-full"
            src="https://www.braincuber.com/_next/static/media/exploring2.5d3b6314.png"
            alt=""
          />
        </div>
        <div>
          <img
            className="rounded-2xl h-full w-full object-cover"
            src="https://www.braincuber.com/_next/static/media/exploring3.69308383.png"
            alt=""
          />
        </div>
        <div className="w-full">
          <img
            className="mb-4 object-cover w-full"
            src="https://www.braincuber.com/_next/static/media/exploring4.c27eb024.png"
            alt=""
          />
          <img
            className="object-cover w-full"
            src="https://www.braincuber.com/_next/static/media/exploring5.2c3820f9.png"
            alt=""
          />
        </div>
      </div> */}
    </>
  );
}

export default index;
