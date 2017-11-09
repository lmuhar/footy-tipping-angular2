import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators, FormBuilder, FormArray } from '@angular/forms';

import { RoundService } from '../services/round.service';
import { TeamService } from '../services/team.service';
import { ToastComponent } from '../shared/toast/toast.component';

@Component({
    selector: 'app-round',
    templateUrl: './rounds.component.html',
    styleUrls: ['./rounds.component.scss']
})
export class RoundsComponent implements OnInit {

    round = {};
    rounds = [];
    teams = [];
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
        this.getRounds();
        this.getTeams();
        this.addRoundForm = this.formBuilder.group({
            number: this.number,
            dateStart: this.dateStart,
            dateEnd: this.dateEnd,
            games: this.formBuilder.array([ this.createGame() ]),
        });
    }
    getRounds() {
        this.roundService.getRounds().subscribe(
            data => this.rounds = data,
            error => console.log(error),
            () => this.isLoading = false
        );
    }

    getTeams() {
        this.teamService.getTeams().subscribe(
            data => this.teams = data,
            error => console.log(error),
            () => this.isLoading = false
        );
    }

    add() {
        const control = <FormArray>this.addRoundForm.controls['games'];
        const addCtrl = this.createGame();

        control.push(addCtrl);
    }

    addRound() {
        const value = {
            dateEnd: '2017-11-10',
            dateStart: '2017-11-09',
            number: 10,
            games: [
                {
                    homeTeam: 'Richmond',
                    awayTeam: 'Adelaide',
                    location: 'MCG',
                    dateTime: '2017-11-10T01:01:01'
                },
                {
                    homeTeam: 'Bulldogs',
                    awayTeam: 'Sydney',
                    location: 'MCG',
                    dateTime: '2017-11-10T01:01:01'
                }
            ]
        };

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
