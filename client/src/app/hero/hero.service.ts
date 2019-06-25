import { HttpClient } from '@angular/common/http';
import { Injectable, isDevMode } from '@angular/core';
import { Observable } from 'rxjs';
import { AppService } from '../app.service';
import { BaseResponse } from '../model/base.model';
import { Hero } from './hero.type';

@Injectable({
  providedIn: 'root'
})
export class HeroService {

  private static API$HEROES = 'https://api.don.red/tour-of-heroes';

  constructor(
    private app: AppService,
    private http: HttpClient
  ) {
    if (isDevMode()) {
      HeroService.API$HEROES = 'http://localhost:8080';
    }
  }

  getAll(): Observable<BaseResponse<Hero[]>> {
    return this.http
      .get<BaseResponse<Hero[]>>(HeroService.API$HEROES + '/get/all');
  }

  getLimit(offset: number, limit: number): Observable<BaseResponse<Hero[]>> {
    return this.http
      .get<BaseResponse<Hero[]>>(HeroService.API$HEROES + `/get/${offset}/limit/${limit}`);
  }

  getTop(total: number = 4): Observable<BaseResponse<Hero[]>> {
    return this.http
      .get<BaseResponse<Hero[]>>(HeroService.API$HEROES + '/get/top');
  }

  getOne(id: number): Observable<BaseResponse<Hero>> {
    return this.http
      .get<BaseResponse<Hero>>(HeroService.API$HEROES + `/get/${id}`);
  }

  update(id: number, hero: Partial<Hero>): Observable<BaseResponse<Hero>> {
    return this.http
      .put<BaseResponse<Hero>>(HeroService.API$HEROES + `/update/${id}`, hero);
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
