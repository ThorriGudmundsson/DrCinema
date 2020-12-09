import { getJwtToken } from './tokenService';

const cinemaEndpoint = 'http://api.kvikmyndir.is/upcoming';

export async function getAllUpcomingMovies() {
  return fetch(cinemaEndpoint, {
    method: 'GET',
    headers: {
      'x-access-token': await getJwtToken(),
    },
  }).then((upcoming) => upcoming.json());
}

export const getUpcomingMoviesById = async (id) => {
  const upcomingMovies = await getAllUpcomingMovies();
  for (let i = 1; i < upcomingMovies.length + 1; i += 1) {
    if (upcomingMovies[i].id === id) {
      return upcomingMovies[i];
    }
  }
  return undefined;
};
