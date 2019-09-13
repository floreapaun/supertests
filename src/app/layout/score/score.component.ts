import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { StorageService } from 'src/app/services/storage.service';

@Component({
  selector: 'app-score',
  templateUrl: './score.component.html',
  styleUrls: ['./score.component.scss']
})
export class ScoreComponent implements OnInit {
 user:any;
 result: any;
 percentage : number;
  constructor(private router : Router,
    private storage: StorageService) { }

  ngOnInit() {
    this.user = JSON.parse(this.storage.getData('user'));
    this.result = JSON.parse(this.storage.getData('result'));
    this.percentage =  (this.result.marks * 100) / this.result.total;
  }

  testAgain(){
    
    this.router.navigate(['/']);
  }

}

