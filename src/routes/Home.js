import Footer from '../components/Footer';
import Navbar1 from '../components/Navbar';
import Mission from '../components/Mission';
import Skills from '../components/Skills';
import Inspiration from '../components/Inspiration';
import Contact from '../components/Contact';
import {Hero} from '../components/Hero';

import React from 'react';
import '../App.css';


const Home = () => {
  return (
      <div>
        <Navbar1/>
        <div className='hero-container'>
          <Hero/>
        </div>
        <div className='container-page'>
          <Mission/>
          <Skills/>
          <Inspiration/>
          <Contact/>
        </div>
        <Footer/>
      </div>
  )
}

export default Home;
