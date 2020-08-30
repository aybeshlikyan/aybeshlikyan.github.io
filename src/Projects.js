import React, { Component } from "react"
import Thumbnail from './Thumbnail.js'; // Import the Thumbnail component
import './App.css';
import { LoremIpsum } from "react-lorem-ipsum";

export default class Projects extends Component {
  constructor(props) {
    super(props);
 
    this.state = {
      id: props.id,
    };
  }
 
render() {
  return (
    <div id={this.props.id}>
        <h1>Projects</h1>
        {/* <Thumbnail
        link="/hestia"
        image=""
        title="Hestia"
        category=""
        />

        <Thumbnail
        link="/collerlab"
        image=""
        title="Coller Lab"
        category=""
        /> */}
        <ul>
            <li> here is one amazing project!</li>
            <li> here is another</li>
            <li> and yet another!!!!</li>
        </ul>
        <LoremIpsum p={10} avgWordsPerSentence={10} avgSentencesPerParagraph={10} />

    </div>
  )
  };
}