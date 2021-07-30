import { Component, AfterViewInit, ChangeDetectorRef } from '@angular/core';
import { Router, RouterEvent, NavigationStart, NavigationEnd } from '@angular/router';
import { LoaderService } from './services/loader.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements AfterViewInit {
  loading:boolean;
  progress:boolean;

  constructor(router:Router,
              public loaderService: LoaderService,
              private cd: ChangeDetectorRef){
    this.loading = false;
    router.events.subscribe(
      (event: RouterEvent): void => {
        if (event instanceof NavigationStart) {
          this.loading = true;
        } else if (event instanceof NavigationEnd) {
          this.loading = false;
        }
      }
    );

   

  }

  ngAfterViewInit(){
    this.loaderService.status.subscribe(res=>{
      this.progress = res;
      this.cd.detectChanges();
    })
   
  }


}

