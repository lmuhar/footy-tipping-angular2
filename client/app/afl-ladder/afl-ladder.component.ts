import { Observable } from 'rxjs/Observable';
import { Component, OnInit } from '@angular/core';

import { AflLadderService} from './../services/afl-ladder.service';

@Component({
    selector: 'app-afl-ladder',
    templateUrl: './afl-ladder.component.html',
    styleUrls: ['./afl-ladder.component.scss']
})

export class AflLadderComponent implements OnInit {

    public data = [];
    public isLoading = true;

    constructor(private aflLadderService: AflLadderService) { }

    public ngOnInit() {
        this.aflLadderService.getLatestLadder().subscribe(res => {
            this.data = res;
        }, error => this.isLoading = false,
        () => this.isLoading = false);
    }
}
