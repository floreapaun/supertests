import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { DataObject } from 'src/app/data-object';
import { LoaderService } from 'src/app/services/loader.service';
import { TitleService } from 'src/app/services/title.service';
import { AuthenticationService } from 'src/app/services/authentication.service';
import { environment } from './../../../environments/environment';
import User from '../../models/User';

@Component({
  selector: 'app-review',
  templateUrl: './review.component.html',
  styleUrls: ['./review.component.scss']
})

export class ReviewComponent implements OnInit {

  url = (environment.production) ? 
    environment.backend_prod_url : environment.backend_dev_url;
  timeRem: string = '00:00:00';
  question: any ;
  itr: number = 0;
  user: User;
  test: any;
  questionList: Array<DataObject>;
  answerList = [];
  currentAnswer: any;
  testMarks: number = 0 ;
  minutes: number = 0;
  clearint: any;

  constructor(private router: Router, 
              private http: HttpClient,
              private authenticationService: AuthenticationService,
              private TitleService: TitleService,
              private loaderSer: LoaderService) { }

  ngOnInit() {
    this.user = this.authenticationService.currentUserValue; 

    //Get info test object from storage
    this.test = JSON.parse(window.localStorage.getItem('test'));

    this.answerList = JSON.parse(window.localStorage.getItem('result')).answerList;
    this.getQuestions();
  }

  changeSection(): any {
  }

  clearResponse(): void {
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
      const i = this.answerList.findIndex(e => {
        return e.no == this.itr;
      });
      if (i > -1) {
        this.currentAnswer = this.answerList[i].answer;
      }
    }
  }

  questionLoad (index): void {
    this.itr = index;
    this.currentAnswer = '';
    this.question = this.questionList[this.itr];

    //answerList looks like [{ no: 0, answer: 3}, {no: 4, answer: 0}, ...]
    //no is the index of question in the questionList
    const i = this.answerList.findIndex(e => {
      return e.no == this.itr;
    });

    if (i > -1) 
      this.currentAnswer = this.answerList[i].answer;
  }

  checkAnswered(index: number): boolean {
    const i = this.answerList.findIndex(e => {
      return e.no == index;
    });
    if (i > -1) 
      return true;
    else 
      return false;
  }

  next(): void {
   ++this.itr;

    if (this.itr >= this.questionList.length) {
     
    } else {
      this.currentAnswer = '';
      this.question = this.questionList[this.itr];
      const i = this.answerList.findIndex(e => {
        return e.no == this.itr;
      });
      if (i > -1) {
        this.currentAnswer = this.answerList[i].answer;
      }
    }
  }

  correctAnswer(answer): number {
    return parseInt(answer)+1;
  }

  getQuestions(): void {
    this.loaderSer.show(true);
    this.http.get<Array<DataObject>>(
      `${this.url}/user/questionsList?test_id=${this.test._id}`, { 
      responseType: 'json'
    })
    .subscribe(
      (res: Array<DataObject>) => {
        this.loaderSer.show(false);
        this.questionList = res;
        this.questionLoad(0); 
    });
  }

  tryAgainTest(): void {
    window.localStorage.removeItem('result');
    this.router.navigate(['/quiz']);
  }

  ngOnDestroy() {
  }

  get title() {
    return this.TitleService.getValue();
  }

}
