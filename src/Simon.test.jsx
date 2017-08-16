import React from 'react';
import { mount } from 'enzyme';
import Simon from './Simon';

describe('<Simon />', () => {
  let wrapper;

  beforeEach(() => {
    wrapper = mount(<Simon
      sequence={['Green', 'Red', 'Yellow']}
      status={'off'}
      round={0}
      currentColor={null}
      currentUserInput={null}
      currentUserIndex={0}
    />);
  });

  it('has an initial state of "off"', () => {
    expect(wrapper.state('status')).toBe('off');
  });

  it('renders with class name', () => {
    expect(wrapper.hasClass('Simon')).toBe(true);
  });

  it('renders four buttons', () => {
    expect(wrapper.find('.Simon-button')).toHaveLength(4);
  });

  describe('handleUserTurn', () => {
    it('makes a different sound when the green button is clicked', () => {
      const spy = jest.fn();
      wrapper.find('.Simon-buttonGreen').simulate('click');
      spy();
      expect(spy).toBeCalled();
    });
  });
});
