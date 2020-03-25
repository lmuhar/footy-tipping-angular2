import { CommonModule } from '@angular/common';
import { NgModule, Optional, SkipSelf, ModuleWithProviders } from '@angular/core';

import { EffectsModule } from '@ngrx/effects';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { StoreModule } from '@ngrx/store';
import { environment } from '../../environments/environment';
import { ladderReducer } from './model/ladder/ladder.reducer';
import { LadderEffects } from './model/ladder/ladder.effect';
import { roundReducer } from './model/round/round.reducer';
import { RoundEffects } from './model/round/round.effect';
import { tipReducer } from './model/tips/tip.reducer';
import { TipEffects } from './model/tips/tip.effects';
import { locationReducer } from './model/locations/locations.reducer';
import { LocationEffects } from './model/locations/locations.effect';
import { teamReducer } from './model/team/team.reducer';
import { TeamEffects } from './model/team/team.effect';
import { userReducer } from './model/users/user.reducer';
import { UserEffects } from './model/users/user.effects';
import { emailReducer } from './model/email/email.reducer';
import { EmailEffects } from './model/email/email.effect';
import { toastMessageReducer } from './model/toast-message/toast-message.reducer';

@NgModule({
  imports: [
    CommonModule,
    StoreModule.forRoot({
      ladderData: ladderReducer,
      round: roundReducer,
      tips: tipReducer,
      locationData: locationReducer,
      teamData: teamReducer,
      users: userReducer,
      emails: emailReducer,
      toastMessage: toastMessageReducer
    }),
    EffectsModule.forRoot([LadderEffects, RoundEffects, TipEffects, LocationEffects, TeamEffects, UserEffects, EmailEffects]),
    environment.production ? [] : StoreDevtoolsModule.instrument()
  ]
})
export class StateModule {
  constructor(
    @Optional()
    @SkipSelf()
    parentModule: StateModule
  ) {
    if (parentModule) {
      throw new Error('StateModule is already loaded. Import it in the AppModule only');
    }
  }

  static forRoot(): ModuleWithProviders {
    return {
      ngModule: StateModule,
      providers: [
        // {
        //   provide: RouterStateSerializer,
        //   useClass: CustomSerializer
        // }
      ]
    };
  }
}
