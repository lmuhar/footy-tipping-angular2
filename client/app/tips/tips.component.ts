import { Component, OnInit } from '@angular/core';
import { ToastComponent } from './../shared/toast/toast.component';
import { FormControl, Validators, FormBuilder, FormArray } from '@angular/forms';

import * as moment from 'moment';

import { AuthService } from '../services/auth.service';

import { Round } from '../shared/models/round.model';
import { ImageHelper } from './../utils/helpers/imageHelper';
import { Store, select } from '@ngrx/store';
import { AppState } from '../state/model/app-state.model';
import { GetUserTips, Tip } from '../shared/models/tip.model';

import * as roundActions from './../../app/state/model/round/round.actions';
import * as tipActions from './../../app/state/model/tips/tip.actions';
import * as userActions from './../../app/state/model/users/user.actions';
import * as emailActions from './../../app/state/model/email/email.actions';

@Component({
  selector: 'app-tips',
  templateUrl: './tips.component.html',
  styleUrls: ['./tips.component.scss']
})
export class TipsComponent implements OnInit {
  public isLoading = true;
  public rounds: Round[] = [];
  public selectedRound = new Round();
  public selectedRoundId = null;
  public isNew = true;

  public selectForm = this.formBuilder.group({
    number: ['', Validators.required]
  });

  public userRoundId = null;
  public enterTipsForm = this.formBuilder.group({
    tips: this.formBuilder.array([])
  });

  constructor(public toast: ToastComponent, private auth: AuthService, private formBuilder: FormBuilder, private store: Store<AppState>) {}

  public ngOnInit() {
    this.store.dispatch(new roundActions.GetRoundWithIdNumber());

    this.store.pipe(select(state => state.round.roundWithId)).subscribe(res => {
      if (res) {
        this.rounds = res;
        this.isLoading = false;
      }
    });

    this.selectForm.valueChanges.subscribe(change => {
      this.getSelectedRoundData(change.number);
      this.enterTipsForm.setControl('tips', this.formBuilder.array([]));
    });
  }

  public disabledButton(date) {
    return moment().isAfter(date);
  }

  private sendSaveEmail(data) {
    this.store.dispatch(new emailActions.SendTipsSavedEmail(data));
  }

  public saveTips() {
    this.isLoading = true;
    const emailData = {
      user: this.auth.currentUser,
      tips: this.enterTipsForm.value,
      round: this.selectedRound
    };
    if (this.isNew) {
      const data: Tip = {
        ownerId: this.auth.currentUser._id,
        roundId: this.selectedRoundId,
        tips: this.enterTipsForm.value
      };
      this.store.dispatch(new userActions.NewUserTips(data));

      this.store.pipe(select(state => state.users.newUserTip)).subscribe(res => {
        if (res) {
          this.isNew = false;
          this.userRoundId = res._id;
          this.sendSaveEmail(emailData);
          this.toast.setMessage('Tips successfully saved', 'success');
          this.isLoading = false;
        }
      });
    } else {
      const data = this.enterTipsForm.value;
      data.ownerId = this.auth.currentUser._id;
      data.roundId = this.selectedRoundId;
      data._id = this.userRoundId;
      this.isLoading = true;
      this.store.dispatch(new tipActions.EditTips(data));

      this.store.pipe(select(state => state.tips.editTips)).subscribe(res => {
        if (res) {
          this.sendSaveEmail(emailData);
          this.toast.setMessage('Tips successfully updated', 'success');
          this.isLoading = false;
        }
      });
    }
  }

  public returnName(name) {
    return ImageHelper.returnAssetUrl(name);
  }

  private getSelectedRoundData(id) {
    this.isLoading = true;
    this.store.dispatch(new roundActions.GetRound(id));

    this.store.pipe(select(state => state.round.selectedRound)).subscribe(res => {
      if (res && res._id) {
        this.selectedRound = res;
        this.selectedRoundId = id;
        this.enterTipsForm.setControl('tips', this.formBuilder.array([]));
        this.enterTipsForm.reset();

        const control = <FormArray>this.enterTipsForm.controls['tips'];
        res.games.forEach((game, i) => {
          control.push(new FormControl(this.disabledButton(game.dateTime) ? 1 : null, Validators.compose([Validators.required])));
        });
        const userData: GetUserTips = {
          roundId: this.selectedRoundId,
          userId: this.auth.currentUser._id
        };

        this.store.dispatch(new tipActions.GetUserTipsForRound(userData));
      }
    });

    this.store.pipe(select(state => state.tips.userTips)).subscribe(res => {
      if (res && res._id) {
        this.isNew = false;
        this.userRoundId = res._id;
        const data = [];
        this.enterTipsForm.setControl('tips', this.formBuilder.array([]));
        this.enterTipsForm.reset();
        res.tips.forEach((item, i) => {
          data.push(item);
        });
        this.enterTipsForm.setControl('tips', this.formBuilder.array(data));
        this.isLoading = false;
      } else {
        this.isNew = true;
        this.userRoundId = null;
        this.isLoading = false;
      }
    });
  }
}
