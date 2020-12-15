import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
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

ReactDOM.render(<App />, document.getElementById('root'));
