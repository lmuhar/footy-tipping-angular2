import { Observable } from 'rxjs/Observable';
import { Component, OnInit } from '@angular/core';
import { ToastComponent } from './../shared/toast/toast.component';
import { FormGroup, FormControl, Validators, FormBuilder, FormArray } from '@angular/forms';

import { RoundService } from '../services/round.service';
import { TipService } from '../services/tip.service';

@Component({
    selector: 'app-view-tips',
    templateUrl: './view-tips.component.html',
    styleUrls: ['./view-tips.component.scss']
})

export class ViewTipsComponent implements OnInit {

    public rounds = [];
    public isLoading = true;
    public userTips = [];
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

    private getSelectedRoundData(id) {
        this.isLoading = true;
        this.tipService.allTipsForRound(id).subscribe((res) => {
            this.userTips = res;
            console.log(res);
        }, error => {console.log('ERROR', error); },
    () => this.isLoading = false);
    }
}
