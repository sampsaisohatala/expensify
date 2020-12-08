import React from 'react';
import Enzyme, { shallow } from 'enzyme';
import toJSON from 'enzyme-to-json';
import Adapter from '@wojtekmaj/enzyme-adapter-react-17';
import { ExpenseList } from '../../components/ExpenseList';
import expensesTestData from '../fixtures/expenses';

Enzyme.configure({
   adapter: new Adapter(),
});

test('should render ExpenseList with expenses', () => {
   const wrapper = shallow(<ExpenseList expenses={expensesTestData} />);
   expect(toJSON(wrapper)).toMatchSnapshot();
});

test('should render ExpenseList with empty messsage', () => {
   const wrapper = shallow(<ExpenseList expenses={[]} />);
   expect(toJSON(wrapper)).toMatchSnapshot();
});
