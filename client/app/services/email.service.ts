import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { Observable } from 'rxjs/Observable';
import { TipsSavedEmail } from '../shared/models/email.model';

@Injectable({
  providedIn: 'root'
})
export class EmailService {
  constructor(private http: HttpClient) {}

  enteredTipsEmail(data: TipsSavedEmail): Observable<any> {
    return this.http.post('/api/enter-tips-success', data);
  }
}
