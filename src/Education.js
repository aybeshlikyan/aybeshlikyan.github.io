import React from "react"
import { LoremIpsum } from "react-lorem-ipsum";
import Title from "./Title.js"
 
function Education(props) {
  return (
    <div id={props.id}>
      <Title title="EDUCATION" />
      <p className="ed-sub">University of California, Los Angeles</p>
      <i className="ed-content">Computer Science and Engineering, B.S. (Expected March 2021)</i>
      <span className="ed-span"><pre className="ed-bold">Minor: </pre><i className="ed-span">Bioinformatics,</i><pre className="ed-bold"> Technical Breadth: </pre><i className="ed-span">Engineering Mathematics</i></span>
    </div>
  )
}
 
export default Education;