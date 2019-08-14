import React from 'react';
import { Results } from '../components/Results';
import Adapter from 'enzyme-adapter-react-16';
import toJSON from 'enzyme-to-json';
import { configure, mount } from 'enzyme';
configure({ adapter: new Adapter() });

describe('<Results />', () => {
  // TODO: Mock the context provider for proper mounting
  // it('renders', () => {
  //   const wrapper = mount(<Results />);
  //   wrapper.setContext({ searchState: {} });
  // });
  // it('matches the snapshot', () => {
  //   const wrapper = mount(<Results />);
  //   expect(toJSON(wrapper)).toMatchSnapshot();
  // });
});
