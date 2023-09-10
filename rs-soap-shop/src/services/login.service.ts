import axios from 'axios';
import { apiUrl, authUrl, projectKey, clientId, secret } from '../lib/constants';
import { getActiveCart } from './cart.service';

const HEADERS = {
  Authorization: 'Basic ' + btoa(`${clientId}:${secret}`),
  'Content-Type': 'application/x-www-form-urlencoded'
};

export function getToken(username: string, password: string) {
  return axios.post(
    `${authUrl}/oauth/${projectKey}/customers/token?grant_type=password`,
    { username, password },
    { headers: HEADERS }
  );
}

export async function login(email: string, password: string) {
  try {
    const token = JSON.parse(localStorage.getItem('token')).access_token;
    const anonimousToken = localStorage.getItem('anonimousToken');

    const cart = await getActiveCart(anonimousToken);
    console.log(cart);

    const anonymousCart = { id: cart.data.id, typeId: 'cart' };

    return axios.post(
      `${apiUrl}/${projectKey}/login`,
      { email, password, anonymousCart },
      {
        headers: {
          Authorization: 'Bearer ' + token,
          'Content-Type': 'application/json'
        }
      }
    );
  } catch (error) {
    console.log(error);
  }
}

export function refreshToken() {
  const refreshToken = JSON.parse(localStorage.getItem('token')).refresh_token;
  return axios.post(
    `${authUrl}/oauth/${projectKey}/customers/token?grant_type=refresh_token&refresh_token=${refreshToken}`,
    {},
    { headers: HEADERS }
  );
}
