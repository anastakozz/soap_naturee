import { introspectToken, refreshToken } from '../../services/registration.service';
import { tokenNames } from '../enums';
const { userToken, anonymous } = tokenNames;

async function setRefreshedToken(storageKey: string) {
  const refresh = localStorage.getItem(`${storageKey}Refresh`);
  const newToken = await refreshToken(refresh);
  const dataToSet = JSON.stringify(newToken.data);
  localStorage.setItem(`${storageKey}`, dataToSet);
  console.log('token is refreshed. new token: ' + dataToSet);
  return newToken.data.access_token;
}

export async function getTokenFromStorage() {
  const isLoggedIn = !!localStorage.getItem(`${userToken}`);
  console.log('is loggedIn = ' + isLoggedIn);

  const token = isLoggedIn
    ? JSON.parse(localStorage.getItem(`${userToken}`)).access_token
    : JSON.parse(localStorage.getItem(`${anonymous}`)).access_token;

  const check = await introspectToken(token);
  console.log('token is ' + token);
  console.log('token is active: ' + check);

  if (check) {
    return token;
  } else if (isLoggedIn) {
    return await setRefreshedToken(`${userToken}`);
  } else {
    return await setRefreshedToken(`${anonymous}`);
  }
}
