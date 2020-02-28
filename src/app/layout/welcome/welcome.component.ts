import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../../services/auth.service';
import { HttpClient } from '@angular/common/http';
import { StorageService } from 'src/app/services/storage.service';
import { SaveUserinfoService } from 'src/app/services/save-userinfo.service';
import { LoaderService } from 'src/app/services/loader.service';
import { TitleService } from 'src/app/services/title.service';
//import { ListPicker } from "tns-core-modules/ui/list-picker";


@Component({
  selector: 'app-welcome',
  templateUrl: './welcome.component.html',
  styleUrls: ['./welcome.component.scss']
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
              private storage: StorageService,
              private userSave: SaveUserinfoService,
              private loaderSer: LoaderService,
              private TitleService: TitleService) { }

  ngOnInit() {

    // this.storage.clear();
    
      let user = JSON.parse(this.storage.getData('user'));
      if(user&& user.name){
        this.router.navigate(['/quiz']);
      }
    
    this.auth.name().subscribe(res => {
     
    });

    this.getTestList();
   
  }
  // submitBtn (){
  //   alert ("hello")
  // }

  submit(singnupForm) {
    if (this.user.email != '' && this.user.name != '' && this.user.test != '' ){
      //this.saveDataToServer();
      this.userSave.saveDataToServer(this.user); //
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
    
    /*
    this.loaderSer.show(true);
    this.http.get('https://raw.githubusercontent.com/acharyaks90/questionjson/master/json/testlist.json')
    .subscribe(res => {
      this.loaderSer.show(false);
      this.typeTestList = res['testlist'];
    });
    */
    
    let res = 
       
    {
        "testlist": [
            {
                "id": 1,
                "name": "HTET",
                "duration": 30,
                "question": 10
            },
            {
                "id": 2,
                "name": "CTET",
                "duration": 30,
                "question": 10
            },
            {
                "id": 3,
                "name": "ANGULAR",
                "duration": 30,
                "question": 10
            },
            {
                "id": 4,
                "name": "JAVASCRIPT",
                "duration": 10,
                "question": 10
            },
            {
                "id": 5,
                "name": "CSS",
                "duration": 5,
                "question": 2
            },
            {
                "id": 6,
                "name": "YOGA",
                "duration": 10,
                "question": 10
            },
           {
                "id": 7,
                "name": "JAVA",
                "duration": 5,
                "question": 5
            },
            {
                "id": 7,
                "name": "SQL",
                "duration": 5,
                "question": 5
            }
        ]
    }

    this.typeTestList = res['testlist'];
 
  }

  saveDataToServer(){
    //test data 
    this.http.put('https://ipriksha-be1b8.firebaseio.com/user.json',this.user).subscribe(res=>{
      
    })
  }

  get title() {
    return this.TitleService.getValue();
  }

}
