//import logo from "./logo.svg";
//import "./App.css";
import { useState,useEffect } from "react";

const App = () => {
  const anecdotes = [
    "If it hurts, do it more often.",
    "Adding manpower to a late software project makes it later!",
    "The first 90 percent of the code accounts for the first 10 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.",
    "Any fool can write code that a computer can understand. Good programmers write code that humans can understand.",
    "Premature optimization is the root of all evil.",
    "Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.",
    "Programming without an extremely heavy use of console.log is same as if a doctor would refuse to use x-rays or blood tests when diagnosing patients.",
    "The only way to go fast, is to go well.",
  ];
  const [selected, setSelected] = useState(0);
  const initialVotes = new Array(anecdotes.length).fill(0);
  const [votes, setVotes] = useState(initialVotes);
  const [maxVoteDescr, setMaxVoteDescr] = useState("");
  const maxVotesAnecdote = { index: -1, votesGiven: 0 };
  let maxVoteAnecdote = "";
  //votes.length=anecdotes.length;
  const getRandomInt = (max) => {
    return Math.floor(Math.random() * max);
  };
  const getNextAnecdote = () => {
    setSelected(getRandomInt(anecdotes.length));
    return anecdotes[selected];
  };
  const setMaxVotesAnecdote = () => {
    const maxVotes = Math.max(...votes);
    console.log("maxVotes=" + maxVotes);
    if (maxVotes > 0) {
      maxVotesAnecdote.index = votes.indexOf(maxVotes);
      maxVotesAnecdote.votesGiven = maxVotes;
    } else {
      maxVotesAnecdote.index = -1;
      maxVotesAnecdote.votesGiven = 0;
    }
    updateMaxVotesAnecdote();
  };
  const setVotesCount = () => {
    //console.log(votes);
    const updatedVotes = votes.map((val, index) => {
      if (index === selected) {
        return val + 1;
      } else {
        return val;
      }
    });
    setVotes(updatedVotes);
  
    //setMaxVotesAnecdote();
    //console.log(updatedVotes);
  };
  const updateMaxVotesAnecdote = () => {
    // console.log("maxVotesAnecdote.index=" + maxVotesAnecdote.index);
    if (maxVotesAnecdote.index != -1) {
      maxVoteAnecdote =
        anecdotes[maxVotesAnecdote.index] +
        "--" +
        "have received " +
        maxVotesAnecdote.votesGiven +
        " votes";
    } else {
      maxVoteAnecdote = "";
    }
    setMaxVoteDescr(maxVoteAnecdote);
    //console.log("maxVoteAnecdote=" + maxVoteAnecdote);
  };
  
  useEffect(()=>
  {
    setMaxVotesAnecdote();
  },votes);

  return (
    <div>
      <strong>Anecdote of the deay</strong>
      <br></br>
      {anecdotes[selected]}
      <br></br>
      <br></br>
      <br></br>
      Votes:{votes[selected]}
      <br></br>
      <br></br>
      <button onClick={getNextAnecdote}>Next Anecdote</button>
      <button onClick={setVotesCount}>Vote this anecdote</button>
      <br></br>
      <br></br>
      <strong>Anecdote with most votes</strong>
      <br></br>
      <br></br>
      {maxVoteDescr}
    </div>
  );
};

export default App;
