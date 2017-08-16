import React from 'react';
import { mount } from 'enzyme';
import Control from './Control';


describe('<Control />', () => {
  let wrapper;

  beforeEach(() => {
    const spyOnOff = jest.fn();
    const spyStart = jest.fn();

    wrapper = mount(<Control
      index={1}
      onClickOnOff={spyOnOff}
      onClickStart={spyStart}
    />);
  });

  it('has three buttons', () => {
    expect(wrapper.find('button')).toHaveLength(3);
  });

  it('has four subtitles', () => {
    expect(wrapper.find('h3')).toHaveLength(4);
  });

  it('shows the currentUserIndex on the screen', () => {
    expect(wrapper.props().index).toEqual(1);
  });
});
