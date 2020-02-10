import { Store } from '@ngrx/store';
import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Validators, FormBuilder } from '@angular/forms';
import { UserService } from '../services/user.service';

import * as toastMessageActions from './../state/model/toast-message/toast-message.actions';
import { AppState } from '../state/model/app-state.model';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html'
})
export class RegisterComponent {
  public registerForm = this.formBuilder.group({
    username: [
      '',
      Validators.compose([Validators.required, Validators.minLength(2), Validators.maxLength(30), Validators.pattern('[a-zA-Z0-9_-\\s]*')])
    ],
    email: ['', Validators.compose([Validators.required, Validators.minLength(3), Validators.maxLength(100)])],
    password: ['', Validators.compose([Validators.required, Validators.minLength(6)])]
  });

  constructor(private formBuilder: FormBuilder, private router: Router, private userService: UserService, private store: Store<AppState>) {}

  register() {
    this.userService.register(this.registerForm.value).subscribe(
      res => {
        this.store.dispatch(new toastMessageActions.ToastMessage({ body: 'you successfully registered!', type: 'success' }));
        this.router.navigate(['/login']);
      },
      error => this.store.dispatch(new toastMessageActions.ToastMessage({ body: 'email already exists', type: 'danger' }))
    );
  }
}
