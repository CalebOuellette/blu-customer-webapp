import { MaxCharLengthPipe } from './max-char-length.pipe';

describe('MaxCharLengthPipe', () => {
  it('create an instance', () => {
    const pipe = new MaxCharLengthPipe();
    expect(pipe).toBeTruthy();
  });
});
