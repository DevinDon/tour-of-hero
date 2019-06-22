import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HeroTopComponent } from './hero-top.component';

describe('HeroTopComponent', () => {
  let component: HeroTopComponent;
  let fixture: ComponentFixture<HeroTopComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HeroTopComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HeroTopComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
