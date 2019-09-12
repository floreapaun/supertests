import { Component, OnInit } from '@angular/core';
import { ListPicker } from "tns-core-modules/ui/list-picker";
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { Page } from 'tns-core-modules/ui/page/page';


@Component({
  selector: 'app-quiz-type',
  templateUrl: './quiz-type.component.html',
  styleUrls: ['./quiz-type.component.scss']
})
export class QuizTypeComponent implements OnInit {
  typeTestList:  any;
  user  = {
    name: '',
    email: '',
    test : ''
  };
  constructor(private router: Router,
    private http: HttpClient,
    private page: Page) { }

  ngOnInit() {
    this.getTestList();
    this.page.actionBarHidden = true;

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


}
