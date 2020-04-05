import { Component, OnInit, Input } from '@angular/core';
import { Router } from '@angular/router';
import { AuthenticationService } from 'src/app/services/authentication.service';
import { NgModule } from '@angular/core';

@Component({
  selector: 'app-user-panel-content',
  templateUrl: './user-panel-content.component.html',
  styleUrls: ['./user-panel-content.component.css']
})

export class UserPanelContentComponent implements OnInit {
  @Input() user_firstName: string;

  constructor(private router: Router,
    private authenticationService: AuthenticationService) { }

  ngOnInit(): void {
  }

  logout() {
    this.authenticationService.logout();
  }

}
