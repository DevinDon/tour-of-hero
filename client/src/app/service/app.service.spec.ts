import { TestBed } from '@angular/core/testing';
import { APPService } from './app.service';


describe('APPService', () => {

  let service: APPService;

  beforeEach(() => {
    TestBed.configureTestingModule({ providers: [APPService] });
  });

  it('APPService should be created', () => {
    service = TestBed.get(APPService);
    expect(service).toBeTruthy();
  });

});
