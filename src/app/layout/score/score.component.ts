import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { StorageService } from 'src/app/services/storage.service';
import { SaveUserinfoService } from 'src/app/services/save-userinfo.service';

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
    private storage: StorageService,
     private userSave: SaveUserinfoService) { }

  ngOnInit() {
    this.user = JSON.parse(this.storage.getData('user'));
    this.result = JSON.parse(this.storage.getData('result'));
    this.percentage =  (this.result.marks * 100) / this.result.total;
    this.userSave.saveScoreDataToServer({user:this.user, score: this.result.marks, unanswered: this.result.unanswered});
  }

  testAgain(){
    
    this.router.navigate(['/']);
  }

}

