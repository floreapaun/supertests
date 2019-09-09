import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable(
  {
  providedIn: 'root'
}
)
export class DatamaniputationService {

  constructor() { }

  name() {
    const subject = new Subject();

    setTimeout(() => {
      subject.next('My user');
    }, 3000);

    return subject.asObservable();
    // return true;
  } 
 
}
