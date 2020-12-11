import { getJwtToken } from './tokenService';

const cinemaEndpoint = 'https://api.kvikmyndir.is/theaters';

export async function getAllCinemas() {
  const result = await fetch(cinemaEndpoint, { method: 'GET', headers: { 'x-access-token': await getJwtToken() } });
  if (!result.ok) { return []; /* or throw an exception, just something. */ }
  return result.json();
}

export const getCinemaById = async (id, cinemas) => {
  for (let i = 0; i < cinemas.length; i += 1) {
    if (cinemas[i].id === id) {
      return cinemas[i];
    }
  }
  return undefined;
};

export const cleanCinemaDescription = async (description) => {
  if (description === null) { return ''; }
  const cleanedDescription = await description.replace(/<\/?[^>]+(>|$)/g, '');
  return cleanedDescription;
};
