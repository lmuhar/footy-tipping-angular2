import { LadderState } from './ladder/ladder.reducer';
import { RoundState } from './round/round.reducer';
import { TipState } from './tips/tip.reducer';

export interface AppState {
  ladderData: LadderState;
  round: RoundState;
  tips: TipState;
}
