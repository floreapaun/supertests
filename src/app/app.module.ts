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
import { FormsModule } from '@angular/forms';
import { AutoGeneratedComponent } from './auto-generated/auto-generated.component';
import { TeslistService } from './teslist.service';
import { HttpClientModule } from '@angular/common/http';
import { FooterComponent } from './footer/footer.component';
import { ChangeColorDirective } from './change-color.directive';
import { SecondLetterCapitalPipe } from './second-letter-capital.pipe';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { QuizTypeComponent } from './layout/quiz-type/quiz-type.component';
import { CustomPopupModalComponent } from "./common/custom-popup-modal/custom-popup-modal.component";
import { FeedbackComponent } from './layout/feedback/feedback.component';
import { ReviewComponent } from './layout/review/review.component';

@NgModule({
  declarations: [
    AppComponent,
    NotificationComponent,
    WelcomeComponent,
    TestComponent,
    ScoreComponent,
    AutoGeneratedComponent,
    FooterComponent,
    QuizTypeComponent,
    ChangeColorDirective,
    SecondLetterCapitalPipe,
    CustomPopupModalComponent,
    FeedbackComponent,
    ReviewComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    HttpClientModule,
    NgbModule
  ],
  providers: [ ],
  bootstrap: [AppComponent],
  entryComponents: [CustomPopupModalComponent]
})
export class AppModule { }
