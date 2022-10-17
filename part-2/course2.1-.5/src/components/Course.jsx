import React from 'react'

function Course({course}) {
  return (
    <div>
      <h1 key={course.id}>{course.name }</h1>
      {
        course.parts && course.parts.map((part)=>{
            return(
            <>
            <p key={part.id} >{part.name} <span>{part.exercises}</span> </p>
            </>
            );
        })
      }
    </div>
  )
}

export default Course;