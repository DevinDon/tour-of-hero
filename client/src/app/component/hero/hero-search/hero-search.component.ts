import { Component, OnInit } from '@angular/core';
import { Hero } from 'src/app/other/@types';
import { HeroService } from 'src/app/service/hero.service';

@Component({
  selector: 'app-hero-search',
  templateUrl: './hero-search.component.html',
  styleUrls: ['./hero-search.component.less']
})
export class HeroSearchComponent implements OnInit {

  name: string;
  heroes: Hero[];

  constructor(
    private heroService: HeroService
  ) { }

  ngOnInit() { }

  searchHeroes() {
    this.heroService
      .getHeroesByName(this.name)
      .subscribe(v => this.heroes = v);
  }

}
