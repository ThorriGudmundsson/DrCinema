import { combineReducers } from 'redux';
import cinema from './cinemaReducer';
import movies from './movieReducer';

export default combineReducers({
  cinema,
  movies,
});
