import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';

import { Round } from '../shared/models/round.model';

@Injectable()
export class RoundService {
  constructor(private http: HttpClient) {}

  getRounds(): Observable<Round[]> {
    return this.http.get<Round[]>('/api/rounds');
  }

  countRounds(): Observable<number> {
    return this.http.get<number>('/api/rounds/count');
  }

  addRound(round: Round): Observable<Round> {
    return this.http.post<Round>('/api/round', round);
  }

  getRound(id): Observable<Round> {
    return this.http.get<Round>(`/api/round/${id}`);
  }

  getRoundWithIdNumber(): Observable<Round[]> {
    return this.http.get<Round[]>(`/api/rounds/list`);
  }

  editRound(round: Round): Observable<string> {
    return this.http.put(`/api/round/${round._id}`, round, { responseType: 'text' });
  }

  deleteRound(round: Round): Observable<string> {
    return this.http.delete(`/api/round/${round._id}`, { responseType: 'text' });
  }

  getRoundTotal(): Observable<any> {
    return this.http.get<any>('/api/rounds/current/total');
  }
}
