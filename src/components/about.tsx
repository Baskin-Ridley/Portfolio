import React from 'react'
import EmblaCarousel from './Carousel'
const About = () => {
  return (
      <div className="aboutContainer">
          <h2 className="aboutTitle">About Me</h2>
          <p className="aboutText">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed pulvinar dui imperdiet mauris consectetur cursus. Cras elit neque, placerat eu tristique eget, consequat volutpat est. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Praesent suscipit, eros sed blandit venenatis, purus ipsum pretium nisl, quis mattis nibh quam id orci. </p>
          <h3 className="techTitle">Technical Skills</h3>
            <p className="techSkills"> just a list of tech skills i.e. javascript</p>
            <div className="techStack"><EmblaCarousel/></div>
      </div>
    
  )
}

export default About