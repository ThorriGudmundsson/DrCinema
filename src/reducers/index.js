import { combineReducers } from 'redux';
import cinemas from './cinemaReducer';
import movies from './movieReducer';
import upcomingMovies from './upcomingMoviesReducer';

export default combineReducers({
  cinemas,
  movies,
  upcomingMovies,
});
