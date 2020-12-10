import * as cinemaService from '../services/cinemaService';
import * as constants from '../constants';

const storeCinemasSuccess = (allCinemas) => ({
  type: constants.ALL_CINEMAS,
  payload: allCinemas,
});

export const storeCinemas = () => {
  return async dispatch => {
    try {
      const cinemas = await cinemaService.getAllCinemas();
      dispatch(await storeCinemasSuccess(cinemas));
    } catch (err) {
      // TODO: Should dispatch an error action
    }
  };
};

export const selectCinema = (address, city, description, google_map, id, name, phone, website) => ({
  type: constants.SELECT_CINEMA,
  payload: {
    address, city, description, google_map, id, name, phone, website,
  },
});
