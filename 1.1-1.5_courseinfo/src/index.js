import React from 'react'
import ReactDOM from 'react-dom'


const App = () => {
  const course = {
    name: 'Half Stack application development',
    parts: [
      {
        name: 'Fundamentals of React',
        exercises: 10
      },
      {
        name: 'Using props to pass data',
        exercises: 7
      },
      {
        name: 'State of a component',
        exercises: 14
      }
    ]
  }


  const Header = (props) => {
    return (
      <h1>{props.course}</h1>
    )
  }
  
  const Part = (props) => {
    return (
      <p>{props.topic} {props.exercise}</p>
    )
  }
  
  const Content = () => {
    return (
      <>
        <Part topic={course.parts[0].name} exercise={course.parts[0].exercises} />
        <Part topic={course.parts[1].name} exercise={course.parts[1].exercises} />
        <Part topic={course.parts[2].name} exercise={course.parts[2].exercises} />
      </>
    )
  }
  
  const Total = () => {
    return (
      <p>Number of exercises {course.parts[0].exercises + course.parts[1].exercises + course.parts[2].exercises}</p>
    )
  }

  return (
    <div>
      <Header course={course.name} />
      <Content />
      <Total />
    </div>
  )
}

ReactDOM.render(<App />, document.getElementById('root'))