import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { StorageMobService } from '../../storage-mob.service';
import { Page } from 'tns-core-modules/ui/page/page';

@Component({
  selector: 'app-score',
  templateUrl: './score.component.html',
  styleUrls: ['./score.component.scss']
})
export class ScoreComponent implements OnInit {
 user:any;
 result: any;
  constructor(private router : Router,
    private storage: StorageMobService,
    private page: Page) { }

  ngOnInit() {
    this.page.actionBarHidden = true;
   this.user = JSON.parse(this.storage.getData('user'));
   this.result = JSON.parse(this.storage.getData('result'));

  }

  testAgain(){
    this.storage.removeData('result');
    delete this.user.test
    this.storage.setData('result', JSON.stringify(this.user));

    this.router.navigate(['/quiz']);
  }

  review(){
    this.router.navigate(['/review']);
  }
  

}

