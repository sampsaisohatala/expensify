const getExpensesTotal = (expenses = []) => {
   const amountArray = expenses.map((expense) => expense.amount);
   const total = amountArray.reduce((sum, currentValue) => sum + currentValue, 0);
   return total;
};

export default getExpensesTotal;
