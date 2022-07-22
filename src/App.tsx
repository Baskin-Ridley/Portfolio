import React from 'react';
import './sass/style.css';
import Header from './components/Header';
import About from './components/About';
import Main from './components/Main';
import Projects from './components/Projects';
import Contact from './components/Contact';
import Footer from './components/Footer';
function App() {
  return (
    <div className="App">
      <Main/>
      <Header/>
      <About/> 
      <Projects/>
      <Contact/>
      <Footer/>
    </div>
  );
}

export default App;
