import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
 import { StorageService } from 'src/app/services/storage.service';
import { LoaderService } from 'src/app/services/loader.service';

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
  questionList =  [];
  answerList = [];
  currentAnswer : any;
  testMarks: number = 0 ;
  constructor(private router: Router, 
              private http: HttpClient,
              private storage: StorageService,
              private loaderSer: LoaderService) { }

  ngOnInit() {
    let timer =  (2 * 60 + 30 )* 60 + 20;
    setInterval(()=>{
      let sec =0,totalmin =0 , hour =0 , min  = 0;
     sec = timer % 60;
     totalmin = Math.floor(timer / 60);
     hour = Math.floor(totalmin / 60);
     min = totalmin % 60;
    
    this.timeRem = `${hour}:${min}:${sec}`
    timer--;
    },1000)
   
    this.user = JSON.parse(this.storage.getData('user'));
    this.getQuestions();
  }

  answeredValue(val: string) {
    console.log('anweris', val);
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

  clearResponse(){
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
    let result = {
      marks: this.testMarks,
      total: this.questionList.length
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
    }
  }

  questionLoad (index){
    this.itr = index;
    this.currentAnswer = '';
    this.question = this.questionList[this.itr];
  }

  saveAndNext(): void {
   ++this.itr;

    if (this.itr >= this.questionList.length) {
      const result = {
        marks: this.testMarks,
        total: this.questionList.length
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
    this.http.get(`https://raw.githubusercontent.com/acharyaks90/questionjson/master/json/questions${this.user.test.name}.json`)
    .subscribe(res => {
      this.loaderSer.show(false);
      console.log('mydata', res);
      this.questionList = res['TEST'];
      this.question = this.questionList[0];
    });
  }


}
