import About from '@/component/About/About'
import Cards from '@/component/Cards/Cards'
import Choose from '@/component/Choose'
import Faq from '@/component/FAQ'
import Footer from '@/component/Footer/Footer'
import Getintouch from '@/component/Getintouch'
import Nav from '@/component/Nav/Nav'
import Slider from '@/component/Sliders/Slider'
import Software from '@/component/Software/Software'
import Technology from '@/component/Technology/Technology'
import React from 'react'

function Home() {
  const accordionItems = [
    { title: '01.  What services does Avrut Solutions offer?', content: 'Avrut Solutions is a leading software development company that designs and builds applications and other software parts for businesses. We offer a wide range of services, from UI/UX design, web, and mobile app development, custom API development, and DevOps, to project management and business analysis' },
    { title: '02.  Is Avrut Solutions the best for software development?', content: 'Avrut Solutions excels at creating digitally adaptable products that solve real-world problems. Our developers deliver cutting-edge apps on time, regardless of the complexity involved in the development process. We are easily one of the best in the field of software development.' },
    { title: '03.  How is Avrut Solutions better than others?', content: 'Avrut Solutions is better than others because we have a pool of highly skilled engineers with exceptional technical knowledge. Our software developers are experienced in using the latest software standards, tools, frameworks, and technologies. Moreover, we continuously invest in their training and education, so they can respond effectively to any new technology challenges and demands from our customers.' },
  ];

  return (
    <>
      <Slider />
      <Cards />
      <About />
      <Software />
      <Technology />
      <Choose />
      <Faq accordionItems={accordionItems} />
      {/* <Getintouch /> */}
    </>
  )
}

export default Home