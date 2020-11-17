import React from "react"
import { LoremIpsum } from "react-lorem-ipsum";
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
      </div>
    </div>
  )
}
 
export default Publications;