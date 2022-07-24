import React from 'react';
import './sass/style.css';
import Main from './components/main';
import Landing from './components/landing';
import About from './components/about';
function App() {
  return (
    <div className="App">
      <div className="leftContainer">
        <Main />
      </div>
      <div className="rightContainer">
        <Landing/>
        <About/>
      </div>
    </div>
  );
}

export default App;
