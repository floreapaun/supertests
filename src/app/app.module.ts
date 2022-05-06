import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormsModule, ReactiveFormsModule} from '@angular/forms';
import { FooterComponent } from './footer/footer.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { HttpClientModule } from '@angular/common/http';
import { MatNativeDateModule } from '@angular/material/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { DemoMaterialModule } from './material-module';

import { CustomPopupModalComponent } from "./common/custom-popup-modal/custom-popup-modal.component";
import { DashboardComponent, DashboardDialog } from './layout/dashboard/dashboard.component';
import { FeedbackComponent } from './layout/feedback/feedback.component';
import { LoginComponent } from './layout/login/login.component';
import { NotificationComponent } from './layout/notification/notification.component';
import { QuizTypeComponent } from './layout/quiz-type/quiz-type.component';
import { RegisterComponent } from './layout/register/register.component';
import { ReviewComponent } from './layout/review/review.component';
import { ScoreComponent } from './layout/score/score.component';
import { TestComponent } from './layout/test/test.component';
import { UserPanelComponent } from './layout/user-panel/user-panel.component';

@NgModule({
  declarations: [
    AppComponent,
    CustomPopupModalComponent,
    DashboardComponent,
    DashboardDialog,
    FeedbackComponent,
    FooterComponent,
    LoginComponent,
    NotificationComponent,
    QuizTypeComponent,
    ReviewComponent,
    RegisterComponent,
    ScoreComponent,
    TestComponent,
    UserPanelComponent,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    FormsModule,
    AppRoutingModule,
    HttpClientModule,
    NgbModule,
    DemoMaterialModule,
    MatNativeDateModule,
    ReactiveFormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
  entryComponents: [CustomPopupModalComponent]
})
export class AppModule { }
