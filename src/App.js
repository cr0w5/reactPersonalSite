import React from 'react';
import './App.css';
import {Routes, Route} from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import Home from './routes/Home';
import Mission from './components/Mission';
import Skills from './components/Skills';
import Inspiration from './components/Inspiration';
import Contact from './components/Contact';
import { ParallaxBanner, ParallaxProvider } from 'react-scroll-parallax';


function App() {
  return (
    <>
    <ParallaxProvider>
      <Routes>
        <Route path='/' exact element={<Home/>} />
        <Route path='/Home' element={<Home/>} />
        <Route path='/Home#Mission' element={<Mission/>} />
        <Route path='/Home#Skills' element={<Skills/>} />
        <Route path='/Home#Inspiration' element={<Inspiration/>} />
        <Route path='/Home#Contact' element={<Contact/>} />
      </Routes>
    </ParallaxProvider>
    </>
  );
}

export default App;
