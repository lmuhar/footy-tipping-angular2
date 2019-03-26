import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Validators, FormBuilder } from '@angular/forms';
import { UserService } from '../services/user.service';
import { ToastComponent } from '../shared/toast/toast.component';

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

  constructor(private formBuilder: FormBuilder, private router: Router, public toast: ToastComponent, private userService: UserService) {}

  register() {
    this.userService.register(this.registerForm.value).subscribe(
      res => {
        this.toast.setMessage('you successfully registered!', 'success');
        this.router.navigate(['/login']);
      },
      error => this.toast.setMessage('email already exists', 'danger')
    );
  }
}
