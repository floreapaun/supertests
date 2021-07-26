import { Injectable } from '@angular/core';
import { BehaviorSubject, Subject } from 'rxjs';

/*
The observable where we will subscribe the loader at root component

  ngOnInit() {
    this.loaderService.status.subscribe((val: boolean) => {
      this.loader = val;
    })
  }

In HTML

  <router-outlet>
  </router-outlet>`
  <div class="loader" *ngIf="loader">
    <div class="wheel">
    </div>
  </div>
*/

@Injectable({
  providedIn: 'root',
})
export class LoaderService {
  public status: Subject<boolean> = new Subject<boolean>();
  currentStatus: boolean = false;

  constructor() {}

  /* Shows or hides loader with true or false parameter value. */
  show(value: boolean) {
      this.status.next(value);
      this.currentStatus = value;
  }

}

