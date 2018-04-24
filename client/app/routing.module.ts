import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { AboutComponent } from './about/about.component';
import { LogoutComponent } from './logout/logout.component';
import { AccountComponent } from './account/account.component';
import { AdminComponent } from './admin/admin.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { TipsComponent } from './tips/tips.component';
import { ViewTipsComponent } from './view-tips/view-tips.component';

import { AuthGuardLogin } from './services/auth-guard-login.service';
import { AuthGuardAdmin } from './services/auth-guard-admin.service';

const routes: Routes = [
  { path: '', component: AboutComponent },
  { path: 'cats', loadChildren: 'app/cats/cats.module#CatsModule' },
  { path: 'register', loadChildren: 'app/register/register.module#RegisterModule' },
  { path: 'login', loadChildren: 'app/login/login.module#LoginModule' },
  { path: 'logout', component: LogoutComponent },
  { path: 'account', component: AccountComponent, canActivate: [AuthGuardLogin] },
  { path: 'admin', component: AdminComponent, canActivate: [AuthGuardAdmin] },
  { path: 'notfound', component: NotFoundComponent },
  { path: 'rounds', loadChildren: 'app/round/rounds.module#RoundsModule', canActivate: [AuthGuardLogin] },
  { path: 'tips', component: TipsComponent, canActivate: [AuthGuardLogin] },
  { path: 'view-tips', component: ViewTipsComponent, canActivate: [AuthGuardLogin] },
  { path: 'enter-results', loadChildren: 'app/enter-results/enter-results.module#EnterResultsModule', canActivate: [AuthGuardAdmin] },
  { path: '**', redirectTo: '/notfound' },
];

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})

export class RoutingModule {}
