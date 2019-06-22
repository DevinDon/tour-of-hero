import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { filter, mergeAll, map } from 'rxjs/operators';
import { Hero } from './hero.type';

@Injectable({
  providedIn: 'root'
})
export class HeroService {

  static readonly API$HEROES = 'assets/heroes.json';

  constructor(
    private http: HttpClient
  ) { }

  getOne(id: number): Observable<Hero> {
    return this.http
      .get<Hero[]>(HeroService.API$HEROES)
      .pipe(
        mergeAll(),
        filter(hero => hero.id === id)
      );
  }

  getTop(total: number = 4): Observable<Hero[]> {
    return this.http
      .get<Hero[]>(HeroService.API$HEROES)
      .pipe(map(heroes => heroes.slice(0, total)));
  }

  getAll(): Observable<Hero[]> {
    return this.http.get<Hero[]>(HeroService.API$HEROES);
  }

}
