import { Injectable } from '@angular/core';
import { Http, Headers, RequestOptions } from '@angular/http';

import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';

@Injectable()
export class RoundService {

    private headers = new Headers({ 'Content-Type': 'application/json', 'charset': 'UTF-8' });
    private options = new RequestOptions({ headers: this.headers });

    constructor(private http: Http) { }

    getRounds(): Observable<any> {
        return this.http.get('/api/rounds').map(res => res.json());
    }

    countRounds(): Observable<any> {
        return this.http.get('/api/rounds/count').map(res => res.json());
    }

    addRound(round): Observable<any> {
        return this.http.post('/api/round', JSON.stringify(round), this.options);
    }

    getRound(id): Observable<any> {
        return this.http.get(`/api/round/${id}`).map(res => res.json());
    }

    getRoundWithIdNumber(): Observable<any> {
        return this.http.get(`/api/rounds/list`).map(res => res.json());
    }

    editRound(round): Observable<any> {
        return this.http.put(`/api/round/${round._id}`, JSON.stringify(round), this.options);
    }

    deleteRound(round): Observable<any> {
        return this.http.delete(`/api/round/${round._id}`, this.options);
    }

    getRoundTotal(): Observable<any> {
        return this.http.get('/api/rounds/current/total').map(res => res.json());
    }
}
