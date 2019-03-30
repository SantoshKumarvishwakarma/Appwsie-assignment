import { Injectable } from '@angular/core';

import {HttpClient, HttpErrorResponse, HttpHeaders} from '@angular/common/http';
import {Observable, throwError} from 'rxjs';
import {catchError} from 'rxjs/operators';
@Injectable({
  providedIn: 'root'
})
export class HighlightService {
  GET_HIGHLIGHT_URL = 'https://api.myjson.com/bins/sn8yy';

  constructor(private httpClient: HttpClient) { }

  errorHandler(error: HttpErrorResponse){
    return throwError(error);
  }

  getHighlight(): Observable<any>  {
    return this.httpClient.get(`${this.GET_HIGHLIGHT_URL}`).pipe(catchError(this.errorHandler) );
  }
}
