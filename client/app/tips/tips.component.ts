import { Observable } from 'rxjs/Observable';
import { Component, OnInit } from '@angular/core';
import { ToastComponent } from './../shared/toast/toast.component';
import { FormGroup, FormControl, Validators, FormBuilder, FormArray } from '@angular/forms';

import { RoundService } from '../services/round.service';
import { AuthService } from '../services/auth.service';
import { UserService } from '../services/user.service';
import { TipService } from '../services/tip.service';

@Component({
    selector: 'app-tips',
    templateUrl: './tips.component.html',
    styleUrls: ['./tips.component.scss']
})

export class TipsComponent implements OnInit {

    public isLoading = true;
    public rounds = [];
    public selectedRound = [];
    public selectedRoundId = null;
    public isNew = true;

    public selectForm: FormGroup;
    public number = new FormControl('', Validators.required);

    public userRoundId = null;
    public enterTipsForm: FormGroup;

    constructor(
        public toast: ToastComponent,
        private auth: AuthService,
        private roundService: RoundService,
        private userService: UserService,
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

        this.enterTipsForm = this.formBuilder.group({
            tips: this.formBuilder.array([])
        });

        this.selectForm.valueChanges.subscribe((change) => {
            this.getSelectedRoundData(change.number);
        });
    }

    public saveTips() {
        this.isLoading = true;
        if (this.isNew) {
            this.userService.newUserTips(this.auth.currentUser._id, this.selectedRoundId, this.enterTipsForm.value).subscribe((res) => {
                console.log('Tipped received');
            }, error => this.toast.setMessage('Save tips failed, please try again', 'warning'), 
            () => this.isLoading = false);
        } else {
            const data = this.enterTipsForm.value;
            data.ownerId = this.auth.currentUser._id;
            data.roundId = this.selectedRoundId;
            data._id = this.userRoundId;
            this.tipService.editTips(data).subscribe(() => {
                this.toast.setMessage('Tips successfully updated', 'success');
            }, error => this.toast.setMessage('Updated tips failed, please try again', 'warning'),
            () => this.isLoading = false);
        }

    }

    private getSelectedRoundData(id) {
        this.isLoading = true;
        this.roundService.getRound(id).subscribe((res) => {
            this.selectedRound = res;
            this.selectedRoundId = res._id;

            const control = <FormArray>this.enterTipsForm.controls['tips'];

            res.games.forEach((game) => {
                control.push(new FormControl(null, Validators.required))
            })
            this.tipService.getUserTipsForRound(this.auth.currentUser._id, this.selectedRoundId).subscribe((res) => {
                this.isNew = false;
                this.userRoundId = res._id;
                this.enterTipsForm.setValue({
                    tips: res.tips
                });
            }, error => {
                console.log(error), 
                this.isNew = true,
                this.userRoundId = null;
                this.enterTipsForm.reset();
            },
            () => this.isLoading = false);
            

        }, error => console.log(error),
        () => this.isLoading = false);
    }
}
