import { Component, OnInit, Inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { AuthenticationService } from 'src/app/services/authentication.service';
import { LoaderService } from 'src/app/services/loader.service';
import { environment } from './../../../environments/environment';
import { FinishedTest } from 'src/app/finished-test';
import { TestItem } from 'src/app/test-item';
import { DataObject } from 'src/app/data-object';
import { MatDialog, MAT_DIALOG_DATA } from '@angular/material/dialog';
import User from '../../models/User';

export interface DialogData {
  success: boolean;
  message: string;
}

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})

export class DashboardComponent implements OnInit {

  url = (environment.production) ? 
    environment.backend_prod_url : environment.backend_dev_url;
  user: User; 
  finishedTestsList: Array<FinishedTest>;
  testsList: Array<TestItem>;
  test: TestItem;
  addTestIsPushedOnce: boolean;
  newTest: any = {
    duration: "",
    name: ""
  }; 
  logsIsPushed: boolean = true;
  testsPanelIsPushed: boolean;

  constructor(private router: Router,
    private http: HttpClient,
    private authenticationService: AuthenticationService,
    private loaderSer: LoaderService,
    public dialog: MatDialog
   ) {}

  ngOnInit(): void {
    this.user = this.authenticationService.currentUserValue; 
    this.getFinishedTestsList(); 
    this.getTestsList(); 
  }

  getFinishedTestsList(): void {
    this.loaderSer.show(true);
    this.http.get<Array<FinishedTest>>(`${this.url}/user/finishedTestsList`, {
        responseType: 'json'
      })
      .subscribe(
        (res: Array<FinishedTest>) => {
          this.loaderSer.show(false);
          this.finishedTestsList = res;
        });
  }

  getTestsList(): void {
    this.loaderSer.show(true);
    this.http.get<Array<TestItem>>(`${this.url}/user/testsList`, {
        responseType: 'json'
      })
      .subscribe(
        (res: Array<TestItem>) => {
          this.loaderSer.show(false);
          this.testsList = res;
        });
  }

  getQuestions(testId): void {
    this.loaderSer.show(true);
    this.http.get<Array<DataObject>>(
      `${this.url}/user/questionsList?test_id=${testId}`, {
      responseType: 'json'
    })
    .subscribe(
      (res: Array<DataObject>) => {
        this.loaderSer.show(false);
        this.test.questions = res;
    });
  }

  updateQuestion(testId, question): void {

    let index = this.testsList.findIndex( element => element._id === testId);

    //Questions array of test in which to add new question
    let qA = this.testsList[index].questions;

    if (qA[qA.length-1]._id === null) {
      this.http.post<any>(`${this.url}/user/addQuestion`, 
        { "testId": testId, "question": qA[qA.length-1] })
        .subscribe(res => {
          this.getQuestions(testId);
          this.dialog.open(DashboardDialog, {
            data: {
              success: res.status,
              message: res.message,
            },
          });
        });    
    }
    else {
      this.http.post<any>(`${this.url}/user/updateQuestion`, { question })
          .subscribe(res => {
            this.dialog.open(DashboardDialog, {
              data: {
                success: res.status,
                message: res.message,
              },
            });
          });

    }

  }

  trackByIndex (index: number) { 
    return index; 
  }

  addQuestion(testId): void {
    let index = this.testsList.findIndex( element => element._id === testId);

    //Add input entries for the new question 
    this.testsList[index].questions.push({
      _id: null,
      content: "",
      answer: -1,
      __v: 0,
      options: ["", "", "", ""]
    });

  }

  addTest(): void {
    if (this.addTestIsPushedOnce) {
      this.http.post<any>(`${this.url}/user/addTest`, this.newTest)
        .subscribe(res => {
          this.getTestsList();

          this.dialog.open(DashboardDialog, {
            data: {
              success: res.status,
              message: res.message,
            },
          });

          //Reset
          this.addTestIsPushedOnce = false;
          this.newTest.duration = "";
          this.newTest.name = "";
        });    
    }
    else {
      this.test = null;
      this.addTestIsPushedOnce = true;
    }
  }

  onSelectChange(): void {

    //If user presses 'Add test' button and then clicks an option inside select
    //remove new test empty entries 
    if (this.addTestIsPushedOnce)
      this.addTestIsPushedOnce = false;

  }

  showLogs(): void {
    this.testsPanelIsPushed = false;
    this.logsIsPushed = true;
  }  

  showTestsPanel(): void {
    this.logsIsPushed = false;
    this.testsPanelIsPushed = true;
  }  

}

@Component({
  selector: 'dashboard-dialog',
  templateUrl: 'dashboard-dialog.html',
})

export class DashboardDialog {
  constructor(@Inject(MAT_DIALOG_DATA) public data: DialogData) {}
}
