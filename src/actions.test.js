import {
  turnGameOnOff,
  checkUserOption,
} from './actions';

describe('actions', () => {
  describe('turnGameOnOff', () => {
    it('changes the status of the app from off to on', () => {
      const prevState = {
        sequence: [],
        status: 'off',
        round: null,
        currentUserIndex: null,
      };

      const newState = {
        sequence: expect.any(Array),
        status: 'on',
        round: 1,
        currentUserIndex: 0,
      };

      expect(turnGameOnOff(prevState)).toEqual(newState);
    });

    it('changes the status of the app from on to off', () => {
      const prevState = {
        sequence: ['Green', 'Blue', 'Yellow'],
        status: 'on',
        round: 1,
        currentColor: 'Green',
        currentUserIndex: 0,
      };

      const newState = {
        sequence: [],
        status: 'off',
        round: null,
        currentColor: null,
        currentUserIndex: null,
      };

      expect(turnGameOnOff(prevState)).toEqual(newState);
    });
  });

  describe('checkUserOption', () => {
    it('turns the currentUserIndex to 0 when the user enters the wrong color', () => {
      const prevState = {
        sequence: ['Green', 'Blue', 'Yellow'],
        round: 2,
        currentUserIndex: 1,
      };

      const newState = {
        currentUserIndex: 0,
      };

      expect(checkUserOption('Red', prevState)).toEqual(newState);
    });

    it('increases the currentUserIndex when the currentUserIndex is not equal to the round minus one', () => {
      const prevState = {
        sequence: ['Green', 'Blue', 'Yellow'],
        round: 2,
        currentUserIndex: 0,
      };

      const newState = {
        currentUserIndex: 1,
      };

      expect(checkUserOption('Green', prevState)).toEqual(newState);
    });

    it('increases the round and turns currentUserIndex to 0 when the user enters the correct sequence', () => {
      const prevState = {
        sequence: ['Green', 'Blue', 'Yellow'],
        round: 2,
        currentUserIndex: 1,
      };

      const newState = {
        round: 3,
        currentUserIndex: 0,
      };

      expect(checkUserOption('Blue', prevState)).toEqual(newState);
    });
  });
});
