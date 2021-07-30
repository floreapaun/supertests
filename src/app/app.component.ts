import {
  Component,
  AfterViewInit,
  ChangeDetectorRef
} from '@angular/core';
import {
  Router,
  RouterEvent,
  NavigationStart,
  NavigationEnd
} from '@angular/router';
import {
  LoaderService
} from './services/loader.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements AfterViewInit {
  progress: boolean;

  constructor(public loaderService: LoaderService,
    private cd: ChangeDetectorRef) { }

  ngAfterViewInit() {
    this.loaderService.status.subscribe(res => {
      this.progress = res;
      this.cd.detectChanges();
    })
  }

}

