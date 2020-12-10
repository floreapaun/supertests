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
import { AuthenticationService } from 'src/app/services/authentication.service';
import User from '../../models/User';
import { LoaderService } from 'src/app/services/loader.service';
import { FinishedTestObj } from 'src/app/finishedtest-object';
import { environment } from './../../../environments/environment';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  url = (environment.production) ? 
    environment.backend_prod_url : environment.backend_dev_url;
  user: User; 
  finishedTestsList: Array < FinishedTestObj >;

  constructor(private router: Router,
    private http: HttpClient,
    private authenticationService: AuthenticationService,
    private loaderSer: LoaderService,
   ) {}

  ngOnInit(): void {
    this.user = this.authenticationService.currentUserValue; 
    this.getFinishedTestsList(); 
  }

  getFinishedTestsList(): void {
    this.loaderSer.show(true);
    this.http.get < Array < FinishedTestObj >> (`${this.url}/user/finishedTestsList`, {
        responseType: 'json'
      })
      .subscribe(
        (res: Array < FinishedTestObj > ) => {
          this.loaderSer.show(false);
          this.finishedTestsList = res;
        });
  }


}
