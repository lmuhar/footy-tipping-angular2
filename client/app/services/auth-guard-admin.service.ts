import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';
import { AuthService } from './auth.service';

@Injectable({
  providedIn: 'root'
})
export class AuthGuardAdmin implements CanActivate {
  constructor(public auth: AuthService, private router: Router) {}

  canActivate() {
    if (!this.auth.isAdmin) {
      this.router.navigate(['/']);
    } else {
      return this.auth.isAdmin;
    }
  }
}
