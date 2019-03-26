import { AuthGuardLogin } from './services/auth-guard-login.service';
import { AuthGuardAdmin } from './services/auth-guard-admin.service';
import { AuthService } from './services/auth.service';
import { HttpClientModule } from '@angular/common/http';
import { ModuleWithProviders, NgModule } from '@angular/core';
import { UserService } from './services/user.service';
import { RoundService } from './services/round.service';
import { TeamService } from './services/team.service';
import { LocationService } from './services/location.service';
import { TipService } from './services/tip.service';
import { EmailService } from './services/email.service';
import { AflLadderService } from './services/afl-ladder.service';

@NgModule({
  imports: [HttpClientModule],
  declarations: []
})
export class CoreModule {
  static forRoot(): ModuleWithProviders {
    return {
      ngModule: CoreModule,
      providers: [
        AuthService,
        AuthGuardAdmin,
        AuthGuardLogin,
        UserService,
        RoundService,
        TeamService,
        LocationService,
        TipService,
        EmailService,
        AflLadderService
      ]
    };
  }
}
