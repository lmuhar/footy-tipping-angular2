import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators, FormBuilder, FormArray } from '@angular/forms';

import { RoundService } from '../services/round.service';
import { TeamService } from '../services/team.service';
import { ToastComponent } from '../shared/toast/toast.component';

import { Round } from '../shared/models/round.model';
import { Location } from '../shared/models/location.model';
import { Team } from '../shared/models/team.model';

import * as moment from 'moment';
import * as _ from 'lodash';
import * as locationActions from './../state/model/locations/locations.actions';

import { Observable } from 'rxjs/Rx';
import { AppState } from '../state/model/app-state.model';
import { Store, select } from '@ngrx/store';

@Component({
  selector: 'app-round',
  templateUrl: './rounds.component.html',
  styleUrls: ['./rounds.component.scss']
})
export class RoundsComponent implements OnInit {
  public round = new Round();
  public rounds: Round[] = [];
  public teams: Team[] = [];
  public locations: Location[] = [];
  public totalRounds = 0;
  public isLoading = true;
  public isEditing = false;
  public panelOpenState = false;
  public now = null;

  public test = [];

  public addRoundForm: FormGroup;
  public number = new FormControl('', Validators.required);
  public dateStart = new FormControl(null, Validators.required);
  public dateEnd = new FormControl(null, Validators.required);

  constructor(
    private roundService: RoundService,
    private teamService: TeamService,
    private formBuilder: FormBuilder,
    public toast: ToastComponent,
    private store: Store<AppState>
  ) {}

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

    this.store.pipe(select(state => state.locationData)).subscribe(res => {
      if (res) {
        this.locations = res.locations;
      }
    });
    Observable.forkJoin(this.roundService.getRounds(), this.teamService.getTeams()).subscribe(
      results => {
        this.rounds = results[0];
        this.teams = results[1];
        this.test = _.groupBy(this.rounds, 'year');
      },
      error => console.log(error),
      () => (this.isLoading = false)
    );

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
    this.roundService.addRound(this.addRoundForm.value).subscribe(
      res => {
        this.rounds.push(res);
        this.addRoundForm.reset();
        this.toast.setMessage('round successfully added.', 'success');
      },
      error => console.log(error)
    );
  }

  public deleteRound(round) {
    if (window.confirm('Are you sure you want to permanently delete this item?')) {
      this.roundService.deleteRound(round).subscribe(
        res => {
          const pos = this.rounds.map(elem => elem._id).indexOf(round._id);
          this.rounds.splice(pos, 1);
          this.toast.setMessage('item deleted successfully.', 'success');
        },
        error => console.log(error)
      );
    }
  }
}
