// import logo from './logo.svg';
// import './App.css';
import React,{ useState } from "react";

const StaticsLine = (props) => { 
  return(
    <>
    <table>
      {/* <td>Statistics</td> */}
      <br />
      <tr>
        <td>{props.text}</td>
        <td>{props.value}</td>
      </tr>
    </table>
    </>
  )
 }

function App() {
  const[good,setGood] = useState(0)
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0)
  const clickedGood = () =>{
      setGood(good +1)
  }
  const clickedNeutral = () =>{
    setNeutral(neutral +1)
  }
  const clickedBad = () =>{
    setBad(bad+1)
  }
  const total = good + bad + neutral
  const average = (good - bad)/total;
  const positive = (good /total)*100;
  if(total === 0 ){
    return(
    <>
    <h2>
        give feedback
      </h2>
      <br /><br />
      <button onClick={clickedGood}> good </button>
      <button onClick={clickedNeutral}>neutral </button>
      <button onClick={clickedBad}> bad</button>
      <h3>Statistics</h3>
       No feedback given
    </>
    );
  }
  return (
    <div >
      <h2>
        give feedback
      </h2>
      <br /><br />
      <button onClick={clickedGood}> good </button>
      <button onClick={clickedNeutral}>neutral </button>
      <button onClick={clickedBad}> bad</button>
      <br /><br /><br />
      <h3>Statistic</h3>
      <br />
      <StaticsLine text ='good ' value = {good}/>
      <StaticsLine text='neutral' value = {neutral} />
      <StaticsLine text='bad' value = {bad} />
      <StaticsLine text='all' value = {total} />
      <StaticsLine text='average' value = {average} />

      {/* <p>average  {average} </p> */}
      <p>positive {positive } % </p>

    </div>
  );
}

export default App;
