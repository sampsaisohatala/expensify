import { createStore, combineReducers, applyMiddleware, compose } from 'redux';
import expensesReducer from '../reducers/expenses';
import filtersReducer from '../reducers/filters';
import thunk from 'redux-thunk';

const composeEnchancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const configureStore = () => {
   // Store creation
   const store = createStore(
      combineReducers({
         expenses: expensesReducer,
         filters: filtersReducer,
      }),
      composeEnchancers(applyMiddleware(thunk))
      //window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
   );
   return store;
};

export default configureStore;
