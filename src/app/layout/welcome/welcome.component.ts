import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../../services/auth.service';
import { HttpClient } from '@angular/common/http';
//import { ListPicker } from "tns-core-modules/ui/list-picker";


@Component({
  selector: 'app-welcome',
  templateUrl: './welcome.component.html',
  styleUrls: ['./welcome.component.css']
})
export class WelcomeComponent implements OnInit {
  user = {
    name: '',
    email: '',
    test : ''
  };

picked ;

  typeTestList:  any;
  constructor(private router: Router,
              private auth: AuthService,
              private http: HttpClient) { }

  ngOnInit() {
    window.sessionStorage.clear();
    this.auth.name().subscribe(res => {
      console.log('Auth',res);
    });

    this.getTestList();
   
  }


  submit() {
    console.log('notification', this.user);
    if (this.user.email != '' && this.user.name != '' && this.user.test != '' ){
      console.log(this.user.test);
      window.sessionStorage.setItem('user', JSON.stringify(this.user));
      this.router.navigate(['/notification']);
    } else {
      alert('Please fill all information!');
    }
  }


  selectedIndexChanged(args){
    // const picker = <ListPicker>args.object;
    // this.picked = this.typeTestList[picker.selectedIndex];
  }

  getTestList() {
    this.http.get('api/tests').subscribe(res => {
      this.typeTestList = res;

      console.log(res)
      console.log(res instanceof Array)
    })
  }

}
