import { getJwtToken } from './tokenService';

const cinemaEndpoint = 'http://api.kvikmyndir.is/authenticate';

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
  for (let i = 1; i < cinemas.length + 1; i += 1) {
    if (cinemas[i].id === id) {
      return cinemas[i];
    }
  }
  return undefined;
};
