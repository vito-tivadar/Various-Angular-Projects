import { HttpClient } from '@angular/common/http';
import { loginObject, userTokenInfo } from '../types/object-types';
import { catchError } from 'rxjs';
import { handleError } from '../errors/errors';
import { Injectable } from '@angular/core';
import jwtDecode from 'jwt-decode';

@Injectable()
export class AuthService {
  constructor(private http: HttpClient) {}

  private loginURL: string = 'http://localhost:3000/api/authenticate';

  login(loginInfo: loginObject) {
    return this.http.post(this.loginURL, loginInfo).pipe(catchError(handleError));
  }

  logout() {
    localStorage.removeItem('token');
  }

  isLoggedIn() {
    let token = localStorage.getItem('token');
    if (token == null || token == undefined) return false;

    let decodedToken = jwtDecode(token) as userTokenInfo;

    if (decodedToken.expiresAt <= Date.now()) {
      // login session expired
      console.log('expired');
      localStorage.removeItem('token');
      return false;
    } else return true;
  }

  get currentUser(): userTokenInfo | null {
    let token = localStorage.getItem('token');
    if (token == null || token == undefined) return null;
    else {
      let decodedToken = jwtDecode(token) as userTokenInfo;
      //check for token expiration
      return decodedToken;
    }
  }
}
