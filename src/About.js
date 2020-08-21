import React from "react"
import { LoremIpsum } from "react-lorem-ipsum";
 
function About(props) {
  return (
    <div id={props.id}>
      <h1>About</h1>
      <p>Hi, my name is Arpi, I'm 19, and I never learned how to read.</p>
      <LoremIpsum p={10} avgWordsPerSentence={10} avgSentencesPerParagraph={10} />
    </div>
  )
}
 
export default About;