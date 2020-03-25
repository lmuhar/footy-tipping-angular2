import { Store, select } from '@ngrx/store';
import { Component, OnInit } from '@angular/core';
import { AppState } from '../../state/model/app-state.model';
import { ToastMessageModel } from '../models/toast-message.model';

import * as toastMessageActions from './../../state/model/toast-message/toast-message.actions';

@Component({
  selector: 'app-toast',
  templateUrl: './toast.component.html',
  styleUrls: ['./toast.component.scss']
})
export class ToastComponent implements OnInit {
  constructor(private store: Store<AppState>) {}
  public message: ToastMessageModel = { body: '', type: '' };

  public ngOnInit() {
    this.store.pipe(select(state => state.toastMessage.toastMessage)).subscribe(res => {
      if (res) {
        this.message.body = res.body;
        this.message.type = res.type;
        setTimeout(() => {
          this.message.body = '';
          this.message.type = '';
          this.store.dispatch(new toastMessageActions.ToastMessageReset());
        }, 3000);
      }
    });
  }
}
