import React from 'react';
import { Filter } from '../components/Filter';
import { configure, shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import toJSON from 'enzyme-to-json';
configure({ adapter: new Adapter() });

describe('<Filter />', () => {
  it('renders and displays labels with text properly', () => {
    const wrapper = shallow(<Filter />);
    const label = wrapper.find('label');
    expect(label.text()).toBe('FilterAllErrandWork');
    const select = wrapper.find('select');
    expect(select.children()).toHaveLength(3);
  });

  it('renders and matches the snapshot', () => {
    const wrapper = shallow(<Filter />);
    expect(toJSON(wrapper)).toMatchSnapshot();
  });
});
