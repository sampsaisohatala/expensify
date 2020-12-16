import { createStore } from 'redux';
import configureMockStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import { addExpense, editExpense, removeExpense, startAddExpense, setExpenses, startSetExpenses, startRemoveExpense, startEditExpense } from '../../actions/expenses';
import expensesTestData from '../fixtures/expenses';
import database from '../../firebase/firebase';

const createMockStore = configureMockStore([thunk]);

beforeEach((done) => {
   const expensesData = {};
   expensesTestData.forEach(({ id, description, amount, note, createdAt }) => {
      expensesData[id] = { description, amount, note, createdAt };
   });
   database
      .ref('expenses')
      .set(expensesData)
      .then(() => done());
});

/// Expense action tests

test('removeExpense action', () => {
   const result = removeExpense({ id: '123abc' });
   expect(result).toEqual({
      type: 'REMOVE_EXPENSE',
      id: '123abc',
   });
});

test('should remove expenses from database', (done) => {
   const store = createMockStore({});
   const id = expensesTestData[1].id;
   store.dispatch(startRemoveExpense({ id })).then(() => {
      const actions = store.getActions();
      expect(actions[0]).toEqual({
         type: 'REMOVE_EXPENSE',
         id,
      });
      return database
         .ref(`expenses/${id}`)
         .once('value')
         .then((snapshot) => {
            expect(snapshot.val()).toBeFalsy();
            done();
         });
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

test('should edit expenses from database', (done) => {
   const store = createMockStore({});
   const id = expensesTestData[0].id;
   const updates = { description: 'Updated description' };
   store.dispatch(startEditExpense(id, updates)).then(() => {
      const actions = store.getActions();
      expect(actions[0]).toEqual({
         type: 'EDIT_EXPENSE',
         id,
         updates,
      });
      return database
         .ref(`expenses/${id}`)
         .once('value')
         .then((snapshot) => {
            expect(snapshot.val()).toEqual({
               description: updates.description,
               amount: expensesTestData[0].amount,
               note: expensesTestData[0].note,
               createdAt: expensesTestData[0].createdAt,
            });
            done();
         });
   });
});

test('addExpense action with values', () => {
   const result = addExpense(expensesTestData[1]);

   expect(result).toEqual({
      type: 'ADD_EXPENSE',
      expense: expensesTestData[1],
   });
});

// remember to add 'done' as argument to make test async
test('should add expense to database and store', (done) => {
   const store = createMockStore({});
   const expenseData = {
      description: 'Candy',
      note: 'Note for myself',
      amount: 1000,
      createdAt: 10000000,
   };
   store
      .dispatch(startAddExpense(expenseData))
      .then(() => {
         const actions = store.getActions();
         expect(actions[0]).toEqual({
            type: 'ADD_EXPENSE',
            expense: {
               id: expect.any(String),
               ...expenseData,
            },
         });
         return database.ref(`expenses/${actions[0].expense.id}`).once('value');
      })
      .then((snapshot) => {
         expect(snapshot.val()).toEqual(expenseData);
         done();
      });
});

test('should add expense with defaaults to database and store', (done) => {
   const store = createMockStore({});
   const expenseDefaults = {
      description: '',
      note: '',
      amount: 0,
      createdAt: 0,
   };
   store
      .dispatch(startAddExpense({}))
      .then(() => {
         const actions = store.getActions();
         expect(actions[0]).toEqual({
            type: 'ADD_EXPENSE',
            expense: {
               id: expect.any(String),
               ...expenseDefaults,
            },
         });
         return database.ref(`expenses/${actions[0].expense.id}`).once('value');
      })
      .then((snapshot) => {
         expect(snapshot.val()).toEqual(expenseDefaults);
         done();
      });
});

test('should set expenses action object with data', () => {
   const action = setExpenses(expensesTestData);
   expect(action).toEqual({
      type: 'SET_EXPENSES',
      expenses: expensesTestData,
   });
});

test('should fetch expenses from firebase', (done) => {
   const store = createMockStore({});
   store.dispatch(startSetExpenses()).then(() => {
      const actions = store.getActions();
      expect(actions[0]).toEqual({
         type: 'SET_EXPENSES',
         expenses: expensesTestData,
      });
      done();
   });
});
