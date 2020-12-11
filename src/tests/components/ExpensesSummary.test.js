import React from 'react';
import Enzyme, { shallow } from 'enzyme';
import toJSON from 'enzyme-to-json';
import Adapter from '@wojtekmaj/enzyme-adapter-react-17';
import { ExpensesSummary } from '../../components/ExpensesSummary';

Enzyme.configure({
   adapter: new Adapter(),
});

test('should render expensesSummary without expenses', () => {
   const expensesCount = 0;
   const expensesTotal = 0;
   const wrapper = shallow(<ExpensesSummary expensesCount={expensesCount} expensesTotalAmount={expensesTotal} />);
   expect(toJSON(wrapper)).toMatchSnapshot();
});

test('should render expensesSummary with single expenses', () => {
   const expensesCount = 1;
   const expensesTotal = 663.3;
   const wrapper = shallow(<ExpensesSummary expensesCount={expensesCount} expensesTotalAmount={expensesTotal} />);
   expect(toJSON(wrapper)).toMatchSnapshot();
});

test('should render expensesSummary with multiple expenses', () => {
   const expensesCount = 4;
   const expensesTotal = 9663;
   const wrapper = shallow(<ExpensesSummary expensesCount={expensesCount} expensesTotalAmount={expensesTotal} />);
   expect(toJSON(wrapper)).toMatchSnapshot();
});
