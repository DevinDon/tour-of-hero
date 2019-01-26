import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { FormsModule } from '@angular/forms';
import { APPService } from 'src/app/service/app.service';
import { HeroService } from 'src/app/service/hero.service';
import { MockHeroService } from 'src/app/service/hero.service.spec';
import { StubHeroListComponent } from './hero-list/hero-list.component.spec';
import { HeroComponent } from './hero.component';

describe('HeroComponent', () => {

  let component: HeroComponent;
  let fixture: ComponentFixture<HeroComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [FormsModule],
      declarations: [HeroComponent, StubHeroListComponent],
      providers: [
        APPService,
        { provide: HeroService, useClass: MockHeroService }
      ]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HeroComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });

});
