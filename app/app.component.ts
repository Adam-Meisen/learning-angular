import { Component } from '@angular/core';
import { ROUTER_DIRECTIVES } from '@angular/router';

import { APP_ROUTER_PROVIDERS } from './app.routes';
import { HeroService } from './hero.service';
import { HeroesComponent } from './heroes.component';
import { DashboardComponent } from './dashboard.component';
import { HeroDetailComponent } from './hero-detail.component';

@Component({
  selector: 'my-app',
  template: `
    <h1>{{title}}</h1>
    <nav>
      <a [routerLink]="['/dashboard']">Dashboard</a>
      <a [routerLink]="['/heroes']">Heroes</a>
    <nav>
    <router-outlet></router-outlet>
    `,
  styleUrls: ['app/app.component.css'],
  providers: [
    HeroService
  ],
  directives: [ROUTER_DIRECTIVES]
})

export class AppComponent {
  title = 'Tour of Heroes';
}
