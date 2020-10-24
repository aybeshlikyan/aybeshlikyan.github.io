import React from "react"
import { LoremIpsum } from "react-lorem-ipsum";
import Title from "./Title.js"
 
function Experience(props) {
  return (
    <div id={props.id}>
      <Title title="EXPERIENCE" />
      <p>Hi, my name is Arpi, I'm 19, and I never learned how to read.</p>
      <LoremIpsum p={3} avgWordsPerSentence={10} avgSentencesPerParagraph={10} />
    </div>
  )
}
 
export default Experience;