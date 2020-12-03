import React, { useState } from 'react';
import moment from 'moment';
import { SingleDatePicker } from 'react-dates';
import 'react-dates/lib/css/_datepicker.css';
import 'react-dates/initialize';

const ExpenseForm = () => {
   const [description, setDescription] = useState('');
   const [amount, setAmount] = useState('');
   const [createdAt, setCreatedAt] = useState(moment());
   const [calenderFocused, setCalenderFocused] = useState(false);
   const [note, setNote] = useState('');

   const onDescriptionChange = (e) => {
      setDescription(e.target.value);
   };

   const onAmountChange = (e) => {
      console.log('onAmountChange');
      const amount = e.target.value;
      if (amount.match(/^\d*(\.\d{0,2})?$/)) {
         // regular expression -> https://regex101.com/
         setAmount(amount);
      }
   };

   const onDateChange = (createdAt) => {
      setCreatedAt(createdAt);
   };

   const onFocusChange = ({ focused }) => {
      setCalenderFocused(focused);
   };

   const onNoteChange = (e) => {
      setNote(e.target.value);
   };

   return (
      <div>
         <h3>Expense form</h3>
         <form>
            <input type="text" placeholder="Description" autoFocus value={description} onChange={onDescriptionChange} />
            <input type="number" placeholder="Amount" value={amount} onChange={onAmountChange} />
            <SingleDatePicker date={createdAt} onDateChange={onDateChange} focused={calenderFocused} onFocusChange={onFocusChange} numberOfMonths={1} firstDayOfWeek={1} isOutsideRange={() => false} />
            <textarea placeholder="Add a note to your expense (optional)" value={note} onChange={onNoteChange}></textarea>
            <button>Add expense</button>
         </form>
      </div>
   );
};

export default ExpenseForm;
