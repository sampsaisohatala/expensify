import moment from 'moment';
import filtersReducer from '../../reducers/filters';

test('should setup default filter values', () => {
   const state = filtersReducer(undefined, { type: '@@INIT' });
   expect(state).toEqual({
      text: '',
      sortBy: 'date',
      startDate: moment().startOf('month'),
      endDate: moment().endOf('month'),
   });
});

test('should setup sortBy to amount', () => {
   const state = filtersReducer(undefined, { type: 'SORT_BY_AMOUNT' });
   expect(state.sortBy).toBe('amount');
});

test('should setup sortBy to date', () => {
   const currentState = {
      text: '',
      sortBy: 'amount',
      startDate: moment().startOf('month'),
      endDate: moment().endOf('month'),
   };
   const state = filtersReducer(currentState, { type: 'SORT_BY_DATE' });
   expect(state.sortBy).toBe('date');
});

test('should set text filter', () => {
   const state = filtersReducer(undefined, { type: 'SET_TEXT_FILTER', text: 'Hola' });
   expect(state.text).toEqual('Hola');
});

test('should set startDate filter', () => {
   const now = moment();
   const state = filtersReducer(undefined, { type: 'SET_START_DATE', startDate: now });
   expect(state.startDate).toEqual(now);
});

test('should set endDate filter', () => {
   const now = moment();
   const state = filtersReducer(undefined, { type: 'SET_END_DATE', endDate: now });
   expect(state.endDate).toEqual(now);
});
