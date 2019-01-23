import { Component, OnInit } from '@angular/core';
import { Hero } from 'src/app/other/@types';
import { APPService } from 'src/app/service/app.service';
import { HeroService } from 'src/app/service/hero.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.less']
})
export class DashboardComponent implements OnInit {

  heroes: Hero[] = [];

  constructor(
    public app: APPService,
    private heroService: HeroService
  ) { }

  ngOnInit() {
    this.getTopHeroes();
  }

  getTopHeroes() {
    this.heroService
      .getHeroes()
      .subscribe(v => this.heroes = v.slice(1, 5));
  }

}
