import { Store, select } from '@ngrx/store';
import { Component, OnInit, ViewChild } from '@angular/core';

import { User } from '../shared/models/user.model';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { AppState } from '../state/model/app-state.model';

import * as userActions from './../state/model/users/user.actions';
import * as toastMessageActions from './../state/model/toast-message/toast-message.actions';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.scss']
})
export class AdminComponent implements OnInit {
  public dataSource: MatTableDataSource<User> = new MatTableDataSource([]);
  public displayedColumns: string[] = ['username', 'email', 'role', 'actions'];
  @ViewChild(MatSort, { static: false }) sort: MatSort;
  public users: User[] = [];
  public isLoading = true;

  constructor(private store: Store<AppState>) {}

  public ngOnInit() {
    this.store.dispatch(new userActions.GetAllUsers());

    this.dataSource.sort = this.sort;

    this.store.pipe(select(state => state.users.allUsers)).subscribe(res => {
      if (res) {
        this.users = res;
        this.dataSource.data = res;
        this.isLoading = false;
      }
    });
  }

  public deleteUser(user: User) {
    if (window.confirm(`Are you sure you want to delete ${user.username}?`)) {
      this.store.dispatch(new userActions.DeleteUser(user));
      this.store.pipe(select(state => state.users.deleteUserResponse)).subscribe(res => {
        if (res) {
          this.store.dispatch(new toastMessageActions.ToastMessage({ body: 'user deleted successfully.', type: 'success' }));
          this.store.dispatch(new userActions.GetAllUsers());
        }
      });
    }
  }
}
