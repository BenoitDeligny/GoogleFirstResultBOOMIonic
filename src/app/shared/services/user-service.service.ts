import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../../environments/environment';
import { tap } from 'rxjs/operators';
import { User } from '../../models/user';
import { tokenName } from '@angular/compiler';

@Injectable({
  providedIn: 'root'
})
export class UserServiceService {

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
}
