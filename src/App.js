import React from 'react';
import logo from './logo.svg';
import Navbar from "./Navbar";
import Projects from './Projects.js'; 
import Photography from './Photography.js'; 
import About from './About.js'; 
import './App.css'; 

function App() {
  return (
      <div className="App">
        <div className="above-nav"></div>
        <Navbar />
        <div className="right-body">
          <About id="about"/>
          <Projects id="projects"/>
          <Photography id="photography"/>
        </div>
      </div>
  );
}

export default App;
