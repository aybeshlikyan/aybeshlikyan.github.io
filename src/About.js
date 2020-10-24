import React from "react"
import { LoremIpsum } from "react-lorem-ipsum";
import Title from "./Title.js"
import './App.css'; 
 
function About(props) {
  return (
    <div id={props.id}>
      <Title title="ABOUT ME" />
      <pre className="about-sub">Los Angeles, CA • </pre><a className="about-sub" href="mailto:aybeshlikyan@g.ucla.edu">aybeshlikyan@g.ucla.edu</a>
      <p className="about-content">I am a 5th year student at UCLA majoring in Computer Science & Engineering and minoring in Bioinformatics. I’m interested in Machine Learning and Computer Vision, and I’m passionate about social good.</p>
    </div>
  )
}
 
export default About;