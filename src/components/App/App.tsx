import { Votes, VoteType } from '../../types/votes.ts';

import css from './App.module.css';
import CafeInfo from '../CafeInfo/CafeInfo';
import VoteOptions from '../VoteOptions/VoteOptions';
import VoteStats from '../VoteStats/VoteStats';
import { useState } from 'react';

const App = () => {
  const [votes, setVotes] = useState<Votes>({
    good: 0,
    neutral: 0,
    bad: 0,
  });
 
  const handleVote = (type: VoteType) => {
    setVotes((prevVotes) => ({
      ...prevVotes,
      [type]: prevVotes[type] + 1,
    }));
  };

   const resetVotes = () => {
    setVotes({ good: 0, neutral: 0, bad: 0 });
  };

  return (
    <div className={css.app}>
      <CafeInfo />
      <VoteOptions onVote={handleVote} />
      <VoteStats votes={votes} />
      <button onClick={resetVotes}>Reset Votes</button>
    </div>
  );
};

export default App;



