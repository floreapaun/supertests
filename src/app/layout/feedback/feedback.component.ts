import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthenticationService } from 'src/app/services/authentication.service';

@Component({
  selector: 'app-feedback',
  templateUrl: './feedback.component.html',
  styleUrls: ['./feedback.component.css']
})
export class FeedbackComponent implements OnInit {
  public feedbacktext:string;
  constructor( private router : Router, 
               private authenticationService: AuthenticationService,
             ) { }

  ngOnInit() {
  }

  deleteUser() {
    this.authenticationService.deleteUser();
    
    //go to a route where after user sign in checking redirects to login 
    this.router.navigate(['/notification']);
  }

  sendFeedback(feedbackform){

    this.router.navigate(['/quiz'])
  }

}
