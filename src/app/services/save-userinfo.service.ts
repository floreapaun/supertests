import { Injectable } from '@angular/core';
import { HttpClient} from '@angular/common/http'
@Injectable({providedIn:'root'})


export class SaveUserinfoService {


    constructor( private http: HttpClient  ){ 

    }


    saveDataToServer(user){
        console.log('test data ');
        this.http.post('https://ipriksha-be1b8.firebaseio.com/user.json',user).subscribe(res=>{
          // console.log(res);
        })
      }

      saveScoreDataToServer(user){
        this.http.post('https://ipriksha-be1b8.firebaseio.com/user.json',user).subscribe(res=>{
          // console.log(res);
        })
      }



}