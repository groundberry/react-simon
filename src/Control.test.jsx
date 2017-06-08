import React from 'react';
import { shallow } from 'enzyme';
import Control from './Control';


describe('<Control />', () => {
  let wrapper;

  beforeEach(() => {
    const spy = jest.fn();
    wrapper = shallow(<Control onClickOnOff={spy} />);
  });

  it('has three buttons', () => {
    expect(wrapper.find('button')).toHaveLength(3);
  });

  it('has four subtitles', () => {
    expect(wrapper.find('h3')).toHaveLength(4);
  });
});
