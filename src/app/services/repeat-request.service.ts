import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { interval, of } from 'rxjs';
import { switchMap, takeWhile, catchError } from 'rxjs/operators';
import { REPEAT_INTERVAL } from '../helpers/intervals';
import { BASE_URL } from '../enviroment/enviroment';

@Injectable({
  providedIn: 'root',
})
export class RepeatRequestService {
  constructor(private http: HttpClient) {}

  startRequest() {
    return interval(REPEAT_INTERVAL).pipe(
      switchMap(() => this.makeHttpRequest()),
      takeWhile((response) => response !== 2 && response !== 3, true)
    );
  }

  private makeHttpRequest() {
    return this.http.get<number>(BASE_URL).pipe(
      catchError((error) => {
        return of(null);
      })
    );
  }
}
