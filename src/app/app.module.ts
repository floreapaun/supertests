import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DatamaniputationService } from './services/datamaniputation.service';
import { FormsModule, ReactiveFormsModule} from '@angular/forms';
import { TeslistService } from './teslist.service';
import { FooterComponent } from './footer/footer.component';
import { ChangeColorDirective } from './change-color.directive';
import { SecondLetterCapitalPipe } from './second-letter-capital.pipe';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { CustomPopupModalComponent } from "./common/custom-popup-modal/custom-popup-modal.component";

import { QuizTypeComponent } from './layout/quiz-type/quiz-type.component';
import { NotificationComponent } from './layout/notification/notification.component';
import { TestComponent } from './layout/test/test.component';
import { ScoreComponent } from './layout/score/score.component';
import { FeedbackComponent } from './layout/feedback/feedback.component';
import { ReviewComponent } from './layout/review/review.component';
import { RegisterComponent } from './layout/register/register.component';
import { LoginComponent } from './layout/login/login.component';
import { UserPanelComponent } from './layout/user-panel/user-panel.component';

import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { MatNativeDateModule } from '@angular/material/core';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { DemoMaterialModule } from './material-module';
import { DashboardComponent, DashboardDialog } from './layout/dashboard/dashboard.component';


@NgModule({
  declarations: [
    AppComponent,
    NotificationComponent,
    TestComponent,
    ScoreComponent,
    FooterComponent,
    QuizTypeComponent,
    ChangeColorDirective,
    SecondLetterCapitalPipe,
    CustomPopupModalComponent,
    FeedbackComponent,
    ReviewComponent,
    RegisterComponent,
    LoginComponent,
    UserPanelComponent,
    DashboardComponent,
    DashboardDialog
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
