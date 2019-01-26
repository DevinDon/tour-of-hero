import { HttpClient } from '@angular/common/http';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { TestBed } from '@angular/core/testing';
import { Observable, of } from 'rxjs';
import { Hero, Response } from '../other/@types';
import { HeroService } from './hero.service';
import { MessageService } from './message.service';

export class MockHeroService {

  private MOCK_HEROES: Hero[] = [
    { id: 1, name: 'Test1' },
    { id: 2, name: 'Test2' }
  ];

  addHero(hero: Hero): Observable<number> {
    const newHero = {
      id: this.MOCK_HEROES[this.MOCK_HEROES.length - 1].id + 1,
      name: hero.name
    };
    this.MOCK_HEROES.push(newHero);
    return of(newHero.id);
  }

  deleteHero(id: number) {
    return of(id);
  }

  getHero(id: number): Observable<Hero> {
    return of(this.MOCK_HEROES.find(v => v.id === id));
  }

  getHeroes(): Observable<Hero[]> {
    return of(this.MOCK_HEROES);
  }

  updateHero(hero: Hero) {
    return of(hero.id);
  }

}

describe('HeroService', () => {

  let service: HeroService;
  let httpClient: jasmine.SpyObj<HttpClient>;
  let httpTestingController: HttpTestingController;
  let messageService: jasmine.SpyObj<MessageService>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [
        HeroService,
        HttpClient,
        MessageService
      ]
    });
  });

  it('should be created', () => {
    service = TestBed.get(HeroService);
    httpClient = TestBed.get(HttpClient);
    httpTestingController = TestBed.get(HttpTestingController);
    messageService = TestBed.get(MessageService);
    expect(service).toBeTruthy();
    expect(httpClient).toBeTruthy();
    expect(messageService).toBeTruthy();
  });

  it('#addHero should add a hero to server', done => {
    const hero: Hero = { id: 0, name: 'Test Hero' };
    httpClient.post<Response<Hero>>('http://localhost:8080/v1/hero/add', hero)
      .subscribe(v => {
        hero.id = v.content && v.content.id;
        expect(v.content && v.content.id).toBeGreaterThan(0);
        console.log(v);
        console.log(`HTTP RESPONSE: ${JSON.stringify(hero)}`);
        done();
      });
    const req = httpTestingController.expectOne('http://localhost:8080/v1/hero/add');
    expect(req.request.method).toEqual('POST');
    req.flush({ content: { id: hero.id + 1, name: hero.name } });
    httpTestingController.verify();
  }, 5000);

});
