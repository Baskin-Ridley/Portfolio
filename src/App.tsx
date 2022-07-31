import React, {useRef} from 'react';
import './sass/style.css';
import Main from './components/main';
import Landing from './components/landing';
import About from './components/about';
import Projects from './components/projects';
import ContactForm from './components/Contact';

function App() {

  

  window.onbeforeunload = () => {
    window.scrollTo(0, 0);
  };

  const ref = useRef(null);

  return (
    <div className="App">
      
      <div className="portfolioContainer">
          <div className="leftContainer">
            <Main refToLastComp={ref}/>
          </div>
          <div className="rightContainer">
            <Landing/>
            
            <About ref={ref}/>
            
            <Projects/>
            <ContactForm/>
          </div>
        </div>
    </div>
  );
}

export default App;
