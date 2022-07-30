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
          
          Growing up I had always been interested in tech, building my own computers, jailbreaking my brothers iPod, rooting my android phones, and modding my game consoles.<br></br>

          This became an interest in sysAdmin building my own server that delivered media content to my friends as family, functioned as a VPN, and handled our household automation.<br></br>

          And now my latest tech-drive is all things programming.
          </p>
          <h2 className="whyMeTitle">Why Me?</h2>
            <p className="whyMeText"> Unlike most new developers, I have a bachelors in History and I am currently employed in education for the past two years. This brings a few core advantages that I have over the average junior dev. Firstly, my communication skills are top-notch having run the gamut from writing engaging articles, speaking to senior management, presenting to classes, and communicating with parents. <br></br>

            Secondly, I have a drive like few others, over the last few months I have self-taught myself full stack web-dev, this shows that I am capable of learning, building, and delivering.
            </p>
          <h2 className="techTitle">Technical Skills</h2>
            <p className="techSkills"> Through learning WebDev I have learnt React, TypeScript, JavaScript, SASS, and on the backend MongoDB and FireBase.</p>
            <div className="techStack"><EmblaCarousel/></div>
      </div>
    
  )
});

export default About;