import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { StorageService } from 'src/app/services/storage.service';


@Component({
  selector: 'app-quiz-type',
  templateUrl: './quiz-type.component.html',
  styleUrls: ['./quiz-type.component.scss']
})
export class QuizTypeComponent implements OnInit {
  typeTestList:  any;
  user  = {
    name: '',
    email: '',
    test : '' 
  };
  constructor(private router: Router,
    private http: HttpClient,
    private storage: StorageService
   ) { }

  ngOnInit() {
    this.user = JSON.parse(this.storage.getData('user'));
    this.user.test = '';
    this.getTestList();
  }

  getTestList() : void {
    this.http.get('https://raw.githubusercontent.com/acharyaks90/questionjson/master/json/testlist.json')
    .subscribe(res => {
      this.typeTestList = res['testlist'];
    });
  }


  navigateToNotification(){
    if ( this.user.test != '' ){
      this.storage.setData('user', JSON.stringify(this.user));
      this.router.navigate(['/notification']);
    } else {
      alert('Please fill all information!');
    }
  }

  testTypeTap(val:string){
    this.user.test = val;
  }


  submit(submitform){
    this.navigateToNotification();
  }


}
