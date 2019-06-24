import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HeroTopsComponent } from './hero-tops.component';

describe('HeroTopsComponent', () => {
  let component: HeroTopsComponent;
  let fixture: ComponentFixture<HeroTopsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [HeroTopsComponent]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HeroTopsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
