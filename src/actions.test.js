import {
  getArrOfColors,
} from './actions';

describe('actions', () => {
  describe('getArrOfColors', () => {
    it('returns an array with 20 elements', () => {
      expect(getArrOfColors()).toHaveLength(20);
    });
  });
});
