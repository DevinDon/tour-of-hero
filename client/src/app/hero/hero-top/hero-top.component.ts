import { Component, OnInit } from '@angular/core';
import { AppService } from 'src/app/app.service';
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
    private app: AppService,
    private service: HeroService
  ) { }

  ngOnInit() {
    this.service.getTop().subscribe(v => {
      if (v.status) {
        this.heroes = v.content;
      } else {
        this.app.openBar('Cannot get top heroes data.');
      }
    });
  }

  trackByFn(index: number, item: Hero) {
    return item.id;
  }

  like() {
    // this.service.
  }

}
