import { ToastComponent } from './../shared/toast/toast.component';
import { FormGroup, FormControl, Validators, FormBuilder, FormArray } from '@angular/forms';
import { Component, OnInit } from '@angular/core';

import { Round } from '../shared/models/round.model';
import { ImageHelper } from './../utils/helpers/imageHelper';

import * as ladderActions from './../../app/state/model/ladder/ladder.actions';
import * as roundActions from './../../app/state/model/round/round.actions';
import * as tipActions from './../../app/state/model/tips/tip.actions';

import { AppState } from '../state/model/app-state.model';
import { Store, select } from '@ngrx/store';

@Component({
  selector: 'app-enter-tips',
  templateUrl: './enter-results.component.html',
  styleUrls: ['./enter-results.component.scss']
})
export class EnterResultsComponent implements OnInit {
  public rounds: Round[] = [];
  public selectedRound = new Round();
  public isLoading = true;
  public number = new FormControl('', Validators.required);
  public isNew = true;

  public selectForm: FormGroup;
  public enterResultsForm: FormGroup;

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

    this.enterResultsForm = this.formBuilder.group({
      results: this.formBuilder.array([])
    });

    this.selectForm.valueChanges.subscribe(change => {
      this.getSelectedRoundData(change.number);
    });
  }

  private getSelectedRoundData(id) {
    this.isLoading = true;
    this.store.dispatch(new roundActions.GetRound(id));

    this.store.pipe(select(state => state.round.selectedRound)).subscribe(res => {
      if (res) {
        this.selectedRound = res;
        this.enterResultsForm.reset();

        const control = <FormArray>this.enterResultsForm.controls['results'];
        res.games.forEach(game => {
          control.push(new FormControl(game.result, Validators.required));
        });
        this.isLoading = false;
      }
    });
  }
  public returnName(name) {
    return ImageHelper.returnAssetUrl(name);
  }

  public saveResults() {
    this.isLoading = true;
    let i = 0;
    this.selectedRound.games.forEach(game => {
      game.result = this.enterResultsForm.value.results[i];
      i++;
    });
    this.selectedRound.completed = true;

    this.store.dispatch(new tipActions.UpdateTipsWithResults(this.selectedRound));
    this.store.dispatch(new roundActions.EditRound(this.selectedRound));

    this.store.pipe(select(state => state)).subscribe(res => {
      if (res.round.editRound && res.tips.updateTipResults) {
        this.isLoading = false;
      }
    });
  }

  public scrapeLadderData() {
    this.isLoading = true;
    this.store.dispatch(new ladderActions.GetScrappedLadder());

    this.store.pipe(select(state => state.ladderData.addNewRecord)).subscribe(res => {
      if (res) {
        this.isLoading = false;
      }
    });
  }
}
