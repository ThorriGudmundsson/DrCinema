import { getJwtToken } from './tokenService';

const ENDPOINT = 'http://api.kvikmyndir.is/movies';

export async function getAllMovies() {
  return fetch(ENDPOINT, {
    method: 'GET',
    headers: {
      'x-access-token': await getJwtToken(),
    },
  }).then((movies) => movies.json()).then((movies) => movies);
}

export const getAllMoviesByCinemaId = async (cinemaID, movies) => {
  const moviesInCinema = movies.length === 0 ? []
    : await movies.filter((m) => m.showtimes.some((s) => s.cinema.id === cinemaID));
  return moviesInCinema;
};

export const getMovieByMongoId = async (movies, mongoId) => {
  for (let i = 0; i < movies.length; i += 1) {
    if (movies[i]['_id'] === mongoId) {
      return movies[i];
    }
  }
  return undefined;
};

export const getMovieShowsInCinema = async (movie, cinema) => {
  for (let i = 0; i < movie.showtimes.length; i += 1) {
    if (movie.showtimes[i].cinema.id === cinema.id) {
      return movie.showtimes[i];
    }
  }
  return undefined;
};
