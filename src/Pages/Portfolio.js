import React from 'react';
import Sample from '../components/Sample';
import Nav from '../components/Nav';
import Footer from '../components/Footer';

function Portfolio() {
  return (
  <> 
  <Nav/>
   <div className=' animate__animated animate__fadeInUp dark:bg-black mt-20'>
   <h1 className='text-center text-4xl font-semibold py-10  dark:text-white'>Our Portfolio</h1>
    <Sample/>
   </div>
  <Footer/>
  </>
  )
}

export default Portfolio