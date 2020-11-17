import React from "react"
import { LoremIpsum } from "react-lorem-ipsum";
import Title from "./Title.js"

function Job(props) {
  return (
    <div id="job">
      <pre className="job-sub">{props.org} -- </pre><i className="job-pos">{props.position}</i>
      <i className="job-date">{props.date}</i>
      <p className="job-content">{props.description}</p>
    </div>
  )
}
 
function Experience(props) {
  return (
    <div id={props.id}>
      <Title title="EXPERIENCE" />
      <div id="jobs">
        <Job
          org="Coller Lab at UCLA"
          position="Undergraduate Research Assistant" 
          date="JUNE 2020 - PRESENT"
          description="Examining the structure-function relationship of chromatin architecture in cell quiescence by cleaning and processing data from ATAC-seq analysis." />
        <Job
          org="Daily Bruin"
          position="Web Developer"
          date="OCTOBER 2018 - PRESENT"
          description="Rebuilding the popular UCLA news website used by thousands of people daily, writing React.js components to interact with Node.js backend services and a MongoDB database." />
        <Job
          org="UCLA School of Engineering"
          position="Class Mentor"
          date="MARCH 2017 - JUNE 2019"
          description="Taught 30+ students in lab sections and assisted them with their projects for an Engineering Design class about Digital Imaging." />
        <Job
          org="ACM@UCLA"
          position="Director of Design"
          date="APRIL 2018 - APRIL 2019"
          description="Association for Computing Machinery at UCLA. Led organization-wide marketing and branding efforts to attract 600+ students to various ACM@UCLA events. Planned and hosted tech-related design workshops for the UCLA community throughout the year." />
        <Job
          org="UCLA IT Services: Bruin OnLine"
          position="Help Desk Consultant"
          date="FEBRUARY 2018 - DECEMBER 2018"
          description="Provided primary support for walk-in and telephone customers regarding their UCLA Logon accounts and services." />
      </div>
    </div>
  )
}
 
export default Experience;