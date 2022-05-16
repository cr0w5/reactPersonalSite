import '../App.css';
import React from "react";
import { ParallaxBanner } from 'react-scroll-parallax';
import crow from '../assets/crow_hike.png';
import hike from '../assets/hike.jpg';

export const Hero = () => {
  return (
    <>
        <ParallaxBanner 
          layers={[
            { speed: 0, children:(
              <div className="hero-background">
                <img src={hike} alt="A picture of a hiking location with lots of trees"/>
              </div>
            ) },
            {
              speed: 50,
              children: (
                <div className="hero-overlay text-center">
                  <img className="rounded-circle " src={crow} alt="A crow figure wearing a mask"/> 
                  <h1 className="text-8xl font-thin ">Crow</h1>
                  <h2 className="text-8xl">LEARNER, HIKER, CODER</h2>
                </div>
              ),
            },             
          ]}
          style={{
            height: "80vh",
            overflow: "hidden",
          }}
          className="aspect-[2/1] hero-container"
        >
        </ParallaxBanner>
    </>
  );
};