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

export default getAllCinemas;
