import { provideRouter, RouterConfig } from '@angular/router';

import { DashboardComponent } from './dashboard.component';
import { HeroesComponent } from './heroes.component';
import { HeroDetailComponent } from './hero-detail.component';

export const routes: RouterConfig = [
  {
    path: 'dashboard',
    component: DashboardComponent,
  },
  {
    path: 'heroes',
    component: HeroesComponent
  },
  {
    path: 'detail/:id',
    component: HeroDetailComponent
  },
  {
    path: '',
    redirectTo: 'dashboard',
    terminal: true
  }
];

export const APP_ROUTER_PROVIDERS = [
  provideRouter(routes)
];
