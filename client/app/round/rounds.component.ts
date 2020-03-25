import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators, FormBuilder, FormArray } from '@angular/forms';

import { ToastComponent } from '../shared/toast/toast.component';

import { Round } from '../shared/models/round.model';
import { Location } from '../shared/models/location.model';
import { Team } from '../shared/models/team.model';

import * as moment from 'moment';
import * as _ from 'lodash';
import * as locationActions from './../state/model/locations/locations.actions';
import * as teamActions from './../state/model/team/team.actions';
import * as roundActions from './../state/model/round/round.actions';
import * as toastMessageActions from './../state/model/toast-message/toast-message.actions';

import { AppState } from '../state/model/app-state.model';
import { Store, select } from '@ngrx/store';

@Component({
  selector: 'app-round',
  templateUrl: './rounds.component.html',
  styleUrls: ['./rounds.component.scss']
})
export class RoundsComponent implements OnInit {
  public round = new Round();
  public rounds: Round[];
  public teams: Team[];
  public locations: Location[];
  public totalRounds = 0;
  public isLoading = true;
  public isEditing = false;
  public panelOpenState = false;
  public now = null;

  public groupedRounds: Round[];

  public addRoundForm: FormGroup;
  public number = new FormControl('', Validators.required);
  public dateStart = new FormControl(null, Validators.required);
  public dateEnd = new FormControl(null, Validators.required);

  constructor(private formBuilder: FormBuilder, public toast: ToastComponent, private store: Store<AppState>) {}

  createGame(): FormGroup {
    return this.formBuilder.group({
      homeTeam: new FormControl(null, Validators.required),
      awayTeam: new FormControl(null, Validators.required),
      location: new FormControl(null, Validators.required),
      dateTime: new FormControl(null, Validators.required),
      time: new FormControl(null, Validators.required)
    });
  }

  public ngOnInit() {
    this.store.dispatch(new locationActions.GetLocations());
    this.store.dispatch(new teamActions.GetTeams());
    this.store.dispatch(new roundActions.GetAllRounds());

    this.store.pipe(select(state => state)).subscribe(res => {
      if (res.locationData.locations && res.teamData.teams) {
        this.locations = res.locationData.locations;
        this.teams = res.teamData.teams;
        this.isLoading = false;
      }
    });

    this.store.pipe(select(state => state.round.allRounds)).subscribe(res => {
      if (res) {
        this.rounds = res;
        this.groupedRounds = _.groupBy(res, 'year');
        this.isLoading = false;
      }
    });

    this.addRoundForm = this.formBuilder.group({
      number: this.number,
      dateStart: this.dateStart,
      dateEnd: this.dateEnd,
      games: this.formBuilder.array([this.createGame()])
    });
  }

  public add() {
    const control = <FormArray>this.addRoundForm.controls['games'];
    const addCtrl = this.createGame();

    control.push(addCtrl);
  }

  public addRound() {
    this.addRoundForm.value.games.map(game => {
      const time = game.time.split(':');
      const dateTime = moment(game.dateTime).set({ hours: time[0], minutes: time[1] });
      delete this.addRoundForm.value.games[0].time;
      game.dateTime = dateTime;
    });
    this.store.dispatch(new roundActions.AddRound(this.addRoundForm.value));

    this.store.pipe(select(state => state.round.addRound)).subscribe(res => {
      if (res) {
        this.store.dispatch(new roundActions.GetAllRounds());
        this.addRoundForm.reset();
        this.store.dispatch(new toastMessageActions.ToastMessage({ body: 'round successfully added.', type: 'success' }));
      }
    });
  }

  public deleteRound(round) {
    if (window.confirm('Are you sure you want to permanently delete this item?')) {
      this.isLoading = true;
      this.store.dispatch(new roundActions.DeleteRound(round));

      this.store.pipe(select(state => state.round.deleteRound)).subscribe(res => {
        if (res) {
          const pos = this.rounds.map(elem => elem._id).indexOf(round._id);
          this.rounds.splice(pos, 1);
          this.store.dispatch(new toastMessageActions.ToastMessage({ body: 'item deleted successfully.', type: 'success' }));
          this.isLoading = false;
          this.store.dispatch(new roundActions.GetAllRounds());
        }
      });
    }
  }
}
