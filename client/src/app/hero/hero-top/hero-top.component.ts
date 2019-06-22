import { Component, OnInit } from '@angular/core';
import { HeroService } from '../hero.service';
import { Hero } from '../hero.type';

@Component({
  selector: 'app-hero-top',
  templateUrl: './hero-top.component.html',
  styleUrls: ['./hero-top.component.scss']
})
export class HeroTopComponent implements OnInit {

  heroes: Hero[] = [];

  constructor(
    private service: HeroService
  ) { }

  ngOnInit() {
    this.service.getTop().subscribe(v => this.heroes = v);
  }

  trackByFn(index: number, item: Hero) {
    return item.id;
  }

}
