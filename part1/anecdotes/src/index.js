import React, {useState} from 'react';
import ReactDOM from 'react-dom';

const Header = ({text})=> <h2> {text} </h2>


const NextAnecdoteButton = ({selected, setSelected, length}) => {
  const handleClick = () => {
    let randomAnecdote = selected;

    while (randomAnecdote === selected) {
      randomAnecdote = Math.floor(Math.random() * length)
    }
      setSelected(randomAnecdote)
  }
  return(
      <button onClick ={handleClick}>
          Generate Anecedote
      </button>
  )
}

 const NextAnecdote = ({anecdotes}) => 
 <p> {anecdotes}</p>
 
 const VoteButton = ({points, setPoints, selected}) => {
    const handleClick = () => {
      const copy = [...points]
      copy[selected]++
      setPoints(copy)
    } 
    return (
      <button onClick = {handleClick}> Vote </button>
    )
  }

  const Votes = ({points, selected}) => 
  <p> has {points[selected]} votes</p>

  const MostVotes = ({setMax, points, maxPoints, anecdotes}) => {
    setMax = points.indexOf(Math.max(...points))
    maxPoints = Math.max(...points)
    
    return (
      <>
        <p> {anecdotes[setMax]} </p>
        <p> has  {maxPoints} votes </p>
      </>


    )
  }

  

 const App = (props) => {
  
  const initPoints = new Array(anecdotes.length).fill(0)
  const[selected, setSelected] = useState(0)
  const[points, setPoints]= useState(initPoints)
  const[maxPoints, setMax]= useState(0)
  
  
  
    return (
    <div>
      <Header text= "Anecdote of the day"/>
      <NextAnecdote anecdotes={anecdotes[selected]} />
      <Votes points ={points} selected={selected}/>
      <div>
        <NextAnecdoteButton selected={selected} setSelected={setSelected} length = {anecdotes.length}/>
        <VoteButton points={points} setPoints={setPoints} selected={selected} />
      </div>
      
      <Header text="Anecdote with the most votes" />
      <MostVotes setMax={setMax} points ={points} maxPoints={maxPoints} anecdotes={anecdotes} />
    </div>
  )
}

const anecdotes = [
  'If it hurts, do it more often',
  'Adding manpower to a late software project makes it later!',
  'The first 90 percent of the code accounts for the first 90 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.',
  'Any fool can write code that a computer can understand. Good programmers write code that humans can understand.',
  'Premature optimization is the root of all evil.',
  'Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.'
]

ReactDOM.render( 
    <App anecdotes={anecdotes} />,
  document.getElementById('root')
)
