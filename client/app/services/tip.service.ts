import { Injectable } from '@angular/core';
import { Http, Headers, RequestOptions } from '@angular/http';

import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';

@Injectable()
export class TipService {
    
    private headers = new Headers({ 'Content-Type': 'application/json', 'charset': 'UTF-8 '});
    private options = new RequestOptions({ headers: this.headers });

    constructor(private http: Http) {}

    getTipByRound(id): Observable<any> {
        return this.http.get(`/api/tip/${id}`).map(res => res.json());
    }

    addTip(tips): Observable<any> {
        return this.http.post('/api/tip', JSON.stringify(tips), this.options);
    }

    getTotal(id): Observable<any> {
        return this.http.get('/api/tips/total').map(res => res.json());
    }

    getUserTipsForRound(userId, roundId): Observable<any> {
        return this.http.get(`/api/user/${userId}/round/${roundId}`).map(res => res.json());
    }

    editTips(data): Observable<any> {
        return this.http.put(`/api/tip/${data._id}`, JSON.stringify(data), this.options);
    }
}