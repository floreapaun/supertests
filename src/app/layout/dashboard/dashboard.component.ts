import { Component, ViewChildren, ElementRef, OnInit, Inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { DemoMaterialModule } from 'src/app/material-module';
import { AuthenticationService } from 'src/app/services/authentication.service';
import User from '../../models/User';
import { LoaderService } from 'src/app/services/loader.service';
import { environment } from './../../../environments/environment';
import { FinishedTest } from 'src/app/finished-test';
import { TestItem } from 'src/app/test-item';
import {MatDialog, MAT_DIALOG_DATA} from '@angular/material/dialog';

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
  finishedTestsList: Array < FinishedTest >;
  testsList: Array < TestItem >;
  test: TestItem;
  addTestIsPushedOnce: boolean;
  newTest: any = {
    duration: "",
    name: ""
  }; 

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
    this.http.get < Array < FinishedTest > > (`${this.url}/user/finishedTestsList`, {
        responseType: 'json'
      })
      .subscribe(
        (res: Array < FinishedTest > ) => {
          this.loaderSer.show(false);
          this.finishedTestsList = res;
          console.log(res);
        });
  }

  getTestsList(): void {
    this.loaderSer.show(true);
    this.http.get < Array < TestItem >> (`${this.url}/user/testsList`, {
        responseType: 'json'
      })
      .subscribe(
        (res: Array < TestItem > ) => {
          this.loaderSer.show(false);
          this.testsList = res;
          console.log(res);
        });
  }

  updateQuestion(testId, question): void {

    let index = this.testsList.findIndex( element => element._id === testId);

    //Questions array of test in which to add new question
    let qA = this.testsList[index].questions;

    if (qA[qA.length-1]._id === null) {
      console.log("post /addQuestion");
      this.http.post<any>(`${this.url}/user/addQuestion`, 
        { "testId": testId, "question": qA[qA.length-1] })
        .subscribe(res => {
          this.getTestsList();
          
          this.dialog.open(DashboardDialog, {
            data: {
              success: res.status,
              message: res.message,
            },
          });

        });    
    }
    else {
      console.log("post /updateQuestion");
      this.http.post<any>(`${this.url}/user/updateQuestion`, { question })
          .subscribe(res => {
            this.dialog.open(DashboardDialog, {
              data: {
                success: res.status,
                message: res.message,
              },
            });
          });
      console.log(question); 
    }

  }

  trackByIndex (index: number) { 
    return index 
  }

  addQuestion(testId): void {
    let index = this.testsList.findIndex( element => element._id === testId);

    //Add input entries for the new question 
    this.testsList[index].questions.push({
      _id: null,
      content: "",
      answer: -1,
      __v: 0,
      options: [" ", " ", " ", " "]
    });

  }

  addTest(): void {
    if (this.addTestIsPushedOnce) {
      console.log("post /addTest");
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

}


@Component({
  selector: 'dashboard-dialog',
  templateUrl: 'dashboard-dialog.html',
})
export class DashboardDialog {
  constructor(@Inject(MAT_DIALOG_DATA) public data: DialogData) {}
}