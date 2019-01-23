import { Component, OnInit } from '@angular/core';
import { Subject } from 'rxjs';
import { debounceTime, distinctUntilChanged, switchMap } from 'rxjs/operators';
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

  private subject = new Subject<string>();

  constructor(
    private heroService: HeroService
  ) { }

  ngOnInit() {
    this.subject
      .pipe(
        debounceTime(300),
        distinctUntilChanged(),
        switchMap(v => this.heroService.getHeroesByName(v))
      )
      .subscribe(v => this.heroes = v);
  }

  input(name: string) {
    this.subject.next(name);
  }

}
