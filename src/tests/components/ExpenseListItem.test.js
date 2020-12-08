import React from 'react';
import Enzyme, { shallow } from 'enzyme';
import toJSON from 'enzyme-to-json';
import Adapter from '@wojtekmaj/enzyme-adapter-react-17';
import ExpenseListItem from '../../components/ExpenseListItem';
import expensesTestData from '../fixtures/expenses';

Enzyme.configure({
   adapter: new Adapter(),
});

test('should render ExpenseListItem with expense', () => {
   const wrapper = shallow(<ExpenseListItem {...expensesTestData[0]} />);
   expect(toJSON(wrapper)).toMatchSnapshot();
});
