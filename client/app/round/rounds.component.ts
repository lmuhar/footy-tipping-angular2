import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators, FormBuilder } from '@angular/forms';

import { RoundService } from '../services/round.service';
import { ToastComponent } from '../shared/toast/toast.component';

@Component({
    selector: 'app-round',
    templateUrl: './rounds.component.html',
    styleUrls: ['./rounds.component.scss']
})
export class RoundsComponent implements OnInit {

    round = {};
    rounds = [];
    totalRounds = 0;
    isLoading = true;
    isEditing = false;

    addRoundForm: FormGroup;
    number = new FormControl('', Validators.required);
    dateStart = new FormControl(null, Validators.required);
    dateEnd = new FormControl(null, Validators.required);

    constructor(private roundService: RoundService,
                private formBuilder: FormBuilder,
                public toast: ToastComponent) { }

    ngOnInit() {
        this.getRounds();
        this.countRounds();
        this.addRoundForm = this.formBuilder.group({
            number: this.number,
            dateStart: this.dateStart,
            dateEnd: this.dateEnd
        });
    }

    countRounds() {
        this.roundService.countRounds().subscribe(
            data => this.totalRounds = data,
            error => console.log(error),
            () => this.isLoading = false
        );
    }

    getRounds() {
        this.roundService.getRounds().subscribe(
            data => this.rounds = data,
            error => console.log(error),
            () => this.isLoading = false
        );
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
}
