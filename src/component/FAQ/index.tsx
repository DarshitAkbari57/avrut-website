import React from 'react'
import { BsChevronDown, BsChevronUp } from 'react-icons/bs';

function Faq() {

    const [activeIndex, setActiveIndex] = React.useState(null);

    const toggleAccordion = (index: any) => {
        setActiveIndex(activeIndex === index ? null : index);
    };

    const accordionItems = [
        { title: '01.  What services does Avrut Solutions offer?', content: 'Avrut Solutions is a leading software development company that designs and builds applications and other software parts for businesses. We offer a wide range of services, from UI/UX design, web, and mobile app development, custom API development, and DevOps, to project management and business analysis' },
        { title: '02.  Is Avrut Solutions the best for software development?', content: 'Avrut Solutions excels at creating digitally adaptable products that solve real-world problems. Our developers deliver cutting-edge apps on time, regardless of the complexity involved in the development process. We are easily one of the best in the field of software development.' },
        { title: '03.  How is Avrut Solutions better than others?', content: 'Avrut Solutions is better than others because we have a pool of highly skilled engineers with exceptional technical knowledge. Our software developers are experienced in using the latest software standards, tools, frameworks, and technologies. Moreover, we continuously invest in their training and education, so they can respond effectively to any new technology challenges and demands from our customers.' },
    ];
    return (
        <>

            <div className='bg-purple p-5 md:p-5'>
                <div className='container mx-auto'>
                    <div className='max-w-4xl m-auto flex justify-center items-center gap-4 py-3 md:py-5'>
                        <hr className='w-[100px] h-[4px] bg-primary' />
                        <div className='text-4xl font-bold mx-3 max-w-min text-center'>
                            FAQ'
                            <span className='text-primary'>
                                s
                            </span>
                        </div>
                        <hr className='w-[100px] h-[4px] bg-primary' />
                    </div>
                    <div className=" mt-5 md:px-5">
                        {accordionItems.map((item, index) => (
                            <div key={index} className="mb-4">
                                <div
                                    onClick={() => toggleAccordion(index)}
                                    className={`flex items-center justify-between p-4 bg-white text-xl font-semibold rounded-xl cursor-pointer  activeIndex === index ? "":""`}
                                >
                                    <div>{item.title}</div>
                                    <div>{activeIndex === index ? <BsChevronUp /> : <BsChevronDown />}</div>
                                </div>
                                {activeIndex === index && (
                                    <div className="p-4 bg-white ease-in-out duration-500">
                                        <p>{item.content}</p>
                                    </div>
                                )}
                            </div>
                        ))}
                    </div>
                </div>

            </div >
        </>
    )
}

export default Faq