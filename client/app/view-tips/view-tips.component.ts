import { Component, OnInit } from '@angular/core';
import { ToastComponent } from './../shared/toast/toast.component';
import { FormGroup, FormControl, Validators, FormBuilder } from '@angular/forms';

import { ImageHelper } from './../utils/helpers/imageHelper';
import { Round } from '../shared/models/round.model';

import * as roundActions from './../../app/state/model/round/round.actions';
import * as tipActions from './../../app/state/model/tips/tip.actions';
import { Store, select } from '@ngrx/store';
import { AppState } from '../state/model/app-state.model';
import { Tip } from '../shared/models/tip.model';

@Component({
  selector: 'app-view-tips',
  templateUrl: './view-tips.component.html',
  styleUrls: ['./view-tips.component.scss']
})
export class ViewTipsComponent implements OnInit {
  public rounds: Round[] = [];
  public isLoading = true;
  public userTips: Tip[];
  public games: any[];
  public roundCompleted: Boolean = false;
  public number = new FormControl('', Validators.required);

  public selectForm: FormGroup;

  constructor(public toast: ToastComponent, private formBuilder: FormBuilder, private store: Store<AppState>) {}

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

    this.selectForm.valueChanges.subscribe(change => {
      this.getSelectedRoundData(change.number);
    });
  }

  public returnName(name) {
    return ImageHelper.returnAssetUrl(name);
  }

  public returnUserImage(name) {
    return ImageHelper.returnUserImage(name);
  }

  private getSelectedRoundData(id) {
    this.isLoading = true;
    this.store.dispatch(new roundActions.GetRound(id));
    this.store.dispatch(new tipActions.GetAllTipsForRound(id));

    this.store.pipe(select(state => state)).subscribe(res => {
      if (res.tips.allTipsForRound && res.round.selectedRound) {
        this.userTips = res.tips.allTipsForRound;
        this.games = res.round.selectedRound.games;
        this.roundCompleted = res.round.selectedRound.completed;
        this.isLoading = false;
      }
    });
  }
}
