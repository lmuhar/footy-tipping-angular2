import { Observable } from 'rxjs/Observable';
import { forkJoin } from 'rxjs/observable/forkJoin';
import { Component, OnInit } from '@angular/core';
import { ToastComponent } from './../shared/toast/toast.component';
import { FormGroup, FormControl, Validators, FormBuilder, FormArray } from '@angular/forms';

import { RoundService } from '../services/round.service';
import { TipService } from '../services/tip.service';

import { Round } from '../shared/models/round.model';

@Component({
    selector: 'app-view-tips',
    templateUrl: './view-tips.component.html',
    styleUrls: ['./view-tips.component.scss']
})

export class ViewTipsComponent implements OnInit {

    public rounds: Round[] = [];
    public isLoading = true;
    public userTips = [];
    public games = [];
    public roundCompleted = false;
    public number = new FormControl('', Validators.required);

    public selectForm: FormGroup;

    constructor(
        public toast: ToastComponent,
        private roundService: RoundService,
        private tipService: TipService,
        private formBuilder: FormBuilder
    ) {}

    public ngOnInit() {
        this.roundService.getRoundWithIdNumber().subscribe((result) => {
            this.rounds = result;
        }, error => console.log(error),
            () => this.isLoading = false);

        this.selectForm = this.formBuilder.group({
            number: this.number
        });

        this.selectForm.valueChanges.subscribe((change) => {
            this.getSelectedRoundData(change.number);
        });
    }

    public returnName(value) {
        return `/assets/team-logos/${value}.png`;
    }

    private getSelectedRoundData(id) {
        this.isLoading = true;
        forkJoin([this.tipService.allTipsForRound(id), this.roundService.getRound(id)]).subscribe((res) => {
            this.userTips = res[0];
            this.games = res[1].games;
            this.roundCompleted = res[1].completed;
        }, error => {
            console.log('ERROR', error);
        }, () => this.isLoading = false);
    }
}
