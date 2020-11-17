import React from 'react';
import logo from './logo.svg';
import Navbar from "./Navbar";
import { motion } from "framer-motion"
import Name from './Name.js';
import About from './About.js'; 
import Education from './Education.js';
import Experience from './Experience.js';
import Publications from './Publications.js';
import Skills from './Skills.js';
import Courses from './Courses.js';
import Projects from './Projects.js'; 
// import Photography from './Photography.js'; 
import Contact from './Contact.js';

import './App.css'; 

function App() {
  return (
    <div className="App">
      <style>
        @import url('https://fonts.googleapis.com/css2?family=Roboto+Mono:wght@500;700&display=swap');
        @import url('https://fonts.googleapis.com/css2?family=Open+Sans:ital,wght@0,400;0,600;0,700;0,800;1,400&display=swap');
      </style>
      <div className="left-col">
        <Name />
        <Navbar />
      </div>
      <div id= "right-body" className="right-body fade">
        <About id="about"/>
        <Education id="education"/>
        <Experience id="experience"/>
        {/* <Publications id="publications"/> */}
        <Skills id="skills"/>
        <Courses id="courses"/>
        <Projects id="projects"/>
        {/* <Photography id="photography"/> */}
        <Contact id="contact"/>
      </div>
    </div>
  );
}

export default App;
