import { Observable } from 'rxjs/Observable';
import { Component, OnInit } from '@angular/core';

import { UserService } from '../services/user.service';
import { ImageHelper } from './../utils/helpers/imageHelper';

@Component({
  selector: 'app-ladder',
  templateUrl: './ladder.component.html',
  styleUrls: ['./ladder.component.scss']
})
export class LadderComponent implements OnInit {
  public users = [];
  public isLoading = true;
  public html = null;

  constructor(private userService: UserService) {}

  public ngOnInit() {
    this.userService.getUserTotal().subscribe(res => {
      this.users = res;
    }, error => console.log(error),
    () => this.isLoading = false);
  }

  public returnUserImage(name) {
    return ImageHelper.returnUserImage(name);
  }
}
