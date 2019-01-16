import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-welcome',
  templateUrl: './welcome.component.html',
  styleUrls: ['./welcome.component.css']
})
export class WelcomeComponent implements OnInit {
  user = {
    name: 'test',
    email: 'kajal@gmail',
    test :''
  }
  constructor(private router: Router,
              private auth:AuthService) { }

  ngOnInit() {
    this.auth.name().subscribe(res=>{
      console.log('Auth',res);
    })
   
  }


  submit() {
    console.log('noti');
    window.localStorage.setItem('user', 'kajal');
    this.router.navigate(['/notification']);
  }

}
