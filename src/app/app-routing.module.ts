import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { NotificationComponent } from './layout/notification/notification.component';
import { WelcomeComponent } from './layout/welcome/welcome.component';
import { TestComponent } from './layout/test/test.component';
import { ScoreComponent } from './layout/score/score.component';

const routes: Routes = [
  { path: '',
    component: WelcomeComponent},
  { path: 'notification',
    component: NotificationComponent},
  { path: 'test',
    component: TestComponent},
  { path: 'score',
    component: ScoreComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
