import { throwError } from 'rxjs';
import { HttpResponse, HttpResponseBase } from '@angular/common/http';

export class GlobalError {
  public error: any;
  constructor(response?: any) {
    this.error = response.error;
  }
  status: number = 0;
  description: string = 'Global Application Error.';
}

export class BadInputError extends GlobalError {
  override status: number = 400;
  override description: string = 'The request could not be understood by the server due to incorrect syntax.';
}

export class UnauthorizedError extends GlobalError {
  override status: number = 401;
  override description: string = 'Indicates that the request requires user authentication information.';
}

export class ForbiddenError extends GlobalError {
  override status: number = 403;
  override description: string = 'The client does not have access rights to the content.';
}

export class NotFoundError extends GlobalError {
  override status: number = 404;
  override description: string = 'The server can not find the requested resource.';
}

export class RateLimitError extends GlobalError {
  override status: number = 429;
  override description: string = 'TThe user has sent too many requests in a given amount of time (rate limiting).';
}

export function handleError(response: Response) {
  if (response.status == 400) return throwError(() => new BadInputError(response));
  if (response.status == 401) return throwError(() => new UnauthorizedError(response));
  if (response.status == 403) return throwError(() => new ForbiddenError(response));
  if (response.status == 404) return throwError(() => new NotFoundError(response));
  if (response.status == 429) return throwError(() => new RateLimitError(response));
  else return throwError(() => new GlobalError(response));
}
