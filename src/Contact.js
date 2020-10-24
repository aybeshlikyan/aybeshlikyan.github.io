import React from "react"
import { LoremIpsum } from "react-lorem-ipsum";
 
function Contact(props) {
  return (
    <div id={props.id}>
      <h1>About Me</h1>
      <p>Hi, my name is Arpi, I'm 19, and I never learned how to read.</p>
      <LoremIpsum p={3} avgWordsPerSentence={10} avgSentencesPerParagraph={10} />
    </div>
  )
}
 
export default Contact;