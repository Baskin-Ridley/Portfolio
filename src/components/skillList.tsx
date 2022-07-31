import React from 'react'
//skill image imports
import css from "../assets/skills/css-3.svg"
import html from "../assets/skills/html-5.svg"
import js from "../assets/skills/javascript.svg"
import react from "../assets/skills/react.svg"
import node from "../assets/skills/nodejs.svg"
import mongo from "../assets/skills/mongodb.svg"
import git from "../assets/skills/git-icon.svg"
import eslint from "../assets/skills/eslint.svg"
import sass from "../assets/skills/sass.svg"
import typescript from "../assets/skills/typescript-icon.svg"
import webpack from "../assets/skills/webpack.svg"
import python from "../assets/skills/python.svg"
import jest from "../assets/skills/jest.svg"
import npm from "../assets/skills/npm.svg"
import redux from "../assets/skills/redux.svg"



const SkillList = () => {
  return (
    <div>
      {/* Repeats */}
      <div className="embla__slide">
            <img className="embla__image" src={html} alt="html"></img>
            <div className="embla__slide__text">
              <h3>HTML</h3>
            </div>
          </div>
          <div className="embla__slide">
            <img className="embla__image" src={css} alt="CSS"></img>
            <div className="embla__slide__text">
              <h3>CSS</h3>
            </div>
          </div>
          <div className="embla__slide">
            <img className="embla__image" src={js} alt="JavaScript"></img>
            <div className="embla__slide__text">
              <h3>JavaScript</h3>
            </div>
          </div>
          <div className="embla__slide">
            <img className="embla__image" src={typescript} alt="TypeScript"></img>
            <div className="embla__slide__text">
              <h3>TypeScript</h3>
            </div>
          </div>
          <div className="embla__slide">
            <img className="embla__image" src={python} alt="Python"></img>
            <div className="embla__slide__text">
              <h3>Python</h3>
            </div>
          </div>
          <div className="embla__slide">
            <img className="embla__image" src={react} alt="React"></img>
            <div className="embla__slide__text">
              <h3>React</h3>
            </div>
          </div>
          <div className="embla__slide">
            <img className="embla__image" src={redux} alt="Redux"></img>
            <div className="embla__slide__text">
              <h3>Redux</h3>
            </div>
          </div>
          <div className="embla__slide">
            <img className="embla__image" src={webpack} alt="webpack"></img>
            <div className="embla__slide__text">
              <h3>Webpack</h3>
            </div>
          </div>
          <div className="embla__slide">
            <img className="embla__image" src={sass} alt="SASS"></img>
            <div className="embla__slide__text">
              <h3>SASS</h3>
            </div>
          </div>
          <div className="embla__slide">
            <img className="embla__image" src={git} alt="Git"></img>
            <div className="embla__slide__text">
              <h3>Git</h3>
            </div>
          </div>
          <div className="embla__slide">
            <img className="embla__image" src={node} alt="NodeJS"></img>
            <div className="embla__slide__text">
              <h3>NodeJS</h3>
            </div>
          </div>
          <div className="embla__slide">
            <img className="embla__image" src={npm} alt="NPM"></img>
            <div className="embla__slide__text">
              <h3>NPM</h3>
            </div>
          </div>
          <div className="embla__slide">
            <img className="embla__image" src={jest} alt="Jest"></img>
            <div className="embla__slide__text">
              <h3>Jest</h3>
            </div>
          </div>
          <div className="embla__slide">
            <img className="embla__image" src={mongo} alt="MongoDB"></img>
            <div className="embla__slide__text">
              <h3>MongoDB</h3>
            </div>
          </div>
          <div className="embla__slide">
            <img className="embla__image" src={eslint} alt="esLint"></img>
            <div className="embla__slide__text">
              <h3>esLint</h3>
            </div>
          </div>
          {/* Repeats */}
    </div>
  )
}

export default SkillList