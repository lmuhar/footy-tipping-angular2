import { Injectable } from '@angular/core';
import { Http, Headers, RequestOptions } from '@angular/http';

import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';

@Injectable()
export class EmailService {

    private headers = new Headers({ 'Content-Type': 'application/json', 'charset': 'UTF-8' });
    private options = new RequestOptions({ headers: this.headers });

    constructor(private http: Http) { }

    testEmail(data): Observable<any> {
        return this.http.post('/api/send-email', JSON.stringify(data), this.options);
    }

    enteredTipsEmail(data): Observable<any> {
        return this.http.post('/api/enter-tips-success', JSON.stringify(data), this.options);
    }
}
