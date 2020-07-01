import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { StorageMobService } from '../../storage-mob.service';
import { Page } from 'tns-core-modules/ui/page/page';
@Component({
  selector: 'app-review',
  templateUrl: './review.component.html',
  styleUrls: ['./review.component.scss']
})
export class ReviewComponent implements OnInit {

  timeRem : string = '00:00:00';
  question : any ;
  itr = 0;
  user;
  questionList =  [];
  answerList = [];
  currentAnswer : any;
  testMarks: number = 0 ;
  minutes : number = 0;
  loaderFlag : boolean = false;

  constructor(private router: Router, 
              private http: HttpClient,
              private storage: StorageMobService,
              private page: Page
             ) { }

  ngOnInit() {
   // let timer =  (1 * 60 + 30 )* 60 + 20;   // (2 h * 60 + 30 m )* 60 + 20 s; // todo from test json
   this.page.actionBarHidden = true;
   this.user = JSON.parse(this.storage.getData('user'));
   this.answerList = JSON.parse(this.storage.getData('result')).answerList;
   this.getQuestions();
  }



  changeSection():any{
    
  }




  previousQuestion(): void {
    if (this.itr > 0) {
      --this.itr;
      this.currentAnswer = '';
      this.question = this.questionList[this.itr];
      const index = this.answerList.findIndex(e => {
        return e.no == this.itr;
      });
      if (index > -1) {
        this.currentAnswer = this.answerList[this.itr].answer;
      }
    }
  }


  questionLoad (index){
    this.itr = index;
    this.currentAnswer = '';
    this.question = this.questionList[this.itr];
    const ind = this.answerList.findIndex(e => {
      return e.no == this.itr;
    });
    if (ind > -1) {
      this.currentAnswer = this.answerList[this.itr].answer;
    }
  }

  checkAnswered(index:number):boolean{
    const ind = this.answerList.findIndex(e => {
      return e.no == index;
    });
    if (ind > -1) {
      return true;
    }else{
      return false;
    }
  }

  next(): void {
   ++this.itr;

    if (this.itr >= this.questionList.length) {
     
    } else {
      this.currentAnswer = '';
      this.question = this.questionList[this.itr];
      const index = this.answerList.findIndex(e => {
        return e.no == this.itr;
      });
      if (index > -1) {
        this.currentAnswer = this.answerList[this.itr].answer;
      }
    }
  }


  getQuestions(): void {
    this.loaderFlag = true;
    this.http.get(`https://raw.githubusercontent.com/acharyaks90/questionjson/master/json/questions${this.user.test.name}.json`)
    .subscribe(res => {
      this.loaderFlag = false;
      this.questionList = res['TEST'];
      this.question = this.questionList[0];
      this.minutes = this.user.test.duration;
      let timer =  this.minutes * 60;   // (2 h * 60 + 30 m )* 60 + 20 s; // todo from test json
      let sec =0,totalmin =0 , hour =0 , min  = 0;
      sec = timer % 60;
      totalmin = Math.floor(timer / 60);
      hour = Math.floor(totalmin / 60);
      min = totalmin % 60;
     
     this.timeRem = `${hour}:${min}:${sec}`;

    
  
    });
  }

  

  tryAgainTest(){
   
      this.storage.removeData('result');
      delete this.user.test
      this.storage.setData('result', JSON.stringify(this.user));
      this.router.navigate(['/quiz']);
    
  }

  correctAnswer(answer):number{
    return parseInt(answer)+1;
  }

  ngOnDestroy(){
   
  }

}
