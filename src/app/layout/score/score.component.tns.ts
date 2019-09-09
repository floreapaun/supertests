import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { StorageMobService } from '../../storage-mob.service';

@Component({
  selector: 'app-score',
  templateUrl: './score.component.html',
  styleUrls: ['./score.component.css']
})
export class ScoreComponent implements OnInit {
 user:any;
 result: any;
  constructor(private router : Router,
    private storage: StorageMobService) { }

  ngOnInit() {
  //  this.user = JSON.parse(this.storage.getData('user'));
  //  this.result = JSON.parse(this.storage.getData('result'));

  }

  testAgain(){
    
    this.router.navigate(['/']);
  }

}

