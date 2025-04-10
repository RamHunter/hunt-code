import { Routes } from '@angular/router';
import { AdminLayoutComponent } from './layouts/admin-layout/admin-layout.component';

export const routes: Routes = [
    { path:'', redirectTo:'admin', pathMatch:'full' },
    { path : 'admin', component: AdminLayoutComponent, loadChildren: () =>
      import('./views/views.route').then((mod) => mod.VIEW_ROUTES),   
    }
];
