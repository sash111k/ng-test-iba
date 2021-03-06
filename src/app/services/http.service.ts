import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { catchError } from 'rxjs/operators';

@Injectable({
  providedIn: 'root',
})
export class HttpService {
  constructor(private http: HttpClient) {}

  get(url: string, params?: any): Observable<any> {
    return this.http.get(url, params).pipe(
      catchError((err) => {
        console.error(err);
        return of({
          error: true,
          statusCode: err.status,
        });
      })
    );
  }

  post(url: string, payload: any, params?: any): Observable<any> {
    return this.http.post(url, payload, params).pipe(
      catchError((err) => {
        console.error(err);
        return of({
          error: true,
          statusCode: err.status,
        });
      })
    );
  }
}
