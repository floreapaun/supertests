import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../../services/auth.service';
import { HttpClient } from '@angular/common/http';
import { StorageMobService } from '../../storage-mob.service';
import { ListPicker } from "tns-core-modules/ui/list-picker";
import { TextField } from "tns-core-modules/ui/text-field";
import { Page } from "tns-core-modules/ui/page"
interface User {
  name: string,
  email: string,
  test: string
}

@Component({
  selector: 'app-welcome',
  templateUrl: './welcome.component.html',
  styleUrls: ['./welcome.component.scss']
})
export class WelcomeComponent implements OnInit {
  user : User = {
    name: '',
    email: '',
    test : ''
  };


  typeTestList:  any;
  constructor(private router: Router,
              private auth: AuthService,
              private http: HttpClient,
              private storage: StorageMobService,
              private page: Page) { }

  ngOnInit() {

    this.page.actionBarHidden = true;

    this.storage.clear();
    this.auth.name().subscribe(res => {
      console.log('Auth',res);
    });

    this.getTestList();
   
  }


  submit() {
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
    const picker = <ListPicker>args.object;
    console.log(picker.selectedIndex)
    this.user.test = this.typeTestList[picker.selectedIndex];
  }

  getTestList() : void {
    this.http.get('https://raw.githubusercontent.com/acharyaks90/questionjson/master/json/testlist.json')
    .subscribe(res => {
      this.typeTestList = res['testlist'];
      console.log('Type list',this.typeTestList);
    });
  }

  onTextNameChange(args):void{
    //console.log(args);
    let textField = <TextField>args.object;

        this.user.name = textField.text;
  }

  onTextEmailChange(args):void{
    let textField = <TextField>args.object;
    this.user.email = textField.text;
  }

}
