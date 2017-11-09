import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators, FormBuilder, FormArray } from '@angular/forms';

import { RoundService } from '../services/round.service';
import { TeamService } from '../services/team.service';
import { LocationService } from '../services/location.service';
import { ToastComponent } from '../shared/toast/toast.component';

import { Observable } from 'rxjs/Rx';

@Component({
    selector: 'app-round',
    templateUrl: './rounds.component.html',
    styleUrls: ['./rounds.component.scss']
})
export class RoundsComponent implements OnInit {

    round = {};
    rounds = [];
    teams = [];
    locations = [];
    totalRounds = 0;
    isLoading = true;
    isEditing = false;

    addRoundForm: FormGroup;
    number = new FormControl('', Validators.required);
    dateStart = new FormControl(null, Validators.required);
    dateEnd = new FormControl(null, Validators.required);
    homeTeam = new FormControl(null, Validators.required);
    awayTeam = new FormControl(null, Validators.required);
    location = new FormControl(null, Validators.required);
    dateTime = new FormControl(null, Validators.required);

    constructor(private roundService: RoundService,
                private teamService: TeamService,
                private locationService: LocationService,
                private formBuilder: FormBuilder,
                public toast: ToastComponent) { }

    createGame(): FormGroup {
        return this.formBuilder.group({
            homeTeam: this.homeTeam,
            awayTeam: this.awayTeam,
            location: this.location,
            dateTime: this.dateTime
        });
    }

    ngOnInit() {

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

    add() {
        const control = <FormArray>this.addRoundForm.controls['games'];
        const addCtrl = this.createGame();

        control.push(addCtrl);
    }

    addRound() {

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

    deleteRound(round) {
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
