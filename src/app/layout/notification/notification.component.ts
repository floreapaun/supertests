import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { StorageService } from 'src/app/services/storage.service';
import { AuthenticationService } from 'src/app/services/authentication.service';

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
              private storage: StorageService,
              private authenticationService: AuthenticationService,
              ) { }

  ngOnInit() {
    
    //this.user = JSON.parse(this.storage.getData('user'));
  }

  deleteUser() {
    this.authenticationService.deleteUser();
    
    //go to a route where after user sign in checking redirects to login 
    this.router.navigate(['/notification']);
  }

  navigateToTest() {
    if(this.agree){
      this.router.navigate(['/test']);
    } else {
      alert('Please agree term and conditions');
    }
  }
}
