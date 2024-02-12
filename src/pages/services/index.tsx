import { useRouter } from "next/router";
import React, { useEffect } from "react";
import First from "@/component/First/First";
import MainBanner from "../../assets/technology/services.jpg";
import gsap from "gsap";

function Industries() {
  const router = useRouter();
  useEffect(() => {
    // Animation for the left side
    gsap.from('.left-animation', {
      x: '-100%',
      opacity: 0,
      duration: 1,
      scrollTrigger: {
        trigger: '.left-animation',
        start: 'top 80%', // Adjust the start position as needed
        end: '+=300', // Adjust the end position as needed
        scrub: 1, // Smooth scrubbing effect
      },
    });

    // Animation for the right side
    gsap.from('.right-animation', {
      x: '100%',
      opacity: 0,
      duration: 1,
      scrollTrigger: {
        trigger: '.right-animation',
        start: 'top 80%', // Adjust the start position as needed
        end: '+=300', // Adjust the end position as needed
        scrub: 1, // Smooth scrubbing effect
      },
    });
  }, []);
  return (
    <>
      <First
        title="Technologies We Deploy"
        subtitle="Our cutting-edge technologies help in delivering our customers with software solutions that are seamless, efficient, and streamlines with their vision."
        MainBanner={MainBanner.src}
      />

      <div className="container mx-auto  my-5">
        {/*Digital  Product  Design */}

        <div className="lg:mx-auto lg:grid  lg:grid-flow-col-dense lg:grid-cols-2 lg:gap-24 lg:px-8 px-3 items-center lg:py-8">
          <div className="mt-12 sm:mt-16 lg:mt-0   lg:order-1  lg:left-animation right-animation ">
            <img
              loading="lazy"
              width="647"
              height="486"
              className="w-full rounded-xl shadow-2xl  "
              src="/images/industries/1.png"
            />
          </div>
          <div className="mx-auto max-w-xl  lg:mx-0 lg:max-w-none lg:right-animation left-animation  lg:py-8 xl:py-10 lg:px-3 order-">
            <div>
              <div className="mt-6">
                <h2 className="text-3xl md:text-5x1 font-bold tracking-tight text-black">
                  Digital Product Design
                </h2>
                <p className="mt-4 text-lg text-[#1e1e1e]">
                  Digital product design is an iterative design process used to solve a functional problem with a formal solution.[1] A digital product designer identifies an existing problem, offers the best possible solution, and launches it to a market that demonstrates demand for the particular solution.[2] The field is considered a subset of product design. Some digital products have both digital and physical components (such as Nike+ and Fitbit), but the term is mainly used for products produced through software engineering. Since digital product design have become mainstream in the creative industry, a digital product designer oftentimes is simply referred to as a "product designer" in job posts.
                </p>
                <div className="mt-6">
                  <button
                    onClick={() => router.push("/services/digital-product-design")}
                    className="inline-flex rounded-lg bg-primary px-4 py-1.5 text-base font-semibold leading-7 text-white shadow-sm "
                  >
                    Learn More
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* software architechture */}

        <div className="lg:mx-auto lg:grid  lg:grid-flow-col-dense lg:grid-cols-2 lg:gap-24 lg:px-8 px-3 items-center lg:py-8">
          <div className="mt-12 sm:mt-16 lg:mt-0   lg:order-1">
            <img
              loading="lazy"
              width="647"
              height="486"
              className="w-full rounded-xl shadow-2xl "
              src="/images/industries/2.avif"
            />
          </div>
          <div className="mx-auto max-w-xl  lg:mx-0 lg:max-w-none lg:py-8 xl:py-10 lg:px-3 lg:order-2">
            <div>
              <div className="mt-6">
                <h2 className="text-3xl md:text-5x1 font-bold tracking-tight text-black">
                  Software Architecture
                </h2>
                <p className="mt-4 text-lg text-[#1e1e1e]">
                  Software architecture is the set of structures needed to reason about a software system and the discipline of creating such structures and systems. Each structure comprises software elements, relations among them, and properties of both elements and relations.
                  The architecture of a software system is a metaphor, analogous to the architecture of a building.
                </p>
                <div className="mt-6">
                  <button
                    onClick={() => router.push("/services/software-architecture")}
                    className="inline-flex rounded-lg bg-primary px-4 py-1.5 text-base font-semibold leading-7 text-white shadow-sm "
                  >
                    Learn More
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/*Engineering & DevOps */}

        <div className="lg:mx-auto lg:grid  lg:grid-flow-col-dense lg:grid-cols-2 lg:gap-24 lg:px-8 px-3 items-center lg:py-8">
          <div className="mt-12 sm:mt-16 lg:mt-0  order-1">
            <img
              loading="lazy"
              width="647"
              height="486"
              className="w-full rounded-xl shadow-2xl "
              src="/images/industries/3.jpg"
            />
          </div>
          <div className="mx-auto max-w-xl  lg:mx-0 lg:max-w-none lg:py-8 xl:py-10  lg:px-3 order-">
            <div>
              <div className="mt-6">
                <h2 className="text-3xl md:text-5x1 font-bold tracking-tight text-black">
                  Engineering & DevOps
                </h2>
                <p className="mt-4 text-lg text-[#1e1e1e]">
                  A DevOps engineer is an IT generalist who should have a wide-ranging knowledge of both development and operations, including coding, infrastructure management, system administration, and DevOps toolchains. DevOps engineers should also possess interpersonal skills since they work across company silos to create a more collaborative environment.
                </p>
                <div className="mt-6">
                  <button
                    onClick={() => router.push("services/engineering")}
                    className="inline-flex rounded-lg bg-primary px-4 py-1.5 text-base font-semibold leading-7 text-white shadow-sm "
                  >
                    Learn More
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* e-commerce */}

        <div className="lg:mx-auto lg:grid  lg:grid-flow-col-dense lg:grid-cols-2 lg:gap-24 lg:px-8 px-3 items-center lg:py-8">
          <div className="mt-12 sm:mt-16 lg:mt-0   lg:order-1">
            <img
              loading="lazy"
              width="647"
              height="486"
              className="w-full rounded-xl shadow-2xl  "
              src="/images/industries/4.webp"
            />
          </div>
          <div className="mx-auto max-w-xl  lg:mx-0 lg:max-w-none lg:py-8 xl:py-10 lg:px-3 lg:order-2">
            <div>
              <div className="mt-6">
                <h2 className="text-3xl md:text-5x1 font-bold tracking-tight text-black">
                  Mobile App Development
                </h2>
                <p className="mt-4 text-lg text-[#1e1e1e]">
                  At Avrut solution, we specialize in cutting-edge mobile app development to bring your ideas to life in the palm of your users' hands. Our team of skilled developers combines creativity, innovation, and technical expertise to deliver custom mobile applications tailored to your unique business needs.
                </p>
                <div className="mt-6">
                  <button
                    onClick={() => router.push("/services/mobile-app-development")}
                    className="inline-flex rounded-lg bg-primary px-4 py-1.5 text-base font-semibold leading-7 text-white shadow-sm "
                  >
                    Learn More
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* digital-banking */}

        <div className="lg:mx-auto lg:grid  lg:grid-flow-col-dense lg:grid-cols-2 lg:gap-24 lg:px-8 px-3 items-center lg:py-8">
          <div className="mt-12 sm:mt-16 lg:mt-0  order-1">
            <img
              loading="lazy"
              width="647"
              height="486"
              className="w-full rounded-xl shadow-2xl  "
              src="/images/industries/4.jpg"
            />
          </div>
          <div className="mx-auto max-w-xl  lg:mx-0 lg:max-w-none lg:py-8 xl:py-10 lg:px-3 order-">
            <div>
              <div className="mt-6">
                <h2 className="text-3xl md:text-5x1 font-bold tracking-tight text-black">
                  Staff Augmentation
                </h2>
                <p className="mt-4 text-lg text-[#1e1e1e]">
                  At Avrut solutions, we understand that maintaining a highly skilled and flexible workforce is crucial for meeting the demands of today's dynamic business landscape. Our staff augmentation services empower your organization by providing top-tier professionals to seamlessly integrate with your existing team, ensuring continuity, scalability, and success in your projects.
                </p>
                <div className="mt-6">
                  <button
                    onClick={() => router.push("/industries/digital-banking")}
                    className="inline-flex rounded-lg bg-primary px-4 py-1.5 text-base font-semibold leading-7 text-white shadow-sm "
                  >
                    Learn More
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="container mx-auto  my-5"></div>
    </>
  );
}

export default Industries;
