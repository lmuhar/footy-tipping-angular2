import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { Observable } from 'rxjs/Observable';

@Injectable({
  providedIn: 'root'
})
export class AflLadderService {
  constructor(private http: HttpClient) {}

  getAflLadder(): Observable<any> {
    return this.http.get<any>('/api/afl-ladder');
  }

  newLadder(data): Observable<any> {
    const item = { data: data };
    return this.http.post<any>('/api/scraped-ladder', item);
  }

  editLadder(data, id): Observable<string> {
    return this.http.put(`/api/scraped-ladder/${id}`, data, { responseType: 'text' });
  }

  getLatestLadder(): Observable<any> {
    return this.http.get<any>('/api/scraped-ladder');
  }
}
