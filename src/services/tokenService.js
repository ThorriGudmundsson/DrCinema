import * as SecureStore from 'expo-secure-store';
import jwtDecode from 'jwt-decode';

const authenticateEndpoint = 'https://api.kvikmyndir.is/theaters';

// Authorize user and return new 24h token
const authorizeUser = async () => {
  const response = await fetch(authenticateEndpoint, {
    method: 'POST',
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({ username: 'Thorri', password: 'DrCinema3' }),
  });
  const data = await response.json();
  console.log(esponse);

  await SecureStore.setItemAsync('user_token', data.token);

  return data.token;
};

// Check if token is expired function
const checkIfExpired = async (token) => {
  const decodedToken = jwtDecode(token);
  if (Number(decodedToken.exp) >= Date.now() / 1000) {
    return false;
  }
  return true;
};

export const getJwtToken = async () => {
  let userToken;
  try {

    userToken = await SecureStore.getItemAsync('user_token');
  } catch (e) {
    console.log(e);
  }
  if (userToken === null || await checkIfExpired(userToken)) {
    return authorizeUser();
  }
  return userToken;
};

export default getJwtToken;
