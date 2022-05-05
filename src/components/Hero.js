import '../App.css';
import React from "react";
import { ParallaxBanner } from 'react-scroll-parallax';
import crow from '../assets/crow_hike.png';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

export const Hero = () => {
  return (
    <>
        <ParallaxBanner
          layers={[
            { image: 'https://cdn.pixabay.com/photo/2014/09/07/22/17/forest-438432_960_720.jpg', speed: -20 },
            {
              speed: -10,
              children: (
                <div className="hero-overlay text-center">
                  <img className="rounded-circle " src={crow} alt="A crow figure wearing a mask"/> 
                  <h1 className="text-8xl text-black font-thin ">Crow</h1>
                  <h2 className="text-8xl text-black font-thin ">STUDENT, HIKER, CODER</h2>
                </div>
              ),
            },             
          ]}
          style={{
            height: "80vh",
            overflow: "hidden",
          }}
          className="aspect-[2/1]"
        >
        </ParallaxBanner>
    </>
  );
};