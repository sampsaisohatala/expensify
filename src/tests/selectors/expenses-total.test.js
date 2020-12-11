import selectExpensesTotal from '../../selectors/expenses-total';
import expensesTestData from '../fixtures/expenses';

test('should return 0 if no expenses', () => {
   const result = selectExpensesTotal();
   expect(result).toBe(0);
});

test('should correctly add single expense', () => {
   const result = selectExpensesTotal([expensesTestData[0]]);
   expect(result).toBe(expensesTestData[0].amount);
});

test('should correctly add multiple expense', () => {
   const total = expensesTestData[0].amount + expensesTestData[1].amount + expensesTestData[2].amount;
   const result = selectExpensesTotal(expensesTestData);
   expect(result).toBe(total);
});
