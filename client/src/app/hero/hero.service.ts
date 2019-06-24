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

  update(hero: Partial<Hero>): Observable<BaseResponse<Hero>> {
    return this.http
      .put<BaseResponse<Hero>>(HeroService.API$HEROES + `/update/${hero.id}`, hero);
  }

  like(id: number): Observable<BaseResponse<number>> {
    return this.http
      .post<BaseResponse<number>>(HeroService.API$HEROES + `/like/${id}`, undefined);
  }

  delete(id: number): Observable<BaseResponse> {
    return this.http
      .delete<BaseResponse>(HeroService.API$HEROES + `/delete/${id}`);
  }

}
