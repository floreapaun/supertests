import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { DatamaniputationService } from './datamaniputation.service';

@Injectable(
  {
  providedIn: 'root'
}
)
export class AuthService {

  constructor( private dmServe: DatamaniputationService) { }

  name(){
    const subject = new Subject();

    // setTimeout(() => {
    //   subject.next(3);
    // }, 3);
    this.dmServe.name().subscribe(res=>{
      subject.next(res);
    })

    return subject.asObservable();
   // return true;
  }
}
