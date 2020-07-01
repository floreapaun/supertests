import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthenticationService } from 'src/app/services/authentication.service';

@Component({
  selector: 'app-notification',
  templateUrl: './notification.component.html',
  styleUrls: ['./notification.component.scss']
})
export class NotificationComponent implements OnInit {
  user: any; 
  test: any;
  agree: boolean ;
  constructor(private router: Router,
              private authenticationService: AuthenticationService,
              ) { }

  ngOnInit() {
    this.user = this.authenticationService.currentUserValue; 
    this.test = JSON.parse(localStorage.getItem('test'));
  }

  navigateToTest() {
    if(this.agree){
      this.router.navigate(['/test']);
    } else {
      alert('Bifeaza ca ai citit continutul paginii!');
    }
  }
}
