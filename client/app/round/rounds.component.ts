import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators, FormBuilder, FormArray } from '@angular/forms';

import { RoundService } from '../services/round.service';
import { TeamService } from '../services/team.service';
import { LocationService } from '../services/location.service';
import { ToastComponent } from '../shared/toast/toast.component';

import * as moment from 'moment';

import { Observable } from 'rxjs/Rx';

@Component({
    selector: 'app-round',
    templateUrl: './rounds.component.html',
    styleUrls: ['./rounds.component.scss']
})
export class RoundsComponent implements OnInit {

    public round = {};
    public rounds = [];
    public teams = [];
    public locations = [];
    public totalRounds = 0;
    public isLoading = true;
    public isEditing = false;
    public panelOpenState = false;
    public now = null;

    public addRoundForm: FormGroup;
    public number = new FormControl('', Validators.required);
    public dateStart = new FormControl(null, Validators.required);
    public dateEnd = new FormControl(null, Validators.required);

    constructor(private roundService: RoundService,
                private teamService: TeamService,
                private locationService: LocationService,
                private formBuilder: FormBuilder,
                public toast: ToastComponent) { }

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
        this.now = moment();
        console.log('test', this.now);

        Observable.forkJoin(
            this.roundService.getRounds(),
            this.teamService.getTeams(),
            this.locationService.getLocations()
        ).subscribe(
            (results) => {
            this.rounds = results[0];
            this.teams = results[1];
            this.locations = results[2];
        }, error => console.log(error),
        () => this.isLoading = false);

        this.addRoundForm = this.formBuilder.group({
            number: this.number,
            dateStart: this.dateStart,
            dateEnd: this.dateEnd,
            games: this.formBuilder.array([ this.createGame() ]),
        });
    }

    public add() {
        const control = <FormArray>this.addRoundForm.controls['games'];
        const addCtrl = this.createGame();

        control.push(addCtrl);
    }

    public addRound() {
        this.addRoundForm.value.games.map((game) => {
            const time = game.time.split(':');
            const dateTime = moment(game.dateTime).set({ hours: time[0], minutes: time[1] });
            delete this.addRoundForm.value.games[0].time;
            game.dateTime = dateTime;
        });
        this.roundService.addRound(this.addRoundForm.value).subscribe(
            res => {
                const newRound = res.json();
                this.rounds.push(newRound);
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
                error =>  console.log(error)
            );
        }
    }
}
