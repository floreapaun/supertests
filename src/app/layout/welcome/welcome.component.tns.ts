import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../../services/auth.service';
import { HttpClient } from '@angular/common/http';
import { StorageMobService } from '../../storage-mob.service';
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
              private http: HttpClient,
              private storage: StorageMobService) { }

  ngOnInit() {

    this.storage.clear();
    this.auth.name().subscribe(res => {
      console.log('Auth',res);
    });

    this.getTestList();
   
  }


  submit(singnupForm) {
    this.router.navigate(['/notification']);
    console.log('notification', this.user);
    if (this.user.email != '' && this.user.name != '' && this.user.test != '' ){
      console.log(this.user.test);
      this.storage.setData('user', JSON.stringify(this.user));
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
    this.http.get('https://raw.githubusercontent.com/acharyaks90/questionjson/master/json/testlist.json')
    .subscribe(res => {
      this.typeTestList = res['testlist'];
      console.log('Type list',this.typeTestList);
    });
  }

}
