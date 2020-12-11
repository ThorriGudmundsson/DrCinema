import { getJwtToken } from './tokenService';

const ENDPOINT = 'https://api.kvikmyndir.is/upcoming';

export async function getAllUpcomingMovies() {
  return fetch(ENDPOINT, {
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


export const getYoutubeIDFromURL = async (url) => {
  let ID = '';
  url = url.replace(/(>|<)/gi, '').split(/(vi\/|v=|\/v\/|youtu\.be\/|\/embed\/)/);
  if (url[2] !== undefined) {
    ID = url[2].split(/[^0-9a-z_\-]/i);
    ID = ID[0];
  } else {
    ID = url;
  }
  return ID;
};
