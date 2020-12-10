import { Injectable } from '@angular/core';
import { HttpClient} from '@angular/common/http'
import { environment } from './../../environments/environment';

@Injectable({providedIn:'root'})
export class SaveUserinfoService {
    url = (environment.production) ? 
	environment.backend_prod_url : environment.backend_dev_url;

    constructor( private http: HttpClient  ){ 

    }

    saveDataToServer(user){
        this.http.post('https://ipriksha-be1b8.firebaseio.com/user.json',user).subscribe(res=>{
          // console.log(res);
        })
      }

    saveScoreDataToServer(data){
      this.http.post(`${this.url}/user/saveFinishedTest`, data).subscribe(res=>{
         console.log(res);
      })
    }

}
