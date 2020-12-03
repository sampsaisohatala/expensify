import React from 'react';
import { createStore } from 'redux';

// Action genertors - functions that return action objects
const incrementCount = ({ amount = 1 } = {}) => ({
   type: 'INCREMENT',
   amount,
});

const decrementCount = ({ amount = 1 } = {}) => ({
   type: 'DECREMENT',
   amount,
});

const setCount = ({ count }) => ({
   type: 'SET',
   count,
});

const resetCount = () => ({
   type: 'RESET',
});

// Reducers
// 1. Reducers are pure functions
// 2. Never change state or action

const countReducer = (state = { count: 0 }, action) => {
   switch (action.type) {
      case 'INCREMENT':
         return {
            count: state.count + action.amount,
         };
      case 'DECREMENT':
         return {
            count: state.count - action.amount,
         };
      case 'RESET':
         return {
            count: 0,
         };
      case 'SET':
         return {
            count: action.count,
         };
      default:
         return state;
   }
};

const store = createStore(countReducer);

store.subscribe(() => {
   console.log('subscribe', store.getState());
});

// Actions
store.dispatch(incrementCount({ amount: 69 }));

store.dispatch(resetCount());

store.dispatch(decrementCount({ amount: 10 }));

store.dispatch(setCount({ count: 420 }));

export default function redux() {
   return (
      <div>
         <h1>Redux-101</h1>
      </div>
   );
}
