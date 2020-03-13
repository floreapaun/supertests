import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
 import { StorageService } from 'src/app/services/storage.service';
import { LoaderService } from 'src/app/services/loader.service';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { CustomPopupModalComponent } from "../../common/custom-popup-modal/custom-popup-modal.component";
import { TitleService } from 'src/app/services/title.service';
import { AuthenticationService } from 'src/app/services/authentication.service';

@Component({
  selector: 'app-test', 
  templateUrl: './test.component.html',
  styleUrls: ['./test.component.scss']
})
export class TestComponent implements OnInit {
  timeRem : string = '00:00:00';
  question : any ;
  itr = 0;
  user;
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
              private loaderSer: LoaderService,
              private modalService: NgbModal,
              private authenticationService: AuthenticationService,
              private TitleService:TitleService) { }

  ngOnInit() {
   // let timer =  (1 * 60 + 30 )* 60 + 20;   // (2 h * 60 + 30 m )* 60 + 20 s; // todo from test json
    //this.user = JSON.parse(this.storage.getData('user'));
    this.user = this.authenticationService.currentUserValue; 

    
    //get test object from storage
    this.test = JSON.parse(localStorage.getItem('test'));
    console.log("test.component: this.test: " + this.test);
    console.log(this.test);

    this.getQuestions();
  }

  answeredValue(val: string) {
    const index = this.answerList.findIndex(e => {
      return e.no == this.itr;
    });
    if (index > -1) {
      this.answerList[index].answer = val;
    } else {
      this.answerList.push({ no: this.itr, answer: val });
    }
    if(this.questionList[this.itr].answer == val){
      this.testMarks++;
    }
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

  finishTest(): void {
    if(this.answerList.length == this.questionList.length){
      this.finalSubmit();
    }else{
      // if(confirm(`You have  ${this.questionList.length - this.answerList.length} question un-answered`)){
      //   this.finalSubmit();
      //  }
      const modalRef = this.modalService.open(CustomPopupModalComponent);
      modalRef.componentInstance.message = `Ai  ${this.questionList.length - this.answerList.length} intrbari la care nu ai raspuns`;
      modalRef.componentInstance.passData.subscribe(res=>{
        if(res){
          this.finalSubmit();
        }
      })
    }
   
   
  }

  finalSubmit():void{
    let result = {
      marks: this.testMarks,
      total: this.questionList.length,
       unanswered : this.questionList.length - this.answerList.length,
       answerList:this.answerList
    };
    this.storage.setData('result', JSON.stringify(result));
    this.navigateToScore();
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

  saveAndNext(): void {
   ++this.itr;

    if (this.itr >= this.questionList.length) {
      const result = {
        marks: this.testMarks,
        total: this.questionList.length,
        unanswered : this.questionList.length - this.answerList.length,
        answerList:this.answerList
      };
      this.storage.setData('result', JSON.stringify(result));
      this.navigateToScore();
    } else {
      this.currentAnswer = '';
      this.question = this.questionList[this.itr];
    }
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
    }

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
      },1000);

  }

  ngOnDestroy(){
    clearInterval(this.clearint);
  }

  get title() {
    return this.TitleService.getValue();
  }


}
