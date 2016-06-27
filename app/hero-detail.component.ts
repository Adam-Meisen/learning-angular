import { Component, EventEmitter, Input, OnInit, OnDestroy, Output } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { APP_ROUTER_PROVIDERS } from './app.routes';
import { Hero } from './hero';
import { HeroService } from './hero.service';

@Component({
  selector: 'my-hero-detail',
  templateUrl: 'app/hero-detail.component.html',
  styleUrls: ['app/hero-detail.component.css']
})

export class HeroDetailComponent implements OnInit, OnDestroy {
  @Input() hero: Hero;
  @Output() close = new EventEmitter();
  error: any;
  navigated = false; //true if navigated here
  private sub: any;

  constructor(
    private heroService: HeroService,
    private route: ActivatedRoute) {

  }

  ngOnInit() {
    this.sub = this.route.params.subscribe(params => {
      let id = +params['id'];
      if (id !== null) {
        this.navigated = true;
        this.heroService.getHero(id)
          .then(hero => this.hero = hero);
      } else {
        this.navigated = false;
        this.hero = new Hero();
      }
    });
  }

  ngOnDestroy() {
    this.sub.unsubscribe;
  }

  save() {
    this.heroService
      .save(this.hero)
      .then(hero => {
        this.hero = hero; //saved hero, with id if new
        this.goBack(hero);
      })
      .catch(error => this.error = error);
  }

  goBack(savedHero: Hero = null) {
    this.close.emit(savedHero);
    if (this.navigated) {
      window.history.back();
    }
  }
}
