import moment from 'moment';
import { setStartDate, setEndDate, setTextFilter, sortByAmount, sortByDate } from '../../actions/filters';

test('setStartDate action', () => {
   const result = setStartDate(moment(0));
   expect(result).toEqual({
      type: 'SET_START_DATE',
      startDate: moment(0),
   });
});

test('setEndDate action', () => {
   const result = setEndDate(moment(0));
   expect(result).toEqual({
      type: 'SET_END_DATE',
      endDate: moment(0),
   });
});

test('sortByDate action', () => {
   expect(sortByDate()).toEqual({
      type: 'SORT_BY_DATE',
   });
});

test('sortByAmount action', () => {
   expect(sortByAmount()).toEqual({
      type: 'SORT_BY_AMOUNT',
   });
});

test('setTextFilter with value', () => {
   const text = 'rent';
   const result = setTextFilter(text);
   expect(result).toEqual({
      type: 'SET_TEXT_FILTER',
      text,
   });
});

test('setTextFilter without value', () => {
   const result = setTextFilter();
   expect(result).toEqual({
      type: 'SET_TEXT_FILTER',
      text: '',
   });
});
