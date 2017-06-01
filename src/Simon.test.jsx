import React from 'react';
import { shallow } from 'enzyme';
import Simon from './Simon';

describe('<Simon />', () => {
  let wrapper;

  beforeEach(() => {
    wrapper = shallow(<Simon />);
  });

  it('renders with class name', () => {
    expect(wrapper.hasClass('Simon')).toBe(true);
  });

  it('renders four buttons', () => {
    expect(wrapper.find('.Simon-button')).toHaveLength(4);
  });
});
