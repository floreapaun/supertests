import { Component, ViewChildren, ElementRef, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { DemoMaterialModule } from 'src/app/material-module';
import User from '../../models/User';
import { AuthenticationService } from 'src/app/services/authentication.service';

@Component({
  selector: 'app-quiz-type',
  templateUrl: './quiz-type.component.html',
  styleUrls: ['./quiz-type.component.scss']
})
export class QuizTypeComponent implements OnInit {
  typeTestList:  any;
  user: User; 
  test: any;
  constructor(private router: Router,
    private http: HttpClient,
    private authenticationService: AuthenticationService,
   ) { }

  ngOnInit() {
    this.user = this.authenticationService.currentUserValue; 
    this.getTestList();
  }
    
  deleteUser() {
    this.authenticationService.deleteUser();
    
    //go to a route where after user sign in checking redirects to login 
    this.router.navigate(['/notification']);
  }


  getTestList() : void {
    this.http.get('http://localhost:3000/user/testsInfoList')
      .subscribe(res => {
        this.typeTestList = res;
      });
  }


  navigateToNotification(){
    if ( this.test != '' ){
    
      //put object of the selected test to storage for later use in the application
      window.localStorage.setItem('test', JSON.stringify(this.test));
      
      this.router.navigate(['/notification']);
    } else {
      alert('Alege tipul testului!');
    }
  }

  /*
  testTypeTap(val:string){
    this.user.test = val;
  }
  */


  submit(submitform){
    this.navigateToNotification();
  }


}
