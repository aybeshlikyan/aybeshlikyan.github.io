import React, { Component, useState } from "react"
import Thumbnail from './Thumbnail.js'; // Import the Thumbnail component
import './App.css';
import Title from "./Title.js"
import { AnimateSharedLayout, motion, AnimatePresence, setSelectedId } from "framer-motion"

function Project(item) {
  const [selectedId, setSelectedId] = useState(null)
  return (
      <AnimateSharedLayout type="crossfade">
        {/* {items.map(item => ( */}
          <motion.div layoutId={item.id} onClick={() => setSelectedId(item.id)}>
            <motion.h5>{item.subtitle}</motion.h5>
            <motion.h2>{item.title}</motion.h2>
          </motion.div>
        {/* ))} */}
        
        <AnimatePresence>
          {selectedId && (
            <motion.div layoutId={item.id}>
              <motion.h5>{item.subtitle}</motion.h5>
              <motion.h2>{item.title}</motion.h2>
              <motion.button onClick={() => setSelectedId(null)} />
            </motion.div>
          )}
        </AnimatePresence>
      </AnimateSharedLayout>
  )
}

function Projects(props) {
  return(
    <div id={props.id}>
      <Title title="PROJECTS"/>
      <Project id="sonar" subtitle="React Native Mobile App" title="Sonar"/>
    </div>
  )
}
 
export default Projects;

// export default class Projects extends Component {
//   constructor(props) {
//     super(props);
 
//     this.state = {
//       id: props.id,
//     };
//   }
 
// render() {
//   const [selectedId, setSelectedId] = useState(null)
//   return (
//     <div id={this.props.id}>
//       <AnimateSharedLayout type="crossfade">
//         {items.map(item => (
//           <motion.div layoutId={item.id} onClick={() => setSelectedId(item.id)}>
//             <motion.h5>{item.subtitle}</motion.h5>
//             <motion.h2>{item.title}</motion.h2>
//           </motion.div>
//         ))}
        
//         <AnimatePresence>
//           {selectedId && (
//             <motion.div layoutId={selectedIdentifier}>
//               <motion.h5>{item.subtitle}</motion.h5>
//               <motion.h2>{item.title}</motion.h2>
//               <motion.button onClick={() => setSelectedId(null)} />
//             </motion.div>
//           )}
//         </AnimatePresence>
//       </AnimateSharedLayout>
//     </div>
//   )
//   };
// }