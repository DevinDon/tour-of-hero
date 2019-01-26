import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HeroDetailComponent } from './hero-detail.component';
import { HeroService } from 'src/app/service/hero.service';
import { of, Observable } from 'rxjs';
import { Hero } from 'src/app/other/@types';
import { RouterTestingModule } from '@angular/router/testing';
import { Location } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { FillWithPipe } from 'src/app/other/pipe/fill-with.pipe';

const mockHeroes: Hero[] = [
  { id: 1, name: 'Test1' },
  { id: 2, name: 'Test2' }
];

class MockHeroService {

  getHero(id: number): Observable<Hero> {
    return of(mockHeroes.find(v => v.id === id));
  }

  updateHero(hero: Hero) {
    return of(hero.id);
  }

}

describe('HeroDetailComponent', () => {

  let component: HeroDetailComponent;
  let fixture: ComponentFixture<HeroDetailComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [RouterTestingModule, FormsModule],
      declarations: [HeroDetailComponent, FillWithPipe],
      providers: [
        { provide: HeroService, useClass: MockHeroService },
        // { provide: Location, useValue: jasmine.createSpyObj('Location', ['back']) }
        Location
      ]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HeroDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('HeroDetail should create', () => {
    expect(component).toBeTruthy();
  });

});
