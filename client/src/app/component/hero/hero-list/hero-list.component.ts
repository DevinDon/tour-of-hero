import { Component, OnInit } from '@angular/core';
import { Hero } from 'src/app/other/@types';
import { APPService } from 'src/app/service/app.service';
import { HeroService } from 'src/app/service/hero.service';

@Component({
  selector: 'app-hero-list',
  templateUrl: './hero-list.component.html',
  styleUrls: ['./hero-list.component.less']
})
export class HeroListComponent implements OnInit {

  heroes: Hero[];

  constructor(
    public app: APPService,
    private heroService: HeroService
  ) { }

  ngOnInit() {
    this.getHeroes();
  }

  getHeroes(): void {
    this.heroService
      .getHeroes()
      .subscribe(v => this.heroes = v);
  }

}
