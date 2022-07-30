import React from 'react'
import quizzical from "../assets/projects/quizzical/settings.png"

const Projects = () => {
  return (
    <div className="projectBackground">
        <div className="projectsContainer">
            
                <h2 className="projectsTitle">Projects</h2>
                    {/* place holder project */}
                    <div className="project">
                        <div className="projectLeft">
                            <h3 className="projectTitle">Quizzical</h3>
                            <p className="projectText">
                            A Quiz game built with React that allows players to answer a series of questions on a subject of their choice, i.e: books or movies. The questions are provided by Open Trivia Database through their REST API.
                            </p>
                            <p className="projectText">
                            I opted to use Redux, as the state manager, and React-Router to make it a multiple page app, as I thought they would be valuable libraries to learn.
                            </p>
                            <p className="projectTechnologies">
                                TypeScript, React, Redux, React-Router, REST API, and Figma
                            </p>
                            <a href="https://baskin-ridley.github.io/Quizzical/"><button className="projectLinks">Live App</button></a>
                            <a href="https://github.com/Baskin-Ridley/Quizzical"><button className="projectLinks">Github</button></a>
                        </div>
                        <img className="projectImage" src={quizzical} alt="Quizzical" />
                    </div>  
                    {/* place holder project */}
                   
                
           
        </div>
    </div>
  )
}

export default Projects