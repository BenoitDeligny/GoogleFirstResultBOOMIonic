import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../../environments/environment';
import { tap } from 'rxjs/operators';
import { tokenName } from '@angular/compiler';
import { Observable } from 'rxjs';
import { User } from '../models/user';

@Injectable({
  providedIn: 'root'
})
export class UserServiceService {

  currentUser: User;

  constructor(private http: HttpClient) { }

  getToken() {
    return localStorage.getItem('token');
  }

  login(user: User) {
    return this.http.post(environment.DATABASE_URL + '/login', user, { observe: 'response' }).pipe(tap((response) => {
      const token = response.headers.get('Authorization');
      window.localStorage.setItem(token, token);
    }));
  }

  getUserById(id: number): Observable<User> {
    return this.http.get<User>(environment.DATABASE_URL + `/users/${id}`);
  }

  // setUser(){
  //   this.getUserById()
  // }
}
