import { HttpClient, HttpHeaders } from '@angular/common/http';
import { catchError } from 'rxjs';
import { handleError } from '../errors/errors';
import { Injectable } from '@angular/core';

@Injectable()
export class OrdersService {
  constructor(private http: HttpClient) {}

  private ordersURL: string = 'http://localhost:3000/api/orders';

  getOrders() {
    let token = localStorage.getItem('token');
    return this.http
      .get(this.ordersURL, {
        headers: new HttpHeaders({
          Bearer: token || '',
        }),
      })
      .pipe(catchError(handleError));
  }
}
