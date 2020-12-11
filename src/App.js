import React from 'react';
import { Provider } from 'react-redux';
import AppRouter from './routers/AppRouter';
import configureStore from './store/configureStore';
import 'normalize.css/normalize.css';
import './styles/styles.scss';
import 'react-dates/lib/css/_datepicker.css';
import numeral from 'numeral';

// Numeral settings
numeral.register('locale', 'eu', {
   delimiters: {
      thousands: ' ',
      decimal: ',',
   },
   currency: {
      symbol: '€',
   },
});
numeral.locale('eu');

// Create store
const store = configureStore();

const App = () => {
   return (
      <Provider store={store}>
         <AppRouter />
      </Provider>
   );
};

export default App;
