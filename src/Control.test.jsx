import React from 'react';
import { shallow } from 'enzyme';
import Control from './Control';


describe('<Control />', () => {
  const wrapper = shallow(<Control />);

  it('has three buttons', () => {
    expect(wrapper.find('button')).toHaveLength(3);
  });

  it('has four subtitles', () => {
    expect(wrapper.find('h3')).toHaveLength(4);
  });
});
