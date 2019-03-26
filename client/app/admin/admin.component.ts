import { Validators, FormBuilder } from '@angular/forms';
import { Component, OnInit, ViewChild } from '@angular/core';

import { ToastComponent } from '../shared/toast/toast.component';
import { AuthService } from '../services/auth.service';
import { UserService } from '../services/user.service';

import { User } from '../shared/models/user.model';
import { MatTableDataSource, MatSort } from '@angular/material';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.scss']
})
export class AdminComponent implements OnInit {
  public dataSource: MatTableDataSource<User> = new MatTableDataSource([]);
  public displayedColumns: string[] = ['username', 'email', 'role', 'actions'];
  @ViewChild(MatSort) sort: MatSort;
  public users: User[] = [];
  public isLoading = true;
  public user = new User();
  public isEditing: boolean;

  public addUserForm = this.fb.group({
    username: ['', Validators.required],
    email: ['', Validators.required],
    role: ['', Validators.required]
  });

  constructor(public auth: AuthService, public toast: ToastComponent, private userService: UserService, private fb: FormBuilder) {}

  public ngOnInit() {
    this.getUsers();
    this.dataSource.sort = this.sort;
  }

  public enableEditing(user: User) {
    this.isEditing = true;
    this.user = user;
    this.addUserForm.get('username').setValue(user.username);
    this.addUserForm.get('email').setValue(user.email);
    this.addUserForm.get('role').setValue(user.role);
  }

  public cancelEditing() {
    this.isEditing = false;
    this.user = new User();
    this.toast.setMessage('user editing cancelled', 'warning');
    // reload the users to reset the editing
    this.getUsers();
    this.addUserForm.reset();
  }

  public editUser() {
    const editUser = this.addUserForm.value;
    editUser._id = this.user._id;
    this.userService.editUser(editUser).subscribe(
      () => {
        this.isEditing = false;
        this.user = editUser;
        this.toast.setMessage('user edited successfully', 'success');
        this.addUserForm.reset();
      },
      error => console.log(error)
    );
  }

  public getUsers() {
    this.userService
      .getUsers()
      .subscribe(data => ((this.users = data), (this.dataSource.data = data)), error => console.log(error), () => (this.isLoading = false));
  }

  public deleteUser(user: User) {
    if (window.confirm(`Are you sure you want to delete ${user.username}?`)) {
      this.userService
        .deleteUser(user)
        .subscribe(
          data => this.toast.setMessage('user deleted successfully.', 'success'),
          error => console.log(error),
          () => this.getUsers()
        );
    }
  }
}
