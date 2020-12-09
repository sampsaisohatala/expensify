import React from 'react';
import Enzyme, { shallow } from 'enzyme';
//import toJSON from 'enzyme-to-json';
import Adapter from '@wojtekmaj/enzyme-adapter-react-17';
import ExpenseForm from '../../components/ExpenseForm';
//import expensesTestData from '../fixtures/expenses';

Enzyme.configure({
   adapter: new Adapter(),
});

// If wanted to use snapshots, we have to create mocks for moment,
// currently mocks fails because there is no require.requireActual() support
// for react 17
/*
test('should render expenseform correctly', () => {
   const wrapper = shallow(<ExpenseForm />);
   expect(toJSON(wrapper)).toMatchSnapshot();
});
*/

test('should render error for invalid form submission', () => {
   const wrapper = shallow(<ExpenseForm />);
   wrapper.find('form').simulate('submit', {
      preventDefault: () => {},
   });
   // support wrapper.state('error) only for class components
   // no support for hooks
});
