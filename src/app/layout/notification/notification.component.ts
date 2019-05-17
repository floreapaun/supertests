import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-notification',
  templateUrl: './notification.component.html',
  styleUrls: ['./notification.component.css']
})
export class NotificationComponent implements OnInit {
   user : string = '';
  agree: boolean ;
  constructor(private router: Router) { }

  ngOnInit() {
    
   this.user = JSON.parse( window.localStorage.user);
  }


  navigateToTest() {
    if(this.agree){
      this.router.navigate(['/test']);
    } else {
      alert('Please agree term and conditions');
    }
  }
}
