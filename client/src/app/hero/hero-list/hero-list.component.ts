import { Component, OnInit } from '@angular/core';
import { AppService } from 'src/app/app.service';
import { HeroService } from '../hero.service';
import { Hero } from '../hero.type';

@Component({
  selector: 'app-hero-list',
  templateUrl: './hero-list.component.html',
  styleUrls: ['./hero-list.component.scss']
})
export class HeroListComponent implements OnInit {

  heroes: Hero[] = [];

  constructor(
    protected app: AppService,
    private service: HeroService
  ) { }

  ngOnInit() {
    this.service.getAll().subscribe(v => this.heroes = v);
  }

  trackByFn(index: number, item: Hero) {
    return item.id;
  }

}
