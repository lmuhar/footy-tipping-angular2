import { Injectable } from '@angular/core';
import { Http, Headers, RequestOptions } from '@angular/http';

import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';

@Injectable()
export class AflLadderService {

    private headers = new Headers({ 'Content-Type': 'application/json', 'charset': 'UTF-8' });
    private options = new RequestOptions({ headers: this.headers });

    constructor(private http: Http) { }

    getAflLadder(): Observable<any> {
        return this.http.get('/api/afl-ladder').map(res => res.json());
    }

    newLadder(data): Observable<any> {
        const item = {data: data};
        return this.http.post('/api/scraped-ladder', JSON.stringify(item), this.options);
    }

    editLadder(data, id): Observable<any> {
        return this.http.put(`/api/scraped-ladder/${id}`, JSON.stringify(data), this.options);
    }

    getLatestLadder(): Observable<any> {
        return this.http.get('/api/scraped-ladder').map(res => res.json());
    }
}
