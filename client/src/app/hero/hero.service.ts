import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { delay, filter, mergeAll } from 'rxjs/operators';
import { AppService } from '../app.service';
import { BaseResponse } from '../model/base.model';
import { Hero } from './hero.type';

@Injectable({
  providedIn: 'root'
})
export class HeroService {

  static readonly API$HEROES = 'http://localhost:8080';

  constructor(
    private app: AppService,
    private http: HttpClient
  ) { }

  getAll(): Observable<BaseResponse<Hero[]>> {
    return this.http
      .get<BaseResponse<Hero[]>>(HeroService.API$HEROES + '/get/all');
  }

  getTop(total: number = 4): Observable<BaseResponse<Hero[]>> {
    return this.http
      .get<BaseResponse<Hero[]>>(HeroService.API$HEROES + '/get/top');
  }

  getOne(id: number): Observable<BaseResponse<Hero>> {
    return this.http
      .get<BaseResponse<Hero>>(HeroService.API$HEROES + `/get/${id}`);
  }

  saveOne(hero: Hero): Observable<BaseResponse> {
    // this.app.busy();
    return of<BaseResponse>({ status: true })
      .pipe(
        delay(1000),
        // finalize(() => this.app.free())
      );
  }

  like(id: number) {
    // this.app.busy();
    return this.http
      .post(`/like/${id}`, {})
      .pipe(
        // finalize(() => this.app.free())
      );
  }

}
