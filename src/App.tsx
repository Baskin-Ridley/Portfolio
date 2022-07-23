import React from 'react';
import './sass/style.css';
import About from './components/about';
import Landing from './components/landing';
function App() {
  return (
    <div className="App">
      <div className="leftContainer">
        <About />
      </div>
      <div className="rightContainer">
        <Landing/>
      </div>
    </div>
  );
}

export default App;
