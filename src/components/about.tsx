//@ts-nocheck
import React, { forwardRef, useImperativeHandle, useRef } from 'react'
import EmblaCarousel from './Carousel'


  
const About = forwardRef((props, ref) => {
  const compRef = useRef();
  useImperativeHandle(ref, () => ({
    scrollIntoView: () => {
      
      compRef.current.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  }));


  return (
      <div className="aboutContainer" ref={compRef}>
          <h2 className="aboutTitle">About Me</h2>
          <p className="aboutText">
          
          Growing up I had always been interested in tech, building my own computers, jailbreaking my brothers iPod, rooting my android phones, and modding my game consoles.
          <br>
          </br>
          <br>
          </br>
          Now I am excited for all things web development, from the design and interface to the backend.
          </p>
          <h2 className="whyMeTitle">Why Me?</h2>
            <p className="whyMeText"> 
            Unlike most new developers, I have a background in writing, communication, and traditional workplaces. This has made me a well-rounded employee that is able to adapt to new environments.
            <br>
            </br>
            <br>
            </br>
            I am also very self-driven and I enjoy learning new things, which is how I have completed <a href="https://www.theodinproject.com/about" target= "blank">The Odin Project</a>, and why I am looking for a new challenge.
            
            </p>
          <h2 className="techTitle">Technical Skills</h2>
            <p className="techSkills"> I work with <u>React</u>, <u>TypeScript</u>, <u>JavaScript</u>, <u>SASS</u>, and on the backend <u>MongoDB</u> and <u>FireBase</u>.</p>
            <div className="techStack"><EmblaCarousel/></div>
      </div>
    
  )
});



export default About;