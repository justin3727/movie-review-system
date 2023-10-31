import { Injectable } from '@angular/core';
import { fromEvent, timer, Observable } from 'rxjs';
import { switchMap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class InactivityService {
  private inactivityTimeout: number = 9000; 
  private inactivityTimer$: Observable<any>;

  constructor() {
    const activity$ = fromEvent(document, 'mousemove'); 

    this.inactivityTimer$ = activity$.pipe(
      switchMap(() => timer(this.inactivityTimeout))
    );
  }

  startTrackingInactivity(): Observable<any> {
    return this.inactivityTimer$;
  }
}
