import { TestBed } from '@angular/core/testing';

import { HeroService } from './hero.service';
import { MessageService } from './message.service';
import { HttpClient } from '@angular/common/http';
import { Hero } from '../other/@types';

describe('HeroService', () => {

  let service: HeroService;
  let httpClient: jasmine.SpyObj<HttpClient>;
  let messageService: jasmine.SpyObj<MessageService>;

  beforeEach(() => {
    const httpSpy = jasmine.createSpyObj('HttpClient', ['post', 'delete', 'get', 'put']);
    const messageSpy = jasmine.createSpyObj('MessageService', ['message', 'add', 'clear']);
    TestBed.configureTestingModule({
      providers: [
        HeroService,
        { provide: HttpClient, useValue: httpSpy },
        { provide: MessageService, useValue: messageSpy }
      ]
    });
  });

  it('HeroService, HttpClient & MessageService should be created', () => {
    service = TestBed.get(HeroService);
    httpClient = TestBed.get(HttpClient);
    messageService = TestBed.get(MessageService);
    expect(service).toBeTruthy();
    expect(httpClient).toBeTruthy();
    expect(messageService).toBeTruthy();
  });

  it('#addHero should add a hero to server', done => {
    const hero: Hero = { id: 0, name: 'Test Hero' };
    // service.addHero(hero).subscribe(v => {
    //   expect(v).toBeGreaterThan(0);
    // });
    // expect
    done();
  });

});
