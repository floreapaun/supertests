import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { StorageService } from 'src/app/services/storage.service';
import { SaveUserinfoService } from 'src/app/services/save-userinfo.service';
import { TitleService } from 'src/app/services/title.service';
import { AuthenticationService } from 'src/app/services/authentication.service';

@Component({
  selector: 'app-score',
  templateUrl: './score.component.html',
  styleUrls: ['./score.component.scss']
})
export class ScoreComponent implements OnInit {
 user: any; 
 test: any;
 result: any;
 percentage : string;
  constructor(private router : Router,
    private userSave: SaveUserinfoService,
    private authenticationService: AuthenticationService,
    private TitleService: TitleService) { }

  ngOnInit() {
    this.user = this.authenticationService.currentUserValue; 

    //get test object from storage
    this.test = JSON.parse(localStorage.getItem('test'));

    this.result = JSON.parse(sessionStorage.getItem('result'));
    this.percentage =  ((this.result.marks * 100) / this.result.total).toFixed(2);
    //this.userSave.saveScoreDataToServer({user:this.user, score: this.result.marks, unanswered: this.result.unanswered});
  }

  testAgain(){
    
    //storage is of type session
    sessionStorage.removeItem('result');
    sessionStorage.setItem('result', JSON.stringify(this.user));

    this.router.navigate(['/quiz']);
  }

  deleteUser() {
    this.authenticationService.deleteUser();
    
    //go to a route where after user sign in checking redirects to login 
    this.router.navigate(['/notification']);
  }

  review(){
    this.router.navigate(['/review']);
  }

  get title() {
    return this.TitleService.getValue();
  }

}

