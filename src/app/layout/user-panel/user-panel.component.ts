import { Component, OnInit, Input } from '@angular/core';
import { Router } from '@angular/router';
import { NgModule } from '@angular/core';
import { AuthenticationService } from 'src/app/services/authentication.service';

@Component({
  selector: 'app-user-panel',
  templateUrl: './user-panel.component.html',
  styleUrls: ['./user-panel.component.css']
})

export class UserPanelComponent implements OnInit {
  @Input() user_firstname: string;

  constructor(private authenticationService: AuthenticationService) {}

  ngOnInit(): void {
  }

  logout() {
    this.authenticationService.logout();
  }

}
