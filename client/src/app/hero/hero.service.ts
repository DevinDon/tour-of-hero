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

  constructor(
    private app: AppService,
    private http: HttpClient
  ) {
    console.log(`HeroService`);
  }

  add(hero: Hero): Observable<BaseResponse<Hero>> {
    return this.http
      .post<BaseResponse<Hero>>(AppService.API$HOST + '/add', hero);
  }

  count(): Observable<BaseResponse<number>> {
    return this.http
      .get<BaseResponse<number>>(AppService.API$HOST + '/count');
  }

  countComment(belong: number) {
    return this.http
      .get<BaseResponse<number>>(AppService.API$HOST + `/comment/count/${belong}`);
  }

  countComments(belongs: number[]) {
    return this.http
      .get<BaseResponse<number[]>>(AppService.API$HOST + `/comment/counts/${belongs.join(',')}`);
  }

  getAll(): Observable<BaseResponse<Hero[]>> {
    return this.http
      .get<BaseResponse<Hero[]>>(AppService.API$HOST + '/get/all');
  }

  getLimit(offset: number, limit: number): Observable<BaseResponse<Hero[]>> {
    return this.http
      .get<BaseResponse<Hero[]>>(AppService.API$HOST + `/get/${offset}/limit/${limit}`);
  }

  getTop(total: number = 4): Observable<BaseResponse<Hero[]>> {
    return this.http
      .get<BaseResponse<Hero[]>>(AppService.API$HOST + '/get/top');
  }

  getOne(id: number): Observable<BaseResponse<Hero>> {
    return this.http
      .get<BaseResponse<Hero>>(AppService.API$HOST + `/get/${id}`);
  }

  update(id: number, hero: Partial<Hero>): Observable<BaseResponse<Hero>> {
    return this.http
      .put<BaseResponse<Hero>>(AppService.API$HOST + `/update/${id}`, hero);
  }

  like(id: number): Observable<BaseResponse<number>> {
    return this.http
      .post<BaseResponse<number>>(AppService.API$HOST + `/like/${id}`, undefined);
  }

  delete(id: number): Observable<BaseResponse> {
    return this.http
      .delete<BaseResponse>(AppService.API$HOST + `/delete/${id}`);
  }

}
