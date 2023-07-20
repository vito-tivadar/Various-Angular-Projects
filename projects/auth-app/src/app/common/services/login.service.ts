import { HttpClient } from '@angular/common/http';
import { loginObject } from '../types/object-types';
import { catchError } from 'rxjs';
import { handleError } from '../errors/errors';
import { Injectable } from '@angular/core';

@Injectable()
export class LoginService {
  constructor(private http: HttpClient) {}

  private loginURL: string = 'http://localhost:3000/login';

  login(loginInfo: loginObject) {
    console.log(loginInfo);
    return this.http.post(this.loginURL, loginInfo).pipe(catchError(handleError));
  }
}
