import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { StorageService } from 'src/app/services/storage.service';
import { AuthenticationService } from 'src/app/services/authentication.service';


@Component({
  selector: 'app-quiz-type',
  templateUrl: './quiz-type.component.html',
  styleUrls: ['./quiz-type.component.scss']
})
export class QuizTypeComponent implements OnInit {
  typeTestList:  any;
  user: any;
  test: any;
  constructor(private router: Router,
    private http: HttpClient,
    private storage: StorageService,
    private authenticationService: AuthenticationService,
   ) { }

  ngOnInit() {
    this.user = this.authenticationService.currentUserValue; 
    this.getTestList();
  }

  getTestList() : void {
    
    console.log("quiz-type.component: getTestList() called");
    /*
    this.http.get('https://raw.githubusercontent.com/acharyaks90/questionjson/master/json/testlist.json')
    .subscribe(res => {
      this.typeTestList = res['testlist'];
    });
    */

    let res = 
       
    {
        "testlist": [
            {
                "id": 1,
                "name": "HTET",
                "duration": 30,
                "question": 10
            },
            {
                "id": 2,
                "name": "CTET",
                "duration": 30,
                "question": 10
            },
            {
                "id": 3,
                "name": "ANGULAR",
                "duration": 30,
                "question": 10
            },
            {
                "id": 4,
                "name": "JAVASCRIPT",
                "duration": 10,
                "question": 10
            },
            {
                "id": 5,
                "name": "CSS",
                "duration": 5,
                "question": 2
            },
            {
                "id": 6,
                "name": "YOGA",
                "duration": 10,
                "question": 10
            },
           {
                "id": 7,
                "name": "JAVA",
                "duration": 5,
                "question": 5
            },
            {
                "id": 7,
                "name": "SQL",
                "duration": 5,
                "question": 5
            }
        ]
    }

    this.typeTestList = res['testlist'];
  }


  navigateToNotification(){
    if ( this.test != '' ){
    
      //put object of the selected test to storage for later use in the application
      localStorage.setItem('test', JSON.stringify(this.test));
      
      this.router.navigate(['/notification']);
    } else {
      alert('Alege tipul testului!');
    }
  }

  /*
  testTypeTap(val:string){
    this.user.test = val;
  }
  */


  submit(submitform){
    this.navigateToNotification();
  }


}
