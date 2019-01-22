import { Injectable } from '@angular/core';
import { Hero } from '../other/@types';
import { HEROES } from '../other/config';

@Injectable({
  providedIn: 'root'
})
export class HeroService {

  constructor() { }

  getHeroes(): Hero[] {
    return HEROES;
  }

}
