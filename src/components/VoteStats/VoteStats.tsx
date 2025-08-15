import { Votes } from '../../types/votes.ts';
import styles from './VoteStats.module.css';


interface VoteStatsProps {
  votes: Votes;
}

const VoteStats: React.FC<VoteStatsProps> = ({ votes }) => {
  return (
    <div>
      <h3>Vote Statistics</h3>
      <p>Good: {votes.good}</p>
      <p>Neutral: {votes.neutral}</p>
      <p>Bad: {votes.bad}</p>
    </div>
  );
};

export default VoteStats;