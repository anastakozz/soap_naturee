import { introspectToken, refreshToken } from '../../services/registration.service';

async function setRefreshedToken(storageKey: string) {
  const refresh = localStorage.getItem(`${storageKey}Refresh`);
  const newToken = await refreshToken(refresh);
  const dataToSet = JSON.stringify(newToken.data)
  localStorage.setItem(`${storageKey}`, dataToSet);
  console.log('token is refreshed. new token: ' + dataToSet);
  return newToken.data.access_token;
}

export async function getTokenFromStorage() {
  const isLoggedIn = !!localStorage.getItem('token');
  console.log('is loggedIn = ' + isLoggedIn);

  const token = isLoggedIn
    ? JSON.parse(localStorage.getItem('token')).access_token
    : JSON.parse(localStorage.getItem('anonymousToken')).access_token;

  const check = await introspectToken(token);
  console.log('token is ' + token);
  console.log('token is active: ' + check);

  if (check) {
    return token;
  } else if (isLoggedIn) {
    return await setRefreshedToken('token');
  } else {
    return await setRefreshedToken('anonymousToken');
  }
}
