import { Observable } from 'rxjs/Observable';
import { Component, OnInit } from '@angular/core';
import { ToastComponent } from './../shared/toast/toast.component';
import { FormGroup, FormControl, Validators, FormBuilder, FormArray } from '@angular/forms';

import { RoundService } from '../services/round.service';

@Component({
    selector: 'app-tips',
    templateUrl: './tips.component.html',
    styleUrls: ['./tips.component.scss']
})

export class TipsComponent implements OnInit {

    public isLoading = true;
    public rounds = [];
    public selectedRound = [];

    public selectForm: FormGroup;
    public number = new FormControl('', Validators.required);

    public enterTipsForm: FormGroup;

    constructor(
        public toast: ToastComponent,
        private roundService: RoundService,
        private formBuilder: FormBuilder
    ) {}

    public ngOnInit() {
        console.log('LOADED TIPS');

        this.roundService.getRoundWithIdNumber().subscribe((result) => {
            this.rounds = result;
        }, error => console.log(error),
        () => this.isLoading = false);

        this.selectForm = this.formBuilder.group({
            number: this.number
        });

        this.enterTipsForm = this.formBuilder.group({
            tips: this.formBuilder.array([])
        });

        this.selectForm.valueChanges.subscribe((change) => {
            this.getSelectedRoundData(change.number);
        });
    }

    public saveTips() {
        console.log('SAVE', this.enterTipsForm.value);
        // tslint:disable-next-line:no-debugger
    }

    private getSelectedRoundData(id) {
        this.isLoading = true;
        this.roundService.getRound(id).subscribe((res) => {
            this.selectedRound = res;
    
            const control = <FormArray>this.enterTipsForm.controls['tips'];

            res.games.forEach((game) => {
                control.push(new FormControl(null, Validators.required))
            })
        }, error => console.log(error),
        () => this.isLoading = false);
    }
}
