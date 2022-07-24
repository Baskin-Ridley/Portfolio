import React from 'react';
import './sass/style.css';
import Main from './components/main';
import Landing from './components/landing';
function App() {
  return (
    <div className="App">
      <div className="leftContainer">
        <Main />
      </div>
      <div className="rightContainer">
        <Landing/>
      </div>
    </div>
  );
}

export default App;
