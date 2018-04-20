import { Observable } from 'rxjs/Observable';
import { Component, OnInit } from '@angular/core';

import { RoundService } from './../services/round.service';
import { TipService } from './../services/tip.service';
import { UserService } from '../services/user.service';
import { ImageHelper } from './../utils/helpers/imageHelper';

import { forkJoin } from 'rxjs/observable/forkJoin';

@Component({
  selector: 'app-ladder',
  templateUrl: './ladder.component.html',
  styleUrls: ['./ladder.component.scss']
})
export class LadderComponent implements OnInit {
  public users = [];
  public roundData = { number: null, id: null};
  public isLoading = true;
  public html = null;

  constructor(private userService: UserService,
              private roundService: RoundService,
              private tipService: TipService) {}

  public ngOnInit() {
    this.userService.getUserTotal().subscribe(res => {
      this.users = res;
      console.log('TESTed', this.users)
    }, error => console.log(error),
    () => this.isLoading = false);

    this.roundService.getRoundTotal().subscribe(res => {
      if (res[0] && res[0]._id) {
          this.roundData = res[0]._id;
          this.tipService.allTipsForRound(this.roundData.id).subscribe(result => {
              console.log('TEST', result);
          }, error => console.log(error),
          () => this.isLoading = false);
      }
  }, error => console.log(error),
  () => this.isLoading = false);
  }

  public returnUserImage(name) {
    return ImageHelper.returnUserImage(name);
  }
}
