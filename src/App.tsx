import React from 'react';
import './sass/style.css';
import Main from './components/main';
import Landing from './components/landing';
import About from './components/about';
import Projects from './components/projects';
import Contact from './components/Contact';
function App() {
  return (
    <div className="App">
      
      <div className="portfolioContainer">
          <div className="leftContainer">
            <Main />
          </div>
          <div className="rightContainer">
            <Landing/>
            <div className="aboutBackground">
              <About/>
            </div>
            <Projects/>
            <Contact/>
          </div>
        </div>
    </div>
  );
}

export default App;
