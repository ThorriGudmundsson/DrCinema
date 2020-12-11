import * as movieService from '../services/movieService';
// import * as upcomingMoviesService from '../services/upcomingMoviesService';
import * as constants from '../constants';

// const storeUpcomingMoviesSuccess = (upcomingMovies) => ({
//   type: constants.UPCOMING_MOVIES,
//   payload: upcomingMovies,
// });

const storeAllMoviesSuccess = (allMovies) => ({
  type: constants.ALL_MOVIES,
  payload: allMovies,
});

// export const storeUpcomingMovies = () => {
//   return async dispatch => {
//     try {
//       const upcomingMovies = await upcomingMoviesService.getAllUpcomingMovies();
//       dispatch(await storeUpcomingMoviesSuccess(upcomingMovies));
//     } catch (err) {
//       // TODO: Should dispatch an error action
//     }
//   };
// };

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
