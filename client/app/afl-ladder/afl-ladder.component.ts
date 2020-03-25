import { Component, OnInit } from '@angular/core';

import { ImageHelper } from './../utils/helpers/imageHelper';
import { Store, select } from '@ngrx/store';
import { AppState } from '../state/model/app-state.model';

import * as ladderActions from './../../app/state/model/ladder/ladder.actions';

@Component({
  selector: 'app-afl-ladder',
  templateUrl: './afl-ladder.component.html',
  styleUrls: ['./afl-ladder.component.scss']
})
export class AflLadderComponent implements OnInit {
  public data = [];
  public isLoading = true;

  constructor(private store: Store<AppState>) {}

  public ngOnInit() {
    this.store.dispatch(new ladderActions.GetLadder());

    this.store.pipe(select(state => state.ladderData.currentLadder)).subscribe(res => {
      if (res) {
        this.data = res;
        this.isLoading = false;
      }
    });
  }

  public returnImg(name) {
    return ImageHelper.returnAssetUrl(name);
  }
}
