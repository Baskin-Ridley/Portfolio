
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
    </div>
   
  )
}

export default Main