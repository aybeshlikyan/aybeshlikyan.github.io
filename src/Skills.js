import React from "react"
import { LoremIpsum } from "react-lorem-ipsum";
import Title from "./Title.js"
 
function Column({ skills }) {
  return skills.map(skill => (
    <p>{ skill }</p>
  ))
}

function Skills(props) {
  return (
    <div id={props.id}>
      <Title title="SKILLS & INTERESTS"/>
      <div class="skills">
        <div class="row">
          <div class="column">
            <Column skills={['Python', 'R', 'C/C++', 'MatLab', 'Git', 'GitFlow', 'Linux/Bash']}/>
          </div>
          <div class="column">
            <Column skills={['Figma', 'HTML/CSS', 'Javascript', 'React', 'React Native', 'Node.js', 'GraphQL']}/>
          </div>
          <div class="column">
            <Column skills={['Bioinformatics', 'Machine Learning', 'Computer Vision', 'BCI', 'Design']}/>
          </div>
        </div>
      </div>
    </div>
  )
}
 
export default Skills;