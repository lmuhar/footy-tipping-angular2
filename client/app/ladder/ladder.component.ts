import { Observable } from 'rxjs/Observable';
import { Component, OnInit } from '@angular/core';

import { RoundService } from './../services/round.service';
import { TipService } from './../services/tip.service';
import { UserService } from '../services/user.service';
import { ImageHelper } from './../utils/helpers/imageHelper';

import * as _ from 'lodash';

@Component({
  selector: 'app-ladder',
  templateUrl: './ladder.component.html',
  styleUrls: ['./ladder.component.scss']
})
export class LadderComponent implements OnInit {
  public users = [];
  public roundData = { number: null, id: null };
  public isLoading = true;
  public roundTotal = null;
  public roundNumber = null;

  constructor(
    private userService: UserService,
    private roundService: RoundService,
    private tipService: TipService
  ) {}

  public ngOnInit() {
    this.userService.getUserTotal().subscribe(
      res => {
        this.users = res;
      },
      error => console.log(error),
      () => (this.isLoading = false)
    );

    this.roundService.getRoundTotal().subscribe(
      res => {
        if (res[0] && res[0]._id) {
          this.roundData = res[0]._id;
          this.roundNumber = this.roundData.number;
          this.tipService.allTipsForRound(this.roundData.id).subscribe(
            result => {
              this.roundTotal = result;
              this.users.map(item => {
                const found = _.find(this.roundTotal, r => {
                  return r.user_data.username === item.username;
                });
                item.roundTotal = found.total;
                return item;
              });
            },
            error => console.log(error),
            () => (this.isLoading = false)
          );
        }
      },
      error => console.log(error),
      () => (this.isLoading = false)
    );
  }

  public returnUserImage(name) {
    return ImageHelper.returnUserImage(name);
  }
}
