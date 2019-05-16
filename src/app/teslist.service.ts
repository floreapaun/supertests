import { Injectable } from '@angular/core';
import { InMemoryDbService } from 'angular-in-memory-web-api';
@Injectable({
  providedIn: 'root'
})
export class TeslistService  implements InMemoryDbService{

  constructor() { }

  createDb() {
    let tests = [
      { id: 1, name: 'ANGULAR' },
      { id: 2, name: 'HTET' },
      { id: 3, name: 'CTET' },
      { id: 4, name: 'JAVASCRIPT' }
    ];
    return { tests };
  }
}
