import { Observable } from 'rxjs/Observable';
import { Component, OnInit } from '@angular/core';

import { RoundService } from './../services/round.service';
import { TipService } from './../services/tip.service';

@Component({
    selector: 'app-current-tips-ladder',
    templateUrl: './current-tips-ladder.component.html',
    styleUrls: ['./current-tips-ladder.component.scss']
})

export class CurrentTipsLadderComponent implements OnInit {

    public users = [];
    public isLoading = true;
    public roundData = { number: null, id: null};

    constructor(private roundService: RoundService,
                private tipService: TipService) {}

    public ngOnInit() {
        this.roundService.getRoundTotal().subscribe(res => {
            if (res[0] && res[0]._id) {
                this.roundData = res[0]._id;
                this.tipService.allTipsForRound(this.roundData.id).subscribe(result => {
                    this.users = result;
                }, error => console.log(error),
                () => this.isLoading = false);
            }
        }, error => console.log(error),
        () => this.isLoading = false);
    }

}
