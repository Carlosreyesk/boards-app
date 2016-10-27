import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home';
import { LandingComponent } from './home/landing';
import { LoginComponent } from './home/login';
import { AboutComponent } from './home/about';
import { DashboardComponent } from './dashboard';
import { NoContentComponent } from './no-content';

import { DataResolver } from './app.resolver';


export const ROUTES: Routes = [
  { path: '',  component: HomeComponent , children: [
    {
      path : '',
      component: LandingComponent
    },
    {
      path : 'about',
      component: AboutComponent
    },
    {
      path : 'login',
      component: LoginComponent
    }
  ]},
  { path: 'dashboard', component: DashboardComponent },
  {
    path: 'detail', loadChildren: () => System.import('./+detail').then((comp: any) => {
      return comp.default;
    })
    ,
  },
  { path: '**',    component: NoContentComponent },
];
