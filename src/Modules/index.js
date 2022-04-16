import { combineReducers } from 'redux';
import searchForm from './searchForm';
import modal from './modal';
import mouseEvents from './mouseEvents';

const rootReducer = combineReducers({
  searchForm,
  modal,
  mouseEvents,
});

export default rootReducer;
