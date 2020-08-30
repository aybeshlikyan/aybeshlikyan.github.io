import React from 'react';
import logo from './logo.svg';
import Navbar from "./Navbar";
import Typist from "react-typist"
import 'react-typist/dist/Typist.css'
import Projects from './Projects.js'; 
import Photography from './Photography.js'; 
import About from './About.js'; 
import './App.css'; 

function App() {
  return (
    <div className="App">
      <style>
        @import url('https://fonts.googleapis.com/css2?family=Roboto+Mono:wght@500;700&display=swap');
        @import url('https://fonts.googleapis.com/css2?family=Open+Sans:ital,wght@0,400;0,600;0,700;0,800;1,400&display=swap');
      </style>
      <div className="left-col">
        <Typist startDelay={2000} 
                cursor={{show:false}}
                avgTypingDelay={85}
                stdTypingDelay={20}
        >
          <h1>arpi</h1>
          <h1>beshlikyan</h1>
        </Typist>
        <Navbar />
      </div>
      <div className="right-body">
        <About id="about"/>
        <Projects id="projects"/>
        <Photography id="photography"/>
      </div>
    </div>
  );
}

export default App;
