import { getAllCinemas, getCinemaById } from '../services/cinemaService';
import * as constants from '../constants';

const getAllCinemasSuccess = (allCinemas) => ({
  type: constants.GET_ALL_CINEMAS,
  payload: allCinemas,
});

const getCinemaByIdActionSuccess = (cinema) => ({
  type: constants.GET_CINEMA,
  payload: cinema,
});

export const getAllCinemasAction = () => async () => {
  try {
    const allCinemas = await getAllCinemas();
    dispatch(getAllCinemasSuccess(allCinemas));
  } catch (err) {
    // TODO: Should dispatch an error action
  }
};

export const getCinemaByIdAction = async (id, cinemas) => {
  try {
    const cinema = await getCinemaById(id, cinemas)
    dispatch(getCinemaByIdActionSuccess(cinema));
  } catch (e) {
    // TODO: Should dispatch an error action
  }
};
