import {
  getRandomColors,
} from './actions';

describe('actions', () => {
  describe('getRandomColors', () => {
    it('returns an array with 20 elements', () => {
      expect(getRandomColors()).toHaveLength(20);
    });
  });
});
