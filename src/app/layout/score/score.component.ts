import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-score',
  templateUrl: './score.component.html',
  styleUrls: ['./score.component.css']
})
export class ScoreComponent implements OnInit {
 user:any;
 result: any;
  constructor(private router : Router) { }

  ngOnInit() {
    this.user = JSON.parse(window.sessionStorage.user);
    this.result = JSON.parse(window.sessionStorage.result);

  }

  testAgain(){
    
    this.router.navigate(['/']);
  }

}

