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

@NgModule({
  imports: [
    CommonModule,
    StoreModule.forRoot({
      ladderData: ladderReducer,
      round: roundReducer
    }),
    EffectsModule.forRoot([LadderEffects, RoundEffects]),
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
