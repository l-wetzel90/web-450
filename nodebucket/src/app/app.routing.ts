import {Routes} from '@angular/router';
import {BaseLayoutComponent} from './shared/base-layout/base-layout.component';
import {HomeComponent} from './pages/home/home.component';
import {LoginComponent} from './pages/login/login.component';
import { AboutComponent } from './pages/about/about.component';

export const AppRoutes: Routes = [
  {
    path: '',
    component: BaseLayoutComponent,
    children: [
      {
        path: '',
        component: HomeComponent
      },
      {
        path: 'login',
        component: LoginComponent
      },
      {
        path: 'about',
        component: AboutComponent
      }
      /*
        New components go here...
       */

    ]
  }
];
