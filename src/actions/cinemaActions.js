import { getAllCinemas } from '../services/cinemaService';
import * as constants from '../constants';

const getAllCinemasSuccess = (allCinemas) => ({
  type: constants.GET_ALL_CINEMAS,
  payload: allCinemas,
});

// const selectCinemaSuccess = (cinema) => ({
//   type: constants.GET_CINEMA,
//   payload: cinema,
// });

export const getAllCinemasAction = () => async () => {
  try {
    const allCinemas = await getAllCinemas();
    dispatch(getAllCinemasSuccess(allCinemas));
  } catch (err) {
    // TODO: Should dispatch an error action
  }
};

export const selectCinema = (address, city, description, google_map, id, name, phone, website) => ({
  type: constants.SELECT_CINEMA,
  payload: {
    address, city, description, google_map, id, name, phone, website,
  },
});

// export const selectCinema = async (id) => {
//   try {
//     const cinemas = await getAllCinemas();
//     for (let i = 1; i < cinemas.length; i += 1) {
//       if (cinemas[i].id === id) {
//         const cinema = cinemas[i];
//         dispatch(selectCinemaSuccess(cinema));
//         break;
//       }
//     }
//   } catch (e) {
//     // TODO: Should dispatch an error action
//   }
// };
