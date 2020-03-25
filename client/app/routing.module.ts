import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { LogoutComponent } from './logout/logout.component';
import { NotFoundComponent } from './not-found/not-found.component';

import { AuthGuardLogin } from './services/auth-guard-login.service';
import { AuthGuardAdmin } from './services/auth-guard-admin.service';

const routes: Routes = [
  { path: '', loadChildren: 'app/about/about.module#AboutModule' },
  { path: 'register', loadChildren: 'app/register/register.module#RegisterModule' },
  { path: 'login', loadChildren: 'app/login/login.module#LoginModule' },
  { path: 'logout', component: LogoutComponent },
  { path: 'account', loadChildren: 'app/account/account.module#AccountModule', canActivate: [AuthGuardLogin] },
  { path: 'admin', loadChildren: 'app/admin/admin.module#AdminModule', canActivate: [AuthGuardAdmin] },
  { path: 'notfound', component: NotFoundComponent },
  { path: 'rounds', loadChildren: 'app/round/rounds.module#RoundsModule', canActivate: [AuthGuardLogin] },
  { path: 'tips', loadChildren: 'app/tips/tips.module#TipsModule', canActivate: [AuthGuardLogin] },
  { path: 'view-tips', loadChildren: 'app/view-tips/view-tips.module#ViewTipsModule', canActivate: [AuthGuardLogin] },
  { path: 'enter-results', loadChildren: 'app/enter-results/enter-results.module#EnterResultsModule', canActivate: [AuthGuardAdmin] },
  { path: '**', redirectTo: '/notfound' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class RoutingModule {}
