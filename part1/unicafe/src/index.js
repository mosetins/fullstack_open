import React, {useState} from 'react';
import ReactDOM from 'react-dom';

const Header = (props) => {
return (
<div> 
  <h1>{props.text}
  </h1>
  </div>
)}

const Button = (props) => {
  return (
    <button onClick={props.handleClick}> 
    {props.text} 
    </button>
  )
}
const Statistics = (props) => {
  return (
      <tr>
        <td> {props.text}</td>
        <td> {props.value} {props.moreText} </td>
      </tr>
  )
}

const History = (props) => {
  if (props.feedback === 0) {
    return (
      <div>
        No feedback given
      </div>
    )
  }
  return (
    <table>
      <tbody>
        <Statistics text = "Good " value = {props.good} />
        <Statistics text = "Neutral " value = {props.neutral} />
        <Statistics text = "Bad " value = {props.bad} />
        <Statistics text = "All" value = {(props.good) + (props.neutral) + (props.bad)} />
        <Statistics text = "Average" value = {(props.good-props.bad)/(props.good+props.neutral+props.bad)} />
        <Statistics text = "Percent Positive" value = {props.good/(props.good+props.bad+props.neutral)*100} moreText="%" />
      </tbody>
    </table>
  )
}

const App =() => {
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)
  const [feedback, setFeedback] = useState(0)

  return (
    <>
      <Header text = {'Give Feedback'} />
      <Button handleClick ={() => setGood(good+1) & setFeedback(feedback +1)} text = "Good" />
      <Button handleClick ={() => setNeutral(neutral+1) & setFeedback(feedback +1)} text = "Neutral" />
      <Button handleClick ={() => setBad(bad+1) & setFeedback(feedback +1)} text = "Bad" />
      <Header text = {'Statistics'} />
      <History feedback = {feedback} good={good} bad={bad} neutral={neutral}/>
    </>
  )
}

ReactDOM.render(
    <App />,
  document.getElementById('root')
)

