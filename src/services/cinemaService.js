import { getJwtToken } from './tokenService';

const cinemaEndpoint = 'https://api.kvikmyndir.is/theaters';

/* export async function getAllCinemas() {
  return fetch(cinemaEndpoint, {
    method: 'GET',
    headers: {
      'x-access-token': await getJwtToken(),
    },
  }).then((cinemas) => cinemas.json()).then((cinemas) => cinemas);
} */
export async function getAllCinemas() {
  const result = await fetch(cinemaEndpoint, { method: 'GET', headers: { 'x-access-token': await getJwtToken() } });
  if (!result.ok) { return []; /* or throw an exception, just something. */ }
  return result.json();
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
