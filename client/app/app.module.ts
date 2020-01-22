import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { RoutingModule } from './routing.module';
import { SharedModule } from './shared/shared.module';
import { CommonPipesModule } from './commonPipes.module';
import { MaterialModule } from './angularMaterial.module';

import { AppComponent } from './app.component';
import { LogoutComponent } from './logout/logout.component';
import { NotFoundComponent } from './not-found/not-found.component';

import 'hammerjs';
import { BrowserModule } from '@angular/platform-browser';
import { CoreModule } from './core.module';

@NgModule({
  declarations: [AppComponent, LogoutComponent, NotFoundComponent],
  imports: [
    // angular
    BrowserAnimationsModule,
    BrowserModule,

    // core & shared
    CoreModule.forRoot(),
    SharedModule.forRoot(),
    MaterialModule.forRoot(),

    // app
    RoutingModule
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  bootstrap: [AppComponent]
})
export class AppModule {}
