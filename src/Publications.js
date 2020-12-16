import React from "react"
import Title from "./Title.js"
 
function Paper(props) {
  return (
    <div id="paper">
      <p>{props.title}</p>
      <p>{props.authors}</p>
      <p>{props.date}</p>
      <p>{props.summary}</p>
    </div>
  )
}

function Publications(props) {
  return (
    <div id={props.id}>
      <Title title="PUBLICATIONS" />
      <div id="papers">
        <Paper title="sample"/>
      </div>
    </div>
  )
}
 
export default Publications;