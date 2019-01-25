import { TestBed } from '@angular/core/testing';

import { MessageService } from './message.service';

describe('MessageService', () => {

  let service: MessageService;

  beforeEach(() => {
    TestBed.configureTestingModule({ providers: [MessageService] });
  });

  it('MessageService should be created', () => {
    service = TestBed.get(MessageService);
    expect(service).toBeTruthy();
  });

  it('#add should add a new message to message array', done => {
    const message = 'test message';
    service.add(message);
    expect(service.message.pop()).toBe(message);
    done();
  });

  it('#clear should clear the message array', done => {
    service.clear();
    expect(service.message.length).toBe(0);
    done();
  });

});
