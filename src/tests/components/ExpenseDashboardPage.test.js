import React from 'react';
import Enzyme, { shallow } from 'enzyme';
import toJSON from 'enzyme-to-json';
import Adapter from '@wojtekmaj/enzyme-adapter-react-17';
import ExpenseDashboardPage from '../../components/ExpenseDashboardPage';

Enzyme.configure({
   adapter: new Adapter(),
});

test('should render ExpenseDashboardPage correctly', () => {
   const wrapper = shallow(<ExpenseDashboardPage />);
   expect(toJSON(wrapper)).toMatchSnapshot();
});
