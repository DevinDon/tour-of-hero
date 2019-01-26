import { Location } from '@angular/common';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { FormsModule } from '@angular/forms';
import { RouterTestingModule } from '@angular/router/testing';
import { FillWithPipe } from 'src/app/other/pipe/fill-with.pipe';
import { HeroService } from 'src/app/service/hero.service';
import { MockHeroService } from 'src/app/service/hero.service.spec';
import { HeroDetailComponent } from './hero-detail.component';

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
