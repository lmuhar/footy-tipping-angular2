import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { RoutingModule } from './routing.module';
import { SharedModule } from './shared/shared.module';
import { CommonPipesModule } from './commonPipes.module';
import { MaterialModule } from './angularMaterial.module';

import { CatService } from './services/cat.service';
import { UserService } from './services/user.service';
import { AuthService } from './services/auth.service';
import { RoundService } from './services/round.service';
import { TeamService } from './services/team.service';
import { TipService } from './services/tip.service';
import { LocationService } from './services/location.service';
import { EmailService } from './services/email.service';
import { AflLadderService } from './services/afl-ladder.service';

import { AuthGuardLogin } from './services/auth-guard-login.service';
import { AuthGuardAdmin } from './services/auth-guard-admin.service';

import { AppComponent } from './app.component';
import { LogoutComponent } from './logout/logout.component';
import { AccountComponent } from './account/account.component';
import { AdminComponent } from './admin/admin.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { MDBBootstrapModule } from 'angular-bootstrap-md';

import 'hammerjs';

@NgModule({
  declarations: [
    AppComponent,
    LogoutComponent,
    AccountComponent,
    AdminComponent,
    NotFoundComponent
  ],
  imports: [
    HttpClientModule,
    RoutingModule,
    SharedModule,
    CommonPipesModule,
    BrowserAnimationsModule,
    MaterialModule,
    FormsModule,
    ReactiveFormsModule,
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
    LocationService,
    TipService,
    EmailService,
    AflLadderService
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  bootstrap: [AppComponent]
})

export class AppModule { }

