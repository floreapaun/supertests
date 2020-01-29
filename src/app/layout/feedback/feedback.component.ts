import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-feedback',
  templateUrl: './feedback.component.html',
  styleUrls: ['./feedback.component.css']
})
export class FeedbackComponent implements OnInit {
  public feedbacktext:string;
  constructor( private router : Router) { }

  ngOnInit() {
  }

  sendFeedback(feedbackform){

    this.router.navigate(['/quiz'])
  }

}
