import { ErrorHandler } from '@angular/core';

export class GlobalErrorHandler implements ErrorHandler {
  handleError(error: any): void {
    // globaly handle error - toast notidication,...
    console.log('GlobalError', error);
  }
}
