// import logo from './logo.svg';
import "./App.css";
import { useState } from "react";


const anecdote = [
  "If it hurts, do it more often.",
  "Adding manpower to a late software project makes it later!",
  "The first 90 percent of the code accounts for the first 10 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.",
  "Any fool can write code that a computer can understand. Good programmers write code that humans can understand.",
  "Premature optimization is the root of all evil.",
  "Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.",
  "Programming without an extremely heavy use of console.log is same as if a doctor would refuse to use x-rays or blood tests when diagnosing patients.",
];
const Header = () => {
  return (
    <>
      <h1> Anecodote of the Day</h1>
    </>
  );
};
const Anecodote = ({ text, votesCount }) => {
  return (
    <>
      <p> {text}</p>
      <p>has{votesCount} votes</p>
    </>
  );
};

const Winner = ({ anecdotes, allVotes }) => {
  const highestVoteCount = Math.max(...allVotes);
  const winnerIndex = allVotes.indexOf(highestVoteCount);
  const winner = anecdotes[winnerIndex];
  if (highestVoteCount === 0) {
    return <p>No votes yet</p>;
  }

  return (
    <div>
      <h1>Ancecdotes with most votes</h1>
      <p>{winner}</p>
      <p>has {highestVoteCount} votes</p>
    </div>
  );
};

const App = ({anecdotes}) => {
  /**
   * step 1 : raandom
   * step 2 combine[random]
   */
  const [selected, setSelected] = useState(0);
  const [allVotes, setAllVotes] = useState(Array(7).fill(0));
  const anecdote1 = () => {
    const random1 = Math.floor(Math.random() * 7);
    setSelected(random1);
  };
  const upVotes = () => {
    const newAllVotes = [...allVotes];
    newAllVotes[selected] += 1;
    setAllVotes(newAllVotes);
  };

  //                 --- iterating to attain the max value index ---

  return (
    <>
      <div>
        <Header />
        <Anecodote text={anecdote[selected]} votesCount={allVotes[selected]} />
        {/* --> error */}
      </div>
      <button onClick={upVotes}> up-Votes</button>
      <button onClick={anecdote1}> next anecdote</button>
      <br />
      <br />
      <Winner anecdotes={anecdote} allVotes={allVotes}></Winner>
    </>
  );
};

export default App;
