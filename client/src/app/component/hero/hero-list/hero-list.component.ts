import { Component, OnInit } from '@angular/core';
import { tap } from 'rxjs/operators';
import { Hero } from 'src/app/other/@types';
import { APPService } from 'src/app/service/app.service';
import { HeroService } from 'src/app/service/hero.service';

@Component({
  selector: 'app-hero-list',
  templateUrl: './hero-list.component.html',
  styleUrls: ['./hero-list.component.less']
})
export class HeroListComponent implements OnInit {

  name: string;
  heroes: Hero[];

  constructor(
    public app: APPService,
    private heroService: HeroService
  ) { }

  ngOnInit() {
    this.getHeroes();
  }

  addHero(): void {
    const name = this.name;
    this.heroService
      .addHero({ id: 0, name })
      .pipe(tap(v => this.name = ''))
      .subscribe(v => this.heroes.push({ id: v, name }));
  }

  deleteHero(id: number): void {
    this.heroService
      .deleteHero(id)
      .subscribe(v => this.heroes = this.heroes.filter(value => value.id !== v));
  }

  getHeroes(): void {
    this.heroService
      .getHeroes()
      .subscribe(v => this.heroes = v);
  }

}
