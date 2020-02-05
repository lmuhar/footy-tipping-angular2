import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { Observable } from 'rxjs/Observable';

@Injectable({
  providedIn: 'root'
})
export class EmailService {
  constructor(private http: HttpClient) {}

  testEmail(data): Observable<any> {
    return this.http.post('/api/send-email', data);
  }

  enteredTipsEmail(data): Observable<any> {
    return this.http.post('/api/enter-tips-success', data);
  }
}
