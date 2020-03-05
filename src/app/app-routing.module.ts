import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { BrowserModule } from '@angular/platform-browser';

import { FormsModule, ReactiveFormsModule }  from '@angular/forms';

import { NotificationComponent } from './layout/notification/notification.component';
import { WelcomeComponent } from './layout/welcome/welcome.component';
import { TestComponent } from './layout/test/test.component';
import { ScoreComponent } from './layout/score/score.component';
import { QuizTypeComponent } from './layout/quiz-type/quiz-type.component';
import { FeedbackComponent } from './layout/feedback/feedback.component';
import { ReviewComponent } from './layout/review/review.component';

import { RegisterComponent } from './layout/register/register.component';
import { LoginComponent } from './layout/login/login.component';
import { AuthGuard } from './helpers';

const routes: Routes = [

  { path: '',
    redirectTo: '/login',
    pathMatch: 'full',
  },

  { path: 'register',
    component: RegisterComponent,
  },

  { path: 'login',
    component: LoginComponent
  },

  { path: 'notification',
    component: NotificationComponent,
    canActivate: [AuthGuard],
  },

  { path: 'test',
    component: TestComponent,
    canActivate: [AuthGuard]
  },

  { path: 'score',
    component: ScoreComponent,
    canActivate: [AuthGuard]
  },

  { path: 'quiz',
    component: QuizTypeComponent,
    canActivate: [AuthGuard]
  },

  { path: 'feedback',
    component:FeedbackComponent,
    canActivate: [AuthGuard]
  },

  {
    path : 'admin',
    loadChildren:()=> import('./admin/admin.module').then(m=>m.AdminModule)
  },

  { path: 'review',
    component: ReviewComponent,
    canActivate: [AuthGuard],
  },

  // otherwise redirect to root route 
  { path: '**', 
    redirectTo: '' 
  },
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes), BrowserModule, FormsModule, ReactiveFormsModule],
  exports: [RouterModule, ReactiveFormsModule]
})
export class AppRoutingModule { }
