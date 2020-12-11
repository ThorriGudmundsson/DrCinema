import * as movieService from '../services/movieService';
import * as constants from '../constants';

const storeAllMoviesSuccess = (allMovies) => ({
  type: constants.ALL_MOVIES,
  payload: allMovies,
});

export const storeAllMovies = () => {
  return async dispatch => {
    try {
      const allMovies = await movieService.getAllMovies();
      dispatch(await storeAllMoviesSuccess(allMovies));
    } catch (err) {
      // TODO: Should dispatch an error action
    }
  };
};
