import { TestBed } from '@angular/core/testing';

import { I18NService } from './i18n.service';

describe('I18NService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: I18NService = TestBed.get(I18NService);
    expect(service).toBeTruthy();
  });
});
