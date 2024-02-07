import First from "@/component/First/First";
import { useRouter } from "next/router";
import React from "react";
import MainBanner from "../../assets/technology/industries.jpg";

function Industries() {
  const router = useRouter();

  return (
    <>
      <First
        title="Empowering Industries With Top-notch Software Solutions"
        subtitle="Being one of the leading IT solution providers in the India, Our services have helped various firms from vivid industries with sustainable growth over the years. Learn more about the industries we serve."
        MainBanner={MainBanner.src}
      />

      <div className="container mx-auto  my-5">
        {/* healthcare */}

        <div className="lg:mx-auto lg:grid  lg:grid-flow-col-dense lg:grid-cols-2 lg:gap-24 lg:px-8 px-3 items-center lg:py-8">
          <div className="mt-12 sm:mt-16 lg:mt-0   lg:order-1">
            <img
              loading="lazy"
              width="647"
              height="486"
              className="w-full rounded-xl shadow-2xl  "
              src="/images/services/healthcare.avif"
            />
          </div>
          <div className="mx-auto max-w-xl  lg:mx-0 lg:max-w-none lg:py-8 xl:py-10 lg:px-3 order-">
            <div>
              <div className="mt-6">
                <h2 className="text-3xl md:text-5x1 font-bold tracking-tight text-black">
                  Healthcare
                </h2>
                <p className="mt-4 text-lg text-[#1e1e1e]">
                  Gone are the days when traditional Medicare was used for
                  treatment and a lot many ailments had no on track record for
                  treatment & early diagnosis.
                  <br />
                  Today health industry has been acing at a great pace using
                  multiple technologies & equipment for diagnosis and treatment.
                  With an aim for improving patient care, streamlining
                  administrative processes, and enhancing medical research, we
                  utilize the power of technology to create customized software
                  applications custom-made to the unique needs of healthcare
                  providers and institutions.
                </p>
                <div className="mt-6">
                  <button
                    onClick={() => router.push("/industries/healthcare")}
                    className="inline-flex rounded-lg bg-primary px-4 py-1.5 text-base font-semibold leading-7 text-white shadow-sm "
                  >
                    Learn More
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* entertainment */}

        <div className="lg:mx-auto lg:grid  lg:grid-flow-col-dense lg:grid-cols-2 lg:gap-24 lg:px-8 px-3 items-center lg:py-8">
          <div className="mt-12 sm:mt-16 lg:mt-0   lg:order-1">
            <img
              loading="lazy"
              width="647"
              height="486"
              className="w-full rounded-xl shadow-2xl "
              src="/images/services/entertainment.jpg"
            />
          </div>
          <div className="mx-auto max-w-xl  lg:mx-0 lg:max-w-none lg:py-8 xl:py-10 lg:px-3 lg:order-2">
            <div>
              <div className="mt-6">
                <h2 className="text-3xl md:text-5x1 font-bold tracking-tight text-black">
                  Entertainment
                </h2>
                <p className="mt-4 text-lg text-[#1e1e1e]">
                  Gone are the days when traditional Medicare was used for
                  treatment and a lot many ailments had no on track record for
                  treatment & early diagnosis.
                  <br />
                  Today health industry has been acing at a great pace using
                  multiple technologies & equipment for diagnosis and treatment.
                  With an aim for improving patient care, streamlining
                  administrative processes, and enhancing medical research, we
                  utilize the power of technology to create customized software
                  applications custom-made to the unique needs of healthcare
                  providers and institutions.
                </p>
                <div className="mt-6">
                  <button
                    onClick={() => router.push("/industries/entertainment")}
                    className="inline-flex rounded-lg bg-primary px-4 py-1.5 text-base font-semibold leading-7 text-white shadow-sm "
                  >
                    Learn More
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/*education */}

        <div className="lg:mx-auto lg:grid  lg:grid-flow-col-dense lg:grid-cols-2 lg:gap-24 lg:px-8 px-3 items-center lg:py-8">
          <div className="mt-12 sm:mt-16 lg:mt-0  order-1">
            <img
              loading="lazy"
              width="647"
              height="486"
              className="w-full rounded-xl shadow-2xl "
              src="/images/services/education.avif"
            />
          </div>
          <div className="mx-auto max-w-xl  lg:mx-0 lg:max-w-none lg:py-8 xl:py-10  lg:px-3 order-">
            <div>
              <div className="mt-6">
                <h2 className="text-3xl md:text-5x1 font-bold tracking-tight text-black">
                  Education
                </h2>
                <p className="mt-4 text-lg text-[#1e1e1e]">
                  Gone are the days when traditional Medicare was used for
                  treatment and a lot many ailments had no on track record for
                  treatment & early diagnosis.
                  <br />
                  Today health industry has been acing at a great pace using
                  multiple technologies & equipment for diagnosis and treatment.
                  With an aim for improving patient care, streamlining
                  administrative processes, and enhancing medical research, we
                  utilize the power of technology to create customized software
                  applications custom-made to the unique needs of healthcare
                  providers and institutions.
                </p>
                <div className="mt-6">
                  <button
                    onClick={() => router.push("/industries/education")}
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
              src="/images/services/E-com.jpg"
            />
          </div>
          <div className="mx-auto max-w-xl  lg:mx-0 lg:max-w-none lg:py-8 xl:py-10 lg:px-3 lg:order-2">
            <div>
              <div className="mt-6">
                <h2 className="text-3xl md:text-5x1 font-bold tracking-tight text-black">
                  E-commerce
                </h2>
                <p className="mt-4 text-lg text-[#1e1e1e]">
                  Gone are the days when traditional Medicare was used for
                  treatment and a lot many ailments had no on track record for
                  treatment & early diagnosis.
                  <br />
                  Today health industry has been acing at a great pace using
                  multiple technologies & equipment for diagnosis and treatment.
                  With an aim for improving patient care, streamlining
                  administrative processes, and enhancing medical research, we
                  utilize the power of technology to create customized software
                  applications custom-made to the unique needs of healthcare
                  providers and institutions.
                </p>
                <div className="mt-6">
                  <button
                    onClick={() => router.push("/industries/e-commerce")}
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
              src="/images/services/digital-banking.jpg"
            />
          </div>
          <div className="mx-auto max-w-xl  lg:mx-0 lg:max-w-none lg:py-8 xl:py-10 lg:px-3 order-">
            <div>
              <div className="mt-6">
                <h2 className="text-3xl md:text-5x1 font-bold tracking-tight text-black">
                  Digital Banking
                </h2>
                <p className="mt-4 text-lg text-[#1e1e1e]">
                  Gone are the days when traditional Medicare was used for
                  treatment and a lot many ailments had no on track record for
                  treatment & early diagnosis.
                  <br />
                  Today health industry has been acing at a great pace using
                  multiple technologies & equipment for diagnosis and treatment.
                  With an aim for improving patient care, streamlining
                  administrative processes, and enhancing medical research, we
                  utilize the power of technology to create customized software
                  applications custom-made to the unique needs of healthcare
                  providers and institutions.
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
    </>
  );
}

export default Industries;
