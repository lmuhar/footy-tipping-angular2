import { FormBuilder, Validators } from '@angular/forms';
import { Component, OnInit } from '@angular/core';
import { ToastComponent } from '../shared/toast/toast.component';
import { AuthService } from '../services/auth.service';
import { UserService } from '../services/user.service';
import { User } from '../shared/models/user.model';

@Component({
  selector: 'app-account',
  templateUrl: './account.component.html'
})
export class AccountComponent implements OnInit {
  public user = new User();
  public isLoading = true;

  constructor(private auth: AuthService, public toast: ToastComponent, private fb: FormBuilder, private userService: UserService) {}

  public accountForm = this.fb.group({
    username: [
      '',
      Validators.compose([Validators.required, Validators.minLength(2), Validators.maxLength(30), Validators.pattern('[a-zA-Z0-9_-\\s]*')])
    ],
    email: ['', Validators.compose([Validators.required, Validators.minLength(3), Validators.maxLength(100)])],
    role: ['user', Validators.required]
  });

  public ngOnInit() {
    this.getUser();
  }

  public getUser() {
    this.userService
      .getUser(this.auth.currentUser)
      .subscribe(data => (this.user = data), error => console.log(error), () => (this.isLoading = false));
  }

  public save(user) {
    this.userService
      .editUser(user)
      .subscribe(res => this.toast.setMessage('account settings saved!', 'success'), error => console.log(error));
  }
}
