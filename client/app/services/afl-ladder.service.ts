import { Injectable } from '@angular/core';
import { Http, Headers, RequestOptions } from '@angular/http';

import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';

@Injectable()
export class AflLadderService {

    constructor(private http: Http) { }

    getAflLadder(): Observable<any> {
        return this.http.get('/api/afl-ladder').map(res => res.json());
    }
}
