import React from 'react';
import { Provider } from 'react-redux';
import AppRouter from './routers/AppRouter';
import configureStore from './store/configureStore';
import { startSetExpenses } from './actions/expenses';
import 'normalize.css/normalize.css';
import './styles/styles.scss';
import 'react-dates/lib/css/_datepicker.css';
import './firebase/firebase';

// Create store
const store = configureStore();

const App = () => {
   store.dispatch(startSetExpenses());
   return (
      <Provider store={store}>
         <AppRouter />
      </Provider>
   );
};

export default App;
