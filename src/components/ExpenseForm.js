import React, { useState } from 'react';

const ExpenseForm = () => {
   const [description, setDescription] = useState('');
   const [note, setNote] = useState('');
   const [amount, setAmount] = useState('');

   const onDescriptionChange = (e) => {
      setDescription(e.target.value);
   };
   const onNoteChange = (e) => {
      setNote(e.target.value);
   };
   const onAmountChange = (e) => {
      console.log('onAmountChange');
      const amount = e.target.value;
      if (amount.match(/^\d*(\.\d{0,2})?$/)) {
         // regular expression -> https://regex101.com/
         setAmount(amount);
      }
   };

   return (
      <div>
         <h3>Expense form</h3>
         <form>
            <input type="text" placeholder="Description" autoFocus value={description} onChange={onDescriptionChange} />
            <input type="number" placeholder="Amount" value={amount} onChange={onAmountChange} />
            <textarea placeholder="Add a note to your expense (optional)" value={note} onChange={onNoteChange}></textarea>
            <button>Add expense</button>
         </form>
      </div>
   );
};

export default ExpenseForm;
