import React from "react";

const IndustriesFeatures = ({ title, card }: any) => {
  return (
    <div>
      <div id="features" className="mx-auto">
        <p className="text-center text-base font-semibold leading-7 text-primary">
          Features
        </p>
        <h2 className="text-center mx-52 font-display text-3xl font-bold tracking-tight text-slate-900 md:text-4xl">
          {title}
        </h2>
        <section className="text-gray-700 body-font">
          <div className="container py-10 md:py-10 mx-auto">
            <div className="flex flex-wrap text-center">
              {card.map((e: any) => {
                return (
                  <>
                    <div className="p-4 lg:w-1/4 md:w-1/2 w-full">
                      <div className="group px-4 rounded-lg transform transition duration-500 hover:scale-110 flex flex-col  justify-center items-center">
                        <div className="w-max flex justify-center text-3xl mb-3 p-3 border border-primary text-primary rounded-full bg-purple ">
                          {e?.icon}
                        </div>
                        <h2 className="title-font font-medium text-xl md:text-2xl text-gray-900">
                          {e?.title}
                        </h2>
                        <p>{e?.content}</p>
                        {/* <p className="leading-relaxed">Downloads</p> */}
                      </div>
                    </div>
                  </>
                );
              })}
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default IndustriesFeatures;
