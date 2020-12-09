import React, { useState } from 'react';
import moment from 'moment';
import { SingleDatePicker } from 'react-dates';
import 'react-dates/initialize';

const ExpenseForm = (props) => {
   const [description, setDescription] = useState(props.expense ? props.expense.description : '');
   const [note, setNote] = useState(props.expense ? props.expense.note : '');
   const [amount, setAmount] = useState(props.expense ? (props.expense.amount / 100).toString() : '');
   const [createdAt, setCreatedAt] = useState(props.expense ? moment(props.expense.createdAt) : moment());
   const [calenderFocused, setCalenderFocused] = useState(false);
   const [error, setError] = useState('');

   const onDescriptionChange = (e) => {
      setDescription(e.target.value);
   };
   const onAmountChange = (e) => {
      const amount = e.target.value;
      if (!amount || amount.match(/^\d{1,}(\.\d{0,2})?$/)) {
         // regular expression -> https://regex101.com/
         setAmount(amount);
      }
   };

   const onDateChange = (createdAt) => {
      if (createdAt) setCreatedAt(createdAt);
   };

   const onFocusChange = ({ focused }) => {
      setCalenderFocused(focused);
   };

   const onNoteChange = (e) => {
      setNote(e.target.value);
   };

   const onSubmit = (e) => {
      e.preventDefault();

      if (!description || !amount) {
         setError('Please provide description and amount.');
      } else {
         setError('');
         props.onSubmit({
            description,
            amount: parseFloat(amount, 10) * 100,
            createdAt: createdAt.valueOf(),
            note,
         });
      }
   };

   return (
      <div>
         {error && <p>{error}</p>}
         <form onSubmit={onSubmit}>
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
