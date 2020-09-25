import React from 'react';
import ReactDOM from 'react-dom';

const Header = (props) => {
return (
  <div>
    <h1>
      {props.course}
    </h1>
  </div>
)
}

const Part = ({part, exercises}) => {
  return (
  <div>
  <p>
    {part} {exercises}
  </p>
  </div>
  )
}

const Content = (props) => {
  //console.log(props)
return (
  <div>
    {props.exercises.map(exercise => {
      return (
        <Part part={exercise.name} exercises={exercise.exercises} />
      )})}
      
  </div>
)
}

const Total = (props) => {
  console.log([props.exercises])
  const total = props.exercises.reduce((sumEx, indEx) => sumEx + indEx.exercises, 0);
  return(
    <div>
    <p>
      Total exercises {total}
    </p>
    </div>
  )
  }



const App = () => {
  const course = 'Half Stack application development'
  const parts = [
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
console.log('here')
  
  return (
    <div>
      <Header course = {course}/>
      <Content exercises = {parts} />
      <Total  exercises = {parts} /> 
    </div>
  )
}

ReactDOM.render (
    <App />,
  document.getElementById('root')
)
