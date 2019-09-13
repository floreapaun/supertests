import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { StorageMobService } from '../../storage-mob.service';
import { Page } from 'tns-core-modules/ui/page/page';
//import { StorageMobService } from 'src/app/services/storage-mob.service';

@Component({
  selector: 'app-test',
  templateUrl: './test.component.html',
  styleUrls: ['./test.component.scss']
})
export class TestComponent implements OnInit {
  timeRem: string = '00:00:00';
  question: any;
  itr = 0;
  user;
  questionList = [];
  answerList = [];
  currentAnswer: any;
  testMarks: number = 0;
  constructor(private router: Router,
    private http: HttpClient,
    private storage: StorageMobService,
    private page: Page) { }

  ngOnInit() {
    this.page.actionBarHidden = true;


    let timer = (2 * 60 + 30) * 60 + 20;
    setInterval(() => {
      let sec = 0, totalmin = 0, hour = 0, min = 0;
      sec = timer % 60;
      totalmin = Math.floor(timer / 60);
      hour = Math.floor(totalmin / 60);
      min = totalmin % 60;

      this.timeRem = `${hour}:${min}:${sec}`
      timer--;
    }, 1000)

    this.user = JSON.parse(this.storage.getData('user'));
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
    if (this.questionList[this.itr].answer == val) {
      this.testMarks++;
    }
  }

  clearResponse() {
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
    console.log(this.user.test.name);
    this.http.get(`https://raw.githubusercontent.com/acharyaks90/questionjson/master/json/questions${this.user.test.name}.json`)
      .subscribe(res => {
        this.questionList = res['TEST'];
        this.question = this.questionList[0];
      });
  }


}
