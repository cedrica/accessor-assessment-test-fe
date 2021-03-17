import { ToRomanNumberPipe } from './to-roman-number.pipe';

describe('ToRomanNumberPipe', () => {
  it('create an instance', () => {
    const pipe = new ToRomanNumberPipe();
    expect(pipe).toBeTruthy();
  });
});
