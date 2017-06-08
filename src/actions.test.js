import {
  getRandomColors,
} from './actions';

describe('actions', () => {
  describe('getRandomColors', () => {
    it('returns an array with 20 elements', () => {
      expect(getRandomColors()).toHaveLength(20);
    });
  });

  describe('playGreen', () => {
    it('is called when the green button in clicked', () => {
      const playGreen = jest.fn();
      playGreen();
      expect(playGreen).toHaveBeenCalled();
    });
  });

  describe('playRed', () => {
    it('is called when the red button in clicked', () => {
      const playRed = jest.fn();
      playRed();
      expect(playRed).toHaveBeenCalled();
    });
  });

  describe('playYellow', () => {
    it('is called when the yellow button in clicked', () => {
      const playYellow = jest.fn();
      playYellow();
      expect(playYellow).toHaveBeenCalled();
    });
  });

  describe('playBlue', () => {
    it('is called when the b button in clicked', () => {
      const playBlue = jest.fn();
      playBlue();
      expect(playBlue).toHaveBeenCalled();
    });
  });
});
