import { combineReducers } from 'redux';
import currenciesReducer from '../../modules/currencies/currenciesReducer';

const rootReducer = combineReducers({
  currenciesReducer  
});
export default rootReducer;