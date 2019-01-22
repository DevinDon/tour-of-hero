import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Hero } from '../other/@types';
import { HEROES } from '../other/config';
import { delay, tap } from 'rxjs/operators';
import { MessageService } from './message.service';

@Injectable({
  providedIn: 'root'
})
export class HeroService {

  constructor(
    private messageService: MessageService
  ) { }

  private logToMessageService(message: string): void {
    this.messageService.add(`Hero Service: ${message}`);
  }

  getHeroes(): Observable<Hero[]> {
    return of(HEROES)
      .pipe(
        delay(1000),
        tap(v => this.logToMessageService('Fetched all heroes.'))
      );
  }

}
