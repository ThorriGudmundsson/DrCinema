import { getAllCinemas } from '../services/cinemaService';
import * as constants from '../constants';

const getAllCinemasSuccess = (allCinemas) => ({
  type: constants.GET_ALL_CINEMAS,
  payload: allCinemas,
});

const getAllCinemasAction = () => async (dispatch) => {
  try {
    const allCinemas = await getAllCinemas();
    dispatch(getAllCinemasSuccess(allCinemas));
  } catch (err) {
    // TODO: Should dispatch an error action
  }
};

export default getAllCinemasAction;
