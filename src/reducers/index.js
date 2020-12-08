import { combineReducers } from 'redux';
import cinemaReducer from './cinemaReducer';
import movieReducer from './movieReducer';

export default combineReducers({
  cinemaReducer,
  movieReducer,
});
