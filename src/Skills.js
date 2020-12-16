import React from "react"
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
            <Column skills={['Python', 'R', 'C/C++', 'MatLab', 'Linux/Bash', 'SQL', 'GraphQL', 'MongoDB']}/>
          </div>
          <div class="column">
            <Column skills={['Figma', 'Git', 'HTML/CSS', 'JavaScript', 'TypeScript', 'React', 'Node.js', 'React Native']}/>
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