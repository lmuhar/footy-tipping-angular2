import { Observable } from 'rxjs/Observable';
import { ToastComponent } from './../shared/toast/toast.component';
import { FormGroup, FormControl, Validators, FormBuilder, FormArray } from '@angular/forms';
import { Component, OnInit } from '@angular/core';

import { RoundService } from '../services/round.service';
import { TipService } from '../services/tip.service';

@Component({
  selector: 'app-enter-tips',
  templateUrl: './enter-results.component.html',
  styleUrls: ['./enter-results.component.scss']
})
export class EnterResultsComponent implements OnInit {
  public rounds = [];
  public selectedRound = {
    _id: null,
    games: [],
    completed: false
  };
  public isLoading = true;
  public number = new FormControl('', Validators.required);
  public isNew = true;

  public selectForm: FormGroup;
  public enterResultsForm: FormGroup;

  constructor(
    public toast: ToastComponent,
    private roundService: RoundService,
    private formBuilder: FormBuilder,
    private tipService: TipService
  ) { }

  public ngOnInit() {
    this.roundService.getRoundWithIdNumber().subscribe(
      res => {
        this.rounds = res;
      },
      error => console.log(error),
      () => (this.isLoading = false)
    );

    this.selectForm = this.formBuilder.group({
      number: this.number
    });

    this.enterResultsForm = this.formBuilder.group({
      results: this.formBuilder.array([])
    });

    this.selectForm.valueChanges.subscribe(change => {
      this.getSelectedRoundData(change.number);
    });
  }

  private getSelectedRoundData(id) {
    this.isLoading = true;
    this.roundService.getRound(id).subscribe(
      res => {
        this.selectedRound = res;

        this.enterResultsForm.reset();

        const control = <FormArray>this.enterResultsForm.controls['results'];
        res.games.forEach(game => {
          control.push(new FormControl(game.result, Validators.required));
        });
      },
      error =>
        this.toast.setMessage(
          `Retrieve tips failed due to: ${error}`,
          'warning'
        ),
      () => (this.isLoading = false)
    );
  }

  public saveResults() {
    this.isLoading = true;
    let i = 0;
    this.selectedRound.games.forEach(game => {
      game.result = this.enterResultsForm.value.results[i];
      i++;
    });
    this.selectedRound.completed = true;
    // add join for this;
    Observable.forkJoin([
      this.roundService.editRound(this.selectedRound),
      this.tipService.updateTipsWithResults(this.selectedRound._id, this.selectedRound.games)
    ]).subscribe((res) => {
      this.toast.setMessage('Save results and update user results was successful', 'success');
      console.log(res);
    }, error => this.toast.setMessage(`Save tips failed due to: ${error}`, 'warning'),
    () => this.isLoading = false);
  }
}
