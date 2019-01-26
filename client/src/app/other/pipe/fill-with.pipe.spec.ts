import { FillWithPipe } from './fill-with.pipe';

describe('FillWithPipe', () => {

  let pipe: FillWithPipe;

  it('should create an instance', () => {
    pipe = new FillWithPipe();
    expect(pipe).toBeTruthy();
  });

  it('transform one digit to two, input number, fill with default char', done => {
    for (let i = 0; i < 10; i++) {
      expect(pipe.transform(i, 2)).toBe('0' + i);
    }
    done();
  });

  it('transform one digit to two, input string, fill with default value', done => {
    for (let i = 0; i < 10; i++) {
      expect(pipe.transform(i.toString(), 2)).toBe('0' + i);
    }
    done();
  });

  it('transform two digit to five, input number, fill with char "X"', done => {
    for (let i = 10; i < 100; i++) {
      expect(pipe.transform(i, 5, 'X')).toBe('XXX' + i);
    }
    done();
  });

  it('transform two digit to one, input number, fill with char "A"', done => {
    for (let i = 10; i < 100; i++) {
      expect(pipe.transform(i, 1, 'A')).toBe(i.toString());
    }
    done();
  });

});
