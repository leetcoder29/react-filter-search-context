import React from 'react';
import { Search } from '../components/Search';
import Adapter from 'enzyme-adapter-react-16';
import toJSON from 'enzyme-to-json';
import { configure, shallow, mount } from 'enzyme';
configure({ adapter: new Adapter() });

describe('<Search />', () => {
  const handleSearchSubmit = jest.fn();
  it('renders', () => {
    shallow(<Search />);
  });

  it('matches the snapshot', () => {
    const wrapper = shallow(<Search />);
    expect(toJSON(wrapper)).toMatchSnapshot();
  });

  // TODO: Unable to mock context on this component
  // it('changes the search input', () => {
  //   const wrapper = mount(<Search />);
  //   wrapper.setContext({ handleSearchSubmit: handleSearchSubmit });
  //   wrapper.find('input').simulate('change', { target: { value: 'magna' } });
  //   wrapper.find('form').simulate('submit');
  // });
});
