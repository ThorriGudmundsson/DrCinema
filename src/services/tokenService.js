import * as SecureStore from 'expo-secure-store';
import jwtDecode from 'jwt-decode';

const authenticateEndpoint = 'http://api.kvikmyndir.is/authenticate';

// Authorize user and return new 24h token
const authorizeUser = async () => {
  console.log('ababa');
  const response = await fetch(authenticateEndpoint, {
    method: 'POST',
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({
      username: '',
      password: '',
    }),
  });
  console.log(await response.json());
  console.log('THJTHT');
  const data = response.json();
  console.log('YUYUYUY');
  await SecureStore.setItemAsync('user_token', data.token);
  console.log('MGMGMGMG');
  return data.token;
};

// Check if token is expired function
const checkIfExpired = async (token) => {
  const decodedToken = jwtDecode(token);
  // console.log(decodedToken);
  if (Number(decodedToken.exp) / 1000 >= new Date() / 1000) {
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
  console.log(userToken);
  if (userToken === null || await checkIfExpired(userToken)) {
    console.log('adad');
    return authorizeUser();
  }
  return userToken;
};

export default getJwtToken;
