import React from "react"
import Title from "./Title";
 
function Contact(props) {
  return (
    <div id={props.id}>
      <Title title="CONTACT"/>
      <form method="post" action="//formspree.io/aybeshlikyan@g.ucla.edu">
        <div>
          <div><input type="text" name="name" id="name" placeholder="Name" class="contact-input" required/></div>
          <div><input type="email" name="email" id="email" placeholder="Your Email" class="contact-input" required/></div>
          <div><textarea name="message" id="message" placeholder="What's Up?" rows="4" class="contact-input" required></textarea></div>
          <div>
            <input type="submit" value="send message" class="contact-submit-button" />
          </div>
        </div>
      </form>
    </div>
  )
}
 
export default Contact;