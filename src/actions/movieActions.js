import * as movieService from '../services/movieService';
import * as constants from '../constants';

const getMoviesInCinemaSuccess = (moviesInCinema) => ({
  type: constants.GET_ALL_MOVIES_IN_CINEMA,
  payload: moviesInCinema,
});

export const getMoviesInCinema = (cinemaID) => async () => {
  try {
    const moviesInCinema = movieService.getMoviesInCinema(cinemaID);
    dispatch(getMoviesInCinemaSuccess(moviesInCinema));
  } catch (err) {
    // TODO: Should dispatch an error action
  }
};

export default getMoviesInCinema;
