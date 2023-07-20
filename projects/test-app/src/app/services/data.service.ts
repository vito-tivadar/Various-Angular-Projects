import { Inject, Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { catchError } from "rxjs/operators";
import { AppError } from "../common/errors/app-error";
import { NotFoundError } from "./../common/errors/not-found-error";
import { throwError, map } from "rxjs";
import { BadInput } from "../common/errors/bad-input.error";

export class DataService {
  constructor(private url: string, private http: HttpClient) {}

  getAll() {
    return this.http.get(this.url).pipe(catchError(this.handleError));
  }

  create(resource: any) {
    return this.http.post(this.url, JSON.stringify(resource)).pipe(catchError(this.handleError));
  }

  update(resource: any) {
    return this.http.patch(this.url + "/" + resource.id, JSON.stringify(resource));
  }

  delete(id: any) {
    return this.http.delete(this.url + "/" + id).pipe(catchError(this.handleError));
  }

  private handleError(error: Response) {
    if (error.status == 404) return throwError(() => new NotFoundError());
    if (error.status == 400) return throwError(() => new BadInput());
    else return throwError(() => new AppError());
  }
}
