// import * as movieService from '../services/movieService';
import * as upcomingMoviesService from '../services/upcomingMoviesService';
import * as constants from '../constants';

const storeUpcomingMoviesSuccess = (upcomingMovies) => ({
  type: constants.UPCOMING_MOVIES,
  payload: upcomingMovies,
});

export const storeUpcomingMovies = () => {
  return async dispatch => {
    try {
      const upcomingMovies = await upcomingMoviesService.getAllUpcomingMovies();
      dispatch(await storeUpcomingMoviesSuccess(upcomingMovies));
    } catch (err) {
      // TODO: Should dispatch an error action
    }
  };
};
