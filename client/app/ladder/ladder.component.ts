import { Component, OnInit } from '@angular/core';

import { ImageHelper } from './../utils/helpers/imageHelper';

import * as _ from 'lodash';
import { Store, select } from '@ngrx/store';
import { AppState } from '../state/model/app-state.model';

import * as roundActions from './../state/model/round/round.actions';
import * as userActions from './../state/model/users/user.actions';
import * as tipActions from './../state/model/tips/tip.actions';

@Component({
  selector: 'app-ladder',
  templateUrl: './ladder.component.html',
  styleUrls: ['./ladder.component.scss']
})
export class LadderComponent implements OnInit {
  public users = [];
  public roundData: any;
  public isLoading = true;
  public roundTotal = null;
  public roundNumber = null;
  public requestMade = false;
  public round = null;

  constructor(private store: Store<AppState>) {}

  public ngOnInit() {
    this.store.dispatch(new roundActions.GetRoundTotal());
    this.store.dispatch(new userActions.GetUserTotals());

    this.store.pipe(select(state => state)).subscribe(res => {
      if (
        res.round.roundTotals &&
        res.round.roundTotals[0] &&
        res.round.roundTotals[0]._id &&
        res.users.userTotals &&
        res.users.userTotals.length > 0 &&
        res.round.roundTotalRequest
      ) {
        this.round = res.round.roundTotals[0]._id;
        if (this.round && this.round.id && this.roundTotal && !this.requestMade) {
          this.store.dispatch(new tipActions.GetAllTipsForRound(this.round.id));
        }

        this.roundData = res.round.roundTotals[0]._id;
        this.users = res.users.userTotals;
        this.requestMade = res.round.roundTotalRequest;
      }
    });

    this.store.pipe(select(state => state.tips)).subscribe(res => {
      if (res && res.allTipsForRound) {
        this.roundTotal = res.allTipsForRound;
        this.users.map(item => {
          const found = _.find(this.roundTotal, r => {
            return r.user_data.username === item.username;
          });
          if (found && found.total) {
            item.roundTotal = found.total;
          }
          return item;
        });
        this.isLoading = false;
      }
    });
  }

  public returnUserImage(name) {
    return ImageHelper.returnUserImage(name);
  }
}
