import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { User } from '../shared/models/user.model';
import { Observable } from 'rxjs/Observable';
import { Tip } from '../shared/models/tip.model';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  constructor(private http: HttpClient) {}

  register(user: User): Observable<User> {
    return this.http.post<User>('/api/user', user);
  }

  login(credentials): Observable<any> {
    return this.http.post<any>('/api/login', credentials);
  }

  newUserTips(tip: Tip): Observable<Tip> {
    return this.http.post<any>(`/api/user/${tip.ownerId}/tips/${tip.roundId}`, tip.tips);
  }

  getUsers(): Observable<User[]> {
    return this.http.get<User[]>('/api/users');
  }

  countUsers(): Observable<number> {
    return this.http.get<number>('/api/users/count');
  }

  addUser(user: User): Observable<User> {
    return this.http.post<User>('/api/user', user);
  }

  getUser(id: string): Observable<User> {
    return this.http.get<User>(`/api/user/${id}`);
  }

  editUser(user: User): Observable<User> {
    return this.http.put<User>(`/api/user/${user._id}`, user);
  }

  deleteUser(user: User): Observable<string> {
    return this.http.delete(`/api/user/${user._id}`, { responseType: 'text' });
  }

  getUserTotal(): Observable<any> {
    return this.http.get<any>('/api/users/ladder');
  }
}
