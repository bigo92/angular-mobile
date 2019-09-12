import { Routes, RouterModule } from '@angular/router';
import { AppComponent } from './app.component';

const routes: Routes = [
  { path:'', loadChildren:'./home/home.module#HomeModule' },
];

export const AppRoutes = RouterModule.forRoot(routes);
