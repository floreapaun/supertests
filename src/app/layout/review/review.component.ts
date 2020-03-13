import { Component, OnInit } from '@angular/core';
import { TitleService } from 'src/app/services/title.service';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { StorageService } from 'src/app/services/storage.service';
import { LoaderService } from 'src/app/services/loader.service';
import { AuthenticationService } from 'src/app/services/authentication.service';

@Component({
  selector: 'app-review',
  templateUrl: './review.component.html',
  styleUrls: ['./review.component.scss']
})
export class ReviewComponent implements OnInit {

  timeRem : string = '00:00:00';
  question : any ;
  itr = 0;
  user: any;
  test: any;
  questionList =  [];
  answerList = [];
  currentAnswer : any;
  testMarks: number = 0 ;
  minutes : number = 0;
  clearint:any;
  constructor(private router: Router, 
              private http: HttpClient,
              private storage: StorageService,
              private authenticationService: AuthenticationService,
              private TitleService: TitleService,
              private loaderSer: LoaderService) { }

  ngOnInit() {
   // let timer =  (1 * 60 + 30 )* 60 + 20;   // (2 h * 60 + 30 m )* 60 + 20 s; // todo from test json

    //this.user = JSON.parse(this.storage.getData('user'));
    this.user = this.authenticationService.currentUserValue; 

    //get test object from storage
    this.test = JSON.parse(localStorage.getItem('test'));

    this.answerList = JSON.parse(this.storage.getData('result')).answerList;
    this.getQuestions();
  }

  deleteUser() {
    this.authenticationService.deleteUser();
    
    //go to a route where after user sign in checking redirects to login 
    this.router.navigate(['/notification']);
  }



  changeSection():any{
    
  }

  clearResponse():void{
    const index = this.answerList.findIndex(e => {
      return e.no == this.itr;
    });
    if (index > -1) {
      if (this.questionList[this.itr].answer == this.currentAnswer) {
        this.testMarks--;
      }
      this.answerList.splice(index, 1);
    }
  }

 

 

  navigateToScore(): void {

    this.router.navigate(['/score']);
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
  correctAnswer(answer):number{
    return parseInt(answer)+1;
  }


  getQuestions(): void {
    this.loaderSer.show(true);
    
    /*
    this.http.get(`https://raw.githubusercontent.com/acharyaks90/questionjson/master/json/questions${this.test.name}.json`)
    .subscribe(res => {
      this.loaderSer.show(false);
      this.questionList = res['TEST'];
      this.question = this.questionList[0];
      this.minutes = this.test.duration;
      let timer =  this.minutes * 60;   // (2 h * 60 + 30 m )* 60 + 20 s; // todo from test json
  
      this.clearint = setInterval(()=>{
        let sec =0,totalmin =0 , hour =0 , min  = 0;
       sec = timer % 60;
       totalmin = Math.floor(timer / 60);
       hour = Math.floor(totalmin / 60);
       min = totalmin % 60;
      
      this.timeRem = `${hour}:${min}:${sec}`
      timer--;
      if(timer == 0){
        clearInterval(this.clearint);
        alert('Test time is over.')
        this.finalSubmit();
      }
      },1000)
    });
    */

    let res = 
    
    {
        "TEST": [
            {
                "question": "What is Flexbox?",
                "answer": "2",
                "options": [
                    "A Tag HTML",
                    "a HTML alignment",
                    "A layout specification for css",
                    "A HTML attribute"
                ]
            },
            {
                "question": "Which is the purpose of translate property on CSS3?",
                "answer": "2",
                "options": [
                    "It is not a CSS property",
                    "It is for translate texts",
                    "It is to reposition an element in horizontal and veritical direction",
                    "None"
                ]
            },
            {
                "question": " What mean of the a in RGBa?",
                "answer": "1",
                "options": [
                    "alpha",
                    "alpha color",
                    "arrow",
                    "any"
                ]
            },
            {
                "question": "Can you set multiple box-shadows?",
                "answer": "1",
                "options": [
                    "Yes",
                    "No"
                ]
            },
            {
                "question": "How do four values work on padding",
                "answer": "3",
                "options": [
                    "top, bottom, left, right",
                    "up, down, front, behind",
                    "top, right, bottom, left",
                    "left, right, right, left"
                ]
            },
            {
                "question": "Which of the following property is used to underline color change.",
                "answer": "2",
                "options": [
                    "text-decoration",
                    "text-decoration-color",
                    "text-decoration-style",
                    "text-decoration-line"
                ]
            },
            {
                "question": "Can we set the float center?",
                "answer": "2",
                "options": [
                    "Yes",
                    "No"
                ]
            },
            {
                "question": "In CSS, what is the correct option to select only the heading with class name 'success'?",
                "answer": "2",
                "options": [
                    "#success { }",
                    ".success { }",
                    "success { }",
                    ".class success {}"
                ]
            }
        ]
    };

      this.loaderSer.show(false);
      this.questionList = res['TEST'];
      this.question = this.questionList[0];
      
      
      /*  
      this.minutes = this.test.duration;
      let timer =  this.minutes * 60;   // (2 h * 60 + 30 m )* 60 + 20 s; // todo from test json
  
      let sec = 0, totalmin = 0 , hour = 0 , min  = 0;
      sec = timer % 60;
      totalmin = Math.floor(timer / 60);
      hour = Math.floor(totalmin / 60);
      min = totalmin % 60;
      
      this.timeRem = `${hour}:${min}:${sec}`
      */

  }

  

  tryAgainTest(){
   
      this.storage.removeData('result');
      delete this.test;
      this.storage.setData('result', JSON.stringify(this.user));
  
      this.router.navigate(['/quiz']);
      // this.router.navigate(['/']);
    
  }

  ngOnDestroy(){
   
  }

  get title() {
    return this.TitleService.getValue();
  }

}
