import React from 'react';
import { Link } from 'react-router-dom';
import moment from 'moment';
import numeral from 'numeral';

// load a locale
numeral.register('locale', 'eu', {
   delimiters: {
      thousands: ' ',
      decimal: ',',
   },
   currency: {
      symbol: '€',
   },
});

// switch between locales
numeral.locale('eu');

const ExpenseListItem = ({ id, description, amount, createdAt }) => (
   <div>
      <Link to={`/edit/${id}`}>
         <h3>{description}</h3>
      </Link>

      <p>
         {numeral(amount / 100).format('0,0[.]00 $')} - {moment(createdAt).format('Do of MMMM, YYYY')}
      </p>
   </div>
);

export default ExpenseListItem;
