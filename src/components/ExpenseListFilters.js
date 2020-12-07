import React, { useState } from 'react';
import { connect } from 'react-redux';
import { DateRangePicker } from 'react-dates';
import { setTextFilter, sortByDate, sortByAmount, setStartDate, setEndDate } from '../actions/filters';

const ExpenseListFilters = (props) => {
   const [calenderFocused, setCalenderFocused] = useState(null);

   const onDatesChange = ({ startDate, endDate }) => {
      props.dispatch(setStartDate(startDate));
      props.dispatch(setEndDate(endDate));
   };

   const onFocusChange = (calenderFocused) => {
      setCalenderFocused(calenderFocused);
   };

   return (
      <div>
         {/* Text filter */}
         <input
            type="text"
            value={props.filters.text}
            onChange={(e) => {
               console.log(e.target.value);
               props.dispatch(setTextFilter(e.target.value));
            }}
         />
         {/* Sort by */}
         <select
            value={props.filters.sortBy}
            onChange={(e) => {
               if (e.target.value === 'date') {
                  props.dispatch(sortByDate());
               } else if (e.target.value === 'amount') {
                  props.dispatch(sortByAmount());
               }
            }}
         >
            <option value="date">Date</option>
            <option value="amount">Amount</option>
         </select>
         {/* Date filter */}
         <DateRangePicker
            startDate={props.filters.startDate}
            startDateId="your_unique_start_date_id"
            endDate={props.filters.endDate}
            endDateId="your_unique_end_date_id"
            onDatesChange={({ startDate, endDate }) => onDatesChange({ startDate, endDate })}
            focusedInput={calenderFocused}
            onFocusChange={(focusedInput) => onFocusChange(focusedInput)}
            showClearDates={true}
            numberOfMonths={1}
            firstDayOfWeek={1}
            isOutsideRange={() => false}
         />
      </div>
   );
};

const mapStateToProps = (state) => {
   return {
      filters: state.filters,
   };
};

export default connect(mapStateToProps)(ExpenseListFilters);
