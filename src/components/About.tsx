import React from 'react'
import portrait from "../assets/pexels-vincent-tan-6934325.jpg"
import EmblaCarousel from './Carousel';




const About = () => {


    
  return (
    <div className="aboutContainer">
        <h2 className="aboutTitle">About</h2>
        <div className="aboutContent">
            <p className="aboutText">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum sit amet lorem ante. Curabitur tristique fringilla eros. Duis consectetur mauris mi, id congue nisi egestas at. Nunc blandit posuere lectus, nec pulvinar ipsum. Sed felis augue, rutrum a mi nec, sagittis pulvinar dui. Nam et mollis nisi. Nam rutrum, urna in aliquam lacinia, erat sapien dapibus turpis, nec luctus ante lectus eu urna. Donec mattis quis nisl quis pellentesque. Donec sodales euismod lorem eget luctus.
            </p>
            <img className="portrait" src={portrait} alt="portrait"/>
        </div>
        <div className="techStack"><EmblaCarousel/></div>
    </div>
  )
}

export default About