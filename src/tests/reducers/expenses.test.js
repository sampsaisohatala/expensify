import expensesReducer from '../../reducers/expenses';
import expensesTestData from '../fixtures/expenses';

/// Expenses Reducer tests

test('should setup default expenses values', () => {
   const state = expensesReducer(undefined, { type: '@@INIT' });
   expect(state).toEqual([]);
});

test('should remove expense by id', () => {
   const action = { type: 'REMOVE_EXPENSE', id: expensesTestData[1].id };
   const state = expensesReducer(expensesTestData, action);
   expect(state).toEqual([expensesTestData[0], expensesTestData[2]]);
});

test('should not remove expense if id not found', () => {
   const action = { type: 'REMOVE_EXPENSE', id: 'falseID' };
   const state = expensesReducer(expensesTestData, action);
   expect(state).toEqual(expensesTestData);
});

test('should add expense', () => {
   const expense = {
      id: 'id4',
      description: 'des',
      note: '',
      amount: 55555,
      createdAt: 0,
   };
   const action = { type: 'ADD_EXPENSE', expense };
   const state = expensesReducer(expensesTestData, action);
   expect(state).toEqual([...expensesTestData, expense]);
});

test('should edit an expense', () => {
   const text = 'New note text';
   const action = { type: 'EDIT_EXPENSE', id: expensesTestData[0].id, updates: { note: text } };
   const state = expensesReducer(expensesTestData, action);
   expect(state[0].note).toBe(text);
});

test('should not edit an expense if no id', () => {
   const text = 'New note text';
   const action = { type: 'EDIT_EXPENSE', id: 'abc123', updates: { note: text } };
   const state = expensesReducer(expensesTestData, action);
   expect(state).toEqual(expensesTestData);
});

test('should set expenses', () => {
   const action = { type: 'SET_EXPENSES', expenses: [expensesTestData[1]] };
   const state = expensesReducer([], action);
   expect(state).toEqual([expensesTestData[1]]);
});
