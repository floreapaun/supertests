import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthenticationService } from 'src/app/services/authentication.service';

@Component({
  selector: 'app-feedback',
  templateUrl: './feedback.component.html',
  styleUrls: ['./feedback.component.css']
})
export class FeedbackComponent implements OnInit {
  user: any; 
  test: any;
  public feedbacktext:string;
  constructor( private router : Router, 
               private authenticationService: AuthenticationService,
             ) { }

  ngOnInit() {
    this.user = this.authenticationService.currentUserValue; 

    //get test object from storage
    this.test = JSON.parse(localStorage.getItem('test'));
  }

  sendFeedback(feedbackform){

    this.router.navigate(['/quiz'])
  }

}
