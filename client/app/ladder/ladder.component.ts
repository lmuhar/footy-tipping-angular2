import { Observable } from 'rxjs/Observable';
import { Component, OnInit } from '@angular/core';

import { UserService } from '../services/user.service';
import { AflLadderService } from '../services/afl-ladder.service';

@Component({
  selector: 'app-ladder',
  templateUrl: './ladder.component.html',
  styleUrls: ['./ladder.component.scss']
})
export class LadderComponent implements OnInit {
  public users = [];
  public isLoading = true;
  public html = null;

  constructor(private userService: UserService, private aflLadderService: AflLadderService) {}

  public ngOnInit() {
    this.userService.getUserTotal().subscribe(res => {
      this.users = res;
    }, error => console.log(error),
    () => this.isLoading = false);

    this.aflLadderService.getLatestLadder().subscribe(res => {
      console.log(res);
    });
  }
}
