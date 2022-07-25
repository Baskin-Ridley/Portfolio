import React from 'react';
import './sass/style.css';
import Main from './components/main';
import Landing from './components/landing';
import About from './components/about';
import Projects from './components/projects';
function App() {
  return (
    <div className="App">
      <div className="leftContainer">
        <Main />
      </div>
      <div className="rightContainer">
        <Landing/>
        <div className="aboutBackground">
          <About/>
        </div>
        <Projects/>
      </div>
    </div>
  );
}

export default App;
