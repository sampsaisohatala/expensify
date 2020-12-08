import moment from 'moment';
import selectExpenses from '../../selectors/expenses';
import expensesTestData from '../fixtures/expenses';

test('should filter by text value', () => {
   const filtersTestData = {
      text: 'e',
      sortBy: 'date',
      startDate: undefined,
      endDate: undefined,
   };
   const result = selectExpenses(expensesTestData, filtersTestData);
   expect(result).toEqual([expensesTestData[1], expensesTestData[0]]);
});

test('should filter by start date value', () => {
   const filtersTestData = {
      text: '',
      sortBy: 'date',
      startDate: moment(0).add(1, 'day'),
      endDate: undefined,
   };
   const result = selectExpenses(expensesTestData, filtersTestData);
   expect(result).toEqual([expensesTestData[2], expensesTestData[1]]);
});

test('should filter by end date value', () => {
   const filtersTestData = {
      text: '',
      sortBy: 'date',
      startDate: undefined,
      endDate: moment(0).add(4, 'day'),
   };
   const result = selectExpenses(expensesTestData, filtersTestData);
   expect(result).toEqual([expensesTestData[1], expensesTestData[0]]);
});

test('should sort by date', () => {
   const filtersTestData = {
      text: '',
      sortBy: 'date',
      startDate: undefined,
      endDate: undefined,
   };
   const result = selectExpenses(expensesTestData, filtersTestData);
   expect(result).toEqual([expensesTestData[2], expensesTestData[1], expensesTestData[0]]);
});

test('should sort by amount', () => {
   const filtersTestData = {
      text: '',
      sortBy: 'amount',
      startDate: undefined,
      endDate: undefined,
   };
   const result = selectExpenses(expensesTestData, filtersTestData);
   expect(result).toEqual([expensesTestData[1], expensesTestData[2], expensesTestData[0]]);
});
