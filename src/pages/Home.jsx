import React from 'react';
import Navbar from '../components/Navbar';
import Hero from "../components/Hero";
import About from "../pages/About";
import Products from './Products';
import Gallery from "../pages/Gallery";
import Testimonials from '../pages/Testimonials';
import Faq from "../pages/Faq";
import Contact from "../pages/Contact";
import Footer from './Footer';

const Home = () => {
  return (
    <>
    <div className='w-full  bg-[#FFF7E1] '>
    <Navbar/>
    <Hero/>
    <About/>
    <Products/>
    <Gallery/>
    <Testimonials/>
    <Contact/>
    <Faq/>
    <Footer/>
</div>

    </>
  )
}

export default Home