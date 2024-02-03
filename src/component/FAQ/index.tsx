import React from "react";
import { BsChevronDown, BsChevronUp } from "react-icons/bs";

function Faq({ accordionItems }: any) {
  const [activeIndex, setActiveIndex] = React.useState(null);

  const toggleAccordion = (index: any) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <>
      <div className="bg-purple p-5 md:p-5">
        <div className="container mx-auto">
          <div className="max-w-4xl m-auto flex justify-center items-center gap-4 py-3 md:py-5">
            <hr className="w-[100px] h-[4px] bg-primary" />
            <div className="text-4xl font-bold mx-3 max-w-min text-center">
              FAQ'
              <span className="text-primary">s</span>
            </div>
            <hr className="w-[100px] h-[4px] bg-primary" />
          </div>
          <div className=" mt-5 md:px-5">
            {accordionItems.map((item: any, index: number) => (
              <div key={index} className="mb-4">
                <div
                  onClick={() => toggleAccordion(index)}
                  className={`flex items-center justify-between p-4 bg-white text-xl font-semibold rounded-xl cursor-pointer  activeIndex === index ? "":""`}
                >
                  <div>{item.title}</div>
                  <div>
                    {activeIndex === index ? (
                      <BsChevronUp />
                    ) : (
                      <BsChevronDown />
                    )}
                  </div>
                </div>
                {activeIndex === index && (
                  <div className="p-4 bg-white ease-in-out duration-500 mt-[-7px] rounded-b-lg">
                    <p>{item.content}</p>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
}

export default Faq;
