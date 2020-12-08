import React from 'react';
import Enzyme, { shallow } from 'enzyme';
import toJSON from 'enzyme-to-json';
import Adapter from '@wojtekmaj/enzyme-adapter-react-17';
import NotFoundPage from '../../components/NotFoundPage';

Enzyme.configure({
   adapter: new Adapter(),
});

test('should render NotFoundPage correctly', () => {
   const wrapper = shallow(<NotFoundPage />);
   expect(toJSON(wrapper)).toMatchSnapshot();
});
