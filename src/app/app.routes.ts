import { Routes } from '@angular/router';
import { LearnRxjsComponent } from './learn-rxjs/learn-rxjs.component';
import { LayoutComponent } from './layout/layout.component';

export const routes: Routes = [
    {path:'', component: LayoutComponent},
    {path:'learnrxjs', component: LearnRxjsComponent}
];
