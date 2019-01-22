import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Hero } from '../other/@types';
import { HEROES } from '../other/config';
import { delay } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class HeroService {

  constructor() { }

  getHeroes(): Observable<Hero[]> {
    return of(HEROES)
      .pipe(
        delay(1000)
      );
  }

}
