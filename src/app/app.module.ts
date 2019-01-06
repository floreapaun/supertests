import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NotificationComponent } from './layout/notification/notification.component';
import { WelcomeComponent } from './layout/welcome/welcome.component';
import { TestComponent } from './layout/test/test.component';
import { AuthService } from './services/auth.service';
import { DatamaniputationService } from './services/datamaniputation.service';
import { ScoreComponent } from './layout/score/score.component';

@NgModule({
  declarations: [
    AppComponent,
    NotificationComponent,
    WelcomeComponent,
    TestComponent,
    ScoreComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [ ],
  bootstrap: [AppComponent]
})
export class AppModule { }
