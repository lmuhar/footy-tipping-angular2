import { Component, OnInit } from '@angular/core';
import { ToastComponent } from './../shared/toast/toast.component';
import { FormGroup, FormControl, Validators, FormBuilder, FormArray } from '@angular/forms';

import * as moment from 'moment';

import { AuthService } from '../services/auth.service';
import { UserService } from '../services/user.service';
import { TipService } from '../services/tip.service';
import { EmailService } from '../services/email.service';

import { Round } from '../shared/models/round.model';
import { ImageHelper } from './../utils/helpers/imageHelper';
import { Store, select } from '@ngrx/store';
import { AppState } from '../state/model/app-state.model';
import { GetUserTips } from '../shared/models/tip.model';

import * as roundActions from './../../app/state/model/round/round.actions';
import * as tipActions from './../../app/state/model/tips/tip.actions';

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

  public selectForm: FormGroup;
  public number = new FormControl('', Validators.required);

  public userRoundId = null;
  public enterTipsForm: FormGroup;

  constructor(
    public toast: ToastComponent,
    private auth: AuthService,
    private userService: UserService,
    private tipService: TipService,
    private formBuilder: FormBuilder,
    private emailService: EmailService,
    private store: Store<AppState>
  ) {}

  public ngOnInit() {
    this.store.dispatch(new roundActions.GetRoundWithIdNumber());

    this.store.pipe(select(state => state.round.roundWithId)).subscribe(res => {
      if (res) {
        this.rounds = res;
        this.isLoading = false;
      }
    });

    this.selectForm = this.formBuilder.group({
      number: this.number
    });

    this.enterTipsForm = this.formBuilder.group({
      tips: this.formBuilder.array([])
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
    this.emailService.enteredTipsEmail(data).subscribe(res => {
      console.log('sent', res);
    });
  }

  public saveTips() {
    this.isLoading = true;
    const emailData = {
      user: this.auth.currentUser,
      tips: this.enterTipsForm.value,
      round: this.selectedRound
    };
    if (this.isNew) {
      this.userService.newUserTips(this.auth.currentUser._id, this.selectedRoundId, this.enterTipsForm.value).subscribe(
        res => {
          this.isNew = false;
          this.userRoundId = res._id;
          this.sendSaveEmail(emailData);
          this.toast.setMessage('Tips successfully saved', 'success');
        },
        error => this.toast.setMessage('Save tips failed, please try again', 'warning'),
        () => (this.isLoading = false)
      );
    } else {
      const data = this.enterTipsForm.value;
      data.ownerId = this.auth.currentUser._id;
      data.roundId = this.selectedRoundId;
      data._id = this.userRoundId;
      this.tipService.editTips(data).subscribe(
        () => {
          this.sendSaveEmail(emailData);
          this.toast.setMessage('Tips successfully updated', 'success');
        },
        error => this.toast.setMessage('Updated tips failed, please try again', 'warning'),
        () => (this.isLoading = false)
      );
    }
  }

  public setDefaultData() {
    const data = [];
    if (this.selectedRound && this.selectedRound.games && this.selectedRound.games.length > 0) {
      this.selectedRound.games.forEach(game => {
        if (moment().isAfter(game.dateTime)) {
          data.push(1);
        } else {
          data.push(null);
        }
      });
    }
    this.enterTipsForm.patchValue({
      tips: data
    });
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
        this.selectedRoundId = res._id;

        const control = <FormArray>this.enterTipsForm.controls['tips'];

        res.games.forEach(game => {
          control.push(new FormControl(null, Validators.required));
        });
        this.enterTipsForm.reset();
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
        this.enterTipsForm.patchValue({
          tips: res.tips
        });
        this.isLoading = false;
      } else {
        this.isNew = true;
        this.userRoundId = null;
        this.enterTipsForm.reset();
        this.setDefaultData();
        this.isLoading = false;
      }
    });
  }
}
