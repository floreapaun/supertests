import { Routes } from '@angular/router';
import { AdminComponent } from './admin.component';

export const componentDeclarations: any[] = [
    AdminComponent
];

export const providerDeclarations: any[] = [
];

export const routes: Routes = [
    {path:'',
    component:AdminComponent}
];
