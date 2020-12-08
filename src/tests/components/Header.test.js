import React from 'react';
import Enzyme, { shallow } from 'enzyme';
import toJSON from 'enzyme-to-json';
import Adapter from '@wojtekmaj/enzyme-adapter-react-17';
import Header from '../../components/Header';

Enzyme.configure({
   adapter: new Adapter(),
});

test('should render Header correctly', () => {
   const wrapper = shallow(<Header />);
   expect(toJSON(wrapper)).toMatchSnapshot();
});
