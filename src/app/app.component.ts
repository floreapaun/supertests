import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'ipriksha';
  counter : number;
  childDataRecieved(data:number):void{
    this.counter = data;
  }


}
