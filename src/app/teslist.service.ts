import { Injectable } from '@angular/core';


@Injectable({
  providedIn: 'root'
})
export class TeslistService {

  constructor() { }

  createDb() {
    let tests = [
      { id: 1, name: 'ANGULAR', duration:30 ,question:10},
      { id: 2, name: 'HTET', duration: 30, question: 10 },
      { id: 3, name: 'CTET', duration: 30, question: 10 },
      { id: 4, name: 'JAVASCRIPT', duration: 10, question: 10 },
      { id: 5, name: 'YOGA', duration: 10, question: 10}
    ];

    return { tests };
  }
}
