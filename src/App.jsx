import { useState } from 'react'

const StatisticsLine = (props) => {
  return (
    <tr>
    <td>{props.text}</td> 
    <td>{props.value}</td>
    </tr>
  )
}

const Display = (props) =>  {
  console.log(props)
  const total = props.bad + props.good + props.neutral
  const average = ((props.bad * -1) + props.good) / total
  const percent = Math.round((props.good / total) * 100)

  if (total === 0) {
    return (
      <div>There is no data to display.</div>
    )
  }

  return (
  <div> 
    <table>
      <tbody>
        <StatisticsLine text="Good: " value={props.good}/>
        <StatisticsLine text="Neutral: " value={props.neutral}/>
        <StatisticsLine text="Bad: " value={props.bad}/>
        <StatisticsLine text="Total: " value={total}/>
        <StatisticsLine text="Average: " value={average}/>
        <StatisticsLine text="Percentage: " value={percent}/>
      </tbody>
    </table>
  </div>
  )
}

const App = () => {

  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)
   
  const handleGoodClick = () => {
    setGood(good + 1)
  }

  const handleNeutralClick = () => {
    setNeutral(neutral + 1)
  }

  const handleBadClick = () => {
    setBad(bad +1)
  }

  return (
    <div>
    <h1>Give Feedback</h1>
    <button onClick={handleGoodClick}>Good</button>
    <button onClick={handleNeutralClick}>Neutral</button>
    <button onClick={handleBadClick}>Bad</button>

    <h2>Statistics</h2>
    <Display good={good} neutral={neutral} bad={bad}  />
    </div>
  )
}

export default App
