import * as movieService from '../services/movieService';
import * as constants from '../constants';

const getMoviesInCinemaSuccess = (moviesInCinema) => ({
  type: constants.GET_ALL_MOVIES_IN_CINEMA,
  payload: moviesInCinema,
});

export const getMoviesInCinema = (cinemaID) => {
  return async dispatch => {
    try {
      const moviesInCinema = await movieService.getAllMoviesByCinemaId(cinemaID);
      // console.log(moviesInCinema);
      dispatch(await getMoviesInCinemaSuccess(moviesInCinema));
    } catch (err) {
      // TODO: Should dispatch an error action
    }
  };
};

// export const getAllMovies = () => async () => {
//   try {
//     const allMovies = await movieService.getAllMovies
//   }
// }

export default getMoviesInCinema;
