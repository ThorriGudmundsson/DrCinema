import { getJwtToken } from './tokenService';

const movieEndpoint = 'http://api.kvikmyndir.is/movies';

export async function getAllMovies() {
  return fetch(movieEndpoint, {
    method: 'GET',
    headers: {
      'x-access-token': await getJwtToken(),
    },
  }).then((movies) => movies.json()).then((movies) => movies);
}

export const getAllMoviesByCinemaId = async (cinemaID) => {
  const allMovies = await getAllMovies();
  const moviesInCinema = allMovies.length === 0 ? []
    : await allMovies.filter((m) => m.showtimes.some((s) => s.cinema.id === cinemaID));
  return moviesInCinema;
};
