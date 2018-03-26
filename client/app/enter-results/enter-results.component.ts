import { ToastComponent } from './../shared/toast/toast.component';
import { FormGroup, FormControl, Validators, FormBuilder, FormArray } from '@angular/forms';
import { Component, OnInit } from '@angular/core';

import { RoundService } from '../services/round.service';

@Component({
    selector: 'app-enter-tips',
    templateUrl: './enter-results.component.html',
    styleUrls: ['./enter-results.component.scss']
})

export class EnterResultsComponent implements OnInit {

    public rounds = [];
    public selectedRound = [];
    public selectedRoundId = null;
    public isLoading = true;
    public number = new FormControl('', Validators.required);
    public isNew = true;

    public selectForm: FormGroup;
    public enterResultsForm: FormGroup;

    constructor(
        public toast: ToastComponent,
        private roundService: RoundService,
        private formBuilder: FormBuilder
    ) {}

    public ngOnInit() {
        this.roundService.getRoundWithIdNumber().subscribe((res) => {
            this.rounds = res;
        }, error => console.log(error),
        () => this.isLoading = false);

        this.selectForm = this.formBuilder.group({
            number: this.number
        });

        this.enterResultsForm = this.formBuilder.group({
            results: this.formBuilder.array([])
        });

        this.selectForm.valueChanges.subscribe((change) => {
            this.getSelectedRoundData(change.number);
        });
    }

    private getSelectedRoundData(id) {
        this.isLoading = true;
        this.roundService.getRound(id).subscribe((res) => {
            this.selectedRound = res;
            this.selectedRoundId = res._id;

            const control = <FormArray>this.enterResultsForm.controls['results'];
            res.games.forEach((game) => {
                control.push(new FormControl(null, Validators.required));
            });
        }, error => console.log('Error', error),
        () => this.isLoading = false);
    }

    public saveResults() {
        console.log(this.enterResultsForm.value);
    }
}
