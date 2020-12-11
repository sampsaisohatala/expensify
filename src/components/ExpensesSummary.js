import React from 'react';
import { connect } from 'react-redux';
import numeral from 'numeral';
import getVisibleExpenses from '../selectors/expenses';
import getExpensesTotal from '../selectors/expenses-total';

export const ExpensesSummary = ({ expensesCount, expensesTotalAmount }) => {
   const expenseWord = expensesCount === 1 ? 'expense' : 'expenses';
   const formattedAmount = numeral(expensesTotalAmount / 100).format('0,0[.]00 $');

   return (
      <div>
         {expensesCount !== 0 && (
            <p>
               Viewing {expensesCount} {expenseWord} totalling {formattedAmount}
            </p>
         )}
      </div>
   );
};

const mapStateToProps = (state) => {
   const visibleExpenses = getVisibleExpenses(state.expenses, state.filters);

   return {
      expensesCount: visibleExpenses.length,
      expensesTotalAmount: getExpensesTotal(visibleExpenses),
   };
};

export default connect(mapStateToProps)(ExpensesSummary);
