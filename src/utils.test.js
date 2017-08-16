import {
  getRandomColors,
} from './utils';

describe('utils', () => {
  describe('getRandomColors', () => {
    it('returns an array with 20 elements', () => {
      expect(getRandomColors()).toHaveLength(20);
    });
  });
});
