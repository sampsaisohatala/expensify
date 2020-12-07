import moment from 'moment';
import selectExpenses from '../../selectors/expenses';

const expensesTestData = [
   {
      id: 'id1',
      description: 'Coffee',
      note: '',
      amount: 195,
      createdAt: 0,
   },
   {
      id: 'id2',
      description: 'Rent',
      note: 'note',
      amount: 295000,
      createdAt: moment(0).add(4, 'days').valueOf(),
   },
   {
      id: 'id3',
      description: 'Car',
      note: '',
      amount: 6000,
      createdAt: moment(0).add(12, 'days').valueOf(),
   },
];

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
