import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { StorageMobService } from '../../storage-mob.service';
// import { StorageMobService } from 'src/app/services/storage-mob.service';

import { Page } from 'tns-core-modules/ui/page/page';

@Component({
  selector: 'app-notification',
  templateUrl: './notification.component.html',
  styleUrls: ['./notification.component.scss']
})
export class NotificationComponent implements OnInit {
   user  = { test: {
     name:'',
     duration:''
   }};
  agree: boolean = false ;
  constructor(private router: Router,
              private storage: StorageMobService,
              private page: Page) { }

  ngOnInit() {
    this.page.actionBarHidden = true;

    this.user = JSON.parse(this.storage.getData('user'));
  }

  accept() : void{
    this.agree = true;
  }


  navigateToTest() {
    if(this.agree){
      this.router.navigate(['/test']);
    } else {
      alert('Please agree term and conditions');
    }
  }
}
