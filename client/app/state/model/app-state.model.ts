import { LocationState } from './locations/locations.reducer';
import { LadderState } from './ladder/ladder.reducer';
import { RoundState } from './round/round.reducer';
import { TipState } from './tips/tip.reducer';
import { TeamState } from './team/team.reducer';
import { UserState } from './users/user.reducer';
import { EmailState } from './email/email.reducer';
import { ToastMessageState } from './toast-message/toast-message.reducer';

export interface AppState {
  ladderData: LadderState;
  round: RoundState;
  tips: TipState;
  locationData: LocationState;
  teamData: TeamState;
  users: UserState;
  emails: EmailState;
  toastMessage: ToastMessageState;
}
