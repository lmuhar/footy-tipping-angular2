import { Observable } from 'rxjs/Observable';
import { Component, OnInit } from '@angular/core';

import { UserService } from '../services/user.service';

@Component({
  selector: 'app-ladder',
  templateUrl: './ladder.component.html',
  styleUrls: ['./ladder.component.scss']
})
export class LadderComponent implements OnInit {
  public users = [];

  constructor(private userService: UserService) {}

  public ngOnInit() {
    this.userService.getUserTotal().subscribe(res => {
      this.users = res;
    });
  }
}