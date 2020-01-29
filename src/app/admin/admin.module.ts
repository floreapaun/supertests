import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { componentDeclarations, routes } from './admin.common';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [...componentDeclarations],
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ]
})
export class AdminModule { }
