import { Component, OnInit, Input } from '@angular/core';
import { Router } from '@angular/router';
import { NgModule } from '@angular/core';
import { AuthenticationService } from 'src/app/services/authentication.service';

@Component({
  selector: 'app-user-panel-content',
  templateUrl: './user-panel-content.component.html',
  styleUrls: ['./user-panel-content.component.css']
})

export class UserPanelContentComponent implements OnInit {
  @Input() user_firstname: string;

  constructor(private authenticationService: AuthenticationService) {}

  ngOnInit(): void {
  }

  logout() {
    this.authenticationService.logout();
  }

}
