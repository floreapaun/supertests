import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { LoaderService } from 'src/app/services/loader.service';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { CustomPopupModalComponent } from "../../common/custom-popup-modal/custom-popup-modal.component";
import { TitleService } from 'src/app/services/title.service';
import { AuthenticationService } from 'src/app/services/authentication.service';
import { DataObject } from 'src/app/data-object';

@Component({
  selector: 'app-test', 
  templateUrl: './test.component.html',
  styleUrls: ['./test.component.scss']
})
export class TestComponent implements OnInit {
  timeRem : string = '00:00:00';
  question : any ;
  itr = 0;
  user: any; 
  test: any;
  questionList: Array<DataObject>;
  answerList = [];
  currentAnswer : any;
  testMarks: number = 0 ;
  minutes : number = 0;
  clearint:any;
  constructor(private router: Router, 
              private http: HttpClient,
              private loaderSer: LoaderService,
              private modalService: NgbModal,
              private authenticationService: AuthenticationService,
              private TitleService:TitleService) { }

  ngOnInit() {
    this.user = this.authenticationService.currentUserValue; 
    
    //get test object from storage
    //test information
    this.test = JSON.parse(window.localStorage.getItem('test'));

    window.localStorage.setItem('test_time_started', new Date().toLocaleTimeString()); 
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
    if(this.questionList[this.itr].answer == Number(val)){
      this.testMarks++;
    }
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
    window.localStorage.setItem('result', JSON.stringify(result));
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
    //array index of the question to be loaded
    this.itr = index;

    this.currentAnswer = '';
    this.question = this.questionList[this.itr];

    //check if the question has been answered before
    const ind = this.answerList.findIndex(e => {
      return e.no == this.itr;
    });

    //if the question has been answered before 
    //copy the old answer to the currentAnswer variable
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
      window.localStorage.setItem('result', JSON.stringify(result));
      this.navigateToScore();
    } else {
      this.currentAnswer = '';
      this.question = this.questionList[this.itr];
    }
  }


  getQuestions(): void {
    this.loaderSer.show(true);
    this.http.get<Array<DataObject>>(`http://localhost:3000/user/questionsList?test_id=${this.test._id}`, {responseType : 'json'})
      .subscribe(
        (res: Array<DataObject>) => {
          this.loaderSer.show(false);
          this.questionList = res;
          this.question = this.questionList[0];
          this.minutes = this.test.duration;
          let timer =  this.minutes * 60;   
      
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

      });
  }

    ngOnDestroy(){
    clearInterval(this.clearint);
  }

  get title() {
    return this.TitleService.getValue();
  }


}
