import { Component, Input, OnInit } from '@angular/core';
import { Hero } from 'src/app/other/@types';
import { APPService } from 'src/app/service/app.service';
import { HeroService } from 'src/app/service/hero.service';

@Component({
  selector: 'app-hero-list',
  templateUrl: './hero-list.component.html',
  styleUrls: ['./hero-list.component.less']
})
export class HeroListComponent implements OnInit {

  @Input()
  heroes: Hero[];

  constructor(
    public app: APPService,
    private heroService: HeroService
  ) { }

  ngOnInit() { }

  deleteHero(id: number): void {
    this.heroService
      .deleteHero(id)
      .subscribe(v => this.heroes = this.heroes.filter(value => value.id !== v));
  }

}
