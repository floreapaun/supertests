import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { StorageService } from 'src/app/services/storage.service';

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
  agree: boolean ;
  constructor(private router: Router,
              private storage: StorageService) { }

  ngOnInit() {
    
    this.user = JSON.parse(this.storage.getData('user'));
  }


  navigateToTest() {
    if(this.agree){
      this.router.navigate(['/test']);
    } else {
      alert('Please agree term and conditions');
    }
  }
}
