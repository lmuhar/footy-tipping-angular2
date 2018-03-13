import { Observable } from 'rxjs/Observable';
import { Component, OnInit } from '@angular/core';
import { ToastComponent } from './../shared/toast/toast.component';
import { FormGroup, FormControl, Validators, FormBuilder, FormArray } from '@angular/forms';

import { RoundService } from '../services/round.service';
import { AuthService } from '../services/auth.service';
import { UserService } from '../services/user.service';

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
        private auth: AuthService,
        private roundService: RoundService,
        private userService: UserService,
        private formBuilder: FormBuilder
    ) {}

    public ngOnInit() {
        console.log('LOADED TIPS', this.auth.currentUser);

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
        this.userService.newUserTips(this.auth.currentUser._id, this.enterTipsForm.value).subscribe((res) => {
            console.log('TEST', res);
        })
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
