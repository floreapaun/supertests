import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../../services/auth.service';
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

  typeTestList:  Array<string>  = [ 'HTET', 'CTET', 'ANGULAR', 'JAVASCRIPT'];
  constructor(private router: Router,
              private auth: AuthService) { }

  ngOnInit() {
    this.auth.name().subscribe(res => {
      console.log('Auth',res);
    })
   
  }


  submit() {
    console.log('notification');
    
    window.localStorage.setItem('user', JSON.stringify(this.user));
    this.router.navigate(['/notification']);
  }


  selectedIndexChanged(args){
    // const picker = <ListPicker>args.object;
    // this.picked = this.typeTestList[picker.selectedIndex];
  }

}
