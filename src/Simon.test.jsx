import React from 'react';
import { mount } from 'enzyme';
import Simon from './Simon';

describe('<Simon />', () => {
  let wrapper;

  beforeEach(() => {
    wrapper = mount(<Simon />);
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

  describe('handleClickOnOff', () => {
    it('adds items to the sequence array of the state', () => {
      wrapper.find('.Control-buttonOnOff').simulate('click');
      expect(wrapper.state('sequence')).toHaveLength(20);
    });
  });

  describe('handleClickAddColor', () => {
    it('adds the value of the clicked button to the state when it is empty', () => {
      wrapper.find('.Simon-buttonGreen').simulate('click');
      expect(wrapper.state('userInput')).toEqual(['Green']);
    });

    it('adds the value of the clicked button to the state when there is not empty', () => {
      wrapper.find('.Simon-buttonGreen').simulate('click');
      wrapper.find('.Simon-buttonRed').simulate('click');
      wrapper.find('.Simon-buttonYellow').simulate('click');
      expect(wrapper.state('userInput')).toEqual(['Green', 'Red', 'Yellow']);
    });
  });
});
