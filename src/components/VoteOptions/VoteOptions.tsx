import { VoteType } from '../../types/votes.ts';
import css from './VoteOptions.module.css';

interface VoteOptionsProps {
  onVote: (type: VoteType) => void;
}


const VoteOptions: React.FC<VoteOptionsProps> = ({ onVote }) => {
  return (
    <div>
      <button onClick={() => onVote('good')}>Good</button>
      <button onClick={() => onVote('neutral')}>Neutral</button>
      <button onClick={() => onVote('bad')}>Bad</button>
    </div>
  );
};

export default VoteOptions;