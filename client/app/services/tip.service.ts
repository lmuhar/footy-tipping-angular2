import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { Observable } from 'rxjs/Observable';
import { Tip } from '../shared/models/tip.model';
import { Round } from '../shared/models/round.model';

@Injectable({
  providedIn: 'root'
})
export class TipService {
  constructor(private http: HttpClient) {}

  getTipByRound(id): Observable<Tip> {
    return this.http.get<Tip>(`/api/tip/${id}`);
  }

  addTip(tips: Tip): Observable<Tip[]> {
    return this.http.post<Tip[]>('/api/tip', tips);
  }

  getTotal(id): Observable<any> {
    return this.http.get<any>('/api/tips/total');
  }

  getUserTipsForRound(userId, roundId): Observable<any> {
    return this.http.get<any>(`/api/user/${userId}/round/${roundId}`);
  }

  editTips(data: Tip): Observable<string> {
    return this.http.put(`/api/tip/${data._id}`, data, { responseType: 'text' });
  }

  allTipsForRound(roundId): Observable<Tip[]> {
    return this.http.get<Tip[]>(`/api/tips/roundId/${roundId}`);
  }

  updateTipsWithResults(tipData: Round): Observable<string> {
    return this.http.put(`/api/tips/roundId/${tipData._id}/results`, tipData.games, { responseType: 'text' });
  }
}
