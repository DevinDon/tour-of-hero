import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { Hero, Response } from '../other/@types';
import { MessageService } from './message.service';

@Injectable({
  providedIn: 'root'
})
export class HeroService {

  private api: string;

  constructor(
    private http: HttpClient,
    private messageService: MessageService
  ) {
    if (location.hostname === 'localhost') {
      this.api = 'http://localhost:8080/v1';
    } else {
      this.api = 'api/v1';
    }
  }

  private logToMessageService(message: string): void {
    this.messageService.add(`Hero Service: ${message}`);
  }

  addHero(hero: Hero): Observable<Hero> {
    return this.http
      .post<Response<Hero>>(`${this.api}/hero/add`, hero)
      .pipe(
        map(v => {
          this.logToMessageService(v.status.message);
          return v.content;
        })
      );
  }

  deleteHero(id: number): Observable<number> {
    return this.http
      .delete<Response<number>>(`${this.api}/hero/delete`, { params: { id: String(id) } })
      .pipe(
        map(v => {
          this.logToMessageService(v.status.message);
          return v.content;
        })
      );
  }

  getHero(id: number): Observable<Hero> {
    return this.http
      .get<Response<Hero>>(`${this.api}/hero`, { params: { id: String(id) } })
      .pipe(
        map(v => {
          if (v.status.code) {
            this.logToMessageService(`Hero not found, ID: ${id}.`);
          } else {
            this.logToMessageService(`Fetched hero, ID: ${v.content.id}.`);
          }
          return v.content;
        })
      );
  }

  getHeroes(): Observable<Hero[]> {
    return this.http
      .get<Response<Hero[]>>(`${this.api}/heroes`)
      .pipe(
        map(v => {
          if (v.status.code) {
            this.logToMessageService('Cannot fetch hero list.');
          } else {
            this.logToMessageService(`Fetched hero list, total: ${v.content.length}.`);
          }
          return v.content;
        })
      );
  }

  getHeroesByName(name: string): Observable<Hero[]> {
    return this.http
      .get<Response<Hero[]>>(`${this.api}/heroes`, { params: { name } })
      .pipe(
        map(v => {
          if (v.status.code) {
            this.logToMessageService('Cannot fetch hero list.');
          } else {
            this.logToMessageService(`Fetched hero list, total: ${v.content.length}.`);
          }
          return v.content;
        })
      );
  }

  updateHero(hero: Hero): Observable<number> {
    return this.http
      .put<Response<number>>(`${this.api}/hero/update`, hero)
      .pipe(
        map(v => {
          this.logToMessageService(v.status.message);
          return v.content;
        })
      );
  }

}
