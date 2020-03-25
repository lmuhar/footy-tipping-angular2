import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { RoutingModule } from './routing.module';
import { SharedModule } from './shared/shared.module';
import { MaterialModule } from './angularMaterial.module';

import { AppComponent } from './app.component';
import { LogoutComponent } from './logout/logout.component';
import { NotFoundComponent } from './not-found/not-found.component';

import 'hammerjs';
import { BrowserModule } from '@angular/platform-browser';
import { CoreModule } from './core.module';
import { StateModule } from './state/state.model';

@NgModule({
  declarations: [AppComponent, LogoutComponent, NotFoundComponent],
  imports: [
    // angular
    BrowserAnimationsModule,
    BrowserModule,

    // core & shared
    CoreModule.forRoot(),
    StateModule.forRoot(),
    SharedModule.forRoot(),
    MaterialModule.forRoot(),

    // app
    RoutingModule
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}
