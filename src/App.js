import React from 'react';
import { Provider } from 'react-redux';
import AppRouter from './routers/AppRouter';
import configureStore from './store/configureStore';
import 'normalize.css/normalize.css';
import './styles/styles.scss';

import { addExpense } from './actions/expenses';
import { setTextFilter } from './actions/filters';
import getVisibleExpenses from './selectors/expenses';

// import Practice from './playground/hoc';

const store = configureStore();

store.dispatch(
   addExpense({
      description: 'Water bill',
      amount: 69,
   })
);
store.dispatch(
   addExpense({
      description: 'Gas bill',
      amount: 69,
   })
);

const state = store.getState();
const visibleExpenses = getVisibleExpenses(state.expenses, state.filters);
// console.log(visibleExpenses);

const App = () => {
   return (
      <Provider store={store}>
         <AppRouter />
      </Provider>
   );
};

export default App;
