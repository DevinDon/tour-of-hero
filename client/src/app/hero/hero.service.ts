import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { delay, filter, finalize, map, mergeAll } from 'rxjs/operators';
import { AppService } from '../app.service';
import { BaseResponse } from '../model/base.model';
import { Hero } from './hero.type';

@Injectable({
  providedIn: 'root'
})
export class HeroService {

  static readonly API$HEROES = 'assets/heroes.json';

  constructor(
    private app: AppService,
    private http: HttpClient
  ) { }

  getAll(): Observable<Hero[]> {
    this.app.busy();
    return this.http
      .get<Hero[]>(HeroService.API$HEROES)
      .pipe(finalize(() => this.app.free()));
  }

  getTop(total: number = 4): Observable<Hero[]> {
    this.app.busy();
    return this.http
      .get<Hero[]>(HeroService.API$HEROES)
      .pipe(
        delay(1500),
        map(heroes => heroes.slice(0, total)),
        finalize(() => this.app.free())
      );
  }

  getOne(id: number): Observable<Hero> {
    this.app.busy();
    return this.http
      .get<Hero[]>(HeroService.API$HEROES)
      .pipe(
        mergeAll(),
        filter(hero => hero.id === id),
        finalize(() => this.app.free())
      );
  }

  saveOne(hero: Hero): Observable<BaseResponse> {
    this.app.busy();
    return of<BaseResponse>({ status: true })
      .pipe(
        delay(1000),
        finalize(() => this.app.free())
      );
  }

}
