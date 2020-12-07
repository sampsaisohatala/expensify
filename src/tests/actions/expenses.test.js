import { addExpense, editExpense, removeExpense } from '../../actions/expenses';

/// Expense action tests

test('removeExpense action', () => {
   const result = removeExpense({ id: '123abc' });
   expect(result).toEqual({
      type: 'REMOVE_EXPENSE',
      id: '123abc',
   });
});

test('editExpense action', () => {
   const result = editExpense('123asd', { amout: 69, note: 'New note value' });
   expect(result).toEqual({
      type: 'EDIT_EXPENSE',
      id: '123asd',
      updates: {
         amout: 69,
         note: 'New note value',
      },
   });
});

test('addExpense action with values', () => {
   const expenseData = {
      description: 'expense1',
      note: 'note1',
      amount: 123,
      createdAt: 1000,
   };
   const result = addExpense(expenseData);

   expect(result).toEqual({
      type: 'ADD_EXPENSE',
      expense: {
         ...expenseData,
         id: expect.any(String),
      },
   });
});

test('addExpense action without values', () => {
   const result = addExpense();
   expect(result).toEqual({
      type: 'ADD_EXPENSE',
      expense: {
         id: expect.any(String),
         description: '',
         amount: 0,
         note: '',
         createdAt: 0,
      },
   });
});
