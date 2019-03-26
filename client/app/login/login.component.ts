import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Validators, FormBuilder } from '@angular/forms';

import { AuthService } from '../services/auth.service';
import { ToastComponent } from '../shared/toast/toast.component';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html'
})
export class LoginComponent implements OnInit {
  constructor(private auth: AuthService, private fb: FormBuilder, private router: Router, public toast: ToastComponent) {}

  public loginForm = this.fb.group({
    email: ['', Validators.compose([Validators.required, Validators.minLength(3), Validators.maxLength(100)])],
    password: ['', Validators.compose([Validators.required, Validators.minLength(6)])]
  });
  public ngOnInit() {
    if (this.auth.loggedIn) {
      this.router.navigate(['/']);
    }
  }

  login() {
    this.auth
      .login(this.loginForm.value)
      .subscribe(res => this.router.navigate(['/']), error => this.toast.setMessage('invalid email or password!', 'danger'));
  }
}
