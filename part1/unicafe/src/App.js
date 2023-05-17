//import logo from "./logo.svg";
//import "./App.css";
import { useState } from "react";
/*
const Hello = (props) => {
  const bornYear = () => {
    const thisYear = new Date().getFullYear();
    return thisYear - props.age;
  };
  return (
    <div>
      <p>
        Hello {props.name}, you are {props.age} years old
      </p>
      <p>You might have born in year {bornYear()}!</p>
    </div>
  );
};
*/
const Statistics = (props) => {
  const calcAvg=()=>
  {
    return (props.good * 1)+ (props.neutral * 0)+ (props.bad * -1);
  };
  const calcPositive=()=>
  {
    const percnt=((props.good )/((props.good )+ (props.neutral )+ (props.bad))) * 100;
    return percnt + "%";
  };
   const calcAll=()=>
  {
    return (props.good)+ (props.neutral)+ (props.bad);
  };
  if(calcAll()<=0){
    return (
    <>
      Feedback not yet submitted
    </>
  );
  }
  return (
    <>
   
	<table>
	<tr><td>Good</td><td>{props.good}</td> </tr>
	<tr><td>Neutral</td><td>{props.neutral}</td> </tr>
	<tr><td>Bad</td><td>{props.bad} </td> </tr>
	<tr><td>All</td><td>{calcAll()}</td> </tr>
	<tr><td>Average</td><td>{calcAvg()}</td> </tr>
	<tr><td>Positive </td><td></td>{calcPositive()}</tr>
	
	</table>
    </>
  );
  
  
};
const Button = (props) => {
  return (
    <>
      <button onClick={props.clickHandler}>{props.title}</button>
    </>
  );
};
const StatisticsLine = (props) => {
  return (
    <>
	{props.title}:{props.value} <br></br>
    </>
  );
};


const App = () => {
  //const name = "Peter";
  //const age = 10;
  //const {counter}=props;

  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);

  const handleGoodClick = () => {
    setGood(good + 1);
  };
  const handleNeutralClick = () => {
    setNeutral(neutral + 1);
  };
  const handleBadClick = () => {
    setBad(bad + 1);
  };
  
  return (
    <div>
      <h1>Give feedback </h1>

      {/*
     <button onClick={handleClick}>Click me to increment counter</button>
     <button onClick={handleReset}>Click me to reset counter</button>
     */}
      <Button title="good" clickHandler={handleGoodClick} />
      <Button title="neutral" clickHandler={handleNeutralClick} />
      <Button title="bad" clickHandler={handleBadClick} />
      <br></br>
      <br></br>
	  <h1>Statistics </h1>
      <Statistics good={good} neutral={neutral} bad={bad} />
	  
    </div>
  );
};

export default App;
