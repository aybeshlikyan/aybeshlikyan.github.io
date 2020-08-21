import React from "react"
import { LoremIpsum } from "react-lorem-ipsum";
 
function Photography(props) {
  return (
    <div id={props.id}>
      <h1>Photography</h1>
      <p>yoo hoo here are some photos</p>
      <p>for your viewing pleasure!</p>
      <LoremIpsum p={10} avgWordsPerSentence={10} avgSentencesPerParagraph={10} />
    </div>
  )
}
 
export default Photography;