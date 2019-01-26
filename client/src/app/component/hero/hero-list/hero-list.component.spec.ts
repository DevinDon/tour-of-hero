import { Component, Input } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { Hero } from 'src/app/other/@types';
import { FillWithPipe } from 'src/app/other/pipe/fill-with.pipe';
import { APPService } from 'src/app/service/app.service';
import { HeroService } from 'src/app/service/hero.service';
import { MockHeroService } from 'src/app/service/hero.service.spec';
import { HeroListComponent } from './hero-list.component';

@Component({ selector: 'app-hero-list', template: '' })
export class StubHeroListComponent {

  @Input()
  heroes: Hero[];

}

describe('HeroListComponent', () => {

  let component: HeroListComponent;
  let fixture: ComponentFixture<HeroListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [RouterTestingModule],
      declarations: [HeroListComponent, FillWithPipe],
      providers: [
        APPService,
        { provide: HeroService, useClass: MockHeroService }
      ]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HeroListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });

});
