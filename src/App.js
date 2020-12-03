import React from 'react';
import { Provider } from 'react-redux';
import AppRouter from './routers/AppRouter';
import configureStore from './store/configureStore';
import 'normalize.css/normalize.css';
import './styles/styles.scss';

import { addExpense } from './actions/expenses';

// import Practice from './playground/hoc';

const store = configureStore();

store.dispatch(
   addExpense({
      description: 'Water bill',
      amount: 2400,
      createdAt: 1000,
   })
);
store.dispatch(
   addExpense({
      description: 'Gas bill',
      amount: 6900,
      createdAt: 100,
   })
);
store.dispatch(
   addExpense({
      description: 'Rent',
      amount: 75000,
      createdAt: 900,
   })
);

const App = () => {
   return (
      <Provider store={store}>
         <AppRouter />
      </Provider>
   );
};

export default App;
