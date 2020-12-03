import React from 'react';
import ExpenseList from './ExpenseList';
import ExpenseListFilters from './ExpenseListFilters';

const ExpenseDashboardPage = () => (
   <div>
      <h2>Dashboard</h2>
      <ExpenseListFilters />
      <ExpenseList />
   </div>
);

export default ExpenseDashboardPage;
