import { LadderState } from './ladder/ladder.reducer';
import { RoundState } from './round/round.reducer';

export interface AppState {
  ladderData: LadderState;
  round: RoundState;
}
