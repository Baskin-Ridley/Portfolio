import React from 'react'
import quizzical from "../assets/projects/quizzical/quizzical.apng"

const Projects = () => {
  return (
    <div className="projectBackground">
        <div className="projectsContainer">
            
                <h2 className="projectsTitle">Projects</h2>
                    {/* place holder project */}
                    <div className="project">
                        
                            <h3 className="projectTitle">Quizzical</h3>
                            <img className="projectImage" src={quizzical} alt="Quizzical" />
                            <p className="projectText">
                            A Quiz game built with React that allows players to answer a series of questions on a subject of their choice, i.e: books or movies. The questions are provided by Open Trivia Database through their REST API.
                            <br>
                            </br>
                            <br>
                            </br>
                            </p>
                            <p className="projectText">
                            I opted to use Redux, as the state manager, and React-Router to make it a multiple page app, as I thought they would be valuable libraries to learn.
                            <br>
                            </br>
                            <br>
                            </br>
                            </p>
                            <p className="projectTechnologies">
                                TypeScript, React, Redux, React-Router, REST API, and Figma
                            </p>
                            <a href="https://baskin-ridley.github.io/Quizzical/" target= "blank"><button className="projectLinks">Live App</button></a>
                            <a href="https://github.com/Baskin-Ridley/Quizzical" target= "blank"><button className="projectLinks">Github</button></a>
                        
                        
                    </div>  
                    {/* place holder project */}
                   
                
           
        </div>
    </div>
  )
}

export default Projects