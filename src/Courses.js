import React from "react"
import Title from "./Title.js"
 
function School(props){
  return(
    <p className="course-school-sub">{props.school}</p>
  )
}

function CourseList({ sects }) {
  return sects.map(sect => (
    <div class="course-col-sect">
      {sect.map( course => (
        <p>{course}</p>
      ))}
    </div>
  ))
}

function SchoolAndCourseList(props) {
  return (
    <div id="course-list">
      <School school={props.school} />
      <div class="course-row">
        {props.courses.map( courseCol => (
          <div class="course-column">
            <CourseList sects={ courseCol }/>
          </div>
        ))}
      </div>
    </div>
  )
}

function Courses(props) {
  return (
    <div id={props.id}>
      <Title title="COURSEWORK"/>
      <SchoolAndCourseList
        school="University of California, Los Angeles"
        courses={
          [[['Machine Learning',
              'Neural Signal Processing',
              'Computer Vision',
              'Scalable Web Services'],
            ['Programming Languages',
              'Data Structures & Algorithms',
              'Computer Networks',
              'OS Principles',
              'Formal Languages & Automata',
              'Logic Design']],

           [['Bioinformatics',
              'Scalable Web Services'],
            ['Digital Signal Processing',
              'Systems & Signals',
              'Circuit Theory I & II'],
            ['Linear Algebra',
             'Probability & Statistics'],
            ['Quantum Programming']]]}/>
      <SchoolAndCourseList
        school="Pompeu Fabra University, Barcelona"
        courses={
          [[['Statistical Computing in R',
              'Documentary Filmmaking']]]
        }/>
      <SchoolAndCourseList
        school='University of Glasgow, Scotland'
        courses={
          [[['Engineering Physics I',
              'Engineering Physics II']]]
        }/>
    </div>
  )
}
 
export default Courses;