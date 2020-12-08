import { getJwtToken } from './tokenService';

const cinemaEndpoint = 'http://api.kvikmyndir.is/theaters';

export async function getAllCinemas() {
  return fetch(cinemaEndpoint, {
    method: 'GET',
    headers: {
      'x-access-token': await getJwtToken(),
    },
  }).then((cinemas) => cinemas.json()).then((cinemas) => cinemas);
}

export const getCinemaById = async (id) => {
  const cinemas = await getAllCinemas();
  // console.log(cinemas.length);
  // console.log(typeof id);
  for (let i = 1; i < cinemas.length + 1; i += 1) {
    // console.log(cinemas[i].id);
    if (cinemas[i].id === id) {
      // console.log('ATATATA');
      return cinemas[i];
    }
  }
  return undefined;
};
