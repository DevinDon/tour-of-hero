import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { AppService } from '../app.service';
import { BaseResponse } from '../model/base.model';
import { Hero } from './hero.model';

@Injectable({
  providedIn: 'root'
})
export class HeroService {

  private API$HERO: string;

  constructor(
    private http: HttpClient
  ) {
    this.API$HERO = AppService.API + '/hero';
  }

  add(hero: Hero): Observable<BaseResponse<Hero>> {
    return this.http
      .post<BaseResponse<Hero>>(this.API$HERO, hero);
  }

  count(): Observable<BaseResponse<number>> {
    return this.http
      .get<BaseResponse<number>>(this.API$HERO + '/count');
  }

  countComment(belong: number) {
    return this.http
      .get<BaseResponse<number>>(this.API$HERO + `/comment/count/${belong}`);
  }

  countComments(belongs: number[]) {
    return this.http
      .get<BaseResponse<number[]>>(this.API$HERO + `/comment/counts/${belongs.join(',')}`);
  }

  getAll(): Observable<BaseResponse<Hero[]>> {
    return this.http
      .get<BaseResponse<Hero[]>>(this.API$HERO + '/all');
  }

  getLimit(offset: number, limit: number): Observable<BaseResponse<Hero[]>> {
    return this.http
      .get<BaseResponse<Hero[]>>(this.API$HERO + `/${offset}/limit/${limit}`);
  }

  getTop(total: number = 4): Observable<BaseResponse<Hero[]>> {
    return this.http
      .get<BaseResponse<Hero[]>>(this.API$HERO + '/top');
  }

  getOne(id: number): Observable<BaseResponse<Hero>> {
    return this.http
      .get<BaseResponse<Hero>>(this.API$HERO + `/${id}`);
  }

  update(id: number, hero: Partial<Hero>): Observable<BaseResponse<Hero>> {
    return this.http
      .put<BaseResponse<Hero>>(this.API$HERO + `/${id}`, hero);
  }

  like(id: number): Observable<BaseResponse<number>> {
    return this.http
      .post<BaseResponse<number>>(this.API$HERO + `/like/${id}`, undefined);
  }

  delete(id: number): Observable<BaseResponse> {
    return this.http
      .delete<BaseResponse>(this.API$HERO + `/${id}`);
  }

}
