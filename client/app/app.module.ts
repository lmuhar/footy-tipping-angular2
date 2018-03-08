import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { RoutingModule } from './routing.module';
import { SharedModule } from './shared/shared.module';
import { CommonPipesModule } from './commonPipes.module';
import { MaterialModule } from './angularMaterial.module';

import { CatService } from './services/cat.service';
import { UserService } from './services/user.service';
import { AuthService } from './services/auth.service';
import { RoundService } from './services/round.service';
import { TeamService } from './services/team.service';
import { LocationService } from './services/location.service';

import { AuthGuardLogin } from './services/auth-guard-login.service';
import { AuthGuardAdmin } from './services/auth-guard-admin.service';

import { AppComponent } from './app.component';
import { CatsComponent } from './cats/cats.component';
import { AboutComponent } from './about/about.component';
import { RegisterComponent } from './register/register.component';
import { LoginComponent } from './login/login.component';
import { LogoutComponent } from './logout/logout.component';
import { AccountComponent } from './account/account.component';
import { AdminComponent } from './admin/admin.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { RoundsComponent } from './round/rounds.component';
import { TipsComponent} from './tips/tips.component';
import { CdkTableBasicComponent } from './tables/table.component';
import { AmazingTimePickerModule } from 'amazing-time-picker';
import { MDBBootstrapModule } from 'angular-bootstrap-md';
import 'hammerjs';

@NgModule({
  declarations: [
    AppComponent,
    CatsComponent,
    AboutComponent,
    RegisterComponent,
    LoginComponent,
    LogoutComponent,
    AccountComponent,
    AdminComponent,
    NotFoundComponent,
    RoundsComponent,
    TipsComponent,
    CdkTableBasicComponent
  ],
  imports: [
    RoutingModule,
    SharedModule,
    CommonPipesModule,
    BrowserAnimationsModule,
    MaterialModule,
    FormsModule,
    ReactiveFormsModule,
    AmazingTimePickerModule,
    MDBBootstrapModule
  ],
  providers: [
    AuthService,
    AuthGuardLogin,
    AuthGuardAdmin,
    CatService,
    UserService,
    RoundService,
    TeamService,
    LocationService
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  bootstrap: [AppComponent]
})

export class AppModule { }

platformBrowserDynamic().bootstrapModule(AppModule);
