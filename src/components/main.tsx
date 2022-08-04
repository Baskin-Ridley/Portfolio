
import React from 'react'

const Main = ({refToLastComp} : { refToLastComp:any }) => {
  //scroll to element
  

  const scrollClick = () => {
    console.log("scroll")
    if (refToLastComp.current) {
      refToLastComp.current.scrollIntoView();
    }
  };


  return (
    <div className="mainContainer">
        <h1 className="mainTitle">Hi, I'm Gabriel Baskin-Ridley </h1>
        <p className="mainParagraph"> I am a full-stack developer, using modern frameworks. </p>
        <button onClick={scrollClick} className="scrollButton">
          Get to know me!
        </button>
        <p className="mainLinks">

          <a href="https://github.com/Baskin-Ridley">GitHub</a>, <a href="https://linkedin.com/in/gabriel-edward-baskin-ridley-0732671a0">LinkedIn</a>, and my <a href="/resumes/Gabriel Baskin-Ridley Resume.pdf" download>Resume</a>

        </p>
    </div>
   
  )
}







export default Main