import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { FormsModule } from '@angular/forms';
import { HeroService } from 'src/app/service/hero.service';
import { MockHeroService } from 'src/app/service/hero.service.spec';
import { StubHeroListComponent } from '../hero-list/hero-list.component.spec';
import { HeroSearchComponent } from './hero-search.component';

describe('HeroSearchComponent', () => {

  let component: HeroSearchComponent;
  let fixture: ComponentFixture<HeroSearchComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [FormsModule],
      declarations: [
        HeroSearchComponent,
        StubHeroListComponent
      ],
      providers: [
        { provide: HeroService, useClass: MockHeroService }
      ]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HeroSearchComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

});
