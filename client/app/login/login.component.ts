import { Store } from '@ngrx/store';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Validators, FormBuilder } from '@angular/forms';

import { AuthService } from '../services/auth.service';

import * as toastMessageActions from './../state/model/toast-message/toast-message.actions';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html'
})
export class LoginComponent implements OnInit {
  constructor(private auth: AuthService, private fb: FormBuilder, private router: Router, private store: Store<AppState>) {}

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
    this.auth.login(this.loginForm.value).subscribe(
      res => this.router.navigate(['/']),
      error => {
        this.store.dispatch(new toastMessageActions.ToastMessage({ body: 'invalid email or password!', type: 'danger' }));
      }
    );
  }
}
